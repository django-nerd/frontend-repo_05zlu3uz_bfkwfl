import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Gratis',
    price: 'Rp0',
    desc: 'Untuk mencoba fitur dasar',
    features: ['10 analisis/hari', 'Mode AI standar', 'Riwayat terbatas'],
    cta: 'Mulai Gratis',
    highlight: false,
  },
  {
    name: 'Premium',
    price: 'Rp99.000',
    desc: 'Untuk pengguna aktif',
    features: ['Tanpa batas harian wajar', 'Mode AI lanjutan', 'Ekspor CSV', 'Prioritas dukungan'],
    cta: 'Upgrade',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Hubungi Kami',
    desc: 'Untuk tim & perusahaan',
    features: ['SLA khusus', 'Integrasi API', 'Admin & SSO', 'Dukungan dedicated'],
    cta: 'Kontak Sales',
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="harga" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">Paket & Harga</h2>
        <p className="mt-2 text-center text-slate-600">Pilih paket sesuai kebutuhan Anda.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-2xl border ${plan.highlight ? 'border-blue-600 shadow-xl' : 'border-slate-200 shadow-sm'} p-6 bg-white`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{plan.name}</h3>
                {plan.highlight && (
                  <span className="text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-full px-2 py-0.5">Paling Populer</span>
                )}
              </div>
              <p className="mt-2 text-3xl font-extrabold text-slate-900">{plan.price}</p>
              <p className="text-sm text-slate-600 mt-1">{plan.desc}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-blue-600 mt-0.5" />
                    <span className="text-slate-700">{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full px-4 py-2 rounded-md font-semibold ${plan.highlight ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>{plan.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
