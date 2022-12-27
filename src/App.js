import './App.css';
import Content from './Components/Content';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Product from './Components/Product';
import Forms from './Components/Form';
let products = [
  {
      pID: 1, 
      brand: 'TATA', 
      model: 'Volswagan',
      isAvailable: true,
      desc:'Andhra Pradesh',
      Date:'2012/11/20',
      variant:'Petrol',
      verified:'Verified',
      price: 12000000
  },
  {
    pID: 2, 
    brand: 'Audi', 
    model: 'A6',
    isAvailable: true,
    desc:'Himachal Pradesh',
    Date:'2015/17/08',
    variant:'Diesel',
    verified:'Not Verified',
    price: 10000000
  },
  {
    pID: 3, 
    brand: 'BMW', 
    model: 'Mercendez',
    isAvailable: true,
    desc:'Arunachal Pradesh',
    Date:'2022/10/02',
    variant:'Petrol',
    verified:'Verified',
    price: 7000000
  },
  {
    pID: 4, 
    brand: 'Mahindra', 
    model: 'Thar',
    isAvailable: true,
    desc:'Madhya Pradesh',
    Date:'2018/11/30',
    variant:'Diesel',
    verified:'Not Verified',
    price: 17000000
  },
  {
    pID: 5, 
    brand: 'Suzuki', 
    model: 'Baleono',
    isAvailable: true,
    desc:'Karnataka',
    Date:'2010/11/20',
    variant:'Petrol',
    verified:'Not Verified',
    price: 18000000
  }
]

function App() {
  return (
    <div className="col-lg-8 mx-auto">
    {/* <Header />
    <Content />
    <Footer /> */}
  <Forms />
  {/* <Product id={products[0].pID} brand={products[0].brand} model={products[0].model}
  isAvailable ={products[0].isAvailable} desc={products[0].desc} date={products[0].Date} variant={products[0].variant}
  Verified ={products[0].verified} price= {products[0].price}
  ></Product>
  <Product id={products[1].pID} brand={products[1].brand} model={products[1].model}
  isAvailable ={products[1].isAvailable} desc={products[1].desc} date={products[1].Date} variant={products[1].variant}
  Verified ={products[1].verified} price= {products[1].price}
  ></Product>
  <Product id={products[2].pID} brand={products[2].brand} model={products[2].model}
  isAvailable ={products[2].isAvailable} desc={products[2].desc} date={products[2].Date} variant={products[2].variant}
  Verified ={products[2].verified} price= {products[2].price}
  ></Product>
  <Product id={products[3].pID} brand={products[3].brand} model={products[3].model}
  isAvailable ={products[3].isAvailable} desc={products[3].desc} date={products[3].Date} variant={products[3].variant}
  Verified ={products[3].verified} price= {products[3].price}
  ></Product>
  <Product id={products[4].pID} brand={products[4].brand} model={products[4].model}
  isAvailable ={products[4].isAvailable} desc={products[4].desc} date={products[4].Date} variant={products[4].variant}
  Verified ={products[4].verified} price= {products[4].price}
  ></Product> */}
    </div>
  );
}

export default App;
