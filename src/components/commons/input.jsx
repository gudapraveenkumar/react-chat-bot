import React from 'react';
import TextField from '@material-ui/core/TextField';

const Input = ({...rest}) =>{
    return(
        <div>
            <TextField
                {...rest}
                margin="normal"
                variant="outlined"
            />
        </div>
    )
}

export default Input;