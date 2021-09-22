/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, ReactNode } from "react"
import CocktailCard from "../../components/CocktailCard"
import Navbar from "../../theme/Navbar"
import axios from "axios"
import searchCocktails, { ICocktail } from "../../client/useCocktailDBClient"
import useCocktailDBClient from "../../client/useCocktailDBClient"


export default function Home() {

    const cocktailClient = useCocktailDBClient()

    const [cocktailList, setCocktailList] = useState<ICocktail[]>()

    const onChoseLetter = (letter: string) => {
        fetchByLetter(letter)
    }
    const handleSearch = (search: string) => {
        fetchBySearch(search)
    }

    // useEffect(() => {
    //     fetchListData();
    // }, []);
    // const fetchListData = async () => {
    //     try {
    //         const data = await cocktailClient.searchCocktails()
    //         setCocktailList(data)
    //         //console.log(res);
    //     } catch (err) {
    //         console.error(err);
    //     }
    // }

    const fetchBySearch = async (search: string) => {
        try {
            const data = await cocktailClient.searchCocktails(search);
            setCocktailList(data)
            //console.log(res);
        } catch (err) {
            console.error(err);
        }
    };

    const fetchByLetter = async (letter: string) => {
        try {
            const res = await axios({
                url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?",
                method: "GET",
                params: {
                    letter: "p"
                }
            });
            setCocktailList(res.data)
            //console.log(res);
        } catch (e) {
            console.error(e);
        }
    };
    return (<div>

        <Navbar></Navbar>
        <CocktailCard></CocktailCard>
    </div>)
}