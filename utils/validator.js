const identity = a => a;


export function validateParam (param, cb = identity) {
  return function (req, res, next) {
    const value = req.params[param];

    if (!cb(value)) {
      return res.status(400).send(`Param ${param} is required`);
    }

    next();
  }
}
