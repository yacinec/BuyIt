export class ApiError {
  code: number;
  message: string;

  constructor(code: number, message: string) {
    this.code = code;
    this.message = message;
  }

  static badRequest(message: string): ApiError {
    return new ApiError(400, message);
  }

  static conflict(message: string): ApiError {
    return new ApiError(409, message);
  }

  static notFound(message: string): ApiError {
    return new ApiError(404, message);
  }

  static unauthorized(message: string): ApiError {
    return new ApiError(401, message);
  }

  static internal(message: string): ApiError {
    return new ApiError(500, message);
  }
}
