const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A name must have a name'],
  },
  email: String,
  photo: String,
  password: String,
  passwordConfirm,
});
