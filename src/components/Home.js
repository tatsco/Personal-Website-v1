import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import headshot from '../images/headshot.gif';
import 'typeface-unica-one';
import 'typeface-raleway';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: '5%',
    marginLeft: '10%',
    marginRight: '10%',
    marginBottom: '10%',
    background: 'rgba(247, 247, 247, 0.21)',
  },
  homeImg: {
    maxWidth: '150px',
    width: '100%',
    marginTop: '10px',
    marginLeft: 'auto',
    marginRight: 'auto',
    transform: 'translate3d(0,0,0)',
    display: 'flex',
  },
  homeTextTitle: {
    paddingTop:'14px',
    fontFamily: 'Unica One',
  },
  homeTextDescrip: {
    paddingTop:'14px',
    marginLeft: '10%',
    marginRight: '10%',
    fontFamily: 'Raleway',
  },
  table: {
    fontFamily: 'Raleway',
    minWidth: 'auto',
    maxWidth: '85%'
  },
  tableCell: {
    paddingRight: 4,
    paddingLeft: 5
  },
});

let id = 0;
function createData(heading, skill) {
  id += 1;
  return { id, heading, skill };
}

const rows = [
  createData('Languages', 'Javascript, Python, SQL'),
  createData('Frontend Development', 'React, Redux, HTML/CSS'),
  createData('Backend Development', 'Node, Express, PostgreSQL'),
  createData('Test Driven Development', 'Mocha, Chai, Jasmine, Enzyme'),
  createData('Leadership Skills', 'Agile Project Management, Mentorship and Teaching'),
  createData('Soft Skills', 'Critical Thinker and Problem Solver, Detail Oriented and Active Listener, Fast Learner and Self Starter, Team-Player')
];

const Home = (props) => {

  const { classes } = props;

  return (
    <div className="index">
      <Paper className={classes.root}>
        <img className={classes.homeImg} src={headshot} alt="Me"/>
        <Typography
          className={classes.homeTextTitle}
          variant="h4"
          align="center"
        >Full-Stack Software Engineer
        </Typography>
        <Typography
          className={classes.homeTextDescrip}
          variant="body"
          align="center"
        >I am a Full Stack Software Engineer with nine years working in STEM. I have one year of experience working in agile environments building web applications primarily with Javascript. I am seeking a role that leans more towards the frontend with a possible opportunity to explore the backend, as well as the ability to continue learning and growing as a developer.
        </Typography>
        <Table className={classes.table} align="center">
          <TableHead>
            <TableRow>
              <TableCell align="center" variant="head">Skill Snippet</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell className={classes.tableCell} component="th" scope="row" variant="body">{row.heading}</TableCell>
              <TableCell className={classes.tableCell} align="right" variant="body">{row.skill}</TableCell>
            </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
