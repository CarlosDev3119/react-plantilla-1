import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

import { MyTextInput,MySelect, MyCheckbox } from '../components';



export const FormikAbstract = () => {


    return (
        <div>
            <h1>FormikAbstract Tutorial</h1>
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
                            <MyTextInput 
                                label="First Name" 
                                name="firstName" 
                                placeholder="Fernando"
                                type="text"
                            />
                            <MyTextInput 
                                label="Last Name" 
                                name="lastName" 
                                placeholder="Ortega"
                            />
                            <MyTextInput 
                                label="email" 
                                name="email" 
                                placeholder="example@correo.com"
                                type="email"
                            />
                            <MySelect label="Job Type"  name="jobType">
                                <option value="">pick something</option>
                                <option value="developer">developer</option>
                                <option value="designer">designer</option>
                                <option value="it-senior">it-senior</option>
                                <option value="it-jr">it-jr</option>
                            </MySelect>

                            <MyCheckbox label="Terms & Conditions" name="terms" />


                            <button type="submit">Submit</button>
                        </Form>
                    )
                }


            </Formik>



        </div>
    )
}
