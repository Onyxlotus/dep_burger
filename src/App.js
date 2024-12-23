import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";

import "./styles/main.css"
import FoodPageBurger from "./pages/food/FoodPageBurger";
import FoodPageChiken from "./pages/food/FoodPageChiken";
import FoodPageHotFood from "./pages/food/FoodPageHotFood";
import FoodPageSnacks from "./pages/food/FoodPageSnacks";
import FoodPageSalad from "./pages/food/FoodPageSalad";
import FoodPageDesserts from "./pages/food/FoodPageDesserts";

import ScrollToTop from "./helpers/scrollToTop";
import { Promotions } from "./pages/promotions/Promotions";
import AboutUs from "./pages/about/AboutUs";





function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />

        <Routes>
          <Route path="/dep_burger" element={<Home />} />
          <Route path="/menu/0" element={<FoodPageBurger />} />
          <Route path="/menu/1" element={<FoodPageChiken />} />
          <Route path="/menu/2" element={<FoodPageHotFood />} />
          <Route path="/menu/3" element={<FoodPageSnacks />} />
          <Route path="/menu/4" element={<FoodPageSalad />} />
          <Route path="/menu/5" element={<FoodPageDesserts />} />

          <Route path="/promotions" element={<Promotions />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>

        <Footer />
      </Router>
        

      </div>
  );
}

export default App;
