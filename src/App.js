import Layout from "./components/Layout";
import Baner from "./components/Baner";
import About from "./components/Blocks/About";
import Services from "./components/Blocks/Services";
import Call from "./components/Blocks/Call";
import Reviews from "./components/Blocks/Reviews";
import Gallery from "./components/Blocks/Gallery";
import Map from "./components/Blocks/Map";

function App() {
    return (
        <Layout>
            <Baner />
            <About />
            <Services />
            <Call />
            <Reviews />
            <Gallery />
            <Map />
        </Layout>
    );
}

export default App;
