import React, {useState, useEffect} from 'react';
import {validaRole} from '../../config/verificaRole';
import {IconContext} from 'react-icons';
import './minhas-postagens.css';
import axios from "axios";

const MinhasPostagens = () => {
    const role = validaRole();
    const [post, setPost] = useState(null);
    // eslint-disable-next-line
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(process.env.REACT_APP_URL_API_POSTAGENS + '/postagens/instituicao', {
            headers: {Authorization: `Bearer ${localStorage.getItem('u')}`},
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
        // abrir modal para definir a mensagem nova
        // enviar requisição para a API
        // atualizar a página

        console.log(`Editar postagem ${postId}`);
    };

    const handleDelete = (postId) => {
        axios.delete(process.env.REACT_APP_URL_API_POSTAGENS + `/postagens/${postId}`, {
            headers: {Authorization: `Bearer ${localStorage.getItem('u')}`}
        }).then(() => {
            alert("Postagem excluida");
            window.location.reload();
        })
        console.log(`Excluir postagem ${postId}`);
    };

    if (role === 'INSTITUICAO') {
        if (error){
            return (
                <div>
                    <div className="format">
                        <p className="title" >Minhas Postagens</p>
                        <div className="posts">
                            <p>Erro ao obter postagens!</p>
                        </div>
                    </div>
                </div>
            );
        }else if(post === null || post === undefined){
            return (
                <div>
                    <div className="format">
                        <p className="title" >Minhas Postagens</p>
                        <div className="posts">
                            <p>Nenhuma postagem disponivel</p>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <div className="format">
                        <p className="title" >Minhas Postagens</p>
                        <div className="posts">
                            <h2 className="post-title">{post.titulo}</h2>
                            {post.map((post) => {
                                return (
                                    <div className="post-card" key={post.id}>
                                        <h4>
                                            <IconContext.Provider>
                                                <img src='https://api.dicebear.com/7.x/adventurer/svg?seed=auhs'
                                                     alt='icone do perfil'/>
                                            </IconContext.Provider>
                                        </h4>
                                        <h3>
                                            {post.nomeInstituicao}</h3>
                                        <p className="post-body">{post.mensagem}</p>
                                        <br/><br/>
                                        <div className="post-buttons">
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

                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )
        }
    }
};

export default MinhasPostagens;
