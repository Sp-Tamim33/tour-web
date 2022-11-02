import { Route, Routes } from "react-router-dom";
import AllTour from "./Components/AllTour/AllTour";
import CheapestTour from "./Components/CheapestTour/CheapestTour";
import Home from "./Components/Home/Home";
import TrendingTours from "./Components/TrendingTours/TrendingTours";

const { default: Header } = require("./Components/Header/Header");

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/all-tours" element={<AllTour />}></Route>
        <Route path="/trending-tours" element={<TrendingTours />}></Route>
        <Route path="/cheapest-tours" element={<CheapestTour />}></Route>
      </Routes>
    </>
  );
}

export default App;
