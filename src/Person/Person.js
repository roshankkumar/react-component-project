import React from 'react';

const Person = (props) => {
    return (
    <div>    
        <p>I'm {props.name} and I'm {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}></input>
    </div>    
    )
};

export default Person;