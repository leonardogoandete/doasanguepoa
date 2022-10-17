import React from 'react'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { history } from '../../history'

import '../login/Login.css'

const Register = () => {
    const handleSubmit = values => {
        axios.post('http://doasanguepoa-bff.herokuapp.com/usuarios', values)
            .then(resp => {
                const { data } = resp
                if (data) {
                    history.push('/login')
                }
            })
    }

    const validations = yup.object().shape({
        nome: yup.string().min(3).required(),
        sobrenome: yup.string().min(3).required(),
        cpf: yup.string().min(11).required(),
        email: yup.string().email().required(),
        senha: yup.string().min(8).required()
    })
    return (
        <>
            <h1>Register</h1>
            <p>Fill the fields to create a new user</p>
            <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
                validationSchema={validations}
            >
                <Form className="Login">
                    <div className="Login-Group">
                        <Field
                            name="nome"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="nome"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Login-Group">
                        <Field
                            name="sobrenome"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="sobrenome"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Login-Group">
                        <Field
                            name="cpf"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="cpf"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Login-Group">
                        <Field
                            name="email"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="email"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Login-Group">
                        <Field
                            name="senha"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="senha"
                            className="Login-Error"
                        />
                    </div>
                    <button className="Login-Btn" type="submit">Register</button>
                </Form>
            </Formik>
        </>
    )
}

export default Register
