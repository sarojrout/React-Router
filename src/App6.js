// React Router: Route Parameter example
//route parameter allows to pass the portion of our route path as property of our component that we are going to render in that path

import React from "react";
import {Router, Route, Link, hashHistory} from "react-router";

const Message = (props) =>
<div><h1>{props.params.message || 'Welcome'}</h1><Links /></div>;

const Links = () =>
<nav>
<Link to="/">Site</Link> <br />
<Link to="/hi Nishant">Nishant</Link><br />
<Link to="/hi Saroj">Saroj</Link>
</nav>
export default class App6 extends React.Component {

  render() {
    return (
      <Router history={ hashHistory }>
        <Route path="/(:message)" component={Message}></Route>
      </Router>
    );
  }
}

export default App6;
