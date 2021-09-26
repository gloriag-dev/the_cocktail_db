import React, { useState, useEffect } from "react"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useCocktailDBClient, { ICocktail } from "../../client/useCocktailDBClient";
import "./style.scss"
import { Link } from "react-router-dom"

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'black',
    border: '4px solid orangered',
    boxShadow: 24,
    p: 4,

};


export default function RandomCocktailCardModal() {

    useEffect(() => {
        fetchRandomCocktail();
    }, []);


    const cocktailClient = useCocktailDBClient()
    const [cocktail, setCocktail] = useState<ICocktail>();



    const fetchRandomCocktail = async () => {
        try {
            const drinks = await cocktailClient.getRandomCocktail()
            setCocktail(drinks)
            console.log(drinks, "randooom cocktaiiiils");


        } catch (err) {
            console.error(err);
        }
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (

        <div className="random-ck-modal">

            <Button onClick={handleOpen}>Show Random Cocktail!</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h2 id="modal-modal-title">
                        {cocktail?.strDrink}
                    </h2>
                    <div className="img-wrapper">
                        <img alt="cocktail" src={cocktail?.strDrinkThumb} ></img>
                    </div>
                    <div className="question">
                        <button className="alphabet-btn">?</button><span>Which glass should I use to serve it in? {cocktail?.strGlass}</span>

                    </div>
                    <p>Ingredients:</p>
                    <ul>
                        {cocktail?.strIngredient1 && <Link to={`/ingredient/${cocktail.strIngredient1.replace(" ", "_")}`}><li className="ingredient">{cocktail.strIngredient1}</li></Link>}
                        {cocktail?.strIngredient2 && <Link to={`/ingredient/${cocktail.strIngredient2.replace(" ", "_")}`}> <li className="ingredient">{cocktail.strIngredient2}</li></Link>}
                        {cocktail?.strIngredient3 && <Link to={`/ingredient/${cocktail.strIngredient3.replace(" ", "_")}`}> <li className="ingredient">{cocktail.strIngredient3}</li></Link>}
                        {cocktail?.strIngredient4 && <Link to={`/ingredient/${cocktail.strIngredient4.replace(" ", "_")}`}> <li className="ingredient">{cocktail.strIngredient4}</li></Link>}
                        {cocktail?.strIngredient5 && <Link to={`/ingredient/${cocktail.strIngredient5.replace(" ", "_")}`}><li className="ingredient">{cocktail.strIngredient5}</li></Link>}
                        {cocktail?.strIngredient6 && <Link to={`/ingredient/${cocktail.strIngredient6.replace(" ", "_")}`}><li className="ingredient">{cocktail.strIngredient6}</li></Link>}
                        {cocktail?.strIngredient7 && <Link to={`/ingredient/${cocktail.strIngredient7.replace(" ", "_")}`}><li className="ingredient">{cocktail.strIngredient7}</li></Link>}
                        {cocktail?.strIngredient8 && <Link to={`/ingredient/${cocktail.strIngredient8.replace(" ", "_")}`}><li className="ingredient">{cocktail.strIngredient8}</li></Link>}
                        {cocktail?.strIngredient9 && <Link to={`/ingredient/${cocktail.strIngredient9.replace(" ", "_")}`}><li className="ingredient">{cocktail.strIngredient9}</li></Link>}
                        {cocktail?.strIngredient10 && <Link to={`/ingredient/${cocktail.strIngredient10.replace(" ", "_")}`}><li className="ingredient">{cocktail.strIngredient10}</li></Link>}
                        {cocktail?.strIngredient11 && <Link to={`/ingredient/${cocktail.strIngredient11.replace(" ", "_")}`}><li className="ingredient">{cocktail.strIngredient11}</li></Link>}
                        {cocktail?.strIngredient12 && <Link to={`/ingredient/${cocktail.strIngredient12.replace(" ", "_")}`}><li className="ingredient">{cocktail.strIngredient12}</li></Link>}
                        {cocktail?.strIngredient13 && <Link to={`/ingredient/${cocktail.strIngredient13.replace(" ", "_")}`}><li className="ingredient">{cocktail.strIngredient13}</li></Link>}
                        {cocktail?.strIngredient14 && <Link to={`/ingredient/${cocktail.strIngredient14.replace(" ", "_")}`}><li className="ingredient">{cocktail.strIngredient14}</li></Link>}
                        {cocktail?.strIngredient15 && <Link to={`/ingredient/${cocktail.strIngredient15.replace(" ", "_")}`}><li className="ingredient">{cocktail.strIngredient15}</li></Link>}
                    </ul>
                    <span>Recipe:</span>
                    <span className="recipe-text">{cocktail?.strInstructions}</span>
                </Box>
            </Modal>
        </div>
    );
}
