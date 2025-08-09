import p_img1 from '../assets/red tshirt.jpeg'
import p_img2 from '../assets/Women-floral.webp'
import p_img3 from '../assets/kids-party.webp'
import p_img4 from '../assets/Men-jean.webp'
import p_img5 from '../assets/wom-sweater.jpg'
import p_img6 from '../assets/men-hoodie.jpg'
import p_img7 from '../assets/womn-legin.jpg'
import p_img8 from '../assets/kids-t-shirt.jpg'
import p_img9 from '../assets/Men-T-black.jpg'
import p_img10 from '../assets/wmn-crop-top.jpg'
import p_img11 from '../assets/men-blazer.webp'
import p_img12 from '../assets/Wmn-anarkali.webp'
import p_img13 from '../assets/kid-winter-jack.jpg'
import p_img14 from '../assets/Men-Cargo-Jeans.jpg'
import p_img15 from '../assets/Wmn-tank-top.avif'
import p_img16 from '../assets/men-thermal-inner.jpg'
import p_img17 from '../assets/Wmn-palzzo.avif'
import p_img18 from '../assets/kids-shorts.webp'
import p_img19 from '../assets/wmn-blazer.webp'
import p_img20 from '../assets/Men-polo-tshirt.webp'
// import p_img21 from '../assets/Whitedress.jpg'
// import p_img22 from '../assets/WhiteShirt.jpg'
// import p_img23 from '../assets/WhiteShoes.jpg'
// import p_img24 from '../assets/YellowShoes.jpg'
import Fklogo from '../assets/fklogo_.svg'
import img001 from '../assets/slidershop.webp'
import img002 from '../assets/shopslider.webp'
import img003 from '../assets/slidebarr1.jpg'
import img004 from '../assets/slidebarr2.jpg'
import img005 from '../assets/slidebar3.jpg'
import AboutImg from '../assets/AboutImage.jpg'
import ContactImg from '../assets/contact-us.avif'


import CartIcon from '../assets/Cart-icon.svg'
import StarIcon from '../assets/starIcon.svg'
import CrossIcon from '../assets/cross-icon.svg'
import deleteIcon from '../assets/delete-icon.svg'
import DropDown from '../assets/dropdown-icon.svg'
import ExchangeIcon from '../assets/exchangeicon.svg'
import MenuIcon from '../assets/menuIcon.svg'
import SearchIcon from '../assets/search-icon.svg'
import ProfileIcon from '../assets/profile-icon.svg'
import CustomerIcon from '../assets/customerSuport.svg'
import QualityIcon from '../assets/quality.svg'


export const assets = {
  AboutImg,
  ContactImg,
  img001,
  img002,
  img003,
  img004,
  img005,
    Fklogo,
    SearchIcon,
    ProfileIcon,
    StarIcon,
    CartIcon,
    CrossIcon,
    deleteIcon,
    DropDown,
    ExchangeIcon,
    MenuIcon,
    CustomerIcon,
    QualityIcon
}

