import React, { useState } from "react";
import Input from "./Input";

const Hello = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const handleNameChange = (e) => {
        // let myName = e.target.value;
        // setUsername(myName);
        setUsername(e.target.value);
    }

    const handleEmailChange = (e) => {
        // let myEmail = e.target.value;
        // setEmail(myEmail);
        setEmail(e.target.value);
    }

    const handleAgeChange = (e) => {
        setNumber(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(username);
        console.log(email);
        console.log(number)
    }

    return (
        <div className="dummyClass">
            <h1>
                Good morning, Mr David
            </h1>

            <form onSubmit={handleSubmit}>
                <Input type="text" placeholder="My name is..." id="username" onChange={handleNameChange} />
                <Input type="email" placeholder="My email is..." id="email" onChange={handleEmailChange} />
                <Input type="number" placeholder="Enter your age..." id="number" onChange={handleAgeChange} />
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default Hello