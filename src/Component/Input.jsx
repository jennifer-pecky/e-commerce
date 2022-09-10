import React from 'react';

const Input = ({ type, id, placeholder, onChange }) => {
    return (
        <input type={type} name={id} placeholder={placeholder} id={id} onChange={onChange} />
    )
}

export default Input;