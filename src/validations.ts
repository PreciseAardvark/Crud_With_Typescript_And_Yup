import * as Yup from "yup";

let valid = false;

export const createTacoSchema = Yup.object().shape(
    {
    body: Yup.object().shape({
        name: Yup.string().strict()
        .required("A taco name must be provided.")
        .min(1, "Taco name must have min 1 character"),

        price: Yup.number()
        .required("A price for a taco is required")
        .min(1, "The min value for a taco is 1.")
        .integer("The value must be a number.")
        .positive("The value of taco must be greater than 0"),
    })
});

export const readTacoSchema = Yup.object().shape(
    {
    params: Yup.object().shape({
        id: Yup.number()
        .min(1, "The min value for an id must be 1")
        .integer("The value must be an integer.")
        .positive("The value of an Id muts be greather than 0")
        .required("An id must be provided.")
    })
});

export const updateTacoSchema = Yup.object().shape({
    params: Yup.object().shape({
        id: Yup.number()
        .min(1, "The min value for an id must be 1")
        .integer("The value must be an integer.")
        .positive("The value of an Id muts be greather than 0")
        .required("An id must be provided.")
    
    }),
    body: Yup.object().shape({
        
        name: Yup.string()
        .min(1, "Taco name must have min 1 character"),

        price: Yup.number()
        .min(1, "The min value for a taco is 1.")
        .integer("The value must be an integer.")
        .positive("The value of taco must be greater than 0"),
    })
});

export const deleteTacoSchema = Yup.object().shape({
    params: Yup.object().shape({
        id: Yup.number()
        .min(1, "The min value for an id must be 1")
        .integer("The value must be an integer.")
        .positive("The value of an Id muts be greather than 0")
        .required("An id must be provided.")
    })
})
