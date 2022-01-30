import "./App.css";
import Header from "./components/header/Header";
import Column1 from "./components/column-1/Column1";
import Column2 from "./components/column-2/Column2";
import Column3 from "./components/column-3/Column3";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="Cv">
      <Header />
      <div className="body">
        <Column1 />
        <Column2 />
        <Column3 />
      </div>
      <Footer />
    </div>
  );
}

export default App;
