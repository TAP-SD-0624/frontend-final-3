import ImageCarousel from "@components/shared/ImageCarousel";
import Product from "@components/shared/Product";
import Title from "@components/shared/Title";
import { Box, Breadcrumbs, Container, Stack, Typography } from "@mui/material";
import UsePagination from "@components/shared/Pagination";
import { useLocation } from "react-router-dom";
import useSearch from "./hooks/useSearch";


const Search = () => {
    const location = useLocation();
    const searchQuery = location?.state?.query;
    console.log(searchQuery)

    const { searchData } = useSearch(searchQuery || "");
    const data = searchData?.products;

    return (
        <>
            <Container maxWidth="md">
                <Stack gap="8px" mt="24px" mb="24px"
                >
                </Stack>
                <Title>Results</Title>
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
                    {data?.map((product) => (
                        <Product key={product.id} product={product} showDetails />
                    ))
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
                    {data?.map((product) => (
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
                    }
                </ImageCarousel>
            </Box>
        </>
    )
}

export default Search
