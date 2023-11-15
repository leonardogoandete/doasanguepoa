import React from 'react'
import { Link} from "react-router-dom";
import {Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import './Register.css'
import { history } from '../../history'
import axios from "axios";
// require('dotenv').config();



const Register = () => {
    const handleSubmit = values => {
        axios.post(process.env.REACT_APP_URL_API_CADASTRO+'/usuarios', values)
            .then(resp => {
                const { data } = resp
                if (data) {
                    history.push('/')
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
            <div class = "h1">
            <h1>Cadastro</h1>
            </div>
            <div class = "registrar">
            <p>Preencha os dados abaixo para cadastro!</p>
            <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
                validationSchema={validations}
            >
                <Form class="Login">
                    <div class="Login-Group">

                        <Field
                            placeholder="Digite seu Nome Completo"
                            name="nome"
                            class="campo"
                        />
                    </div>
                    <div class="Login-Group">
                        <Field
                            placeholder="Digite seu endereço"
                            name="endereco"
                            class="campo"
                        />
                    </div>
                    <div class="Login-Group">
                        <Field
                            placeholder="Digite seu CPF/CNPJ"
                            name="cpf"
                            class="campo"
                        />
                    </div>
                    <div class="Login-Group">
                        <Field
                            placeholder="Digite seu e-mail"
                            name="email"
                            class="campo"
                        />
                    </div>
                    <div class="Login-Group">
                        <Field
                            placeholder="Digite sua senha"
                            type="password"
                            name="senha"
                            class="campo"
                        />
                    </div>
                    <button class="Login-Btn" type="submit" onClick={handleSubmit}>Cadastrar</button>
                    <div class = "register"> Já tem conta?
                    <Link class="linkReferencia" to="/">&nbsp;Login</Link>
                    </div>
                </Form>
            </Formik>
            </div>
        </>
    )
}

export default Register
