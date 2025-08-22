import React from 'react';
import Slider from 'react-slick';
import Promo from './Promo';
import '../App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Card() {
  const cards = [
    {
      image: 'https://th.bing.com/th/id/OIP.CFW2ZSRcXiUgA0J37D0ScQAAAA?w=186&h=233&c=7&r=0&o=7&pid=1.7&rm=3',
      brand: 'Nautinati, Nap Chief',
      title: 'Little Fashion, Big Smiles',
      discount: 'Min. 50% Off',
    },
    {
      image: 'https://th.bing.com/th/id/OIP.ob-WPIlX8Vlgr22fSfVFAAHaHH?w=199&h=191&c=7&r=0&o=5&pid=1.7',
      brand: 'Cartoon Network, StyloBug',
      title: 'Trendy Looks for Tiny Stars',
      discount: 'Min. 60% Off',
    },
    {
      image: 'https://th.bing.com/th/id/OIP.sX4-LJxW8bcUIGXKMpBGNgHaIV?w=159&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
      brand: 'Kuber Industries, Haus & Kinder',
      title: 'Where Elegance Meets Comfort',
      discount: 'Min. 65% Off',
    },
    {
      image: 'https://th.bing.com/th/id/OIP._DWAibNErRhnYxZT4IO6rQHaHI?w=176&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
      brand: 'Giva, Palmonas',
      title: 'Shine Bright, Wear Beautiful',
      discount: 'Min. 65% Off',
    },
    {
      image: 'https://th.bing.com/th/id/OIP.v8d5_D28rmFgBQc-m4TSWQAAAA?w=181&h=180&c=7&r=0&o=5&pid=1.7',
      brand: 'DamenSch, XYXX',
      title: 'Confidence Starts With',
      discount: 'Min. 20% Off',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Show 4 cards per view
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='container'>
    <div className="promo-slider">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <Promo key={index} {...card} />
        ))}
      </Slider>
    </div>
    </div>
  );
}

export default Card;
