
import './App.css';
import {Route, Switch} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Menu from "./panels/Menu";




function App() {
 
  return (
    <>
    <Menu />
     <Switch>
        <Route exact path="/" component={About}/>
        <Route path="/contact" component={Contact}/>
     </Switch>
     
      </>
      
  );
}

export default App;
