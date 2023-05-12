import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getCountryByName, byActivity, byContinent,byName, byPopulation } from '../../redux/actions/actions'
import styles from "./CardsContainer.module.css";
import Card from "../Card/Card";
import SearchBar from "../SearchBar/SearchBar";



const CardsContainer= ()=>{
  
    const paisesTotales = useSelector((state)=> state.allCountries)
    const actividades = useSelector((state)=> state.allActivities)
    const filterCountries = useSelector((state)=> state.filteredCountries)

    const [countries, setCountries] = useState([])
//Paginado
    const [actualPage, setActualPage] = useState(1);
    const cardsByPage = 10;
    const lastCard = actualPage * cardsByPage;
    const firstCard = lastCard - cardsByPage;
    
    
    useEffect(()=>{
      setCountries(paisesTotales);
    },[paisesTotales])
    
    useEffect(()=>{
      setCountries(filterCountries);
      setActualPage(1)
    },[filterCountries]);
    
    console.log(countries)
    
    const totalPages = Math.ceil(filterCountries.length / cardsByPage)
    const page = countries.slice(firstCard, lastCard);
    
    
    

  
    
    const dispatch = useDispatch();
    // Filtrados
    const filterByContinent = (e) =>{
        dispatch(byContinent(e.target.value));
    
        if (e.target.value === "All"){
            setCountries([...countries]);
        } else{
            setCountries([...filterCountries])
        }
        e.target.value ="";
    };

    const filterByActivity = (e) =>{
        dispatch(byActivity(e.target.value));
        if (e.target.value === "All"){
            setCountries([...countries]);
        } else{
            setCountries([...filterCountries])
        }
        e.target.value ="";
    };
    // Ordenamientos

    const orderByName = (e) =>{
        dispatch(byName(e.target.value));
        e.target.value = "";
    };

    const orderByPop = (e) =>{
        dispatch(byPopulation(e.target.value));
        e.target.value = "";
    };

    let newActivities;

    if (Array.isArray(actividades)){
        newActivities = actividades.filter(
            (obj, index, arr) => index === arr.findIndex((t)=> t.name === obj.name)
        )
    }
    const searchCountry = (name) => {
        dispatch(getCountryByName(name));
        setCountries([...filterCountries]);
      };


    return(
        <>
    <div className={styles.contenedorGeneral}>
        <div className={styles.submenu}>
            
            <div className={styles.SearchBar}>
            <SearchBar searchCountry={searchCountry}/>
            </div>
        
        <div className={styles.filters}> 
        
        <select className={styles.selects} onChange={filterByContinent}>
            <option value="" hidden>
              Continent
            </option>
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="North America">North America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="South America">South America</option>
            <option value="Antarctica">Antarctica</option>
          </select>
        
        <select className={styles.selects} onChange={orderByName}>
            <option value="" hidden>
              Order
            </option>
            <option value="Ascendente">A - Z</option>
            <option value="Descendente">Z - A</option>
          </select>

          <select className={styles.selects} onChange={orderByPop}>
            <option value="" hidden>
              Population
            </option>
            <option value="Ascendente">More population</option>
            <option value="Descendente">Less population</option>
          </select>

          <select className={styles.selects} name="activity" onChange={filterByActivity}>
            <option value="" hidden>
              Activity
            </option>
            <option value="All">All</option>
            

            {Array.isArray(newActivities) ? (
                newActivities.map((activity) => {
                    return (
                        <option key={actividades.id} value={actividades.name}>
                    {activity.name}
                  </option>
                );
            })
            ) : (
              <option value="" disabled>Create a new activity</option>
              )}
          </select>
            
              </div>
        </div>
        <div className={styles.container}>
            {page.map(country => {
                return <Card
                
                id = {country.id}
                key = {country.id}
                name = {country.name}
                image = {country.image}
                continent = {country.continent}
            />})}
            </div>
        </div>
        <div className={styles.buttonContainer}>
        {
          totalPages === 1? null:
        
        actualPage === 1 ? (
        <>
        <button className={styles.actualPage} >{actualPage}</button>
        <button className={styles.pagButton} onClick={() => setActualPage(actualPage + 1)}>Next</button>
        </>
        ) : page.length < cardsByPage || actualPage === 25 ? (
          <>
          <button className={styles.pagButton} onClick={() => setActualPage(actualPage - 1)}>Prev</button>
          <button className={styles.actualPage} >{actualPage}</button>
          </>
        ) : (
          <>
            <button className={styles.pagButton} onClick={() => setActualPage(actualPage - 1)}>Prev</button>
            <button className={styles.actualPage} >{actualPage}</button>
            <button className={styles.pagButton} onClick={() => setActualPage(actualPage + 1)}>Next</button>
          </>
        )}
      </div>
        </>
    );
};

export default CardsContainer;