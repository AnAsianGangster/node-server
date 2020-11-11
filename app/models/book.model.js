module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('book', {
        productId: {
            type: DataTypes.INTEGER,
        },
        title: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.FLOAT,
        },
        brand: {
            type: DataTypes.STRING,
        },
        imgUrl: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
    });

    return Book;
};
