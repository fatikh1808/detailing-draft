import Heading from "../../Heading";
import Block from "../../../containers/Block";
import Icon from "../../elements/Icon";

import "./Map.scss";

export default function Map() {
    return (
        <div className={"map"}>
            <Block className={"p-0"}>
                <div className={"container mx-auto flex flex-col md:flex-row"}>
                    <div className={"map__navigation flex-1"}>
                        <iframe
                            title={"map"}
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A559240cdc137537a5c5b4299b49e9012000bb0d0b01a91bd03196fbfc8192bbc&amp;source=constructor"
                            width="100%"
                            height="400"
                            frameborder="0"
                        />
                    </div>
                    <div
                        className={
                            "map__contacts relative flex-1 px-8 py-6 md:px-20 md:py-12 text-white"
                        }
                    >
                        <div className={"relative"}>
                            <Heading text={"Как нас найти"} left />
                            <div className={"mb-4"}>
                                <Icon type={"direction"} />
                                Люберцы, ул. Кооперативная, д. 12
                            </div>
                            <div className={"mb-4"}>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit.{" "}
                            </div>
                            <div className={"mb-4"}>
                                <Icon type={"phone"} />
                                +7 (983) 122-32-32
                            </div>
                        </div>
                    </div>
                </div>
            </Block>
        </div>
    );
}
