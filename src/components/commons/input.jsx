import React from 'react';

const Input = ({label, type, ...rest}) =>{

    const inputStyle={
        width: '100%',
        padding: '12px',
        borderRadius: '16px',
        boxShadow: '0px 0px 3px 1px #9e9c9c',
        border: '0px'
    }

    return(
        <div>
            <input style={inputStyle}
                {...rest}
                type= {type}
                placeholder = {label}
            />
        </div>
    )
}

export default Input;