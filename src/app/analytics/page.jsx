'use client';

import QuestionAverage from '@/components/QuestionAverage/QuestionAverage';
import { getAnalysis } from '@/redux/actions/answersActions';
import { selectAverageAnalysis } from '@/redux/reducers/answersReducer';
import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Analytics() {
  const dispatch = useDispatch();
  const analysis = useSelector(selectAverageAnalysis);

  const isSurveyComplete = true;

  useEffect(() => {
    console.log('calling members');
    dispatch(getAnalysis());
  }, [dispatch]);

  return (
    <main>
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
          <button>Download report</button>
        </>
      ) : (
        <Typography>There are still members without answering</Typography>
      )}
    </main>
  );
}
