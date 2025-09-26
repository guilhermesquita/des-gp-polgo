import * as yup from "yup";
import { Validation } from "../../../../../config/contracts/validation";
import { RequiredFieldYupValidation } from "../../../../../config/validation/required-field-yup-validation";

export const makeGetWinnersPageableValidation = (): Validation => {
  const schema = yup.object().shape({
    nome: yup.string(),
    estado: yup.string(),
    premio: yup.string(),
    limit: yup.number(),
    page: yup.number(),
    order: yup
      .string()
      .oneOf(["ASC", "DESC"], "only types ASC and DESC are allowed"),
  });

  return new RequiredFieldYupValidation(schema);
};
