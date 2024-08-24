import { Typography } from '@mui/material'
import React from 'react'

const Logo = () => {
    return (
        <Typography
            variant="h3"
            noWrap
            component="a"
            href="#"
            sx={{
                color: "var(--logo)",
                width: "108px",
                height: "22px",
                fontFamily: "Inter",
                fontSize: "20px",
                fontWeight: 600,
            }}
        >
            CORA'L
        </Typography>
    )
}

export default Logo
