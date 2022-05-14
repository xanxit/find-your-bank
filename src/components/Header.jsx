import React from "react";
import Cities from "./city.json";
import Categories from "./category.json";
import SearchBar from "./SearchBar";
const Header = ({ setCity, setQuery, setCategory }) => {
  return (
    <div className="flex justify-between">
      <div className="text-3xl font-bold">All Banks</div>
      <div className="flex justify-around">
        <div className="mx-5">
          <select
            className="border cursor-pointer bg-transparent border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            name="city"
            onChange={(e) => {
              e.preventDefault()
              setCity(e.target.value);
            }}
          >
            {Cities?.map((value) => (
              <option
                key={value.id}
                className="capitalize"
                value={value.city.toUpperCase()}
              >
                {value.city}
              </option>
            ))}
          </select>
        </div>
        <div className="mx-5">
          <select
            className="border cursor-pointer bg-transparent border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            name="category"
            onChange={(e) => {
              e.preventDefault()
              setCategory(e.target.value);
            }}
          >
            {Categories?.map((val) => (
              <option key={val.id} className="capitalize" value={val.value}>
                {val.category}
              </option>
            ))}
          </select>
        </div>
        <SearchBar setQuery={setQuery}/>
      </div>
    </div>
  );
};
export default Header;
