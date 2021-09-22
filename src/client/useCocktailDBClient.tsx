import React from "react"
import axios from "axios"

export interface ICocktail {

}

export default function useCocktailDBClient() {

    const getAll = async () => {
        const res = await axios({
            url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=",
            method: "GET",
        });
        console.log(res)
    }
    const searchByName = async (search: string): Promise<ICocktail[]> => {
        try {
            const res = await axios({
                url: "https://www.thecocktaildb.com/api/json/v1/1/search.php",
                method: "GET",
                params: {
                    s: search
                }
            });
            console.log(res.data);
            return res.data as ICocktail[]

        } catch (err) {
            console.error(err);
            throw err
        }
    }

    const searchByFirstLetter = async (firstLetter: string): Promise<ICocktail[]> => {
        try {
            const res = await axios({
                url: "https://www.thecocktaildb.com/api/json/v1/1/search.php",
                method: "GET",
                params: {
                    s: firstLetter
                }
            });
            console.log(res.data);
            return res.data as ICocktail[]

        } catch (err) {
            console.error(err);
            throw err
        }
    }

    return {
        searchCocktails: searchByName,
        searchByFirstLetter,
        getAll
    }

}