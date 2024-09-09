import ImageCarousel from "@components/shared/ImageCarousel";
import Product from "@components/shared/Product";
import Title from "@components/shared/Title";
import { Box, Breadcrumbs, Container, Stack, Typography } from "@mui/material";
import { breadcrumbs, productsMock } from "@src/mocks";
import usePagination from "@mui/material/usePagination";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import UsePagination from "@components/shared/Pagination";
import { useLocation, useNavigate } from "react-router-dom";
import useBrand from "@src/screens/hooks/useBrand";
import useLimitedEdition from "@src/screens/hooks/useLimitedEdition";
import useNewArrivals from "@src/screens/hooks/useNewArrivals";
import useCategory from "@src/screens/hooks/useCategory";
import usePopularProducts from "@src/screens/hooks/usePopularProducts";
import usedDiscountedProducts from "@src/screens/hooks/usedDiscountedProducts";
import useHandpickedCollections from "@src/screens/hooks/useHandpickedCollections";

export default function ItemsSection() {
  const location = useLocation();
  const categoryName = location?.state?.categoryName;
  const brandName = location?.state?.brandName;
  const newArrivals = location?.state?.newArrivals;
  const limitedEdition = location?.state?.limitedEdition;
  const discountedProducts = location?.state?.discountedProducts;
  const popularProducts = location?.state?.popularProducts;
  const collectionName = location?.state?.collectionName;
  const index = location?.state?.index;

  const { categoryData } = useCategory(categoryName);
  const { newArrivalsData } = useNewArrivals();
  const { discountedProductsData } = usedDiscountedProducts();
  const { popularProductsData } = usePopularProducts();
  const { brandData } = useBrand(brandName);
  const { limitedEditionData } = useLimitedEdition();
  const { handpickedCollectionsData } = useHandpickedCollections();



  let name = categoryName ? categoryName
    : brandName ? brandName
      : newArrivals ? newArrivals
        : limitedEdition ? limitedEdition
          : discountedProducts ? discountedProducts
            : popularProducts ? popularProducts : collectionName;

  let data = categoryName ? categoryData?.products
    : brandName ? brandData?.products
      : newArrivals ? newArrivalsData?.products
        : limitedEdition ? limitedEditionData?.products
          : discountedProducts ? discountedProductsData?.products
            : popularProducts ? popularProductsData?.products : [];

  if (collectionName) {
    data = handpickedCollectionsData?.categories[index]?.products;
  }

  // Ensure `data` is always an array to avoid issues with rendering
  data = data || [];
  console.log(data.length)
  console.log(data)

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
          {data.length !== 18 ?
            data?.map((product) => (
              <Product key={product.id} product={product} showDetails />
            ))
            : <Typography>
              Sorry, there is no data for this selection!
            </Typography>
          }
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
          {data.length !== 18 ?
            data.slice(0, 4).map((product) => (
              <Product
                key={product.id}
                product={product}
                style={{
                  width: "92%",
                  margin: "0 auto",
                  paddingBottom: "24px",
                  cursor: "pointer"
                }}
                showDetails
              />
            ))
            : null
          }
        </ImageCarousel>
      </Box>
    </>
  );
}
