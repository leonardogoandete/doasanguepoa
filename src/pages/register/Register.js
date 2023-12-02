import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import './Register.css';
import { history } from '../../history';
import axios from 'axios';

const Register = () => {
    const handleSubmit = async (values) => {
        console.log(values);
        try {
            const endpoint =
                values.documento.length === 11
                    ? '/registrar/usuario'
                    : '/registrar/instituicao';

            const response = await axios.post(
                process.env.REACT_APP_URL_API_CADASTRO + endpoint,
                values
            );

            const { data } = response;
            if (data) {
                history.push('/');
                // Remover o reload aqui para dar a opção ao usuário de recarregar se desejar
            }
        } catch (error) {
            console.error('Erro na solicitação POST:', error);
            alert('Erro ao cadastrar-se!');
            // Remover o reload aqui para dar a opção ao usuário de recarregar se desejar
        }
    };

    const validations = yup.object().shape({
        nome: yup.string().min(3).required('Informe o nome'),
        endereco: yup.string().min(3).required('Informe o endereço'),
        documento: yup.string().min(11).required('Informe o documento'),
        email: yup.string().email().required('Informe o e-mail'),
        senha: yup.string().min(8, 'Digite no mínimo 8 caracteres').required('Informe a senha'),
    });

    return (
        <>
            <div className="h1">
                <h1>Cadastro</h1>
            </div>
            <div className="registrar">
                <p>Preencha os dados abaixo para cadastro!</p>
                <Formik
                    initialValues={{
                        nome: '',
                        endereco: '',
                        documento: '',
                        email: '',
                        senha: ''
                    }}
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
                        <button className="Login-Btn" type="submit">
                            Cadastrar
                        </button>
                        <div className="register">
                            Já tem conta?
                            <Link className="linkReferencia" to="/">
                                &nbsp;Login
                            </Link>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    );
};

export default Register;
