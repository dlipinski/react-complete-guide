import React, { Component } from 'react';
import './App.css';

import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    chars: ''
  }

  inputChangeHandler = (event) => {
    this.setState({chars: event.target.value});
  }

  deleteCharHandler = (charIndex) => {
    const chars = [...this.state.chars];
    chars.splice(charIndex, 1);
    this.setState({chars: chars.join('')})
  }

  render() {
    const chars = [...this.state.chars].map((char, index) => {
          return <Char
            key={index}
            char={char}
            click={() => this.deleteCharHandler(index)} />
        }
    )

    return (
      <div className="App">
        <input
          type='text'
          onChange={this.inputChangeHandler}
          value={this.state.chars} />
        <p>{this.state.chars.length}</p>
        <Validation
          length={this.state.chars.length} />
        {chars}
      </div>
    );
  }
}

export default App;
