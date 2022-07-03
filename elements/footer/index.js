import { Grid, Link } from "@material-ui/core";

const FooterMenu = () => {
  return (
    <div style={{ borderTop: "solid grey 1px", backgroundColor: "#1C1C20", paddingTop:"5vh", paddingBottom:"5vh"}}>
      <Grid container spacing={2}>
        <Grid item md={3}>
          <img
            src="https://www.healthmatta.com/wp-content/uploads/2021/08/healthmata.png"
            width="100%"
            height="auto"
          />
          <div style={{ color: "white" }}>
            <h3>Copyright © 2022 CyberMatta™</h3>
            <p>This website is a product of <Link href="netmatta.com">Netmatta</Link></p>
          </div>
        </Grid>
        <Grid item md={3}>
        <div style={{ color: "white", paddingRight:"20px" }}>
          <h3>Navigation Menu</h3>
          <ul>
              <li>Tech News</li>
              <li>Events</li>
              <li>Startups</li>
              <li>How To's</li>
              <li>Podcasts</li>
              <li>Gadgets & Appliances</li>
          </ul>
          </div>
        </Grid>
        <Grid item md={3}>
        <div style={{ color: "white" }}>
          <h3>About</h3>
          <ul>
              <li>CyberMatta</li>
              <li>Team</li>
              <li>Contact US</li>
              <li>Advertise</li>
              <li>Partner with US</li>
          </ul>
          </div>
        </Grid>
        <Grid item md={3}>
        <div style={{ color: "white" }}>
          <h3>Legal</h3>
          <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>Ad Policy</li>
          </ul>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default FooterMenu;
