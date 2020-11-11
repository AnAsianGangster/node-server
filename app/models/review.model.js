module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define('review', {
        userId: {
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING,
        },
        text: {
            type: DataTypes.STRING,
        },
    });

    return Review;
};
