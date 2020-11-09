import React, { useState } from 'react';

const ListTask = (props) => {

    const toggleCheck = (e) => {

    }
    
    return (
        <div>{
            props.tasks.map((task, i) =>
                <div key = { i } >
                    <p>{ task }</p>
                    <input type="checkbox" onChange={ (e) => toggleCheck(e.target.value) } >
                    </input>
                    
                    
                </div>
                )
        }</div>
    );



};

export default ListTask;