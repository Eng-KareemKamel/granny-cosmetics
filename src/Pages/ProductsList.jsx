import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, removeItem } from "../slices/cartSlice";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <section className="container py-5">
      <h2 className="text-center fw-bold mb-4">Our Products</h2>
      <div className="row g-4">
        {products.map((p) => (
          <div key={p.id} className="col-12 col-sm-6 col-lg-4">
            <div className="card product-card shadow-sm border-0 h-100">
              <img
                src={p.thumbnail}
                alt={p.title}
                className="card-img-top p-3"
                style={{ height: "220px", objectFit: "contain" }}
              />
              <div className="card-body text-center">
                <h6 className="card-title text-truncate fw-bold">{p.title}</h6>
                <p className="text-muted">${p.price}</p>
                <div className="btn-group">
                  <Link to={`/overview/${p.id}`} className="btn btn-outline-dark btn-sm">
                    View Details
                  </Link>
                  <button onClick={() => dispatch(addToCart(p))} className="btn btn-success btn-sm">
                    <FaPlus /> Add
                  </button>
                  <button onClick={() => dispatch(removeItem(p.id))} className="btn btn-danger btn-sm">
                    <FaMinus /> Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
