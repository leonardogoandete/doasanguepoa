import React from 'react'
import { Api } from '../../config/Api';


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
    
        return (
          <div>
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
