import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import About from './components/About';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Catalogue from './components/Catalogue';
import Footer from './components/Footer';
import Home from './components/Home';
import Cart from './components/Cart/Cart';
//import Cart from './components/Cart';

function App() {
  return (

<>
<Router>
<div className='App'>
<Navbar />
  <Routes>
    <Route exact path='/'  element={<Home />}/>
    <Route exact path='/cartPage' element={<Cart />} />
</Routes>
</div>
</Router>

</>
 
  );
}

export default App;
