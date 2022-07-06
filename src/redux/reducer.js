const initialState = {
    currentData:[],
    currentPage:0
}


const reducer = (state=initialState,action) =>{
    switch(action.type){
        case "SETDATA":
            return{
                ...state, currentData: action.payload
            }

            case "CHANGEPAGE":
                return{
                    ...state, currentPage: action.payload
                }
    

        default:
            return state
        }
}

export default reducer;