import React from 'react';

const QuestionAverage = ({ question, average }) => {
  return (
    <>
      <h2>{question}</h2>
      <p>{average}</p>
    </>
  );
};

export default QuestionAverage;
