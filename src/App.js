import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons : [
      {name:'Roshan',age:28},
      {name:'Vedh',age:20},
      {name:'Subs',age:29}
    ],
    otherState: 'other state value'
  };

  switchNameHandler = () => {
    this.setState( 
      {
        persons : [
          {name:'Rohith',age:38},
          {name:'Roshan',age:30},
          {name:'Vedh',age:19}
        ]
      }
  );
  }

  nameChangedHandler = (event) => {
    this.setState( 
      {
        persons : [
          {name:'Rohith',age:38},
          {name:event.target.value,age:30},
          {name:'Vedh',age:19}
        ]
      }
  );
  }

 render() {
   return (
      <div className="App">
        <h1>This is a react app</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person age={this.state.persons[0].age} name={this.state.persons[0].name}/>
        <Person age={this.state.persons[1].age} 
        name={this.state.persons[1].name}
        changed={this.nameChangedHandler}>I have a hobby</Person>
        <Person age={this.state.persons[2].age} name={this.state.persons[2].name}/>
      </div>
    );
    } 
    //  return React.createElement('div',{className:'App'},React.createElement('h1',null,'This is react app'));
    //}
  }

export default App;
