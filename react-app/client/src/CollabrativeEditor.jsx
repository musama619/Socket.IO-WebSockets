import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";

function CollaborativeEditor() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [socket] = useState(socketIOClient("http://localhost:3001"));

    console.log(messages);
    const handleSubmit = (e) => {
        e.preventDefault();
        socket.emit("new message", input);
        setInput("");
    };

    useEffect(() => {
        socket.on("new message", (message) => {
            console.log("client", message);
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            socket.off("new message");
        };
    }, [setMessages]);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">Send</button>
            </form>
            <ul>
                {messages.map((message) => (
                    <li key={message}>{message}</li>
                ))}
            </ul>
        </>
    );
}

export default CollaborativeEditor;
