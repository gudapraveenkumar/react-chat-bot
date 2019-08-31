import React from 'react';

const Input = ({...rest}) =>{

    const inputStyle={
        width: '100%',
        padding: '12px',
        borderRadius: '16px',
        boxShadow: '0px 0px 3px 1px #c3c2c2',
        border: '0px'
    }

    return(
        <div>
            <input style={inputStyle}
                {...rest}
            />
        </div>
    )
}

export default Input;