
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./Form.module.css"
import axios from "axios";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { validate } from "./validation";
import { useDispatch } from "react-redux";
import { getAllCountries } from "../../redux/actions/actions";


const Form = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllCountries())
    },[dispatch])
    
    
    const duration= [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
        22, 23, 24,
      ];
// global: allCountries
      const countries = useSelector((state) => state.allCountries)
      console.log(countries)



// estado local:

const [form, setForm] = useState({
    name: "",
    difficulty: 0,
    duration: 0,
    season: "",
    countries:[],
})
 // Check form
useEffect(()=>{
    const checkFormComplete = () => {
      if (
        !form.name ||
        !form.difficulty ||
        !form.duration ||
        !form.season ||
        !form.countries.length
      ) {
        setFormComplete(false);
      } else {
        setFormComplete(true);
      }
    };
    checkFormComplete();
  }, [form])

  const [errors, setErrors] = useState({});
//  Handlers
const handleInputs = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value,
    });
    setErrors(validate({...form, [e.target.name]: e.target.value}))
}
const handleDelete = (name) => {
    setForm({
      ...form,
      countries: form.countries.filter((country) => country !== name),
    });
  };

  const selectCountry = (e) =>{
      if (!form.countries.includes(e.target.value)){
          setForm({
              ...form,
            countries: [...form.countries, e.target.value],
        });
    }
    setErrors(validate({...form, countries: e.target.value}))
};
//  Forms & demas
const  [formComplete, setFormComplete] = useState(false);
const  [created, setCreated] = useState("");

const clearForm = () => {
    setForm({
        name:"",
        difficulty:0,
        duration: 0,
        season: "",
        countries:[],
    });
};
const submitForm = async (e)=>{
    e.preventDefault();
    if (formComplete === true){
        await axios.post("/activities", form);
        setCreated("Activity successfully created")
    }
    clearForm();
}


    return(
            <form className={styles.formulario} onSubmit={submitForm}>
               <div className={styles.contenedorGeneral}>
                    <p className={styles.titulo}>Create activity</p>
                         {/* Selecciona el nombre */}
                    <div className={styles.contenedor}>
                        <label>Activity name</label>
                        <input className={styles.inputNombre}
                        onChange={handleInputs}
                        placeholder="Put activity name"
                        type="text"
                        value={form.name}
                        name="name"
                        />
                        <span className={styles.spans}>{errors.name}</span>
                    </div>
                         {/* Selecciona la dificultad */}
                    <div className={styles.contenedor}>
                        <label>Difficulty</label>
                        <select
                        className={styles.select}
                        onChange={handleInputs}
                        value={form.difficulty}
                        name="difficulty">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <span className={styles.spans}>{errors.difficulty}</span>
                    </div>
                        {/* Selecciona la duracion */}
                    <div className={styles.contenedor}>
                        <label>Duration</label>
                        <select
                        className={styles.select}
                        onChange={handleInputs}
                        value={form.duration}
                        name="duration">
                        <option value="" hidden>
                            Hours
                        </option>
                            {duration.map((duracion, index)=>(
                                <option key={index} value={duracion} name="duration">
                                    {duracion}
                                </option>
                            ))}
                        </select>
                        <span className={styles.spans}>{errors.duration}</span>
                    </div>

                        {/* Selecciona una temporada */}
                    <div className={styles.contenedor}>
                        <label>Season</label>
                        <select
                        className={styles.select}
                        onChange={handleInputs}
                        value={form.season}
                        name="season"
                        >
                        <option value="" hidden>
                            Choice a season
                        </option>
                        <option value="Spring">Spring</option>
                        <option value="Summer">Summer</option>
                        <option value="Autumn">Autumn</option>
                        <option value="Winter">Winter</option>
                        </select>
                        <span className={styles.spans}>{errors.season}</span>
                    </div>
                        
                        {/* Selecciona un pais */}
                    <div className={styles.contenedor}>
                        <div className={styles.listContainer}>
                                <label>Country</label>
                            <select className={styles.select} onChange={selectCountry}>
                                <option value="" hidden>
                                    Select countries
                                </option>
                                {countries.map((country)=>(
                                    <option key={country.id} value={country.name}>
                                        {country.name}
                                    </option>
                                    
                                ))}
                            </select>
                            <span className={styles.spans}>{errors.countries}</span>
                        </div>
                            {/* Borrador de countries seleccionados */}
                    <div className={styles.selectedCountry}>
                        {form.countries.map((c, index)=>(
                            <div key={index}>
                            <span>{c}</span>
                            <button
                            className={styles.deleteButton}
                            onClick={()=> handleDelete(c)}
                            type="button"
                            >x</button>
                        </div>
                        ))}
                        </div>
                    </div>
                    {/* Botones */}
                    <div>
                        <button
                        className={styles.submitButton}
                        type="submit"
                        >Submit</button>
                    
                        <button
                        onClick={clearForm} className={styles.clearButton}
                        >Clear</button>
                    </div>
                    <span>{created}</span>

                        <NavLink to="/home">
                            <button>Back to Home</button>
                        </NavLink>
                </div>            
            </form>
    );
};


export default Form;