import React, { useState } from 'react';

const AddTask = (props) => {

    const [task, setTask] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewTask( task )
    };

    return (
        <form onSubmit={ handleSubmit }>
            <input
                onChange={ (e) => setTask(e.target.value) }
                value={ task }
            ></input>
            <input type="submit" value="Add" />
        </form>
    )

};

export default AddTask;