import React from 'react';
import { Typography } from '@mui/material';
import { MUITimeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '../mui-index';

import './timeline.scss';

const Timeline = ({ title, icon, children }) => {
  return (
    <MUITimeline className={"timeline"}>
      {/* Header */}
      <TimelineItem className={"timeline-firstItem"}>
        <TimelineSeparator>
          <TimelineDot className={"timeline-dot-header"}>{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant='h6' className={"timeline-header"}>{title}</Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Contents */}
      {children}
    </MUITimeline>
  )
};

export const CustomTimelineSeparator = () => (
  <TimelineSeparator className={"separator-padding"}>
    <TimelineDot variant={"outlined"} className={"timeline-dot"} />
    <TimelineConnector />
  </TimelineSeparator>
);

export default Timeline;
