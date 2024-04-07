require('dotenv').config();
const { Sequelize } = require('sequelize');

// const sequelizeConfig = {
module.exports={
    development: {
        database: process.env.DB_NAME,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        dialect: 'mysql'
    },
    test: {
        database: process.env.DB_NAME,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false
    },
    production: {
        database: process.env.DB_NAME,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false
    }
}



// const sequelize = new Sequelize(sequelizeConfig.development.database, sequelizeConfig.development.username,
//     sequelizeConfig.development.password, {
//     host: process.env.DB_HOST,
//     dialect: 'mysql'
// })


// async function connectToDatabase() {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }
// connectToDatabase();

// module.exports = sequelize;