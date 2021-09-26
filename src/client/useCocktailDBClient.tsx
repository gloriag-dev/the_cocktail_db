import React from "react"
import axios from "axios"

export interface ICocktail {
    dateModified: string | Date;
    idDrink: string;
    strAlcoholic: string;
    strCategory: string;
    strCreativeCommonsConfirmed: string;
    strDrink: string;
    strDrinkAlternate: string;
    strDrinkThumb: string;
    strGlass: string;
    strIBA: string;
    strImageAttribution: string;
    strImageSource: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strIngredient6: string;
    strIngredient7: string;
    strIngredient8: string;
    strIngredient9: string;
    strIngredient10: string;
    strIngredient11: string;
    strIngredient12: string;
    strIngredient13: string;
    strIngredient14: string;
    strIngredient15: string;
    strInstructions: string;
    strInstructionsDE: string;
    strInstructionsES: string;
    strInstructionsFR: string;
    strInstructionsIT: string;
    strMeasure1: string;
    strMeasure2: string;
    strMeasure3: string;
    strMeasure4: string;
    strMeasure5: string;
    strMeasure6: string;
    strMeasure7: string;
    strMeasure8: string;
    strMeasure9: string;
    strMeasure10: string;
    strMeasure11: string;
    strMeasure12: string;
    strMeasure13: string;
    strMeasure14: string;
    strMeasure15: string;
    strTags: string;
    strVideo: null;
}

export interface IIngredient {
    idIngredient: string,
    strIngredient: string,
    strDescription: string,
    strType: string,
    strAlcohol: string,
    strABV: string
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
    const getRandomCocktail = async (): Promise<ICocktail> => {
        try {
            const res = await axios({
                url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
                method: "GET",
            })
            console.log(res, "random")
            return res.data.drinks[0] as ICocktail
        } catch (err) {
            console.error(err);
            throw err
        }
    }

    const getCocktailDetails = async (id: string): Promise<ICocktail | undefined> => {
        try {
            const res = await axios({
                url: "https://www.thecocktaildb.com/api/json/v1/1/lookup.php",
                method: "GET",
                params: {
                    i: id
                }
            })
            console.log(res, "details")
            return res.data?.drinks?.[0] as ICocktail
        } catch (err) {
            console.error(err, { id });
            throw err
        }
    }

    const searchIngredientByName = async (name: string): Promise<IIngredient | undefined> => {

        try {
            const res = await axios({
                url: "https://www.thecocktaildb.com/api/json/v1/1/search.php",
                method: "GET",
                params: {
                    i: name
                }
            })
            console.log(res.data.ingredients, "ingredient details res")
            return res.data?.ingredients?.[0] as IIngredient

        } catch (err) {
            console.error(err, { name });
            throw err
        }
    }
    return {
        searchCocktails: searchByName,
        searchByFirstLetter,
        getAll,
        getRandomCocktail,
        getCocktailDetails,
        searchIngredientByName
    }

}