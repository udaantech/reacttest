import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
// import { setCurrentUser, logoutUser } from './actions/authentication';
import User from './components/User';
import "../node_modules/bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Router>
            <div>
              <Route exact path="/" component={ User } />
            </div>
          </Router>
        </Provider>
    );
  }
}

export default App;
