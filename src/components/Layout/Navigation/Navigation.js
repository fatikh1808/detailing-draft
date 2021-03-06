import "./Navigation.scss";
import BrowserNavigation from "./BrowserNavigation";
import MobileNavigation from "./ MobileNavigation";

export default function Navigation() {
    return (
        <>
            <BrowserNavigation />
            <MobileNavigation />
        </>
    );
}
