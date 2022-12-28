import { NavLink } from 'react-router-dom';
import '../Stylesheet/Dashboard.css';

const Dashboard = () =>{
    return(
<section className="navigation">
  <div className="nav-container">
    <div className="brand">
      <a href="#!">LOGO</a>
    </div>
    <nav>
      <div className="nav-mobile">
        <a id="nav-toggle" href="#!"><span></span></a>
      </div>
      <ul className="nav-list">
        <li><a href="#!">Home</a></li>
        <li><a href="#!">About</a></li>
        <li><a href="#!">Services</a>
        </li>
        <li><NavLink to="product">Product</NavLink></li>
        <li><a href="#!">Contact</a></li>
      </ul>
    </nav>
  </div>
</section>
    )
}
export default Dashboard;