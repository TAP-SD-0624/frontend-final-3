import ImageCarousel from "@components/shared/ImageCarousel";
import Product from "@components/shared/Product";
import Title from "@components/shared/Title";
import { Box, Breadcrumbs, Container, Typography } from "@mui/material";
import { breadcrumbs, productsMock } from "@src/mocks";
import usePagination from "@mui/material/usePagination";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import UsePagination from "@components/shared/Pagination";

export default function ItemsSection() {
  return (
    <>
      <Container maxWidth="md">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          sx={{
            marginBottom: "24px",
            marginTop: "44px",
          }}
        >
          {breadcrumbs}
        </Breadcrumbs>
        <Title>New Arrivals</Title>
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
