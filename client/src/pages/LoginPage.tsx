import React, { useState, useContext, FormEvent } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import './PostPage.css'

export default function LoginPage() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [redirect, setRedirect] = useState<Boolean>(false);

    const context = useContext(UserContext);
    if (!context) {
        throw new Error("LoginPage must be used within a UserProvider");
    }
    const { setUserInfo } = context;

    async function login(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });
        if (response.ok) {
            const userInfo = await response.json();
            setUserInfo(userInfo);
            setRedirect(true);
        } else {
            alert('WRONG CREDENTIALS');
        }
    }

    if (redirect) {
        return <Navigate to="/" />;
    }

    return (
        <form className="login" onSubmit={login}>
            <h1>Login</h1>
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button>Login</button>
        </form>
    );
}