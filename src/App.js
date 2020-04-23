import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons : [
      {id: 'asfa1', name:'Roshan',age:28},
      {id: 'vasdf1',name:'Vedh',age:20},
      {id: 'asdf11',name:'Subs',age:29}
    ],
    otherState: 'other state value',
    showPersons: true
  };

  deletePersonHandler = (personIndex) => {
      const persons = [...this.state.persons];
      persons.splice(personIndex,1);
      this.setState({persons:persons});
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
        return p.id === id;
    });
    
    const person = {
        ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( 
      {
        persons : persons
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
          this.state.persons.map( (person,index) => {
          return <Person 
          click={ () => this.deletePersonHandler(index)}
          age={person.age} 
          name={person.name}
          key={person.id}
          changed={(event)=> this.nameChangedHandler(event, person.id)}
          />
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
