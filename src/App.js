import React, { Component }  from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import { simpleAction } from './actions/simpleAction';
import { checkInput } from './actions/checkInput';


class App extends Component {
  simpleAction = (event) => {
    //this.props.simpleAction();
  }
  checkInput = (event) => {
    this.props.checkInput(event.target.value);
  }
  async call1() { 
    let fetchLocation = 'http://fubar.com/person/' + this.props.checkReducer.payload; // I was not able to create an API with so much data, but this is how I would do it
    fetch('https://my-json-server.typicode.com/pslcs/dgitlexercise/call1', { // calling a different url to obtain two values
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json'
        }
    }).then(res => {
        if(res.ok){
          console.log(res)
          //return res.json()
        } else {
          throw Error(res.statusText)
        }
      }
    ).then(data =>
      console.log(data))
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