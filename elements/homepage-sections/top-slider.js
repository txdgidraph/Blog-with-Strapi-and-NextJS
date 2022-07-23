import { Grid, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import fetchBlogs from "../../elements/fetch-blogs-api";
import { useStyles } from "./top-slider-styles";
import { url } from "../../next.config";
import BlogPreview from "../../elements/blog-preview";
import BatteryAnimation from "../battery-animation";
const TopSlider = () => {
  const { getBlogs } = fetchBlogs();
  const [blogs, setBlogs] = useState();
  useEffect(() => {
    getBlogs()
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  let sliderBlogsArray = [];
  blogs &&
    blogs.data.map((item) => {
      sliderBlogsArray.push(item);
    });
  const sliderSecition1 = sliderBlogsArray[sliderBlogsArray.length - 1];
  const sliderSecition2 = sliderBlogsArray[sliderBlogsArray.length - 2];
  const sliderSecition3 = sliderBlogsArray[sliderBlogsArray.length - 3];
  const sliderSecition4 = sliderBlogsArray[sliderBlogsArray.length - 4];
  const sliderSecition5 = sliderBlogsArray[sliderBlogsArray.length - 5];
  const classes = useStyles();

  return (
    <div>
      {blogs ? (
        <div>
          <Grid container className={classes.entireSliderGrid}>
            {/* ======  Section 1 ======= */}
            {/* ======  Section 1 ======= */}
            <Grid item md={6} xs={12}>
              <div
                style={{
                  backgroundImage: `url(${url}${sliderSecition1.attributes.FeaturedImage.data.attributes.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  margin: "4px 0px 0px 0px",
                }}
              >
                <div className="section1Opacity">
                  <div className={classes.bigSection}>
                    <div className={classes.sliderContentAppearnce}>
                      <h1 style={{ fontWeight: "bold" }}>
                        {sliderSecition1 && sliderSecition1.attributes.Title}
                      </h1>
                      <BlogPreview
                        name={sliderSecition1.attributes.blogBody}
                        count="150"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <Grid container>
                {/* ======  Section 2 ======= */}
                {/* ======  Section 2 ======= */}
                <Grid item md={6} xs={6}>
                  <div className={classes.smallSections}>
                    <div
                      style={{
                        backgroundImage: `url(${url}${sliderSecition2.attributes.FeaturedImage.data.attributes.url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      className={classes.section_2_Styles}
                    >
                      <div className="section2Opacity">
                        <div className={classes.contentSection}>
                          <div className={classes.sliderContentAppearnce}>
                            <h1>
                              {sliderSecition1 &&
                                sliderSecition2.attributes.Title}
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item md={6} xs={6}>
                  {/* ======  Section 3 ======= */}
                  {/* ======  Section 3 ======= */}
                  <div className={classes.smallSections}>
                    <div
                      style={{
                        backgroundImage: `url(${url}${sliderSecition3.attributes.FeaturedImage.data.attributes.url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      className={classes.section_3_Styles}
                    >
                      <div className="section3Opacity">
                        <div className={classes.contentSection}>
                          <div className={classes.sliderContentAppearnce}>
                            <h1>
                              {sliderSecition5 &&
                                sliderSecition3.attributes.Title}
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
              <Grid container>
                {/* ======  Section 4 ======= */}
                {/* ======  Section 4 ======= */}
                <Grid item md={6} xs={6}>
                  <div className={classes.smallSections}>
                    <div
                      style={{
                        backgroundImage: `url(${url}${sliderSecition4.attributes.FeaturedImage.data.attributes.url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      className={classes.section_4_Styles}
                    >
                      <div className="section3Opacity">
                        <div className={classes.contentSection}>
                          <div className={classes.sliderContentAppearnce}>
                            <h1>
                              {sliderSecition5 &&
                                sliderSecition4.attributes.Title}
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item md={6} xs={6}>
                  {/* ======  Section 5 ======= */}
                  {/* ======  Section 5 ======= */}
                  <div className={classes.smallSections}>
                    <div
                      style={{
                        backgroundImage: `url(${url}${sliderSecition5.attributes.FeaturedImage.data.attributes.url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      className={classes.section_5_Styles}
                    >
                      <div className="section5Opacity">
                        <div className={classes.contentSection}>
                          <div className={classes.sliderContentAppearnce}>
                            <h1>
                              {sliderSecition5 &&
                                sliderSecition5.attributes.Title}
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      ) : (
        <div>{/* Actions if Blog is not loaded */}</div>
      )}
    </div>
  );
};

export default TopSlider;
