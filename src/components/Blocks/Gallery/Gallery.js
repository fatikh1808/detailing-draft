import Heading from "../../Heading";
import Block from "../../../containers/Block";
import Carousel from "../../../containers/Carousel";

export default function Gallery() {
    return (
        <div className={"gallery"}>
            <Block>
                <div className="container mx-auto">
                    <Heading
                        text={"Наши работы"}
                        subText={"Тестовый подзаголовок"}
                    />
                </div>
                <div className="container mx-auto py-14">
                    <Carousel
                        items={[
                            {
                                type: "GridSlide",
                                items: [
                                    {
                                        src:
                                            "https://i.pinimg.com/originals/02/62/38/026238cd2d8cb582bbf4c95c8865be2e.png",
                                        url: "/",
                                    },
                                    {
                                        src:
                                            "https://i.pinimg.com/originals/02/62/38/026238cd2d8cb582bbf4c95c8865be2e.png",
                                        url: "/",
                                    },
                                    {
                                        src:
                                            "https://i.pinimg.com/originals/02/62/38/026238cd2d8cb582bbf4c95c8865be2e.png",
                                        url: "/",
                                    },
                                ],
                            },
                            {
                                type: "GridSlide",
                                items: [
                                    {
                                        src:
                                            "https://a.d-cd.net/xDAAAgJHneA-960.jpg",
                                        url: "/",
                                    },
                                    {
                                        src:
                                            "https://a.d-cd.net/xDAAAgJHneA-960.jpg",
                                        url: "/",
                                    },
                                    {
                                        src:
                                            "https://a.d-cd.net/xDAAAgJHneA-960.jpg",
                                        url: "/",
                                    },
                                ],
                            },
                            {
                                type: "GridSlide",
                                items: [
                                    {
                                        src:
                                            "https://i.pinimg.com/originals/02/62/38/026238cd2d8cb582bbf4c95c8865be2e.png",
                                        url: "/",
                                    },
                                    {
                                        src:
                                            "https://i.pinimg.com/originals/02/62/38/026238cd2d8cb582bbf4c95c8865be2e.png",
                                        url: "/",
                                    },
                                    {
                                        src:
                                            "https://i.pinimg.com/originals/02/62/38/026238cd2d8cb582bbf4c95c8865be2e.png",
                                        url: "/",
                                    },
                                ],
                            },
                            {
                                type: "GridSlide",
                                items: [
                                    {
                                        src:
                                            "https://a.d-cd.net/xDAAAgJHneA-960.jpg",
                                        url: "/",
                                    },
                                    {
                                        src:
                                            "https://a.d-cd.net/xDAAAgJHneA-960.jpg",
                                        url: "/",
                                    },
                                    {
                                        src:
                                            "https://a.d-cd.net/xDAAAgJHneA-960.jpg",
                                        url: "/",
                                    },
                                ],
                            },
                        ]}
                        params={{
                            slidesPerView: 1,
                            breakpoints: {
                                1024: {
                                    slidesPerView: 2,
                                },
                            },
                        }}
                        type={"GridSlide"}
                    />
                </div>
            </Block>
        </div>
    );
}
