import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
        { name: 'Max', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    this.setState(
      {
        persons: [
          { name: newName, age: 28 },
          { name: 'Manu', age: 29 },
          { name: 'Stephanie', age: 26 },
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState(
      {
        persons: [
          { name: 'Max', age: 28 },
          { name: event.target.value, age: 29 },
          { name: 'Stephanie', age: 26 },
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, i'm a react app</h1>
        <p>This is really working</p>
        <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler}> Hello </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
      </div>
    );
    // () => funcs less efficent than bind()
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m React App!!'))
  }
}

export default App;
