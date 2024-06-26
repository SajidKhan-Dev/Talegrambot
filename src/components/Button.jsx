import React, { useState } from 'react';

const Button = ({ onClick }) => {
  return (
    <button className="big-circle-button" onClick={onClick}>
      Click Me!
    </button>
  );
};

export default Button;
