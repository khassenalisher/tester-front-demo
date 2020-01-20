import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import Quiz from './components/quiz';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import { AppTypes } from './types';
import { connect } from 'react-redux';


function App(props: AppTypes.IPros) {
  useEffect(() => {
    console.log(props.userAuth)
  });
  const AUTH_TOKEN = localStorage.getItem('user');
  const userAuth = AUTH_TOKEN === 'theusertoken';
  return (
        <Router>
            <div className="app">
              <Header isUserAuth={userAuth}/>
              {userAuth ? (
                <div>
                  <Redirect from="/tester-front-demo/login" to="/tester-front-demo/"/>
                  <Route
                    exact
                    path="/tester-front-demo/"
                    component={() => <Dashboard/>}
                  />
                  <Route exact path="/tester-front-demo/test/:id" component={() => <Quiz/>} />
                </div>
              ) : (
                <div>
                  <Redirect from="/" to="/tester-front-demo/login"/>
                  <Route path="/tester-front-demo/login" component={() => <Auth/>} />
                </div>
              )}
            </div>
        </Router>
    );
}

const mapStateToProps = (state: any) => {
  return ({
    userAuth: state.authReducer.userAuth
  });
};

export default connect<any, any>(mapStateToProps, null)(App);

