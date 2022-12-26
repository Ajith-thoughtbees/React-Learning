import '../Stylesheet/Product.css';

let isVerified = 'Verfied';
let badgeClass = 'badge';
badgeClass = isVerified === 'Verfied' ? 'bg-success' : 'bg-danger';

const Product = (data)=> {
return(
<div className="container">
<div className="row"> 
  <div className="col-md-3">
    <h4 className="brand">{data.brand}</h4>
    <h3 className="model">{data.model}</h3>
  </div><div className="col-md-4" id="desc">
    <ul className="desc">
      <li>Registration State: <b>{data.desc}</b></li>
      <li>Registration Date: <b>{data.date}</b></li> 
  <li>Variant : <b>{data.variant}</b>  </li> </ul></div>
 <div className="col-md-2">
 <a className={badgeClass}>{data.Verified}</a>
    <p className="price">&#x20B9;{data.price}</p>
 </div>
 <div className="col-md-3">
    <p className="buy">Buy now</p>
</div>
</div>
</div>
)
}
export default Product;