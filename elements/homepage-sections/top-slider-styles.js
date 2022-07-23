import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  entireSliderGrid: {
    [theme.breakpoints.between("sm", "md")]: {
      height: "60vh",
    },
    [theme.breakpoints.up("md")]: {
      height: "60vh",
    },
  },
  bigSection: {
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "30vh",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      width: "100%",
      height: "30vh",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "100%",
      height: "30vh",
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
      height: "60.5vh",
    },
  },
  smallSections: {
    position: "relative",
  },
  contentSection: {
    [theme.breakpoints.down("xs")]: {
      height: "15vh",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      height: "15vh",
    },
    [theme.breakpoints.between("sm", "md")]: {
      height: "15vh",
    },
    [theme.breakpoints.up("md")]: {
      height: "30vh",
    },
  },
  sliderContentAppearnce: {
    bottom: "10px",
    margin:"0 0 0 1vw",
    color: "white",
    position: "absolute",
  },
  section_2_Styles: {
    [theme.breakpoints.down("xs")]: {
      margin: "4px 2px 0px 0px",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      margin: "4px 2px 0px 0px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      margin: "4px 0px 0px 0px",
    },
    [theme.breakpoints.up("md")]: {
      margin: "4px 0px 0px 4px",
    },
  },
  section_3_Styles: {
    [theme.breakpoints.down("xs")]: {
      margin: "4px 0px 0px 2px",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      margin: "4px 0px 0px 2px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      margin: "4px 0px 0px 4px",
    },
    [theme.breakpoints.up("md")]: {
      margin: "4px 0px 0px 4px",
    },
  },
  section_4_Styles: {
    [theme.breakpoints.down("xs")]: {
      margin: "4px 2px 0px 0px",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      margin: "4px 2px 0px 0px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      margin: "4px 0px 0px 0px",
    },
    [theme.breakpoints.up("md")]: {
      margin: "4px 0px 0px 4px",
    },
  },
  section_5_Styles: {
    [theme.breakpoints.down("xs")]: {
      margin: "4px 0px 0px 2px",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      margin: "4px 0px 0px 2px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      margin: "4px 0px 0px 4px",
    },
    [theme.breakpoints.up("md")]: {
      margin: "4px 0px 0px 4px",
    },
  },
}));

export { useStyles };
