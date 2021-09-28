import React from "react"
import "./style.scss"
import { Link } from 'react-router-dom'

export default function Navbar() {
    return <Link className="logo-container" to="/">
        <img className="logo-img" alt="the_cocktail_db Logo" src={process.env.PUBLIC_URL + "/sunny.png"}></img>
        <span className="title"> The Cocktail DB</span>
    </Link>
}