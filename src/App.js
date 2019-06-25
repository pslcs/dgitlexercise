import React, { Component }  from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import { checkInput } from './actions/checkInput';
import { saveValues } from './actions/saveValues';
import { overlayToggle } from './actions/overlayToggle';

var values = [];

class App extends Component {
  checkInput = (event) => {
    this.props.checkInput(event.target.value);
  }
  saveValues = (values) => {
    this.props.saveValues(values);
  }
  overlayToggle = () => {
    this.props.overlayToggle()
  }
  async call1() { 
   // let fetchLocation = 'http://fubar.com/person/' + this.props.checkReducer.payload; // I was not able to create an API with so much data, but this is how I would do it
    fetch('https://my-json-server.typicode.com/pslcs/dgitlexercise/call1', { // calling a different url to obtain two values
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
        }
    }).then(res => {
        if(res.ok){
          return res.json();
        } else {
          throw Error(res.statusText);
        }
      }
    ).then(data => {
      values.push(data.val1);
      values.push(data.val2);
      this.saveValues(values);
      this.call2();
    })
  }
  async call2(){
    fetch('https://my-json-server.typicode.com/pslcs/dgitlexercise/' + this.props.saveReducer.values[0], {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if(res.ok){
        return res.json();
      } else {
        throw Error(res.statusText);
      }
    }).then(data => {
      values.push(data.val3);
      values.push(data.val4);
      this.saveValues(values);
      this.call3();
    })
  }
  async call3(){
    fetch('https://my-json-server.typicode.com/pslcs/dgitlexercise/' + this.props.saveReducer.values[1], {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if(res.ok){
        return res.json();
      } else {
        throw Error(res.statusText);
      }
    }).then(data => {
      values.push(data.val5);
      this.saveValues(values);
      this.overlayToggle()
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Povilas Šulcas DGITL exercise</h1>
          <pre>{ JSON.stringify(this.props.checkReducer.error) }</pre>
          <div id='overlay' className={this.props.overlayReducer.overlayClass}>
            <div id='overlay-content'>
              <pre>{ JSON.stringify(this.props.saveReducer.values) }</pre>
              <pre>
                { JSON.stringify(this.props.saveReducer.values[4]) } * {JSON.stringify(this.props.saveReducer.values[2])} = {JSON.stringify(this.props.saveReducer.values[4] * this.props.saveReducer.values[2])}
              </pre>
              <a href='/'>Try again</a>
            </div>
          </div>
          <input type="text" name='input' onChange={(event) => this.checkInput(event)}></input> <br/>
          <button disabled={this.props.checkReducer.disabled} onClick={() => this.call1()}>Fetch numbers</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  checkInput: (event) => dispatch(checkInput(event)),
  saveValues: (values) => dispatch(saveValues(values)),
  overlayToggle: () => dispatch(overlayToggle())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);