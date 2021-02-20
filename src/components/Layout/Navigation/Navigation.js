import "./Navigation.scss";

export default function Navigation() {
    return (
        <nav className={"navigation"}>
            <ul className={"navigation__list flex text-white"}>
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
    );
}
