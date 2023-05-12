const {Router} =require ("express");
const createActivities = require("../handlers/createActivities");
const getActivities = require ("../handlers/getActivities")

const activitiesRouter = Router();

activitiesRouter.post("/", createActivities)

activitiesRouter.get("/", getActivities)


module.exports = activitiesRouter;