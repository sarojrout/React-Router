import React from "react";
import {Router, Route, Link, IndexRoute, hashHistory} from "react-router";

const Outer = (props) => <div><h1>My Site</h1><Links />{props.children}</div>;
const About = () => <div><h1>About Us</h1></div>;
const Contact = () => <div><h1>Contact Us</h1></div>;

const Links = () =>
  <nav>
    <Link activeStyle={{color:'green'}} to="/">Home</Link><br />
    <Link activeStyle={{color:'green'}} to="/about">About</Link><br />
    <Link activeStyle={{color:'red'}} to="/contact">Contact</Link>
  </nav>

export default class App5 extends React.Component {
  render() {
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={Outer}>
          <IndexRoute component={About}></IndexRoute>
            <Route path="contact" component={Contact}></Route>
        </Route>

      </Router>
    );
  }
}

export default App5;
