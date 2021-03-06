import { createElement } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";

import GridSlide from "../../components/elements/GridSlide";

const slides = {
    GridSlide,
};

export default function Carousel({ params, items }) {
    return (
        <Swiper {...params}>
            {items.map(({ type, items, index }, idx) => (
                <div key={index}>
                    <SwiperSlide>
                        {createElement(
                            slides[type],
                            { items, even: !!(idx % 2) },
                            null
                        )}
                    </SwiperSlide>
                </div>
            ))}
        </Swiper>
    );
}

Carousel.propTypes = {
    params: PropTypes.object,
    items: PropTypes.arrayOf(PropTypes.node),
};

Carousel.defaultProps = {
    params: {},
    items: [],
};

Carousel.displayName = "Carousel";
