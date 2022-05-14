import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const favoriteData = JSON.parse(
    localStorage.getItem("favorites") ? localStorage.getItem("favorites") : "[]"
  );
  const navigate = useNavigate()
  return (
    <div>
      <h1 className="my-4 text-3xl font-bold">Favourite Banks</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
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
            {favoriteData.length > 0 ? (
              favoriteData?.map((value) => (
                <tr className="bg-white cursor-pointer border-b hover:bg-gray-50" onClick={()=>{navigate(`/bank_details/${value?.ifsc}`,{state:value})}}>
                  <td className="px-6 py-4 font-medium whitespace-nowrap">
                   {value?.bank_name}
                  </td>
                  <td className="px-6 py-4">{value?.ifsc}</td>
                  <td className="px-6 py-4">{value?.branch}</td>
                  <td className="px-6 py-4">{value?.bank_id}</td>
                  <td className="px-6 py-4 font-medium">{value?.address}</td>
                </tr>
              ))
            ) : (
              <tr className="flex p-8 justify-center text-2xl font-bold">
                {" "}
                No Data Found{" "}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Favorites;
