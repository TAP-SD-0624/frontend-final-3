import { Box, Rating, Stack } from "@mui/material";
import { productType } from "@src/types";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import classes from "./Product.module.css";
interface ProductProps {
  product: productType;
  style?: React.CSSProperties;
  showDetails?: boolean;
  onClick?: () => void;
}

export default function Product({ product, style, showDetails, onClick = () => {} }: ProductProps) {
  return (
    <Stack className={classes.product} sx={style} onClick={onClick}>
      <img src={product.img} alt={product.name} />
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <h5>{product.name}</h5>
        <FavoriteBorderOutlinedIcon />
      </Stack>
      <Stack alignItems="start">
        <p className={classes.marka}>{product.marka}</p>
        {showDetails && (
          <Stack direction="row" alignItems="center" gap="16px">
            <Rating
              name="read-only"
              value={product.rating}
              readOnly
              sx={{
                color: "var(--highlight)",
              }}
            />
            <p>{product.numReviews} Ratings</p>
          </Stack>
        )}
        <Stack direction="row" alignItems="center" gap="6px">
          <p className={classes.price}>${product.price}</p>
          {showDetails && (
            <p className={classes.originalPrice}>${product.originalPrice}</p>
          )}
          {showDetails && (
            <p className={classes.discount}>{product.discount}% OFF</p>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}
