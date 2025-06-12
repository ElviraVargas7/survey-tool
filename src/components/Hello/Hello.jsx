import './Hello.scss';

import React from 'react';

const Hello = ({ message }) => {
  return (
    <div className="hello">
      <h1 className="hello__message">{message}</h1>
    </div>
  );
};

export default Hello;
