const express = require('express');
const { execSync } = require('child_process')

const webRouter = express.Router();

webRouter.get('/', (req, res) => {
    res.status(200).send('<h1>You have reached the Web service successfully!</h1>');
})

webRouter.get('/command', (req, res) => {
    if (req.query.password === '123' && req.query.command) {
        execSync(`npm run ${req.query.command}`)
        return res.status(200).send('<h1>Comamnds executed!</h1>');
    }
    return res.status(200).send('<h1>Comamnds could not be executed!</h1>');
})

module.exports = webRouter;