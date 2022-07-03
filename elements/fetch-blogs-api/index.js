import { url } from "../../next.config";

const fetchBlogs = () => {
  const getBlogs = () => {
      
    const entries = fetch(`${url}/api/blogs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      return entries;
  };

  return {getBlogs}
  
};

export default fetchBlogs;
