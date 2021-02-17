import Heading from "../../Heading";
import Block from "../../../containers/Block";

import "./About.scss";

export default function About() {
    return (
        <div className={"about"}>
            <Block>
                <div className="container mx-auto">
                    <div className={"about__description"}>
                        <Heading
                            text={"О компании"}
                            subText={
                                "Fish that don’t drown Life in a bubble jungle"
                            }
                        />
                    </div>
                    <div className={"about__image"}></div>
                </div>
            </Block>
        </div>
    );
}
