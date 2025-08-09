import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Cart from './Pages/Cart'
import Collection from './Pages/Collection'
import Login from './Pages/Login'
import PlaceOrder from './Pages/PlaceOrder'
import Orders from './Pages/Orders'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import SearchBar from './Components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/placeorder' element={<PlaceOrder/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
