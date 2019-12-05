import React, {Component,useState } from "react";
import {useHistory} from "react-router-dom";

export  function Logo() {
    const [count, setCount] = useState(0);
    const [userno, setUser] = useState(1);
    let history=useHistory();
    function setUserNo() {
        setUser(2);
        setCount(3);
        history.push("/about");
    }
    return (
        <div>
        <button onClick={setUserNo}>Hello</button>
        <h2>{count}</h2>
        <h2>{userno}</h2>
        </div>
    );
}


