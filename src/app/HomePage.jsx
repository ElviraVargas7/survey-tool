'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button, Box } from '@mui/material';

import MemberInput from '@/components/MemberInput/MemberInput';
import MembersTable from '@/components/MembersTable/MembersTable';

const HomePage = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push(`/analytics`);
  };

  return (
    <main>
      <MemberInput />
      <MembersTable />

      <Box mt={4}>
        <Button variant="contained" color="primary" onClick={handleRedirect}>
          Go to Analytics
        </Button>
      </Box>
    </main>
  );
};

export default HomePage;
