import React, { useState, useEffect } from 'react'
import { Api } from '../../config/Api';
import { validaRole } from '../../config/verificaRole'
import Menu from '../../components/Menu';
import { IconContext } from "react-icons";
import jwt_decode from "jwt-decode";
import { Input, Button } from 'rsuite';
import { WhatsappIcon, WhatsappShareButton, TwitterIcon, TwitterShareButton } from "react-share";
import './Home.css'

const Home = () => {
  const role = validaRole()
  const shareUrl = "https://doasanguepoa.herokuapp.com/"
  const [post, setPost] = useState(null);
  const [mensagem, setMensagem] = useState([""]);
  // eslint-disable-next-line
  const [error, setError] = useState(null);
  useEffect(() => {
    Api.get('/postagens', 
    { headers: { Authorization: `Bearer ${localStorage.getItem('u')}`} })
    .then((response) => {
      setPost(response.data);
    })
      .catch(error => {
        setError(error);
      });
  }, []);

  if (!post) return null;

  const handleSubmit = () => {
    const token = localStorage.getItem('u'); //pega do local storage o token
    const decoded = jwt_decode(token); //captura o id através do jwt
    Api.post('/postagens',
      {
        "mensagem": mensagem,
        "titulo": decoded['upn']
      },{ headers: { Authorization: `Bearer ${localStorage.getItem('u')}`} }
      ).then(() => {
        alert("Postagem realizada");
        window.location.reload();
      })
  }
  
  if(role === 'INSTITUICAO'){
    return (
      <div>
        <Menu />
        <div className="format">
        <div>
          <Input as="textarea" onChange={setMensagem} className="formPostagem" rows={3} style={{ width: 400, marginLeft: 120}} placeholder="Insira a mensagem..." />
          <Button appearance="primary" onClick={handleSubmit} style={{marginLeft: 425, marginTop: 10 }}>Postar</Button>
        </div>
          <div className="posts">
            <h2 className="post-title">{post.titulo}</h2>
            {post.map((post) => {
              return (
                <div className="post-card" key={post.id}>
                  <h4>
                    <IconContext.Provider>
                      <img src={post.avatar} alt='icone do perfil'/>
                    </IconContext.Provider>
                  </h4>
                  <h3>
                    {post.nomeInstituicao}</h3>
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
  
  }else if(role === 'USUARIO'){
    return (
      <>
      <div>
        <Menu />
        <div className="publicacao">
        <div className="format">
          <div className="posts">
            <h2 className="post-title">{post.nomeInstituicao}</h2>
            {post.map((post) => {
              return (
                <div className="post-card" key={post.id}>
                  <h4>
                    <IconContext.Provider>
                      <img src={post.avatar} alt='icone do perfil'/>
                    </IconContext.Provider>
                  </h4>
                  <h3>
                    {post.titulo}</h3>
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