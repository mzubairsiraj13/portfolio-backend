class apiError extends Error {
  constructor(
    statusCode,
    message = "Internal Server Error",
    erros = [],
    stack
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.erros = erros;

    if (stack) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default apiError;
