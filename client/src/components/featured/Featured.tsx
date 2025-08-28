import React from "react";
import "./featured.scss"

const Featured = function () {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src="https://images.unsplash.com/photo-1587161584760-f51779fb276a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>123 properties</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img src="https://images.unsplash.com/photo-1621692117848-98c3bf55013a?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>123 properties</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img src="https://plus.unsplash.com/premium_photo-1676423883826-574b115cb955?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>123 properties</h2>
                </div>
            </div>

        </div>
    )
}

export default Featured