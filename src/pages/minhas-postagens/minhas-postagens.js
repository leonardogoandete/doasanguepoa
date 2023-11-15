import React, { useState, useEffect } from 'react';
import { validaRole } from '../../config/verificaRole';
import { IconContext } from 'react-icons';
import './minhas-postagens.css';
import axios from "axios";

const MinhasPostagens = () => {
    const role = validaRole();
    const [post, setPost] = useState([]);
    const [error, setError] = useState(null);

    const fetchPostagens = async () => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_URL_API_POSTAGENS}/postagens/instituicao`,
                { headers: { Authorization: `Bearer ${localStorage.getItem('u')}` } }
            );
            setPost(response.data);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchPostagens();
    }, []);

    const handleEdit = (postId) => {
        console.log(`Editar postagem ${postId}`);
    };

    const handleDelete = (postId) => {
        axios.delete(
            `${process.env.REACT_APP_URL_API_POSTAGENS}/postagens/${postId}`,
            { headers: { Authorization: `Bearer ${localStorage.getItem('u')}` } }
        ).then(() => {
            alert("Postagem excluída");
        });
        console.log(`Excluir postagem ${postId}`);
    };

    if (role === 'INSTITUICAO') {
        return (
            <div>
                <div class="format">
                    <p class="title">Minhas Postagens</p>
                    <div class="posts">
                        {error && <p>Ocorreu um erro ao obter postagens. Por favor, tente novamente mais tarde.</p>}
                        {!error && post.length === 0 && <p>Nenhuma postagem disponível</p>}
                        {post.length > 0 && (
                            <>
                                <h2 class="post-title">{post[0].titulo}</h2>
                                {post.map((post) => (
                                    <div class="post-card" key={post.id}>
                                        <h4>
                                            <IconContext.Provider>
                                                <img src='https://api.dicebear.com/7.x/adventurer/svg?seed=auhs' alt='icone do perfil' />
                                            </IconContext.Provider>
                                        </h4>
                                        <h3>{post.nomeInstituicao}</h3>
                                        <p class="post-body">{post.mensagem}</p>
                                        <br /><br />
                                        <div class="post-buttons">
                                            <button
                                                class="edit-button"
                                                onClick={() => handleEdit(post.id)}
                                            >
                                                Editar
                                            </button>
                                            <button
                                                class="delete-button"
                                                onClick={() => handleDelete(post.id)}
                                            >
                                                Excluir
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        );
    } else {
        // Código para usuários que não são instituições
        return (
            <div>
                <p class="title">Minhas Postagens</p>
                <div class="format">
                    <div class="posts">
                        <p>Desculpe, esta funcionalidade está disponível apenas para instituições.</p>
                    </div>
                </div>
            </div>
        );
    }
};

export default MinhasPostagens;
