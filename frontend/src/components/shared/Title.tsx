import { Button, Stack } from "@mui/material";
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
      <h4 style={{ color: isBright ? "var(--bright)" : "var(--dark)" }}>
        {children}
      </h4>
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
        >
          View All
        </Button>
      )}
    </Stack>
  );
}
