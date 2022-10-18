import React from 'react'
import axios from 'axios'

const baseURL = "https://doasanguepoa-bff.herokuapp.com/v1/api/postagens/1"

const Feed = () => {
    
    const [post, setPost] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setPost(response.data);
      })
      .catch(error => {
        setError(error);
      });
    }, []);
  
    if (!post) return null;

    return (
      <div>
        <h1>{post.Instituicao}</h1>
        <p>{post.mensagem}</p>
      </div>
    );

}

export default Feed