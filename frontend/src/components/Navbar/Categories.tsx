import { Stack, Typography } from '@mui/material'
import React from 'react'

const Categories = () => {
    const navItems = ["Handbags", "Watches", "Skincare", "Jewellery", "Apparels"];

    return (
        <Stack
            direction="row"
            sx={{
                gap: "20px",
                alignItems: "baseline",
            }}
        >
            {navItems.map((item, index) => (
                <Typography
                    key={index}
                    noWrap
                    component="a"
                    href="#"
                    sx={{
                        display: { xs: "none", md: "flex" },
                        color: "var(--high-emphasis)",
                        fontFamily: "Inter",
                        fontSize: "14px",
                        fontWeight: 500,
                    }}
                >
                    {item}
                </Typography>
            ))}
        </Stack>
    )
}

export default Categories
