const { Schema, model } = require('mongoose');

const thingSchema = new Schema({
  title:  {
    type: String,
    required: true,
  }, // String is shorthand for {type: String}
  body: String,
  _deletedAt: { type: Date, default: null },
});

module.exports = model('tning', thingSchema);
