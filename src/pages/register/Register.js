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
        console.log(values)
        if (values.documento.length === 11) {
            axios.post(process.env.REACT_APP_URL_API_CADASTRO + '/registrar/usuario', values)
                .then(resp => {
                    const {data} = resp
                    if (data) {
                        history.push('/')
                        window.location.reload();
                    }
                }).catch(error => {
                    console.error('Erro na solicitação POST:', error);
                    alert("Erro ao cadastrar-se!");
                    window.location.reload();
                }
            );
        }
        if (values.documento.length === 14) {
                axios.post(process.env.REACT_APP_URL_API_CADASTRO+'/registrar/instituicao', values)
                    .then(resp => {
                    const { data } = resp
                        if (data) {
                            history.push('/')
                            window.location.reload();
                        }
                    }).catch(error => {
                        console.error('Erro na solicitação POST:', error);
                        alert("Erro ao cadastrar-se!");
                        window.location.reload();
                    }
                );
        }
    }

    const validations = yup.object().shape({
        nome: yup.string().min(3).required('Informe o nome'),
        endereco: yup.string().min(3).required('Informe o endereco'),
        documento: yup.string().min(11).required('Informe o documento'),
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
                            name="documento"
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
                    <Link className="linkReferencia" to="/">&nbsp;Login</Link>
                    </div>
                </Form>
            </Formik>
            </div>
        </>
    )
}

export default Register
