
import { 
    GET_ALL_COUNTRIES,
    GET_COUNTRY,
    GET_ACTIVITIES,
    GET_COUNTRY_BY_NAME,
    BY_ACTIVITY,
    BY_NAME,
    BY_POPULATION,
    BY_CONTINENT,
    CLEAR_DETAIL,
 } from "./actions/actionsType";




    const initialState = {
        allCountries: [],
        detailCountry:[],
        allActivities:[],
        filteredCountries:[],
    };

    export default function reducer(state = initialState, { type, payload }) {
        switch (type) {
          case GET_ALL_COUNTRIES:
            return {
              ...state,
              allCountries: payload,
            };
          case GET_COUNTRY:
            return {
              ...state,
              detailCountry: payload,
            };
          case CLEAR_DETAIL:
            return {
              ...state,
              detailCountry: payload,
            }
          case GET_ACTIVITIES:
            return {
              ...state,
              allActivities: payload,
            };
          case GET_COUNTRY_BY_NAME:
            const searchedCountry = [];
            searchedCountry.push(payload)
            return {
              ...state,
              filteredCountries: searchedCountry,
            }
      
          case BY_NAME:
            if (!state.filteredCountries.length) {
              let copiedCountries = [...state.countries];
              let orderByName;
      
              if (payload === "Ascendente") {
                orderByName = copiedCountries.sort((a, b) => {
                  if (a.name < b.name) {
                    return -1;
                  }
                  if (a.name > b.name) {
                    return 1;
                  }
                  return 0;
                });
              }
              if (payload === "Descendente") {
                orderByName = copiedCountries.sort((a, b) => {
                  if (a.name < b.name) {
                    return 1;
                  }
                  if (a.name > b.name) {
                    return -1;
                  }
                  return 0;
                });
              }
              return {
                ...state,
                allCountries: orderByName,
              };
            } else {
              let copiedCountries = [...state.filteredCountries];
              let orderByName;
      
              if (payload === "Ascendente") {
                orderByName = copiedCountries.sort((a, b) => {
                  if (a.name < b.name) {
                    return -1;
                  }
                  if (a.name > b.name) {
                    return 1;
                  }
                  return 0;
                });
              }
              if (payload === "Descendente") {
                orderByName = copiedCountries.sort((a, b) => {
                  if (a.name < b.name) {
                    return 1;
                  }
                  if (a.name > b.name) {
                    return -1;
                  }
                  return 0;
                });
              }
              return {
                ...state,
                filteredCountries: orderByName,
              };
            }
      
          case BY_CONTINENT:
            if (payload === "All") {
              return {
                ...state,
                allCountries: [...state.allCountries],
                filteredCountries: [...state.allCountries],
              };
            }
      
            let filter = [...state.allCountries].filter(
              (country) => country.continent === payload
            );
            return {
              ...state,
              filteredCountries: filter,
            };
      
          case BY_POPULATION:
            if (!state.filteredCountries.length) {
              let copiedCountries = [...state.allCountries];
              let orderByPop;
      
              if (payload === "Descendente") {
                orderByPop = copiedCountries.sort((a, b) => {
                  if (a.population < b.population) {
                    return -1;
                  }
                  if (a.population > b.population) {
                    return 1;
                  }
                  return 0;
                });
              }
              if (payload === "Ascendente") {
                orderByPop = copiedCountries.sort((a, b) => {
                  if (a.population < b.population) {
                    return 1;
                  }
                  if (a.population > b.population) {
                    return -1;
                  }
                  return 0;
                });
              }
              return {
                ...state,
                allCountries: orderByPop,
              };
            } else {
              let copiedCountries = [...state.filteredCountries];
              let orderByPop;
      
              if (payload === "Descendente") {
                orderByPop = copiedCountries.sort((a, b) => {
                  if (a.population < b.population) {
                    return -1;
                  }
                  if (a.population > b.population) {
                    return 1;
                  }
                  return 0;
                });
              }
              if (payload === "Ascendente") {
                orderByPop = copiedCountries.sort((a, b) => {
                  if (a.population < b.population) {
                    return 1;
                  }
                  if (a.population > b.population) {
                    return -1;
                  }
                  return 0;
                });
              }
              return {
                ...state,
                filteredCountries: orderByPop,
              };
            }
      
          case BY_ACTIVITY:
            let filterActivity;
      
            if (payload === "All") {
              return {
                ...state,
                allCountries: [...state.allCountries],
                filteredCountries: [...state.allCountries],
              };
            } else {
              filterActivity = state.allCountries.filter((country) => {
      
                for (let i = 0; i < country.activities.length; i++) {
                  if (country.activities[i].name === payload)
                    return true;
                }
                return false;
              });
              return {
                ...state,
                filteredCountries: filterActivity,
              };
            }
      
          default:
            return { ...state };
        }
      }
      