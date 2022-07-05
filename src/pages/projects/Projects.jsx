import { React, useState } from "react";
import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import ImageGallery from "../../components/image-gallery/ImageGallery";
import data from "../../utils/data";

import "./projects.scss";

const Projects = () => {
  // const [tabValue, setTabValue] = useState('All');
  const [projectDialog, setProjectDialog] = useState(false);

  const ProjectDialog = () => (
    <Dialog
      open={projectDialog}
      onClose={() => setProjectDialog(false)}
      className="projectDialog"
      fullWidth
    >
      <DialogTitle
        onClose={() => setProjectDialog(false)}
        className="projectDialog-title"
      >
        {projectDialog.title}
      </DialogTitle>
      <DialogContent>
        {projectDialog.images && <ImageGallery images={projectDialog.images} />}
        <Typography className="projectDialog-description">
          {projectDialog.description}
        </Typography>
      </DialogContent>
      <DialogActions className="projectDialog-actions">
        {projectDialog?.links?.map((link) => (
          <a
            href={link.link}
            target="_blank"
            rel="noreferrer"
            className="projectDialog-icon"
          >
            {link.icon}
          </a>
        ))}
      </DialogActions>
    </Dialog>
  );

  return (
    <Grid container className="section">
      {/* <Grid item xs={12} className="tabs-container">
        <Tabs
          value={tabValue}
          indicatorColor="white"
          className="custom-tabs"
          onChange={(event, newValue) => setTabValue(newValue)}>
          <Tab label="All" value="All" className={tabValue === "All" ? "custom-tabs-item active" : "custom-tabs-item"} />

          {[...new Set(data.projects.map(item => item.tag))].map(tag => (
            <Tab label={tag} value={tag} className={tabValue === tag ? "custom-tabs-item active" : "custom-tabs-item"} />
          ))}
        </Tabs>
      </Grid> */}

      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={3} className="projects-container">
          {data.projects.map((project) => (
            <>
              {/* {tabValue === project.tag || tabValue === 'All' ? ( */}
              <Grid item xs={12} sm={6} md={4}>
                <Grow in timeout={1000}>
                  <Card
                    className="project-card"
                    onClick={() => setProjectDialog(project)}
                  >
                    <CardActionArea>
                      <CardMedia
                        className="project-card-image"
                        image={project.images}
                        title={project.title}
                      />
                      <CardContent>
                        <Typography
                          variant="body2"
                          className="project-card-title"
                        >
                          {project.title}
                        </Typography>
                        <Typography
                          variant="caption"
                          className="project-card-caption"
                        >
                          {project.caption}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grow>
              </Grid>
              {/* ) : null} */}
            </>
          ))}
        </Grid>
      </Grid>
      <ProjectDialog />
    </Grid>
  );
};

export default Projects;
