import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const totalQuantity = useSelector((s) => s.cart.totalQuantity || 0);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="brand">
          <span style={{display:'inline-block',width:36,height:36,borderRadius:10,background:'white',padding:6,boxSizing:'content-box'}}>
            <svg width="46" height="50" viewBox="0 0 24 24" fill="none"><path d="M3 3h2l1 9h11l1-5h-9" stroke="#2d9cdb" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          <span style={{marginLeft:2,color:'#0d0f11ff',fontWeight:700, fontSize:24}}>Granny Store</span>
        </Link>

        <div className="nav-actions">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/products">Products</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/contact">Contact</Link>

          <Link to="/cart" className="btn-cart" aria-label="Cart">
            <FaShoppingCart style={{color:'#000000ff'}} />
            <span className="badge-count">{totalQuantity}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
