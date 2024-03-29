import "./App.css";
import Header from "./Components/Header";
import Cards from "./Components/Cards";
import Table from "./Components/Table";

import Footer from "./Components/Footer";
function App() {
  return (
    <div className="AppContainer">
      <Header />
      <Cards />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
