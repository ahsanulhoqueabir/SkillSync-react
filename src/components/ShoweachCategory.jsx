
const ShoweachCategory = ({job}) => {
    const {availablePosts,icon,jobField,uniqueID} = job
    return (
        <div className="w-full bg-blue-100 py-8  pl-6 rounded-sm shadow-xl">
            <img className="p-3 bg-gray-2 rounded-lg" src={`${icon}?raw=true`} alt="" />
            <p className="py-2 font-bold text-xl">{jobField}</p>
            <p className=" text-gray-400">{availablePosts} Jobs Available</p>
            
        </div>
    );
};

export default ShoweachCategory;