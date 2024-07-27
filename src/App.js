import { BrowserRouter as Router, Routes,Route, Switch } from 'react-router-dom';
import Navbar from "./component/common/Navbar";
import Homepage from './pages/Homepage';
import Product_listing from './pages/Product_listing';
import Pdp_customization from './pages/Pdp_customization';


function App() {
  return (
  <div className='flex flex-col items-center jsutify-center w-screen'>
<Navbar/>
<Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/product-listing" element={<Product_listing/>} />
      <Route path="/pdp-customization" element={<Pdp_customization/>} />
</Routes>

  </div>
  );
}

export default App;
