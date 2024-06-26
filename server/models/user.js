const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  coins: { type: Number, required: true, default: 0 },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
