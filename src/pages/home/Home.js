import React, { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import jwt_decode from 'jwt-decode';
import { Input, Button } from 'rsuite';
import {
    WhatsappIcon,
    WhatsappShareButton,
    TwitterIcon,
    TwitterShareButton,
} from 'react-share';
import './Home.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';  // Importe o hook useLocation
import { validaRole } from "../../config/verificaRole";

const Home = () => {
    const role = validaRole();
    const shareUrl = 'https://doasanguepoa.herokuapp.com/';
    const [post, setPost] = useState([]);
    const [mensagem, setMensagem] = useState('');
    const [error, setError] = useState(null);
    const location = useLocation();  // Utilize o hook useLocation para obter a localização da rota

    useEffect(() => {
        const fetchPostagens = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_URL_API_POSTAGENS}/postagens`,
                    { headers: { Authorization: `Bearer ${localStorage.getItem('u')}` } }
                );
                setPost(response.data);
            } catch (error) {
                setError(error);
            }
        };

        fetchPostagens();
    }, []);

    const isInstituicao = role === 'INSTITUICAO';
    const isMinhasPostagensPage = location.pathname === '/minhas-postagens';  // Lógica para verificar se está na página "minhas-postagens"

    const handleEditPost = (postId) => {
        // Lógica para edição de postagem
    };

    const handleDeletePost = (postId) => {
        // Lógica para exclusão de postagem
    };

    const handleSubmit = async () => {
        try {
            const token = localStorage.getItem('u');
            const decoded = jwt_decode(token);

            await axios.post(
                `${process.env.REACT_APP_URL_API_POSTAGENS}/postagens`,
                {
                    mensagem,
                    cnpj: decoded['upn'],
                },
                { headers: { Authorization: `Bearer ${localStorage.getItem('u')}` } }
            );

            alert('Postagem realizada');
            setMensagem('');

            const updatedPost = await axios.get(
                `${process.env.REACT_APP_URL_API_POSTAGENS}/postagens`,
                { headers: { Authorization: `Bearer ${localStorage.getItem('u')}` } }
            );
            setPost(updatedPost.data);
        } catch (error) {
            setError(error);
        }
    };

    const renderPosts = () => {
        if (error) {
            return <p>Erro ao obter postagens!</p>;
        }

        if (!post.length) {
            return <p>Nenhuma postagem disponível</p>;
        }

        return post.map((post) => (
            <div className="post-card" key={post.id}>
                <h4>
                    <IconContext.Provider>
                        <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=auhs" alt="icone do perfil" />
                    </IconContext.Provider>
                </h4>
                <h3>{post.titulo}</h3>
                <p className="post-body">{post.mensagem}</p>
                <br /><br />
                <WhatsappShareButton
                    url={shareUrl}
                    title={post.mensagem}
                    className="Demo__some-network__share-button"
                    style={{ float: 'right', marginTop: '-35px' }}
                >
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                <TwitterShareButton
                    url={shareUrl}
                    title={post.mensagem}
                    className="Demo__some-network__share-button"
                    style={{ float: 'right', marginTop: '-35px' }}
                >
                    <TwitterIcon size={32} round />
                </TwitterShareButton>
                <hr />
                {isInstituicao && isMinhasPostagensPage && (
                    <>
                        <Button onClick={() => handleEditPost(post.id)}>Editar</Button>
                        <Button onClick={() => handleDeletePost(post.id)}>Excluir</Button>
                    </>
                )}
            </div>
        ));
    };

    return (
        <div className="format">
            {isInstituicao && (
                <>
                    <p className="post-title">Publicar Nova Postagem:</p>
                    <Input
                        as="textarea"
                        value={mensagem}
                        onChange={(value) => setMensagem(value)}
                        className="formPostagem"
                        rows={3}
                        style={{ width: 400, marginLeft: 120 }}
                        placeholder="Insira a mensagem..."
                    />
                    <Button
                        appearance="primary"
                        onClick={handleSubmit}
                        style={{ marginLeft: 425, marginTop: 10 }}
                    >
                        Postar
                    </Button>
                </>
            )}
            <div className="posts">{renderPosts()}</div>
        </div>
    );
};

export default Home;
