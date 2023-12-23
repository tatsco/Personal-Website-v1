import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Header from '../components/Header';
import Footer from '../components/Footer';
import oops from '../images/oops.png';
import 'typeface-raleway';
import 'typeface-unica-one';

const styles = theme => ({
  headerText: {
    fontFamily: 'Unica One',
  },
  homeImg: {
    width: '100%',
    marginTop: '10px',
    marginLeft: 'auto',
    marginRight: 'auto',
    transform: 'translate3d(0,0,0)',
    display: 'flex',
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: '5%',
    marginLeft: '10%',
    marginRight: '10%',
    background: 'rgba(247, 247, 247, 0.21)',
  },
});

const customFourOhFour = (props) => {

  const {classes} = props;

  return (
    <div className="thanks">
      <Header/>
      <Paper className={classes.root}>
        <Typography
          className={classes.headerText}
          variant="h4"
          align="center"
          >You've reached this page in error, kindly refresh.
          </Typography>
          <img className={classes.homeImg} src={oops} alt="oops"/>
      </Paper>
      <Footer/>
    </div>
  )
};

customFourOhFour.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(customFourOhFour);





