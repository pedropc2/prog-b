export class AppError extends Error {
  public readonly statusCode: number;
  public readonly code: string;

  constructor(mensagem: string, statusCode = 400, code = "BAD_REQUEST") {
    super(mensagem);
    this.statusCode = statusCode;
    this.code = code;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}