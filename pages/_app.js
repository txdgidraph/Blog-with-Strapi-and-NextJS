import "../styles/globals.css";
import "../elements/battery-animation/battery-animation.css";
import "../elements/homepage-sections/homepage.css";
import "../elements/homepage-sections/featured-posts/featured-posts-styles.css"
import Layout from "../components/layout";

export default function MyApp({ Component, pageProps }) {
  return (
   
      <Component {...pageProps} />
  );
}
