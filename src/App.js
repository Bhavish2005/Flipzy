
import './App.css';
import Navbar from './components/navbar/navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer/Footer';
import Men_Banner from './components/assests/banner_mens.png';
import Women_Banner from './components/assests/banner_women.png';
import Kids_Banner from './components/assests/banner_kids.png';


function App() {
  return (
    
   <BrowserRouter>
    <Navbar/>
    <Routes>
      
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory banner={Men_Banner} category="men"/>}/>
      <Route path='/womens' element={<ShopCategory banner={Women_Banner} category="women"/>}/>
      <Route path='/kids' element={<ShopCategory banner={Kids_Banner} category="kid"/>}/>
      <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
     
      <Route path='/login' element={<LoginSignup/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
  );      
}

export default App;
