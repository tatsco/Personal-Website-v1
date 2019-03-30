import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import bookstack from '../images/bookstack.png';
import spacevip from '../images/spacevip.png';
import kagu from '../images/kagu.png';
import '../index.css';
import 'typeface-unica-one';
import 'typeface-raleway';


const styles = theme => ({
  card: {
    maxWidth: 'auto',
  },
  cardLinkText: {
    fontFamily: 'Unica One',
    textDecoration: 'none',
    color: 'rgb(0, 0, 0)',
  },
  descriptionText : {
    fontFamily: 'Raleway',
  },
  headerText: {
    paddingBottom: '20px',
    fontFamily: 'Unica One'
  },
  media: {
    height: 300,
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: '100px',
    marginLeft: '10%',
    marginRight: '10%',
    background: 'rgba(247, 247, 247, 0.21)',
  },
  titleText: {
    fontFamily: 'Raleway',
  },
});

const projectList = [
  {
    projectNumber: 1,
    imgUrl: bookstack,
    imgTitle: 'Book Stack',
    siteUrl: 'http://bookstack-gs.herokuapp.com/',
    description: 'E-commerce bookstore,built using Javascript, React, Redux, Materiul UI, Node, Express and Sequelize. Used a Stripe API for checkout functionality.'
  },
  {
    projectNumber: 2,
    imgUrl: spacevip,
    imgTitle: 'Space VIP',
    siteUrl: 'https://tatsco.github.io/SpaceVIP/',
    description: "A VR scene built with A-Frame for desktop, mobile and headset devices. Built as part of a 3-day hackathon, and won a People's Choice award."
  },
  {
    projectNumber: 3,
    imgUrl: kagu,
    imgTitle: 'Pear Kagu',
    siteUrl: 'http://www.gokagu.com/',
    description: "A learning tool built with PostgreSQL, Sequelize, Express, React, Redux and Material UI. Aggregated data from external YouTube, Meetup and News API's."
  },
]

const Projects = (props) => {

  const { classes } = props;

  return (
    <div className="projects">
      <Header/>
      <Paper className={classes.root}>
        <Typography className={classes.headerText} variant="h4" align="center">
          Projects
        </Typography>
        <Grid
          container
          spacing={32}
          direction="row"
          justify="center"
          alignItems="center"
          >
          {projectList.map((project) => {
            return (
              <Grid item sm={6} align="center">
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={project.imgUrl}
                  title={project.title}
                />
                <CardContent>
                  <Typography
                    className={classes.titleText}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >{project.imgTitle}
                  </Typography>
                  <Typography
                    component="p"
                    className={classes.descriptionText}
                  >{project.description}
                  </Typography>
                </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  <a href={project.siteUrl} target="#" className={classes.cardLinkText}>
                    Visit
                  </a>
                </Button>
              </CardActions>
            </Card>
            </Grid>
            )
          })
        }
        </Grid>
      </Paper>
      <Footer/>
    </div>
  )
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);
