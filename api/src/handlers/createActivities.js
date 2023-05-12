const {Country,Activity} =require("../db");

const createActivities = async (req, res)=>{
    const {id, name, difficulty, season, duration,countries}= req.body;

    try {
            const activity = await Activity.create({
                id,
                name,
                difficulty,
                season,
                duration,
                countries,
            });
            const activitiesToAdd = await Country.findAll({
                where: {name: countries},
            });
            await activity.addCountry(activitiesToAdd);
            res.status(200).send("Posteo exitoso");
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = createActivities;
