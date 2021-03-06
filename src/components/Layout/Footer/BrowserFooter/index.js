import React from "react";
import { BrowserView } from "react-device-detect";
import Logo from "../../../../img/logo.jpeg";

export default function BrowserFooter({ services, contacts, navigation }) {
    return (
        <BrowserView>
            <footer className={"footer"}>
                <div className={"container mx-auto flex flex-col md:flex-row"}>
                    <div
                        className={
                            "footer__item flex flex-wrap flex-row items-start md:w-4/12 justify-center"
                        }
                    >
                        <a href="/">
                            <img src={Logo} alt="" width={"100%"} />
                        </a>
                    </div>
                    <nav className="footer__item flex flex-wrap flex-col md:flex-row me:items-start md:w-4/12 py-6 md:py-10">
                        <div className="mt-8 md:mt-0 md:w-2/6">
                            <p className="uppercase tracking-wide font-semibold">
                                Услуги
                            </p>
                            {services}
                        </div>
                        <div className="mt-8 md:mt-0 md:w-2/6">
                            <p className="uppercase tracking-wide font-semibold">
                                Навигация
                            </p>
                            {navigation}
                        </div>
                        <div className="mt-8 md:mt-0 md:w-2/6">
                            <p className="uppercase tracking-wide font-semibold">
                                Контакты
                            </p>
                            {contacts}
                        </div>
                    </nav>
                    <div className="footer__item flex flex-wrap flex-col items-center md:w-4/12 py-6 md:py-10">
                        <p className="uppercase tracking-wide font-semibold">
                            Поиск по сайту
                        </p>
                        <div
                            className="mt-1 relative rounded-md shadow-sm flex-auto flex"
                            style={{ width: "50%" }}
                        >
                            <div className="flex items-center">
                                <input
                                    type="text"
                                    name="price"
                                    id="price"
                                    class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 pr-12 sm:text-sm border-gray-300"
                                    placeholder="Поиск ..."
                                    style={{
                                        backgroundColor: "#303030",
                                    }}
                                />
                            </div>
                            <div class="absolute inset-y-0 right-0 flex items-center">
                                <button
                                    type="submit"
                                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Поиск
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-sm bg-gray-200 py-6 text-gray-700">
                    <div className="container mx-auto">
                        © 2012-2021 Детейлинг центр «Детейлинг Казань™».
                        Политика конфиденциальности
                    </div>
                </div>
            </footer>
        </BrowserView>
    );
}
