import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <div className={""}>
            <Header navigation={<Navigation />} />
            {children}
            <Footer />
        </div>
    );
}
