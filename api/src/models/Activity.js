const {DataTypes} = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("activity",{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        difficulty:{
            type: DataTypes.STRING(5),
            allowNull: false,
        },
        season:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        duration:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        
    },
    {
            timestamps: false,
    }
    )
}