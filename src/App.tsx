import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Quiz from './components/quiz';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import { AppTypes } from './types';
import { connect } from 'react-redux';


function App(props: AppTypes.IPros) {
  useEffect(() => {
    console.log(props.userAuth)
  });
  return (
        <Router>
            <div className="app">
                <Header isUserAuth={props.userAuth || false}/>
                <Route exact path="/" component={() => (props.userAuth ? <Dashboard /> : <Auth />)} />
                <Route exact path="/test/:id" component={() => (props.userAuth ? <Quiz /> : <Auth />)} />
                <Route path="/login" component={() => <Auth/>} />
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

