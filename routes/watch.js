const express = require("express");
const router = express.Router();

const watchData = [
  {
    _id: 2001,
    title: "Samsung galaxy 5",
    price: 500,
    previousPrice: 620,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "watch",
    image: "https://i.ibb.co/pZHdhK1/samsunggalaxy5.jpg",
    isNew: true,
    brand: "Samsung",
  },
  {
    _id: 2002,
    title: "Apple watch ultra",
    price: 850.99,
    previousPrice: 980.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "watch",
    image: "https://i.ibb.co/k2GT5xP/apple-watch-ultra-1.jpg",
    isNew: true,
    brand: "Apple",
  },
  {
    _id: 2003,
    title: "Coros Apex Premium",
    price: 450,
    previousPrice: 480,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "watch",
    image: "https://i.ibb.co/LJJc7Vn/coros-apex-premium-multisport-1.jpg",
    isNew: true,
    brand: "Coros-apex",
  },
  {
    _id: 2004,
    title: "Apple Watch SE",
    price: 999.99,
    previousPrice: 1050,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "watch",
    image: "https://i.ibb.co/Pjff2JW/apple-watch-se-1.jpg",
    isNew: true,
    brand: "Apple",
  },
  {
    _id: 2005,
    title: "Apple watch 8",
    price: 850,
    previousPrice: 860,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "watch",
    image: "https://i.ibb.co/4874bqD/apple-watch-series-8-1.jpg",
    isNew: true,
    brand: "Apple",
  },
  {
    _id: 2006,
    title: "Apple watch 7",
    price: 780,
    previousPrice: 800,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "watch",
    image: "https://i.ibb.co/vmctpHt/apple-watch-series-7-1.jpg",
    isNew: true,
    brand: "Apple",
  },
  {
    _id: 2007,
    title: "Fossil Gen 6",
    price: 950,
    previousPrice: 780,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "watch",
    image: "https://i.ibb.co/yFPfT6G/fossil-gen-6-1.jpg",
    isNew: true,
    brand: "Fossil",
  },
  {
    _id: 2008,
    title: "Fossil Gen 6 Leather",
    price: 1100,
    previousPrice: 1150.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "watch",
    image: "https://i.ibb.co/G7z0gxF/fossil-gen-6-leather-1.jpg",
    isNew: true,
    brand: "Fossil",
  },
  {
    _id: 2009,
    title: "Google Fitbit",
    price: 650.5,
    previousPrice: 690,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "watch",
    image: "https://i.ibb.co/0V9qQwQ/google-fitbit-sense-2-1.jpg",
    isNew: true,
    brand: "Google",
  },
  {
    _id: 2010,
    title: "Huawei 7",
    price: 780,
    previousPrice: 800,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "watch",
    image: "https://i.ibb.co/z5b76Lf/huawei-band-7-1.jpg",
    isNew: true,
    brand: "Huawei",
  },
  {
    _id: 2011,
    title: "Google Fitbit",
    price: 650.5,
    previousPrice: 690,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "watch",
    image: "https://i.ibb.co/0V9qQwQ/google-fitbit-sense-2-1.jpg",
    isNew: true,
    brand: "Google",
  },
];
router.get("/watch", (req, res) => {
  res.send(watchData);
});

module.exports = router;
