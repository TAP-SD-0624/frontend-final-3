import { Stack, Typography } from '@mui/material'
import useCategories from '@src/screens/hooks/useCategories';
import React from 'react'
import { useNavigate } from 'react-router-dom';

interface category {
    id: string;
    name: string;
    description: string;
    imagePath: string;
}

const Categories = () => {
    const navItems = ["Handbags", "Watches", "Skincare", "Jewellery", "Apparels"];
    const { categoriesData } = useCategories();
    const data = categoriesData?.categories;
    const navigate = useNavigate();
    const handleOnClickCategory = (category: category) => {
        navigate(`/items?category= ${category.name}`, { state: { categoryName: category.name } });
    }

    return (
        <Stack
            direction="row"
            sx={{
                gap: "20px",
                alignItems: "baseline",
            }}
        >
            {data?.slice(0, 6).map((item, index) => (
                <Typography
                    onClick={() => handleOnClickCategory(item)}
                    key={index}
                    noWrap
                    sx={{
                        display: { xs: "none", md: "flex" },
                        color: "var(--high-emphasis)",
                        fontFamily: "Inter",
                        fontSize: "14px",
                        fontWeight: 500,
                        cursor: "pointer",
                    }}
                >
                    {item.name}
                </Typography>
            ))}
        </Stack>
    )
}

export default Categories
