import { createContext, useState } from "react";
import "./App.css";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
export const JobsContext = createContext([]);
export const VacContext = createContext([]);
export const BlogContext = createContext([]);
function App() {
  const { allJobs, allVac, allblog } = useLoaderData();
  // console.log(allJobs, allVac);

  return (
    <JobsContext.Provider value={allJobs}>
      <VacContext.Provider value={allVac}>
        <BlogContext.Provider value={allblog}>
          <Header></Header>
          <div className="min-h-[calc(100vh-120px)]">
            <Outlet></Outlet>
          </div>
          <div className="">
            <Footer />
          </div>
        </BlogContext.Provider>
      </VacContext.Provider>
    </JobsContext.Provider>
  );
}

export default App;
