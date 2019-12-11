const { Router } = require('express');

const thingApi = require('./thing');

const api = Router();

api.use('/things', thingApi);

module.exports = api;
