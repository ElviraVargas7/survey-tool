import { createMember } from '@/redux/actions/membersActions';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input, Button } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const MemberInput = () => {
  const dispatch = useDispatch();
  const [newMemberGuid, setNewMemberGuid] = useState(uuidv4());
  const [member, setMember] = useState({
    id: newMemberGuid,
    name: null,
    email: null,
    has_answers: false,
  });

  const handleCreateMember = async (event) => {
    console.log('click');
    event.preventDefault();
    const { setNewMemberSuccessful } = await dispatch(createMember(member));
    setNewMemberGuid(uuidv4());
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
      <Input type="text" placeholder="Names" onChange={handleNamesChange} />
      <Input type="email" placeholder="Email" onChange={handleEmailChange} />
      <Button
        variant="contained"
        onClick={handleCreateMember}
        disabled={!member.email || !member.name}
      >
        Create
      </Button>
    </div>
  );
};

export default MemberInput;
