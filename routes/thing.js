const { Router } = require('express');
const asyncHandler = require('express-async-handler')

const {
  getAll,
  createThing,
  updateThing,
  deleteThing,
  getThingById,
} = require('../services/thing');

const {
  validateParam,
} = require('../utils/validator');

const validateIdParam = validateParam('id');

const api = Router();

api.get('/', asyncHandler(async (req, res) => {
  const things = await getAll();

  res.send(things)
}));

api.get('/:id', asyncHandler(async (req, res) => {
  const { id } = req.params;

  const thing = await getThingById(id);

  res.send(thing);
}));

api.post('/', asyncHandler(async (req, res) => {
  const { title, body } = req.body;

  if (!title || !body) {
    return res.sendStatus(400);
  }

  await createThing ({ title, body });

  res.send(201);
}));

api.put('/:id', validateIdParam, asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, body } = req.body;
  
  if (!title && !body) {
    return res.sendStatus(400);
  }

  await updateThing({ id, title, body });

  res.send(200);
}));

api.patch('/:id', validateIdParam, asyncHandler(async (req, res) => {
  const { id } = req.params;
  const {title, body} = req.body;

  await updateThing({ id, title, body });

  res.send(200);
}));

api.delete('/:id', validateIdParam, asyncHandler(async (req, res) => {
  const { id } = req.params;

  await deleteThing(id);

  res.send(200);
}));

module.exports = api;
