import { AppError } from "./AppError.js";

export class ConflictError extends AppError {
  constructor(message = "Conflict occured!") {
    super(message, 409);
  }
}