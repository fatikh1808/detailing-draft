import Heading from "../Heading";

import "./Baner.scss";

import Button from "../elements/Button";

import MainImage from "../../img/golf-main.jpg";

export default function Baner() {
    return (
        <div className={"main-preview relative"}>
            <img src={MainImage} alt="" />
            <div className={"main-preview__content absolute text-white"}>
                <div className={"container mx-auto"}>
                    <Heading
                        type={"h1"}
                        text={
                            <>
                                Детейлинг
                                <br />
                                Казань
                            </>
                        }
                        className={"text-5xl font-bold sm:text-7xl lg:text-9xl"}
                        subText={`
                        Правильный уход за вашим автомобилем.

                        Мы предлагаем Вам комплекс высокотехнологических услуг по тщательному и полному уходу за автомобилем
                        `}
                        underline={false}
                        subTextStyle={{
                            width: "40%",
                        }}
                        subTextClassName={"mb-20"}
                        left
                    />
                    <Button text={"К услугам"} />
                </div>
            </div>
            <div className={"main-preview__special absolute text-white"}>
                <div className="container mx-auto flex items-end flex-col">
                    <span
                        className={"text-5xl font-bold sm:text-7xl lg:text-9xl"}
                    >
                        15%
                    </span>
                    Скидка первому выжевшему
                </div>
            </div>
        </div>
    );
}
