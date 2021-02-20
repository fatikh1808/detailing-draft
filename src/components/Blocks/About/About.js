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
                                "Fish that don’t drown Life in a bubble jungle"
                            }
                            left
                        />
                        <p>
                            Прародителем текста-рыбы является известный "Lorem
                            Ipsum" – латинский текст, ноги которого растут аж из
                            45 года до нашей эры. Сервисов по созданию
                            случайного текста на основе Lorem Ipsum великое
                            множество, однако все они имеют один существенный
                            недостаток: их "рыба текст" подходит лишь для
                            англоязычных ресурсов/проектов. Мы же, фактически,
                            предлагаем Lorem Ipsum на русском языке – вы можете
                            использовать полученный здесь контент абсолютно
                            бесплатно и в любых целях, не запрещённых
                            законодательством. Однако в случае, если
                            сгенерированный здесь текст используется в
                            коммерческом или публичном проекте, ссылка на наш
                            сервис обязательна.
                        </p>
                    </div>
                    <div className={"about__image flex-1"}></div>
                </div>
            </Block>
        </div>
    );
}
