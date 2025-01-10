import "./style/main.scss";
// import NavBar from "./components/navBar/navbar";
import NavBar from "./components/navBar/NavBar.jsx";
import Home from "./pages/home.jsx";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <h1>Hello</h1>
      <Footer />
    </div>
  );
}

export default App;
