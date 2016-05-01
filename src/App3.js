import React from "react";
import {Router, Route, Link, hashHistory} from "react-router";

const Home = () => <div><h1>My Home</h1><Links /></div>;
const About = () => <div><h1>About Us</h1><Links /></div>;
const Contact = () => <div><h1>Contact Us</h1><Links /></div>;

const Links = () =>
  <nav>
    <Link activeStyle={{color:'green'}} to="/">Home</Link><br />
    <Link activeStyle={{color:'green'}} to="/about">About</Link><br />
    <Link activeStyle={{color:'red'}} to="/contact">Contact</Link>
  </nav>

export default class App1 extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Home}></Route>
        <Route path="about" component={About}></Route>
        <Route path="contact" component={Contact}></Route>
      </Router>
    );
  }
}

export default App1;
