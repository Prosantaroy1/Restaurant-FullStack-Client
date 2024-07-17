// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

import orderImg1 from '../../../assets/assets/home/slide1.jpg'
import orderImg2 from '../../../assets/assets/home/slide2.jpg'
import orderImg3 from '../../../assets/assets/home/slide3.jpg'
import orderImg4 from '../../../assets/assets/home/slide4.jpg'
import orderImg5 from '../../../assets/assets/home/slide5.jpg'
import TitleSec from '../../../Component/Title Sec/TitleSec';

const OrderSec = () => {
    return (
        <div className='md:ml-20'>
            <TitleSec
             title='ORDER ONLINE'
             subtitle='From 11:00am to 10:00pm'
            ></TitleSec>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='reletive'>
                    <img src={orderImg1} alt="" />
                    <h3 className='text-2xl text-white absolute bottom-4 left-7'>SALAD</h3>
                </SwiperSlide>
                <SwiperSlide className='reletive'>
                    <img src={orderImg2} alt="" />
                    <h3 className='text-2xl text-white absolute bottom-4 left-7'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={orderImg3} alt="" className='reletive'/>
                    <h3 className='text-2xl text-white absolute bottom-4 left-7'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={orderImg4} alt="" className='reletive'/>
                    <h3 className='text-2xl text-white absolute bottom-4 left-7'>SALAD</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={orderImg5} alt="" className='reletive'/>
                    <h3 className='text-2xl text-white absolute bottom-4 left-7'>Bargar</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={orderImg3} alt="" className='reletive'/>
                    <h3 className='text-2xl text-white absolute bottom-4 left-7'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={orderImg4} alt="" className='reletive'/>
                    <h3 className='text-2xl text-white absolute bottom-4 left-7'>Pizza</h3>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default OrderSec;