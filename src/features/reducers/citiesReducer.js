
const initialState = {
    cities: [],
    city: {}
};

const citiesReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ALL_CITIES':
            return {
                    ...state,
                    cities: action.payload
                }
                
                // case 'ADD_CITY':
                //     return{
                //    city: action.payload
                //     }
                
            case 'ONE_CITY':
                return{
                        ...state,
                        city: action.payload
                    }
        default: return state
    }
};



export default citiesReducer;