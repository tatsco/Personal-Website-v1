import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'typeface-raleway';
import 'typeface-unica-one';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: '5%',
    marginLeft: '10%',
    marginRight: '10%',
    background: 'rgba(247, 247, 247, 0.21)',
  },
  headerText: {
    paddingBottom: '20px',
    fontFamily: 'Unica One',
  },
  bodyText: {
    fontFamily: 'Raleway',
    paddingBottom: '20px',
  },
});

const About = (props) => {

  const { classes } = props;

  return (
    <div className="about">
      <Header/>
      <Paper className={classes.root}>
        <Typography className={classes.headerText} variant="h4" align="center">
          About Me
        </Typography>
        <Typography className={classes.bodyText} component="p" variant="h5">
          I bring a wealth of experience from the field of Forensic Science and, more recently, Software Engineering. With six years as a Forensic Scientist at the NYPD, I analyzed over 1500 cases, testifying as an expert witness in court three times. This background has equipped me with a distinctive problem-solving perspective and a versatile technical skill set.
        </Typography>
        <Typography className={classes.bodyText} component="p" variant="h5">
          In my transition to Software Engineering, I've made substantial contributions at Verizon and McKinsey & Company. Notable projects include the redesign of the Open Source website, automation of Inner Source project governance, and development of an internal feedback and performance evaluations application. My expertise spans Cybersecurity, Risk Management, and Data Privacy, cultivated through roles as the cyber "guardian" at McKinsey and contributions to the development of the Data Leakage Detection and Prevention CLI tool at Verizon.
        </Typography>
        <Typography className={classes.bodyText} component="p" variant="h5">
          Complementing my professional journey, I've delved into herbalism both as a spiritual practice and as a formal pursuit to advance a herbal remedy and health/beauty product line.
        </Typography>
        <Typography className={classes.bodyText} component="p" variant="h5">
          What propels my professional drive is an innate curiosity and a commitment to excellence. My approach blends observation, exploration, experimentation, interpretation, and implementation, with a touch of creative expression. This journey has not only refined my technical prowess but instilled in me a dedication to delivering outstanding results.
        </Typography>
        <Typography className={classes.bodyText} component="p" variant="h5">
          Seeking opportunities that allow me to integrate my diverse skill set, innovative mindset, and insatiable curiosity, I aim to continue making a positive impact. Whether navigating complex forensic analyses or pioneering cutting-edge software applications, I am driven to excel. Let's embark on a journey where challenges are opportunities for growth, and solutions lead us toward excellence.
        </Typography>
      </Paper>
      <Footer/>
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
