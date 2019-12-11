const Thing = require('../models/thing');


exports.createThing = async function ({ title, body } = {}) {
  const thing = new Thing({ title, body });

  return thing.save();
}

exports.updateThing = async function ({ id, title, body, _deletedAt }) {

  const valuesToUpdate = {
    title,
    body,
    _deletedAt,
  };

  const omited = Object.keys(valuesToUpdate).reduce((R, k) => {
    if (valuesToUpdate[k] !== undefined) {
      R[k] = valuesToUpdate[k];
    }

    return R;
  }, {});

  return await Thing.updateOne({ _id: id }, omited);
}

exports.deleteThing = async function (id) {
  return await exports.updateThing({ id, _deletedAt: Date.now() });
};

exports.getThingById = async function (id) {
  return await Thing.find({ _id: id });
}

exports.getAll = async function () {
  return await Thing.find({ _deletedAt: null });
}
