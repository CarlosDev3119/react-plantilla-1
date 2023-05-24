import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponents = () => {


    return (
        <div>
            <h1>FormikComponents Tutorial</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                }}
                onSubmit={ (values) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                                        .max(15, 'Debe de tener 15 caracteres o menos')
                                        .required('Requerido'),
                        lastName: Yup.string()
                                        .max(15, 'Debe de tener 15 caracteres o menos')
                                        .required('Requerido'),
                        email: Yup.string()
                                        .email('Email no tiene un formato valido')
                                        .required('Requerido'),
                        terms: Yup.boolean()
                                    .oneOf([true], 'Debe de aceptar las condiciones'),

                        jobType: Yup.string()
                                    .notOneOf(['it-jr'], 'Esta opcion no es permitida' )
                                    .required('Requerido')
                    }) 
                } 
            >
                { (formik) => (
                        
                        <Form  noValidate>
                            <label htmlFor="firsName">First Name</label>
                            <Field name="firstName" type="text" />
                            <ErrorMessage name="firstName" component="span"/>

                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text" />
                            <ErrorMessage name="lastName" component="span"/>


                            <label htmlFor="email">Email Name</label>
                            <Field name="email" type="email" />
                            <ErrorMessage name="email" component="span"/>

                            <label htmlFor="jobType">Job Type</label>
                            <Field name="jobType" as="select">
                                <option value="">pick something</option>

                                <option value="developer">developer</option>
                                <option value="designer">designer</option>
                                <option value="it-senior">it-senior</option>
                                <option value="it-jr">it-jr</option>
                            </Field>
                            <ErrorMessage name="jobType" component="span"/>


                            <label htmlFor="terms">
                                <Field name="terms" type="checkbox" />
                                Terminos y Condiciones
                            </label>
                            <ErrorMessage name="terms" component="span"/>


                            <button type="submit">Submit</button>
                        </Form>
                    )
                }


            </Formik>



        </div>
    )
}
