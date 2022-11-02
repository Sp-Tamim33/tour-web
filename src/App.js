import { Route, Routes } from "react-router-dom";
import AllTour from "./Components/AllTour/AllTours";
import CheapestTour from "./Components/CheapestTour/CheapestTour";
import GetSingleTour from "./Components/GetSingleTour/GetSingleTour";
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
        <Route path="/all-tours/:id" element={<GetSingleTour />}></Route>
        <Route path="/trending-tours" element={<TrendingTours />}></Route>
        <Route path="/trending-tours/:id" element={<GetSingleTour />}></Route>
        <Route path="/cheapest-tours" element={<CheapestTour />}></Route>
        <Route path="/cheapest-tours/:id" element={<GetSingleTour />}></Route>
      </Routes>
    </>
  );
}

export default App;
