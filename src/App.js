// importing necessary components
import Layout from "./components/Layout";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Watch from "./components/Watch";
import Gallery from "./components/Gallery";

const App = () => (
  <Layout>
    <Banner />
    <About />
    <Services />
    <Gallery />
    <Watch />
  </Layout>
);

export default App;
