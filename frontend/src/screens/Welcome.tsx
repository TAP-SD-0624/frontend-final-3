import { Typography } from '@mui/material'
import React from 'react'

const Welcome = () => {
    return (
        <><Typography
            variant="subtitle1"
            sx={{ fontWeight: 500, fontSize: "1rem", color: "var(--gray)" }}
        >
            Welcome
        </Typography><Typography variant="h2" sx={{ fontWeight: 500, fontSize: "2.5rem" }}>
                user
            </Typography></>
    )
}

export default Welcome
