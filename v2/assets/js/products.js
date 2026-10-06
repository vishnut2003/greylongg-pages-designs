/* Placeholder catalogue for the mockups.
   Photos and prices come from the live greylongg.com listings; titles are rewritten
   to the "Brand + Fabric + Type – Colour" pattern from the design plan.
   Ratings and review counts are placeholders. */
var GL_PRODUCTS = [
  // Polos
  { id: "bamboo-polo-black", group: "polos", title: "Yorksteadd Bamboo Polo T-Shirt – Black", price: 899, mrp: 1649, rating: 4.7, reviews: 212, tag: "Bamboo", colors: ["#1f1f1f", "#ffffff", "#d9a520", "#5d6b4a"] },
  { id: "placket-polo-navy", group: "polos", title: "Richard Paadler Concealed Placket Polo T-Shirt – Navy", price: 1489, mrp: 1649, rating: 4.6, reviews: 87, colors: ["#232a4d", "#1f1f1f", "#ffffff"] },
  { id: "horizan-polo-lilac", group: "polos", title: "Carlton London Horizan Recycled Yarn Polo T-Shirt – Lilac", price: 1351, rating: 4.5, reviews: 41, tag: "Recycled", colors: ["#cdb8dc", "#9a9c9b", "#b9d6cc", "#4a4a4c"] },
  { id: "nirva-polo-taupe", group: "polos", title: "Carlton London Nirva Cotton Lycra Polo T-Shirt – Taupe", price: 999, mrp: 2050, rating: 4.6, reviews: 134, colors: ["#978b7a", "#c9a24a", "#f4f2ec", "#1f1f1f"] },
  { id: "bamboo-polo-white", group: "polos", title: "Yorksteadd Bamboo Polo T-Shirt – White", price: 899, mrp: 1649, rating: 4.7, reviews: 212, tag: "Bamboo", colors: ["#ffffff", "#1f1f1f", "#d9a520", "#5d6b4a"] },
  { id: "aura-polo-navy", group: "polos", title: "Carlton London Aura Tipped Collar Polo T-Shirt – Navy", price: 1401, rating: 4.4, reviews: 29, colors: ["#1d2233", "#d8c6a3", "#f4f2ec", "#a8273a"] },
  { id: "printed-polo-black", group: "polos", title: "Richard Paadler Printed Polo T-Shirt – Black", price: 929, mrp: 1599, rating: 4.5, reviews: 96, colors: ["#1f1f1f", "#f4f2ec", "#b3202c", "#1f4ea1"] },
  { id: "divina-polo-green", group: "polos", title: "Carlton London Divina Organic Cotton Polo T-Shirt – Forest", price: 1029, mrp: 2050, rating: 4.8, reviews: 158, tag: "Organic cotton", colors: ["#1f3b36", "#1d2233", "#ffffff", "#c8202b"] },

  // T-shirts
  { id: "bamboo-cotton-tee-sky", group: "tees", title: "Yorksteadd Bamboo-Cotton Round Neck T-Shirt – Sky Blue", price: 689, mrp: 999, rating: 4.6, reviews: 301, tag: "Bamboo", colors: ["#a9c9e6", "#e9c7a6", "#1f1f1f", "#2f4f8f"] },
  { id: "staycool-tee-maroon", group: "tees", title: "Richard Paadler Round Neck T-Shirt – Maroon", price: 1299, mrp: 1449, rating: 4.5, reviews: 64, colors: ["#5b1a24", "#f4f2ec", "#1f1f1f", "#a8ab95"] },
  { id: "staycool-tee-white", group: "tees", title: "Richard Paadler Round Neck T-Shirt – White", price: 1299, mrp: 1449, rating: 4.5, reviews: 64, colors: ["#f4f2ec", "#5b1a24", "#1f1f1f", "#a8ab95"] },
  { id: "comfort-tee-white", group: "tees", title: "Richard Paadler Everyday Round Neck T-Shirt – White", price: 739, mrp: 1249, rating: 4.4, reviews: 118, colors: ["#f4f2ec", "#1f1f1f", "#1d2547", "#6e2230"] },
  { id: "bamboo-yarn-tee-black", group: "tees", title: "Yorksteadd Bamboo Yarn & Cotton T-Shirt – Black", price: 1029, mrp: 1149, rating: 4.7, reviews: 143, tag: "Bamboo", colors: ["#1f1f1f", "#9aa0a8", "#2f4f8f", "#f4f2ec"] },
  { id: "bamboo-cotton-tee-fawn", group: "tees", title: "Yorksteadd Bamboo-Cotton Round Neck T-Shirt – Fawn", price: 689, mrp: 999, rating: 4.6, reviews: 301, tag: "Bamboo", colors: ["#e9c7a6", "#a9c9e6", "#1f1f1f", "#2f4f8f"] },
  { id: "comfort-tee-sage", group: "tees", title: "Richard Paadler Everyday Round Neck T-Shirt – Sage", price: 739, mrp: 1249, rating: 4.4, reviews: 118, colors: ["#9aa391", "#f4f2ec", "#1f1f1f", "#1d2547"] },
  { id: "bamboo-yarn-tee-white", group: "tees", title: "Yorksteadd Bamboo Yarn & Cotton T-Shirt – White", price: 1029, mrp: 1149, rating: 4.7, reviews: 143, tag: "Bamboo", colors: ["#f4f2ec", "#1f1f1f", "#9aa0a8", "#2f4f8f"] },

  // Graphic tees
  { id: "quote-tee-okay-black", group: "graphic", title: "Yorksteadd Quote T-Shirt “Everything Will Be Okay” – Black", price: 839, mrp: 1299, rating: 4.5, reviews: 77, colors: ["#1f1f1f", "#f4f2ec", "#2f4f8f", "#e9c7a6"] },
  { id: "quote-tee-original-white", group: "graphic", title: "Yorksteadd Quote T-Shirt “The Original” – White", price: 839, mrp: 1299, rating: 4.4, reviews: 52, colors: ["#f4f2ec", "#a9c9e6", "#c8202b", "#1f1f1f"] },
  { id: "astronaut-tee-red", group: "graphic", title: "Yorksteadd Space T-Shirt “Astronaut” – Red", price: 839, mrp: 1299, rating: 4.6, reviews: 38, colors: ["#c8202b", "#1f1f1f", "#2f4f8f", "#e9c7a6"] },
  { id: "gym-tee-black", group: "graphic", title: "Yorksteadd Gym T-Shirt “Gym Mode On” – Black", price: 839, mrp: 1299, rating: 4.7, reviews: 124, colors: ["#1f1f1f", "#2f4f8f", "#e9c7a6", "#a9c9e6"] },
  { id: "skull-moon-tee-black", group: "graphic", title: "Yorksteadd Graphic T-Shirt “Skull & Sacred Moon” – Black", price: 839, mrp: 1299, rating: 4.5, reviews: 91, colors: ["#1f1f1f", "#9aa0a8", "#2f4f8f", "#f4f2ec"] },
  { id: "zodiac-tee-libra-black", group: "graphic", title: "Yorksteadd Zodiac T-Shirt “Libra” – Black", price: 839, mrp: 1299, rating: 4.6, reviews: 46, colors: ["#1f1f1f", "#e9c7a6", "#2f4f8f", "#a9c9e6"] },
  { id: "travel-tee-vacation-black", group: "graphic", title: "Yorksteadd Travel T-Shirt “Vacation Vibes” – Black", price: 839, mrp: 1299, rating: 4.3, reviews: 33, colors: ["#1f1f1f", "#2f4f8f", "#e9c7a6", "#a9c9e6"] },
  { id: "graphic-tee-northwave-black", group: "graphic", title: "Yorksteadd Graphic T-Shirt “Northwave” – Black", price: 839, mrp: 1299, rating: 4.5, reviews: 27, colors: ["#1f1f1f", "#2f4f8f", "#e9c7a6", "#a9c9e6"] },

  // New arrivals
  { id: "aura-polo-beige", group: "new", title: "Carlton London Aura Tipped Collar Polo T-Shirt – Desert Sand", price: 1401, rating: 4.4, reviews: 29, colors: ["#d8c6a3", "#1d2233", "#f4f2ec", "#a8273a"] },
  { id: "velora-jacket-black", group: "new", title: "Carlton London Velora Bomber Jacket – Black", price: 4999, rating: 4.6, reviews: 12, colors: ["#1f1f1f", "#232a3d"] },
  { id: "london-tee-black", group: "new", title: "Yorksteadd Vintage City T-Shirt “London” – Black", price: 839, mrp: 1299, rating: 4.6, reviews: 21, colors: ["#1f1f1f", "#b89ab8", "#c8202b", "#f4f2ec"] },
  { id: "eternal-joy-perfume", group: "new", title: "Greylongg Eternal Joy Eau de Parfum – 100 ml", price: 449, mrp: 899, rating: 4.4, reviews: 58, sizes: ["100 ml"], keywords: "perfume fragrance", colors: [] },

  // Fragrance (not shown on the home page; used by search and the collection page)
  { id: "empowerment-essence-perfume", group: "fragrance", title: "Greylongg Empowerment Essence Eau de Parfum – 100 ml", price: 499, mrp: 999, rating: 4.5, reviews: 42, sizes: ["100 ml"], keywords: "perfume fragrance", colors: [] },
  { id: "infinite-love-perfume", group: "fragrance", title: "Greylongg Infinite Love Eau de Parfum – 100 ml", price: 549, mrp: 1099, rating: 4.6, reviews: 37, sizes: ["100 ml"], keywords: "perfume fragrance", colors: [] },
  { id: "passionate-flame-perfume", group: "fragrance", title: "Greylongg Passionate Flame Eau de Parfum – 100 ml", price: 499, mrp: 999, rating: 4.4, reviews: 29, sizes: ["100 ml"], keywords: "perfume fragrance", colors: [] },
  { id: "radiant-bliss-perfume", group: "fragrance", title: "Greylongg Radiant Bliss Eau de Parfum – 100 ml", price: 449, mrp: 899, rating: 4.5, reviews: 33, sizes: ["100 ml"], keywords: "perfume fragrance", colors: [] }
];
