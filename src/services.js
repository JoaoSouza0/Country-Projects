export const api = {

    async getCountry(endpoint) {
        const data = await (await fetch(`https://restcountries.com/v2${endpoint}`)).json()
        return data
    }
}