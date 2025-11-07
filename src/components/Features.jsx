import { ShieldCheck, Zap, Image as ImageIcon, BarChart } from 'lucide-react';

const items = [
  {
    icon: ShieldCheck,
    title: 'Akurat & Andal',
    desc: 'Model AI kami dilatih dari jutaan data produk sehingga hasil lebih akurat.',
  },
  { icon: Zap, title: 'Cepat', desc: 'Dapatkan estimasi harga hanya dalam beberapa detik.' },
  { icon: ImageIcon, title: 'Mudah Dipakai', desc: 'Cukup drag & drop foto produk lalu lihat hasilnya.' },
  { icon: BarChart, title: 'Insight Mendalam', desc: 'Alasan prediksi dan confidence score untuk transparansi.' },
];

export default function Features() {
  return (
    <section id="fitur" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">Fitur Unggulan</h2>
        <p className="mt-2 text-center text-slate-600">Semua yang Anda butuhkan untuk menilai harga barang dari foto.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
              <div className="h-10 w-10 rounded-md bg-blue-600 text-white grid place-items-center shadow">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{it.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
