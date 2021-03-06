import React from "react";
import { MobileView } from "react-device-detect";
import { Menu } from "antd";
import Drawer from "rc-drawer";

export default function MobileNavigation() {
    return (
        <MobileView>
            <Drawer
                parent={null}
                level={null}
                width={"auto"}
                placement={"right"}
            >
                <Menu mode="inline">
                    <ul className={"navigation__list flex flex-col"}>
                        <li className={"navigation__item mb-4"}>
                            <a href="" className={"navigation__link relative"}>
                                Главная
                            </a>
                        </li>
                        <li className={"navigation__item mb-4"}>
                            <a href="" className={"navigation__link relative"}>
                                О нас
                            </a>
                        </li>
                        <li className={"navigation__item mb-4"}>
                            <a href="" className={"navigation__link relative"}>
                                Услуги
                            </a>
                        </li>
                        <li className={"navigation__item mb-4"}>
                            <a href="" className={"navigation__link relative"}>
                                Контакты
                            </a>
                        </li>
                        <li className={"navigation__item mb-4"}>
                            <a href="" className={"navigation__link relative"}>
                                Галерея
                            </a>
                        </li>
                    </ul>
                </Menu>
            </Drawer>
        </MobileView>
    );
}
