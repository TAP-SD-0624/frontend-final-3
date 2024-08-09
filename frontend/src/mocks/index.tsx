import { productType } from "@src/types";
import bagImage from "@src/assets/pink-bag-small.png";
import zaraBrand from "@src/assets/Zara_Logo.png";
import chanelBrand from "@src/assets/Chanel_logo_interlocking_cs.png";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

export const productsMock: productType[] = [
  {
    img: bagImage,
    name: "Sun Glasses",
    price: 39.49,
    slug: "sun-glasses",
    marka: "Grande",
    isFavorite: false,
    rating: 4.5,
    numReviews: 10,
    originalPrice: 49.99,
    discount: 20,
  },
  {
    img: bagImage,
    name: "Grande Blossom Pouch",
    price: 25.0,
    slug: "grande-blossom-pouch-1",
    marka: "Grande",
    isFavorite: true,
    rating: 4.0,
    numReviews: 5,
    originalPrice: 30.0,
    discount: 15,
  },
  {
    img: bagImage,
    name: "Grande Blossom Pouch",
    price: 25.0,
    slug: "grande-blossom-pouch-2",
    marka: "Grande",
    isFavorite: true,
    rating: 4.0,
    numReviews: 5,
    originalPrice: 30.0,
    discount: 15,
  },
  {
    img: bagImage,
    name: "Grande Blossom Pouch",
    price: 25.0,
    slug: "grande-blossom-pouch-3",
    marka: "Grande",
    isFavorite: true,
    rating: 4.0,
    numReviews: 5,
    originalPrice: 30.0,
    discount: 15,
  },
  {
    img: bagImage,
    name: "Grande Blossom Pouch",
    price: 25.0,
    slug: "grande-blossom-pouch-4",
    marka: "Grande",
    isFavorite: true,
    rating: 4.0,
    numReviews: 5,
    originalPrice: 30.0,
    discount: 15,
  },
  {
    img: bagImage,
    name: "Grande Blossom Pouch",
    price: 25.0,
    slug: "grande-blossom-pouch-5",
    marka: "Grande",
    isFavorite: true,
    rating: 4.0,
    numReviews: 5,
    originalPrice: 30.0,
    discount: 15,
  },
  {
    img: bagImage,
    name: "Grande Blossom Pouch",
    price: 25.0,
    slug: "grande-blossom-pouch-6",
    marka: "Grande",
    isFavorite: true,
    rating: 4.0,
    numReviews: 5,
    originalPrice: 30.0,
    discount: 15,
  },
  {
    img: bagImage,
    name: "Grande Blossom Pouch",
    price: 25.0,
    slug: "grande-blossom-pouch-7",
    marka: "Grande",
    isFavorite: true,
    rating: 4.0,
    numReviews: 5,
    originalPrice: 30.0,
    discount: 15,
  },
  {
    img: bagImage,
    name: "Grande Blossom Pouch",
    price: 25.0,
    slug: "grande-blossom-pouch-8",
    marka: "Grande",
    isFavorite: true,
    rating: 4.0,
    numReviews: 5,
    originalPrice: 30.0,
    discount: 15,
  },
  {
    img: bagImage,
    name: "Grande Blossom Pouch",
    price: 25.0,
    slug: "grande-blossom-pouch-9",
    marka: "Grande",
    isFavorite: true,
    rating: 4.0,
    numReviews: 5,
    originalPrice: 30.0,
    discount: 15,
  },
  {
    img: bagImage,
    name: "Grande Blossom Pouch",
    price: 25.0,
    slug: "grande-blossom-pouch-10",
    marka: "Grande",
    isFavorite: true,
    rating: 4.0,
    numReviews: 5,
    originalPrice: 30.0,
    discount: 15,
  },
  {
    img: bagImage,
    name: "Grande Blossom Pouch",
    price: 25.0,
    slug: "grande-blossom-pouch-11",
    marka: "Grande",
    isFavorite: true,
    rating: 4.0,
    numReviews: 5,
    originalPrice: 30.0,
    discount: 15,
  },
  {
    img: bagImage,
    name: "Grande Blossom Pouch",
    price: 25.0,
    slug: "grande-blossom-pouch-12",
    marka: "Grande",
    isFavorite: true,
    rating: 4.0,
    numReviews: 5,
    originalPrice: 30.0,
    discount: 15,
  },
  {
    img: bagImage,
    name: "Grande Blossom Pouch",
    price: 25.0,
    slug: "grande-blossom-pouch-13",
    marka: "Grande",
    isFavorite: true,
    rating: 4.0,
    numReviews: 5,
    originalPrice: 30.0,
    discount: 15,
  },
  {
    img: bagImage,
    name: "Grande Blossom Pouch",
    price: 25.0,
    slug: "grande-blossom-pouch-14",
    marka: "Grande",
    isFavorite: true,
    rating: 4.0,
    numReviews: 5,
    originalPrice: 30.0,
    discount: 15,
  },
];

export const brandsMock = [
  {
    name: "Grande",
    img: zaraBrand,
  },
  {
    name: "Coach",
    img: zaraBrand,
  },
  {
    name: "Remus",
    img: zaraBrand,
  },
  {
    name: "Boujee",
    img: chanelBrand,
  },
  {
    name: "Trendy",
    img: chanelBrand,
  },
  {
    name: "Trendy",
    img: chanelBrand,
  },
  {
    name: "Trendy",
    img: chanelBrand,
  },
];

export const breadcrumbs = [
  <Link underline="hover" key="1" color="inherit" href="/" onClick={() => {}}>
    MUI
  </Link>,
  <Link
    underline="hover"
    key="2"
    color="inherit"
    href="/material-ui/getting-started/installation/"
    onClick={() => {}}
  >
    Core
  </Link>,
  <Typography key="3" color="text.primary">
    Breadcrumb
  </Typography>,
];
