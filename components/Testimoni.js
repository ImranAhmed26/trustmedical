import React, { useState } from 'react';

// import react slick
import Slider from 'react-slick';
import Image from 'next/image';
import Stars from '../public/assets/Icon/stars.svg';
import ArrowBack from '../public/assets/Icon/eva_arrow-back-fill.svg';
import ArrowNext from '../public/assets/Icon/eva_arrow-next-fill.svg';

const Testimoni = ({
  listTestimoni = [
    {
      name: 'iezh Robert',
      image: '/assets/people-1.png',
      city: 'Wuhan',
      country: 'China',
      rating: '4.5',
      testimoni:
      "Exceptional quality and reliability! I've been using their medical equipment for years, and it has never failed me. The accuracy and durability of their products are unmatched. Highly recommend!",
    },
    {
      name: 'Jodie Smith',
      image: '/assets/people-2.png',
      city: 'Kota Kinabalu',
      country: 'Malaysia',
      rating: '4.5',
      testimoni:
       `As a healthcare professional, I rely on top-notch equipment to provide the best care to my patients. This company's medical equipment exceeds my expectations every time. It's intuitive to use and enhances efficiency in our clinic.`,
    },
    {
      name: 'Tabrez Ali',
      image: '/assets/people-3.png',
      city: 'Barisal',
      country: 'Bangladesh',
      rating: '4.5',
      testimoni:
        'I am impressed by the level of customer service this company provides. They go above and beyond to ensure their clients are satisfied. Their knowledgeable staff guided me through the selection process, helping me find the perfect equipment for my needs.',
    },
    {
      name: 'Dinesh Aluwalia',
      image: '/assets/people-4.jpg',
      city: 'Thakurgaon',
      country: 'Bangladesh',
      rating: '4.5',
      testimoni:
        'The innovative features of their medical equipment have significantly improved our workflow in the hospital. Not only does it streamline our processes, but it also enhances patient care and safety. Thank you for delivering such reliable products',
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className=''>
          <span className='mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all '></span>
        </a>
      );
    },
    dotsClass: 'slick-dots w-max absolute mt-20  ',
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className='flex items-stretch justify-items-stretch'
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className='px-3 flex items-stretch' key={index}>
            <div className='border-2 border-gray-500 hover:border-green-500 transition-all rounded-lg p-8 flex flex-col'>
              <div className='flex flex-col xl:flex-row w-full items-stretch xl:items-center'>
                <div className='flex order-2 xl:order-1'>
                  <Image
                    src={listTestimonis.image}
                    height={50}
                    width={50}
                    alt='Icon People'
                  />
                  <div className='flex flex-col ml-5 text-left'>
                    <p className='text-lg text-black-600 capitalize'>
                      {listTestimonis.name}
                    </p>
                    <p className='text-sm text-black-500 capitalize'>
                      {listTestimonis.city},{listTestimonis.country}
                    </p>
                  </div>
                </div>
                <div className='flex flex-none items-center ml-auto order-1 xl:order-2'>
                  <p className='text-sm'>{listTestimonis.rating}</p>
                  <span className='flex ml-4'>
                    <Stars className='h-4 w-4' />
                  </span>
                </div>
              </div>
              <p className='mt-5 text-left'>“{listTestimonis.testimoni}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className='flex w-full items-center justify-end'>
        <div className='flex flex-none justify-between w-auto mt-14'>
          <div
            className='mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-green-500 border hover:bg-green-500 hover:text-white-500 transition-all text-green-500 cursor-pointer'
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className='h-6 w-6 ' />
          </div>
          <div
            className='flex items-center justify-center h-14 w-14 rounded-full bg-white border-green-500 border hover:bg-green-500 hover:text-white-500 transition-all text-green-500 cursor-pointer'
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className='h-6 w-6' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
