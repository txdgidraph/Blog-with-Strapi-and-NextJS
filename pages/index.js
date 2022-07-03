import styles from "../styles/Home.module.css";
import fetchBlogs from "../elements/fetch-blogs-api";
import { useEffect, useState } from "react";

function Home({ list }) {
  const { getBlogs } = fetchBlogs();
  const [blogs, setBlogs] = useState();
  useEffect(() => {
    getBlogs()
      .then((response) => response.json())
      .then((data) => setBlogs(data));
    console.log(blogs);
  }, []);

  return <div className={styles.container}>
   <h2>HOMEPAGE</h2>
  </div>;
}
export default Home;
