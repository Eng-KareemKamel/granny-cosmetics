import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "../slices/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Overview() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const { items } = useSelector((s) => s.cart);
  const current = items.find((i) => i.id === Number(id));

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch(() => toast.error("Failed to load product"));
  }, [id]);

  if (!product) return <div className="container py-5 text-center">Loading...</div>;

  const handleAdd = () => {
    dispatch(addToCart(product));
    toast.success("Added to cart");
  };

  const handleRemoveOne = () => {
    dispatch(decreaseQuantity(product.id));
    toast.info("Decreased quantity");
  };

  const handleIncrease = () => {
    dispatch(increaseQuantity(product.id));
    toast.info("Increased quantity");
  };

  const handleDelete = () => {
    dispatch(removeItem(product.id));
    toast.warn("Removed from cart");
  };

  return (
    <section className="container py-5 overview">
      <ToastContainer position="top-right" />
      <Link to="/products" className="btn btn-outline-secondary mb-4">
        ← Back
      </Link>

      <div className="overview-panel shadow-lg rounded-4 p-4 bg-white">
        <div className="row align-items-center">
          <div className="col-md-5 text-center mb-3 mb-md-0">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="overview-img"
            />
          </div>

          <div className="col-md-7">
            <h2 className="fw-bold">{product.title}</h2>
            <p className="text-muted">{product.description}</p>

            <div className="d-flex gap-3 mb-2 flex-wrap">
              <span className="badge bg-info text-dark">{product.category}</span>
              <span className="badge bg-secondary">
                Brand: {product.brand}
              </span>
            </div>

            <h4 className="fw-bold text-primary mb-4">${product.price}</h4>

            <div className="d-flex flex-wrap align-items-center gap-2">
              <button className="btn btn-dark" onClick={handleAdd}>
                Add to Cart
              </button>
              <button className="btn btn-outline-success" onClick={handleIncrease}>
                +
              </button>
              <button className="btn btn-outline-danger" onClick={handleRemoveOne}>
                –
              </button>
              <button className="btn btn-outline-secondary" onClick={handleDelete}>
                Delete
              </button>

              {current && (
                <div className="badge bg-light text-dark ms-2">
                  In cart: {current.quantity}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
