// importing necessary components
import Layout from "./components/Layout";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Watch from "./components/Watch";
import Gallery from "./components/Gallery";

// importing data
import { images } from "./images";

const App = () => (
  <Layout>
    <Banner />
    <About />
    <Services />
    <Gallery images={images} />
    <Watch />
  </Layout>
);

export default App;