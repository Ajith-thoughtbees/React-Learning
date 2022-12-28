import Product from "./Product"
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
        price: 12000000,
        buy: 'Buy now'
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
      price: 10000000,
      buy: 'Buy now'
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
      price: 7000000,
      buy: 'Buy now'
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
      price: 17000000,
      buy: 'Buy now'
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
      price: 18000000,
      buy: 'Buy now'
    }
  ]
const ProductDetails =()=>{
return(
     <>
     {products.map((l) => (
        <Product id={l.pID} brand={l.brand} model={l.model}
        isAvailable={l.isAvailable} desc={l.desc} date={l.Date} variant={l.variant}
        Verified={l.verified} price={l.price} buy={l.buy}></Product>
))}</> 
)
}

export default ProductDetails;