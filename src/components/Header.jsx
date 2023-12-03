import { Link, NavLink } from "react-router-dom";
import { Bars3BottomLeftIcon } from '@heroicons/react/24/solid'
const Header = () => {
  return (
    <div className="navbar shadow-2xl sticky top-0 z-10 shadow-teal-200 bg-blue-100 lg:px-12">
      <div className="navbar-start">
        <div className="dropdown">
            {/* Mobile View  */}
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
            {/* <p><Bars3BottomLeftIcon className=" text-black "></Bars3BottomLeftIcon></p> */}
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              to="/statistics"
              className={({ isActive }) => isActive && "text-blue-600"}
            >
              Statistics
            </NavLink>
            <NavLink
              to="/appliedJobs"
              className={({ isActive }) => isActive && "text-blue-600"}
            >
              Applied Jobs
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) => isActive && "text-blue-600"}
            >
              Blog
            </NavLink>
          </ul>
        </div>
<Link className="text-2xl font-semibold font-serif">SkillSync</Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <div className="menu menu-horizontal px-1 flex gap-3 font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) => isActive && "text-blue-600"}
          >
            Home
          </NavLink>
          <NavLink
            to="/statistics"
            className={({ isActive }) => isActive && "text-blue-600"}
          >
            Statistics
          </NavLink>
          <NavLink
            to="/appliedJobs"
            className={({ isActive }) => isActive && "text-blue-600"}
          >
            Applied Jobs
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => isActive && "text-blue-600"}
          >
            Blog
          </NavLink>
        </div>
      </div>
      <div className="navbar-end">
        <a className="btn mybtn">Start Applying</a>
      </div>
    </div>
  )
}

export default Header;

{
  /* <div className="px-20 navbar bg-blue-100">
<div className="navbar-start">
  <Link className="text-3xl font-bold font-mono">SkillSync</Link>
</div>
<div className="navbar-center hidden lg:flex gap-3 font-semibold">
  <NavLink
    to="/statistics"
    className={({ isActive }) => isActive && "text-blue-600"}
  >
    Statistics
  </NavLink>
  <NavLink
    to="/appliedJobs"
    className={({ isActive }) => isActive && "text-blue-600"}
  >
    Applied Jobs
  </NavLink>
  <NavLink
    to="/blog"
    className={({ isActive }) => isActive && "text-blue-600"}
  >
    Blog
  </NavLink>
</div>
<div className="navbar-end">
  <a className="btn mybtn">Star Applying</a>
</div>
</div> */
}
