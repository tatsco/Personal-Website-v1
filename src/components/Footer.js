import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import githubIcon from '../images/githubIcon.png';
import linkedinIcon from '../images/linkedinIcon.png';
import mediumIcon from '../images/mediumIcon.png';
import '../index.css';
import 'typeface-unica-one';
import 'typeface-raleway';

const styles =  {
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'Raleway',
    color: '#212121'
  },
  socialImg : {
    height: '25px',
    width: '25px',
    padding: '4px'
  }
};

function Footer (props) {

  const { classes } = props;

  return (

    <AppBar position="fixed" color="inherit" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/tatianascott" target="#">
            <img src={linkedinIcon} className={classes.socialImg} alt={"LinkedIn Icon"}/>
          </a>
          <a href="https://github.com/tatsco" target="#">
            <img src={githubIcon} className={classes.socialImg} alt={"Github Icon"}/>
          </a>
          <a href="https://medium.com/@tatianascott" target="#">
            <img src={mediumIcon} className={classes.socialImg} alt={"Medium Icon"}/>
          </a>
        </div>
        <Typography
          className={classes.text}
          variant="caption"
          gutterBottom
        > © 2019 Made by Tatiana Scott using React, Gatsby and Material UI.
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
