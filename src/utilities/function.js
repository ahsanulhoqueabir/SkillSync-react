
const randomNumber = (length)=>
{
    let cur = Math.floor(Math.random()*length)
    return cur;
}

 const AllJobs = async () =>
{
    const jobs = await fetch('https://raw.githubusercontent.com/ahsanul-database/fakeDB/main/fakeJobData.json');
    // const jobs = await fetch('../../public/jobDetails.json')
    const alljobs = await jobs.json();
    return {alljobs};
}

const AllVacant = async ()=>
{
    const vacant = await fetch('https://raw.githubusercontent.com/ahsanul-database/fakeDB/main/fakePostsData.json')
    const data = await vacant.json();
    return data;
}
const allBlogs = async()=>
{
    const allblogs = await fetch('https://raw.githubusercontent.com/ahsanul-database/fakeDB/main/blogP.json')
    const blogs = await allblogs.json()
    return blogs;
}

const AllData = async ()=>
{
    const allJobs = await AllJobs()
    const allVac = await AllVacant()
    const allblog = await allBlogs()

    return {allJobs,allVac,allblog}
}



export {randomNumber,AllJobs,AllVacant,AllData};