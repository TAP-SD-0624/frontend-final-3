import * as React from "react";
import usePagination from "@mui/material/usePagination";
import { styled } from "@mui/material/styles";

const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  display: "flex",
  alignItems: "center",
  marginTop: "65px",
});

const PaginationButton = styled("button")({
  border: "none",
  padding: "8px 12px",
  cursor: "pointer",
  fontSize: "14px",
  backgroundColor: "#f1f1f1", // Same background for all numbers
  color: "#000",
  "&:hover": {
    backgroundColor: "#e0e0e0", // Slight change on hover
  },
  "&.active": {
    backgroundColor: "#1a2a3b", // Active button background
    color: "#fff", // Active button text color
    fontWeight: "bold",
  },
});

const NextButton = styled(PaginationButton)({
  margin: "0 8px",
});

export default function UsePagination() {
  const { items } = usePagination({
    count: 5,
  });

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "…";
          } else if (type === "page") {
            children = (
              <PaginationButton
                type="button"
                className={selected ? "active" : ""}
                {...item}
              >
                {page}
              </PaginationButton>
            );
          } else if (type === "previous" && page > 0) {
            children = (
              <NextButton type="button" {...item}>
                Previous
              </NextButton>
            );
          } else if (type === "next") {
            children = (
              <NextButton type="button" {...item}>
                Next
              </NextButton>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </List>
    </nav>
  );
}
