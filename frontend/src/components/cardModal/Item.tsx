import { Box, IconButton, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";
import { useLocation } from "react-router-dom";
import useCartContext from "@src/hooks/useCartContext";

export default function Item({ item }) {
  const {decreaseQuantity, increaseQuantity} = useCartContext();

  return (
    <Box key={item.id} display="flex" alignItems="flex-start" mb={2} pb="16px">
      <img
        src={item.imageUrl}
        alt={item.name}
        style={{
          width: "75px",
          height: "80px",
          borderRadius: "8px",
          marginRight: "16px",
        }}
      />
      <Box flexGrow={1}>
        <Stack direction="row" justifyContent="space-between">
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="var(--high-emphasis)"
          >
            Coatch
          </Typography>
          <IconButton size="small" sx={{ ml: 2, color: "var(--low-emphasis)" }}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <Typography variant="subtitle1" color="var(--low-emphasis)">
          {item.name}
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          mt={1}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            display="flex"
            alignItems="center"
            mt={1}
            border={1}
            borderRadius="4px"
            sx={{
              borderColor: "var(--primary)",
            }}
            padding={0}
            width="fit-content"
          >
            <IconButton onClick={() => decreaseQuantity(item.id)}>
              <RemoveIcon
                fontSize="small"
                sx={{
                  color: "var(--primary)",
                }}
              />
            </IconButton>
            <Typography mx={2} color="var(--high-emphasis)">
              {item.qty}
            </Typography>
            <IconButton onClick={() => increaseQuantity(item.id)}>
              <AddIcon
                fontSize="small"
                sx={{
                  color: "var(--primary)",
                }}
              />
            </IconButton>
          </Box>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="var(--high-emphasis)"
          >
            ${item.price.toFixed(2)}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
