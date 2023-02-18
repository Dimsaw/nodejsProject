const { User } = require("../db/userModel");
const bcrypt = require("bcrypt");
const { notAuthorizedError } = require("../helpers/errors");
// const { WrongsParametersError } = require("../helpers/errors");

const registration = async (email, password) => {
  const user = new User({ email, password: await bcrypt.hash(password, 10) });
  await user.save();
};

const login = async (id) => {
  //   const post = await Post.findById(id);
  //   if (!post) {
  //     throw new WrongsParametersError(`failure, no post with this id: ${id}`);
  //   }
  //   return post;
};

module.exports = {
  registration,
  login,
};
