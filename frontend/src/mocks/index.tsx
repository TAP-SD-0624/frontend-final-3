import { productType } from "@src/types";
import bagImage from "@src/assets/pink-bag-small.png";
import zaraBrand from "@src/assets/Zara_Logo.png";
import chanelBrand from "@src/assets/Chanel_logo_interlocking_cs.png";

export const productsMock: productType[] = [
  {
    img: bagImage,
    name: "Sun Glassesh",
    price: 39.49,
    slug: "grande-blossom-pouch",
    marka: "Grande",
    isFavorite: false,
    rating: 4.5,
  },
  {
    img: bagImage,
    name: "LSun Glasses",
    price: 54.69,
    slug: "leather-coach-bag",
    marka: "Coach",
    isFavorite: true,
    rating: 4.7,
  },
  {
    img: bagImage,
    name: "Sun Glasses",
    price: 57.0,
    slug: "brown-strap-bag",
    marka: "Remus",
    isFavorite: false,
    rating: 4.2,
  },
  {
    img: bagImage,
    name: "Black Bag",
    price: 56.49,
    slug: "black-bag",
    marka: "Boujee",
    isFavorite: true,
    rating: 4.8,
  },
  {
    img: bagImage,
    name: "Fashion Handbag",
    price: 45.99,
    slug: "fashion-handbag",
    marka: "Trendy",
    isFavorite: true,
    rating: "4.6",
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
