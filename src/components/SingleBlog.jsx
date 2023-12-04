import { useState } from "react";
import { Link } from "react-router-dom";

const SingleBlog = ({ blog }) => {
const [full,setFull] = useState(false)

    const { id, title, image, description,prop } = blog;
  return (
    <div className="h-full w-full flex flex-col md:flex-row gap-6 p-3 rounded-lg items-center bg-slate-300">
      <div className="lg:w-[50%]">
        <img className="py-5 px-5" src={image} alt="" />
      </div>
      <div className="lg:w-[50%] py-10">
        <h1 className="text-2xl font-bold">{title}</h1>
        {
            // full? (<p className="pt-5 ">{description} <span onClick={()=>setFull(!full)} className="text-blue-400 cursor-pointer">Read Less</span> </p>) : ( <p className="pt-5 ">{description.slice(0,300) + '. . . .'} <span onClick={()=>setFull(!full)} className="text-blue-400 cursor-pointer">Read More</span></p>)
            (<p className="pt-5 ">{description.slice(0,120)} <Link to={`../blog/${prop}`}  className="text-blue-400 cursor-pointer">Read More</Link> </p>)
        }
       
       
      </div>
    </div>
  );
};

export default SingleBlog;
