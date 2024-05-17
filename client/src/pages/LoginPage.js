import { useState } from "react";

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form className="login" action="">
            <h1>Login</h1>
            <input type="text" placeholder="username" ></input>
            <input type="password" placeholder="password"></input>
            <button>Login</button>
        </form>
    )
}