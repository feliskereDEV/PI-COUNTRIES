import React from "react";
import styles from "./NotFound.module.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import piloto from "../../assets/piloto.png"
const NotFound = () => {
    return (
        <>
        <div className={styles.notFound}>
        <div className={styles.containerCap}>
                <span className={styles.text}>
                    Captain Thor:
                    <hr></hr>
                    Hey... are you lost?
                    </span>
                <img className={styles.azafataImg} src={piloto} alt ="Es la imagen de un piloto"/>
        </div>
            
            <NavLink to={"/home"}>
                <button className={styles.button}>Go to the Airport</button>
            </NavLink>
        </div>
        </>
    )
    
}

export default NotFound;