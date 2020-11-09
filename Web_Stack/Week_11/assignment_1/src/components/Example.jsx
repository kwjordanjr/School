import React, { useState, useEffect } from 'react';



const Example = (props) => {
  const [people, setPeople] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon-species/?limit=-1')
        .then(response => response.json())
        .then(response => setPeople(response.results))
  }, []);

  const showData = (flag) => {
      if (flag) {
           return (
           <div>
               {people.length >0 && people.map((person,index)=>{
                   return (
                   <div key={index}>
                       <ul>
                           <li>{person.name}</li>
                           </ul>
                           </div>)})}
            </div>)
        } else {
            return ""
        }};



  return (
      <div style={{'margin-left': '45vw'}}>
          <input onClick={ (e) => setFlag(!flag)} type="submit" value="Fetch Pokemon"></input>
          { showData(flag) }
          
      </div>
  );
}
  
  export default Example;