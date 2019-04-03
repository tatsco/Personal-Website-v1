import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'typeface-unica-one';
import 'typeface-raleway';


const styles = theme => ({
  button: {
   display: 'block',
   alignItems: 'center',
   fontFamily: 'Unica One',
  },
  cardLinkText: {
    fontFamily: 'Unica One',
    textDecoration: 'none',
    color: 'rgb(81, 36, 126)',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  header: {
    paddingBottom: '20px',
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
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '50%',
    fontFamily: 'Raleway',
  },
});


class Contact extends React.Component {
  constructor () {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      _replyto: '',
      message: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render () {
    const { classes } = this.props;
    const { firstName, lastName, _replyTo, message} = this.state;

    return (
      <div className="projects">
        <Header/>
        <Paper className={classes.root}>
          <Typography
            className={classes.header}
            variant="h4"
            align="center"
            >Contact Me
          </Typography>
          <form
            className={classes.container}
            autoComplete="off"
            name="contact"
            action="/thanks"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <TextField
              id="standard-firstname"
              name="firstName"
              label="First Name"
              type="text"
              className={classes.textField}
              value={firstName}
              onChange={this.handleChange}
              margin="normal"
            />
            <TextField
              id="standard-lastname"
              label="Last Name"
              type="text"
              name="lastName"
              className={classes.textField}
              value={lastName}
              onChange={this.handleChange}
              margin="normal"
            />
            <TextField
              id="standard-email"
              label="Email"
              type="email"
              name="_replyto"
              className={classes.textField}
              value={_replyTo}
              onChange={this.handleChange}
              margin="normal"
            />
            <TextField
              id="standard-message"
              label="Message"
              type="text"
              name="message"
              className={classes.textField}
              value={message}
              onChange={this.handleChange}
              margin="normal"
              multiline
              rows="5"
            />
            <ListItem className={classes.container}>
              <Button
                className={classes.button}
                type="submit"
                >Submit
              </Button>
            </ListItem>
          </form>
        </Paper>
        <Footer/>
      </div>
    )
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);

