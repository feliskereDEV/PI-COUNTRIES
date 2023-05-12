const {Country, Activity} = require("../db")
const {Op} = require("sequelize")
const getCountriesByName = async (name)=>{
    let country = await Country.findOrCreate({where: { name: { [Op.iLike]: `%${name}%` } }, include: Activity});
    if (!country) throw new Error ("No se encontró el país")
    else{
        return country[0].dataValues;
    }


}
module.exports = getCountriesByName;
// where: { name: { [Op.iLike]: `%${name}%` } }
