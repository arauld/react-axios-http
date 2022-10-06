import axios from 'axios';
import React from 'react';

const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

export default function AppPost() {
  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    axios.get(`${baseUrl}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseUrl, {
        title: 'Hello word',
        body: 'This a new post.',
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
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}
