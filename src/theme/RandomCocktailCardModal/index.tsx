import React, { useState, useEffect } from "react"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { orange } from "@mui/material/colors";
import useCocktailDBClient from "../../client/useCocktailDBClient";

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
    color: "orange"
};


export default function RandomCocktailCardModal() {

    useEffect(() => {
        fetchRandomCocktail();
    }, []);


    const cocktailClient = useCocktailDBClient()
    const [cocktail, setCocktail] = useState();



    const fetchRandomCocktail = async () => {
        try {
            const res = await cocktailClient.getRandomCocktail()
            // setCocktail(res)
            console.log(res);

        } catch (err) {
            console.error(err);
        }
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Show Random Cocktail!</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
