import { MissingParamError } from "../../errors/missing-param-error";
import { Validation } from "../contracts/validation";
import * as yup from "yup";

export class RequiredFieldYupValidation implements Validation {
  constructor(private readonly objectSchema: any) {}
  validate(input: any): Error | undefined {
    try {
      this.objectSchema.validateSync(input, {
        abortEarly: false,
      });
    } catch (errors) {
      const e = errors as yup.ValidationError;
      return new MissingParamError(e.errors.join(", "));
    }
  }
}
