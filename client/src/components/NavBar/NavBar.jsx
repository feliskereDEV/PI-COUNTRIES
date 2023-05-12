import styles from "../NavBar/NavBar.module.css"
import {NavLink} from "react-router-dom"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min"




const NavBar = ()=>{
    const {pathname} = useLocation();
    return(
            <div className={styles.navbar}>
                <div className={styles.contenedorLista}>
                                <div className="containerNavLink">
                                <NavLink to="/home" className={pathname === "/home" ? styles.clicked : styles.notClicked}>Home</NavLink>
                                
                                <NavLink to="/create" className={pathname === "/create" ? styles.clicked : styles.notClicked}>New Activity</NavLink>
                                 {/* <NavLink className={styles.navlink} to="/create">New Activity</NavLink> */}
                      
                                <NavLink className={styles.notClicked} to="/">Logout</NavLink>
                                </div>
                </div>
            </div>
        )
}



export default NavBar;