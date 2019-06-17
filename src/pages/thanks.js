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
  headerText: {
    fontFamily: 'Unica One',
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

const thanks = (props) => {

  const {classes} = props;

  return (
    <div className="thanks">
      <Header/>
      <Paper className={classes.root}>
        <Typography
          className={classes.headerText}
          variant="h4"
          align="center"
          >Your message has been received. Thank you!
          </Typography>
      </Paper>
      <Footer/>
    </div>
  )
};

thanks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(thanks);





