import * as yup from "yup";

export const basicSchema = yup.object().shape({
    name:yup.string().required(),
    description:yup.string()
})