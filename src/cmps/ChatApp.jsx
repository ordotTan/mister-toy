import React from 'react';

export default class ChatApp extends React.Component {
    render() {
        return <section className="chat">
            <h1>This is chat window (under construction)</h1>
            <input type="text" name="chat-msg" placeholder="Your line here"></input>
            <button>Send</button>
        </section>
    }
}