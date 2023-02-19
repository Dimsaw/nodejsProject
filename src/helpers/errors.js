class Nodejs26Error extends Error {
  constructor(message) {
    super(message);

    this.status = 400;
  }
}

class ValidationError extends Nodejs26Error {
  constructor(message) {
    super(message);

    this.status = 400;
  }
}

class WrongsParametersError extends Nodejs26Error {
  constructor(message) {
    super(message);

    this.status = 400;
  }
}

class NotAuthorizedError extends Nodejs26Error {
  constructor(message) {
    super(message);

    this.status = 401;
  }
}

module.exports = {
  ValidationError,
  WrongsParametersError,
  NotAuthorizedError,
  Nodejs26Error,
};
