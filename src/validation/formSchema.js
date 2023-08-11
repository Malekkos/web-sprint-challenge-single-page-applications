import * as yup from "yup"

const formSchema = yup.object().shape({
  name: yup
  .string()
  .trim()
  .required("A name is required")
  .min(2, "name must be at least 2 characters"),
  size: yup
  .required("We need to know which size pizza you want!"),
  specialInstruction: yup
  .string()
  .max(100, "Please keep the request brief")
})

export default formSchema