import React from "react";

import Logo from "./Logo";

import "./Footer.scss";

export default function Footer() {
    return (
        <footer
            className={
                "footer container mx-auto flex flex-col md:flex-row md:py-11"
            }
        >
            <div
                className={
                    "footer__item flex justify-center flex-1 py-5 text-2xl text-white"
                }
            >
                <a href="/">
                    <img src={Logo} alt="" width={100} />
                </a>
            </div>
            <div
                className={
                    "footer__item flex justify-center flex-1 py-5 text-2xl text-white"
                }
            >
                <div className={"footer__header mb-5 font-bold"}>Навигация</div>
            </div>
            <div
                className={
                    "footer__item flex justify-center flex-1 py-5 text-2xl text-white"
                }
            >
                <div className={"footer__header mb-5 font-bold"}>Контакты</div>
            </div>
        </footer>
    );
}
