import {
  AppBar,
  Toolbar,
  CssBaseline,
  TextField,
  makeStyles,
  Link,
} from "@material-ui/core";
import TechNews from "../../pages/tech-news";
import { Search } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  navlinks: {
    display: "flex",
  },
  links: {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      textDecoration: "none",
      color: "yellow",
      //borderBottom: "1px solid white",
    },
  },
  searchBox: {
    padding: "2px 0px 2px 5px",
    borderRadius: "25px",
    height: "30px",
    border: "none",
    "&:focus": {
      outline: "none",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar
        position="static"
        color="primary"
        style={{ backgroundColor: "#1F2024" }}
      >
        <Toolbar>
          <div className={classes.navlinks}>
            <Link href="/tech-news" className={classes.links}>
              Tech News
            </Link>
            <Link href="/events" className={classes.links}>
              Events
            </Link>
            <Link href="/startups" className={classes.links}>
              Startups
            </Link>
            <Link href="/how-to" className={classes.links}>
              How To's
            </Link>
            <Link href="/podcasts" className={classes.links}>
              Podcasts
            </Link>
            <Link href="/gadgets-appliances" className={classes.links}>
              Gadgets & Appliances
            </Link>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginLeft: "20%" }}
          >
            <input placeholder="Search" className={classes.searchBox} />
            <span style={{ paddingLeft: "3px", paddingTop: "5px" }}>
              <Search />
            </span>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
