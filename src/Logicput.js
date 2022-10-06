import axios from 'axios';
import React from 'react';

const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

export default function AppPut() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseUrl}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function updatePost() {
    axios
      .put(`${baseUrl}/1`, {
        title: 'Hello word',
        body: 'This an updated post.',
      })
      .then((response) => {
        setPost(response.data);
      });
  }
  if (!post) return 'No posts!';
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={updatePost}>Update Post</button>
    </div>
  );
}
