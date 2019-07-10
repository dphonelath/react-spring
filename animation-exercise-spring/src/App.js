import React, { Component } from 'react';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Component1 />
        <Component2 />
      </div>
    )
  }
}
export default App;
