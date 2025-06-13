import { deleteMember } from '@/redux/actions/membersActions';
import { Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';

const ActionsButtons = ({ memberEmail }) => {
  const dispatch = useDispatch();

  const handleDeleteMember = () => {
    console.log(memberEmail);
    dispatch(deleteMember(memberEmail));
  };

  return (
    <div>
      <Button variant="outlined" color="error" onClick={handleDeleteMember}>
        Delete
      </Button>
    </div>
  );
};

export default ActionsButtons;
