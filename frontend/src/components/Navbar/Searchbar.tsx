import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Search, StyledInputBase } from "@components/Search";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
    const [searchTerm, setSearchTerm] = useState<string>(""); // State to store user input
    const navigate = useNavigate();

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value); // Update search term
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            navigate(`./search?query = ${searchTerm}`, { state: { query: searchTerm } });
        }
    };

    return (
        <Search width={362}>
            <SearchIcon
                sx={{ height: "24px", width: "24px", color: "var(--dark)" }}
            />
            <StyledInputBase
                placeholder="Search for products and brands....."
                inputProps={{ "aria-label": "search" }}
                value={searchTerm}
                onChange={handleSearchInputChange}
                onKeyDown={handleKeyDown}
            />
        </Search>
    );
};

export default Searchbar;
