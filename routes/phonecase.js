const expess = require("express");
const router = expess.Router();

const phonecaseData = [
  {
    _id: 3001,
    title: "Husa Pattern",
    price: 50,
    previousPrice: 55,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone case",
    image: "https://i.ibb.co/yPj4HCq/husa-pattern-trandafiri-343x463-c.jpg",
    isNew: true,
    brand: "Trandafiri",
  },
  {
    _id: 3002,
    title: "Artistic",
    price: 75,
    previousPrice: 85,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone case",
    image: "https://i.ibb.co/kxKVGRs/artistic-2-343x463-c.jpg",
    isNew: true,
    brand: "Artistic",
  },
  {
    _id: 3003,
    title: "Husa Sarpe",
    price: 45,
    previousPrice: 48.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone case",
    image: "https://i.ibb.co/qyMfq88/husa-sarpe2-343x463-c.jpg",
    isNew: true,
    brand: "Trandafiri",
  },
  {
    _id: 3004,
    title: "Husa Pattern Frunze",
    price: 80,
    previousPrice: 120,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone case",
    image: "https://i.ibb.co/ZLxHNs0/husa-pattern-frunze-343x463-c.jpg",
    isNew: true,
    brand: "Trandafiri",
  },
  {
    _id: 3005,
    title: "Husa Leu",
    price: 60,
    previousPrice: 65,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone case",
    image: "https://i.ibb.co/p3kGk1B/husa-leu-343x463-c.jpg",
    isNew: true,
    brand: "Unknown",
  },
  {
    _id: 3006,
    title: "White Lavish",
    price: 80,
    previousPrice: 105,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone case",
    image: "https://i.ibb.co/jMtqgVD/husa-marmura-2-343x463-c.jpg",
    isNew: false,
    brand: "Lavish",
  },
  {
    _id: 3007,
    title: "Zigzag row",
    price: 35,
    previousPrice: 95,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone case",
    image: "https://i.ibb.co/WBQH7dS/husa-caine-343x463-c.jpg",
    isNew: false,
    brand: "Artistic",
  },
  {
    _id: 3008,
    title: "Albinuta",
    price: 150.99,
    previousPrice: 180,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone case",
    image: "https://i.ibb.co/pXPdzPN/husa-albinuta-343x463-c.jpg",
    isNew: false,
    brand: "Albinuta",
  },
  {
    _id: 3009,
    title: "Alien Case",
    price: 120,
    previousPrice: 115,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone case",
    image: "https://i.ibb.co/hXQrRH8/alien-case-343x463-c.jpg",
    isNew: false,
    brand: "Unknown",
  },
  {
    _id: 3010,
    title: "Tiger Print",
    price: 80,
    previousPrice: 85,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone case",
    image: "https://i.ibb.co/q0sQJZN/animal-print-case-343x463-c.jpg",
    isNew: false,
    brand: "Next Door",
  },
  {
    _id: 3011,
    title: "Shield Pro",
    price: 45,
    previousPrice: 80,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone case",
    image: "https://i.ibb.co/mND7qBL/husa-got-343x463-c.jpg",
    isNew: false,
    brand: "Shield",
  },
  {
    _id: 3012,
    title: "Husa Army",
    price: 50,
    previousPrice: 55,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone case",
    image: "https://i.ibb.co/9s9sPnc/husa-army-b-343x463-c.jpg",
    isNew: false,
    brand: "Artistic",
  },
  {
    _id: 3013,
    title: "White Lavish",
    price: 80,
    previousPrice: 105,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone case",
    image: "https://i.ibb.co/jMtqgVD/husa-marmura-2-343x463-c.jpg",
    isNew: false,
    brand: "Lavish",
  },
  {
    _id: 3014,
    title: "Joker Dream",
    price: 50,
    previousPrice: 55,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone case",
    image: "https://i.ibb.co/gmKdyTC/husa-joker2-343x463-c.jpg",
    isNew: false,
    brand: "Joker",
  },
  {
    _id: 3015,
    title: "Dramatic Arguments",
    price: 75,
    previousPrice: 90,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone case",
    image: "https://i.ibb.co/YW03K1F/phone-case-images-2-343x463-c.jpg",
    isNew: false,
    brand: "Unknown",
  },
];
router.get("/phonecase", (req, res) => {
  res.send(phonecaseData);
});
// Single proudct parameter

router.get("/phonecase/:id", (req, res) => {
  const phoneId = parseInt(req.params.id);
  const singlePhone = phonecaseData.find((item) => item._id === phoneId);

  if (!phoneId) {
    return res.status(404).json({ message: "Single Phone data was not found" });
  }
  res.json(singlePhone);
});

module.exports = router;
