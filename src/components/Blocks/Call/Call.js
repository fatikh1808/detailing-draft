import Heading from "../../Heading";
import Block from "../../../containers/Block";

import "./Call.scss";

import Button from "../../elements/Button";

export default function Call() {
    return (
        <div className={"call relative"}>
            <Block>
                <div className="container relative flex flex-col items-center mx-auto px-8 md:p-0 text-white">
                    <Heading
                        text={"Позвоните нам"}
                        subText={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        }
                        underline={false}
                        subTextClassName={"mb-20"}
                        light
                    />
                    <div className="call__content">
                        <Button text={"Позвоните нам"} />
                    </div>
                </div>
            </Block>
        </div>
    );
}
