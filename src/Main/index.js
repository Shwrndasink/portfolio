import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import Home from '../Home';
import About from '../About';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { RouteTransition } from 'react-router-transition';
import styled from 'styled-components';

const Menu = styled.ul`
    background:red;
    margin-top: -120px;
    float: right;
    & li {
        display: inline-block;
        color: white;
        & a {
            color: white;
            text-decoration: none;
            width: 120px;
            padding: 20px;
        }
    }
`

function App(props){
    return(
      <Router>
          <div>
          <Header>

          <ul>
          <Menu>
            <li><Link to="/">Main</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/home">Home</Link></li>
            </Menu>
          </ul>

          </Header>
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