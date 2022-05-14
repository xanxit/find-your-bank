import PropTypes from "prop-types"
const Pagination = ({
  lowerLimit,
  setLowerLimit,
  setUpperLimit,
  upperLimit,
  records,
  setRecords,
}) => {
  return (
    <div className="flex justify-center items-center my-4">
      {lowerLimit > 0 ? null : (
        <div className="mx-4">
          <input
            className={
              "border cursor-text bg-transparent w-10 border-gray-300 text-black text-sm p-1"
            }
            name="records"
            defaultValue={records}
            onChange={(e) => {
              e.target.value > 0 ? setRecords(e.target.value) : setRecords(10);
            }}
          />
          {"   "}per page
        </div>
      )}
      <div className="flex justify-center items-center">
        <button
          className={
            lowerLimit <= 0
              ? "hidden"
              : "inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
          }
          onClick={() => {
            setLowerLimit(Number(lowerLimit) - Number(records));
            setUpperLimit(lowerLimit);
          }}
          disabled={lowerLimit <= 0}
        >
          <svg
            className="mr-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          Previous
        </button>
        <button
          className={
            upperLimit >= 3700
              ? "hidden"
              : "inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
          }
          onClick={() => {
            setLowerLimit(Number(upperLimit));
            setUpperLimit(Number(upperLimit) + Number(records));
          }}
          disabled={upperLimit >= 3700}
        >
          Next
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
Pagination.propTypes = {
  lowerLimit: PropTypes.number.isRequired,
  setLowerLimit: PropTypes.func.isRequired,
  setUpperLimit: PropTypes.func.isRequired,
  upperLimit: PropTypes.number.isRequired,
  records: PropTypes.number.isRequired,
  setRecords: PropTypes.func.isRequired,
};
export default Pagination;
