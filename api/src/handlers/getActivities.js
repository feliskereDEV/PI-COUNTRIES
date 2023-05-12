const {Country, Activity} = require ("../db");


const getActivities = async (req, res)=>{
    try {
        const actividadesTotales = await Activity.findAll(
            {include: {
                attributes: ["name"],
                model: Country,
                through: {
                attributes: [], 
                },
              },}
        );
        if (!actividadesTotales){
            return res.status(404).send("No hay actividades aún")
        } else{
            return res.status(200).json(actividadesTotales)
        }

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = getActivities;
