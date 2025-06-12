import React from 'react';

import MemberInput from '@/components/MemberInput/MemberInput';
import MembersTable from '@/components/MembersTable/MembersTable';

const HomePage = () => {
  return (
    <main>
      <MemberInput />
      <MembersTable />
    </main>
  );
};

export default HomePage;
