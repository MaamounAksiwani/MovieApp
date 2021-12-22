import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './Componets/Nav';
import Main from './Componets/Main';
import ViewDetails from './Componets/ViewDetails'
import { BrowserRouter, Route } from "react-router-dom";
import Favorites from './Componets/Favorites'
import Footer from './Componets/Footer'
//===============================================================

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
      <Route exact path="/" component={Main}/>
      <Route path="/viewDetails/:id" component={ViewDetails}/>
      <Route path="/Favorites" render={()=> <Favorites/>}/>
      <Footer />
    </div>
    </BrowserRouter>
  );
};

export default App;
