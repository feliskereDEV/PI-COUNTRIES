import {NavLink} from "react-router-dom";
import styles from "./Landing.module.css"
import azafata from "../../assets/azafata.png"

const Landing = ()=>{
    return(
        <>
            <div className={styles.landing}>
            
            
            <div className={styles.textAzafata}>
                <span className={styles.text}>
                    Miss Iris:
                    <hr></hr>
                    Welcome to Aerolineas Felices, where do you want to go?
                    </span>
                <img className={styles.azafataImg} src={azafata} alt ="Es la imagen de una Azafata"/>
            </div>

            
           
            <NavLink to={"/home"}>
                <button className={styles.button}>Travel now!</button>
            </NavLink>
            </div>
        </>
    )
}

export default Landing;