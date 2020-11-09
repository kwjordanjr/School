import React, { useState, useEffect } from 'react';



const Example = (props) => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
      fetch('https://swapi.dev/api/people')
        .then(response => response.json())
        .then(response => setPeople(response.results))
  }, []);

  return (
      <div>
          {people.length >0 && people.map((person,index)=>{
              return (<div key={index}>
                <p>Name: {person.name}</p>
                <p>Gender: {person.gender}</p>
                </div>)
          })}
      </div>
  );
}
  
  export default Example;