import Heading from "../../Heading";
import Block from "../../../containers/Block";

import "./About.scss";

export default function About() {
    return (
        <div className={"about"}>
            <Block>
                <div className="container mx-auto flex">
                    <div className={"about__description flex-1"}>
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
                    <div className={"about__image flex-1"}></div>
                </div>
            </Block>
        </div>
    );
}
