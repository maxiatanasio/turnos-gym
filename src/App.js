import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import PrivateRoute from "./routes/PrivateRoute.js";
import './App.css';
import './styles/normalize.css';

import NavBar from './components/NavBar';
import Home from './routes/Home';
import Login from './routes/Login';
import Footer from './components/Footer';

const auth = true;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <PrivateRoute exact path="/" auth={auth} component={Home}></PrivateRoute>
          <Route path="/login" component={Login} auth={auth}></Route>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
