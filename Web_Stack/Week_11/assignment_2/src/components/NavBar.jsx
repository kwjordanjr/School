import React, { useState } from 'react';
import { navigate } from '@reach/router';

const NavBar = (props) => {

    //const [type, setType] = useState('');
    const [type, setType] = useState('');
    const [id, setId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/' + type + '/' + id + '/')

        
    }

    const changeType = (newType) => {
        setType(newType)
      }



    return (
    <div>
        <form name ='data' onSubmit={ handleSubmit }>
        <select 
        onChange={(event) => changeType(event.target.value)}
        value={type}>
                <option value='people'>people</option>
                <option value='planets'>planets</option>
            </select>
            <p>ID: </p>
            <input name="ID" onChange={ (e) => {
                e.preventDefault()
                setId(e.target.value);
                console.log('/' + type + '/' + id + '/');
            }}/>
            <input type='submit' value="Submit"/>
        </form>
    </div>
);
}



export default NavBar;