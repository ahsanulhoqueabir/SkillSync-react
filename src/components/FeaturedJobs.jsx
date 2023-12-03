import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { JobsContext } from "../App";
import EachJob from "./EachJob";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const FeaturedJobs = () => {
const jobs = useContext(JobsContext).alljobs 
const [showAll,setShowAll] = useState(false)
const show = ()=>
{
  setShowAll(!showAll)
} 
// console.log(jobs);
  return (
    <div className="py-10 px-5 lg:px-16">
      <h1 className="text-4xl text-center font-bold">Featured Jobs</h1>
      <p className="text-center pt-3">
        {" "}
        <small  >
          Explore Exciting Opportunities: Featured Jobs Await Your Talent and
          Ambition!
        </small>
      </p>
    <div className="">
      {
        showAll? (
          <div className="text-center">
            <div className="grid md:grid-cols-2 gap-5 py-10">

          {
            jobs.map(job => <EachJob job={job} key={job.id}></EachJob>)
          }
            </div>
          <button onClick={show} className="mybtn btn"><EyeSlashIcon className="h-5"/> Show Less</button>
          </div>
        ) : (
          <div className="text-center">
            <div  className="grid md:grid-cols-2 gap-5 py-10">

            {
              jobs && jobs.slice(0,4).map(job => <EachJob job={job} key={job.id}></EachJob> )
            }
            </div>
            <button onClick={show} className="btn mybtn "> <EyeIcon className="h-5"/> Show All</button>
          </div>
        )
        
      }
    </div>
    </div>
  );
};

export default FeaturedJobs;
