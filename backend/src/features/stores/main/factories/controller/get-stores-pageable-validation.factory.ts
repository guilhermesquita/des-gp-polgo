import * as yup from "yup";
import { Validation } from "../../../../../config/contracts/validation";
import { RequiredFieldYupValidation } from "../../../../../config/validation/required-field-yup-validation";

export const makeGetStoresPageableValidation = (): Validation => {
  const schema = yup.object().shape({
    nome: yup.string(),
    estado: yup.string(),
    cidade: yup.string(),
    cnpj: yup.string(),
    limit: yup.number(),
    page: yup.number(),
    order: yup
      .string()
      .oneOf(["asc", "desc", "ASC", "DESC"], "only types asc/desc are allowed"),
  });

  return new RequiredFieldYupValidation(schema);
};
