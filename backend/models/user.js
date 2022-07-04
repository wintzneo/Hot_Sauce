const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");


//Modèles des users
const userSchema = mongoose.Schema({
  //L'email doit être unique
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

//Plugin pour garantir un email unique
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);