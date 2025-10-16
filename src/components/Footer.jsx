export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container" style={{ display:'flex', flexDirection:'column', gap: '2rem' }}>
        
        
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap: '2rem', flexWrap:'wrap' }}>
          
          
          <div>
            <div style={{ fontWeight:800, color:'#cfeeff', fontSize:'1.2rem', marginBottom:6 }}>Granny Store ©
              <div>
                <br />
                <p>Contact us
                  <br />
                  Phone: +123 456 7890
                  <br />
                  Email: support@grannystore.com
                  <br />
                  Address: 123 Market St, City
                </p>
              </div>
            </div>
            <p className="text-muted">Premium demo storefront</p>
          </div>

          
          <div>
            <h4 style={{ color:'#cfeeff', fontWeight:700, marginBottom:8 }}>Quick Links</h4>
            <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:4 }}>
              <li><a href="/products">Products</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/cart">Cart</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ color:'#cfeeff', fontWeight:700, marginBottom:8 }}>Social Media</h4>
            <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:4 }}>
              <li><a href="/products">Facebook</a></li>
              <li><a href="/about">Instagram</a></li>
              <li><a href="/contact">Twitter</a></li>
              <li><a href="/cart">LinkedIn</a></li>
            </ul>
          </div>

          
          <div>
            <h4 style={{ color:'#cfeeff', fontWeight:700, marginBottom:8 }}>Subscribe</h4>
            <p className="text-muted" style={{ fontSize:'0.85rem' }}>Get the latest deals and updates</p>
            <form style={{ display:'flex', gap:6, marginTop:6 }}>
              <input type="email" placeholder="Email address" style={{ padding:'0.45rem 0.6rem', borderRadius:6, border:'none', flex:1 }} />
              <button type="submit" style={{ padding:'0.45rem 0.8rem', borderRadius:6, background:'#2d9cdb', color:'#fff', fontWeight:600, border:'none', cursor:'pointer' }}>Subscribe</button>
            </form>
          </div>

        </div>

       
        <div style={{ marginTop:16, textAlign:'center', borderTop:'1px solid rgba(255,255,255,0.1)', paddingTop:12 }}>
          <small>© {new Date().getFullYear()} Granny Store. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}
