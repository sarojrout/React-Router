// React Router: Named components
// Can render multiple components with single route
import React from "react";
import {Router, Route, Link, IndexRoute, hashHistory} from "react-router";

const Home = () => <di><h1>Home</h1></di>
const HomeBody = () => <di>This is Home body</di>
const Other = () => <h1>Other</h1>
const OtherBody = () => <div>Other Body</div>

const container = (props) =>
<div>{props.header}{props.body}<Links /></div>

const Links= () =>
<nav>
<Link to="/">Home</Link><br />
<Link to="/other">Other</Link>
</nav>

export default class App7 extends React.Component {

  render() {
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={container}>
        <IndexRoute components={{header: Home, body: HomeBody}}></IndexRoute>
        <Route path="/other" components={{header: Other, body: OtherBody}}></Route>
        </Route>
      </Router>
    );
  }
}

export default App7;
