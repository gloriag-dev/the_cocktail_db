import useCocktailDBClient from './useCocktailDBClient';

describe('useCocktailDBClient', () => {

    test('getAll', async () => {
        const client = useCocktailDBClient()
        const result = await client.getAll()
        expect(Array.isArray(result)).toBe(true);
    });

    test('getByName', async () => {
        const client = useCocktailDBClient()
        const result = await client.getByName("margarita")
        expect(result).not.toBeNull();
    });

    test('getDetails', async () => {
        const client = useCocktailDBClient()
        const result = await client.getCocktailDetails("13501")
        expect(result).not.toBeNull();
        expect(result?.strDrink).toBe("ABC")
        expect(result?.strAlcoholic).toBe("Alcoholic")
        expect(result?.idDrink).toBe("13501")
    });

    test('getVodka', async () => {
        const client = useCocktailDBClient()
        const result = await client.getIngredientByName("vodka")
        expect(result).not.toBeNull();
    });

})