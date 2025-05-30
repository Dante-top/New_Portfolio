import React from "react";
import { Box } from "@mui/material";

function EmojiBullet(props) {
  const { emoji, text, link } = props;

  return (
    <Box
      component={"li"}
      fontSize={"1rem"}
      lineHeight={1.5}
      style={{ cursor: "default" }}
    >
      <Box
        component={"span"}
        aria-label="cheese"
        role="img"
        mr={{ xs: "0.5rem", md: "1rem" }}
        fontSize={"1.5rem"}
      >
        {emoji}
      </Box>{" "}
      {link ? (
        <a className="" href={link} target="_blank" rel="noreferrer">
          {text}
        </a>
      ) : (
        <>{text}</>
      )}
    </Box>
  );
}

export default EmojiBullet;
