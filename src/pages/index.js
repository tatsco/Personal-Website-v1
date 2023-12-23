import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import headshot from '../images/headshot.gif';
import comingsoon from '../images/comingsoon.png';
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
    marginBottom: '10%',
    background: 'rgba(247, 247, 247, 0.21)',
  },
  homeImg: {
    // maxWidth: '150px',
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

// let id = 0;
// function createData(heading, skill) {
//   id += 1;
//   return { id, heading, skill };
// }

// const rows = [
//   createData('Languages', 'Javascript, Python, SQL'),
//   createData('Frontend Development', 'React, Redux, HTML/CSS'),
//   createData('Backend Development', 'Node, Express, PostgreSQL'),
//   createData('Test Driven Development', 'Mocha, Chai, Jasmine, Enzyme'),
//   createData('Leadership Skills', 'Agile Project Management, Mentorship and Teaching'),
//   createData('Soft Skills', 'Critical Thinker and Problem Solver, Detail Oriented and Active Listener, Fast Learner and Self Starter, Team-Player')
// ];

const Home = (props) => {

  const { classes } = props;

  return (
    <div className="index">
      <Header/>
      <Paper className={classes.root}>
      <Typography
          className={classes.homeTextTitle}
          variant="h4"
          align="center"
        >Bare with me as I update my personal website.
        </Typography>
        <img className={classes.homeImg} src={comingsoon} alt="coming soon"/>
        {/* <Typography
          className={classes.homeTextDescrip}
          variant="body"
          align="center"
        >
        </Typography> */}
        {/* <Table className={classes.table} align="center">
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
        </Table> */}
      </Paper>
      <Footer/>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);



