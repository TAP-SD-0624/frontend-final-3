import { Box, Stack } from "@mui/material";
import { productType } from "@src/types";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import classes from "./Product.module.css";
interface ProductProps {
  product: productType;
}

export default function Product({ product }: ProductProps) {
  return (
    <Box className={classes.product}>
      <img src={product.img} alt={product.name} />
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <h5>{product.name}</h5>
        <FavoriteBorderOutlinedIcon />
      </Stack>
      <p className={classes.marka}>{product.marka}</p>
      <p className={classes.price}>${product.price}</p>
    </Box>
  );
}
