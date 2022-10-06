export default function AppDelete() {
  const [post, setPost] = React.useState(null);

  const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  React.useEffect(() => {
    axios.get(`${baseUrl}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function deletePost() {
    axios.delete(`${baseUrl}/1`).then(() => {
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
