import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const featured = [
    { id: 1, title: "Pink Lipstick", img: "/images/1.jpeg", price: "99" },
    { id: 2, title: "Dior J'adore", img: "/images/2.jpg", price: "120" },
    { id: 3, title: "Calvin Klein", img: "/images/3.jpg", price: "89" },
  ];

  return (
    <>
      <section className="hero">
        <div className="overlay" />
        <div className="card container">
          <div className="left text-center">
            <h1>Upgrade your style with Granny Store</h1>
            <p className="lead">Curated products, premium feel, designed for a better shopping experience.</p>
            <Link to="/products" className="btn-cta text-decoration-none">Start Shopping</Link>
          </div>
          <div className="right" style={{minWidth:260, display:'flex', justifyContent:'center'}}>
            {/* <img src="/images/hero-product.png" alt="hero product" style={{maxHeight:220}} /> */}
          </div>
        </div>
      </section>

      <section className="container text-center">
        <button type="submit" style={{ padding:'0.45rem 0.8rem', borderRadius:6, background:'#2d9cdb', color:'#fff', fontWeight:600, border:'none', cursor:'pointer' }}>Featured Products</button>
        <div className="grid mb-3 m-auto" style={{maxWidth:900}}>
          {featured.map((p)=>(
            <article className="product" key={p.id}>
              <div className="media">
                <img src={p.img} alt={p.title} />
              </div>
              <div className="body">
                <div>
                  <div className="title">{p.title}</div>
                  <div className="price">${p.price}</div>
                </div>

                <div className="actions">
                  <div className="left">
                    <Link to={`/overview/${p.id}`} className="btn btn-outline-dark">View Details</Link>
                  </div>
                  <div className="right">
                    <span className="pill">New</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
