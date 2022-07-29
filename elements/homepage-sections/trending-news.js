import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useStyles } from "./trending-news-styles";
import { Facebook, Twitter, Instagram, YouTube } from "@material-ui/icons";
import BlogPreview from "../../elements/blog-preview";
import { url } from "../../next.config";
import fetchBlogs from "../../elements/fetch-blogs-api";
import DatePublished from "../published-date";
import BatteryAnimation from "../battery-animation";

const TrendingNews = () => {
  const { getBlogs } = fetchBlogs();
  const [blogs, setBlogs] = useState();
  const [showPage, setShowPage] = useState(false);
  console.log(blogs);
  useEffect(() => {
    getBlogs()
      .then((response) => response.json())
      .then((data) => setBlogs(data));

    // setTimeout(() => {
    //   setShowPage(true);
    // }, 0);
  }, []);

  const topSection = [];
  const headlineSection = [];
  const headlineLeftSection = [1,2,3,4,5,6];
  const headlineRightSection = [];

  if (blogs) {
    const totalBlogs = blogs.data.length;
    let trendingBlogs = [];

    // 😂😂😂//
    while (trendingBlogs.length < 8) {
      var r = Math.floor(Math.random() * totalBlogs) + 1;
      if (trendingBlogs.indexOf(r) === -1) trendingBlogs.push(r);
    }
    //
    topSection.push(trendingBlogs[0]);
    topSection.push(trendingBlogs[1]);
    let count = 2;
    while (headlineSection.length < 6) {
      headlineSection.push(trendingBlogs[count]);
      count++;
    }

    let leftCount = 0;
    let rightCount = 3;
    // while (leftCount < 3) {
    //   headlineLeftSection.push(headlineSection[leftCount]);
    //   headlineRightSection.push(headlineSection[rightCount]);
    //   console.log(headlineLeftSection);
    //   leftCount++;
    //   rightCount++;
    // }
  }
  const classes = useStyles();
  console.log("This is it" + headlineSection)
  return (
    <div style={{ marginTop: "4vh" }} className="content">
      {blogs &&
      blogs.data[9].attributes.FeaturedImage.data.attributes.url &&
      headlineLeftSection ? (
        <div>
          <h1 style={{ margin: "0 0 4vh 4vh" }}>Trending News</h1>
          <Grid container className={classes.entireGridSection}>
            {/* ===== Content Section ====== */}
            <Grid item md={8} sm={12} xs={12}>
              <Grid container>
                {/* ===== Section 1 ====== */}
                {blogs &&
                  topSection.map((items, index) => {
                    return (
                      <Grid item md={6} sm={6} xs={12} key={index}>
                        <div className={classes.contentSection_1}>
                          <div
                            style={{
                              height: "200px",
                              backgroundImage: `url(${url}${
                                blogs.data[items]
                                  ? blogs.data[items].attributes.FeaturedImage
                                      .data.attributes.url
                                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzkC9ryyokGzGyy-3DVWDqDJT8tu6k1M5vGuVh9vBj5hrTXV_AecRw8XRlulrf_UZBAIs&usqp=CAU"
                              })`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                          ></div>
                          <div>
                            <div
                              style={{
                                fontSize: "0.8em",
                                marginBottom: "1em",
                                marginTop: "1em",
                              }}
                            >
                              <span
                                style={{
                                  paddingRight: "2em",
                                  color: "#0F90FE",
                                }}
                              >
                                {blogs.data[items] && blogs.data[items].attributes.Category}
                              </span>
                              <span>
                                <DatePublished
                                  date={
                                    blogs.data[items] && blogs.data[items].attributes.publishedAt
                                  }
                                />
                              </span>
                            </div>
                            <h3 style={{ marginBottom: "0.5em" }}>
                              {blogs.data[items] && blogs.data[items].attributes.Title}
                            </h3>
                            <p>
                              <BlogPreview
                                name={blogs.data[items] && blogs.data[items].attributes.blogBody}
                                count="150"
                              />
                            </p>
                          </div>
                        </div>
                      </Grid>
                    );
                  })}
              </Grid>
              {/* ===== Section 3 Headlines ====== */}
              <Grid container>
                <div
                  style={{
                    width: "100%",
                    marginBottom: "2em",
                    borderTop: "1px dashed #dcdedf",
                  }}
                ></div>
                {/* ===== Left Side Column ====== */}
                {headlineLeftSection.map((item, index) => {
                  return(
                  <Grid item md={6} sm={6} xs={12} key={index}>
                    <div style={{ margin: "0 1em 1em 0" }}>
                      <Grid container spacing={1}>
                        <Grid
                          item
                          xs={2}
                          md={2}
                          sm={2}
                          style={{
                            backgroundImage: `url(${url}${
                              blogs &&
                              blogs.data[index].attributes.FeaturedImage.data
                                .attributes.url
                            })`,
                          }}
                          className={classes.headlineLeftSection}
                        ></Grid>
                        <Grid item xs={10} md={10} sm={10}>
                          <div
                            style={{ fontSize: "0.8em", marginBottom: "0.5em" }}
                          >
                            <span
                              style={{ paddingRight: "2em", color: "#0F90FE" }}
                            >
                              {
                                blogs.data[item].attributes
                                  .Category
                              }
                            </span>
                            <span>
                              <DatePublished
                                date={
                                  blogs.data[item].attributes
                                    .publishedAt
                                }
                              />
                            </span>
                          </div>
                          <h3>
                            {blogs.data[item].attributes.Title}
                          </h3>
                        </Grid>
                        <div
                          style={{
                            width: "100%",
                            marginTop: "1em",
                            borderTop: "1px dashed #dcdedf",
                          }}
                        ></div>
                      </Grid>
                    </div>
                  </Grid>)
                })}
                {/* ===== Right Side Column ====== */}
                {headlineRightSection.map((item, index) => {
                <Grid item md={6} sm={6} xs={12}>
                  <div style={{ margin: "0 0 1em 1em" }}>
                    <Grid container spacing={1}>
                      <Grid
                        item
                        xs={2}
                        md={2}
                        sm={2}
                        style={{
                          backgroundImage: `url(${url}${
                            blogs &&
                            blogs.data[headlineSection[3]].attributes
                              .FeaturedImage.data.attributes.url
                          })`,
                        }}
                        className={classes.headlineRightSection}
                      ></Grid>
                      <Grid item xs={10} md={10} sm={10}>
                        <div
                          style={{ fontSize: "0.8em", marginBottom: "0.5em" }}
                        >
                          <span
                            style={{ paddingRight: "2em", color: "#0F90FE" }}
                          >
                            {blogs.data[headlineSection[3]].attributes.Category}
                          </span>
                          <span>
                            <DatePublished
                              date={
                                blogs.data[headlineSection[3]].attributes
                                  .publishedAt
                              }
                            />
                          </span>
                        </div>
                        <h3>
                          {blogs.data[headlineSection[3]].attributes.Title}
                        </h3>
                      </Grid>
                      <div
                        style={{
                          width: "100%",
                          marginTop: "1em",
                          borderTop: "1px dashed #dcdedf",
                        }}
                      ></div>
                    </Grid>
                  </div>
                </Grid>})}
              </Grid>
            </Grid> 
            {/* ===== SideBar ====== */}
            <Grid item md={4} sm={12} xs={12}>
              <div className={classes.trendingNews_Sidebar_Cont}>
                <h3 style={{ marginBottom: "1em" }}>Follow US</h3>
                <Grid container spacing={2}>
                  <Grid item md={6} sm={6} xs={6}>
                    <div
                      style={{
                        backgroundColor: "#00acee",
                      }}
                      className={classes.socialMediaButtons}
                    >
                      <Twitter />
                      <span style={{ paddingLeft: "4px", fontSize: "0.8em" }}>
                        Twitter
                      </span>
                    </div>
                  </Grid>
                  <Grid item md={6} sm={6} xs={6}>
                    <div
                      style={{
                        backgroundColor: "#4267B2",
                      }}
                      className={classes.socialMediaButtons}
                    >
                      <Facebook />
                      <span style={{ paddingLeft: "4px", fontSize: "0.8em" }}>
                        Facebook
                      </span>
                    </div>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item md={6} sm={6} xs={6}>
                    <div
                      style={{
                        backgroundColor: "#7757CA",
                      }}
                      className={classes.socialMediaButtons}
                    >
                      <Instagram />
                      <span style={{ paddingLeft: "4px", fontSize: "0.8em" }}>
                        Instagram
                      </span>
                    </div>
                  </Grid>
                  <Grid item md={6} sm={6} xs={6}>
                    <div
                      style={{
                        backgroundColor: "#F60000",
                      }}
                      className={classes.socialMediaButtons}
                    >
                      <YouTube />
                      <span style={{ paddingLeft: "4px", fontSize: "0.8em" }}>
                        YouTube
                      </span>
                    </div>
                  </Grid>
                </Grid>
                {/* AD Section */}
                <h3 style={{ margin: "1em 0 1em 0" }}>Advertisement</h3>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzkC9ryyokGzGyy-3DVWDqDJT8tu6k1M5vGuVh9vBj5hrTXV_AecRw8XRlulrf_UZBAIs&usqp=CAU"
                  height="auto"
                  width="100%"
                />
              </div>
            </Grid>
          </Grid>
        </div>
      ) : (
        <div>
          <BatteryAnimation />
        </div>
      )}
    </div>
  );
};
export default TrendingNews;
