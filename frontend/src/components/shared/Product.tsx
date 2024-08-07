import { Box, Stack } from "@mui/material";
import { productType } from "@src/types";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import classes from "./Product.module.css";
interface ProductProps {
  product: productType;
  style?: React.CSSProperties;
}

export default function Product({ product, style }: ProductProps) {
  return (
    <Stack className={classes.product} sx={style}>
      <img src={product.img} alt={product.name} />
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <h5>{product.name}</h5>
        <FavoriteBorderOutlinedIcon />
      </Stack>
      <Stack alignItems="start">
        <p className={classes.marka}>{product.marka}</p>
        <p className={classes.price}>${product.price}</p>
      </Stack>
    </Stack>
  );
}
