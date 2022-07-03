import { Facebook, Twitter, Instagram } from "@material-ui/icons";
import Navbar from "./navbar";
import {Link} from "@material-ui/core"
const HeaderMenu = () => {
  const d = new Date();
  const year = d.getFullYear();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[d.getMonth()];
  const day = d.getDate();
  const fullDate = `Saturday, ${day} ${month} ${year}`;
  return (
    <div>
      {/* ============ TOP BAR ELEMENT =========== */}
      <div
        style={{
          display: "flex",
          height: "4vh",
          borderBottom: "solid black 1px",
        }}
      >
        <div
          style={{
            width: "35%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>{fullDate}</span>
          <span
            style={{
              backgroundColor: "#F15455",
              color: "white",
              marginRight: "3px",
              padding: "0px 5px 0px 5px",
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            Trending
          </span>
          <span>Broadcom to buy Vmware ....</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "50%",
          }}
        >
          <span>
            <Facebook />
          </span>
          <span>
            <Instagram />
          </span>
          <span>
            <Twitter />
          </span>
        </div>
      </div>
      {/* ============ TOP BAR ELEMENT =========== */}

      {/* ============ WEBSITE LOGO =========== */}
      <h1 style={{ marginLeft: "3vw" }}><Link href="/" style={{textDecoration:"none",}}>CyberMatta Logo</Link></h1>
      {/* ============ WEBSITE LOGO =========== */}

      {/* ============ MENU BAR =========== */}
      <Navbar/>
      {/* ============ MENU BAR =========== */}
    </div>
  );
};
export default HeaderMenu;
