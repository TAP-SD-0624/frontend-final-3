import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  IconButton,
  Button,
  Divider,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { mockCartItems } from "@src/mocks";
import Item from "./Item";
import PriceDetails from "./PriceDetails";
import AppleCode from "./AppleCode";

interface CartModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CartModal({ open, onClose }: CartModalProps) {
  const subtotal = mockCartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const tax = 2.0;
  const total = subtotal + tax;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          position: "absolute",
          top: 16,
          right: 16,
        },
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        p={2}
        sx={{ background: "var(--bright)", px: "32px" }}
      >
        <IconButton onClick={onClose}>
          <ArrowBackIcon
            sx={{
              color: "var(--primary)",
            }}
          />
        </IconButton>
        <Typography variant="h6" sx={{ ml: 2 }} color="var(--primary)">
          Back
        </Typography>
      </Box>
      <DialogContent
        sx={{
          background: "var(--bright)",
          px: "32px",
        }}
      >
        {mockCartItems.map((item) => (
          <>
            <Item item={item} />
            <Divider
              sx={{
                my: "24px",
                background: "var(--divider)",
              }}
            />
          </>
        ))}

        <PriceDetails />
        <AppleCode />

        <Box mt={3} display="flex" justifyContent="center">
          <Button
            variant="contained"
            sx={{
              background: "var(--primary)",
              color: "var(--bright)",
            }}
            size="large"
            fullWidth
          >
            Place Order
          </Button>
        </Box>
        <Box mt={2} textAlign="center">
          <Button
            variant="text"
            sx={{
              color: "var(--primary)",
              textDecoration: "underline",
            }}
          >
            Continue Shopping
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
