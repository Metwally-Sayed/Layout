import * as Yup from 'yup';

export const validationSchema = Yup.object({
  fullName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  email: Yup.string().email("Please enter a valid email").required("Required"),
  details: Yup.string().max(150, 'Must be 150 characters or less').required("Required"),
  attachment: Yup.string().required("Required")
})