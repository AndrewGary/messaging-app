import React, { useState, useEffect } from "react";

const Login = () => {

    const [name, setName] = useState('');

    const handleChange = e => {
        setName(e.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
    }
    
	return (
		<div className="border border-red-500 flex min-h-screen w-full justify-center items-center">
			<form className=" w-1/3 h-96 border border-black-rounded flex flex-col items-center justify-evenly space-y-3 py-10">
				<label htmlFor="name" className="text-5xl">What's your name?</label>
                <input
                    name='name'
                    value={name}
                    onChange={handleChange}
                    className='border border-black border-roundedxl ml-2'
                />
                <button onClick={handleSubmit} className="border border-black rounded-3xl w-1/5 h-10 hover:bg-gray-500 transition-all duration-300">Join Chat</button>
			</form>
		</div>
	);
};

export default Login;
