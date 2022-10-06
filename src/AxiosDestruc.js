import axios from 'axios';
import React from 'react';

const client = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts',
});

export default function AppAxios() {
  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    client.get('/1').then((response) => {
      setPost(response.data);
    });
  }, []);

  function deletePost() {
    client.delete('/1').then(() => {
      alert('Post deleted');
      setPost(null);
    });
  }

  if (!post) return 'no post!';
  return (
    <div>
      <h1>{post.title}</h1>
      <h1>{post.body}</h1>
      <button onClick={deletePost}>Delete</button>
    </div>
  );
}
