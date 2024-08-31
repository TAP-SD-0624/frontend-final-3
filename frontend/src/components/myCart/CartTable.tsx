import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
  Link,
} from "@mui/material";
import { mockCartItems } from "@src/mocks";
import useCartContext from "@src/hooks/useCartContext";

interface CartItemProps {
  id: number;
  name: string;
  brand: string;
  price: number;
  qty: number;
  imageUrl: string;
}

const CartTable = () => {
  const { getCart, removeFromCart } = useCartContext();
  const cart = getCart();

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "var(--low-emphasis)" }}>
              Product Name
            </TableCell>
            <TableCell sx={{ color: "var(--low-emphasis)" }}>Price</TableCell>
            <TableCell sx={{ color: "var(--low-emphasis)" }}>Qty</TableCell>
            <TableCell sx={{ color: "var(--low-emphasis)" }}>
              Subtotal
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((item) => (
            <TableRow key={item.id} sx={{ borderBottom: "none" }}>
              <TableCell sx={{ verticalAlign: "top", borderBottom: "none" }}>
                <Box display="flex" alignItems="flex-start">
                  <img
                    src={item.ProductImages[0]?.path}
                    alt={item.name}
                    style={{
                      width: "75px",
                      height: "80px",
                      borderRadius: "8px",
                      marginRight: "16px",
                    }}
                  />
                  <Box>
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      color="var(--high-emphasis)"
                    >
                      {item.brand}
                    </Typography>
                    <Typography variant="body2" color="var(--low-emphasis)">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="var(--low-emphasis)">
                      Qty- {item.qty}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell sx={{ verticalAlign: "top", borderBottom: "none" }}>
                <Typography fontSize="14px" color="var(--high-emphasis)">
                  ${item?.price}
                </Typography>
              </TableCell>
              <TableCell sx={{ verticalAlign: "top", borderBottom: "none" }}>
                <Typography color="var(--high-emphasis)">{item.qty}</Typography>
              </TableCell>
              <TableCell sx={{ verticalAlign: "top", borderBottom: "none" }}>
                <Typography color="var(--high-emphasis)" fontSize="14px">
                  ${(item.price * item.qty).toFixed(2)}
                </Typography>
                <Link
                  href="#"
                  sx={{
                    color: "var(--error)",
                    cursor: "pointer",
                    display: "block",
                    mt: 1,
                    fontSize: "14px",
                  }}
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CartTable;
