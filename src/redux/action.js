const getData = (data)=>{
    return {type:"SETDATA", payload:data}
}
export default getData


export const changePage = (data)=>{
    return {type:"CHANGEPAGE", payload:data}
}


