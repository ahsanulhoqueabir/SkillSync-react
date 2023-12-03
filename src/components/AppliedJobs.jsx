import { useContext } from "react";
import { JobsContext } from "../App";
import { getFromLocalStorage } from "../utilities/fakedb";
import ShowAppliedJob from "./ShowAppliedJob";
import Lottie from "lottie-react";
import anim from "../assets/loaderrr.json";
import dotani from "../assets/dot-ani.json";
const AppliedJobs = () => {
  const allJobs = useContext(JobsContext).alljobs;
  const appliedJob = [];
  const showJobFromDB = () => {
    const data = getFromLocalStorage();
    for (const id in data) {
      const job = allJobs.find((j) => j.id === id);
      appliedJob.push(job);
    }
  };
  showJobFromDB();
  return (
    <div className="">
      <div className="relative flex items-center justify-center bg-slate-200 h-60  px-10">
        <h1 className="text-5xl font-bold text-center py-10">Applied Jobs</h1>
        <div className="absolute bottom-0 left-0 px-20">
          <Lottie animationData={anim} className=" h-48"></Lottie>
        </div>
        <div className="absolute translate-x-1/2 opacity-40">
          <Lottie animationData={dotani} className=" h-60"></Lottie>
        </div>
      </div>
      <div className="px-3 lg:px-52 py-16 flex flex-col gap-5">
        {appliedJob.map((job) => (
          <ShowAppliedJob job={job} key={job.id} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
