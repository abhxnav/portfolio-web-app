import React from 'react';
import { HomeRounded, Telegram } from '@material-ui/icons';
import { NavLink, withRouter, useHistory } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

import CustomButton from '../button/CustomButton';

import 'bootstrap/dist/css/bootstrap.min.css';
import './header.scss';

import data from '../../utils/data';

const Header = (props) => {
  const pathName = props?.location?.pathname;
  const history = useHistory();

  return (
    <Navbar expand="lg" className="header sticky">
      {/* Home Link */}
      <Nav.Link as={NavLink} to="/" className={'p-0 m-0'}>
        <Navbar.Brand className="header-home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className="header-left">
          {/* About Link */}
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName === '/' ? 'header-link-active' : 'header-link'}
          >
            ABOUT
          </Nav.Link>
          {/* Projects Link */}
          <Nav.Link
            as={NavLink}
            to="/projects"
            className={
              pathName === '/projects' ? 'header-link-active' : 'header-link'
            }
          >
            PROJECTS
          </Nav.Link>
          {/* Blog Link */}
          {/* <Nav.Link
            as={NavLink}
            to="/blog"
            className={
              pathName === '/blog' ? 'header-link-active' : 'header-link'
            }
          >
            BLOG
          </Nav.Link> */}
          {/* Contact Link */}
          <Nav.Link
            as={NavLink}
            to="/contact"
            className={
              pathName === '/contact' ? 'header-link-active' : 'header-link'
            }
          >
            CONTACT
          </Nav.Link>
        </Nav>

        <div className="header-right">
          {Object.keys(data.socials).map((key) => (
            <a href={data.socials[key].link} target="_blank" rel="noreferrer">
              {data.socials[key].icon}
            </a>
          ))}
          <CustomButton
            text={'Get in Touch'}
            icon={<Telegram />}
            onClick={() => history.push('/contact')}
          />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
