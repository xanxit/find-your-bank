import { useLocation } from "react-router-dom";

const BankDetails=()=>{
    const location=useLocation();
    return(
        <div className="flex items-center justify-center">
            <div>
                <h1 className="text-3xl font-bold text-center">Bank Details</h1>
                <div className="flex flex-col  my-20 font-semibold items-center justify-center">
                    <div>IFSC CODE: {location?.state?.ifsc} </div>
                    <div>BANK NAME: {location?.state?.bank_name} </div>
                    <div>BRANCH: {location?.state?.branch} </div>
                    <div>DISTRICT:{location?.state?.district} </div>
                    <div>CITY: {location?.state?.city} </div>
                    <div>STATE: {location?.state?.state}</div>
                    <div>ADDRESS: {location?.state?.address}</div>
                </div>
            </div>
        </div>
    )
}
export default BankDetails