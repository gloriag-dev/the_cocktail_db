import React from "react"
import axios from "axios"

export interface ICocktail {
    strDrink: string
}

export default function useCocktailDBClient() {

    const getAll = async () => {
        const res = await axios({
            url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=",
            method: "GET",
        });
        console.log(res)
        return res.data.drinks as ICocktail[]
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
            console.log(res.data.drinks);
            return res.data.drinks as ICocktail[]

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
                    f: firstLetter
                }
            });

            return res.data.drinks as ICocktail[]

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