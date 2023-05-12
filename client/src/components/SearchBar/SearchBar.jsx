import React from 'react'
import styles from "./SearchBar.module.css"
import { getAllCountries } from '../../redux/actions/actions';
import { useDispatch } from 'react-redux';

const SearchBar = ({searchCountry})=>{
  const dispatch = useDispatch();
  const handleChange = (e) => {
  

  if (e.target.value !== "")searchCountry(e.target.value);
  else{dispatch(getAllCountries())}
  };


    return(
        <>
            <div>
      <input
        className={styles.inputSearch}
        placeholder="Search a country..."
        type="search"
        onChange={handleChange}
      />
    </div>
        </>
    );
};


export default SearchBar