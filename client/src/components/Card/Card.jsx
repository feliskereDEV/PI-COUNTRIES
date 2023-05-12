import {NavLink} from "react-router-dom";
import styles from "./Card.module.css";

const Card = (props)=>{
    const {id, name, image, continent} = props;
    console.log(continent)
    return (
        
        <>
                <div className={styles.book}>
                    <NavLink to={`/detail/${id}`}><button className={styles.buttonInside}>Travel now!</button></NavLink>
                <div className={styles.cover}>
                    <p className={styles.nameCountry}> <span className={styles.nameFont}>{name}</span> <span className={styles.passporteFont}>Passport</span></p>
                     <img className={styles.pasaporte} src={image} alt="Imagen de la bandera"></img> 
                    <p className={styles.continent}> <span className={styles.nameFont}>{continent}</span></p>  
                </div>
                </div>  
        </>
    );
};

export default Card;
