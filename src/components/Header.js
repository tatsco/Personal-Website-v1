import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'gatsby';
import 'typeface-raleway';
import 'typeface-unica-one';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  text: {
    fontFamily: 'Unica One',
    color: '#212121',
    textDecoration: 'none',
  }
};

function Header (props) {

  const { classes } = props;

    return (

      <div className={classes.root}>
        <AppBar position="static" color="inherit">
          <Toolbar>
            <Typography className={classes.grow} variant="h4" noWrap>
              <Link to="/" className={classes.text}>Tatiana Scott</Link>
            </Typography>
            <div className="header-nav">
              <Button>
                <Link to="/about" className={classes.text}>About</Link>
              </Button>
              <Button>
                <Link to="/projects" className={classes.text}>Projects</Link>
              </Button>
              <Button>
                <Link to="/interests" className={classes.text}>Interests</Link>
              </Button>
              <Button>
                <Link to="/contact" className={classes.text}>Contact</Link>
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
