const {Country} = require("../db")
const axios = require("axios")
const getAllCountries = async()=>{
    let rowcountries = await axios.get("https://restcountries.com/v3.1/all")

    let countries = await rowcountries.data.map((c) => {
        let country ={
            id:c.cca3, 
            name:c.name.common,
            image:c.flags.png,
            continent:c.continents[0],
            capital:c.capital ? c.capital[0]: "There is no capital",
            subregion:c.subregion ? c.subregion: "There is no subregion",
            population:c.population,
            area:c.area,
         };
         Country.findOrCreate ({where: country});
});
};

module.exports = getAllCountries;