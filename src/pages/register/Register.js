import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { history } from '../../history'

import './Register.css'

const Register = () => {
    const handleSubmit = values => {
        axios.post('http://doasanguepoa-bff.herokuapp.com/v1/api/usuarios', values)
            .then(resp => {
                const { data } = resp
                if (data) {
                    history.push('http://doasanguepoa-bff.herokuapp.com/v1/api/usuarios/login')
                }
            })
    }

    const validations = yup.object().shape({
        nome: yup.string().min(3).required('Informe o nome'),
        endereco: yup.string().min(3).required('Informe o endereco'),
        cpf: yup.string().min(11).required('Informe o CPF'),
        email: yup.string().email().required("Informe o email"),
        senha: yup.string().min(8,'Digite no minimo 8 caracteres').required('Informe a senha'),
    })
    return (
        <>
            <div className = "h1">
            <h1>Cadastro</h1>
            </div>
            <div className = "registrar">
            <p>Preencha os dados abaixo para cadastro!</p>
            <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
                validationSchema={validations}
            >
                <Form className="Login">
                    <div className="Login-Group">

                        <Field
                            placeholder="Digite seu Nome Completo"
                            name="nome"
                            className="campo"
                        />
                    </div>
                    <div className="Login-Group">
                        <Field
                            placeholder="Digite seu endereço"
                            name="endereco"
                            className="campo"
                        />
                    </div>
                    <div className="Login-Group">
                        <Field
                            placeholder="Digite seu CPF/CNPJ"
                            name="cpf"
                            className="campo"
                        />
                    </div>
                    <div className="Login-Group">
                        <Field
                            placeholder="Digite seu e-mail"
                            name="email"
                            className="campo"
                        />
                    </div>
                    <div className="Login-Group">
                        <Field
                            placeholder="Digite sua senha"
                            type="password"
                            name="senha"
                            className="campo"
                        />
                    </div>
                    <button className="Login-Btn" type="submit" onClick={handleSubmit}>Cadastrar</button>
                    <div className = "register"> Já tem conta?
                    <Link to="/login">&nbsp;Login</Link>
                    </div>
                </Form>
            </Formik>
            </div>
        </>
    )
}

export default Register
