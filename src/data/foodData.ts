// ===============
export const restaurantsData = [
  // =====================================================
  // 1. BURGER HUB (20 ITEMS)
  // =====================================================
  {
    id: '1',
    name: 'Burger Hub',
    rating: 4.7,
    reviews: 1250,
    category: 'Burgers • Fast Food',
    place: 'Downtown',
    time: '25-30 min',
    price: '$$',
    delivery: 'Free delivery',
    isOpen: true,
    image: require('../assets/images/restaurants/pexels-chanwalrus-941861.jpg'),

    foodCategories: [
      {
        id: 'bh1',
        title: 'Recommended',
        type: 'recommended',
        isAvailable: true,
        items: [
          {
            id: 'bhf1',
            name: 'Classic Chicken Burger',
            price: 199,
            rating: 4.6,
            isVeg: false,
            // image: require('../assets/images/foodCategory/burger.png'),
            image: {
              uri: 'https://tse1.mm.bing.net/th/id/OIP.By-7BfHD1Ioy31mkXauh7gHaFj?rs=1&pid=ImgDetMain&o=7&rm=3',
            },
          },
          {
            id: 'bhf2',
            name: 'Cheese Veg Burger',
            price: 179,
            rating: 4.4,
            isVeg: true,
            // image: require('../assets/images/foodCategory/burger.png'),
            image: {
              uri: 'https://veganuary.com/wp-content/uploads/2019/12/CaliCheese2-scaled.jpg',
            },
          },
          {
            id: 'bhf3',
            name: 'Double Patty Burger',
            price: 249,
            rating: 4.7,
            isVeg: false,
            // image: require('../assets/images/foodCategory/burger.png'),
            image: {
              uri: 'https://tse3.mm.bing.net/th/id/OIP.EwqKyzEufRlPZ5vq1vfyBgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
            },
          },
          {
            id: 'bhf4',
            name: 'BBQ Burger',
            price: 229,
            rating: 4.5,
            isVeg: false,
            // image: require('../assets/images/foodCategory/burger.png'),
            image: {
              uri: 'https://th.bing.com/th/id/R.d604f4e1fa4065e9178530806d742bcf?rik=OheJ0kncnd%2bUWw&riu=http%3a%2f%2fcdn2.tmbi.com%2fTOH%2fImages%2fPhotos%2f37%2f1200x1200%2fexps28800_UG143377D12_18_1b_RMS.jpg&ehk=SwvIaImoVXPPc88FJO9A%2fHRHyH7AOQoWdx5AfgIfgVo%3d&risl=&pid=ImgRaw&r=0',
            },
          },
        ],
      },
      {
        id: 'bh2',
        title: 'Chicken Items',
        type: 'chicken',
        isAvailable: true,
        items: [
          {
            id: 'bhf5',
            name: 'Chicken Nuggets',
            price: 149,
            rating: 4.3,
            isVeg: false,
            //  image: require('../assets/images/foods/chicken.jpg'),
            image: {
              uri: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Baked-Chicken-Nuggets.jpg',
            },
          },
          {
            id: 'bhf6',
            name: 'Chicken Wings',
            price: 199,
            rating: 4.5,
            isVeg: false,
            //  image: require('../assets/images/foods/chicken.jpg'),
            image: {
              uri: 'https://www.restlesschipotle.com/wp-content/uploads/2022/08/Crispy-Oven-Baked-Chicken-Wings-feat2.jpg',
            },
          },
          {
            id: 'bhf7',
            name: 'Grilled Chicken Burger',
            price: 239,
            rating: 4.6,
            isVeg: false,
            //  image: require('../assets/images/foods/chicken.jpg'),
            image: {
              uri: 'https://tse3.mm.bing.net/th/id/OIP.SkJrcluDM_TSP-FRbD_wAgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
            },
          },
          {
            id: 'bhf8',
            name: 'Chicken Popcorn',
            price: 159,
            rating: 4.2,
            isVeg: false,
            //  image: require('../assets/images/foods/chicken.jpg'),
            image: {
              uri: 'https://tse3.mm.bing.net/th/id/OIP.g2FAbu3AJBWf-sb61GfMvgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
            },
          },
        ],
      },
      {
        id: 'bh3',
        title: 'Snacks',
        type: 'snacks',
        isAvailable: true,
        items: [
          {
            id: 'bhf9',
            name: 'French Fries',
            price: 99,
            rating: 4.3,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://goldenfingers.us/wp-content/uploads/2020/03/french_fry.jpg',
            },
          },
          {
            id: 'bhf10',
            name: 'Peri Peri Fries',
            price: 129,
            rating: 4.4,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://cookingwithparita.com/wp-content/uploads/2022/10/image-of-baked-crispy-peri-peri-fries-recipe-2.jpg',
            },
          },
          {
            id: 'bhf11',
            name: 'Onion Rings',
            price: 119,
            rating: 4.1,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://www.dinneratthezoo.com/wp-content/uploads/2019/12/onion-rings-5.jpg',
            },
          },
          {
            id: 'bhf12',
            name: 'Cheese Balls',
            price: 139,
            rating: 4.2,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://tse2.mm.bing.net/th/id/OIP.N35to2qUsZ7nWrfP1H4cAQHaLH?rs=1&pid=ImgDetMain&o=7&rm=3',
            },
          },
        ],
      },
      {
        id: 'bh4',
        title: 'Drinks',
        type: 'drinks',
        isAvailable: true,
        items: [
          {
            id: 'bhf13',
            name: 'Cold Coffee',
            price: 99,
            rating: 4.3,
            isVeg: true,
            //  image: require('../assets/images/foods/drink.jpg'),
            image: {
              uri: 'https://tse1.mm.bing.net/th/id/OIP.d8ndOAHvrapAm7PZpyt8-QHaHZ?rs=1&pid=ImgDetMain&o=7&rm=3',
            },
          },
          {
            id: 'bhf14',
            name: 'Chocolate Shake',
            price: 129,
            rating: 4.5,
            isVeg: true,
            //  image: require('../assets/images/foods/drink.jpg'),
            image: {
              uri: 'https://th.bing.com/th/id/OIP.BeO3ljis0fJaCAA_W4qQjgHaKy?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
            },
          },
          {
            id: 'bhf15',
            name: 'Strawberry Shake',
            price: 129,
            rating: 4.4,
            isVeg: true,
            //  image: require('../assets/images/foods/drink.jpg'),
            image: {
              uri: 'https://th.bing.com/th/id/OIP.0bGRUzd9rmAB_Hz3Jp4lvwHaLG?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
            },
          },
          {
            id: 'bhf16',
            name: 'Lime Soda',
            price: 79,
            rating: 4.1,
            isVeg: true,
            //  image: require('../assets/images/foods/drink.jpg'),
            image: {
              uri: 'https://th.bing.com/th/id/OIP.t3_wLijQ3xRCMwfCj5Nk-wHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
            },
          },
        ],
      },
      {
        id: 'bh5',
        title: 'Combos',
        type: 'combo',
        isAvailable: true,
        items: [
          {
            id: 'bhf17',
            name: 'Burger + Fries Combo',
            price: 299,
            rating: 4.5,
            isVeg: false,
            //  image: require('../assets/images/foods/burger.jpg'),
            image: {
              uri: 'https://img.freepik.com/premium-photo/delicious-burger-fries-combo_1003686-11354.jpg',
            },
          },
          {
            id: 'bhf18',
            name: 'Veg Combo Meal',
            price: 269,
            rating: 4.3,
            isVeg: true,
            //  image: require('../assets/images/foods/burger.jpg'),
            image: {
              uri: 'https://3.imimg.com/data3/JB/GR/MY-12469549/veg-combo-meal-500x500.png',
            },
          },
          {
            id: 'bhf19',
            name: 'Family Combo',
            price: 499,
            rating: 4.6,
            isVeg: false,
            //  image: require('../assets/images/foods/burger.jpg'),
            image: {
              uri: 'https://tse1.mm.bing.net/th/id/OIP.W6sxTYxOsMoQSCtGV_w0jgHaFS?rs=1&pid=ImgDetMain&o=7&rm=3',
            },
          },
          {
            id: 'bhf20',
            name: 'Snack Box',
            price: 199,
            rating: 4.2,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://tse1.mm.bing.net/th/id/OIP.SZur16GC0DdHlM1PiickBAHaFS?rs=1&pid=ImgDetMain&o=7&rm=3',
            },
          },
        ],
      },
    ],
  },

  // =====================================================
  // 2. PIZZA STATION (20 ITEMS)
  // =====================================================
  {
    id: '2',
    name: 'Pizza Station',
    rating: 4.8,
    reviews: 2100,
    category: 'Pizza • Italian',
    place: 'Uptown',
    time: '30-35 min',
    price: '$$$',
    delivery: 'Free delivery',
    isOpen: true,
    image: require('../assets/images/restaurants/pexels-chanwalrus-958547.jpg'),

    foodCategories: [
      {
        id: 'ps1',
        title: 'Recommended',
        type: 'recommended',
        isAvailable: true,
        items: [
          {
            id: 'psf1',
            name: 'Margherita Pizza',
            price: 349,
            rating: 4.7,
            isVeg: true,
            //  image: require('../assets/images/foods/pizza.jpg'),
            image: {
              uri: 'https://tse4.mm.bing.net/th/id/OIP.QIt_JepsNb81w_Mv65QqxgHaKl?rs=1&pid=ImgDetMain&o=7&rm=3',
            },
          },
          {
            id: 'psf2',
            name: 'Pepperoni Pizza',
            price: 399,
            rating: 4.8,
            isVeg: false,
            //  image: require('../assets/images/foods/pizza.jpg'),
            image: {
              uri: 'https://th.bing.com/th/id/OIP.80ojPA6lWJB1B_Y5RYDF5wHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
            },
          },
          {
            id: 'psf3',
            name: 'BBQ Chicken Pizza',
            price: 429,
            rating: 4.6,
            isVeg: false,
            //  image: require('../assets/images/foods/pizza.jpg'),
            image: {
              uri: 'https://www.aberdeenskitchen.com/wp-content/uploads/2017/05/BBQ-Chicken-Pizza-9-680x1024.jpg',
            },
          },
          {
            id: 'psf4',
            name: 'Farmhouse Pizza',
            price: 379,
            rating: 4.6,
            isVeg: true,
            //  image: require('../assets/images/foods/pizza.jpg'),
            image: {
              uri: 'https://tse3.mm.bing.net/th/id/OIP.gWaKNnOJVndMJVgwKXL7ewHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
            },
          },
        ],
      },
      {
        id: 'ps2',
        title: 'Pizzas',
        type: 'pizza',
        isAvailable: true,
        items: [
          {
            id: 'psf5',
            name: 'Paneer Tikka Pizza',
            price: 399,
            rating: 4.6,
            isVeg: true,
            //  image: require('../assets/images/foods/pizza.jpg'),
            image: {
              uri: 'https://th.bing.com/th/id/OIP.oZMlp-fkQyZjgNDiM8wWJAHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
            },
          },
          {
            id: 'psf6',
            name: 'Cheese Burst Pizza',
            price: 449,
            rating: 4.7,
            isVeg: true,
            //  image: require('../assets/images/foods/pizza.jpg'),
            image: {
              uri: 'https://i.pinimg.com/736x/eb/ee/e8/ebeee82a42e0428d299f86ab74faf77a--dominos-pizza-paneer-cheese.jpg',
            },
          },
          {
            id: 'psf7',
            name: 'Meat Lovers Pizza',
            price: 499,
            rating: 4.8,
            isVeg: false,
            //  image: require('../assets/images/foods/pizza.jpg'),
            image: {
              uri: 'https://tse4.mm.bing.net/th/id/OIP.DMBSdD1q8U0_0GTdlhvBpAHaLH?rs=1&pid=ImgDetMain&o=7&rm=3',
            },
          },
          {
            id: 'psf8',
            name: 'Italian Veg Pizza',
            price: 369,
            rating: 4.4,
            isVeg: true,
            //  image: require('../assets/images/foods/pizza.jpg'),
            image: {
              uri: 'https://tse3.mm.bing.net/th/id/OIP.S44RMmIyps-UghXyy6eiXQHaEL?rs=1&pid=ImgDetMain&o=7&rm=3',
            },
          },
        ],
      },
      {
        id: 'ps3',
        title: 'Sides',
        type: 'snacks',
        isAvailable: true,
        items: [
          {
            id: 'psf9',
            name: 'Garlic Bread',
            price: 149,
            rating: 4.4,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://th.bing.com/th/id/OIP.ad4BUY3Z2O0ix6Ka0CbhvAHaLG?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
            },
          },
          {
            id: 'psf10',
            name: 'Cheese Garlic Bread',
            price: 179,
            rating: 4.5,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://recipetineats.com/wp-content/uploads/2019/01/Cheesy-Garlic-Bread_1.jpg',
            },
          },
          {
            id: 'psf11',
            name: 'Potato Wedges',
            price: 129,
            rating: 4.2,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://tse4.mm.bing.net/th/id/OIP.esHu06Dsi_LqcfvPDPbpmgHaLH?rs=1&pid=ImgDetMain&o=7&rm=3',
            },
          },
          {
            id: 'psf12',
            name: 'Stuffed Garlic Bread',
            price: 199,
            rating: 4.6,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://tse1.explicit.bing.net/th/id/OIP.p-6GTAnoG2UqvqmgylD8KAHaLG?rs=1&pid=ImgDetMain&o=7&rm=3',
            },
          },
        ],
      },
      {
        id: 'ps4',
        title: 'Soups',
        type: 'soup',
        isAvailable: true,
        items: [
          {
            id: 'psf13',
            name: 'Tomato Basil Soup',
            price: 149,
            rating: 4.4,
            isVeg: true,
            //  image: require('../assets/images/foods/soup.jpg'),
            image: {
              uri: 'https://th.bing.com/th/id/OIP._MgmvKhhHHv1qPt9FyyA2QHaLG?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
            },
          },
          {
            id: 'psf14',
            name: 'Sweet Corn Soup',
            price: 139,
            rating: 4.3,
            isVeg: true,
            //  image: require('../assets/images/foods/soup.jpg'),
            image: {
              uri: 'https://www.ruchiskitchen.com/wp-content/uploads/2020/01/Sweet-corn-soup-1-1.jpg',
            },
          },
          {
            id: 'psf15',
            name: 'Chicken Clear Soup',
            price: 159,
            rating: 4.5,
            isVeg: false,
            //  image: require('../assets/images/foods/soup.jpg'),
            image: {
              uri: 'https://i.ytimg.com/vi/T4pzDUuPrg0/maxresdefault.jpg',
            },
          },
          {
            id: 'psf16',
            name: 'Minestrone Soup',
            price: 169,
            rating: 4.4,
            isVeg: true,
            //  image: require('../assets/images/foods/soup.jpg'),
            image: {
              uri: 'https://tse1.mm.bing.net/th/id/OIP.Vn0rGk4GxNd-OcGjpP7XrgHaLT?rs=1&pid=ImgDetMain&o=7&rm=3',
            },
          },
        ],
      },
      {
        id: 'ps5',
        title: 'Desserts & Drinks',
        type: 'dessert',
        isAvailable: true,
        items: [
          {
            id: 'psf17',
            name: 'Choco Lava Cake',
            price: 129,
            rating: 4.6,
            isVeg: true,
            //  image: require('../assets/images/foods/dessert.jpg'),
            image: {
              uri: 'https://tse2.mm.bing.net/th/id/OIP.bUziOFaTzKe_QhNNHV6l9gHaLH?rs=1&pid=ImgDetMain&o=7&rm=3',
            },
          },
          {
            id: 'psf18',
            name: 'Brownie',
            price: 119,
            rating: 4.5,
            isVeg: true,
            //  image: require('../assets/images/foods/dessert.jpg'),
            image: {
              uri: 'https://tse4.mm.bing.net/th/id/OIP.2eWvcwOeJpY7YgwNfRsJjAHaKX?rs=1&pid=ImgDetMain&o=7&rm=3',
            },
          },
          {
            id: 'psf19',
            name: 'Cold Coffee',
            price: 99,
            rating: 4.3,
            isVeg: true,
            //  image: require('../assets/images/foods/drink.jpg'),
            image: {
              uri: 'https://tse2.mm.bing.net/th/id/OIP.-0IzIVUd4FE6RUKnPpGSCgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
            },
          },
          {
            id: 'psf20',
            name: 'Soft Drink',
            price: 79,
            rating: 4.1,
            isVeg: true,
            //  image: require('../assets/images/foods/drink.jpg'),
            image: {
              uri: 'https://tse2.mm.bing.net/th/id/OIP.PMe5IET_kl7w5O2QyU3FuwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
            },
          },
        ],
      },
    ],
  },

  // =====================================================
  // 3. CHINESE WOK
  // =====================================================
  {
    id: '3',
    name: 'Chinese Wok',
    rating: 4.6,
    reviews: 1800,
    category: 'Chinese • Asian',
    place: 'Midtown',
    time: '25-30 min',
    price: '$$',
    delivery: '₹20 delivery',
    isOpen: true,
    image: require('../assets/images/restaurants/pexels-huy-phan-316220-1383776.jpg'),

    foodCategories: [
      {
        id: 'cw1',
        title: 'Recommended',
        type: 'recommended',
        isAvailable: true,
        items: [
          {
            id: 'cw1f1',
            name: 'Chicken Hakka Noodles',
            price: 199,
            rating: 4.6,
            isVeg: false,
            //  image: require('../assets/images/foods/noodles.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'cw1f2',
            name: 'Veg Manchurian',
            price: 179,
            rating: 4.5,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'cw1f3',
            name: 'Chicken Fried Rice',
            price: 209,
            rating: 4.6,
            isVeg: false,
            //  image: require('../assets/images/foods/rice.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'cw1f4',
            name: 'Chilli Chicken',
            price: 229,
            rating: 4.7,
            isVeg: false,
            //  image: require('../assets/images/foods/chicken.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
      {
        id: 'cw2',
        title: 'Noodles',
        type: 'noodles',
        isAvailable: true,
        items: [
          {
            id: 'cw2f1',
            name: 'Veg Hakka Noodles',
            price: 169,
            rating: 4.3,
            isVeg: true,
            //  image: require('../assets/images/foods/noodles.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'cw2f2',
            name: 'Schezwan Noodles',
            price: 189,
            rating: 4.4,
            isVeg: true,
            //  image: require('../assets/images/foods/noodles.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'cw2f3',
            name: 'Chicken Noodles',
            price: 199,
            rating: 4.5,
            isVeg: false,
            //  image: require('../assets/images/foods/noodles.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'cw2f4',
            name: 'Paneer Noodles',
            price: 189,
            rating: 4.4,
            isVeg: true,
            //  image: require('../assets/images/foods/noodles.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
      {
        id: 'cw3',
        title: 'Rice',
        type: 'rice',
        isAvailable: true,
        items: [
          {
            id: 'cw3f1',
            name: 'Veg Fried Rice',
            price: 169,
            rating: 4.3,
            isVeg: true,
            //  image: require('../assets/images/foods/rice.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'cw3f2',
            name: 'Schezwan Rice',
            price: 179,
            rating: 4.4,
            isVeg: true,
            //  image: require('../assets/images/foods/rice.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'cw3f3',
            name: 'Egg Fried Rice',
            price: 189,
            rating: 4.4,
            isVeg: false,
            //  image: require('../assets/images/foods/rice.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'cw3f4',
            name: 'Chicken Fried Rice',
            price: 209,
            rating: 4.6,
            isVeg: false,
            //  image: require('../assets/images/foods/rice.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
      {
        id: 'cw4',
        title: 'Starters',
        type: 'snacks',
        isAvailable: true,
        items: [
          {
            id: 'cw4f1',
            name: 'Spring Rolls',
            price: 149,
            rating: 4.2,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'cw4f2',
            name: 'Chicken Lollipop',
            price: 229,
            rating: 4.6,
            isVeg: false,
            //  image: require('../assets/images/foods/chicken.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'cw4f3',
            name: 'Crispy Corn',
            price: 159,
            rating: 4.3,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'cw4f4',
            name: 'Chilli Paneer',
            price: 199,
            rating: 4.5,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
      {
        id: 'cw5',
        title: 'Soups',
        type: 'soup',
        isAvailable: true,
        items: [
          {
            id: 'cw5f1',
            name: 'Manchow Soup',
            price: 129,
            rating: 4.3,
            isVeg: true,
            //  image: require('../assets/images/foods/soup.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'cw5f2',
            name: 'Hot & Sour Soup',
            price: 129,
            rating: 4.4,
            isVeg: true,
            //  image: require('../assets/images/foods/soup.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'cw5f3',
            name: 'Chicken Clear Soup',
            price: 149,
            rating: 4.5,
            isVeg: false,
            //  image: require('../assets/images/foods/soup.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'cw5f4',
            name: 'Sweet Corn Soup',
            price: 139,
            rating: 4.3,
            isVeg: true,
            //  image: require('../assets/images/foods/soup.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
    ],
  },

  // =====================================================
  // 4. ASIAN NOODLE HOUSE
  // =====================================================
  {
    id: '4',
    name: 'Asian Noodle House',
    rating: 4.5,
    reviews: 950,
    category: 'Asian • Noodles',
    place: 'Eastside',
    time: '20-25 min',
    price: '$$',
    delivery: 'Free delivery',
    isOpen: true,
    image: require('../assets/images/restaurants/pexels-isabella-mendes-107313-858508.jpg'),

    foodCategories: [
      {
        id: 'an1',
        title: 'Recommended',
        type: 'recommended',
        isAvailable: true,
        items: [
          {
            id: 'an1f1',
            name: 'Chicken Ramen',
            price: 249,
            rating: 4.6,
            isVeg: false,
            //  image: require('../assets/images/foods/noodles.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'an1f2',
            name: 'Veg Ramen',
            price: 229,
            rating: 4.5,
            isVeg: true,
            //  image: require('../assets/images/foods/noodles.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'an1f3',
            name: 'Spicy Korean Noodles',
            price: 239,
            rating: 4.6,
            isVeg: true,
            //  image: require('../assets/images/foods/noodles.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'an1f4',
            name: 'Thai Pad Thai',
            price: 259,
            rating: 4.7,
            isVeg: false,
            //  image: require('../assets/images/foods/noodles.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
      {
        id: 'an2',
        title: 'Noodles',
        type: 'noodles',
        isAvailable: true,
        items: [
          {
            id: 'an2f1',
            name: 'Udon Noodles',
            price: 219,
            rating: 4.4,
            isVeg: true,
            //  image: require('../assets/images/foods/noodles.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'an2f2',
            name: 'Soba Noodles',
            price: 229,
            rating: 4.5,
            isVeg: true,
            //  image: require('../assets/images/foods/noodles.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'an2f3',
            name: 'Egg Noodles',
            price: 209,
            rating: 4.4,
            isVeg: false,
            //  image: require('../assets/images/foods/noodles.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'an2f4',
            name: 'Chicken Chow Mein',
            price: 239,
            rating: 4.6,
            isVeg: false,
            //  image: require('../assets/images/foods/noodles.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
      {
        id: 'an3',
        title: 'Starters',
        type: 'snacks',
        isAvailable: true,
        items: [
          {
            id: 'an3f1',
            name: 'Veg Dumplings',
            price: 159,
            rating: 4.3,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'an3f2',
            name: 'Chicken Dumplings',
            price: 189,
            rating: 4.5,
            isVeg: false,
            //  image: require('../assets/images/foods/chicken.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'an3f3',
            name: 'Spring Rolls',
            price: 149,
            rating: 4.2,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'an3f4',
            name: 'Crispy Tofu',
            price: 169,
            rating: 4.4,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
      {
        id: 'an4',
        title: 'Soups',
        type: 'soup',
        isAvailable: true,
        items: [
          {
            id: 'an4f1',
            name: 'Miso Soup',
            price: 129,
            rating: 4.3,
            isVeg: true,
            //  image: require('../assets/images/foods/soup.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'an4f2',
            name: 'Chicken Ramen Soup',
            price: 159,
            rating: 4.5,
            isVeg: false,
            //  image: require('../assets/images/foods/soup.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'an4f3',
            name: 'Veg Clear Soup',
            price: 119,
            rating: 4.2,
            isVeg: true,
            //  image: require('../assets/images/foods/soup.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'an4f4',
            name: 'Hot & Sour Soup',
            price: 139,
            rating: 4.4,
            isVeg: true,
            //  image: require('../assets/images/foods/soup.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
      {
        id: 'an5',
        title: 'Drinks',
        type: 'drinks',
        isAvailable: true,
        items: [
          {
            id: 'an5f1',
            name: 'Iced Tea',
            price: 99,
            rating: 4.2,
            isVeg: true,
            //  image: require('../assets/images/foods/drink.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'an5f2',
            name: 'Lemon Soda',
            price: 79,
            rating: 4.1,
            isVeg: true,
            //  image: require('../assets/images/foods/drink.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'an5f3',
            name: 'Cold Coffee',
            price: 109,
            rating: 4.3,
            isVeg: true,
            //  image: require('../assets/images/foods/drink.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'an5f4',
            name: 'Green Tea',
            price: 89,
            rating: 4.2,
            isVeg: true,
            //  image: require('../assets/images/foods/drink.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
    ],
  },

  // =====================================================
  // 5. HEALTHY BOWL
  // =====================================================
  {
    id: '5',
    name: 'Healthy Bowl',
    rating: 4.6,
    reviews: 1100,
    category: 'Healthy • Salads',
    place: 'Westside',
    time: '20-25 min',
    price: '$$',
    delivery: '₹20 delivery',
    isOpen: true,
    image: require('../assets/images/restaurants/pexels-pixabay-262978.jpg'),

    foodCategories: [
      {
        id: 'hb1',
        title: 'Recommended',
        type: 'recommended',
        isAvailable: true,
        items: [
          {
            id: 'hb1f1',
            name: 'Quinoa Veg Bowl',
            price: 249,
            rating: 4.6,
            isVeg: true,
            //  image: require('../assets/images/foods/rice.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'hb1f2',
            name: 'Grilled Chicken Salad',
            price: 299,
            rating: 4.7,
            isVeg: false,
            //  image: require('../assets/images/foods/chicken.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'hb1f3',
            name: 'Paneer Power Bowl',
            price: 269,
            rating: 4.5,
            isVeg: true,
            //  image: require('../assets/images/foods/rice.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'hb1f4',
            name: 'Brown Rice Chicken Bowl',
            price: 289,
            rating: 4.6,
            isVeg: false,
            //  image: require('../assets/images/foods/rice.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
      {
        id: 'hb2',
        title: 'Salads',
        type: 'salad',
        isAvailable: true,
        items: [
          {
            id: 'hb2f1',
            name: 'Greek Salad',
            price: 199,
            rating: 4.4,
            isVeg: true,
            //  image: require('../assets/images/foods/rice.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'hb2f2',
            name: 'Caesar Salad',
            price: 219,
            rating: 4.5,
            isVeg: false,
            //  image: require('../assets/images/foods/chicken.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'hb2f3',
            name: 'Sprouts Salad',
            price: 179,
            rating: 4.3,
            isVeg: true,
            //  image: require('../assets/images/foods/rice.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'hb2f4',
            name: 'Fruit Salad',
            price: 159,
            rating: 4.2,
            isVeg: true,
            //  image: require('../assets/images/foods/rice.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
      {
        id: 'hb3',
        title: 'Soups',
        type: 'soup',
        isAvailable: true,
        items: [
          {
            id: 'hb3f1',
            name: 'Vegetable Soup',
            price: 129,
            rating: 4.2,
            isVeg: true,
            //  image: require('../assets/images/foods/soup.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'hb3f2',
            name: 'Chicken Clear Soup',
            price: 149,
            rating: 4.4,
            isVeg: false,
            //  image: require('../assets/images/foods/soup.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'hb3f3',
            name: 'Lentil Soup',
            price: 139,
            rating: 4.3,
            isVeg: true,
            //  image: require('../assets/images/foods/soup.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'hb3f4',
            name: 'Tomato Soup',
            price: 119,
            rating: 4.2,
            isVeg: true,
            //  image: require('../assets/images/foods/soup.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
      {
        id: 'hb4',
        title: 'Smoothies',
        type: 'drinks',
        isAvailable: true,
        items: [
          {
            id: 'hb4f1',
            name: 'Berry Smoothie',
            price: 149,
            rating: 4.4,
            isVeg: true,
            //  image: require('../assets/images/foods/drink.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'hb4f2',
            name: 'Banana Peanut Smoothie',
            price: 139,
            rating: 4.3,
            isVeg: true,
            //  image: require('../assets/images/foods/drink.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'hb4f3',
            name: 'Mango Smoothie',
            price: 159,
            rating: 4.5,
            isVeg: true,
            //  image: require('../assets/images/foods/drink.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'hb4f4',
            name: 'Green Detox Juice',
            price: 169,
            rating: 4.4,
            isVeg: true,
            //  image: require('../assets/images/foods/drink.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
      {
        id: 'hb5',
        title: 'Snacks',
        type: 'snacks',
        isAvailable: true,
        items: [
          {
            id: 'hb5f1',
            name: 'Roasted Chickpeas',
            price: 99,
            rating: 4.2,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'hb5f2',
            name: 'Protein Bar',
            price: 89,
            rating: 4.1,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'hb5f3',
            name: 'Veg Sandwich',
            price: 129,
            rating: 4.3,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'hb5f4',
            name: 'Paneer Wrap',
            price: 179,
            rating: 4.4,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
    ],
  },

  // =====================================================
  // 6. BIRYANI HOUSE
  // =====================================================
  {
    id: '6',
    name: 'Biryani House',
    rating: 4.8,
    reviews: 2600,
    category: 'Biryani • Indian',
    place: 'Southside',
    time: '30-35 min',
    price: '$$',
    delivery: 'Free delivery',
    isOpen: true,
    image: require('../assets/images/restaurants/pexels-pixabay-262978.jpg'),

    foodCategories: [
      {
        id: 'bhh1',
        title: 'Recommended',
        type: 'recommended',
        isAvailable: true,
        items: [
          {
            id: 'bhh1f1',
            name: 'Hyderabadi Chicken Biryani',
            price: 299,
            rating: 4.8,
            isVeg: false,
            //  image: require('../assets/images/foods/rice.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'bhh1f2',
            name: 'Mutton Biryani',
            price: 349,
            rating: 4.7,
            isVeg: false,
            //  image: require('../assets/images/foods/rice.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'bhh1f3',
            name: 'Veg Dum Biryani',
            price: 249,
            rating: 4.5,
            isVeg: true,
            //  image: require('../assets/images/foods/rice.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'bhh1f4',
            name: 'Egg Biryani',
            price: 229,
            rating: 4.6,
            isVeg: false,
            //  image: require('../assets/images/foods/rice.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
      {
        id: 'bhh2',
        title: 'Biryanis',
        type: 'rice',
        isAvailable: true,
        items: [
          {
            id: 'bhh2f1',
            name: 'Chicken Dum Biryani',
            price: 289,
            rating: 4.7,
            isVeg: false,
            //  image: require('../assets/images/foods/rice.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'bhh2f2',
            name: 'Paneer Biryani',
            price: 259,
            rating: 4.5,
            isVeg: true,
            //  image: require('../assets/images/foods/rice.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'bhh2f3',
            name: 'Fish Biryani',
            price: 319,
            rating: 4.6,
            isVeg: false,
            //  image: require('../assets/images/foods/rice.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'bhh2f4',
            name: 'Mushroom Biryani',
            price: 239,
            rating: 4.4,
            isVeg: true,
            //  image: require('../assets/images/foods/rice.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
      {
        id: 'bhh3',
        title: 'Starters',
        type: 'snacks',
        isAvailable: true,
        items: [
          {
            id: 'bhh3f1',
            name: 'Chicken 65',
            price: 219,
            rating: 4.6,
            isVeg: false,
            //  image: require('../assets/images/foods/chicken.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'bhh3f2',
            name: 'Paneer 65',
            price: 199,
            rating: 4.4,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'bhh3f3',
            name: 'Chicken Tikka',
            price: 249,
            rating: 4.7,
            isVeg: false,
            //  image: require('../assets/images/foods/chicken.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'bhh3f4',
            name: 'Veg Pakora',
            price: 149,
            rating: 4.3,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
      {
        id: 'bhh4',
        title: 'Curries',
        type: 'chicken',
        isAvailable: true,
        items: [
          {
            id: 'bhh4f1',
            name: 'Butter Chicken',
            price: 279,
            rating: 4.7,
            isVeg: false,
            //  image: require('../assets/images/foods/chicken.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'bhh4f2',
            name: 'Chicken Curry',
            price: 259,
            rating: 4.6,
            isVeg: false,
            //  image: require('../assets/images/foods/chicken.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'bhh4f3',
            name: 'Paneer Butter Masala',
            price: 239,
            rating: 4.5,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'bhh4f4',
            name: 'Dal Tadka',
            price: 179,
            rating: 4.4,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
      {
        id: 'bhh5',
        title: 'Desserts & Drinks',
        type: 'dessert',
        isAvailable: true,
        items: [
          {
            id: 'bhh5f1',
            name: 'Gulab Jamun',
            price: 99,
            rating: 4.4,
            isVeg: true,
            //  image: require('../assets/images/foods/dessert.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'bhh5f2',
            name: 'Double Ka Meetha',
            price: 129,
            rating: 4.5,
            isVeg: true,
            //  image: require('../assets/images/foods/dessert.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'bhh5f3',
            name: 'Butter Milk',
            price: 59,
            rating: 4.2,
            isVeg: true,
            //  image: require('../assets/images/foods/drink.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'bhh5f4',
            name: 'Soft Drink',
            price: 79,
            rating: 4.1,
            isVeg: true,
            //  image: require('../assets/images/foods/drink.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
    ],
  },

  // =====================================================
  // 7. CAFÉ BREW
  // =====================================================
  {
    id: '7',
    name: 'Cafe Brew',
    rating: 4.5,
    reviews: 1400,
    category: 'Cafe • Beverages',
    place: 'Central',
    time: '20-25 min',
    price: '$$',
    delivery: '₹20 delivery',
    isOpen: true,
    image: require('../assets/images/restaurants/pexels-vanmalidate-842142.jpg'),

    foodCategories: [
      {
        id: 'cb1',
        title: 'Recommended',
        type: 'recommended',
        isAvailable: true,
        items: [
          {
            id: 'cb1f1',
            name: 'Cappuccino',
            price: 149,
            rating: 4.6,
            isVeg: true,
            //  image: require('../assets/images/foods/drink.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'cb1f2',
            name: 'Cold Brew Coffee',
            price: 169,
            rating: 4.7,
            isVeg: true,
            //  image: require('../assets/images/foods/drink.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'cb1f3',
            name: 'Chocolate Brownie',
            price: 129,
            rating: 4.5,
            isVeg: true,
            //  image: require('../assets/images/foods/dessert.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'cb1f4',
            name: 'Grilled Sandwich',
            price: 179,
            rating: 4.4,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
      {
        id: 'cb2',
        title: 'Coffee',
        type: 'drinks',
        isAvailable: true,
        items: [
          {
            id: 'cb2f1',
            name: 'Espresso',
            price: 119,
            rating: 4.4,
            isVeg: true,
            //  image: require('../assets/images/foods/drink.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'cb2f2',
            name: 'Latte',
            price: 159,
            rating: 4.5,
            isVeg: true,
            //  image: require('../assets/images/foods/drink.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'cb2f3',
            name: 'Mocha',
            price: 169,
            rating: 4.6,
            isVeg: true,
            //  image: require('../assets/images/foods/drink.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'cb2f4',
            name: 'Americano',
            price: 139,
            rating: 4.3,
            isVeg: true,
            //  image: require('../assets/images/foods/drink.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
      {
        id: 'cb3',
        title: 'Snacks',
        type: 'snacks',
        isAvailable: true,
        items: [
          {
            id: 'cb3f1',
            name: 'Veg Sandwich',
            price: 149,
            rating: 4.3,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'cb3f2',
            name: 'Paneer Wrap',
            price: 179,
            rating: 4.4,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'cb3f3',
            name: 'French Fries',
            price: 119,
            rating: 4.2,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'cb3f4',
            name: 'Cheese Toast',
            price: 139,
            rating: 4.3,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
      {
        id: 'cb4',
        title: 'Desserts',
        type: 'dessert',
        isAvailable: true,
        items: [
          {
            id: 'cb4f1',
            name: 'Chocolate Cake',
            price: 159,
            rating: 4.5,
            isVeg: true,
            //  image: require('../assets/images/foods/dessert.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'cb4f2',
            name: 'Cheesecake',
            price: 179,
            rating: 4.6,
            isVeg: true,
            //  image: require('../assets/images/foods/dessert.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'cb4f3',
            name: 'Blueberry Muffin',
            price: 129,
            rating: 4.4,
            isVeg: true,
            //  image: require('../assets/images/foods/dessert.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'cb4f4',
            name: 'Croissant',
            price: 119,
            rating: 4.3,
            isVeg: true,
            //  image: require('../assets/images/foods/dessert.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
      {
        id: 'cb5',
        title: 'Cold Drinks',
        type: 'drinks',
        isAvailable: true,
        items: [
          {
            id: 'cb5f1',
            name: 'Iced Latte',
            price: 159,
            rating: 4.5,
            isVeg: true,
            //  image: require('../assets/images/foods/drink.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'cb5f2',
            name: 'Chocolate Shake',
            price: 169,
            rating: 4.6,
            isVeg: true,
            //  image: require('../assets/images/foods/drink.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'cb5f3',
            name: 'Strawberry Shake',
            price: 169,
            rating: 4.5,
            isVeg: true,
            //  image: require('../assets/images/foods/drink.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'cb5f4',
            name: 'Lemon Iced Tea',
            price: 139,
            rating: 4.4,
            isVeg: true,
            //  image: require('../assets/images/foods/drink.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
    ],
  },

  // =====================================================
  // 8. STREET SNACKS
  // =====================================================
  {
    id: '8',
    name: 'Street Snacks',
    rating: 4.4,
    reviews: 1700,
    category: 'Street Food • Snacks',
    place: 'Market',
    time: '15-20 min',
    price: '$',
    delivery: 'Free delivery',
    isOpen: true,
    image: require('../assets/images/restaurants/pexels-chanwalrus-941861.jpg'),

    foodCategories: [
      {
        id: 'ss1',
        title: 'Recommended',
        type: 'recommended',
        isAvailable: true,
        items: [
          {
            id: 'ss1f1',
            name: 'Pani Puri',
            price: 79,
            rating: 4.6,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'ss1f2',
            name: 'Vada Pav',
            price: 49,
            rating: 4.5,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'ss1f3',
            name: 'Samosa',
            price: 39,
            rating: 4.4,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'ss1f4',
            name: 'Pav Bhaji',
            price: 149,
            rating: 4.7,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
      {
        id: 'ss2',
        title: 'Chaat',
        type: 'snacks',
        isAvailable: true,
        items: [
          {
            id: 'ss2f1',
            name: 'Bhel Puri',
            price: 99,
            rating: 4.3,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'ss2f2',
            name: 'Sev Puri',
            price: 109,
            rating: 4.4,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'ss2f3',
            name: 'Dahi Puri',
            price: 119,
            rating: 4.5,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'ss2f4',
            name: 'Aloo Chaat',
            price: 99,
            rating: 4.3,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
      {
        id: 'ss3',
        title: 'Fried Snacks',
        type: 'snacks',
        isAvailable: true,
        items: [
          {
            id: 'ss3f1',
            name: 'French Fries',
            price: 99,
            rating: 4.2,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'ss3f2',
            name: 'Cheese Corn Balls',
            price: 129,
            rating: 4.4,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'ss3f3',
            name: 'Veg Cutlet',
            price: 79,
            rating: 4.3,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'ss3f4',
            name: 'Paneer Pakora',
            price: 139,
            rating: 4.5,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
      {
        id: 'ss4',
        title: 'Rolls',
        type: 'snacks',
        isAvailable: true,
        items: [
          {
            id: 'ss4f1',
            name: 'Veg Roll',
            price: 129,
            rating: 4.3,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'ss4f2',
            name: 'Paneer Roll',
            price: 159,
            rating: 4.4,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'ss4f3',
            name: 'Cheese Roll',
            price: 149,
            rating: 4.3,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'ss4f4',
            name: 'Mayo Veg Roll',
            price: 139,
            rating: 4.2,
            isVeg: true,
            //  image: require('../assets/images/foods/snacks.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
      {
        id: 'ss5',
        title: 'Beverages',
        type: 'drinks',
        isAvailable: true,
        items: [
          {
            id: 'ss5f1',
            name: 'Masala Chaas',
            price: 49,
            rating: 4.2,
            isVeg: true,
            //  image: require('../assets/images/foods/drink.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'ss5f2',
            name: 'Fresh Lime Soda',
            price: 69,
            rating: 4.3,
            isVeg: true,
            //  image: require('../assets/images/foods/drink.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'ss5f3',
            name: 'Cold Drink',
            price: 59,
            rating: 4.1,
            isVeg: true,
            //  image: require('../assets/images/foods/drink.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'ss5f4',
            name: 'Water Bottle',
            price: 29,
            rating: 4.0,
            isVeg: true,
            //  image: require('../assets/images/foods/drink.jpg'),
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
    ],
  },
  {
    id: '9',
    name: 'Punjabi Tadka',
    rating: 4.5,
    reviews: 2300,
    category: 'North Indian • Punjabi',
    place: 'City Center',
    time: '25-30 min',
    price: '$$',
    delivery: 'Free delivery',
    isOpen: true,
    // image: require('../assets/images/restaurants/punjabi.jpg'),

    foodCategories: [
      {
        id: 'pt1',
        title: 'Recommended',
        type: 'recommended',
        isAvailable: true,
        items: [
          {
            id: 'pt1f1',
            name: 'Butter Chicken',
            price: 249,
            rating: 4.7,
            isVeg: false,
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'pt1f2',
            name: 'Paneer Butter Masala',
            price: 229,
            rating: 4.6,
            isVeg: true,
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
      {
        id: 'pt2',
        title: 'Breads',
        type: 'breads',
        isAvailable: true,
        items: [
          {
            id: 'pt2f1',
            name: 'Butter Naan',
            price: 39,
            rating: 4.5,
            isVeg: true,
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'pt2f2',
            name: 'Tandoori Roti',
            price: 29,
            rating: 4.4,
            isVeg: true,
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
    ],
  },

  {
    id: '10',
    name: 'South Spice',
    rating: 4.6,
    reviews: 3100,
    category: 'South Indian',
    place: 'Main Road',
    time: '20-25 min',
    price: '$',
    delivery: 'Free delivery',
    isOpen: true,
    // image: require('../assets/images/restaurants/south.jpg'),

    foodCategories: [
      {
        id: 'ss10_1',
        title: 'Recommended',
        type: 'recommended',
        isAvailable: true,
        items: [
          {
            id: 'ss10f1',
            name: 'Masala Dosa',
            price: 99,
            rating: 4.7,
            isVeg: true,
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'ss10f2',
            name: 'Idli Sambar',
            price: 69,
            rating: 4.6,
            isVeg: true,
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
      {
        id: 'ss10_2',
        title: 'Rice',
        type: 'rice',
        isAvailable: true,
        items: [
          {
            id: 'ss10f3',
            name: 'Curd Rice',
            price: 79,
            rating: 4.4,
            isVeg: true,
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
    ],
  },

  {
    id: '11',
    name: 'Burger Hub',
    rating: 4.3,
    reviews: 1800,
    category: 'Burgers • Fast Food',
    place: 'Mall',
    time: '15-20 min',
    price: '$$',
    delivery: '₹29 delivery',
    isOpen: true,
    // image: require('../assets/images/restaurants/burger.jpg'),

    foodCategories: [
      {
        id: 'bh1',
        title: 'Burgers',
        type: 'fastfood',
        isAvailable: true,
        items: [
          {
            id: 'bhf1',
            name: 'Veg Burger',
            price: 99,
            rating: 4.3,
            isVeg: true,
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'bhf2',
            name: 'Cheese Burger',
            price: 129,
            rating: 4.4,
            isVeg: true,
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
    ],
  },

  {
    id: '12',
    name: 'Pizza Corner',
    rating: 4.4,
    reviews: 2600,
    category: 'Pizza • Italian',
    place: 'Downtown',
    time: '25-30 min',
    price: '$$',
    delivery: 'Free delivery',
    isOpen: true,
    // image: require('../assets/images/restaurants/pizza.jpg'),

    foodCategories: [
      {
        id: 'pc1',
        title: 'Pizzas',
        type: 'pizza',
        isAvailable: true,
        items: [
          {
            id: 'pcf1',
            name: 'Margherita',
            price: 199,
            rating: 4.6,
            isVeg: true,
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'pcf2',
            name: 'Farmhouse',
            price: 249,
            rating: 4.5,
            isVeg: true,
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
    ],
  },

  // {
  //   id: '13',
  //   name: 'Biryani House',
  //   rating: 4.7,
  //   reviews: 4200,
  //   category: 'Biryani • Mughlai',
  //   place: 'Old City',
  //   time: '30-35 min',
  //   price: '$$',
  //   delivery: 'Free delivery',
  //   isOpen: true,
  //   image: require('../assets/images/restaurants/biryani.jpg'),

  //   foodCategories: [
  //     {
  //       id: 'bh13',
  //       title: 'Biryani',
  //       type: 'biryani',
  //       isAvailable: true,
  //       items: [
  //         {
  //           id: 'bh13f1',
  //           name: 'Chicken Biryani',
  //           price: 279,
  //           rating: 4.8,
  //           isVeg: false,
  //         },
  //         {
  //           id: 'bh13f2',
  //           name: 'Veg Biryani',
  //           price: 199,
  //           rating: 4.5,
  //           isVeg: true,
  //         },
  //       ],
  //     },
  //   ],
  // },

  {
    id: '14',
    name: 'Chinese Wok',
    rating: 4.2,
    reviews: 1600,
    category: 'Chinese • Asian',
    place: 'Market',
    time: '20-25 min',
    price: '$',
    delivery: '₹19 delivery',
    isOpen: true,
    // image: require('../assets/images/restaurants/chinese.jpg'),

    foodCategories: [
      {
        id: 'cw1',
        title: 'Noodles',
        type: 'chinese',
        isAvailable: true,
        items: [
          {
            id: 'cw1f1',
            name: 'Hakka Noodles',
            price: 119,
            rating: 4.3,
            isVeg: true,
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'cw1f2',
            name: 'Chilli Garlic Noodles',
            price: 139,
            rating: 4.4,
            isVeg: true,
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
    ],
  },

  {
    id: '15',
    name: 'Sweet Tooth',
    rating: 4.6,
    reviews: 2900,
    category: 'Desserts • Bakery',
    place: 'City Center',
    time: '15-20 min',
    price: '$',
    delivery: 'Free delivery',
    isOpen: true,
    // image: require('../assets/images/restaurants/dessert.jpg'),

    foodCategories: [
      {
        id: 'st1',
        title: 'Desserts',
        type: 'dessert',
        isAvailable: true,
        items: [
          {
            id: 'stf1',
            name: 'Chocolate Cake',
            price: 149,
            rating: 4.7,
            isVeg: true,
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'stf2',
            name: 'Brownie',
            price: 99,
            rating: 4.6,
            isVeg: true,
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
    ],
  },

  {
    id: '16',
    name: 'Cafe Brew',
    rating: 4.4,
    reviews: 2100,
    category: 'Cafe • Beverages',
    place: 'High Street',
    time: '15-20 min',
    price: '$$',
    delivery: 'Free delivery',
    isOpen: true,
    // image: require('../assets/images/restaurants/cafe.jpg'),

    foodCategories: [
      {
        id: 'cb1',
        title: 'Coffee',
        type: 'drinks',
        isAvailable: true,
        items: [
          {
            id: 'cbf1',
            name: 'Cappuccino',
            price: 129,
            rating: 4.5,
            isVeg: true,
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
          {
            id: 'cbf2',
            name: 'Cold Coffee',
            price: 149,
            rating: 4.6,
            isVeg: true,
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
    ],
  },

  {
    id: '17',
    name: 'Healthy Bowl',
    rating: 4.3,
    reviews: 1400,
    category: 'Healthy • Salads',
    place: 'Tech Park',
    time: '20-25 min',
    price: '$$',
    delivery: 'Free delivery',
    isOpen: true,
    // image: require('../assets/images/restaurants/healthy.jpg'),

    foodCategories: [
      {
        id: 'hb1',
        title: 'Bowls',
        type: 'healthy',
        isAvailable: true,
        items: [
          {
            id: 'hbf1',
            name: 'Veg Salad Bowl',
            price: 179,
            rating: 4.4,
            isVeg: true,
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
    ],
  },

  {
    id: '18',
    name: 'Tandoor Express',
    rating: 4.5,
    reviews: 2700,
    category: 'North Indian • Tandoor',
    place: 'Ring Road',
    time: '25-30 min',
    price: '$$',
    delivery: 'Free delivery',
    isOpen: true,
    // image: require('../assets/images/restaurants/tandoor.jpg'),

    foodCategories: [
      {
        id: 'te1',
        title: 'Tandoor',
        type: 'tandoor',
        isAvailable: true,
        items: [
          {
            id: 'tef1',
            name: 'Paneer Tikka',
            price: 229,
            rating: 4.6,
            isVeg: true,
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
    ],
  },

  {
    id: '19',
    name: 'Roll Factory',
    rating: 4.2,
    reviews: 1200,
    category: 'Rolls • Fast Food',
    place: 'Market',
    time: '15-20 min',
    price: '$',
    delivery: '₹29 delivery',
    isOpen: true,
    // image: require('../assets/images/restaurants/rolls.jpg'),

    foodCategories: [
      {
        id: 'rf1',
        title: 'Rolls',
        type: 'rolls',
        isAvailable: true,
        items: [
          {
            id: 'rff1',
            name: 'Paneer Roll',
            price: 129,
            rating: 4.3,
            isVeg: true,
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
    ],
  },

  {
    id: '20',
    name: 'Midnight Bites',
    rating: 4.4,
    reviews: 1900,
    category: 'Fast Food • Late Night',
    place: 'City Center',
    time: '20-25 min',
    price: '$$',
    delivery: 'Free delivery',
    isOpen: true,
    // image: require('../assets/images/restaurants/night.jpg'),

    foodCategories: [
      {
        id: 'mb1',
        title: 'Snacks',
        type: 'snacks',
        isAvailable: true,
        items: [
          {
            id: 'mbf1',
            name: 'Cheese Fries',
            price: 149,
            rating: 4.5,
            isVeg: true,
            image: {
              uri: 'https://your-domain.com/images/foodCategory/burger.png',
            },
          },
        ],
      },
    ],
  },
];

// ===============
export const popularDishes = [
  {
    id: '1',
    name: 'Cheese Burger',
    rating: 4.8,
    category: 'Burger • Fast Food',
    price: '$5.99',
  },
  {
    id: '2',
    name: 'Margherita Pizza',
    rating: 4.7,
    category: 'Pizza • Italian',
    price: '$8.99',
  },
  {
    id: '3',
    name: 'Caesar Salad',
    rating: 4.5,
    category: 'Healthy • Salads',
    price: '$6.49',
  },
];

export const offers = [
  {
    id: '1',
    title: '20% Off on Pizzas',
    description: 'Valid on all pizzas',
    code: 'PIZZA20',
  },
  {
    id: '2',
    title: 'Free Delivery',
    description: 'On orders above $20',
    code: 'FREEDEL',
  },
  {
    id: '3',
    title: 'Buy 1 Get 1',
    description: 'On selected burgers',
    code: 'BOGO',
  },
];

export const quickBites = [
  {
    id: '1',
    name: 'Fries',
    rating: 4.6,
    category: 'Snacks',
    time: '10 min',
    price: '$2.99',
  },
  {
    id: '2',
    name: 'Chicken Nuggets',
    rating: 4.4,
    category: 'Snacks',
    time: '15 min',
    price: '$4.99',
  },
  {
    id: '3',
    name: 'Ice Cream',
    rating: 4.9,
    category: 'Dessert',
    time: '5 min',
    price: '$3.49',
  },
];

export const bannerData = [
  {
    id: '1',
    image: require('../assets/images/Black and Yellow Simple Minimalist Burger Promotion Banner.png'),
  },
  {
    id: '2',
    image: require('../assets/images/Black White Simple Opening Banner.png'),
  },
  {
    id: '3',
    image: require('../assets/images/Red Modern Fried Chicken Grand Opening Promotion Banner.png'),
  },
  {
    id: '4',
    image: require('../assets/images/Red White Simple Minimalist Illustrative Pizza Promotion Banner.png'),
  },
];
