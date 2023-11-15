import React from 'react';
import { Link } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { history } from '../../history';
import './Login.css';
import axios from "axios";


const Login = () => {
    const handleSubmit = values => {
        const { documento, senha } = values;
        const data = {
            documento: documento,
            senha: senha
        };

        const jsonData = JSON.stringify(data);

        const headers = {
            'Content-Type': 'application/json'
        };

        axios.post(process.env.REACT_APP_URL_API_LOGIN+'/auth/login', jsonData, { headers: headers })
            .then(resp => {
                const { data } = resp
                if (data && resp.status === 200) {
                    localStorage.setItem('u', data.token)
                    history.push('/home');
                    window.location.reload();
                }
            }).catch(error => {
                console.error('Erro na solicitação POST:', error);
                alert("Erro ao logar-se!");
                window.location.reload();
            });
    }

    const validations = yup.object().shape({
        documento: yup.number().min(11).required(),
        senha: yup.string().min(2).required()
    })

    return (
        <>

            <div class="titulo">Login</div>
            <div class="Container">
            <div class="texto"><br />Preencha os campos para continuar!</div>

                <Formik
                    initialValues={{
                        documento: '',
                        senha: ''
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={validations}
                >
                    {({ isSubmitting }) => (
                        <Form class="Login">
                            <div class="Login-Group">
                                <Field
                                    placeholder="Digite seu CPF ou CNPJ"
                                    name="documento"
                                    class="Login-Field"
                                />
                            </div>
                            <div class="Login-Group">
                                <Field
                                    type="password"
                                    placeholder="Digite sua senha"
                                    name="senha"
                                    class="Login-Field"
                                />
                            </div>
                            <button
                                class="Login-Button"
                                type="submit"
                                disabled={isSubmitting} // Desabilita o botão durante a submissão
                            >
                                Login
                            </button>
                            <div class="register">
                                Não tem conta?
                                <Link class="linkReferencia" to="/cadastro/usuario">&nbsp;Registre-se</Link>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}

export default Login
