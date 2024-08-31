import Title from "@components/shared/Title";
import { Box, Container } from "@mui/material";
import { productsMock } from "@src/mocks";
import classes from "./Handpicked.module.css";
import ImageCarousel from "@components/shared/ImageCarousel";
import { productType } from "@src/types";
import { useNavigate } from "react-router-dom";
import useHandpickedCollections from "@src/screens/hooks/useHandpickedCollections";
import useCategories from "@src/screens/hooks/useCategories";

export default function Handpicked() {
  const navigate = useNavigate();
  const handleOnClickCategory = (category, index) => {
    navigate(`/items?category= ${category.name}`, { state: { collectionName: category.name, index: index } });
  }
  const { handpickedCollectionsData } = useHandpickedCollections()
  const { categoriesData } = useCategories();
  const data = categoriesData?.categories;

  const handpickedCollections = handpickedCollectionsData?.categories?.map(category => ({
    id: category.id,
    name: category.name,
    imagePath: category.imagePath,
  }));

  return (
    <Box className={classes.handpicked}>
      <Container>
        <Title isBright>Handpicked Collections</Title>
        <Box
          sx={{
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 3,
            display: {
              xs: "none",
              sm: "grid",
            },
          }}
        >
          {handpickedCollections?.map((product, index) => (
            <Box key={product.id} className={classes.item} onClick={() => handleOnClickCategory(product, index)}>
              <img src={product.imagePath} alt={product.name} />
              <p>{product.name}</p>
            </Box>
          ))}
        </Box>
      </Container>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
        }}
      >
        <ImageCarousel>
          {data?.map((product,index) => (
            <Box
              onClick={() => handleOnClickCategory(product,index)}
              key={product.id}
              className={classes.item}
              sx={{
                width: "92%",
                margin: "0 auto",
                marginBottom: "40px",
              }}
            >
              <img src={product.imagePath} alt={product.name} />
              <p>{product.name}</p>
            </Box>
          ))}
        </ImageCarousel>
      </Box>
    </Box>
  );
}
