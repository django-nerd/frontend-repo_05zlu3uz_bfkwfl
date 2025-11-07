import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 items-center py-16">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium">
            <Sparkles className="h-4 w-4" />
            AI untuk Estimasi Harga Produk
          </div>
          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Deteksi Harga dari Foto dalam Hitungan Detik
          </h1>
          <p className="mt-4 text-slate-600">
            Unggah foto produk, pilih kondisi barang, dan biarkan AI kami memprediksi harga dalam Rupiah beserta tingkat kepercayaan dan alasannya.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#coba" className="px-5 py-3 rounded-md bg-blue-600 text-white text-sm font-semibold shadow hover:bg-blue-700">Coba Sekarang</a>
            <a href="#harga" className="px-5 py-3 rounded-md bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800">Lihat Harga</a>
          </div>
          <p className="mt-3 text-xs text-slate-500">Gratis hingga 10 analisis per hari. Tanpa kartu kredit.</p>
        </div>
        <div className="relative aspect-[4/3] md:aspect-[5/4] rounded-xl overflow-hidden ring-1 ring-slate-200 shadow-lg">
          <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/40" />
        </div>
      </div>
    </section>
  );
}
