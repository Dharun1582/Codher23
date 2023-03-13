import { React, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import styles1 from "./Navsmall.module.css";

// CDN
const ctf_logo = process.env.REACT_APP_CDN_URL + "/assets/logos/ctf_full.png";


function NavbarBig() {
//   const location = useLocation();

  const [active, setActive] = useState("Home");

//   useEffect(() => {
//     setActive(location.pathname);
//   }, [location.pathname]);

// const active="/";

    function change(str){
        setActive(str);
    }

  return (
    <div className={`${styles._navbar}`}>
      <div className={`${styles._navbar_brand}`}>
        <a to="/">
          {/* <img src={`${process.env.PUBLIC_URL}/android-chrome-512x512.png`} width={32}/> */}
          <img src={ctf_logo} alt="CODHER'23" width={200} />
        </a>
      </div>

      <div className={`${styles._navbar_main}`}>
        <a className={`${styles._navbar_main_link}`} to="/" onClick={()=>change("Home")}>
          <span
            className={`${active === "Home"
              ? `${styles._navbar_main_link_text_active}`
              : `${styles._navbar_main_link_text}`
              }`}
          >
            Home
          </span>
        </a>
        <a className={`${styles._navbar_main_link}`} to="/" onClick={()=>change("Events")}>
          <span
            className={`${active === "Events"
              ? `${styles._navbar_main_link_text_active}`
              : `${styles._navbar_main_link_text}`
              }`}
          >
            Events
          </span>
        </a>
        <a className={`${styles._navbar_main_link}`} to="/" onClick={()=>change("Sponsors")}>
          <span
            className={`${active === "Sponsors"
              ? `${styles._navbar_main_link_text_active}`
              : `${styles._navbar_main_link_text}`
              }`}
          >
            Sponsors
          </span>
        </a>
        {/* <Link className={`${styles._navbar_main_link}`} to="/alumni">
          <span
            className={`${
              active === "/alumni"
                ? `${styles._navbar_main_link_text_active}`
                : `${styles._navbar_main_link_text}`
            }`}
          >
            Alumni
          </span>
        </Link>{" "} */}
        <a className={`${styles._navbar_main_link}`} to="/" onClick={()=>change("Contact")}>
          <span
            className={`${active === "Contact"
              ? `${styles._navbar_main_link_text_active}`
              : `${styles._navbar_main_link_text}`
              }`}
          >
            Contact Us
          </span>
        </a>
      </div>
    </div>
  );
}

function NavbarSmall({ clickLogout }) {

    const [active, setActive] = useState("Home");
  const toggleNavbar = (str) => {
    var checkBox = document.getElementById("checkBox");
    checkBox.checked = !checkBox.checked;
    if(str!=null)setActive(str);
  };



//   useEffect(() => {
//     setActive(location.pathname);
//   }, [location.pathname]);

// const active="/";

    // function change(str){
    //     setActive(str);
    // }


  return (
    <nav role="navigation">
      <div className={styles1.menuToggle}>
        <input type="checkbox" id="checkBox" className={styles1.check} />{" "}
        {/* wtf */}
        <span className={styles1.span} onClick={()=>toggleNavbar(null)}></span>
        <span className={styles1.span} onClick={()=>toggleNavbar(null)}></span>
        <span className={styles1.span} onClick={()=>toggleNavbar(null)}></span>
        <ul className={styles1.menu}>
          <a to="/" onClick={()=>toggleNavbar("Home")}>
            <img src={ctf_logo} alt="CEG Tech Forum" />
          </a>
          <a to="/" onClick={()=>toggleNavbar("Home")}>
            <li
              className={`${active === "Home"
                ? `${styles._navbar_main_link_text_active}`
                : `${styles._navbar_main_link_text}`
                }`}
            >
              Home
            </li>
          </a>
          <a to="/" onClick={()=>toggleNavbar("Events")}>
            <li
              className={`${active === "Events"
                ? `${styles._navbar_main_link_text_active}`
                : `${styles._navbar_main_link_text}`
                }`}
            >
              Events
            </li>
          </a>
          <a to="/" onClick={()=>toggleNavbar("Sponsors")}>
            <li
              className={`${active === "Sponsors"
                ? `${styles._navbar_main_link_text_active}`
                : `${styles._navbar_main_link_text}`
                }`}
            >
              Sponsors
            </li>
          </a>
         
          <a to="/" onClick={()=>toggleNavbar("Contact")}>
            <li
              className={`${active === "Contact"
                ? `${styles._navbar_main_link_text_active}`
                : `${styles._navbar_main_link_text}`
                }`}
            >
              Contact Us
            </li>
          </a>
        </ul>
      </div>
    </nav>
  );
}

function Navbar({ width }) {
  return width < 1024 ? <NavbarSmall /> : <NavbarBig />;
}
export default Navbar;
