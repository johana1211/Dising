const { DataTypes } = require('sequelize')

module.export = (sequelize) => {

    sequelize.define('product', {

        name: {
            type: DataTypes.STRING, 
            allownull: false
        }, 
        description: {
            type: DataType.STRING, 
            allownull: false,
        }, 
        amount: {
            type: DataTypes.INT, 
            allownull: false, 
        },
        image: {
            type: DataTypes.STRING, 
            allownull: false, 
        }
    })
}