import React from "react";
import { Divider, Typography } from "@mui/material";
import TabsSection from "@components/TabsSection";
import { useLocation } from "react-router-dom";
import useProduct from "@src/screens/hooks/useProduct";
import useCategory from "@src/screens/hooks/useCategory";
import useBrand from "@src/screens/hooks/useBrand";
import useReviews from "@src/screens/hooks/useReviews";

const TabsPart = () => {
  const location = useLocation();
  const productId = location?.state?.productId;
  const { productData } = useProduct(productId);


    // const {reviewsData} = useReviews(productId);


  const data = productData?.product;
  const category = productData?.product?.Category?.name
  const brand = productData?.product?.Brand?.name
  console.log(category);
  console.log(brand);
  const { categoryData } = useCategory(category || '');
  const { brandData } = useBrand(brand || '');

  let categories = categoryData?.products?.map(product => product.name);
  let brands = brandData?.products?.map(product => product.name);
  categories = categories || [];
  brands = brands || [];

  const orderTabs = ["Product Description", "Related Products", "Ratings and Reviews"];
  const orderTabPanels = [<Typography
    sx={{
      textTransform: "none",
      fontFamily: "Inter",
      fontSize: "16px",
      fontWeight: "500",
      color: "var(--low-emphasis)",
      whiteSpace: "pre-line",
      lineHeight: 1.5,
    }}
  >
    {data?.description}
  </Typography>, <><Typography
    sx={{
      textTransform: "none",
      fontFamily: "Inter",
      fontSize: "16px",
      fontWeight: "500",
      color: "var(--low-emphasis)",
      whiteSpace: "pre-line",
      lineHeight: 1.5,
    }}
  >
    Form same brand '{brand}' :
  </Typography>
    <ul>
      {brands.length > 0 ?
        brands?.map((name, index) => (
          <li key={index}>{name}</li>
        ))
        : <Typography>
          Sorry, there is no data for the same brand!
        </Typography>
      }
    </ul>
    <br /> <Typography
      sx={{
        textTransform: "none",
        fontFamily: "Inter",
        fontSize: "16px",
        fontWeight: "500",
        color: "var(--low-emphasis)",
        whiteSpace: "pre-line",
        lineHeight: 1.5,
      }}
    >
      Form same catagory {category} :
    </Typography>
    <ul>

      {categories.length > 0 ?
        categories?.map((name, index) => (
          <li key={index}>{name}</li>
        )) :
        <Typography>
          Sorry, there is no data for the same category!

        </Typography>
      }
    </ul>
  </>
    , <Typography
      sx={{
        textTransform: "none",
        fontFamily: "Inter",
        fontSize: "16px",
        fontWeight: "500",
        color: "var(--low-emphasis)",
        whiteSpace: "pre-line",
        lineHeight: 1.5,
      }}
    >
    Ratings and Reviews content goes here.
  </Typography>];
  return (
    <TabsSection tab={orderTabs} tabPanel={orderTabPanels} />
  );
};

export default TabsPart;
