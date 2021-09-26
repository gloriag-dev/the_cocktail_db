import React from "react"
import "./style.scss"

export default function Navbar() {
    return <div className="logo-container">
        <img className="logo-img" alt="the_cocktail_db Logo" src="/sunny.png"></img>
        <span className="title"> The Cocktail DB</span>
    </div>
}