import React, { useEffect, useState } from "react"
import Navbar from "../../theme/Navbar"
import useCocktailDBClient, { ICocktail } from "../../client/useCocktailDBClient";
import "./style.scss"
import { useParams } from "react-router";
import { Link } from "react-router-dom"
import { CocktailPane } from "../../components/RandomCocktailCardButton/RandomCocktailCardButton";



export default function CocktailDetailsPage() {

    const params = useParams<{ id: string }>()

    useEffect(() => {
        fetchById(params.id);
    }, [params.id]);



    const [cocktail, setCocktail] = useState<ICocktail>();
    const cocktailClient = useCocktailDBClient()


    const fetchById = async (id: string) => {
        try {
            const cocktail = await cocktailClient.getCocktailDetails(id);
            setCocktail(cocktail)

        } catch (err) {
            console.error();
        }
    };
    return <div className="details-page">
        {cocktail ? <CocktailPane data={cocktail} /> : <p>Sorry, there are no details</p>}
        <div className="btn-wrapper">
            <Link to="/"> <button>Go Home, you're drunk!</button></Link>
        </div>
    </div>
}