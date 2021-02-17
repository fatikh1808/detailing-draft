import Heaading from "../../Heading";
import Block from "../../../containers/Block";

export default function Services() {
    return (
        <div className={"services"}>
            <Block>
                <div className="container mx-auto">
                    <Heaading text={"Услуги"} />
                </div>
                <div className="container mx-auto">
                    <div className="services__item">Услуга 1</div>
                    <div className="services__item">Услуга 2</div>
                    <div className="services__item">Услуга 3</div>
                </div>
            </Block>
        </div>
    );
}
