import { Tooltip, IconButton } from '@mui/material'
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import React, { FC } from 'react'

interface SettingsProps {
    open: boolean;
    onClick: (event: {
        currentTarget: React.SetStateAction<HTMLElement | null>;
    }) => void;
}

const Settings: FC<SettingsProps> = ({ open, onClick }) => {
    return (
        <Tooltip title="Account settings">
            <IconButton
                onClick={onClick}
                size="small"
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                sx={{
                    width: "24px",
                    height: "24px",
                }}
            >
                <PermIdentityIcon
                    sx={{
                        color: "var(--icon)",
                    }}
                />
            </IconButton>
        </Tooltip>
    )
}

export default Settings
