const { Router } = require('express');
const v1api = require('./v1api');

const api = Router();

api.use('/v1', v1api);

module.exports = api;
