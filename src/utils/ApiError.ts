class ApiError extends Error {
  private statusCode: number;

  private isOperational: boolean;

  constructor(statusCode, message, isOperational = true, stack = '') {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
    // Handling custom error classes in Typescript - https://www.ashsmith.io/handling-custom-error-classes-in-typescript
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}

export default ApiError;
