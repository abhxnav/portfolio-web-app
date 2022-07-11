import React from "react";
import { Container, Grid } from "@mui/material";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { About, Blog, Contact, Projects } from "./pages/pages-index";
import { Footer, Header, Profile } from "./components/components-index";

import "./App.css";

function App() {
  return (
    <Container className="top-60">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={4} lg={3.1}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <div className="main-content container">
              <Switch>
                <Route exact path="/">
                  <About />
                </Route>
                <Route exact path="/projects">
                  <Projects />
                </Route>
                {/* <Route exact path="/blog" ><Blog /></Route> */}
                <Route exact path="/contact">
                  <Contact />
                </Route>
              </Switch>
            </div>
          </Router>

          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
