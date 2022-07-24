// importing necessary components
import Layout from "./components/Layout";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Watch from "./components/Watch";

const App = () => (
  <Layout>
    <Banner />
    <About />
    <Services />
    <Watch />
  </Layout>
);

export default App;
