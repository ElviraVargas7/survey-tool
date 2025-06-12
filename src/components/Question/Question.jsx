import React from 'react';
import StarRate from '../StarRate/StarRate';

const Question = ({ question }) => {
  return (
    <div>
      <h2>{question}</h2>
      <StarRate />
    </div>
  );
};

export default Question;
