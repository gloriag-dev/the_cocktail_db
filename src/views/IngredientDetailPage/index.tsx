import React, { useState, useEffect } from "react"
import useCocktailDBClient, { IIngredient } from "../../client/useCocktailDBClient";
import { useParams } from "react-router";
import Navbar from "../../theme/Navbar";
import { Link } from "react-router-dom";
import "./style.scss"


export default function IngredientDetailPage() {
    const params = useParams<{ name: string }>()

    useEffect(() => {
        fetchIngredientDetailsByName(params.name)

    }, [params.name]);

    const cocktailClient = useCocktailDBClient()
    const [ingredient, setIngredient] = useState<IIngredient>()

    const fetchIngredientDetailsByName = async (name: string) => {
        try {
            const ingredient = await cocktailClient.searchIngredientByName(name)
            console.log(ingredient, "search by nameeeeeeeeee")
            setIngredient(ingredient)

        } catch (e) {
            console.error(e);
        }
    }

    return <div className="ingredient-page">
        <Navbar></Navbar>
        {!ingredient && <p>Sorry, there are no details</p>}
        <div className="card">
            <h2>{ingredient?.strIngredient}</h2>
            <h3>{ingredient?.strABV}</h3>

            <img src={"https://www.thecocktaildb.com/images/ingredients/" + params.name.replace("_", "%20") + ".png"} alt="ingredient"></img>
            {!ingredient?.strDescription && <span>Sorry, no description available for this item</span>}
            <span>{ingredient?.strDescription}</span>
        </div>
        <div className="btn-wrapper">
            <Link to="/"> <button>Go Home, you're drunk!</button></Link>
        </div>

    </div>
}
