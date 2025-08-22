// ProductSlider.js
import React from "react";
import '../App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const items = [
  {
    title: "Durable Backpacks",
    image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JULY/10/DytOmaLY_c80f863411b8433b95db823d0c29272f.png",
    originalPrice: 1549,
    offerPrice: 549
  },
  {
    title: "Soft Bedsheets",
    image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JULY/10/VQzpsSke_2bf89e36e53d49fc8835e2c7e1ce0a65.png",
    originalPrice: 699,
    offerPrice: 249
  },
  {
    title: "Body Lotions",
    image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JULY/10/AGSIoMeI_6d36cf00a9d84ca399b80c816e5b2f7a.png",
    originalPrice: 549,
    offerPrice: 199
  },
  {
    title: "Conditioners",
    image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JULY/10/4IrSTQq2_8eefe2fa18fd49fe9f250ab7fc366c3b.png",
    originalPrice: 399,
    offerPrice: 149
  },
  {
    title: "Day Creams",
    image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JULY/10/FUUhIf9B_decd7071d3be44429516cc4995c34407.png",
    originalPrice: 543,
    offerPrice: 199
  },
  {
    title: "Sunscreens",
    image: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JULY/10/S9xqyUJD_097b5426c5094cb8aeee54b2244b2250.png",
    originalPrice: 399,
    offerPrice: 149
  }
];

const Simple = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 1 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };

  return (
    <div className="Devlop ml-6" style={{ padding: "40px" }}>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div className="check" key={index} style={{ padding: "10px",textAlign: "center" }}>
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "", height: "180px", objectFit: "cover", borderRadius: "8px" }}
            />
            <h4>{item.title}</h4>
            <p>
              <s>₹{item.originalPrice}</s> <b>₹{item.offerPrice}</b>
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Simple;
