import React, { useState, useEffect } from "react"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useCocktailDBClient, { ICocktail } from "../../client/useCocktailDBClient";
import "./style.scss"
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
                        {cocktail?.strIngredient1 && <li className="ingredient">{cocktail.strIngredient1}</li>}
                        {cocktail?.strIngredient2 && <li className="ingredient">{cocktail.strIngredient2}</li>}
                        {cocktail?.strIngredient3 && <li className="ingredient">{cocktail.strIngredient3}</li>}
                        {cocktail?.strIngredient4 && <li className="ingredient">{cocktail.strIngredient4}</li>}
                        {cocktail?.strIngredient5 && <li className="ingredient">{cocktail.strIngredient5}</li>}
                        {cocktail?.strIngredient6 && <li className="ingredient">{cocktail.strIngredient6}</li>}
                        {cocktail?.strIngredient7 && <li className="ingredient">{cocktail.strIngredient7}</li>}
                        {cocktail?.strIngredient8 && <li className="ingredient">{cocktail.strIngredient8}</li>}
                        {cocktail?.strIngredient9 && <li className="ingredient">{cocktail.strIngredient9}</li>}
                        {cocktail?.strIngredient10 && <li className="ingredient">{cocktail.strIngredient10}</li>}
                        {cocktail?.strIngredient11 && <li className="ingredient">{cocktail.strIngredient11}</li>}
                        {cocktail?.strIngredient12 && <li className="ingredient">{cocktail.strIngredient12}</li>}
                        {cocktail?.strIngredient13 && <li className="ingredient">{cocktail.strIngredient13}</li>}
                        {cocktail?.strIngredient14 && <li className="ingredient">{cocktail.strIngredient14}</li>}
                        {cocktail?.strIngredient15 && <li className="ingredient">{cocktail.strIngredient15}</li>}
                    </ul>
                    <span>Recipe:</span>
                    <span className="recipe-text">{cocktail?.strInstructions}</span>
                </Box>
            </Modal>
        </div>
    );
}
