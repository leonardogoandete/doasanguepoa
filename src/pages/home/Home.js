import React from 'react'
import axios from 'axios'
import Button from "../../components/Button";

import './Home.css'

const Home = () => {
  
        const [post, setPost] = React.useState(null);
        // eslint-disable-next-line
        const [error, setError] = React.useState(null);
    
        React.useEffect(() => {
          axios.get('https://doasanguepoa-bff.herokuapp.com/v1/api/postagens').then((response) => {
            setPost(response.data);
          })
          .catch(error => {
            setError(error);
          });
        }, []);
      
        if (!post) return null;
    
        return (
          
          <div>
            <Button Text="Sair" onClick=""> </Button>
            <h2 className="post-title">{post.idInstituicao}</h2>
            {post.map((post) => {
               return (
                  <div className="post-card" key={post.id}>
                     <h3>{post.instituico.nome}</h3>
                     <p className="post-body">{post.mensagem}</p>
                  </div>
               );
            })}
            
          </div>
        );

}

export default Home
