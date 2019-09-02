import React from 'react';
import '../../App.css';

const Input = ({ label, type, ...rest }) => {

    return (
        <div>
            <input className="chat-input"
                {...rest}
                type={type}
                placeholder={label}
            />
        </div>
    )
}

export default Input;