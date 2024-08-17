import { productType } from "@src/types";
import bagImage from "@src/assets/pink-bag-small.png";
import zaraBrand from "@src/assets/Zara_Logo.png";
import upi from "@src/assets/upi.png";
import credit from "@src/assets/credit.png";
import applepay from "@src/assets/applePay.png";
import amazonpay from "@src/assets/amazonpay.png";
import googlepay from "@src/assets/googlepay.png";
import about from "@src/assets/about.png";
import about1 from "@src/assets/about1.png";
import about2 from "@src/assets/about2.png";
import about3 from "@src/assets/about3.png";
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
  //@ts-ignore
  <Link underline="hover" key="1" color="inherit" href="/" onClick={() => {}}>
    MUI
  </Link>,
  <Link
    //@ts-ignore
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

export const paymentMethods = [
  {
    value: "upi",
    label: "UPI",
    icon: upi,
  },
  {
    value: "creditCard",
    label: "Credit/Debit Card",
    icon: credit,
  },
  {
    value: "applePay",
    label: "Apple Pay",
    icon: applepay,
  },
  {
    value: "amazonPay",
    label: "Amazon Pay",
    icon: amazonpay,
  },
];

export const upiOptions = [
  {
    value: "googlePay",
    label: "Google Pay",
    icon: googlepay,
  },
  {
    value: "phonePe",
    label: "Phone Pe",
    icon: googlepay,
  },
  {
    value: "paytm",
    label: "Paytm",
    icon: googlepay,
  },
];

export const mockOrderSummary = [
  {
    id: 1,
    title: "Coach",
    description: "Leather Coach Bag",
    qty: 1,
    imageUrl: bagImage,
  },
  {
    id: 2,
    title: "Coach",
    description: "Leather Coach Bag",
    qty: 1,
    imageUrl: bagImage,
  },
];

export const mockOrderDetails = {
  subTotal: 119.69,
  discount: 13.4,
  deliveryFee: 0.0,
  grandTotal: 106.29,
};

export const mockCartItems = [
  {
    id: 1,
    name: "Leather Coach Bag",
    brand: "Coach",
    price: 54.69,
    qty: 1,
    imageUrl: bagImage,
  },
  {
    id: 2,
    name: "Leather Coach Bag",
    brand: "Coach",
    price: 54.69,
    qty: 1,
    imageUrl: bagImage,
  },
];

export const mockAboutData = [
  {
    id: 1,
    title: "About",
    description:
      "Our mission is to bring you the finest products sourced from the best artisans around the world. Each item is carefully selected for its quality, uniqueness, and sustainability.",
    imageUrl: about,
  },
  {
    id: 2,
    title: "Our Story",
    description:
      "Founded in 2020, we began as a small online shop, quickly growing into a global brand known for our commitment to quality and customer satisfaction. Our journey has been filled with passion, dedication, and a love for craftsmanship.",
    imageUrl: "",
  },
  {
    id: 3,
    title: "Our Products",
    description:
      "From handcrafted bags to state-of-the-art tech gadgets, our products are made to last. We collaborate with top designers to bring you the latest trends in fashion and technology.",
    imageUrl: about1,
  },
  {
    id: 4,
    title: "Sustainability",
    description:
      "We believe in doing business the right way. That’s why we ensure all our products are ethically sourced and environmentally friendly. Our commitment to sustainability is at the heart of everything we do.",
    imageUrl: about2,
  },
  {
    id: 5,
    title: "Community",
    description:
      "Our community is our family. We strive to give back by supporting local charities and participating in community events. Together, we can make a difference.",
    imageUrl: about3,
  },
];

export const mockOrders = [
  {
    id: 1,
    orderId: "#874522648",
    date: "September 5, 2020",
    price: "$218.50",
    status: "Paid"
  },
  {
    id: 2,
    orderId: "#874522648",
    date: "September 5, 2020",
    price: "$218.50",
    status: "Paid"
  }, {
    id: 3,
    orderId: "#874522648",
    date: "September 5, 2020",
    price: "$218.50",
    status: "Paid"
  }, {
    id: 4,
    orderId: "#874522648",
    date: "September 5, 2020",
    price: "$218.50",
    status: "Paid"
  },
];

export const order = [
  {
    id: 1,
    name: "Leather Coach Bag",
    brand: "Coach",
    price: 54.69,
    qty: 1,
    imageUrl: bagImage,
  },
];