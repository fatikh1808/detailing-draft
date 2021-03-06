import React from "react";
import { BrowserView } from "react-device-detect";

export default function BrowserNavigation() {
    return (
        <BrowserView>
            <nav className={"navigation"}>
                <ul className={"navigation__list flex flex-row text-white"}>
                    <li className={"navigation__item ml-6"}>
                        <a href="" className={"navigation__link relative"}>
                            Главная
                        </a>
                    </li>
                    <li className={"navigation__item ml-6"}>
                        <a href="" className={"navigation__link relative"}>
                            О нас
                        </a>
                    </li>
                    <li className={"navigation__item ml-6"}>
                        <a href="" className={"navigation__link relative"}>
                            Услуги
                        </a>
                    </li>
                    <li className={"navigation__item ml-6"}>
                        <a href="" className={"navigation__link relative"}>
                            Контакты
                        </a>
                    </li>
                    <li className={"navigation__item ml-6"}>
                        <a href="" className={"navigation__link relative"}>
                            Галерея
                        </a>
                    </li>
                </ul>
            </nav>
        </BrowserView>
    );
}
