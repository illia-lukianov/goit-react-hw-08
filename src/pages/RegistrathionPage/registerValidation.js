import { object, string } from 'yup';

export const registerValidation = object({
  name: string()
    .required()
    .min(3, 'This field must have minimum 3 characters.'),
  email: string()
    .email('Incorect Email format')
    .required('This is a required field.'),
  password: string()
    .required('This is a required field.')
    .min(7, 'This field must have minimum 7 characters.'),
});
