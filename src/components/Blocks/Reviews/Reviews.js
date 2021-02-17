import { Swiper, SwiperSlide } from "swiper/react";

import Heading from "../../Heading";
import Block from "../../../containers/Block";

export default function Reviews() {
    return (
        <div className={"reviews"}>
            <Block>
                <div className="container mx-auto">
                    <Heading text={"Отзывы"} />
                </div>
                <div className="container mx-auto">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                    </Swiper>
                </div>
            </Block>
        </div>
    );
}
