import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { MemoryRouter } from "react-router";
 
// import "./styles.css";
 
class Home extends React.Component {
  render() {
    return <h1>home</h1>;
  }
}
class About extends React.Component {
  render() {
    return <h1>about</h1>;
  }
}
class Index extends React.Component {
  render() {
    return <h1>index</h1>;
  }
}
 
class App extends React.Component {
  render() {
    return (
      <MemoryRouter>
       <div>
        <ul id="menu">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/index">Index</Link>
          </li>
        </ul>
        <div id="page-container">
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/index" component={Index} />
        </div>
        </div>
      </MemoryRouter>
    );
  }
}

export default App;