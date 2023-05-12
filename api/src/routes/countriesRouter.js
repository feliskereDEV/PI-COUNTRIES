const {Router} =require ("express")
const getCountriesHandler = require("../handlers/getCountriesHandler")
const getCountriesById = require("../handlers/getCountriesById")
const countriesRouter = Router();

countriesRouter.get("/", getCountriesHandler)

countriesRouter.get("/:id", getCountriesById)



module.exports = countriesRouter;
