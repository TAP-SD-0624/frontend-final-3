import { styled, alpha } from "@mui/material/styles";
import { InputBase } from "@mui/material";

interface SearchProps {
    width: number;
}

export const Search = styled("div")<SearchProps>(({ theme, width }) => ({
    position: "relative",
    backgroundColor: "var(--grey)",
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    display: "flex",
    margin: 0,
    width: `${width}px`,
    padding: theme.spacing(1),
    alignItems: "center",
    justifyContent: "flex-start",
    pointerEvents: "none",
    gap: "8px",
    borderRadius: "4px",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "var(--low-emphasis)",
    width: "100%",
    "& .MuiInputBase-input": {
        fontFamily: "Inter",
        fontSize: "14px",
        fontWeight: 500,
        textAlign: "left",
        transition: theme.transitions.create("width"),
    },
}));
