import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import classes from "./Title.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface TitleProps {
  isBright?: boolean;
  viewAll?: boolean;
  children: React.ReactNode;
}

export default function Title({ viewAll, isBright, children }: TitleProps) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      className={classes.title}
    >
      <Typography
        variant="h4"
        style={{ color: isBright ? "var(--bright)" : "var(--dark)" }}
        sx={{
          fontSize: {
            xs: "18px",
            sm: "24px",
            md: "28px",
            lg: "34px",
          },
        }}
      >
        {children}
      </Typography>
      {viewAll && (
        <Button
          endIcon={
            <ArrowForwardIosIcon
              sx={{
                color: "var(--dark)",
              }}
            />
          }
          className={classes.button}
          sx={{
            fontSize: {
              xs: "12px",
              sm: "14px",
            },
          }}
        >
          View All
        </Button>
      )}
    </Stack>
  );
}
