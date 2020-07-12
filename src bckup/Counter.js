import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { incrementAsync, decrementAsync } from './Action';

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch(incrementAsync());
  }

  decrement = () => {
    this.props.dispatch(decrementAsync());
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h2>Counter:
          <span> {this.props.count}</span>
        </h2>
        <div>
          <button onClick={this.decrement}>Substract</button>
          <button onClick={this.increment}>Add</button>
        </div>
        </header>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);