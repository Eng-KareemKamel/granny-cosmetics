import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeItem, clearCart } from "../slices/cartSlice";
import { Link } from "react-router-dom";

export default function Cart() {
  const { items, totalAmount } = useSelector((s) => s.cart);
  const dispatch = useDispatch();

  if (items.length === 0)
    return (
      <div className="container py-5 text-center">
        <h3>Your cart is empty</h3>
        <p className="text-muted">Add products from the products page.</p>
        <Link to="/products" className="btn btn-primary">
          Browse Products
        </Link>
      </div>
    );

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">Your Cart</h2>
      <div className="row">
        <div className="col-lg-8">
          {items.map((it) => (
            <div key={it.id} className="d-flex align-items-center gap-3 p-3 mb-3 bg-white shadow-sm rounded">
              <img src={it.thumbnail || it.image} alt={it.title} style={{ height: 90, objectFit: "contain" }} />
              <div className="flex-grow-1">
                <h6 className="mb-1">{it.title}</h6>
                <p className="mb-1 text-muted">${it.price} each</p>
                <div className="d-flex align-items-center gap-2">
                  <button className="btn btn-sm btn-outline-secondary" onClick={() => dispatch(decreaseQuantity(it.id))}>-</button>
                  <span className="px-2">{it.quantity}</span>
                  <button className="btn btn-sm btn-outline-secondary" onClick={() => dispatch(increaseQuantity(it.id))}>+</button>
                </div>
              </div>
              <div className="text-end">
                <p className="mb-1 fw-bold">${(it.price * it.quantity).toFixed(2)}</p>
                <button className="btn btn-sm btn-outline-danger" onClick={() => dispatch(removeItem(it.id))}>Remove</button>
              </div>
            </div>
          ))}
        </div>

        <div className="col-lg-4">
          <div className="card p-4 shadow-sm">
            <h5 className="fw-bold">Order Summary</h5>
            <p className="text-muted">
              Total: <strong>${totalAmount.toFixed(2)}</strong>
            </p>
            <button className="btn btn-success w-100 mb-2">Checkout</button>
            <button className="btn btn-outline-danger w-100" onClick={() => dispatch(clearCart())}>
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
