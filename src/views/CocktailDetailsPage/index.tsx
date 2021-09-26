import React, { useEffect, useState } from "react"
import Navbar from "../../theme/Navbar"
import useCocktailDBClient, { ICocktail } from "../../client/useCocktailDBClient";
import "./style.scss"
import { useParams } from "react-router";
import { Link } from "react-router-dom"



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
        <Navbar></Navbar>

        {!cocktail && <p>Sorry, there are no details</p>}
        <div className='card-container'>

            <h2>{cocktail?.strDrink}</h2>


            <h4>{cocktail?.strAlcoholic}</h4>
            <div className="img-wrapper">
                <img

                    src={cocktail?.strDrinkThumb}
                    alt="Cocktail"
                />
            </div>

            <div className="question">
                <button className="alphabet-btn">?</button><span>Which glass should I use to serve it in? {cocktail?.strGlass}</span>

            </div>



            <p>Ingredients:</p>

            <ul>
                {cocktail?.strIngredient1 && <Link to={`/ingredient/${cocktail.strIngredient1.replace(" ", "_")}`}><li className="ingredient">{cocktail.strIngredient1}</li></Link>}
                {cocktail?.strIngredient2 && <Link to={`/ingredient/${cocktail.strIngredient2.replace(" ", "_")}`}><li className="ingredient">{cocktail.strIngredient2}</li></Link>}
                {cocktail?.strIngredient3 && <Link to={`/ingredient/${cocktail.strIngredient3.replace(" ", "_")}`}><li className="ingredient">{cocktail.strIngredient3}</li></Link>}
                {cocktail?.strIngredient4 && <Link to={`/ingredient/${cocktail.strIngredient4.replace(" ", "_")}`}><li className="ingredient">{cocktail.strIngredient4}</li></Link>}
                {cocktail?.strIngredient5 && <Link to={`/ingredient/${cocktail.strIngredient5.replace(" ", "_")}`}><li className="ingredient">{cocktail.strIngredient5}</li></Link>}
                {cocktail?.strIngredient6 && <Link to={`/ingredient/${cocktail.strIngredient6.replace(" ", "_")}`}><li className="ingredient">{cocktail.strIngredient6}</li></Link>}
                {cocktail?.strIngredient7 && <Link to={`/ingredient/${cocktail.strIngredient7.replace(" ", "_")}`}><li className="ingredient">{cocktail.strIngredient7}</li></Link>}
                {cocktail?.strIngredient8 && <Link to={`/ingredient/${cocktail.strIngredient8.replace(" ", "_")}`}><li className="ingredient">{cocktail.strIngredient8}</li></Link>}
                {cocktail?.strIngredient9 && <Link to={`/ingredient/${cocktail.strIngredient9.replace(" ", "_")}`}><li className="ingredient">{cocktail.strIngredient9}</li></Link>}
                {cocktail?.strIngredient10 && <Link to={`/ingredient/${cocktail.strIngredient10.replace(" ", "_")}`}> <li className="ingredient">{cocktail.strIngredient10}</li></Link>}
                {cocktail?.strIngredient11 && <Link to={`/ingredient/${cocktail.strIngredient11.replace(" ", "_")}`}><li className="ingredient">{cocktail.strIngredient11}</li></Link>}
                {cocktail?.strIngredient12 && <Link to={`/ingredient/${cocktail.strIngredient12.replace(" ", "_")}`}><li className="ingredient">{cocktail.strIngredient12}</li></Link>}
                {cocktail?.strIngredient13 && <Link to={`/ingredient/${cocktail.strIngredient13.replace(" ", "_")}`}><li className="ingredient">{cocktail.strIngredient13}</li></Link>}
                {cocktail?.strIngredient14 && <Link to={`/ingredient/${cocktail.strIngredient14.replace(" ", "_")}`}><li className="ingredient">{cocktail.strIngredient14}</li></Link>}
                {cocktail?.strIngredient15 && <Link to={`/ingredient/${cocktail.strIngredient15.replace(" ", "_")}`}><li className="ingredient">{cocktail.strIngredient15}</li></Link>}
            </ul>

            <span>Recipe:</span>
            <span className="recipe-text">{cocktail?.strInstructions}</span>



        </div>
        <div className="btn-wrapper">
            <Link to="/"> <button>Go Home, you're drunk!</button></Link>
        </div>
    </div>
}