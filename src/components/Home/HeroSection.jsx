
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination,Autoplay } from 'swiper/modules';
import img1 from "../../images/hero1.jpg" 
import img2 from "../../images/hero2.jpg" 
import heroLogo from "../../images/hero_logo.svg"

const HeroSection = () => {
    return (
        <div className='relative top-[-45px]'>
            <Swiper
             loop={true}
             autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
                <div  className='h-[100vh] relative'>
                <img src={img1} alt="" className='absolute top-0 z-0 w-full h-[100vh] object-cover'/>
                <div style={{background:'linear-gradient(180deg, rgba(49,23,23,0.7540266106442577) 0%, rgba(22,22,23,0.6783963585434174) 100%)'}} className='absolute top-0 left-0 w-full h-full  flex justify-center items-center'>
                            <img src={heroLogo} alt="" className='max-w-[60%]'/>
                </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
                <div  className='h-[100vh] relative'>
                <img src={img2} alt="" className='absolute top-0 z-0 w-full h-[100vh] object-cover'/>
                <div style={{background:'linear-gradient(180deg, rgba(49,23,23,0.7540266106442577) 0%, rgba(22,22,23,0.6783963585434174) 100%)'}} className='absolute top-0 left-0 w-full h-full  flex justify-center items-center'>
                            <img src={heroLogo} alt="" className='max-w-[60%]'/>
                </div>
                </div>
        </SwiperSlide>
        
       
      </Swiper>
        </div>
    );
};

export default HeroSection;