import CardsContainer from "../../components/CardsContainer/CardsCointaner";
import { useEffect } from "react";
import {useDispatch} from "react-redux"
import {getActivities, getAllCountries,} from "../../redux/actions/actions"
import styles from "./Home.module.css"


const Home = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllCountries())
    },[dispatch])
    useEffect(()=>{
        dispatch(getActivities())
    },[dispatch])

    return(
        <>
        <div className={styles.cardContainer}>
            <CardsContainer/>
        </div>
        </>
    )
}

export default Home;