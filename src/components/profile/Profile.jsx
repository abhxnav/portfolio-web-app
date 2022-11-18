import React from "react";
import { saveAs } from "file-saver";
import { Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import GetAppIcon from "@mui/icons-material/GetApp";

import {
  Timeline,
  CustomTimelineSeparator,
  CustomButton,
} from "../components-index";
import { TimelineItem, TimelineContent } from "../mui-index";
import data from "../../utils/data";

import "./profile.scss";

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className="timeline-content">
      {link ? (
        <Typography className="timeline-text">
          <span>{title}: </span>
          <a href={link} target="_blank" rel="noreferrer">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timeline-text">
          <span>{title}</span>: {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const saveFile = () => {
  saveAs(data.resume, "Abhinav_Kashyap_Resume.pdf");
};

const Profile = () => {
  return (
    <div className="profile container-shadow">
      <div className="profile-name">
        <Typography className="name">{data.name}</Typography>
        <Typography className="title">{data.title}</Typography>
      </div>

      <figure className="profile-image">
        <img src={data.photo} alt="" />
      </figure>

      <div className="profile-info">
        <Timeline icon={<PersonIcon />}>
          <CustomTimelineItem title="Name" text={data.name} />
          <CustomTimelineItem title="Email" text={data.email} />
          <CustomTimelineItem title="Phone No." text={data.phone} />
          <CustomTimelineItem title="D.O.B." text={data.dob} />
          <CustomTimelineItem title="Location" text={data.location} />
        </Timeline>
        <div className="btn-container">
          <CustomButton
            text={"Download Resume"}
            icon={<GetAppIcon />}
            onClick={saveFile}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
