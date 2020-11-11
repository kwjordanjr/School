import React, { useState, useEffect } from 'react';



//{people[props.id].name}


const Example = (props) => {
  const [people, setPeople] = useState([]);

  var addr = 'https://swapi.dev/api/' + props.type + '/' + props.id + '/';

  

  useEffect(() => {
      fetch(addr)
        .then(response => response.json())
        .then(response => setPeople(response))
        .then(response => console.log(response))
  }, []);

  return (

    <div>
        <p>{props.type}</p>
        <p>{Object.keys(people)[0]}: {people[Object.keys(people)[0]]}</p>
        <p>{Object.keys(people)[1]}: {people[Object.keys(people)[1]]}</p>
        <p>{Object.keys(people)[2]}: {people[Object.keys(people)[2]]}</p>
        <p>{Object.keys(people)[3]}: {people[Object.keys(people)[3]]}</p>
        <p>{Object.keys(people)[4]}: {people[Object.keys(people)[4]]}</p>
        
        
    </div>
    );
}
  
  export default Example;