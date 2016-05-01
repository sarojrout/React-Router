// React router allows query string to be pased as props to the components which gets rendered at a specific route
import React from "react";
import {Router, Route, hashHistory, Link} from "react-router";

const Page = (props) =>
<div><h1>{props.location.query.message || 'Hello'}</h1><Links /></div>
const Links = () =>
<nav>
<Link to={{pathname: '/', query: {message: 'Yeah buddy'}}}>Hello kumar</Link>
</nav>
class App8 extends React.Component{
  render(){
    return(
      <Router history={hashHistory}>
      <Route path="/" component={Page}></Route>
      </Router>
    )
  }
}
export default App8;
