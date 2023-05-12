const getAllCountries = require ("../controllers/getAllCountries")
const getCountriesByName = require ("../controllers/getCountriesByName")
const {Country, Activity} = require ("../db")

const getCountriesById = async(req, res)=>{
    const { id } = req.params;
    try {
        const idPais = id.toUpperCase();
        const country = await Country.findOne({
            where: {id:idPais},
            include: Activity,
        });
        if (country) return res.status(200).json(country);
        else return res.status(404).send("No existe ese pais con ese identificador")
}   
catch (error) {
    res.status(400).json({error: error.message})
}
};
module.exports = getCountriesById;