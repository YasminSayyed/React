
import './App.css';
import {Route, Switch} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Series from "./Series";
import Menu from "./panels/Menu";
import Footer from "./panels/Footer";



function App() {
 
  return (
    <>
    <Menu />
    <Switch>
        <Route exact path="/" component={About}/>
        <Route path="/series" component={Series}/>
        <Route path="/contact" component={Contact}/>
     </Switch>
     <Footer />
      </>
      
  );
}

export default App;
