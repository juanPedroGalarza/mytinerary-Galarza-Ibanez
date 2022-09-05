import axios from "axios";

const citiesActions = {
    
    getCities: (searchValue) => {
            return async (dispatch,getState) => {
                
                const res = await axios.get(`http://localhost:4000/cities/${searchValue ? `?city=${searchValue}` : ''}` )
                //console.log(res)
                dispatch({type: 'ALL_CITIES', payload: res.data.response})
            }
        }
    

}

export default citiesActions