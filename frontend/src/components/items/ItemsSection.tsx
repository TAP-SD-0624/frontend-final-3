import ImageCarousel from "@components/shared/ImageCarousel";
import Product from "@components/shared/Product";
import Title from "@components/shared/Title";
import { Box, Breadcrumbs, Container, Stack, Typography } from "@mui/material";
import { breadcrumbs, productsMock } from "@src/mocks";
import usePagination from "@mui/material/usePagination";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import UsePagination from "@components/shared/Pagination";
import { useLocation } from "react-router-dom";

export default function ItemsSection() {
  const location = useLocation();
  const categoryName = location?.state?.categoryName;
  const brandName = location?.state?.brandName;

  let name = categoryName ? categoryName : brandName;

  return (
    <>
      <Container maxWidth="md">
        <Stack gap="8px" mt="24px" mb="24px"
        >
          <Breadcrumbs
            separator={
              <NavigateNextIcon
                sx={{
                  width: "24px",
                  height: "24px",
                  color: "var(--high-emphasis)",
                }}
                fontSize="small"
              />
            }
            aria-label="breadcrumb"
          >
            <Typography sx={{
              color: "var(--primary)",
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: 500,
            }} >Home</Typography>
            <Typography sx={{
              color: "var(--primary)",
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: 500,
            }} >{name}</Typography>
          </Breadcrumbs>
        </Stack>
        <Title>{name}</Title>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "grid",
            },
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 3,
          }}
        >
          {productsMock.map((product) => (
            <Product key={product.slug} product={product} showDetails />
          ))}
        </Box>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "grid",
            },
          }}
        >
          <UsePagination />
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
          {productsMock.slice(0, 4).map((product) => (
            <Product
              key={product.slug}
              product={product}
              style={{
                width: "92%",
                margin: "0 auto",
                paddingBottom: "24px",
              }}
              showDetails
            />
          ))}
        </ImageCarousel>
      </Box>
    </>
  );
}
