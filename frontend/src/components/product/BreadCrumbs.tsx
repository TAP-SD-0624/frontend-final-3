import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Container } from "@mui/material";

const BreadCrumbs = () => {
  const breadcrumbs = [
    <Typography
      component="a"
      href="/"
      sx={{
        color: "var(--primary)",
        fontFamily: "Inter",
        fontSize: "16px",
        fontWeight: 500,
      }}
    >
      Home
    </Typography>,

    <Typography
      component="a"
      href="/"
      sx={{
        color: "var(--primary)",
        fontFamily: "Inter",
        fontSize: "16px",
        fontWeight: 500,
      }}
    >
      Handbag
    </Typography>,
    <Typography
      component="a"
      href="/"
      sx={{
        color: "var(--low-emphasis)",
        fontFamily: "Inter",
        fontSize: "16px",
        fontWeight: 500,
      }}
    >
      Label
    </Typography>,
  ];

  return (
    <Container>
      <Stack gap="8px">
        <Breadcrumbs
          separator={
            <NavigateNextIcon
              sx={{
                width: "24px",
                height: "24px",
                color: "var(--high-emphasis)",
              }}
              fontSize="small"
            />
          }
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
    </Container>
  );
};

export default BreadCrumbs;
