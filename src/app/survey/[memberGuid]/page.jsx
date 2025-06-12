'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Question from '@/components/Question/Question';

export default function SurveyPage() {
  const { memberGuid } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    if (memberGuid) {
      console.log('guid', memberGuid);
      setData(memberGuid);
    }
  }, [memberGuid]);

  return (
    <main>
      <h1>Survey for {memberGuid}</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}

      <Question question={'Question??'} />
    </main>
  );
}
