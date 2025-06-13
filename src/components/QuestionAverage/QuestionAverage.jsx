import './QuestionAverage.scss';
import React from 'react';

const QuestionAverage = ({ question, average }) => {
  return (
    <div className="question-average">
      <h2 className="question-average__question">{question}</h2>
      <p className="question-average__value">{average}</p>
    </div>
  );
};

export default QuestionAverage;
