
import axios from "axios";
import { GET_ALL_COUNTRIES } from "./actionsType";
import { GET_COUNTRY } from "./actionsType";
import { GET_COUNTRY_BY_NAME } from "./actionsType";
import { CLEAR_DETAIL } from "./actionsType";
import { GET_ACTIVITIES } from "./actionsType";
import { BY_ACTIVITY } from "./actionsType";
import { BY_CONTINENT } from "./actionsType";
import { BY_NAME } from "./actionsType";
import { BY_POPULATION } from "./actionsType";


const getAllCountries = () => {
    return async (dispatch)=>{
    const apiData = await axios.get("/countries")
    const countries = apiData.data;
    dispatch({
        type: GET_ALL_COUNTRIES,
        payload: countries,
    });
};
};


const getCountry = (id)=>{
    return async (dispatch) =>{
        const apiData = await axios.get(`/countries/${id}`)
        const country = apiData.data
        dispatch({
            type: GET_COUNTRY,
            payload: country,
        });
    };
};

const getCountryByName = (name)=>{
    return async (dispatch) =>{
        const apiData = await axios.get(`/countries?name=${name}`)
        const countryName = apiData.data
        console.log("hola", countryName)
        dispatch({
            type: GET_COUNTRY_BY_NAME,
            payload: countryName,
        });
    };
};

const clearDetail = ()=>{
    return {
        type: CLEAR_DETAIL,
        payload: [],
    };
};

const getActivities = ()=>{
    return async(dispatch)=>{
        const apiData = await axios.get("/activities")
        const allActivities = apiData.data
        dispatch({
            type: GET_ACTIVITIES,
            payload: allActivities
        });
    };
};

const byActivity = (name)=>{
   return{
    type: BY_ACTIVITY,
    payload: name,
   };
};

const byContinent = (continents)=>{
    return {
        type: BY_CONTINENT,
        payload: continents,
    };
};

const byName = (name)=>{
    return {
        type: BY_NAME,
        payload: name,
    };
};

const byPopulation = (pop)=>{
    return{
        type: BY_POPULATION,
        payload:pop,
    }
}


export {
    getCountry,
    getAllCountries,
    getCountryByName,
    clearDetail,
    getActivities,
    byActivity,
    byName,
    byContinent,
    byPopulation,

}


