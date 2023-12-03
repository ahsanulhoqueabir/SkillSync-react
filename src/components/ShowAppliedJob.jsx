import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const ShowAppliedJob = ({ job }) => {
  const {
    id,
    title,
    salary,
    company,
    location,
    logo,
    remote,
    fullTime,
    contact,
    description,
    requirements,
    experience,
    responsibility,
  } = job;
  return (
    <div className="p-3 bg-cyan-50 rounded-lg flex gap-5 justify-between items-center">
      <div className="flex gap-5">
        <div>
          <img className="bg-gray-100 p-2 h-28 w-36" src={logo} alt="" />
        </div>
        <div>
          <p className="font-bold leading-9	">{title}</p>
          <p className="leading-9	">{company} </p>
          <div className="flex gap-3 my-3">
            <button className=" myOutlinebtn">
              {remote === "true" ? "Remote" : "Onsite"}
            </button>
            <button className="myOutlinebtn">
              {fullTime === "true" ? "Full Time" : "Part Time"}
            </button>
          </div>
          <div className="flex gap-6">
            <p className="text-lg text-gray-500 flex items-center gap-1">
              {" "}
              <MapPinIcon className="h-4" /> {location}
            </p>
            <p className="text-lg text-gray-500 flex items-center gap-1">
              {" "}
              <CurrencyDollarIcon className="h-4" /> {salary}
            </p>
          </div>
        </div>
      </div>
      <div>
        {" "}
        <Link to={`../job/${title}`} className="mybtn btn ">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ShowAppliedJob;
