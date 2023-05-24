import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import { RegisterPage, FormikBasicPage, FormikYupPage, FormikAbstract, FormikComponents } from '../03-forms/pages';

import logo from '../assets/react.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={logo} className="logo" alt="React Logo" />
                <ul>
                    <li>
                        <NavLink to="/register-page" className={ ({ isActive }) => isActive ? 'nav-active': '' } >Register Page</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to="/formik-basic" className={ ({ isActive }) => isActive ? 'nav-active': '' }>formik basic</NavLink>
                    </li>
                </ul>

                <ul>
                    <li>
                        <NavLink to="/formik-Yup" className={ ({ isActive }) => isActive ? 'nav-active': '' }>formik Yup</NavLink>
                    </li>
                </ul>

                <ul>
                    <li>
                        <NavLink to="/formik-abstract" className={ ({ isActive }) => isActive ? 'nav-active': '' }>formik Abstract</NavLink>
                    </li>
                </ul>

                <ul>
                    <li>
                        <NavLink to="/users" className={ ({ isActive }) => isActive ? 'nav-active': '' }>Users</NavLink>
                    </li>
                </ul>

                <ul>
                    <li>
                        <NavLink to="/formik-components" className={ ({ isActive }) => isActive ? 'nav-active': '' }>formik components</NavLink>
                    </li>
                </ul>
            
            </nav>

            <Routes>
                <Route path='formik-basic' element={ <FormikBasicPage /> } />
                <Route path='formik-yup' element={ <FormikYupPage /> } />
                <Route path='formik-components' element={ <FormikComponents /> } />
                <Route path='formik-abstract' element={ <FormikAbstract /> } />


                <Route path='users' element={ <h1>Users Page</h1> } />
                <Route path='register-page' element={ <RegisterPage /> } />

                <Route path='/*' element={ <Navigate to="/register-page" replace /> } />

            </Routes>
           
        </div>
    </BrowserRouter>
  )
}
