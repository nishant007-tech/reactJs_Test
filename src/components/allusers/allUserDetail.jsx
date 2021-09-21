import React from 'react'
import './alluser.css'

function AllUserDetail() {


    let user = JSON.parse(localStorage.getItem("LoggedUser"))
    let users = JSON.parse(localStorage.getItem("users"));
    const handleLogout = () => {
        localStorage.removeItem("LoggedUser");
        window.location = "/"
    }

    return (
        <div className="allUsers">
            <h2>Welcome , <span style={{ color: "#61acb3" }}>{user}</span></h2>
            <b onClick={handleLogout} style={{ color: "#61acb3", textDecoration: "underline", cursor: "pointer" }}>LogOut</b>
            <h3>List of all Registered Users!</h3>
            {users?.map(item => (
                <div className="userCard">
                    <b>{item.name}</b>
                    <p>{item.email}</p>
                </div>
            ))
            }
        </div>
    )
}

export default AllUserDetail
