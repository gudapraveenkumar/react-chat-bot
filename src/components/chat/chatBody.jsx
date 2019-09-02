import React from 'react';
import Message from '../commons/message';

const ChatBody = (props) => {

    return (
        <div>
            {
                props.chat.map((obj) => {
                    return (
                        <div key={obj}>
                            <Message data={obj} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ChatBody;