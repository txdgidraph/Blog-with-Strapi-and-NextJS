import styles from "../styles/Home.module.css";
import fetchBlogs from "../elements/fetch-blogs-api";
import { useEffect, useState } from "react";
import TopSlider from "../elements/homepage-sections/top-slider";
import BatteryAnimation from "../elements/battery-animation";
import TrendingNews from "../elements/homepage-sections/trending-news";
import DatePublished from "../elements/published-date";
function Home() {
  const { getBlogs } = fetchBlogs();
  const [blogs, setBlogs] = useState();
  const [batteryAnimation, setBatteryAnimation] = useState(true);

  useEffect(() => {
    getBlogs()
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>

          <TopSlider />
          <TrendingNews />
          {/* <DatePublished/> */}
          <h1>Tonny</h1>
     
    </div>
  );
}
export default Home;
