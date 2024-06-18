import React from "react";
import IconLink from "./IconLink";
import { Box } from "@mui/material";
import Style from "./PortfolioBlock.module.scss";

function PortfolioBlock(props) {
  const { image, description, live, source, title } = props;
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      padding={"2rem"}
    >
      <h1 style={{ fontSize: "2rem", marginTop: "2rem" }}>{title}</h1>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <img src={image} className={Style.img_project} alt="title" />
        <h4 style={{ fontSize: "1rem", marginTop: "2rem", padding: "1rem" }}>
          {description}
        </h4>
      </Box>
      <Box
        className={"portfolio"}
        display={"flex"}
        flexDirection={"column"}
        gap={"0.5rem"}
        alignItems={"center"}
        fontSize={"1.5rem"}
        py={"2rem"}
      >
        <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
          <IconLink link={live} title={"Live Demo"} icon={"fa fa-safari"} />
        </Box>
        {source && (
          <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
            <IconLink link={source} title={"Source Code"} icon={"fa fa-code"} />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default PortfolioBlock;
