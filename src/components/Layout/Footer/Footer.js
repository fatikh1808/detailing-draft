import React from "react";

import Logo from "./Logo";

import "./Footer.scss";

export default function Footer() {
    return (
        <footer className={"footer"}>
            <div
                className={
                    "container mx-auto flex flex-col md:flex-row py-6 md:py-10"
                }
            >
                <div
                    className={
                        "footer__item flex flex-wrap flex-row items-start md:w-6/12"
                    }
                >
                    <a href="/">
                        <img src={Logo} alt="" width={100} />
                    </a>
                </div>
                <nav className="footer__item flex flex-wrap flex-col md:flex-row items-center me:items-start md:w-6/12">
                    <div className="mt-8 md:mt-0 md:w-2/6">
                        <p className="uppercase tracking-wide font-semibold">
                            Услуги
                        </p>
                        <ul className="mt-2">
                            <li className="text-gray-700 py-1 px-1 -mx-1 hover:text-gray-900">
                                <a href="/" target="_self" rel="">
                                    Детейлинг
                                </a>
                            </li>
                            <li className="text-gray-700 py-1 px-1 -mx-1 hover:text-gray-900">
                                <a href="/" target="_self" rel="">
                                    Керамика
                                </a>
                            </li>
                            <li className="text-gray-700 py-1 px-1 -mx-1 hover:text-gray-900">
                                <a href="/" target="_self" rel="">
                                    Полировка
                                </a>
                            </li>
                            <li className="text-gray-700 py-1 px-1 -mx-1 hover:text-gray-900">
                                <a href="/" target="_self" rel="">
                                    Бронирование
                                </a>
                            </li>
                            <li className="text-gray-700 py-1 px-1 -mx-1 hover:text-gray-900">
                                <a href="/" target="_self" rel="">
                                    Салон
                                </a>
                            </li>
                            <li className="text-gray-700 py-1 px-1 -mx-1 hover:text-gray-900">
                                <a href="/" target="_self" rel="">
                                    Кожа
                                </a>
                            </li>
                            <li className="text-gray-700 py-1 px-1 -mx-1 hover:text-gray-900">
                                <a href="/" target="_self" rel="">
                                    Оптика
                                </a>
                            </li>
                            <li className="text-gray-700 py-1 px-1 -mx-1 hover:text-gray-900">
                                <a href="/" target="_self" rel="">
                                    Тонировка
                                </a>
                            </li>
                            <li className="text-gray-700 py-1 px-1 -mx-1 hover:text-gray-900">
                                <a href="/" target="_self" rel="">
                                    Диски
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-8 md:mt-0 md:w-2/6">
                        <p className="uppercase tracking-wide font-semibold">
                            Навигация
                        </p>
                        <ul className="mt-2">
                            <li className="text-gray-700 py-1 px-1 -mx-1 hover:text-gray-900">
                                <a href="/" target="_self" rel="">
                                    Главная
                                </a>
                            </li>
                            <li className="text-gray-700 py-1 px-1 -mx-1 hover:text-gray-900">
                                <a href="/" target="_self" rel="">
                                    О нас
                                </a>
                            </li>
                            <li className="text-gray-700 py-1 px-1 -mx-1 hover:text-gray-900">
                                <a href="/" target="_self" rel="">
                                    Услуги
                                </a>
                            </li>
                            <li className="text-gray-700 py-1 px-1 -mx-1 hover:text-gray-900">
                                <a href="/" target="_self" rel="">
                                    Контакты
                                </a>
                            </li>
                            <li className="text-gray-700 py-1 px-1 -mx-1 hover:text-gray-900">
                                <a href="/" target="_self" rel="">
                                    Галерея
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-8 md:mt-0 md:w-2/6">
                        <p className="uppercase tracking-wide font-semibold">
                            Контакты
                        </p>
                        <ul className="mt-2">
                            <li className="text-white py-1 px-1 -mx-1 hover:text-gray-900">
                                <a href="/" target="_self" rel="">
                                    Телефон
                                </a>
                            </li>
                            <li className="text-white py-1 px-1 -mx-1 hover:text-gray-900">
                                <a href="/" target="_self" rel="">
                                    Адрес
                                </a>
                            </li>
                            <li className="text-white py-1 px-1 -mx-1 hover:text-gray-900">
                                <a href="/" target="_self" rel="">
                                    E-mail
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="text-sm bg-gray-200 py-6 text-gray-700">
                <div className="container mx-auto">
                    © 2012-2021 Детейлинг центр «Детейлинг Казань™». Политика
                    конфиденциальности
                </div>
            </div>
        </footer>
    );
}
