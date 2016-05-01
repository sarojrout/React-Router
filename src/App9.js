import React from "react";
import {Router, Redirect, Route, hashHistory, Link} from "react-router";

const Home = () => <div><h1>Welcome Home</h1><Links /></div>
const About = () => <div><h1>About Us</h1><Links /></div>
const Contact = () => <div><h1>Contact Us</h1><Links /></div>

const Links = () =>
<nav>
<Link to="/">Home</Link><br />
<Link to="about">About</Link><br />
<Link to="about-us">About Us</Link><br />
<Link to="contact">Contact</Link>
</nav>
class App9 extends React.Component{
  render(){
    return(
      <Router history={hashHistory}>
        <Route path="/" component={Home}></Route>
        <Route path="/about-us" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Redirect from="/about" to="/about-us"></Redirect>
      </Router>
    )
  }
}
export default App9;
