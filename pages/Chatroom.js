import React from "react";
import { useEffect, useState, useRef } from "react";
import io from "Socket.IO-client";
let socket;

const Chatroom = () => {
	useEffect(() => {
		socketInitializer();
	}, []);

	const socketInitializer = async () => {
		await fetch("/api/socket");
		socket = io();

		socket.on("connect", () => {
			console.log("connected");
		});

        socket.on('update-messages', msg => {
            setMessages([...messages, msg])
        })
	};

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const messagesRef = useRef(messages);
    const setMessages = data => {

    }

    const handleChange = e => {
        setMessage(e.target.value);
    }

    const handleSendMessage = e => {
        e.preventDefault();

        socket.emit('new-message', message);

        setMessage('')
    }

	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div className="w-4/5 min-h-[90%] border border-red-500 flex">
				
                {/* Left column */}
                <div className="w-1/3 min-h-full border border-green-500">

                </div>

                {/* right column */}
				<div className="w-2/3 min-h-full border border-purple-500 flex flex-col">
					<div className="w-full min-h-[80%] flex flex-col">
                        {messages.map(message => {
                            return(
                                <div className="w-full">
                                    {message}
                                </div>
                            )
                        })}
                    </div>

					<div className="w-full min-h-[20%] p-3 border-t flex flex-col items-center justify-evenly">
						<input
							type="text"
							name="message"
							value={message}
							onChange={handleChange}
                            className='border border-red-500 w-full pl-2 rounded-md'
                            placeholder="Enter Message..."
						/>

                        <button onClick={handleSendMessage} className="border border-black rounded-3xl w-1/6 py-2 hover:bg-gray-400 transition-all duration-300">
                            Send
                        </button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Chatroom;
