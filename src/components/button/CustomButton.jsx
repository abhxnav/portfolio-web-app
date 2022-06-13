import React from 'react';
import { Button } from '@material-ui/core';

import './customButton.scss';

const CustomButton = ({ text, icon, onClick, type }) => {
  return (
    <Button className="btn" endIcon={icon ? <div className="btn-icon">{icon}</div> : null} onClick={onClick} type={type}>
      <span className="btn-text">{text}</span>
    </Button>
  );
};

export default CustomButton;
