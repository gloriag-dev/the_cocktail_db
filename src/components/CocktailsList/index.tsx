import React from "react";
import { ICocktail } from "../../client/useCocktailDBClient";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./style.scss";


export interface ICocktailsListProps {
  list: ICocktail[]
}
export default function CocktailsList(props: ICocktailsListProps) {
  const goToDetailsPage = () => {
    console.log("DetailsPage")
  }

  console.log("cocktailList", props)
  return (
    <div className="cocktails-list">
      <div>

        <h1>Cocktails List</h1>
      </div>
      <ul>
        {props.list && props.list.map((singleCocktail: ICocktail, index) => {
          return <li className="single-cocktail" key={index} onClick={goToDetailsPage}>{singleCocktail.strDrink} </li>
        })}
      </ul>
    </div>
  )
}
