import * as Yup from "yup";

export const validationSchema = Yup.object({
  projectName: Yup.string().required("Обязательное поле"),
  genre: Yup.string().required("Обязательное поле"),
  format: Yup.string().required("Обязательное поле"),
  unfNumber: Yup.string(),
  country: Yup.string().required("Обязательное поле"),
  budget: Yup.string().required("Обязательное поле"),
  synopsis: Yup.string().required("Обязательное поле"),
});
