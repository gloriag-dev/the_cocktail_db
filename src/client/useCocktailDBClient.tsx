import React from "react"
import axios from "axios"

export interface ICocktail {

}

export default function useCocktailDBClient() {


    const searchCocktails = async (search: string): Promise<ICocktail[]> => {
        try {
            const res = await axios({
                url: "https://www.thecocktaildb.com/api/json/v1/1/search.php",
                method: "GET",
                params: {
                    search
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
        searchCocktails
    }

}