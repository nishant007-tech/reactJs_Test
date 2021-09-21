import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {

    const [state, setstate] = useState({
        email: "",
        password: "",
    })

    let users = JSON.parse(localStorage.getItem("users"));

    const handleChange = (e) => {
        setstate({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            let isEmailExist = users.some(item =>
                item.email == state.email && item.password == state.password
            )
            if (isEmailExist) {
                localStorage.setItem("LoggedUser", JSON.stringify(state.email))
                window.location = "/all_users";
            } else {
                alert("Invalid Credentials!!! Make sure username or password is correct.");
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="registerContainer">
            <div className="firstSection">
                <img src="/images/bg.jpg" alt="side_image" />
            </div>
            <div className="secondSection">
                <form onSubmit={handleSubmit}>
                    <h3>Welcome back !</h3>
                    <p>Please login to your account.</p>
                    <input onChange={handleChange} type="email" name="email" id="username" placeholder="Username" />
                    <input onChange={handleChange} type="password" id="password" name="password" placeholder="Password" />
                    <div className="rememberUsSection">
                        <div>
                            <input type="checkbox" id="checkBox" />
                            <label htmlFor="checkBox">Remember Me</label>
                        </div>
                        <span>
                            <Link to="/">
                                Forgot Password
                            </Link>
                        </span>
                    </div>

                    <button type="submit">Login</button>
                </form>
                <div className="compliance">
                    <p>Terms of use. Privacy Policy.</p>
                </div>
            </div>
        </div>
    )
}

export default Login
