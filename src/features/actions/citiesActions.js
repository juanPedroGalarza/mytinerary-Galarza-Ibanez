import axios from "axios";

const citiesActions = {
    // addCity: () => {
    //     return async () => {
    //         const res = await axios.post(`http://localhost:4000/cities`)
    //         dispatch({type: 'ADD_CITY', payload:  })
    //     }
    // },

    getCities: (searchValue) => {

            return async (dispatch,getState) => {
                
                const res = await axios.get(`http://localhost:4000/cities/${searchValue ? `?city=${searchValue}` : ''}` )
                //console.log(res)
                dispatch({type: 'ALL_CITIES', payload: res.data.response})
            }
        },

    getOneCity: (id) => {
        
        return async (dispatch, getState) => {

            const res = await axios.get(`http://localhost:4000/cities/${id}`)
            dispatch({type:'ONE_CITY', payload: res.data.response})
            }
    }
    

}

export default citiesActions