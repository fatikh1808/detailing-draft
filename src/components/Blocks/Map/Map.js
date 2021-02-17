import Heading from "../../Heading";
import Block from "../../../containers/Block";

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
                    <div className={"map__contacts flex-1 px-14"}>
                        <Heading text={"Как нас найти"} left />
                        <div>Адрес</div>
                        <div>Телефон</div>
                        <div>Соцсети</div>
                    </div>
                </div>
            </Block>
        </div>
    );
}
