import React from 'react';
import Message from './commons/message';

const ChatBody = (props) => {

    return (
        <div>
            {
                props.chat.map((obj, index) => {
                    return (
                        <div key={index}>
                            <Message data={obj} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ChatBody;