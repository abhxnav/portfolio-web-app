import React from 'react';
import { Typography } from '@material-ui/core';

import data from '../../utils/data';

import './footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <Typography className="footer-name">{data.name}</Typography>
      </div>
      <div className="footer-right">
        <Typography className="footer-credits">
          Design Ideas from <a href="https://dribbble.com/" target="_blank" rel="noreferrer">Dribbble</a> & <a href="https://www.deviantart.com/" target="_blank" rel="noreferrer">DeviantArt</a> .
        </Typography>
      </div>
    </div>
  )
}

export default Footer;
