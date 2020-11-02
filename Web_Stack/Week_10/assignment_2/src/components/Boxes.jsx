import React from 'react';
import styles from './style/Box.module.css'


const Boxes = (props) => {


    return (
        <div className={ styles.Page }>{
            props.boxes.map( (color, i) =>
                <div key = { i } className={ styles.Box } style={ color }></div>
                )
        }</div>
    );
}

export default Boxes;