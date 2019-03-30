import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'typeface-unica-one';
import 'typeface-raleway';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: '100px',
    marginLeft: '10%',
    marginRight: '10%',
    background: 'rgba(247, 247, 247, 0.21)',
  },
  headerText: {
    fontFamily: 'Unica One',
  },
  bodyText: {
    fontFamily: 'Raleway',
  }
});

const About = (props) => {

  const { classes } = props;

  return (
    <div className="about">
      <Header/>
      <Paper className={classes.root}>
        <Typography className={classes.headerText}  variant="h4" align="center" >
          About Me
        </Typography>
        <Typography className={classes.bodyText} component="p" variant="body2">
          <p>I am impassioned S.T.E.A.M. (Science, Technology, Education, Art and Mathematics) professional with an unquenchable affinity for understanding what, how and why things work (the scientific method), which drives my interests in science, technology and herbalism.
          </p>
          <p>I've worked in the Forensic Science industry for 8 years performing a variety of sample and data analysis and I worked on a team researching the implementation of new instrumentation to increase efficiency in the laboratory.
          </p>
          <p>In that time, I worked closely in a collective of proficient web design and development professionals to build and promote an online resource to connect real-life forensic experts with students for career mentorship and guidance. Through this work, I learned Javascript, CSS, and HTML in my spare time and realized that I enjoyed working on a team, brainstorming ideas and ways to build and manifest those ideas using new technologies.
          </p>
          <p>In my spare time, I've also studied herbalism for three years as a spiritual practice and also as a formal means to further my work towards my herbal remedy and health/beauty product line.
          </p>
          <p>With an innate need to inquire, learn, create and improve, I seek a role that involves a combination of observation, exploration, experimentation, interpretation, implementation and some room for creative and artistic expression. It would be a dream to fuse my past experiences with my current skillset and education.
          </p>
        </Typography>
      </Paper>
      <Footer/>
    </div>
  )
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
