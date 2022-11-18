import { React, useState } from 'react';
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
} from '@mui/material';

import data from '../../utils/data';

import './blog.scss';

const Blog = () => {
  const [blogDialog, setBlogDialog] = useState(false);

  const BlogDialog = () => (
    <Dialog
      open={blogDialog}
      onClose={() => setBlogDialog(false)}
      className="blogDialog"
      fullWidth
    >
      <DialogTitle
        onClose={() => setBlogDialog(false)}
        className="blogDialog-title"
        style={{ backgroundColor: 'rgb(40,40,40)' }}
      >
        {blogDialog.title}
      </DialogTitle>
      <img src={blogDialog.image} alt="" className="blogDialog-image" />

      <DialogContent style={{ backgroundColor: 'rgb(40,40,40)' }}>
        <Typography className="blogDialog-description">
          {blogDialog.description}
        </Typography>
      </DialogContent>
      <DialogActions
        className="blogDialog-actions"
        style={{ backgroundColor: 'rgb(40,40,40)', paddingBottom: '20px' }}
      >
        {blogDialog?.links?.map((link) => (
          <a
            href={link.link}
            target="_blank"
            rel="noreferrer"
            className="blogDialog-icon"
          >
            {link.icon}
          </a>
        ))}
      </DialogActions>
    </Dialog>
  );

  return (
    <Grid container className="section">
      {/* Blogs */}
      <Grid item xs={12}>
        <Grid container spacing={3} className="blogs-container">
          {data.blogs.map((blog) => (
            <>
              <Grid item xs={12} sm={6} md={4}>
                <Grow in timeout={1000}>
                  <Card
                    className="blog-card"
                    onClick={() => setBlogDialog(blog)}
                  >
                    <CardActionArea>
                      <CardMedia
                        className="blog-card-image"
                        image={blog.image}
                        title={blog.title}
                      />
                      <CardContent>
                        <Typography variant="body2" className="blog-card-title">
                          {blog.title}
                        </Typography>
                        <Typography
                          variant="caption"
                          className="blog-card-caption"
                        >
                          {blog.caption}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grow>
              </Grid>
            </>
          ))}
        </Grid>
      </Grid>
      <BlogDialog />
    </Grid>
  );
};

export default Blog;
