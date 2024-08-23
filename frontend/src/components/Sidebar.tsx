import React from 'react'
import { Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Stack, Theme, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const drawerWidth = 286;

const Sidebar = () => {
  const arr = ['Personal Information', 'Refer and Earn', 'My Orders', 'My Wishlist', 'My Reviews', 'My Address Book', 'My Saved Cards'];
  const navigate = useNavigate();

  const handleClick = (destination: String) => {
    destination === "Personal Information" ?
      navigate('/user-profile/profile') :
      destination === "My Orders" ? navigate('/user-profile/myOrders') :
        navigate('/user-profile/order');
  }


  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        height: '100vh', // Occupies the full height of the viewport
        [`& .MuiDrawer-paper`]: { width: drawerWidth, height: "100%", boxSizing: 'border-box', position: 'relative', backgroundColor: 'var(--grey)', border: "none", borderRadius: "8px" },
      }}
    >
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
  )
}

export default Sidebar
