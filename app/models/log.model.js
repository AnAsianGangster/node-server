const { TIME } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
    const Log = sequelize.define('logs', {
        logID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        endpoint: {
            type: DataTypes.STRING,
        },
        requestType: {
            type: DataTypes.STRING,
        },
        responseCode: {
            type: DataTypes.INTEGER,
        },
        timeOfRequest: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
    });

    return Log;
};
