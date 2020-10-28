import React, {Component} from 'react';
import styles from './PersonCard.module.css'



class PersonCard extends Component {


    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };

    }

    addYear = () => {

        const dnewAge = this.state.age + 1
        this.setState({age: newAge})
    }

    render() {
        return (
                <div className= { styles.PersonCard }>
                    <h1>{this.props.lastName}, {this.props.firstName}</h1>
                    <p>Age: {this.state.age}</p>
                    <p>Hair Color: {this.props.hairColor}</p>
                    <button onClick ={ this.addYear }>Button for {this.props.firstName} {this.props.lastName}</button>
                </div>
                );
    }
}

export default PersonCard;