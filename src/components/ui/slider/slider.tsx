import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "./slider.scss";

interface ISlider {
    items: JSX.Element[]
}

export default function Slider({items}: ISlider) {
    return (
        <>
            <Swiper
                dir="rtl"
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
                modules={[Navigation]}
                className="mySwiper"
            >
                {
                    items.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                {item}
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
        </>
    );
}
