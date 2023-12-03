import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const EachJob = ({ job }) => {
  const { title, salary, company, location, logo, remote, fullTime } = job;
  return (
    <div className="p-4 flex flex-col gap-5 text-left bg-blue-100 rounded">
      <img src={logo} className=" h-40 w-[60%]" alt="" />
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-lg text-gray-500">{company} </p>
      <div className="flex gap-3">
        <button className=" myOutlinebtn">
          {remote === "true" ? "Remote" : "Onsite"}
        </button>
        <button className="myOutlinebtn">
          {fullTime === "true" ? "Full Time" : "Part Time"}
        </button>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <p className="text-lg text-gray-500 flex items-center gap-1">
          {" "}
          <MapPinIcon className="h-4" /> {location}
        </p>
        <p className="text-lg text-gray-500 flex items-center gap-1">
          {" "}
          <CurrencyDollarIcon className="h-4" /> {salary}
        </p>
      </div>
      {/* <button onClick={()=>{title}} className="mybtn btn w-[40%]">View Details</button> */}
      <Link to={`job/${title}`} className="mybtn btn w-[40%]">View Details</Link>
    </div>
  );
};

export default EachJob;
