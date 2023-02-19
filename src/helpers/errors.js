class ValidationError extends Error {
  constructor(message) {
    super(message);

    this.status = 400;
  }
}

class WrongsParametersError extends Error {
  constructor(message) {
    super(message);

    this.status = 400;
  }
}

class notAuthorizedError extends Error {
  constructor(message) {
    super(message);

    this.status = 401;
  }
}

module.exports = {
  ValidationError,
  WrongsParametersError,
  notAuthorizedError,
};
