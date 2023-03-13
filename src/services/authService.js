const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sgMail = require("@sendgrid/mail");
const sha256 = require("sha256");

const { User } = require("../db/userModel");
const { Verification } = require("../db/verificationModel");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const { NotAuthorizedError } = require("../helpers/errors");
// const { WrongsParametersError } = require("../helpers/errors");

const registration = async (email, password) => {
  const user = new User({ email, password });
  await user.save();

  const code = sha256(email + process.env.JWT_SECRET);

  const verification = new Verification({
    code: code,
    userId: user._id,
  });

  await verification.save();

  const msg = {
    to: "dimsaw85@gmail.com",
    from: "dimsaw85@gmail.com",
    subject: "Thank you for registration",
    text: `Please, confirn your email address POST http://localhost:8084/api/auth/registration_confermation/${code}`,
    html: `Please, confirn your email address POST http://localhost:8084/api/auth/registration_confermation/${code}`,
  };

  await sgMail.send(msg);
};

const registrationConfirmation = async (code) => {
  const verification = await Verification.findOne({
    code,
    active: true,
  });

  if (!verification) {
    throw new NotAuthorizedError("invalid code");
  }

  const user = await User.findById(verification.userId);

  if (!user) {
    throw new NotAuthorizedError("not user found");
  }

  verification.active = false;
  await verification.save();

  user.confirmed = true;
  await user.save();

  const msg = {
    to: "dimsaw85@gmail.com",
    from: "dimsaw85@gmail.com",
    subject: "Thank you for registration",
    text: "and easy to do anywhere, even with Node.js",
    html: "<h1>and easy to do anywhere, even with Node.js</h1>",
  };

  await sgMail.send(msg);
};

const login = async (email, password) => {
  const user = await User.findOne({ email, confurmed: true });
  if (!user) {
    throw new NotAuthorizedError(`No user with email: ${email} found`);
  }

  if (!(await bcrypt.compare(password, user.password))) {
    throw new NotAuthorizedError(`wrong password`);
  }
  const token = jwt.sign(
    {
      _id: user._id,
      createdAt: user.createdAt,
    },
    process.env.JWT_SECRET
  );
  return token;
};

module.exports = {
  registration,
  login,
  registrationConfirmation,
};
