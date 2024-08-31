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
import Item from "./Item";
import PriceDetails from "./PriceDetails";
import AppleCode from "./AppleCode";
import useCartContext from "@src/hooks/useCartContext";
import { useNavigate } from "react-router-dom";

interface CartModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CartModal({ open, onClose }: CartModalProps) {
  const { getCart } = useCartContext();
  const cart = getCart();
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/checkout");
  }

  return (
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
          maxHeight: "85vh",
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
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <Box sx={{ flex: 1, overflowY: "scroll" }}>
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
        </Box>
        <Box>
          <PriceDetails />
          <AppleCode />

          <Box mt={3} display="flex" justifyContent="center">
            <Button
              onClick={handleOnClick}
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
              onClick={() => navigate("/home")}
              variant="text"
              sx={{
                color: "var(--primary)",
                textDecoration: "underline",
              }}
            >
              Continue Shopping
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
