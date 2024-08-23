import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import { Search, StyledInputBase } from "@components/Search";

const Searchbar = () => {
    return (
        <Search width={362}>
            <SearchIcon
                sx={{ height: "24px", width: "24px", color: "var(--dark)" }}
            />
            <StyledInputBase
                placeholder="Search for products and brands....."
                inputProps={{ "aria-label": "search" }}
            />
        </Search>
    )
}

export default Searchbar
