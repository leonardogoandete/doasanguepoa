import React from 'react'
import { Api } from '../../config/Api';
import { validaRole } from '../../config/verificaRole'
import Button from "../../components/Button";
import Logout from '../../components/Lougout/Logout';
import { HiUser } from 'react-icons/hi';
import { IconContext } from "react-icons";
import { Formik, Form, Field } from 'formik'
import jwt_decode from "jwt-decode";
import { history } from '../../history'
import { WhatsappIcon, WhatsappShareButton, TwitterIcon, TwitterShareButton } from "react-share";

import './Home.css'
import Agendamento from '../agendamento/Agendamento';

const Home = () => {
  const role = validaRole()
  const shareUrl = "https://doasanguepoa.herokuapp.com/"
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

  const handleSubmit = (msg) => {
    const token = localStorage.getItem('u'); //pega do local storage o token
    const decoded = jwt_decode(token); //captura o id através do jwt
    Api.post('/postagens',
      {
        "mensagem": msg['mensagem'],
        "idInstituicao": decoded['id']
      },
      {
        headers: {
          'x-access-token': token
        }
      })
    history.push('/home')
  }
  
  if(role === 'instituicao'){
    return (
      <div>
        <Button Text="Agendamento" onClick={() => Agendamento()} />
        <Button Text="Sair" onClick={() => Logout()} />
        <div className="publicacao">
          <Formik
            initialValues={{}}
            onSubmit={handleSubmit}
          >
            <Form className="mensagem">
              <div className="Publish-Group">
                <Field
                  placeholder="Faça seu pedido..."
                  name="mensagem"
                  className="publish-Field"
                />
              </div>
              <button
                className="publicar"
                id="publicar"
                type="submit"
                onClick={handleSubmit}>
                Publicar
              </button>
            </Form>
          </Formik>
        </div>
        <div className="format">
          <div className="posts">
            <h2 className="post-title">{post.idInstituicao}</h2>
            {post.map((post) => {
              return (
                <div className="post-card" key={post.id}>
                  <h4>
                    <IconContext.Provider
                      value={{ color: 'black', size: '40px', }}>
                      <HiUser />
                    </IconContext.Provider>
                  </h4>
                  <h3>
                    {post.instituico.nome}</h3>
                  <p className="post-body">{post.mensagem}</p>
                  <br/><br/>
                    <WhatsappShareButton
                      url={shareUrl}
                      title={post.mensagem}
                      className="Demo__some-network__share-button"
                      style={{float: 'right', marginTop: '-35px'}}
                    >
                      <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                    <TwitterShareButton
                      url={shareUrl}
                      title={post.mensagem}
                      className="Demo__some-network__share-button"
                      style={{float: 'right', marginTop: '-35px'}}
                    >
                      <TwitterIcon size={32} round />
                    </TwitterShareButton>
                  <hr/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  
  }else if(role === 'usuario'){
    return (
      <>
      <div>
        <Button Text="Sair" onClick={() => Logout()} />
        <div className="publicacao">
          
        
        <div className="format">
          <div className="posts">
            <h2 className="post-title">{post.idInstituicao}</h2>
            {post.map((post) => {
              return (
                <div className="post-card" key={post.id}>
                  <h4>
                    <IconContext.Provider
                      value={{ color: 'black', size: '40px', }}>
                      <HiUser />
                    </IconContext.Provider>
                  </h4>
                  <h3>
                    {post.instituico.nome}</h3>
                  <p className="post-body">{post.mensagem}</p>
                  <br/><br/>
                    <WhatsappShareButton
                      url={shareUrl}
                      title={post.mensagem}
                      className="Demo__some-network__share-button"
                      style={{float: 'right', marginTop: '-35px'}}
                    >
                      <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                    <TwitterShareButton
                      url={shareUrl}
                      title={post.mensagem}
                      className="Demo__some-network__share-button"
                      style={{float: 'right', marginTop: '-35px'}}
                    >
                      <TwitterIcon size={32} round />
                    </TwitterShareButton>
                  <hr/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      </div>
      </>
    );
  }
  
}

export default Home
