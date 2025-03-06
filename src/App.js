import "./App.css";
import MyNav from "./components/nav/nav.component";
import Home from "./pages/home/home.component";
import About from "./pages/about/about.component";
import Portfolio from "./pages/portfolio/portfolio.component";
import Contact from "./pages/contact/contact.component";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
