import React, { useState, useEffect } from 'react';
//import { Api } from '../../config/Api';
import { validaRole } from '../../config/verificaRole';
import Menu from '../../components/Menu';
import { IconContext } from 'react-icons';
import './minhas-postagens.css';
import axios from "axios";
require('dotenv').config();

const MinhasPostagens = () => {
  const role = validaRole();
  const [post, setPost] = useState(null);
  // eslint-disable-next-line
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(process.env.REACT_APP_URL_API_POSTAGENS+'/instituicoes/postagens', {
      headers: { Authorization: `Bearer ${localStorage.getItem('u')}` },
    })
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const handleEdit = (postId) => {
    // Implemente a lógica para ação de edição aqui
    console.log(`Editar postagem ${postId}`);
  };

  const handleDelete = (postId) => {
    // Implemente a lógica para ação de exclusão aqui
    console.log(`Excluir postagem ${postId}`);
  };

  if (!post) return null;

  if (role === 'INSTITUICAO') {
    return (
      <div>
        <Menu />
        <div className="format">
          <div className="posts">
            <h2 className="post-title">{post.titulo}</h2>
            {post.map((post) => (
              <div className="post-card" key={post.id}>
                <h4>
                  <IconContext.Provider>
                    <img src={post.avatar} alt="icone do perfil" />
                  </IconContext.Provider>
                </h4>
                <h3>#{post.id} {post.nomeInstituicao}</h3>
                <p className="post-body">{post.mensagem}</p>
                <br/>
                <div className="post-buttons" >
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(post.id)}
                  >
                    Editar
                  </button>
                  <button 
                    className="delete-button"
                    onClick={() => handleDelete(post.id)}
                  >
                    Excluir
                  </button>
                </div>
                <br />
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default MinhasPostagens;
