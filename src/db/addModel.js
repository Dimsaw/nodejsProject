const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
  firstName: String,
  lastName: String,
  title: String,
  bio: String,
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

userSchema.pre("save", async function () {
  if (this.isNew) {
    this.password = await bcrypt.hash(this.password, 10);
    console.log("newpassword", this.password);
  }
  if (this.password) {
    console.log("erfervevevevev");
  }
});

// const User = mongoose.model("User", userSchema);

// module.exports = {
//   User,
// };

// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   confirmed: {
//     type: Boolean,
//     default: false,
//   },
//   firstName: String,
//   lastName: String,
//   title: String,
//   bio: String,
//   password: {
//     type: String,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now(),
//   },
// });

// userSchema.pre("save", async function () {
//   if (this.isNew) {
//     this.password = await bcrypt.hash(this.password, 10);
//     console.log("newpassword", this.password);
//   }
//   if (this.password) {
//     console.log("erfervevevevev");
//   }
// });

// const User = mongoose.model("User", userSchema);

// module.exports = {
//   User,
// };
