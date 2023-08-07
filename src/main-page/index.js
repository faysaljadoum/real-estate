import { useEffect, useMemo, useState } from "react";
import Header from "./header";
import "./main-page.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FeaturedHouse from "./featured-house";
import SearchResults from "../search-results";
import HouseFilter from "./house-filter";
import HouseFromQuery from "../house/HouseFromQuery";

function App() {
  const [allHouses, setAllHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const resp = await fetch("/houses.json");
      const houses = await resp.json();
      setAllHouses(houses);
    };
    fetchHouses();
  }, []);

  const featuredHouse = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses]);

  return (
    <BrowserRouter>
      <div className="container">
        <Header subTitle="Providing houses all over the world" />
        <HouseFilter allHouses={allHouses} />
        <Routes>
          <Route path="/" element={<FeaturedHouse house={featuredHouse} />} />
          <Route
            path="/searchresults/:country"
            element={<SearchResults allHouses={allHouses} />}
          />
          <Route
            path="/house/:id"
            element={<HouseFromQuery allHouses={allHouses} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