export const products = 
[

  {
    "id": 1,
    "name": "Men's Casual Shirt",
    "description": "Comfortable cotton shirt perfect for daily wear.",
    "price": 999,
    "image": [p_img1,p_img1,p_img1],
    "category": "Men",
    "subCategory": "Topwear",
    "sizes": ["M", "L", "XL"],
    "date": "2025-08-01",
    "bestseller": true
  },
  {
    "id": 2,
    "name": "Women's Floral Kurti",
    "description": "Elegant kurti with floral prints.",
    "price": 1199,
    "image": [p_img2,p_img2],
    "category": "Women",
    "subCategory": "Topwear",
    "sizes": ["S", "M", "L"],
    "date": "2025-08-02",
    "bestseller": false
  },
  {
    "id": 3,
    "name": "Kids Party Dress",
    "description": "Cute party wear for girls aged 3-6.",
    "price": 899,
    "image": [p_img3],
    "category": "Kids",
    "subCategory": "Topwear",
    "sizes": ["S", "M"],
    "date": "2025-07-30",
    "bestseller": true
  },
  {
    "id": 4,
    "name": "Men's Denim Jeans",
    "description": "Stylish and durable denim jeans.",
    "price": 1499,
    "image": [p_img4],
    "category": "Men",
    "subCategory": "Bottomwear",
    "sizes": ["M", "L", "XL"],
    "date": "2025-08-04",
    "bestseller": false
  },
  {
    "id": 5,
    "name": "Women's Wool Sweater",
    "description": "Warm sweater for winter.",
    "price": 1299,
    "image": [p_img5],
    "category": "Women",
    "subCategory": "Winterwear",
    "sizes": ["M", "L"],
    "date": "2025-07-28",
    "bestseller": true
  },
  {
    "id": 6,
    "name": "Men's Hoodie",
    "description": "Casual hoodie with front pocket.",
    "price": 1399,
    "image": [p_img6],
    "category": "Men",
    "subCategory": "Winterwear",
    "sizes": ["L", "XL"],
    "date": "2025-07-29",
    "bestseller": false
  },
  {
    "id": 7,
    "name": "Women's Leggings",
    "description": "Stretchable leggings for everyday use.",
    "price": 599,
    "image": [p_img7],
    "category": "Women",
    "subCategory": "Bottomwear",
    "sizes": ["S", "M", "L"],
    "date": "2025-08-01",
    "bestseller": false
  },
  {
    "id": 8,
    "name": "Kids T-Shirt",
    "description": "Graphic printed cotton t-shirt.",
    "price": 499,
    "image": [p_img8],
    "category": "Kids",
    "subCategory": "Topwear",
    "sizes": ["S", "M"],
    "date": "2025-08-05",
    "bestseller": true
  },
  {
    "id": 9,
    "name": "Men's T-Shirt",
    "description": "Plain t-shirt made of 100% cotton.",
    "price": 799,
    "image": [p_img9],
    "category": "Men",
    "subCategory": "Topwear",
    "sizes": ["M", "L", "XL"],
    "date": "2025-08-06",
    "bestseller": true
  },
  {
    "id": 10,
    "name": "Women's Crop Top",
    "description": "Trendy crop top for casual outings.",
    "price": 699,
    "image": [p_img10],
    "category": "Women",
    "subCategory": "Topwear",
    "sizes": ["S", "M"],
    "date": "2025-07-25",
    "bestseller": false
  },
  {
    "id": 11,
    "name": "Men's Blazer",
    "description": "Formal blazer for parties and meetings.",
    "price": 2199,
    "image": [p_img11],
    "category": "Men",
    "subCategory": "Topwear",
    "sizes": ["L", "XL"],
    "date": "2025-07-30",
    "bestseller": true
  },
  {
    "id": 12,
    "name": "Women's Anarkali Dress",
    "description": "Stylish Anarkali for festive occasions.",
    "price": 1899,
    "image": [p_img12],
    "category": "Women",
    "subCategory": "Topwear",
    "sizes": ["M", "L"],
    "date": "2025-08-02",
    "bestseller": true
  },
  {
    "id": 13,
    "name": "Kids Winter Jacket",
    "description": "Padded warm jacket for kids.",
    "price": 1099,
    "image": [p_img13],
    "category": "Kids",
    "subCategory": "Topwear",
    "sizes": ["S", "M"],
    "date": "2025-07-26",
    "bestseller": false
  },
  {
    "id": 14,
    "name": "Men's Cargo Pants",
    "description": "Durable cargo pants with multiple pockets.",
    "price": 1299,
    "image": [p_img14],
    "category": "Men",
    "subCategory": "Bottomwear",
    "sizes": ["M", "L", "XL"],
    "date": "2025-08-01",
    "bestseller": true
  },
  {
    "id": 15,
    "name": "Women's Tank Top",
    "description": "Lightweight and breathable tank top.",
    "price": 499,
    "image": [p_img15],
    "category": "Women",
    "subCategory": "Topwear",
    "sizes": ["S", "M"],
    "date": "2025-08-05",
    "bestseller": false
  },
  {
    "id": 16,
    "name": "Men's Thermal Innerwear",
    "description": "Keeps you warm during winter.",
    "price": 599,
    "image": [p_img16],
    "category": "Men",
    "subCategory": "Topwear",
    "sizes": ["M", "L"],
    "date": "2025-07-28",
    "bestseller": false
  },
  {
    "id": 17,
    "name": "Women's Palazzo Pants",
    "description": "Wide-leg palazzo for comfort and style.",
    "price": 899,
    "image": [p_img17],
    "category": "Women",
    "subCategory": "Bottomwear",
    "sizes": ["M", "L"],
    "date": "2025-07-29",
    "bestseller": true
  },
  {
    "id": 18,
    "name": "Kids Shorts",
    "description": "Comfy summer shorts for kids.",
    "price": 399,
    "image": [p_img18],
    "category": "Kids",
    "subCategory": "Bottomwear",
    "sizes": ["S", "M"],
    "date": "2025-08-03",
    "bestseller": false
  },
  {
    "id": 19,
    "name": "Women's Blazer",
    "description": "Formal blazer tailored for women.",
    "price": 2099,
    "image": [p_img19],
    "category": "Women",
    "subCategory": "Topwear",
    "sizes": ["M", "L"],
    "date": "2025-07-27",
    "bestseller": true
  },
  {
    "id": 20,
    "name": "Men's Polo T-Shirt",
    "description": "Smart polo for casual or office wear.",
    "price": 999,
    "image": [p_img20],
    "category": "Men",
    "subCategory": "Topwear",
    "sizes": ["M", "L", "XL"],
    "date": "2025-08-06",
    "bestseller": false
  }


  // {
  //   "id": 1,
  //   "name": "Men-Shirt",
  //   "description": "A timeless shirt made of 100% organic cotton.",
  //   "price": 19.99,
  //   "image": [p_img1,p_img1,p_img1,p_img5],
  //   "category": "Clothing",
  //   "subcategory": "Shirts",
  //   "sizes": ["S", "M", "L", "XL"],
  //   "date": "2025-06-15",
  //   "bestseller": true
  // },
  //   {
  //   "id": 2,
  //   "name": "Canvas Backpack",
  //   "description": "Durable canvas backpack with padded straps and multiple compartments.",
  //   "price": 59.95,
  //   "image": [p_img2],
  //   "category": "Accessories",
  //   "subcategory": "Bags",
  //   "sizes": ["s"],
  //   "date": "2025-06-10",
  //   "bestseller": true
  // },
  // {
  //   "id": 3,
  //   "name": "Hiking Backpack",
  //   "description": "Durable backpack with multiple compartments for outdoor adventures.",
  //   "price": 89.00,
  //   "image": [p_img3],
  //   "category": "Outdoors",
  //   "subcategory": "Gear",
  //   "sizes": ["25L", "35L"],
  //   "date": "2025-06-20",
  //   "bestseller": false
  // },
  //  {
  //   "id": 4,
  //   "name": "Running Shoes",
  //   "description": "Lightweight running shoes with cushioned sole.",
  //   "price": 74.99,
  //   "image": [p_img4],
  //   "category": "Footwear",
  //   "subcategory": "Sports",
  //   "sizes": ["7", "8", "9", "10", "11"],
  //   "date": "2025-05-25",
  //   "bestseller": true
  // },
  // {
  //   "id": 3,
  //   "name": "Bluetooth Wireless Headphones",
  //   "description": "Noise-cancelling over-ear headphones with 30-hour battery life.",
  //   "price": 89.95,
  //   "image": [p_img2],
  //   "category": "Electronics",
  //   "subcategory": "Audio",
  //   "sizes": ["s"],
  //   "date": "2025-06-12",
  //   "bestseller": true
  // },

  // {
  //   "id": 3,
  //   "name": "Leather Wallet",
  //   "description": "Minimalist wallet made from genuine leather.",
  //   "price": 39.50,
  //   "image": [p_img3],
  //   "category": "Accessories",
  //   "subcategory": "Wallets",
  //   "sizes": ["T"],
  //   "date": "2025-06-05",
  //   "bestseller": false
  // },

  // {
  //   "id": 5,
  //   "name": "Smart Watch Series X",
  //   "description": "Fitness tracking and notifications on your wrist.",
  //   "price": 199.99,
  //   "image": [p_img5],
  //   "category": "Electronics",
  //   "subcategory": "Wearables",
  //   "sizes": ["g"],
  //   "date": "2025-06-01",
  //   "bestseller": false
  // },
  // {
  //   "id": 6,
  //   "name": "Yoga Mat",
  //   "description": "Eco-friendly, non-slip yoga mat for all levels.",
  //   "price": 29.99,
  //   "image": [p_img6],
  //   "category": "Fitness",
  //   "subcategory": "Yoga",
  //   "sizes": [],
  //   "date": "2025-06-10",
  //   "bestseller": true
  // },
  // {
  //   "id": 7,
  //   "name": "Denim Jacket",
  //   "description": "Classic blue denim jacket with a vintage wash.",
  //   "price": 59.95,
  //   "image": [p_img7],
  //   "category": "Clothing",
  //   "subcategory": "Outerwear",
  //   "sizes": ["S", "M", "L", "XL"],
  //   "date": "2025-05-30",
  //   "bestseller": false
  // },
  // {
  //   "id": 8,
  //   "name": "Wireless Charger Pad",
  //   "description": "Fast wireless charging pad compatible with most devices.",
  //   "price": 24.99,
  //   "image": [p_img8],
  //   "category": "Electronics",
  //   "subcategory": "Chargers",
  //   "sizes": ["u"],
  //   "date": "2025-06-14",
  //   "bestseller": true
  // },
  // {
  //   "id": 9,
  //   "name": "Stainless Steel Water Bottle",
  //   "description": "Keeps beverages cold for 24 hours or hot for 12 hours.",
  //   "price": 22.50,
  //   "image": [p_img9],
  //   "category": "Accessories",
  //   "subcategory": "Hydration",
  //   "sizes": ["500ml", "750ml"],
  //   "date": "2025-06-03",
  //   "bestseller": true
  // },
  // {
  //   "id": 10,
  //   "name": "Hiking Backpack",
  //   "description": "Durable backpack with multiple compartments for outdoor adventures.",
  //   "price": 89.00,
  //   "image": [p_img10],
  //   "category": "Outdoors",
  //   "subcategory": "Gear",
  //   "sizes": ["25L", "35L"],
  //   "date": "2025-06-20",
  //   "bestseller": false
  // },
  // {
  //   "id": 11,
  //   "name": "Slim Fit Chinos",
  //   "description": "Comfortable chinos with a tapered fit.",
  //   "price": 45.00,
  //   "image": [p_img11],
  //   "category": "Clothing",
  //   "subcategory": "Pants",
  //   "sizes": ["30", "32", "34", "36"],
  //   "date": "2025-05-28",
  //   "bestseller": false
  // },
  // {
  //   "id": 12,
  //   "name": "LED Desk Lamp",
  //   "description": "Adjustable lamp with touch controls and USB port.",
  //   "price": 34.75,
  //   "image": [p_img12],
  //   "category": "Home",
  //   "subcategory": "Lighting",
  //   "sizes": [],
  //   "date": "2025-06-08",
  //   "bestseller": true
  // },
  // {
  //   "id": 13,
  //   "name": "Graphic Hoodie",
  //   "description": "Soft hoodie featuring a bold front graphic design.",
  //   "price": 49.99,
  //   "image": [p_img13],
  //   "category": "Clothing",
  //   "subcategory": "Hoodies",
  //   "sizes": ["S", "M", "L", "XL"],
  //   "date": "2025-06-18",
  //   "bestseller": false
  // },
  // {
  //   "id": 14,
  //   "name": "Wireless Mouse",
  //   "description": "Ergonomic mouse with long battery life and fast response.",
  //   "price": 19.99,
  //   "image": [p_img14],
  //   "category": "Electronics",
  //   "subcategory": "Peripherals",
  //   "sizes": ["L"],
  //   "date": "2025-06-11",
  //   "bestseller": true
  // },
  // {
  //   "id": 15,
  //   "name": "Sunglasses - Aviator Style",
  //   "description": "UV-protected, stylish aviator sunglasses.",
  //   "price": 27.50,
  //   "image": [p_img15],
  //   "category": "Accessories",
  //   "subcategory": "Eyewear",
  //   "sizes": ["M"],
  //   "date": "2025-06-17",
  //   "bestseller": true
  // },
  // {
  //   "id": 16,
  //   "name": "Digital Kitchen Scale",
  //   "description": "Precision food scale for cooking and baking.",
  //   "price": 18.99,
  //   "image": [p_img16],
  //   "category": "Home",
  //   "subcategory": "Kitchen",
  //   "sizes": ["w"],
  //   "date": "2025-06-06",
  //   "bestseller": false
  // },
  // {
  //   "id": 17,
  //   "name": "Foldable Laptop Stand",
  //   "description": "Portable aluminum laptop stand with adjustable angles.",
  //   "price": 29.95,
  //   "image": [p_img17],
  //   "category": "Electronics",
  //   "subcategory": "Accessories",
  //   "sizes": ["y"],
  //   "date": "2025-06-09",
  //   "bestseller": false
  // },
  // {
  //   "id": 18,
  //   "name": "Eco Bamboo Toothbrush (4-pack)",
  //   "description": "Sustainable bamboo toothbrushes with soft bristles.",
  //   "price": 12.49,
  //   "image": [p_img18],
  //   "category": "Personal Care",
  //   "subcategory": "Oral Hygiene",
  //   "sizes": ["v"],
  //   "date": "2025-06-04",
  //   "bestseller": true
  // },
  // {
  //   "id": 19,
  //   "name": "Trail Running Socks",
  //   "description": "Moisture-wicking socks with cushioned soles.",
  //   "price": 14.95,
  //   "image": [p_img19],
  //   "category": "Clothing",
  //   "subcategory": "Socks",
  //   "sizes": ["S", "M", "L"],
  //   "date": "2025-06-13",
  //   "bestseller": true
  // },
  //   {
  //   "id": 20,
  //   "name": "Basic Black T-Shirt",
  //   "description": "A comfortable black cotton t-shirt suitable for everyday wear.",
  //   "price": 15.99,
  //   "image": [p_img20],
  //   "category": "Clothing",
  //   "subcategory": "T-Shirts",
  //   "sizes": ["S", "M", "L", "XL"],
  //   "date": "2025-06-20",
  //   "bestseller": true
  // },
  // {
  //   "id": 21,
  //   "name": "Wireless Earbuds",
  //   "description": "Compact Bluetooth earbuds with noise reduction and a charging case.",
  //   "price": 49.99,
  //   "image": [p_img21],
  //   "category": "Electronics",
  //   "subcategory": "Audio",
  //   "sizes": ["e"],
  //   "date": "2025-06-18",
  //   "bestseller": false
  // },
  // {
  //   "id": 22,
  //   "name": "Canvas Backpack",
  //   "description": "Durable canvas backpack with padded straps and multiple compartments.",
  //   "price": 59.95,
  //   "image": [p_img22],
  //   "category": "Accessories",
  //   "subcategory": "Bags",
  //   "sizes": ["s"],
  //   "date": "2025-06-10",
  //   "bestseller": true
  // },
  // {
  //   "id": 23,
  //   "name": "Slim Fit Jeans",
  //   "description": "Stylish slim-fit jeans made with stretch denim for added comfort.",
  //   "price": 44.50,
  //   "image": [p_img23],
  //   "category": "Clothing",
  //   "subcategory": "Pants",
  //   "sizes": ["28", "30", "32", "34", "36"],
  //   "date": "2025-06-15",
  //   "bestseller": false
  // },
  // {
  //   "id": 24,
  //   "name": "Insulated Travel Mug",
  //   "description": "Stainless steel mug with vacuum insulation to keep drinks hot or cold.",
  //   "price": 21.00,
  //   "image": [p_img24],
  //   "category": "Home",
  //   "subcategory": "Kitchen",
  //   "sizes": ["12oz", "16oz"],
  //   "date": "2025-06-22",
  //   "bestseller": true
  // }
]
