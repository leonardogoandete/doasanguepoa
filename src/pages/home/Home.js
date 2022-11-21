import React from 'react'
import { Api } from '../../config/Api';
import Button from "../../components/Button";
import Logout from '../../components/Lougout/Logout';
import { HiUser } from 'react-icons/hi';
import { IconContext } from "react-icons";
import { Formik, Form, Field } from 'formik'
import jwt_decode from "jwt-decode";

import './Home.css'

const Home = () => {
        
        const [post, setPost] = React.useState(null);
        // eslint-disable-next-line
        const [error, setError] = React.useState(null);
    
        React.useEffect(() => {
          Api.get('/postagens').then((response) => {
            setPost(response.data);
          })
          .catch(error => {
            setError(error);
          });
        }, []);
      
        if (!post) return null;

        const handleSubmit = publicacao =>{
          const token = localStorage.getItem('u');
          const decoded = jwt_decode(token);
          Api.post('/postagens', 
          {"mensagem": "mensagem",
          "idInstituicao": decoded['id']}, 
          {
            headers: {
              'x-access-token': token
            }
          })
        }
    
        return (
          <div>
            <Button Text="Sair" onClick={() => Logout()}/>
            <div className = "publicacao">
            <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
                validationSchema={{}}
            >
            <Form className="Publicacao">
                    <div className="Publish-Group">
                        <Field
                            placeholder="Faça seu pedido..."
                            name="mensagem"
                            className="publish-Field"
                        />
                    </div>
                    </Form>
            </Formik>
            <button className = "publicar" Text="Publicar" id="publicar"  onClick={handleSubmit}>
             Publicar</button>
            </div>
            
            <div className = "format">
            <div className = "posts">
            <h2 className="post-title">{post.idInstituicao}</h2>
            {post.map((post) => {
               return (
                  <div className="post-card" key={post.id}>
                    <h4>
                      <IconContext.Provider
                     value={{ color: 'black', size: '40px',}}>
                     <HiUser/>
                     </IconContext.Provider>
                     </h4>
                     <h3>
                      {post.instituico.nome}</h3>
                     <p className="post-body">{post.mensagem}</p>
                     <button className = "compartilhar" onClick={() => Logout()}>Compartilhar</button>
                     <button className = "agendar" onClick={() => Logout()}>Agendar</button>
                     <hr></hr>
                  </div>        
               );
            })}
            </div>
            </div>
          </div>
        );

}

export default Home
