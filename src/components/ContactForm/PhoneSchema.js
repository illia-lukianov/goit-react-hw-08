import * as yup from "yup";
import "yup-phone"

export const PhoneSchema = yup.object().shape({
    username: yup.string()
        .required("This is a required field.")
        .min(3, "This field must have minimum 3 characters.")
        .max(50, "This field must have maximum 50 characters."),
    phoneNumber: yup.string()
        .phone("any", true, "Incorrect phone number format.")
        .required("This is a required field.")
})