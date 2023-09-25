const expess = require("express");
const router = expess.Router();

const phoneData = [
  {
    _id: 1001,
    title: "iphone 15",
    price: 1500.99,
    previousPrice: 1600.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone",
    image: "https://i.ibb.co/p3s01cP/iphone15.jpg",
    isNew: true,
    brand: "Apple",
  },
  {
    _id: 1002,
    title: "iphone 14",
    price: 1150.99,
    previousPrice: 1240.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone",
    image: "https://i.ibb.co/HD4JCrk/iphone2.jpg",
    isNew: true,
    brand: "Apple",
  },
  {
    _id: 1003,
    title: "iphone New",
    price: 1100,
    previousPrice: 1200,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone",
    image: "https://i.ibb.co/51LfwZ3/iphone3.jpg",
    isNew: true,
    brand: "Apple",
  },
  {
    _id: 1004,
    title: "iphone 15 pro",
    price: 1800.5,
    previousPrice: 1900.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone",
    image: "https://i.ibb.co/F4VHfPJ/iphone4.jpg",
    isNew: true,
    brand: "Apple",
  },
  {
    _id: 1005,
    title: "iphone SE",
    price: 1725.99,
    previousPrice: 1785.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone",
    image: "https://i.ibb.co/hCqWjvQ/iphone5.jpg",
    isNew: true,
    brand: "Apple",
  },
  {
    _id: 1006,
    title: "iphone 15",
    price: 1590.99,
    previousPrice: 1670.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone",
    image: "https://i.ibb.co/fYXtLrh/iphone6.jpg",
    isNew: true,
    brand: "Apple",
  },
  {
    _id: 1007,
    title: "iphone 15",
    price: 1350.99,
    previousPrice: 1400.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone",
    image: "https://i.ibb.co/p3s01cP/iphone15.jpg",
    isNew: true,
    brand: "Apple",
  },
  {
    _id: 1008,
    title: "iphone 15",
    price: 1200.99,
    previousPrice: 1250.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone",
    image: "https://i.ibb.co/4RjM8jq/iphone8.jpg",
    isNew: true,
    brand: "Apple",
  },
  {
    _id: 1009,
    title: "iphone 15",
    price: 1360.99,
    previousPrice: 1400.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone",
    image: "https://i.ibb.co/GCVCtdN/iphone9.jpg",
    isNew: true,
    brand: "Apple",
  },
  {
    _id: 1010,
    title: "Samsung new series",
    price: 999.99,
    previousPrice: 1100.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone",
    image: "https://i.ibb.co/NybLW75/samsung.jpg",
    isNew: true,
    brand: "Samsung",
  },
  {
    _id: 1011,
    title: "Samasung Fold",
    price: 1600.99,
    previousPrice: 1800.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone",
    image: "https://i.ibb.co/7ScmFBt/samasungflod.jpg",
    isNew: true,
    brand: "Samsung",
  },
  {
    _id: 1012,
    title: "Samsung Galaxy",
    price: 690.99,
    previousPrice: 700.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone",
    image: "https://i.ibb.co/7V2YWys/oneplus.jpg",
    isNew: true,
    brand: "Apple",
  },
  {
    _id: 1013,
    title: "Axus pro",
    price: 680.99,
    previousPrice: 700.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone",
    image: "https://i.ibb.co/0GKsCg5/azus.jpg",
    isNew: true,
    brand: "Asuz",
  },
  {
    _id: 1014,
    title: "Nothing 1",
    price: 750.99,
    previousPrice: 800.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone",
    image: "https://i.ibb.co/4FgZH6z/notihingphone.jpg",
    isNew: true,
    brand: "Nothing",
  },
  {
    _id: 1015,
    title: "Samsung glow",
    price: 650.5,
    previousPrice: 699.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone",
    image: "https://i.ibb.co/zZ59y03/samsunggalaxy.jpg",
    isNew: true,
    brand: "Samsung",
  },
  {
    _id: 1016,
    title: "Xiomi bubble",
    price: 350,
    previousPrice: 380,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone",
    image: "https://i.ibb.co/wcwnMjw/xiomi.jpg",
    isNew: true,
    brand: "Xiomi",
  },
  {
    _id: 1017,
    title: "Apple light",
    price: 1250,
    previousPrice: 1280,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone",
    image: "https://i.ibb.co/HD4JCrk/iphone2.jpg",
    isNew: true,
    brand: "Apple",
  },
  {
    _id: 1018,
    title: "iphone 15",
    price: 1180,
    previousPrice: 1200.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone",
    image: "https://i.ibb.co/HD4JCrk/iphone2.jpg",
    isNew: true,
    brand: "Apple",
  },
  {
    _id: 1019,
    title: "iphone 15",
    price: 1900.99,
    previousPrice: 1950,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone",
    image: "https://i.ibb.co/51LfwZ3/iphone3.jpg",
    isNew: true,
    brand: "Apple",
  },
  {
    _id: 1020,
    title: "iphone 15",
    price: 1000.99,
    previousPrice: 1100.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone",
    image: "https://i.ibb.co/F4VHfPJ/iphone4.jpg",
    isNew: true,
    brand: "Apple",
  },
];

router.get("/phone", (req, res) => {
  res.send(phoneData);
});

// Single proudct parameter

router.get("/phone/:id", (req, res) => {
  const phoneId = parseInt(req.params.id);
  const singlePhone = phoneData.find((item) => item._id === phoneId);

  if (!phoneId) {
    return res.status(404).json({ message: "Single Phone data was not found" });
  }
  res.json(singlePhone);
});

module.exports = router;
