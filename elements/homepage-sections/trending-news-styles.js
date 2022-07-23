import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  contentSection_1: {
    [theme.breakpoints.down("xs")]: {
      margin: "0 2px 0 0",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      margin: "0 3px 2em 0",
    },
    [theme.breakpoints.between("sm", "md")]: {
      margin: "0 3px 2em 0",
    },
    [theme.breakpoints.up("md")]: {
      margin: "0 3px 2em 0",
    },
  },
  contentSection_2: {
    [theme.breakpoints.down("xs")]: {
      margin: "0 0 0 2px",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      margin: "0 0 2em 3px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      margin: "0 0 2em 3px",
    },
    [theme.breakpoints.up("md")]: {
      margin: "0 0 2em 3px",
    },
  },
  headlineLeftSection: {
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  headlineRightSection: {
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  socialMediaButtons: {
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "4px 0 4px 0",
    cursor: "pointer",
  },
  trendingNews_Sidebar_Cont: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0em",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      marginLeft: "0em",
    },
    [theme.breakpoints.between("sm", "md")]: {
      marginLeft: "0em",
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "2em",
    },
  },
}));

export { useStyles };
