'use client';

import QuestionAverage from '@/components/QuestionAverage/QuestionAverage';
import React, { useEffect, useState } from 'react';

export default function Analytics() {
  const analysis = [
    {
      question: 'question 1',
      average: 2,
    },
    {
      question: 'question 2',
      average: 3.5,
    },
    {
      question: 'question 3',
      average: 4.5,
    },
  ];

  return (
    <main>
      {analysis.map((item) => {
        return (
          <>
            <QuestionAverage
              key={item.question}
              question={item.question}
              average={item.average}
            />
          </>
        );
      })}
      <button>Download report</button>
    </main>
  );
}
