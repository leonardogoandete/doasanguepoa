import React from 'react'
import axios from "axios";

const Feed = () => {
    
    const [post, setPost] = React.useState(null);
    // eslint-disable-next-line
    const [error, setError] = React.useState(null);
    React.useEffect(() => {
      axios.get(process.env.REACT_APP_URL_API_POSTAGENS+'/postagens', { headers: { Authorization: `Bearer ${localStorage.getItem('u')}`} }).then((response) => {
        setPost(response.data);
      })
      .catch(error => {
        setError(error);
      });
    }, []);
  
    if (!post) return null;
    

    return (
      <div>
        <h2 className="post-title">{post.titulo}</h2>
        {post.map((post) => {
           return (
              <div className="post-card" key={post.id}>
                 <h3>{post.nomeInstituicao}</h3>
                 <p className="post-body">{post.mensagem}</p>
              </div>
           );
        })}
      </div>
    );
}

export default Feed;
