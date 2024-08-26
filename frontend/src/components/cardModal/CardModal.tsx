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
import useCartContext from "@src/hooks/useCartContext";

interface CartModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CartModal({ open, onClose }: CartModalProps) {
  const { getCart } = useCartContext();
  const cart = getCart();

  const isEmptyToken = (token: string | null): boolean => {
    return !token || token === "";
  }
  const accessToken = localStorage.getItem("user-token");
  const isLoggedIn = !isEmptyToken(accessToken);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const tax = 2.0;
  const total = subtotal + tax;

  return (
    <>
      {isLoggedIn && (
        <Dialog
          open={open}
          onClose={onClose}
          maxWidth="xs"
          fullWidth
          PaperProps={{
            sx: {
              position: { xs: "relative", sm: "absolute" },
              top: { xs: 0, sm: 16 },
              right: { xs: 0, sm: 16 },
              margin: { xs: 0, sm: 8 },
              width: { xs: "100%", sm: "460px" },
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
            {cart.map((item) => (
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
      )}
    </>
  );
}
