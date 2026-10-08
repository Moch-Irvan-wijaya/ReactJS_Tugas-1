import { useState } from 'react'
import './App.css'

function App() {
  // STATE
  const [page, setPage] = useState('home')
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Semua')
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  // DATA
  const books = [
    { id: 1, title: 'Atomic Habits', author: 'James Clear', category: 'Kebiasaan', price: 'Rp 99.000', img: '/Atomic Habits.jpg', desc: 'Cara membangun kebiasaan baik lewat perubahan kecil yang konsisten.' },
    { id: 2, title: 'Filosofi Teras', author: 'Henry Manampiring', category: 'Mindset', price: 'Rp 89.000', img: '/Filosofi Teras.jpg', desc: 'Pengantar filsafat Stoa untuk hidup lebih tenang di zaman modern.' },
    { id: 3, title: 'Mindset', author: 'Carol S. Dweck', category: 'Mindset', price: 'Rp 105.000', img: '/Mindset.jpg', desc: 'Bagaimana pola pikir bertumbuh membuat kita lebih berkembang dan tangguh.' },
    { id: 4, title: 'Deep Work', author: 'Cal Newport', category: 'Produktivitas', price: 'Rp 109.000', img: '/Deep Worok.jpg', desc: 'Strategi fokus tanpa gangguan untuk menghasilkan karya yang bernilai.' },
    { id: 5, title: 'The 7 Habits of Highly Effective People', author: 'Stephen R. Covey', category: 'Produktivitas', price: 'Rp 119.000', img: '/the 7 habits.jpg', desc: 'Tujuh prinsip untuk menjadi pribadi yang efektif dalam hidup dan pekerjaan.' },
    { id: 6, title: 'Sebuah Seni untuk Bersikap Bodo Amat', author: 'Mark Manson', category: 'Mindset', price: 'Rp 85.000', img: '/Sebuah seni.jpg', desc: 'Belajar memilih hal yang benar-benar penting dan melepaskan sisanya.' },
    { id: 7, title: 'How to Win Friends and Influence People', author: 'Dale Carnegie', category: 'Komunikasi', price: 'Rp 95.000', img: '/How to friend.jpg', desc: 'Kiat klasik membangun hubungan dan berkomunikasi dengan baik.' },
    { id: 8, title: 'Grit', author: 'Angela Duckworth', category: 'Mindset', price: 'Rp 99.000', img: '/Grit.jpg', desc: 'Mengapa ketekunan dan semangat jangka panjang sering mengalahkan bakat.' },
    { id: 9, title: 'The Psychology of Money', author: 'Morgan Housel', category: 'Keuangan', price: 'Rp 109.000', img: '/the psychology.jpg', desc: 'Pelajaran tentang perilaku dan cara berpikir yang sehat soal uang.' },
  ]

  const members = [
    { name: 'Irvan', role: 'Founder & Web Developer', img: '/Ganteng.jpg', desc: 'Membangun dan merawat tampilan toko buku online ini.' },
    { name: 'Iyun', role: 'UI/UX Designer', img: '/cantik.jpg' , desc: 'Merancang tampilan yang nyaman dan mudah dipakai.' },
    { name: 'Jeje', role: 'Content Curator', img: '/cantik.jpg' , desc: 'Memilih dan mengulas buku-buku terbaik untuk pembaca.' },
    { name: 'Jordan', role: 'Customer Support', img: '/cantik.jpg' , desc: 'Siap membantu pesanan dan pertanyaanmu setiap hari.' },
  ]

  // FUNGSI
  const renderBook = (b) => (
    <div className="col" key={b.id}>
      <div className="card shadow-sm h-100">
        <img src={b.img} className="card-img-top" alt={b.title} style={{ height: '360px', objectFit: 'contain' }} />
        <div className="card-body d-flex flex-column">
          <span className="badge text-bg-light align-self-start mb-2">{b.category}</span>
          <h5 className="card-title mb-0">{b.title}</h5>
          <small className="text-muted mb-2">{b.author}</small>
          <p className="card-text">{b.desc}</p>
          <div className="d-flex justify-content-between align-items-center mt-auto">
            <span className="fw-bold text-primary">{b.price}</span>
            <button type="button" className="btn btn-sm btn-primary">
              <i className="fa-solid fa-cart-plus me-1"></i>Beli
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  // Pindah halaman
  const goTo = (e, target) => {
    e.preventDefault()
    setPage(target)
    window.scrollTo(0, 0)
  }

  // Class menu aktif
  const navClass = (target) => `nav-link px-2 ${page === target ? 'fw-bold text-primary' : ''}`

  // Form contact
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  // Search + filter buku
  const categories = ['Semua', ...new Set(books.map((b) => b.category))]
  const filteredBooks = books.filter(
    (b) =>
      (category === 'Semua' || b.category === category) &&
      (b.title + b.author).toLowerCase().includes(search.toLowerCase())
  )

  // TAMPILAN
  return (
    <>
      <div className="container">
        {/* Header */}
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <a href="/" onClick={(e) => goTo(e, 'home')} className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
            <i className="fa-solid fa-book fa-2xl" style={{ color: 'rgb(20, 0, 255)' }}></i>
            <span className="ms-2 fs-4">bookstore</span>
          </a>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" onClick={(e) => goTo(e, 'home')} className={navClass('home')}>Home</a></li>
            <li><a href="#" onClick={(e) => goTo(e, 'book')} className={navClass('book')}>Book</a></li>
            <li><a href="#" onClick={(e) => goTo(e, 'team')} className={navClass('team')}>Team</a></li>
            <li><a href="#" onClick={(e) => goTo(e, 'contact')} className={navClass('contact')}>Contact</a></li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Register</button>
          </div>
        </header>

        {/* HOME */}
        {page === 'home' && (
          <>
            {/* Heroes */}
            <div className="container my-5">
              <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                  <span className="badge text-bg-primary mb-3">Buku Pilihan Minggu Ini</span>
                  <h1 className="display-4 fw-bold lh-1">Atomic Habits: Perubahan Kecil, Hasil Luar Biasa</h1>
                  <p className="lead mt-3">
                    Cara mudah dan terbukti untuk membentuk kebiasaan baik dan menghilangkan
                    kebiasaan buruk, satu langkah kecil setiap hari.
                  </p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                    <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Buy Now</button>
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4">Detail</button>
                  </div>
                </div>
                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                  <img className="img-fluid" src="/Atomic Habits.jpg" alt="Cover Atomic Habits" />
                </div>
              </div>
            </div>

            {/* Best Seller */}
            <section className="py-5 text-center container">
              <div className="row py-lg-3">
                <div className="col-lg-6 col-md-8 mx-auto">
                  <h1 className="fw-light">Best Seller</h1>
                  <p className="lead text-muted">Buku-buku paling laris bulan ini, dipilih oleh pembaca kami.</p>
                  <p>
                    <a href="#" onClick={(e) => goTo(e, 'book')} className="btn btn-primary my-2 m-3">Lihat Semua</a>
                    <a href="#" onClick={(e) => goTo(e, 'contact')} className="btn btn-secondary my-2">Hubungi Kami</a>
                  </p>
                </div>
              </div>
            </section>

            <div className="album py-5 bg-light">
              <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                  {books.slice(0, 6).map(renderBook)}
                </div>
              </div>
            </div>
          </>
        )}

        {/* BOOK */}
        {page === 'book' && (
          <section className="py-4">
            <div className="text-center mb-4">
              <h1 className="fw-bold">Katalog Buku</h1>
              <p className="lead text-muted">Temukan buku favoritmu dari koleksi kami.</p>
            </div>

            <div className="row g-3 mb-4">
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Cari judul atau penulis..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="col-md-4">
                <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                  {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>

            {filteredBooks.length > 0 ? (
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {filteredBooks.map(renderBook)}
              </div>
            ) : (
              <p className="text-center text-muted py-5">Buku tidak ditemukan.</p>
            )}
          </section>
        )}

        {/* TEAM */}
        {page === 'team' && (
          <section className="py-4">
            <div className="text-center mb-5">
              <h1 className="fw-bold">Meet Our Team</h1>
              <p className="lead text-muted col-lg-6 mx-auto">
                Orang-orang di balik bookstore yang berdedikasi menghadirkan buku terbaik untukmu.
              </p>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
              {members.map((m) => (
                <div className="col" key={m.name}>
                  <div className="card h-100 text-center shadow-sm border-0">
                    <img
                      src={m.img}
                      alt={m.name}
                      className="rounded-circle mx-auto mt-4"
                      width="140"
                      height="140"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="card-body">
                      <h5 className="card-title mb-0">{m.name}</h5>
                      <p className="text-primary small mb-2">{m.role}</p>
                      <p className="card-text text-secondary">{m.desc}</p>
                    </div>
                    <div className="card-footer bg-white border-0 pb-3 fs-5">
                      <a href="#" className="text-secondary me-3"><i className="fa-brands fa-github"></i></a>
                      <a href="#" className="text-secondary me-3"><i className="fa-brands fa-linkedin"></i></a>
                      <a href="#" className="text-secondary"><i className="fa-brands fa-instagram"></i></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CONTACT */}
        {page === 'contact' && (
          <section className="py-4">
            <div className="text-center mb-5">
              <h1 className="fw-bold">Hubungi Kami</h1>
              <p className="lead text-muted">Ada pertanyaan soal buku atau pesananmu? Kirim pesan di bawah ini.</p>
            </div>
            <div className="row g-5">
              <div className="col-md-5">
                <h4 className="mb-4">Informasi Kontak</h4>
                <p><i className="fa-solid fa-location-dot text-primary me-3"></i>Depok, Jawa Barat</p>
                <p><i className="fa-solid fa-envelope text-primary me-3"></i>info@bookstore.com</p>
                <p><i className="fa-solid fa-phone text-primary me-3"></i>0812-3456-7890</p>
                <p><i className="fa-solid fa-clock text-primary me-3"></i>Senin - Sabtu, 09.00 - 17.00</p>
              </div>
              <div className="col-md-7">
                <div className="card shadow-sm">
                  <div className="card-body p-4">
                    {sent && <div className="alert alert-success">Terima kasih! Pesanmu sudah terkirim.</div>}
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nama</label>
                        <input type="text" className="form-control" id="name" name="name" value={form.name} onChange={handleChange} required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={handleChange} required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="message" className="form-label">Pesan</label>
                        <textarea className="form-control" id="message" name="message" rows="5" value={form.message} onChange={handleChange} required></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary px-4">
                        <i className="fa-solid fa-paper-plane me-2"></i>Kirim
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Footer */}
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
                  <li className="nav-item"><a href="#" onClick={(e) => goTo(e, 'home')} className="nav-link p-0 mb-2">Home</a></li>
                  <li className="nav-item"><a href="#" onClick={(e) => goTo(e, 'book')} className="nav-link p-0 mb-2">Book</a></li>
                  <li className="nav-item"><a href="#" onClick={(e) => goTo(e, 'team')} className="nav-link p-0 mb-2">Team</a></li>
                  <li className="nav-item"><a href="#" onClick={(e) => goTo(e, 'contact')} className="nav-link p-0 mb-2">Contact</a></li>
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
            <div className="text-center text-body-secondary border-top pt-3">
              © {new Date().getFullYear()} Moch-Irwi
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

export default App