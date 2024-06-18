import React, { useState } from "react";
import Style from "./Navbar.module.scss";
import Toggler from "./home/Toggler";
import { HashLink as Link } from "react-router-hash-link";
import { Box, Button, Collapse } from "@mui/material";
import { Menu, ExpandLess, ExpandMore } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
import { info } from "../info/Info";
import { singlePage } from "../info/Info";
import Logo from "../img/AM Main Logo.png";
import Logo_white from "../img/AM Inverted Color.png";

const links = [
  {
    name: "Home",
    to: "",
    active: "Home",
  },
  {
    name: "About Me",
    to: "about",
    active: "about",
  },
  {
    name: info.initials,
    type: "initials",
    to: "",
    active: "home",
  },
  {
    name: "Portfolio",
    to: "portfolio",
    active: "portfolio",
  },
];

// This function is used to create a scroll offset to compensate for the navbar
// when you click on the nav buttons to scroll down.
const scrollWidthOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

export default function Navbar({ darkMode, handleClick, active, setActive }) {
  const small = useMediaQuery("(max-width:600px)");
  const full = useMediaQuery("(min-width:600px)");
  const [open, setOpen] = useState(false);

  const handleCollapse = () => {
    setOpen(!open);
  };

  return (
    <Box
      component={"nav"}
      width={"100%"}
      position={singlePage ? "fixed" : "relative"}
      className={darkMode ? Style.dark : Style.light}
    >
      {small && (
        <>
          <Button onClick={handleCollapse}>
            <Menu />
            {open ? <ExpandLess /> : <ExpandMore />}
          </Button>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box
              component={"ul"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"start"}
              padding={"1rem"}
              gap={{ xs: "2rem", md: "8rem" }}
              fontSize={"1rem"}
            >
              {links.map((link, index) => (
                <Box
                  key={index}
                  component={"li"}
                  className={
                    link.active === active && !link.type && Style.active
                  }
                  sx={{ borderImageSource: info.gradient }}
                >
                  <Link
                    to={singlePage ? `#${link.to}` : `/${link.to}`}
                    scroll={(el) => scrollWidthOffset(el)}
                    smooth
                    onClick={() => setActive(link.active)}
                    className={Style.link}
                  >
                    {!link.type && (
                      <p style={{ padding: "0.5rem 0" }}>{link.name}</p>
                    )}
                    {link.type && (
                      <img
                        src={darkMode ? Logo : Logo_white}
                        className={Style.logo}
                        alt="Logo"
                      />
                    )}
                  </Link>
                </Box>
              ))}
              <li>
                <a
                  href="https://flowcv.com/resume/nk53kh16a9"
                  target="_blank"
                  onClick={() => setActive("Resume")}
                  className={Style.link}
                  rel="noreferrer"
                >
                  Resume
                </a>
              </li>
              <li>
                <Toggler darkMode={darkMode} handleClick={handleClick} />
              </li>
            </Box>
          </Collapse>
        </>
      )}
      {full && (
        <Box
          component={"ul"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={{ xs: "2rem", md: "8rem" }}
          fontSize={"1rem"}
        >
          {links.map((link, index) => (
            <Box
              key={index}
              component={"li"}
              className={link.active === active && !link.type && Style.active}
              sx={{ borderImageSource: info.gradient }}
            >
              <Link
                to={singlePage ? `#${link.to}` : `/${link.to}`}
                scroll={(el) => scrollWidthOffset(el)}
                smooth
                onClick={() => setActive(link.active)}
                className={Style.link}
              >
                {!link.type && (
                  <p style={{ padding: "0.5rem 0" }}>{link.name}</p>
                )}
                {link.type && (
                  <img
                    src={darkMode ? Logo : Logo_white}
                    className={Style.logo}
                    alt="Logo"
                  />
                )}
              </Link>
            </Box>
          ))}
          <li>
            <Link
              to="https://flowcv.com/resume/nk53kh16a9"
              scroll={(el) => scrollWidthOffset(el)}
              smooth
              target="_blank"
              onClick={() => setActive("Resume")}
              className={Style.link}
            >
              Resume
            </Link>
          </li>
          <li>
            <Toggler darkMode={darkMode} handleClick={handleClick} />
          </li>
        </Box>
      )}
    </Box>
  );
}
