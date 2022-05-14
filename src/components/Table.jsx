import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Table = ({
  data,
  favorites,
  setFavorites,
  category,
  query,
}) => {

  const [records, setRecords] = useState(10);
  const [lowerLimit, setLowerLimit] = useState(0);
  const [upperLimit, setUpperLimit] = useState(records);
  const [pageDataCount, setPageDataCount] = useState(
    data
      ?.filter((value) => {
        if (query === "") {
          return value;
        }
        if (category === "bank_name") {
          if (value?.bank_name?.includes(query.toUpperCase())) {
            return value;
          }
        }
        if (category === "bank_id") {
          if (value?.bank_id === Number(query)) {
            return value;
          }
        }
        if (category === "branch") {
          if (value?.branch?.includes(query.toUpperCase())) {
            return value;
          }
        }
        if (category === "ifsc") {
          if (value?.ifsc?.includes(query.toUpperCase())) {
            return value;
          }
        }
      })
      ?.slice(lowerLimit, upperLimit).length
  );
  const navigate = useNavigate();
  useEffect(() => {
    setUpperLimit(records);
  }, [records]);
  useEffect(() => {
    setPageDataCount(
      data
        ?.filter((value) => {
          if (query === "") {
            return value;
          }
          if (category === "bank_name") {
            if (value?.bank_name?.includes(query.toUpperCase())) {
              return value;
            }
          }
          if (category === "bank_id") {
            if (value?.bank_id === Number(query)) {
              return value;
            }
          }
          if (category === "branch") {
            if (value?.branch?.includes(query.toUpperCase())) {
              return value;
            }
          }
          if (category === "ifsc") {
            if (value?.ifsc?.includes(query.toUpperCase())) {
              return value;
            }
          }
        })
        ?.slice(lowerLimit, upperLimit).length
    );
  }, [upperLimit, category, query]);

  return (
    
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="p-4">
                Favourites
              </th>
              <th scope="col" className="px-6 py-3">
                Bank
              </th>
              <th scope="col" className="px-6 py-3">
                IFSC
              </th>
              <th scope="col" className="px-6 py-3">
                Branch
              </th>
              <th scope="col" className="px-6 py-3">
                Bank ID
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
            </tr>
          </thead>
          <tbody className="relative overflow-y-auto">
            {data?.filter((value) => {
              if (query === "") {
                return value;
              }
              if (category === "bank_name") {
                if (value?.bank_name?.includes(query.toUpperCase())) {
                  return value;
                }
              }
              if (category === "bank_id") {
                if (value?.bank_id === Number(query)) {
                  return value;
                }
              }
              if (category === "branch") {
                if (value?.branch?.includes(query.toUpperCase())) {
                  return value;
                }
              }
              if (category === "ifsc") {
                if (value?.ifsc?.includes(query.toUpperCase())) {
                  return value;
                }
              }
            }).length > 0 ? (
              data
                ?.filter((value) => {
                  if (query === "") {
                    return value;
                  }
                  if (category === "bank_name") {
                    if (value?.bank_name?.includes(query.toUpperCase())) {
                      return value;
                    }
                  }
                  if (category === "bank_id") {
                    if (value?.bank_id === Number(query)) {
                      return value;
                    }
                  }
                  if (category === "branch") {
                    if (value?.branch?.includes(query.toUpperCase())) {
                      return value;
                    }
                  }
                  if (category === "ifsc") {
                    if (value?.ifsc?.includes(query.toUpperCase())) {
                      return value;
                    }
                  }
                })
                ?.slice(lowerLimit, upperLimit)
                ?.map((value) => {
                  return (
                    <tr className="bg-white cursor-pointer border-b hover:bg-gray-50">
                      <td className="p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-table-1"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                            // defaultChecked={favorites ? favorites.includes(value.ifsc):false}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setFavorites([...favorites, value]);
                              } else {
                                setFavorites(
                                  favorites.filter((v) => v.ifsc !== value.ifsc)
                                );
                              }
                            }}
                          />
                        </div>
                      </td>
                      <td
                        className="px-6 py-4 font-medium whitespace-nowrap"
                        onClick={() => {
                          navigate(`/bank_details/${value?.ifsc}`, {
                            state: value,
                          });
                        }}
                      >
                        {value?.bank_name}
                      </td>
                      <td
                        className="px-6 py-4"
                        onClick={() => {
                          navigate(`/bank_details/${value?.ifsc}`, {
                            state: value,
                          });
                        }}
                      >
                        {value?.ifsc}
                      </td>
                      <td
                        className="px-6 py-4"
                        onClick={() => {
                          navigate(`/bank_details/${value?.ifsc}`, {
                            state: value,
                          });
                        }}
                      >
                        {value?.branch}
                      </td>
                      <td
                        className="px-6 py-4"
                        onClick={() => {
                          navigate(`/bank_details/${value?.ifsc}`, {
                            state: value,
                          });
                        }}
                      >
                        {value?.bank_id}
                      </td>
                      <td
                        className="px-6 py-4 font-medium"
                        onClick={() => {
                          navigate(`/bank_details/${value?.ifsc}`, {
                            state: value,
                          });
                        }}
                      >
                        {value?.address}
                      </td>
                    </tr>
                  );
                })
            ) : (
              <tr className="flex p-8 justify-center text-2xl font-bold">
                {" "}
                No Data Found{" "}
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end">
        {pageDataCount >= records ? (
          <Pagination
            lowerLimit={lowerLimit}
            setLowerLimit={setLowerLimit}
            setUpperLimit={setUpperLimit}
            upperLimit={upperLimit}
            records={records}
            setRecords={setRecords}
          />
        ) : null}
      </div>
    </div>
  );
};
Table.prototype = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  category: PropTypes.string,
  query: PropTypes.string,
  favorites: PropTypes.arrayOf(PropTypes.object),
  setFavorites: PropTypes.func,
};
export default Table;
