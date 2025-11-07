import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <section id="cta" className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold">Siap mencoba Detect Price by Photo?</h3>
            <p className="mt-2 text-slate-600">Unggah foto, lihat estimasi harga, dan tingkatkan keputusan Anda.</p>
            <a href="#coba" className="inline-block mt-6 px-6 py-3 rounded-md bg-blue-600 text-white font-semibold shadow hover:bg-blue-700">Coba Sekarang</a>
          </div>
        </section>
        <footer className="border-t border-slate-200 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
            <p>© {new Date().getFullYear()} Detect Price by Photo. Semua hak dilindungi.</p>
            <div className="flex items-center gap-4">
              <a href="#faq" className="hover:text-slate-900">FAQ</a>
              <a href="#kebijakan" className="hover:text-slate-900">Kebijakan Privasi</a>
              <a href="#ketentuan" className="hover:text-slate-900">Ketentuan Layanan</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
