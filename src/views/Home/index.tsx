/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, ReactNode } from "react"
import CocktailCard from "../../components/CocktailCard"
import Navbar from "../../theme/Navbar"
import axios from "axios"
import searchCocktails, { ICocktail } from "../../client/useCocktailDBClient"
import useCocktailDBClient from "../../client/useCocktailDBClient"
import SearchBar from "../../components/SearchBar"


export default function Home() {

    const cocktailClient = useCocktailDBClient()

    const [cocktailList, setCocktailList] = useState<ICocktail[]>()

    const onChoseLetter = (firstLetter: string) => {
        fetchByFirstLetter(firstLetter)
    }
    const handleSearch = (search: string) => {
        fetchBySearch(search)
    }

    useEffect(() => {
        fetchListData();
    }, []);



    const fetchListData = async () => {
        try {
            const res = await cocktailClient.getAll()
            // setCocktailList(res.data)
            //console.log(res);

        } catch (err) {
            console.error(err);
        }
    }

    const fetchBySearch = async (search: string) => {
        try {
            const data = await cocktailClient.searchCocktails(search);
            setCocktailList(data)
            //console.log(res);
        } catch (err) {
            console.error(err);
        }
    };

    const fetchByFirstLetter = async (firstLetter: string) => {
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
        <SearchBar e={undefined} onChange={handleSearch}></SearchBar>
    </div>)
}