import React, { Component } from 'react';
import WelcomePage from './WelcomePage';
import { Route, withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
import NavBar from './NavBar';
import '../component-css/App.css'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/nav" component={NavBar} />
      </div>
    );
  }
}

// const mapStateToProps= state =>({
//   welcomeScreenToggle: state.home.welcomeScreenToggle
// })
// export default withRouter(connect(mapStateToProps)(App));

export default withRouter(App);
