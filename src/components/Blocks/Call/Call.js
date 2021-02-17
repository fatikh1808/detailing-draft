import Heading from "../../Heading";
import Block from "../../../containers/Block";

import "./Call.scss";

export default function Call() {
    return (
        <div className={"call"}>
            <Block>
                <div className="container flex flex-col items-center mx-auto">
                    <Heading
                        text={"Оставьте заявку на обратную связь"}
                        subText={
                            "Чтобы оставить заявку, нужно нажать на кнопку"
                        }
                        underline={false}
                        light
                    />
                    <div className="call__content">
                        <button>оставить заявку</button>
                    </div>
                </div>
            </Block>
        </div>
    );
}
