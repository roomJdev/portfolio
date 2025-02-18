import React from "react"

function Clock() {
    return (
        <div>
            <h1>안녕, 리액트!</h1>
            <h2>현재 시간 : {new Date().toLocaleTimeString()}</h2>
            <h3>Have a nice day!</h3>
            <h4>Heyheyhey</h4>
            <h5>gogogogo</h5>
            <h6>wowowowowowoowowow</h6>
            <h3>Why? Not working?</h3>
        </div>
    );
}

export default Clock;