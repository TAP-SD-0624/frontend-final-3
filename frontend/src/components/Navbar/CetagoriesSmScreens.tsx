import { Tooltip, IconButton } from '@mui/material'
import React, { FC } from 'react'
import ReorderIcon from "@mui/icons-material/Reorder";

interface CetagoriesSmScreensProps {
    onClick: (event: {
        currentTarget: React.SetStateAction<HTMLElement | null>;
    }) => void;
    openCetagories: boolean;
}

const CetagoriesSmScreens: FC<CetagoriesSmScreensProps> = ({ onClick, openCetagories }) => {
    return (
        <Tooltip title="Cetagories">
            <IconButton
                onClick={onClick}
                size="small"
                aria-controls={
                    openCetagories ? "cetagories-menu" : undefined
                }
                aria-haspopup="true"
                aria-expanded={openCetagories ? "true" : undefined}
                sx={{
                    width: "24px",
                    height: "24px",
                }}
            >
                <ReorderIcon
                    sx={{
                        color: "var(--icon)",
                    }}
                />
            </IconButton>
        </Tooltip>
    )
}

export default CetagoriesSmScreens
