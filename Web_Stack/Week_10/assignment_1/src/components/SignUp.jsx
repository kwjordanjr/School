import React, { useState } from 'react';
import styles from './styles/SignUp.module.css'

const SignUp = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("")

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmError, setConfirmError] = useState("");


    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2) {
            setFirstNameError("First Name must be at least 2 characters");
        } else {
            setFirstNameError("");
        }

    };

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2) {
            setLastNameError("Last Name must be at least 2 characters");
        } else {
            setLastNameError("");
        }

    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters");
        } else {
            setEmailError("");
        }

    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters");
        } else {
            setPasswordError("");
        }

        if(confirm == password) {
            setConfirmError("")
        } else {
            setConfirmError("Passwords must match")
        }
    };


    const passwordMatch = () => {
        if (confirm == password) {
            return ""
        } else {
            return "Passwords must match"
        }
    }

    return(
        <div className={ styles.page }>

            <form onSubmit={ createUser }>

                <div className={ styles.card }>
                    <label>First Name: </label>
                    <input type="text" onChange={ handleFirstName } value={ firstName }/>
                    { firstNameError ? <p>{ firstNameError }</p> : '' }

                </div>

                <div className={ styles.card }>
                    <label>Last Name: </label>
                    <input type="text" onChange={ handleLastName } value={ lastName }/>
                    { lastNameError ? <p>{ lastNameError }</p> : '' }

                </div>

                <div className={ styles.card }>
                    <label>Email: </label>
                    <input type="text" onChange={ handleEmail } value={ email }/>
                    { emailError ? <p>{ emailError }</p> : '' }

                </div>

                <div className={ styles.card }>
                    <label>Password: </label>
                    <input type="text" onChange={ handlePassword } />
                    { passwordError ? <p>{ passwordError }</p>: '' }
                    <p>{ passwordMatch() }</p>

                </div>

                <div className={ styles.card }>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ (e) => setConfirm(e.target.value) } />
                
                </div>

            </form>
        </div>
        

        
    );
};

export default SignUp;