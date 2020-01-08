const identity = a => a;

function validateParam (param, cb = identity) {
  return function (req, res, next) {
    const value = req.params[param];

    if (!cb(value)) {
      return res.status(400).send(`Param ${param} is required`);
    }

    next();
  }
}

module.exports = { validateParam };
