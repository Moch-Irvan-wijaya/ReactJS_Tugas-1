import './App.css'

function App() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Pesan terkirim!')
    e.target.reset()
  }

  return (
    <>
      <div className="container">
        {/* NAVBAR */}
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
            <i className="fa-solid fa-book fa-2xl" style={{ color: 'rgb(20, 0, 255)' }}></i>
            <span className="ms-2 fs-4">bookstore</span>
          </a>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" className="nav-link px-2">Home</a></li>
            <li><a href="#book" className="nav-link px-2">Book</a></li>
            <li><a href="#team" className="nav-link px-2">Team</a></li>
            <li><a href="#contact" className="nav-link px-2">Contact</a></li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Register</button>
          </div>
        </header>

        {/* HERO */}
        <div className="container my-5">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 className="display-4 fw-bold lh-1">Atomic Habits: perubahan Kecil yang diberikan hasil luar biasa.</h1>
              <p className="lead">Cara mudah dan terbukti untuk membentuk kebiasaan baik dan dapat menghilangkan kebiasaan buruk</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Buy Now</button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Detail</button>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 p-3 text-center">
              <img src="/Atomic Habits.jpg" alt="Atomic Habits" className="img-fluid shadow-lg" style={{ maxHeight: '450px' }} />
            </div>
          </div>
        </div>

        {/* BEST SELLER */}
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Best Seller</h1>
              <p className="lead text-muted">Kumpulan buku pengembangan diri yang paling banyak dicari. Cocok untuk kamu yang ingin berubah jadi lebih baik setiap hari.</p>
              <p>
                <a href="#book" className="btn btn-primary my-2 m-3">Views</a>
                <a href="#" className="btn btn-secondary my-2">Other Book</a>
              </p>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card h-100 shadow-sm">
                  <img src="/Atomic Habits.jpg" className="card-img-top p-3" alt="Atomic Habits" style={{ height: '350px', objectFit: 'contain' }} />
                  <div className="card-body">
                    <h5 className="card-title">Atomic Habits</h5>
                    <p className="text-muted mb-2">James Clear</p>
                    <p className="card-text">Cara mudah dan terbukti untuk membentuk kebiasaan baik dan menghilangkan kebiasaan buruk lewat perubahan kecil.</p>
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 shadow-sm">
                  <img src="/Deep Worok.jpg" className="card-img-top p-3" alt="Deep Work" style={{ height: '350px', objectFit: 'contain' }} />
                  <div className="card-body">
                    <h5 className="card-title">Deep Work</h5>
                    <p className="text-muted mb-2">Cal Newport</p>
                    <p className="card-text">Aturan untuk bisa fokus dan sukses di tengah dunia yang penuh gangguan.</p>
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 shadow-sm">
                  <img src="/Filosofi Teras.jpg" className="card-img-top p-3" alt="Filosofi Teras" style={{ height: '350px', objectFit: 'contain' }} />
                  <div className="card-body">
                    <h5 className="card-title">Filosofi Teras</h5>
                    <p className="text-muted mb-2">Henry Manampiring</p>
                    <p className="card-text">Filsafat Yunani-Romawi kuno untuk membangun mental yang tangguh di masa kini.</p>
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 shadow-sm">
                  <img src="/Grit.jpg" className="card-img-top p-3" alt="Grit" style={{ height: '350px', objectFit: 'contain' }} />
                  <div className="card-body">
                    <h5 className="card-title">Grit</h5>
                    <p className="text-muted mb-2">Angela Duckworth</p>
                    <p className="card-text">Kekuatan passion dan kegigihan sebagai kunci utama meraih kesuksesan.</p>
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 shadow-sm">
                  <img src="/How to friend.jpg" className="card-img-top p-3" alt="How to Win Friends and Influence People" style={{ height: '350px', objectFit: 'contain' }} />
                  <div className="card-body">
                    <h5 className="card-title">How to Win Friends &amp; Influence People</h5>
                    <p className="text-muted mb-2">Dale Carnegie</p>
                    <p className="card-text">Panduan klasik membangun relasi yang baik dan memengaruhi orang lain dengan cara yang positif.</p>
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 shadow-sm">
                  <img src="/Mindset.jpg" className="card-img-top p-3" alt="Mindset" style={{ height: '350px', objectFit: 'contain' }} />
                  <div className="card-body">
                    <h5 className="card-title">Mindset</h5>
                    <p className="text-muted mb-2">Carol S. Dweck</p>
                    <p className="card-text">Mengubah pola berpikir untuk perubahan besar dalam hidup.</p>
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 shadow-sm">
                  <img src="/Sebuah seni.jpg" className="card-img-top p-3" alt="Sebuah Seni untuk Bersikap Bodo Amat" style={{ height: '350px', objectFit: 'contain' }} />
                  <div className="card-body">
                    <h5 className="card-title">Sebuah Seni untuk Bersikap Bodo Amat</h5>
                    <p className="text-muted mb-2">Mark Manson</p>
                    <p className="card-text">Pendekatan yang waras demi menjalani hidup yang baik.</p>
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 shadow-sm">
                  <img src="/the 7 habits.jpg" className="card-img-top p-3" alt="The 7 Habits of Highly Effective People" style={{ height: '350px', objectFit: 'contain' }} />
                  <div className="card-body">
                    <h5 className="card-title">The 7 Habits of Highly Effective People</h5>
                    <p className="text-muted mb-2">Stephen R. Covey</p>
                    <p className="card-text">Pelajaran penting tentang perubahan diri untuk menjadi pribadi yang lebih efektif.</p>
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 shadow-sm">
                  <img src="/the psychology.jpg" className="card-img-top p-3" alt="The Psychology of Money" style={{ height: '350px', objectFit: 'contain' }} />
                  <div className="card-body">
                    <h5 className="card-title">The Psychology of Money</h5>
                    <p className="text-muted mb-2">Morgan Housel</p>
                    <p className="card-text">Pelajaran abadi tentang kekayaan, keserakahan, dan kebahagiaan.</p>
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOOK */}
        <section id="book" className="py-5 container">
          <h2 className="fw-light text-center mb-4">Book</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img src="/Atomic Habits.jpg" className="card-img-top p-3" alt="Atomic Habits" style={{ height: '300px', objectFit: 'contain' }} />
                <div className="card-body">
                  <h5 className="card-title">Atomic Habits</h5>
                  <p className="card-text text-muted">James Clear</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold">Rp 95.000</span>
                    <button className="btn btn-primary btn-sm">Beli</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 shadow-sm">
                <img src="/Deep Worok.jpg" className="card-img-top p-3" alt="Deep Work" style={{ height: '300px', objectFit: 'contain' }} />
                <div className="card-body">
                  <h5 className="card-title">Deep Work</h5>
                  <p className="card-text text-muted">Cal Newport</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold">Rp 89.000</span>
                    <button className="btn btn-primary btn-sm">Beli</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 shadow-sm">
                <img src="/Filosofi Teras.jpg" className="card-img-top p-3" alt="Filosofi Teras" style={{ height: '300px', objectFit: 'contain' }} />
                <div className="card-body">
                  <h5 className="card-title">Filosofi Teras</h5>
                  <p className="card-text text-muted">Henry Manampiring</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold">Rp 78.000</span>
                    <button className="btn btn-primary btn-sm">Beli</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section id="team" className="py-5 bg-light">
          <div className="container">
            <h2 className="fw-light text-center mb-4">Our Team</h2>
            <div className="row row-cols-2 row-cols-md-4 g-4 text-center">
              <div className="col">
                <img src="/Ganteng.jpg" className="rounded-circle mb-3 shadow-sm" alt="Irvan" width="150" height="150" />
                <h5 className="mb-0">Irvan</h5>
                <p className="text-muted">Founder</p>
              </div>

              <div className="col">
                <img src="cantik.jpg" className="rounded-circle mb-3 shadow-sm" alt="Sinta" width="150" height="150" />
                <h5 className="mb-0">Sinta</h5>
                <p className="text-muted">Designer</p>
              </div>

              <div className="col">
                <img src="cantik.jpg" className="rounded-circle mb-3 shadow-sm" alt="Budi" width="150" height="150" />
                <h5 className="mb-0">Budi</h5>
                <p className="text-muted">Developer</p>
              </div>

              <div className="col">
                <img src="cantik.jpg" className="rounded-circle mb-3 shadow-sm" alt="Rina" width="150" height="150" />
                <h5 className="mb-0">Rina</h5>
                <p className="text-muted">Marketing</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-5 container">
          <h2 className="fw-light text-center mb-4">Contact</h2>
          <div className="row g-5">
            <div className="col-md-5">
              <h5>Hubungi Kami</h5>
              <p className="text-muted">Ada pertanyaan soal buku? Kirim pesan aja.</p>
              <p><i className="fa-solid fa-location-dot me-2"></i>Depok, Jawa Barat</p>
              <p><i className="fa-solid fa-envelope me-2"></i>info@bookstore.com</p>
              <p><i className="fa-solid fa-phone me-2"></i>0812-3456-7890</p>
            </div>
            <div className="col-md-7">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="nama" className="form-label">Nama</label>
                  <input type="text" className="form-control" id="nama" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="pesan" className="form-label">Pesan</label>
                  <textarea className="form-control" id="pesan" rows="4" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Kirim</button>
              </form>
            </div>
          </div>
        </section>
      </div>
      {/* ↑ penutup container utama (ini yang tadi kurang) */}

      {/* FOOTER */}
      <div className="container">
        <footer className="pt-5 pb-3 mt-5 border-top">
          <div className="row">
            {/* Kolom 1: Brand */}
            <div className="col-md-5 mb-4">
              <div className="d-flex align-items-center mb-2">
                <i className="fa-solid fa-book fa-xl" style={{ color: 'rgb(20, 0, 255)' }}></i>
                <span className="ms-2 fs-4">bookstore</span>
              </div>
              <p className="text-secondary">Toko buku online dengan koleksi pilihan untuk teman belajarmu.</p>
            </div>

            {/* Kolom 2: Menu */}
            <div className="col-6 col-md-3 mb-4">
              <h6 className="fw-bold">Menu</h6>
              <ul className="nav flex-column">
                <li className="nav-item"><a href="#" className="nav-link p-0 mb-2">Home</a></li>
                <li className="nav-item"><a href="#book" className="nav-link p-0 mb-2">Book</a></li>
                <li className="nav-item"><a href="#team" className="nav-link p-0 mb-2">Team</a></li>
                <li className="nav-item"><a href="#contact" className="nav-link p-0 mb-2">Contact</a></li>
              </ul>
            </div>

            {/* Kolom 3: Kontak + Social media */}
            <div className="col-6 col-md-4 mb-4">
              <h6 className="fw-bold">Kontak</h6>
              <p className="text-secondary mb-1"><i className="fa-solid fa-location-dot me-2"></i>Depok, Jawa Barat</p>
              <p className="text-secondary mb-1"><i className="fa-solid fa-envelope me-2"></i>info@bookstore.com</p>
              <p className="text-secondary mb-3"><i className="fa-solid fa-phone me-2"></i>0812-3456-7890</p>
              <div className="fs-4">
                <a href="https://www.instagram.com/mochirwi/" target="_blank" rel="noreferrer" className="text-secondary me-3"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.facebook.com/irvan.wijaya.1257" target="_blank" rel="noreferrer" className="text-secondary me-3"><i className="fa-brands fa-facebook"></i></a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-muted border-top pt-3">
            © {new Date().getFullYear()} Moch-Irwi
          </div>
        </footer>
      </div>
    </>
  )
}

export default App