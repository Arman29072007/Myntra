// // import React from 'react';
// import Slider from 'react-slick';
// import '../App.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import ProductCard from './ProductCard';




// const products  = [
//   {
//     // id:"1",
//     title: "Little Fashion, Big Smiles",
//     cta: "Shop Now!",
//     img: "https://th.bing.com/th/id/OIP.CFW2ZSRcXiUgA0J37D0ScQAAAA?w=186&h=233&c=7&r=0&o=7&pid=1.7&rm=3",
//     brand: "Nautinati, Nap Chief.."
//   },
//   {
//     title: "Trendy Looks for Tiny Stars",
//     cta: "Grab Now",
//     img: 'https://th.bing.com/th/id/OIP.ob-WPIlX8Vlgr22fSfVFAAHaHH?w=199&h=191&c=7&r=0&o=5&pid=1.7',
//     brand: 'Cartoon Network, StyloBug..',
//   },
//   {
//     title: "Where Elegance Meets Comfort",
//     cta: "Shop Now!",
//     img: 'https://th.bing.com/th/id/OIP.sX4-LJxW8bcUIGXKMpBGNgHaIV?w=159&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
//     brand: 'Kuber Industries, Haus & Kinder..',
//   },
//   {
//     title: "Shine Bright, Wear Beautiful",
//     cta: "Shop Now!",
//     img: 'https://th.bing.com/th/id/OIP._DWAibNErRhnYxZT4IO6rQHaHI?w=176&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
//     brand: 'Giva, Palmonas..',
//   },
//   {
//     title: "Confidence Starts With",
//     cta: "Shop Now!",
//     img: 'https://th.bing.com/th/id/OIP.v8d5_D28rmFgBQc-m4TSWQAAAA?w=181&h=180&c=7&r=0&o=5&pid=1.7',
//     brand: 'DamenSch, XYXX..',
//   },
//   {
//     title: "Little Fashion, Big Smiles",
//     cta: "Shop Now!",
//     img: "https://rukminim2.flixcart.com/image/110/110/k2z1t3k0/jacket/z/v/x/m-9298233-mast-harbour-original-imafm78vbfvdzph7.jpeg?q=80",
//     brand: 'Sweatshirts,H&M..',
//   },
//   {
//     title: "Where Elegance Meets Comfort",
//     cta: "Shop Now!",
//     img: "https://rukminim2.flixcart.com/image/110/110/kb9ou4w0/shoe/j/g/6/11391306-40-u-s-polo-assn-white-original-imafsnetwnyzu8x2.jpeg?q=80",
//     brand: 'U.S. Polo Assn., Highlander..',
//   },
//   {
//     title: "Crazy Deals on Handbags",
//     cta: "Shop Now!",
//     img: "https://rukminim2.flixcart.com/image/110/110/j2w6jrk0/hand-messenger-bag/d/2/u/hpbv468022k3-hpbv468022k3-satchel-lavie-original-imaeu56n9vmgwhnk.jpeg?q=80",
//     brand: 'Gokich..',
//   },
// ];

// const Grand = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 2,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 3, slidesToScroll: 2 }
//       },
//       {
//         breakpoint: 768,
//         settings: { slidesToShow: 2, slidesToScroll: 1 }
//       },
//       {
//         breakpoint: 480,
//         settings: { slidesToShow: 1, slidesToScroll: 1 }
//       }
//     ]
//   };

//   return (
//      <div className="product-slider">
//       <Slider {...settings}>
//         {products.map(product => (
//           <div key={product.id}>
//             <ProductCard product={product} />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Grand;
// Grand.js
import Slider from 'react-slick';
import '../App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from './ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';

// Sample products array
const products = [
  {
    id: "1",
    title: "Little Fashion, Big Smiles",
    cta: "Shop Now!",
    img: "https://th.bing.com/th/id/OIP.CFW2ZSRcXiUgA0J37D0ScQAAAA?w=186&h=233&c=7&r=0&o=7&pid=1.7&rm=3",
    brand: "Nautinati, Nap Chief.."
  },
  {
    id: "2",
    title: "Trendy Looks for Tiny Stars",
    cta: "Grab Now",
    img: 'https://th.bing.com/th/id/OIP.ob-WPIlX8Vlgr22fSfVFAAHaHH?w=199&h=191&c=7&r=0&o=5&pid=1.7',
    brand: 'Cartoon Network, StyloBug..',
  },
  {
    id: "3",
    title: "Where Elegance Meets Comfort",
    cta: "Shop Now!",
    img: 'https://th.bing.com/th/id/OIP.sX4-LJxW8bcUIGXKMpBGNgHaIV?w=159&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
    brand: 'Kuber Industries, Haus & Kinder..',
  },
  {
    id: "4",
    title: "Shine Bright, Wear Beautiful",
    cta: "Shop Now!",
    img: 'https://th.bing.com/th/id/OIP._DWAibNErRhnYxZT4IO6rQHaHI?w=176&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
    brand: 'Giva, Palmonas..',
  },
  {
    id: "5",
    title: "Confidence Starts With",
    cta: "Shop Now!",
    img: 'https://th.bing.com/th/id/OIP.v8d5_D28rmFgBQc-m4TSWQAAAA?w=181&h=180&c=7&r=0&o=5&pid=1.7',
    brand: 'DamenSch, XYXX..',
  },
  {
    id: "6",
    title: "Little Fashion, Big Smiles",
    cta: "Shop Now!",
    img: "https://rukminim2.flixcart.com/image/110/110/k2z1t3k0/jacket/z/v/x/m-9298233-mast-harbour-original-imafm78vbfvdzph7.jpeg?q=80",
    brand: 'Sweatshirts,H&M..',
  },
  {
    id: "7",
    title: "Where Elegance Meets Comfort",
    cta: "Shop Now!",
    img: "https://rukminim2.flixcart.com/image/110/110/kb9ou4w0/shoe/j/g/6/11391306-40-u-s-polo-assn-white-original-imafsnetwnyzu8x2.jpeg?q=80",
    brand: 'U.S. Polo Assn., Highlander..',
  },
  {
    id: "8",
    title: "Crazy Deals on Handbags",
    cta: "Shop Now!",
    img: "https://rukminim2.flixcart.com/image/110/110/j2w6jrk0/hand-messenger-bag/d/2/u/hpbv468022k3-hpbv468022k3-satchel-lavie-original-imaeu56n9vmgwhnk.jpeg?q=80",
    brand: 'Gokich..',
  },
];

const Grand = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };

  return (

    <div className="product-slider">
      <Slider {...settings}>
        {products.map(product => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>
    </div>

  );
};

export default Grand;
