import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import { TimelineItem, TimelineContent, TimelineDot } from '@material-ui/lab';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';

import { Timeline, CustomTimelineSeparator } from '../../components/components-index';

import data from '../../utils/data';
import './about.scss';

const About = () => {
  return (
    <>
      {/* About Me */}
      <Grid container className="about-section">
        <Grid item className="section-title">
          <span></span>
          <h6 className="section-title-text">About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography className="about-me-text">{data.about}</Typography>
        </Grid>
      </Grid>

      {/* Timeline */}
      <Grid container className="timeline-section">
        <Grid item xs={12}>
          <Grid container className="timeline">
            {/* Education */}
            <Grid item sm={12} md={6}>
              <Timeline title="Education" icon={<SchoolIcon />}>
                {data.education.map((education) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className="timeline-content">
                      <Typography className="timeline-title">{education.title}</Typography>
                      <Typography variant="caption" className="timeline-date">{education.date}</Typography>
                      <Typography variant="body2" className="timeline-description">{education.description}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Grid>

            {/* Experience */}
            <Grid item sm={12} md={6}>
              <Timeline title="Work Experience" icon={<WorkIcon />}>
                {data.experience.map((experience) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className="timeline-content">
                      <Typography className="timeline-title">{experience.title}</Typography>
                      <Typography variant="caption" className="timeline-date">{experience.date}</Typography>
                      <Typography variant="body2" className="timeline-description">{experience.description}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Skills */}
      <Grid container spacing={3} className="skills-section ">
        {data.skills.map(skill => (
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={10} className="skills">
              <Typography variant="h6" className="skills-title">{skill.title}</Typography>
              {skill.description.map((element) => (
                <Typography variant="body2" className="skills-description">
                  <TimelineDot variant={"outlined"} className="timeline-dot" />
                  {element}
                </Typography>
              ))}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default About;