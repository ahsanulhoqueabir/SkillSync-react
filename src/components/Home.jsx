import { Link, useLoaderData, useNavigation } from "react-router-dom";
import img from "../assets/bannerIMG.png";
import JobCategory from "./JobCategory";
import FeaturedJobs from "./FeaturedJobs";
import { useContext, useRef } from "react";
import { VacContext } from "../App";
import LoadingPage from "./LoadingPage";
const Home = () => {
  const loading = useNavigation();
    if(loading.state ==='loading')
    {
       return  <LoadingPage/>;
    }
  const allJobsCategory =useContext(VacContext)
  const sec1 = useRef(null)
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
     });
    };
  // console.log(allJobsCategory);
  return (
    <div className=" lg:px-12">
      <div className="flex flex-col-reverse lg:flex-row gap-4 lg:-mx-12 mx-5 lg:px-16 items-center bg-slate-100">
        <div className="lg:w-[60%] lg:pl-16 px-3">
          <h1 className="text-3xl lg:text-5xl font-bold">
            One Step Closer To Your{" "}
            <span className=" text-teal-400"> Dream Job</span>
          </h1>
          <p className="lg:pt-5 text-lg">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <p className="pt-10 pb-5 lg:pb-0">
            <Link onClick={() => scrollToSection(sec1)}  className="btn mybtn">
              Get Started
            </Link>
          </p>
        </div>
        <div>
          <img src={img} alt="banner" />
        </div>
      </div>
      <div className="">

      <JobCategory allJobsCategory={allJobsCategory} key={allJobsCategory.id} />
      {/* Featured Jobs */}
      <div  ref={sec1} id="jobs">
      <FeaturedJobs/>
      </div>
      </div>
    </div>
  );
};

export default Home;
