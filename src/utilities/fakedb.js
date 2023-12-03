// Add data to locat storage 
const addToLocalStorage = (id)=> {
let appliedJobs = {}

// get previous data from local storage 
const exists = localStorage.getItem('applied-job')
    if(exists)
    {
        appliedJobs = JSON.parse(exists);
    }

    // add quantity 
    const quantity = appliedJobs[id];
    if(quantity)
    {
        const newQuanatity = quantity +1;
        appliedJobs[id] = newQuanatity;
    }
    else
    {
        appliedJobs[id] = 1;
    }
    localStorage.setItem('applied-job', JSON.stringify(appliedJobs));
}


// get data from local storage 
const getFromLocalStorage= ()=>
{
    const exists = localStorage.getItem('applied-job');
    return exists ? JSON.parse(exists) : {};
}
// remove all data 
const removeAll= ()=>
{
    localStorage.removeItem('applied-job');
}
// removes specific data 
const removeTargetCart =(id) =>
{
    const exists = getFromLocalStorage();
    if(exists)
    {
        delete exists[id];
        localStorage.setItem('applied-job', JSON.stringify(exists));
    }

}


export {addToLocalStorage,getFromLocalStorage,removeAll,removeTargetCart}