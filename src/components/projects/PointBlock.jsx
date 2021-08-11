import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import { v4 as uuidv4 } from 'uuid';

SwiperCore.use([Navigation, Pagination]);

const PointBlock = ({ title, description, slideImages, size }) => {
  return (
    <div className='wcms__points-block'>
      <h3 className='wcms__points-title'>{title}</h3>
      <div className='wcms__points-content'>
        {description}
        {slideImages.length > 1 ? (
          <div className='wcms__points-slider'>
            <Swiper tag='section' wrapperTag='ul' slidesPerView={1} navigation pagination spaceBetween={0}>
              {slideImages.map((Img) => {
                return (
                  <SwiperSlide tag='li' key={uuidv4()}>
                    <div className={`slider-bg ${size}`} style={{ backgroundImage: `url(${Img})` }}></div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        ) : (
          <div className='wcms__points-slider'>
            <div className={`slider-bg ${size}`} style={{ backgroundImage: `url(${slideImages})` }}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PointBlock;
