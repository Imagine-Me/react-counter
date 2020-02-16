import React, { Component } from 'react';
import Button from '../components/button/button';
import './App.css'


class App extends Component {

  // constructor(){
  //   super()
  //   this.state = {
  //     counter: 0
  //   }
  // }

  state = {
    counter: 0
  }

  onIncrementHandler = () => {
    console.log("Counter incremented")
    this.setState({ counter: this.state.counter + 1 })
  }

  onDecrementHandler = () => {
    console.log("Counter decremented")
    this.setState({ counter: this.state.counter - 1 })
  }


  render() {
    return <div className="App">
      <p>{this.state.counter}</p>
      <Button clicked={this.onIncrementHandler}>Increment</Button>
      <Button clicked={this.onDecrementHandler}>Decrement</Button>
    </div>
  }
}

export default App;