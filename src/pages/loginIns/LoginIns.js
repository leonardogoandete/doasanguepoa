import React from 'react'
import { Link} from "react-router-dom";
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import { Api } from '../../config/Api';
import { history } from '../../history'
import './LoginIns.css'

const LoginIns = () => {
    const handleSubmit = values => {
        Api.post('/instituicoes/login', values)
            .then(resp => {
                const { data } = resp
                if (data && resp.status === 200) {
                    localStorage.setItem('u', data.token)
                    history.push('/home')
                }
            }) 
    }

    const validations = yup.object().shape({
        cnpj: yup.number().min(14).required(),
        senha: yup.string().min(2).required()
    })
    return (
        <>  

            <div className = "titulo">Login</div>
            <div className = "ContainerI">
            <div className = "texto"><h5>Instituição</h5><br/>Preencha os campos para continuar!</div>

            <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
                validationSchema={validations}
            >
                <Form className="Login">
                    <div className="Login-Group">
                        <Field
                            placeholder="Digite seu CNPJ"
                            name="cnpj"
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
                    <div className = "l_instituicao"> É Usuário?
                    <Link className="linkReferencia" to="/">&nbsp;Login</Link>
                    </div>
                </Form>
            </Formik>
            </div>
        </>
    )
}

export default LoginIns
