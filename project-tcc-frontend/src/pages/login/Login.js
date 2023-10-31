import "./Login.css";
import * as React from "react";

function Login(props){
    return (
        <div className="login-container">
            <h1>Login</h1>
            <form className="login-form">
                <input type="text" id="username" placeholder="Username" required/>
                <input type="password" id="password" placeholder="Password" required/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};
export default Login;