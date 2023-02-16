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

module.exports = { ValidationError, WrongsParametersError };
