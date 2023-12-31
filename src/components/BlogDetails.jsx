import React, { useContext } from "react";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import { BlogContext } from "../App";
import anim from "../assets/loaderrr.json";
import dotani from "../assets/dot-ani.json";
import Lottie from "lottie-react";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import LoadingPage from "./LoadingPage";

const BlogDetails = () => {
  const loading = useNavigation();
    if(loading.state ==='loading')
    {
       return  <LoadingPage/>;
    }
  const { params } = useLoaderData();
  const Title = params.title;
  const allBlog = useContext(BlogContext);
  const data = allBlog.find((blog) => {
    if (blog.prop === Title) return blog;
  });
  console.log(data);
  const { id, title, image, description, prop, profilePhoto,author } = data;
  return (
    <div>
      <div className="relative flex items-center justify-center bg-slate-200 h-60  px-10">
        <h1 className="text-2xl lg:text-4xl font-bold text-center py-10">
           {title}
        </h1>
        <div className="absolute bottom-0 left-0 lg:px-20">
          <Lottie animationData={anim} className="h-20 lg:h-48"></Lottie>
        </div>
        <div className="absolute translate-x-1/2 opacity-40">
          <Lottie animationData={dotani} className="h-36 lg:h-60"></Lottie>
        </div>
      </div>
      <div className="py-10 lg:px-40 px-5">
        <div className="p-3 gap-3 flex items-center bg-slate-100">
            <img src={profilePhoto} className="h-16 w-16 rounded-full" alt="" />
            <p className="font-bold">{author} </p>
        </div>
        <div >
            <img src={image} className="w-[75%] m-auto py-10" alt="" />
            <p className=" indent-4 lg:indent-10 text-justify text-xl tracking-normal lg:leading-8 leading-7">{description}</p>
        </div>
      </div>
      <div className="m-auto text-center py-10">
        <Link className="btn mybtn" to='/blog'><ArrowUturnLeftIcon className="h-5"/> Back to Blog Page</Link>
      </div>
    </div>
  );
};

export default BlogDetails;
