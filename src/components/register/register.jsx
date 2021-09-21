import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import './register.css'


function Register() {

    let history = useHistory()

    const [state, setstate] = useState({
        name: "",
        mobile: "",
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        if (e.target.name == "name") {
            var regEx = /^[A-Za-z\s]+$/;
            if (e.target.value.match(regEx)) {
                setstate({
                    ...state,
                    [e.target.name]: e.target.value
                })
            } else {
                alert("Name should be a letter");
            }
        } else {
            setstate({
                ...state,
                [e.target.name]: e.target.value
            })
        }

    }
    const handleSubmit = (e) => {
        try {
            var regEx = /^\S+@\S+$/
            if (state.mobile.length == 10) {
                if (regEx.test(state.email)) {
                    if (state.password.length >= 8) {
                        let users = JSON.parse(localStorage.getItem("users"));
                        if (users) {
                            localStorage.setItem("users", JSON.stringify([...users, state]));
                            history.push("/login")
                        } else {
                            localStorage.setItem("users", JSON.stringify([state]));
                            history.push("/login")
                        }
                    } else {
                        alert("Password should be 8 character long!")
                    }
                } else {
                    alert("Email should be valid!")
                }
            } else {
                alert("Mobile Number should be of 10 digit!")
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
                <form>
                    <h3>Welcome!</h3>
                    <p>Please register here.</p>
                    <input onChange={handleChange} value={state.name} type="text" id="name" name="name" placeholder="Name" required />
                    <input onChange={handleChange} value={state.mobile} type="number" maxLength="10" id="mobile" name="mobile" placeholder="Mobile" required />
                    <input onChange={handleChange} autoComplete={false} value={state.email} type="email" id="email" name="email" placeholder="Email Id" required />
                    <input onChange={handleChange} type="password" id="password" name="password" placeholder="Password" required />
                    <button onClick={handleSubmit}>Register</button>
                    {"OR"}
                    <Link to="/login">
                        Login
                    </Link>
                </form>
                <div className="compliance">
                    <p>Terms of use. Privacy Policy.</p>
                </div>
            </div>
        </div>
    )
}

export default Register
