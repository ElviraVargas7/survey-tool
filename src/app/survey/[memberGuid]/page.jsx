'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Question from '@/components/Question/Question';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestions } from '@/redux/actions/questionsActions';
import { selectQuestions } from '@/redux/reducers/questionsReducer';
import { getMemberDetails } from '@/redux/actions/membersActions';
import { selectMemberDetails } from '@/redux/reducers/membersReducer';
import { Button, Typography } from '@mui/material';
import { submitAnswers } from '@/redux/actions/answersActions';

export default function SurveyPage() {
  const { memberGuid } = useParams();
  const dispatch = useDispatch();

  const questions = useSelector(selectQuestions);
  const memberDetails = useSelector(selectMemberDetails);

  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    dispatch(getMemberDetails(memberGuid));
    dispatch(getQuestions());
  }, [dispatch, memberGuid]);

  const handleAnswersChange = (questionId, rate) => {
    setAnswers((prev) => {
      const existing = prev.find((ans) => ans.questionId === questionId);
      if (existing) {
        return prev.map((ans) =>
          ans.questionId === questionId ? { ...ans, rate } : ans
        );
      } else {
        return [...prev, { questionId, rate }];
      }
    });
  };

  const handleSubmitAnswers = () => {
    console.log('answers', answers);
    dispatch(submitAnswers(memberDetails.id, answers));
  };

  console.log('memberDetails', memberDetails);

  return (
    <main>
      {memberDetails.has_answers ? (
        <Typography>We've received your answer</Typography>
      ) : (
        <>
          <h1>Survey for {memberDetails.name}</h1>
          {questions ? (
            questions.map((item) => {
              return (
                <Question
                  key={item.id}
                  questionId={item.id}
                  questionText={item.question}
                  onAnswer={handleAnswersChange}
                />
              );
            })
          ) : (
            <p>Loading...</p>
          )}

          {answers.length === questions?.length && (
            <Button onClick={handleSubmitAnswers}>Submit Answers</Button>
          )}
        </>
      )}
    </main>
  );
}
