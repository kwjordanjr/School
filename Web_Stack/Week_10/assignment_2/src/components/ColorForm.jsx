import react, { useState } from 'react';

const ColorForm = (props) => {
    const [color, setColor] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewColor( color )
    };

    return (
        <form onSubmit={ handleSubmit }>
            <p>Color</p>
            <input
                onChange={ (e) => setColor(e.target.value) }
                value={ color }
            ></input>
            <input type="submit" value="Add" />
        </form>
    )
};

export default ColorForm;