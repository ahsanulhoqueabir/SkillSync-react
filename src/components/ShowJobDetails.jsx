import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { JobsContext } from "../App";
import Lottie from "lottie-react";
import anim from "../assets/loaderrr.json";
import dotani from "../assets/dot-ani.json";
import {
  CalendarDaysIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { addToLocalStorage, getFromLocalStorage } from "../utilities/fakedb";
import { toast } from "react-toastify";

const ShowJobDetails = () => {
  const AllJobs = useContext(JobsContext).alljobs;
  const item = useLoaderData().params.title;
  const notify = () => toast("Wow so easy !");
  const data = AllJobs.find((job) => {
    if (job.title === item) return job;
  });
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
  } = data;
  const addToDB = (id) => {
    const applied = getFromLocalStorage();
    const value = applied[id];
    // console.log(value);
    if (value) {
      toast.error("You have already applied for this job!");
    } else {
      addToLocalStorage(id);
      toast.success("You have succesfully applied for this job!");
    }
  };
  return (
    <div className="">
      <div className="relative flex items-center justify-center bg-slate-200 h-60  px-10">
        <h1 className="text-3xl lg:text-5xl font-bold text-center py-10">Job Details</h1>
        <div className="absolute bottom-0 left-0 lg:px-20">
          <Lottie animationData={anim} className="h-20 lg:h-48"></Lottie>
        </div>
        <div className="absolute translate-x-1/2 opacity-40">
          <Lottie animationData={dotani} className="h-36 lg:h-60"></Lottie>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 px-5 lg:px-32 py-32 w-full">
        <div className="lg:w-[55%] h-full flex gap-3 flex-col ">
          <div className="flex-1">
            <span className="font-bold">Job Description:</span> {description}{" "}
          </div>
          <div>
            <span className="font-bold">Job Responsibility:</span>{" "}
            {responsibility}{" "}
          </div>
          <div>
            <span className="font-bold">Educational Requirements:</span>
            <br />
            {requirements}
          </div>
          <div>
            <span className="font-bold">Experiences:</span>
            <br />
            {experience}
          </div>
        </div>
        <div className=" rounded-lg p-3 h-full text-sm  lg:w-[35%]">
          <div className="bg-blue-100 p-3 divide-y-2 divide-gray-400">
            <p className="font-bold py-4">Job Details</p>
            <div className=" capitalize  py-5">
              <p className="flex gap-3">
                <span className="font-bold gap-2 flex items-center flex-row">
                  {" "}
                  <CurrencyDollarIcon className="h-5 text-teal-500" /> Salary:{" "}
                </span>
                {salary} (per month){" "}
              </p>
              <p className="flex gap-3">
                <span className="font-bold gap-2 flex items-center flex-row">
                  {" "}
                  <CalendarDaysIcon className="h-5 text-teal-500" /> Job Title :{" "}
                </span>
                {title}{" "}
              </p>
              <p className="pt-10 font-bold text-xl">Contact Information</p>
            </div>
            <div className="py-5">
              <p className="flex gap-3">
                <span className="font-bold gap-2 flex items-center flex-row">
                  <PhoneIcon className="text-teal-500 h-5" />
                  Phone:
                </span>
                {contact.phone}
              </p>
              <p className="flex gap-3">
                <span className="font-bold gap-2 flex items-center flex-row">
                  <EnvelopeIcon className="text-teal-500 h-5" />
                  Email:
                </span>
                {contact.email}
              </p>
              <p className="flex gap-3">
                <span className="font-bold gap-2 flex items-center flex-row">
                  <MapPinIcon className="text-teal-500 h-5" />
                  Location :
                </span>
                {location}
              </p>
            </div>
          </div>
          <Link
            onClick={() => addToDB(id)}
            className="btn w-full mt-4 bg-teal-300 rounded-lg hover:bg-green-200 border-none"
          >
            Apply now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowJobDetails;
