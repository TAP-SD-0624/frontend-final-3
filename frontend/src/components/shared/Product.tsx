import { Box, Rating, Stack } from "@mui/material";
import { productType } from "@src/types";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import classes from "./Product.module.css";
import StarIcon from "@mui/icons-material/Star";
import useCartContext from "@src/hooks/useCartContext";
import { useNavigate } from "react-router-dom";

interface productInfo {
  isLimitedEdition: boolean;
  id: string;
  name: string;
  brief: string;
  description: string;
  price: number;
  stock: number;
  discountRate: number;
  rating: number;
  createdAt: string;
  Category: {
    name: string;
    id: string;
  };
  Brand: {
    name: string;
    id: string;
  };
  ProductImages: [{
    path: string;
  }]
}

interface ProductProps {
  product: productInfo;
  style?: React.CSSProperties;
  showDetails?: boolean;
}

export default function Product({ product, style, showDetails }: ProductProps) {
  const { addToCart } = useCartContext();
  const navigate = useNavigate();
  const handleOnClickProduct = (product) => {
    navigate(`/product?Id= ${product.id} && Name=${product.name}`, { state: { productId: product.id, category: product?.Category?.name, brand: product?.Brand?.name } });
  }
  return (
    <Stack className={classes.product} sx={style} onClick={() => handleOnClickProduct(product)}>
      <img src={product?.ProductImages[0]?.path} alt={product.name} />
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <h5>{product.name}</h5>
        <FavoriteBorderOutlinedIcon />
      </Stack>
      <Stack alignItems="start">
        <p className={classes.marka}>{product?.Brand?.name}</p>
        {showDetails && (
          <Stack direction="row" alignItems="center" gap="16px">
            <Rating
              name="read-only"
              value={product.rating}
              readOnly
              sx={{
                color: "var(--highlight)",
              }}
              emptyIcon={
                <StarIcon sx={{ color: "var(--grey)" }} fontSize="inherit" />
              } // Color for unselected stars
            />
            <p>{product.rating} Ratings</p>
          </Stack>
        )}
        <Stack direction="row" alignItems="center" gap="6px">
          <p className={classes.price}> ${(product?.price - (product?.price * product?.discountRate)).toFixed(2)}
          </p>
          {showDetails && (
            <p className={classes.originalPrice}>${product.price}</p>
          )}
          {showDetails && (
            <p className={classes.discount}>{product.discountRate * 100}% OFF</p>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}
