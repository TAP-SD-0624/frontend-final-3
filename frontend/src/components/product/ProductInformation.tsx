import React from "react";
import {
  Stack,
  Typography,
  Rating,
  Divider,
  IconButton,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import useCartContext from "@src/hooks/useCartContext";
import { CartItem } from "@src/types";
import bagImage from "@src/assets/product-image.png";
import Remove from "@mui/icons-material/Remove";
import Item from "@components/cardModal/Item";
import useLogic from "@components/Navbar/useLogic";

const ProductInformation = () => {
  const initialCart: CartItem =
  {
    id: '5',
    name: "Leather Coach Bag",
    brand: "Desil",
    price: 60.80,
    qty: 1,
    stock: 5,
    imageUrl: bagImage,
  }

  const { isLoggedIn } = useLogic();
  const { addToCart, increaseQuantity, decreaseQuantity, getCart, removeFromCart } = useCartContext();
  const cart = getCart();
  const cartItem = cart.find((item) => item.id === initialCart.id);
  console.log(cartItem);

  return (
    <Stack
      spacing={2}
      sx={{
        width: {
          xs: "100%",
          sm: "50%",
        },
      }}
    >
      <Typography
        sx={{
          fontFamily: "Inter",
          fontWeight: "600",
          color: "var(--q-black)",
          fontSize: {
            xs: "20px",
            sm: "26px",
            md: "30px",
            lg: "34px",
          },
        }}
      >
        Coach{" "}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Inter",
          fontWeight: "600",
          color: "var(--low-emphasis)",
          transform: "translateY(-15px)",
          fontSize: {
            sm: "13px",
            md: "17px",
            lg: "20px",
          },
        }}
      >
        Leather Coach Bag with adjustable straps.
      </Typography>
      <Stack direction="row" gap="14px">
        <Rating
          name="rating-controlled"
          value={2}
          readOnly
          sx={{ gap: "8px", color: "var(--stars)" }}
        />
        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: "400",
            color: "var(--light-text)",
          }}
        >
          (250) Ratings
        </Typography>
      </Stack>
      <Stack direction="row" gap="16px" alignItems="center">
        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: {
              xs: "25px",
              sm: "30px",
              md: "35px",
              lg: "40px",
            },
            fontWeight: "700",
            color: "var(--high-emphasis)",
          }}
        >
          $54.69
        </Typography>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: {
              xs: "16px",
              sm: "21px",
              md: "28px",
              lg: "34px",
            },
            fontWeight: "600",
            color: "var(--light-text)",
            textDecoration: "line-through",
          }}
        >
          $78.66
        </Typography>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: {
              xs: "11px",
              sm: "14px",
              md: "17px",
              lg: "20px",
            },
            fontWeight: "600",
            color: "var(--vibrant)",
          }}
        >
          50% OFF
        </Typography>
      </Stack>
      <Divider />
      <Stack direction="row" alignItems="center" gap="16px">
        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: "20px",
            fontWeight: "600",
            color: "var(--q-black)",
          }}
        >
          Quantity:
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          gap="16px"
          sx={{
            borderRadius: "4px",
            border: "1px solid var(--primary)",
          }}
        >
          <IconButton
            disabled={!isLoggedIn}
            onClick={() => decreaseQuantity(initialCart.id)}
            sx={{
              width: "24px",
              height: "24px",
            }}
          >
            <RemoveIcon
              sx={{
                color: "var(--high-emphasis)",
              }}
            />
          </IconButton>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: "400",
              color: "var(--q-black)",
            }}
          >
            {cartItem && isLoggedIn ? cartItem?.qty : 1}
          </Typography>
          <IconButton
            disabled={!isLoggedIn}
            onClick={() => increaseQuantity(initialCart.id)}
            sx={{
              width: "24px",
              height: "24px",
            }}
          >
            <AddIcon
              sx={{
                color: "var(--high-emphasis)",
              }}
            />
          </IconButton>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        width="100%"
        justifyContent="space-between"
        gap="24px"
      >
        <Button
          disabled={initialCart.stock === 0 || !isLoggedIn}
          onClick={!cartItem ? () => addToCart(initialCart) : () => removeFromCart(initialCart.id)}
          variant="contained"
          sx={{
            backgroundColor: cartItem ? "var(--error)" : "var(--primary)",
            color: "var(--bright)",
            gap: "8px",
            flex: "1",
            display: "flex",
            alignItems: "center",
            '&:hover': {
              backgroundColor: cartItem ? "var(--error)" : "var(--primary)",
            },
          }}
        >
          {cartItem ? <Remove sx={{
            width: "24px",
            height: "24px",
          }} /> : <WorkOutlineIcon
            sx={{
              width: "24px",
              height: "24px",
            }}
          />}

          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: "600",
              textTransform: "none",
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            {cartItem ? "Remove from bag" : "Add to bag"}
          </Typography>
        </Button>

        <Button
          disabled={!isLoggedIn}
          variant="outlined"
          sx={{
            backgroundColor: "var(--bright)",
            color: "var(--primary)",
            gap: "8px",
            fontFamily: "Inter",
            fontSize: "14px",
            fontWeight: "600",
            textTransform: "none",
            border: "1px solid var(--primary)",
            width: {
              xs: "100px",
              sm: "160px",
              md: "200px",
              lg: "240px",
            },
            flex: {
              xs: 1,
              sm: "none",
            },
          }}
        >
          <FavoriteBorderIcon
            sx={{
              width: "24px",
              height: "24px",
            }}
          />
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: "600",
              textTransform: "none",
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            Add To Wishlist
          </Typography>
        </Button>
      </Stack>
    </Stack>
  );
};

export default ProductInformation;
