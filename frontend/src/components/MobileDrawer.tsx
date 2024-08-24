import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { MenuOpen } from '@mui/icons-material';
import { Box, Container, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const drawerWidth = 240;
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function MobileDrawer() {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const arr = ['Personal Information', 'Refer and Earn', 'My Orders', 'My Wishlist', 'My Reviews', 'My Address Book', 'My Saved Cards'];
    const navigate = useNavigate();

    const handleClick = (destination: String) => {
        destination === "Personal Information" ?
            navigate('/user-profile/profile') :
            destination === "My Orders" ? navigate('/user-profile/myOrders') :
                navigate('/user-profile/order');
    }


    return (
        <Box sx={{ display: "flex" }}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ height: "fit-content", mr: 2, ...(open && { display: 'none' }) }}
            >
                <MenuOpen />
            </IconButton>
            <Drawer
                variant="persistent"
                anchor="left"
                sx={{
                    display: open ? "block" : "none",  // Corrected this line
                    width: drawerWidth,
                    flexShrink: 0,
                    height: '100vh', // Occupies the full height of the viewport
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, height: "100%", boxSizing: 'border-box', position: 'relative', backgroundColor: 'var(--grey)', border: "none", borderRadius: "8px" },
                }}
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        <ArrowForwardIcon />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <Container>


                    <Stack overflow="auto">
                        <List>
                            {arr.map((text, index) => (
                                <ListItem sx={{ mb: "28px" }} key={index} disablePadding>
                                    <ListItemButton onClick={() => handleClick(text)}>
                                        <ListItemText
                                            sx={{
                                                fontFamily: "Inter",
                                                fontSize: "16px",
                                                fontWeight: "500",
                                                color: "var(--dark)",
                                            }}
                                            primary={text} />
                                        <ArrowForwardIosIcon sx={{ width: "24px", height: "15px", color: "var(--low-emphasis)" }} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Stack>
                </Container>
            </Drawer>
        </Box>
    );
}