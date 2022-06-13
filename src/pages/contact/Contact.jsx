import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Grid, Typography, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { withStyles } from '@material-ui/core';

import { CustomButton } from '../../components/components-index';
import data from '../../utils/data';

import './contact.scss';


const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#abd699',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#abd699',
      },
    },
  },
})(TextField);


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(data.emailService.serviceID, data.emailService.templateID, form.current, data.emailService.publicKey)
    e.target.reset();
    alert('Message sent! 📨')
  };

  return (
    <Grid container className="contact">
      {/* Contact Form */}
      <Grid item>
        <Grid container>
          <Grid item className="section-title contact-form">
            <span></span>
            <h6 className="section-title-text">Contact Form</h6>
          </Grid>
          <Grid item xs={12}>
            <form ref={form} onSubmit={sendEmail}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <CssTextField
                    name="name"
                    label="Name"
                    InputLabelProps={{ style: { color: '#fff' } }}
                    InputProps={{ style: { color: 'rgb(200, 200, 200)' } }}
                    required
                    fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CssTextField
                    name="email"
                    label="E-mail"
                    InputLabelProps={{ style: { color: '#fff' } }}
                    InputProps={{ style: { color: 'rgb(200, 200, 200)' } }}
                    required
                    fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <CssTextField
                    name="message"
                    label="Message"
                    multiline rows={5}
                    InputLabelProps={{ style: { color: '#fff' } }}
                    InputProps={{ style: { color: 'rgb(200, 200, 200)' } }}
                    required
                    fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <CustomButton text="Send" icon={<SendIcon />} type="submit" />
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>

      {/* Contact Info */}
      <Grid item>
        <Grid container>
          <Grid item className="section-title contact-info-title">
            <span></span>
            <h6 className="section-title-text">Contact Details</h6>
          </Grid>

          <div className="contact-info-container">
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography className="contact-info-item">
                    <span>Address :  </span> {data.address}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contact-info-item">
                    <span>Phone :  </span> {data.phone}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contact-info-item">
                    <span>E-mail :  </span> {data.email}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contact-info-item">
                    <span>Skype :  </span> {data.socials['skype'].text}
                  </Typography>
                </Grid>
                <Grid item xs={12} className="contact-info-socials">
                  <Grid container>
                    <a href={data.whatsApp.link} target="_blank" rel="noreferrer">{data.whatsApp.icon}</a>
                    {Object.keys(data.socials).map(key => (
                      <Grid item>
                        <a href={data.socials[key].link} target="_blank" rel="noreferrer">{data.socials[key].icon}</a>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>

      {/* Map */}
      <Grid item xs={12} className="map-container">
        <iframe
          title="My Daily Marathon Tracker"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d859.8809082873852!2d78.0770665292145!3d29.935383898870132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390948f776ba4f23%3A0x984d72d506c73692!2sS-263%2C%20S%20Block%2C%20S%20Cluster%2C%20Ganga%20Nagar%2C%20Haridwar%2C%20Uttarakhand%20249403!5e1!3m2!1sen!2sin!4v1655064076291!5m2!1sen!2sin"
          className="map"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </Grid>
    </Grid>
  )
}

export default Contact;
