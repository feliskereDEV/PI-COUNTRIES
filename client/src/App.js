import './App.css';
import {Detail, Form, Home, Landing} from "./views"
import {Route, Switch} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import NotFound from './components/NotFound/NotFound';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  const {pathname} = useLocation();
  console.log(pathname.substr(0,7))
  return (
    <div className="App">
        {(pathname === "/home" || pathname=== "/create" || pathname.substr(0,7) === "/detail") && <NavBar/>}
        
        <Switch>
        <Route exact path="/" component={Landing}>
        <Landing/>
        </Route>
        
        <Route exact path="/detail/:id" component={Detail}>
        <Detail/>
        </Route>
        
        <Route exact path="/create" component={Form}>
        <Form/>
        </Route>
        
        <Route path="/home" component={Home}>
        <Home/>
        </Route>

        <Route path="*" component={NotFound}>
          <NotFound/>
        </Route>  

        </Switch>

    


    </div>
  );
}

export default App;
