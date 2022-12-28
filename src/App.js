import Dashboard from './Components/Dashboard';
import {Route,Routes } from "react-router-dom";
import Login from './Components/Login';
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <div className="">
    <Dashboard />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/product" element={<ProductDetails />} />
    </Routes>
 
    {/* <Header />
    <Content />
    <Footer /> */}
  
    </div>
  );
}

export default App;
