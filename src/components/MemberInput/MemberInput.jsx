import { createMember } from '@/redux/actions/membersActions';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input, Button, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const MemberInput = ({ members }) => {
  const dispatch = useDispatch();
  const isMaxMembersLength = members.length >= 3;
  const [member, setMember] = useState({
    id: uuidv4(),
    name: '',
    email: '',
    has_answers: false,
  });

  const handleCreateMember = async (event) => {
    console.log('click');
    event.preventDefault();
    const { setNewMemberSuccessful } = await dispatch(createMember(member));
    setMember({
      id: uuidv4(),
      name: '',
      email: '',
      has_answers: false,
    });
  };

  const handleNamesChange = (event) => {
    setMember({
      ...member,
      name: event.target.value,
    });
  };

  const handleEmailChange = (event) => {
    setMember({
      ...member,
      email: event.target.value,
    });
  };

  return (
    <div>
      <Input
        type="text"
        placeholder="Names"
        value={member.name}
        onChange={handleNamesChange}
      />
      <Input
        type="email"
        placeholder="Email"
        value={member.email}
        onChange={handleEmailChange}
      />
      <Button
        variant="contained"
        onClick={handleCreateMember}
        disabled={member.email == '' || member.name == '' || isMaxMembersLength}
      >
        Create
      </Button>
      {isMaxMembersLength && (
        <Typography gutterBottom sx={{ color: 'red', fontSize: 14 }}>
          You've reached max amount of members
        </Typography>
      )}
    </div>
  );
};

export default MemberInput;
