import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../Home';
import About from '../About';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// const title = 'Marc White is Awesome';

function App(props){
    return(
      <Router>
        <Switch>
          <Route path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About}/>
        </Switch>
      </Router>
    )
}

export default App;