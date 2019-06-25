import React, { Component }  from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import { simpleAction } from './actions/simpleAction';
import { checkInput } from './actions/checkInput';


var fetchLocation = 'hhtp://www.šulcas.lt'
class App extends Component {
  simpleAction = (event) => {
    //this.props.simpleAction();
  }
  checkInput = (event) => {
    this.props.checkInput(event.target.value);
  }
  async call1() {
    fetch(fetchLocation, {
      method: 'GET'
    })
  }
  call2 = () => {

  }
  call3 = () => {

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <pre>{ JSON.stringify(this.props.checkReducer.error) }</pre>
          <input type="text" name='input' onChange={(event) => this.checkInput(event)}></input> <br/>
          <button disabled={this.props.checkReducer.disabled} onClick={() => this.call1()}>Test redux action</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
  checkInput: (event) => dispatch(checkInput(event))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);