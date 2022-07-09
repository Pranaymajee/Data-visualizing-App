const getData = (data) => {
    return {
        type : "SETDATA", 
        payload : data
    }
}
export default getData

export const getUpcommingData = (data) => {
    return {
        type : "UPCOMMING", 
        payload : data
    }
}

export const changePage = (data) => {
    return {
        type : "CHANGEPAGE", 
        payload : data
    }
}