import React from "react";
import { Router} from "@reach/router";
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
import About from './About';
import Projects from './Projects';
import OtherInterests from './OtherInterests';
import Contact from './Contact';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../index.css';
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
  createData('Proficient', 'Javascript, React, Redux, Node, Express, Sequelize, PostgreSQL'),
  createData('Knowledgeable', 'HTML, CSS, Material UI, Bootstrap, Gatsby, A-Frame, Agile, Git'),
  createData('Some Experience', 'Python, Heroku, Webpack, TDD (Mocha, Chai, Jasmine, Enzyme)'),
  createData('Other Interests', 'Data Science, Digital Forensics'),
];

const Home = (props) => {

  const { classes } = props;

  return (
    <div className="index">
      <Header/>
      <Paper className={classes.root}>
        <img className={classes.homeImg} src={headshot} alt="Me"/>
        <Typography
          className={classes.homeTextTitle}
          variant="h4"
          align="center"
        >Full-Stack Software Engineer
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
        <Router>
          <About path="/About"/>
          <Projects path='/Projects'/>
          <OtherInterests path='/OtherInterests'/>
          <Contact path='/Contact'/>
        </Router>
      </Paper>
      <Footer/>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);


