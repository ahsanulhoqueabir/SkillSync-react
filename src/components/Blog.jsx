import Lottie from "lottie-react";
import { json, useLoaderData, useNavigation } from "react-router-dom";
import anim from "../assets/loaderrr.json";
import dotani from "../assets/dot-ani.json";
import SingleBlog from "./SingleBlog";
import { useContext } from "react";
import { BlogContext } from "../App";
import LoadingPage from "./LoadingPage";

const Blog = () => {
  const loading = useNavigation();
    if(loading.state ==='loading')
    {
       return  <LoadingPage/>;
    }
  const blogs = useContext(BlogContext);
  console.log(blogs);
  return (
    <div>
      <div className="relative flex items-center justify-center bg-slate-200 h-60  px-10">
        <h1 className="text-3xl lg:text-5xl font-bold text-center py-10">
          Blog
        </h1>
        <div className="absolute bottom-0 left-0 lg:px-20">
          <Lottie animationData={anim} className="h-20 lg:h-48"></Lottie>
        </div>
        <div className="absolute translate-x-1/2 opacity-40">
          <Lottie animationData={dotani} className="h-36 lg:h-60"></Lottie>
        </div>
      </div>
      <div className="py-10 px-3 lg:px-20 grid md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <SingleBlog key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
