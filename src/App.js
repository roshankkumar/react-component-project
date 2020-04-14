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
    otherState: 'other state value',
    showPersons: true
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
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

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

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  let persons = null;

  if (this.state.showPersons) {
    persons = (
      <div>
        {
          this.state.persons.map(person => {
          return <Person 
          age={person.age} 
          name={person.name}/>
        })} 
      </div>
    );
  }
  
   return (
      <div className="App">
        <h1>This is a react app</h1>
        <button onClick={this.togglePersonHandler}
        style={style}>Toggle Persons</button>
        {persons}
      </div>
    );
    } 
    //  return React.createElement('div',{className:'App'},React.createElement('h1',null,'This is react app'));
    //}
  }

export default App;
