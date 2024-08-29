const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

let userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["Super_Admin", "Admin", "Power_User", "User"],
  },
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Group",
  },
  isPasswordChanged: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  let hash = await bcrypt.hash(this.password, 10);
  this.password = hash; 
  next();
});

userSchema.methods.comparePassword = async function (password) {
  console.log(password, this.password);
  return await bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
