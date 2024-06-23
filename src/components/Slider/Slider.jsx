import React, { useEffect } from 'react';
import Swiper from 'swiper';

const Slider = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []);

  return (
    <section>
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {/* Slide 1 */}
        <div className="swiper-slide">
          <img src="https://placekitten.com/600/300" alt="Slide 1" />
        </div>

        {/* Slide 2 */}
        <div className="swiper-slide">
          <img src="https://placekitten.com/600/301" alt="Slide 2" />
        </div>

        {/* Slide 3 */}
        <div className="swiper-slide">
          <img src="https://placekitten.com/600/302" alt="Slide 3" />
        </div>
      </div>

      {/* Add Navigation */}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
    </section>
  );
};

export default Slider;
