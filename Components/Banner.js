import React from 'react';
import '../App.css';

function Banner() {
  return (
    <div className="banner-container-fluid">
      <div className=" container top-banner">
        <img className='img-responsive' src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/7/10/f8933bc1-126a-42a4-8deb-bffa95ba8bba1752150181703-FLAT-300-Off-on-1st-Purchase-Strip-----2--1-.jpg' alt=''/>

        <div className='container main-banner'>
          <img className='img-responsive' src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JULY/10/cKDak4CG_536682cfcdb14cb3b18586669aa64049.jpg' alt=''/>
        </div>

        <div className='container bank-offer'>
          <img className='img-responsive' src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/7/10/9a7d7fe6-cb25-46a7-89ce-5fad3577ba5a1752150319128-Bank-Strip--3-.gif' alt=''/>
        </div>

        <div className='container Perks'>
          <img className='img-responsive' src='https://assets.myntassets.com/f_webp,w_979,c_limit,fl_progressive,dpr_2.0/assets/images/2025/6/30/558287ec-d150-42e7-9e6e-3a7f2157c1051751290026080-Payday-Perks--1-.jpg' alt=''/>
        </div>
      </div>

    </div>
  );
}

export default Banner;
