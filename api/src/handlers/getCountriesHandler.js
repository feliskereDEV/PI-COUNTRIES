const getAllCountries = require ("../controllers/getAllCountries")
const getCountriesByName = require ("../controllers/getCountriesByName")
const {Router} = require ("express");
const {Country, Activity} = require ("../db")


const getCountriesHandler =async (req, res)=>{
    const {name} =req.query;
try {
    
    if(!name){
        const paisesTotales = await Country.findAll({
            include: Activity,
        });
        return res.status(200).json(paisesTotales);
    } else{
        const country = await getCountriesByName(name);
        console.log(country);
        
        if(!country){
            return res.status(404).json({error: "No se encontró el pais o no existe"});
        }
        return res.status(200).json(country)
    }
} catch (error) {
    res.status(400).json({error: error.message})
}
}
module.exports = getCountriesHandler;

