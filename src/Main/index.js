import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../Home';
import About from '../About';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { RouteTransition } from 'react-router-transition';

// const title = 'Marc White is Awesome';

function App(props){
    return(
      <Router>
          <div>
          <ul>
            <li><Link to="/">Main</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/home">Home</Link></li>
          </ul>
          <Route render={({location, history, match}) => {
              return(
                  <RouteTransition
                    pathname={location.pathname}
                    atEnter={{ opacity: 0 }}
                    atLeave={{ opacity: 0 }}
                    atActive={{ opacity: 1 }}
                    >
                    <Switch key={location.key} location={location} >
                        <Route exact path="/" render={() => (
                        <h1>Welcome</h1>
                        )} />
                        <Route exact path="/home" component={Home}/>
                        <Route exact path="/about" component={About}/>
                    </Switch>
                </ RouteTransition>
              );
          }} />
          </div>
      </Router>
    )
}

export default App;