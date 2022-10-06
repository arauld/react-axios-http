import axios from 'axios';
import React from 'react';

const baseUrl = 'https://jsonplaceholder.typicode.com/posts/1';
export default function App() {
  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setPost(response, data);
    });
  }, []);
}

if (!post) return null;

return (
  <div>
    <h1>{post.title}</h1>
    <p> {post.body}</p>
  </div>
);
