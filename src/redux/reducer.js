const initialState = {
    currentData : [],
    currentPage : 0,
    overview:[],
    
}

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
        default:
            return state;
    }
}

export default reducer;