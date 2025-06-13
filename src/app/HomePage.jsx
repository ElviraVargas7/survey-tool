'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Box } from '@mui/material';

import MemberInput from '@/components/MemberInput/MemberInput';
import MembersTable from '@/components/MembersTable/MembersTable';
import { getMembers } from '@/redux/actions/membersActions';
import { selectCurrentMembers } from '@/redux/reducers/membersReducer';
import { useDispatch, useSelector } from 'react-redux';

const HomePage = () => {
  const router = useRouter();
  const members = useSelector(selectCurrentMembers);
  const dispatch = useDispatch();

  const handleRedirect = () => {
    router.push(`/analytics`);
  };

  useEffect(() => {
    console.log('calling members');
    dispatch(getMembers());
  }, [dispatch]);

  console.log('members', members);

  return (
    <main>
      <MemberInput members={members} />
      <MembersTable members={members} />

      <Box mt={4}>
        <Button variant="contained" color="primary" onClick={handleRedirect}>
          Go to Analytics
        </Button>
      </Box>
    </main>
  );
};

export default HomePage;
