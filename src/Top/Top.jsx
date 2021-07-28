import React from 'react';
import Button from '../components/button/Button.js';
import './Top.css';
function Top() {
    return <nav className={"top"}>
    <div className="left">
        <div className="box">
            <p>Information1</p>
        </div>
        <div className="box">
            <p>Information2</p>
        </div>
        <div className="box">
            <p>Information3</p>
        </div>
    </div>
    <div className="right">
        <Button className="btn" url="/login" text="Log In" />
        <Button className="btn" url="/sign-up" text="Sign Up" />
        <Button className="btn" url="/dashboard" text="View DashBoard" />
    </div>
    </nav>
}
export default Top