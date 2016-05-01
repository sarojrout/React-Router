import React from "react";
import {Router, Route, Link, hashHistory} from "react-router";

const Home = (props) => <div><h1>My Home</h1>{props.children}</div>;
const About = (props) => <div><h1>About Us</h1>{props.children}</div>;
const Contact = (props) => <div><h1>Contact Us</h1></div>;

const Links = () =>
  <nav>
    <Link activeStyle={{color:'green'}} to="/">Home</Link><br />
    <Link activeStyle={{color:'green'}} to="/about">About</Link><br />
    <Link activeStyle={{color:'red'}} to="/about/contact">Contact</Link>
  </nav>

export default class App1 extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Home}>
          <Route path="about" component={About}>
            <Route path="contact" component={Contact}></Route>
          </Route>
        </Route>
      </Router>
    );
  }
}

export default App1;
