import {useNavigate} from "react-router-dom"
const SideBar = () => {
  const navigate=useNavigate()
  return (
    <div className="flex flex-col cursor-pointer">
      <div className="p-4 text-xl font-semibold border-b-2 border-black" onClick={()=>navigate("/all-banks")}>All Banks</div>
      <div className="p-4 text-xl font-semibold border-b-2 border-black" onClick={()=>navigate("/favorites")}>Favourites</div>
    </div>
  );
};
export default SideBar;
