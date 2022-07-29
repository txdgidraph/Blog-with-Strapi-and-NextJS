import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./item";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const FeaturedPosts = () => {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <div style={{ margin: "3em 0 0 0" }}>
      <h1 style={{ marginLeft: "4em", marginBottom: "1em", color: "#812A3F" }}>
        Featured Posts
      </h1>
      <div className="App">
        <div className="controls-wrapper">
        </div>
        <div className="carousel-wrapper">
          <Carousel breakPoints={breakPoints}>
            {items.map((item) => (
              <Item key={item}>{item}</Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
