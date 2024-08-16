import { Tabs, Tab, Typography, Stack, Theme } from "@mui/material";
import React from "react";
import TabPanel from "./TabPanel";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";

const TabsSection = () => {
  const [tabIndex, setTabIndex] = useState(0);

  //@ts-ignore
  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  //@ts-ignore
  const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (
    <Stack width="100%" gap="24px" sx={{ borderRadius: "12px", mt: "16px" }}>
      <Tabs
        value={tabIndex}
        onChange={handleChange}
        aria-label="tabs"
        orientation={isXs ? "vertical" : "horizontal"}
        sx={{
          bgcolor: "var(--grey)",
          borderRadius: "12px",
          width: "100%",
        }}
      >
        <Tab
          sx={{
            textTransform: "none",
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: "500",
            color: "var(--low-emphasis)",
            "&:hover": {
              color: "var(--primary)",
              backgroundColor: "inherit",
            },
            "&.Mui-selected": {
              color: "var(--bright)",
              fontWeight: "500",
              backgroundColor: "var(--primary)",
              borderRadius: "8px",
              fontSize: "16px",
              padding: "6px 18px",
              m: "16px",
            },
          }}
          label="Product Description"
        />
        <Tab
          sx={{
            textTransform: "none",
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: "500",
            color: "var(--low-emphasis)",
            "&:hover": {
              color: "var(--primary)",
              backgroundColor: "var(--inherit)",
            },
            "&.Mui-selected": {
              color: "var(--bright)",
              fontWeight: "500",
              backgroundColor: "var(--primary)",
              borderRadius: "8px",
              fontSize: "16px",
              padding: "6px 18px",
              m: "8px",
            },
          }}
          label="Related Products"
        />
        <Tab
          sx={{
            textTransform: "none",
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: "500",
            color: "var(--low-emphasis)",
            "&:hover": {
              color: "var(--primary)",
              backgroundColor: "var(--inherit)",
            },
            "&.Mui-selected": {
              color: "var(--bright)",
              fontWeight: "500",
              backgroundColor: "var(--primary)",
              borderRadius: "8px",
              fontSize: "16px",
              padding: "6px 18px",
              m: "16px",
            },
          }}
          label="Ratings and Reviews"
        />
      </Tabs>
      <TabPanel value={tabIndex} index={0}>
        <Typography
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
        </Typography>
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        <Typography
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
        </Typography>
      </TabPanel>
      <TabPanel value={tabIndex} index={2}>
        <Typography
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
        </Typography>
      </TabPanel>
    </Stack>
  );
};

export default TabsSection;
