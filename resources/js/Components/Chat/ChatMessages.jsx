import React from 'react';

export default function ChatMessages({ messages },userName) {
    console.log('messages',messages);
    console.log('userName',userName);
    return (
        <ul className="chat">
            {messages.map(message => {
            //console.log('message',message);
                //const username = message.user.name;
                const mes = message.message;
                // {console.log('message',message.user.name)}
                return (
                    <li>
                        <strong className="text-black">{message.user.name || userName}</strong>
                        <div className="mb-2 text-white">
                            <p className="bg-[#6CC655] inline p-1 mb-2 rounded">{mes}</p>
                        </div>
                    </li>
                )
            })}
        </ul>
    );
}