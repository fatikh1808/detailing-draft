import Heading from "../../Heading";
import Block from "../../../containers/Block";

import "./About.scss";

import AboutImage from "../../../img/left-side-golf.jpeg";

export default function About() {
    return (
        <div className={"about relative"}>
            <Block className={"p-0"}>
                <div className="container mx-auto">
                    <div className={"about__main w-6/12 py-14 pr-6"}>
                        <Heading
                            text={"О компании"}
                            subText={
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel excepturi qui quas temporibus corporis. "
                            }
                            left
                        />
                        <p>
                            Дорогой автомобиль требует особого отношения и
                            профессионального ухода. Передовые технологии,
                            инновационные покрытия и эффективные защитные
                            составы сделают ваше авто неуязвимым для
                            неблагоприятных внешних воздействий и надолго
                            сохранят насыщенный цвет и глянец лакокрасочного
                            покрытия. К вашим услугам — одна из лучших
                            автостудий Казани, самое современное оборудование,
                            брендовая автохимия и только оригинальные
                            комплектующие. Работают опытные мастера. Даем
                            твердую гарантию на все виды работ.
                        </p>
                    </div>
                    <div
                        className={
                            "about__image absolute right-0 top-0 h-full w-6/12"
                        }
                    >
                        <img src={AboutImage} alt="" />
                    </div>
                </div>
            </Block>
        </div>
    );
}
