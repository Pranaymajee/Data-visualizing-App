//Initializing every state in the reducer
const initialState = {
    currentData : [],
    currentPage : 0,
    overview : [],
    upcomming : {},
    dataLoad : "false",
    gridLoad : "true",
}
//Updating the state using switch case, depending upon which action is dispatched from App.js
const reducer = (state = initialState, action) => {
    switch(action.type){
        case "SETDATA":
            return{
                ...state, currentData : action.payload
            }
        case "CHANGEPAGE":
            return{
                ...state, currentPage : action.payload
            }
        case "OVERVIEW":
            return{
                ...state, overview : action.payload
            }
        case "UPCOMMING":
            return{
                ...state, upcomming : action.payload
            }
        case "DATALOAD":
            return{
                ...state, dataLoad : action.payload
            }
        case "GRIDLOAD":
            return{
                ...state, gridLoad : action.payload
            }
        default:
            return state;
    }
}

export default reducer;