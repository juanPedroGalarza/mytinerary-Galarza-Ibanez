
const initialState = {
    cities: []
}

const citiesReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ALL_CITIES':
            return {
                ...state,
                cities: action.payload
            }
            default: return state
    }
};



export default citiesReducer;