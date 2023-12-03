import { randomNumber } from "../utilities/function";
import ShoweachCategory from "./ShoweachCategory";

const JobCategory = ({ allJobsCategory }) => {
  let newData = [];
  let displayItems = [];
  var n = 4;
  for (let i = 0; i < n; i++) {
    const pos = randomNumber(allJobsCategory.length);
    const present = newData.find((p) => p === pos);
    if (present) {
      n++;
    } else {
      newData.push(pos);
    }
  }
  for (let i = 0; i < 4; i++) {
    displayItems.push(allJobsCategory[newData[i]]);
  }
  return (
    <div className="py-10 px-5 lg:px-16">
      <div className="text-center">
        <h1 className="text-4xl py-2 font-semibold">Job Category List</h1>
        <small>
          Navigate diverse careers effortlessly. For job seekers and employers
          alike, find the perfect match efficiently. Happy exploring with us!
        </small>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-5 py-10">
        {displayItems.map((job) => (
          <ShoweachCategory key={job.id} job={job}></ShoweachCategory>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
