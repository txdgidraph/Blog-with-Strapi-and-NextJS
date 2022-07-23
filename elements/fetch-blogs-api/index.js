import { url } from "../../next.config";
import { serverRuntimeConfig } from "../../next.config";
const fetchBlogs = () => {
  const getBlogs = () => {
      
    const entries = fetch(`${url}/api/blogs?populate=*`, {
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
