import { FormEvent } from 'react';
import '../styles/styles.css';
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {

    const {
        onChange, resetForm, isValidEmail, formData, name, email, password1, password2
    } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: '',
    });


    const onSubmit = ( event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(formData)
    }

    return (
        <div>
            <h1> Register Page</h1>

            <form noValidate onSubmit={ onSubmit }>
                <input
                    type="text" 
                    placeholder="name"
                    name="name"
                    value={ name }
                    onChange={ onChange }
                    className={`${name.trim().length <= 0 && "has-error"}`}
                />

                { name.trim().length <= 0 && <span>Este campo es necesario</span> }

                <input
                    type="email" 
                    placeholder="email"
                    name="email"
                    value={ email }
                    onChange={ onChange }
                    className={` ${ !isValidEmail(email) && "has-error"} `}
                />

                { !isValidEmail(email) && <span>Email no es valido</span> }


                <input
                    type="password" 
                    placeholder="password"
                    name="password1"

                    value={ password1 }
                    onChange={ onChange }

                /> 
                { password1.trim().length <= 0 && <span>Este campo es necesario</span> }
                { password1.trim().length < 6 && password1.trim().length > 0 && <span>El password tiene que tener minimo 6 letras</span> }


                <input
                    type="password" 
                    placeholder="repeat password"
                    name="password2"

                    value={ password2 }
                    onChange={ onChange }

                />  

                { password2.trim().length <= 0 && <span>Este campo es necesario</span> }
                { password2.trim().length > 0 && password1 !== password2 && <span>Las contrase;as deben ser iguales</span> }



                <button type="submit"> Create </button>
                <button type="button" onClick={ resetForm }> Reset Form </button>

            </form>
        </div>
    )
}
