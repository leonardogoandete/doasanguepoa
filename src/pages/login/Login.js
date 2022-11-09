import React from 'react'
import { Link} from "react-router-dom";

import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import { Api } from '../../config/Api';
import { history } from '../../history'

import './Login.css'

const Login = () => {
    const handleSubmit = values => {
        Api.post('/usuarios/login', values)
        //Api.post('/usuario/login', values)
            .then(resp => {
                const { data } = resp
                if (data) {
                    localStorage.setItem('u', data.token)
                    history.push('/home/Home.js')
                }
            })
    }

    const validations = yup.object().shape({
        cpf: yup.number().min(11).required(),
        senha: yup.string().min(2).required()
    })
    return (
        <>  

            <div className = "titulo">Login</div>
            <div className = "Container">
             
            
            <div className = "texto">Preencha os campos para continuar!</div>

            <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
                validationSchema={validations}
            >
                <Form className="Login">
                    <div className="Login-Group">
                        <Field
                            placeholder="Digite seu CPF/CNPJ"
                            name="cpf"
                            className="Login-Field"
                        />
                    </div>
                    <div className="Login-Group">
                        <Field
                            type="password"
                            placeholder="Digite sua senha"
                            name="senha"
                            className="Login-Field"
                        />
                    </div>
                    <button className="Login-Button" type="submit" onClick={handleSubmit}>Login</button>
                    <div className = "register"> Não tem conta?
                    <Link to="/cadastro/usuario">&nbsp;Registre-se</Link>
                    </div>
                </Form>
            </Formik>
            </div>
        </>
    )
}

export default Login
