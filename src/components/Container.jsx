import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";

import Header from "./Header";
import SideBar from "./Sidebar";
import DataGrid from "./Table";
import axios from "axios";

const Container = () => {
  const x=JSON.parse(localStorage.getItem("favorites")?localStorage.getItem("favorites") : "[]");
  const [cityWiseData, setCityWiseData] = useState({
    LUCKNOW: [],
    DELHI: [],
    MUMBAI: [],
    BANGALORE: [],
    KOLKATA: [],
  });
  const [key,setKey]=useState("")
  const [city, setCity] = useState("LUCKNOW");
  const [category, setCategory] = useState("ifsc");
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState(x?x:[]);


  const Loader = () => {
    return (
      <div className="flex items-center justify-center">
        <div
          className="spinner-border animate-spin inline-block w-20 h-20 border-4 rounded-full"
          role="status"
        ></div>
      </div>
    );
  };

  const apiCall = async () => {
    const response = await axios.get(
      `https://vast-shore-74260.herokuapp.com/banks?city=${city}`
    );
    setCityWiseData({ ...cityWiseData, [city]: response?.data });
    return response?.data;
  };
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  },[favorites])
  const { isLoading, items, isFetching } = useQuery(
    ["apiData", city],
    apiCall,
    {
      enabled: true,
    }
  );
  useEffect(() => {
    setKey(Object.keys(cityWiseData).filter((key) => key === city)[0]);
  }, [city]);
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  },[favorites])
  return (
    <div>
      <div className="flex flex-row">
        <div className="w-1/4 h-screen border-2 border-gray-500 mx-4">
          <SideBar />
        </div>
        <div className="flex flex-col w-3/4 ml-4">
          <Header
            setCity={setCity}
            setQuery={setQuery}
            setCategory={setCategory}
          />
          <div className="my-4">
            {isLoading || isFetching ? (
              <Loader />
            ) : (
              <DataGrid
                data={cityWiseData[key]}
                favorites={favorites}
                setFavorites={setFavorites}
                apiCall={apiCall}
                city={city}
                category={category}
                query={query}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Container;
