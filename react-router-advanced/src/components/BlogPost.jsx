import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams(); // get dynamic route param
  return (
    <div>
      <h2>Blog Post</h2>
      <p>Showing post with ID: {id}</p>
    </div>
  );
}

export default BlogPost;
