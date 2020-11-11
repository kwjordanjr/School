import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';

const NavBar = (props) => {

    const [type, setType] = useState('');
    const [id, setId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/' + {type} + '/' + {id} + '/')

    }






    return (
    <div>
        <form onSubmit={ handleSubmit }>
            <select>
                <option onSelect={ (e) => {
                    e.preventDefault();
                    setType('people');
                }}
                >
                    people</option>
                    <option onSelect={ (e) => {
                    e.preventDefault();
                    setType('planets');
                }}
                >
                    planets</option>
            </select>
            <p>ID: </p>
            <input name="ID" onChange={ (e) => {
                setId(e.target.value);
                console.log(id);
            }}/>
            <input type='submit' value="Submit"/>
        </form>
    </div>
);
}



export default NavBar;