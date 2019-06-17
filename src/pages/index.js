import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from '../components/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import Projects from '../components/Projects';
import OtherInterests from '../components/OtherInterests';
import Contact from '../components/Contact';
import 'typeface-unica-one';
import 'typeface-raleway';

const Index = () => {
  return (
    <div className="index">
      <Router>
        <Header/>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Interests" component={OtherInterests}/>
        <Route path="/Contact" component={Contact} />
        <Footer/>
      </Router>
    </div>
  );
}

export default Index;
