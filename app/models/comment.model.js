module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('comment', {
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

    return Comment;
};
