/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react"
import CocktailCard from "../../components/CocktailCard"
import Navbar from "../../theme/Navbar"
import axios from "axios"
import searchCocktails, { ICocktail } from "../../client/useCocktailDBClient"
import useCocktailDBClient from "../../client/useCocktailDBClient"
import SearchBar from "../../components/SearchBar"
import CocktailsList from "../../components/CocktailsList"
import LetterWidget from "../../components/LetterWidget"

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
            setCocktailList(res)
            console.log(res, "GET all");

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
            const res = await cocktailClient.searchByFirstLetter(firstLetter)
            setCocktailList(res)
            console.log(res, "fetch by letter");
        } catch (e) {
            console.error(e);
        }
    };

    return (<div className="home">
        <Navbar></Navbar>
        <CocktailCard></CocktailCard>
        <SearchBar e={undefined} onChange={handleSearch}></SearchBar>
        {cocktailList && <CocktailsList list={cocktailList}></CocktailsList>}
        {!cocktailList && <h3 className="no-list-placeholder">Sorry, there are no matching cocktails, try again!</h3>}
        <LetterWidget onChange={onChoseLetter} letter={""}></LetterWidget>
    </div>)
}