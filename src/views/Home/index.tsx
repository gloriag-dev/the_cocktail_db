/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react"
import useCocktailDBClient, { ICocktail } from "../../client/useCocktailDBClient"
import CocktailsList from "../../components/CocktailsList"
import LetterWidget from "../../components/LetterWidget"
import SearchBar from "../../components/SearchBar"
import RandomCocktailButton from "../../components/RandomCocktailCardButton"

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
            const data = await cocktailClient.getByName(search);
            setCocktailList(data)
            //console.log(res);
        } catch (err) {
            console.error(err);
        }
    };

    const fetchByFirstLetter = async (firstLetter: string) => {
        try {
            const res = await cocktailClient.getByFirstLetter(firstLetter)
            setCocktailList(res)
            console.log(res, "fetch by letter");
        } catch (e) {
            console.error(e);
        }
    };

    return (<div className="home">
        <RandomCocktailButton></RandomCocktailButton>
        <SearchBar onChange={handleSearch}></SearchBar>
        {cocktailList ? <CocktailsList list={cocktailList}></CocktailsList> : <h3 className="no-list-placeholder">Sorry, there are no matching cocktails, try again!</h3>}
        <LetterWidget onChange={onChoseLetter}></LetterWidget>
    </div >)
}