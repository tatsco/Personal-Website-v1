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
import forensicnexus from '../images/forensicnexus.png';
import loveterese from '../images/loveterese.png';
import Header from '../components/Header';
import Footer from '../components/Footer';

const styles = theme => ({
  card: {
    maxWidth: 'auto',
  },
  cardLinkText: {
    fontFamily: 'Unica One',
    textDecoration: 'none',
    color: 'rgb(0, 0, 0)',
  },
  cardText: {
    fontFamily: 'Raleway',
  },
  headerText: {
    fontFamily: 'Unica One',
    paddingBottom: '20px'
  },
  media: {
    height: 300,
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: '5%',
    marginLeft: '10%',
    marginRight: '10%',
    background: 'rgba(247, 247, 247, 0.21)',
  },
});

const interestList = [
  {
    interestNumber: 1,
    imgUrl: forensicnexus,
    imgTitle: 'Forensic Nexus',
    siteUrl: 'https://forensicnexus.com/',
    description: 'Blog for forensic science aspirants. Provides interviews with real professionals in the field and forensic disciplines information.'
  },
  {
    interestNumber: 2,
    imgUrl: loveterese,
    imgTitle: 'Love Terese',
    siteUrl: 'https://lovetereseblog.wordpress.com/',
    description: "Blog of my experience as an herbalism apprentice. A collection of the different types of medicine that I would make with plants."
  },
]

const OtherInterests = (props) => {

  const { classes } = props;

  return (
    <div className="projects">
      <Header/>
      <Paper className={classes.root}>
        <Typography
          className={classes.headerText}
          variant="h4"
          align="center"
        >Other Interest's
        </Typography>
        <Grid
          container
          spacing={32}
          direction="row"
          justify="center"
          alignItems="center"
        >{interestList.map((interest) => {
            return (
              <Grid item sm={6} align="center">
              <Card className={classes.cardText}>
                <CardMedia
                  className={classes.media}
                  image={interest.imgUrl}
                  title={interest.title}
                />
                <CardContent>
                  <Typography
                    className={classes.cardText}
                    gutterBottom
                    variant="h5"
                    component="h2"
                    key={interest.interestNumber}
                  >{interest.imgTitle}
                  </Typography>
                  <Typography
                    component="p"
                    className={classes.cardText}
                  >{interest.description}
                  </Typography>
                </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  <a href={interest.siteUrl} target="#" className={classes.cardLinkText}>
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
  );
}

OtherInterests.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OtherInterests);
