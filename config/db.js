const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    development: {
        url: process.env.DEV_DB_URL || '',
        username: process.env.DEV_DB_USERNAME || '',
        password: process.env.DEV_DB_PASSWORD || '',
        database: process.env.DEV_DB_NAME || '',
        host: process.env.DEV_DB_HOSTNAME || '',
        dialect: process.env.DEV_DB_DIALECT || 'mysql'
    },
    test: {
        url: process.env.TEST_DB_URL || '',
        username: process.env.TEST_DB_USERNAME || '',
        password: process.env.TEST_DB_PASSWORD || '',
        database: process.env.TEST_DB_NAME || '',
        host: process.env.TEST_DB_HOSTNAME || '',
        dialect: process.env.TEST_DB_DIALECT || 'mysql'
    },
    production: {
        url: process.env.PROD_DB_URL || '',
        username: process.env.PROD_DB_USERNAME || '',
        password: process.env.PROD_DB_PASSWORD || '',
        database: process.env.PROD_DB_NAME || '',
        host: process.env.PROD_DB_HOSTNAME || '',
        dialect: process.env.PROD_DB_DIALECT || 'mysql'
    }
}