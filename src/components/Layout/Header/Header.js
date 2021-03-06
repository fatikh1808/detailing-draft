import "./Header.scss";

import Logo from "../../elements/Logo";
import Navigation from "../Navigation";

export default function Header() {
    return (
        <header className={"header absolute py-1 sm:py:7 lg:py-14"}>
            <div className="container mx-auto flex justify-center text-center sm:justify-between">
                <Logo />
                <Navigation />
            </div>
        </header>
    );
}
