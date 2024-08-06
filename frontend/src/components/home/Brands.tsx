import Title from "@components/shared/Title";
import { Box, Container } from "@mui/material";
import { brandsMock } from "@src/mocks";
import classes from "./Brands.module.css";

export default function Brands() {
  return (
    <Container className={classes.brands}>
      <Title>Shop by Brands</Title>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(168px, 1fr))",
          gap: 3,
        }}
      >
        {brandsMock.slice(0, 6).map((product) => (
          <Box key={product.name} className={classes.item}>
            <img src={product.img} alt={product.name} />
          </Box>
        ))}
      </Box>
    </Container>
  );
}
