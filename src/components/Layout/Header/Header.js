import "./Header.scss";

import Logo from "../../elements/Logo";
import Navigation from "../Navigation";

export default function Header() {
    return (
        <header className={"header absolute py-14"}>
            <div className="container mx-auto flex justify-between">
                <Logo />
                <Navigation />
            </div>
        </header>
    );
}
