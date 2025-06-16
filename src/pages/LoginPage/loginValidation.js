import { object, string } from 'yup';

export const loginValidation = object({
  email: string()
    .email('Incorect Email format')
    .required('This is a required field.'),
  password: string()
    .required('This is a required field.')
    .min(7, 'This field must have minimum 7 characters.'),
});
