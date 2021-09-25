import React from "react";
import { ICocktail } from "../../client/useCocktailDBClient";
import { useParams, Link } from 'react-router-dom';


import "./style.scss";


export interface ICocktailsListProps {
  list: ICocktail[]
}


export default function CocktailsList(props: ICocktailsListProps) {

  console.log("cocktailList", props)
  return (
    <div className="cocktails-list">
      <div>

        <h1>Cocktails List</h1>
      </div>
      <ul>
        {props.list && props.list.map((singleCocktail: ICocktail, index) => {
          return <Link to={`/${singleCocktail.idDrink}`}><li className="single-cocktail" key={index}> {singleCocktail.strDrink} </li></Link>
        })}
      </ul>
    </div>
  )
}
