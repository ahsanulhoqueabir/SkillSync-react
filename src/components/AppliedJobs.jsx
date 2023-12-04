import { useContext } from "react";
import { JobsContext } from "../App";
import { getFromLocalStorage, removeAll } from "../utilities/fakedb";
import ShowAppliedJob from "./ShowAppliedJob";
import Lottie from "lottie-react";
import anim from "../assets/loaderrr.json";
import dotani from "../assets/dot-ani.json";
import { toast } from "react-toastify";

const AppliedJobs = () => {
  const allJobs = useContext(JobsContext).alljobs;
  let appliedJob = [];
  const showJobFromDB = () => {
    const data = getFromLocalStorage();
    for (const id in data) {
      const job = allJobs.find((j) => j.id === id);
      appliedJob.push(job);
    }
  };
  showJobFromDB();
  
  const onsiteJob = () => {
    // const data = appliedJob;
    const onsite = appliedJob.filter((job) => job.remote !== "true");
    // appliedJob.length = 0;
    // appliedJob = onsite;
    // return appliedJob;
    return onsite
  };
  // function for showing onsite and remote data
  const remoteJob = () => {
    const remote = appliedJob.filter((job) => job.remote === "true");
    return remote;
  };


  const ngtToast = ()=>
  {
    toast('Sorry')
  }
  

  return (
    <div className="">
      <div className="relative flex items-center justify-center bg-slate-200 h-32 lg:h-60  px-10">
        <h1 className="text-2xl lg:text-5xl font-bold text-center py-10">Applied Jobs</h1>
        <div className="absolute bottom-0 left-0 px-3 lg:px-20">
          <Lottie animationData={anim} className="h-20 lg:h-48"></Lottie>
        </div>
        <div className="absolute translate-x-1/2 opacity-40">
          <Lottie animationData={dotani} className="h-40 lg:h-60"></Lottie>
        </div>
      </div>
      <div>
        <div className="flex justify-center">
          <h1 className="text-2xl lg:text-4xl font-bold text-center py-10">
            {appliedJob.length === 0
              ? "You have not applied for any job yet"
              : "You have applied for " + appliedJob.length + " jobs"}
          </h1>
        </div>
        <div className="text-center ">
          <button
            onClick={onsiteJob.length ? (appliedJob = onsiteJob) : (ngtToast)} 
            className="btn hover:bg-green-200 myOutlinebtn mr-5"
          >
            Onsite
          </button>
          <button
            onClick={remoteJob}
            className="btn hover:bg-green-200 myOutlinebtn"
          >
            Remote
          </button>
        </div>
      </div>
      <div className="px-3 lg:px-52 py-16 flex flex-col gap-5">
        {appliedJob.map((job) => (
          <ShowAppliedJob job={job} key={job.id} />
        ))}
      </div>
      <div className="flex justify-center py-5">
      {
        appliedJob.length? ( <button onClick={removeAll} className="btn mybtn">Delete All</button>) : ''
      }
       
      </div>
    </div>
  );
};

export default AppliedJobs;
