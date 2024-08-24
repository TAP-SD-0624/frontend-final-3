import React from "react";
import { Typography } from "@mui/material";
import TabsSection from "@components/TabsSection";

const TabsPart = () => {
  const orderTabs = ["Product Description", "Related Products", "Ratings and Reviews"];
  const orderTabPanels = [<Typography
    sx={{
      textTransform: "none",
      fontFamily: "Inter",
      fontSize: "16px",
      fontWeight: "500",
      color: "var(--low-emphasis)",
      whiteSpace: "pre-line",
      lineHeight: 1.5,
    }}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
    scelerisque laoreet tortor cras molestie tincidunt malesuada
    malesuada. Neque, mauris duis dui id morbi magna. Cras lacus, viverra
    auctor in turpis est quisque eget tristique.
    <br /> <br />
    Dolor augue mattis duis semper gravida enim eu imperdiet sit. Et
    pharetra platea pretium nec feugiat tincidunt quam leo tristique.
    Nulla enim consectetur sit et tempus, faucibus leo ac cras. Purus ut
    non eu mus volutpat. <br /> <br /> Eget est vel sagittis amet sit eu
    eu ullamcorper tellus. Leo mauris, faucibus vulputate adipiscing
    elementum tristique dictumst augue pellentesque. Justo, sed nunc,
    pretium turpis scelerisque. Enim urna etiam morbi vestibulum ac
    dictumst. Ac ut elementum molestie sit felis imperdiet.{" "}
  </Typography>, <Typography
    sx={{
      textTransform: "none",
      fontFamily: "Inter",
      fontSize: "16px",
      fontWeight: "500",
      color: "var(--low-emphasis)",
      whiteSpace: "pre-line",
      lineHeight: 1.5,
    }}
  >
    Related Products content goes here.
  </Typography>, <Typography
    sx={{
      textTransform: "none",
      fontFamily: "Inter",
      fontSize: "16px",
      fontWeight: "500",
      color: "var(--low-emphasis)",
      whiteSpace: "pre-line",
      lineHeight: 1.5,
    }}
  >
    Ratings and Reviews content goes here.
  </Typography>];
  return (
    <TabsSection tab={orderTabs} tabPanel={orderTabPanels} />
  );
};

export default TabsPart;
