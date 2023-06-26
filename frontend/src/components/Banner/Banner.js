import React from 'react';
import "./Banner.css"; 
import "slick-carousel/slick/slick.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import service_1 from "./service_1.png"
import service_2 from "./service_2.png"
import service_3 from "./service_3.png"
import service_4 from "./service_4.webp"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import "swiper/css/grid";
import "swiper/css/pagination";
import 'swiper/css';
import "swiper/css/free-mode";
import 'swiper/css/navigation';
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";
const Banner = (props) => {
    const imglist = ['https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/slider_1.jpg?1677379206119']
    return (
        <div >
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                grabCursor={true}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                {imglist.map((item,index) => 
                    <SwiperSlide>
                        <img
                            className="d-block w-100"
                            src={item}
                            alt="First slide"
                        />
                    </SwiperSlide>
                )}  
            </Swiper>
        </div>
    )
}
export default Banner;