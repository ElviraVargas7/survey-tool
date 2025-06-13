'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Box, Typography } from '@mui/material';

import MemberInput from '@/components/MemberInput/MemberInput';
import MembersTable from '@/components/MembersTable/MembersTable';
import QuestionAverage from '@/components/QuestionAverage/QuestionAverage';
import { downloadReport, getAnalysis } from '@/redux/actions/answersActions';
import { selectAverageAnalysis } from '@/redux/reducers/answersReducer';
import { getMembers } from '@/redux/actions/membersActions';
import { selectCurrentMembers } from '@/redux/reducers/membersReducer';
import { useDispatch, useSelector } from 'react-redux';

const HomePage = () => {
  const dispatch = useDispatch();

  const members = useSelector(selectCurrentMembers);
  const analysis = useSelector(selectAverageAnalysis);

  const isSurveyComplete =
    analysis.length > 0 &&
    analysis.filter((item) => item.responses < 3).length == 0;

  useEffect(() => {
    console.log('calling members');
    dispatch(getMembers());
    dispatch(getAnalysis());
  }, [dispatch]);

  const handleDownloadReport = async () => {
    const { downloadReportSuccessful } = await dispatch(downloadReport());
    if (!downloadReportSuccessful) {
      alert('Failed to download the report.');
    }
  };

  return (
    <main>
      <MemberInput members={members} />

      <MembersTable members={members} />

      {isSurveyComplete ? (
        <>
          {analysis.map((item, index) => {
            return (
              <div key={index}>
                <QuestionAverage
                  key={item.question}
                  question={item.question}
                  average={item.average_rate}
                />
              </div>
            );
          })}
          <Button onClick={handleDownloadReport}>Download report</Button>
        </>
      ) : (
        <Typography>There are still members without answering</Typography>
      )}
    </main>
  );
};

export default HomePage;
