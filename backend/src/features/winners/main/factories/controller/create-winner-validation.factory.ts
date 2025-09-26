import * as yup from "yup";
import { Validation } from "../../../../../config/contracts/validation";
import { RequiredFieldYupValidation } from "../../../../../config/validation/required-field-yup-validation";

export const makeAddDreamValidation = (): Validation => {
  const iso8601Regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z$/;

  const schema = yup.object().shape({
    nome: yup.string().required(),
    estado: yup
      .string()
      .required()
      .matches(/^[A-Z]{2}$/, "O estado deve ser a sigla, ex: 'RJ', 'SP'"),
    cidade: yup.string().required(),
    premio: yup.string().required(),
    data: yup
      .string()
      .required("A data é obrigatória")
      .matches(
        iso8601Regex,
        "A data deve estar em formato ISO 8601 (ex: 2026-09-25T16:15:00Z)"
      )
      .test("is-valid-date", "Data inválida", (value) =>
        value ? !isNaN(Date.parse(value)) : false
      ),
  });

  return new RequiredFieldYupValidation(schema);
};
