import { useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-blue-600 text-white grid place-items-center shadow-md">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight text-slate-800">Detect Price by Photo</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#fitur" className="hover:text-slate-900">Fitur</a>
          <a href="#harga" className="hover:text-slate-900">Harga</a>
          <a href="#testimoni" className="hover:text-slate-900">Testimoni</a>
          <a href="#faq" className="hover:text-slate-900">FAQ</a>
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <button className="px-3 py-2 rounded-md text-slate-700 hover:bg-slate-100">Masuk</button>
          <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 shadow">Daftar</button>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-slate-100">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200">
          <div className="px-4 py-3 flex flex-col gap-3">
            <a href="#fitur" className="text-slate-700">Fitur</a>
            <a href="#harga" className="text-slate-700">Harga</a>
            <a href="#testimoni" className="text-slate-700">Testimoni</a>
            <a href="#faq" className="text-slate-700">FAQ</a>
            <div className="flex gap-2 pt-2">
              <button className="flex-1 px-3 py-2 rounded-md text-slate-700 bg-slate-100">Masuk</button>
              <button className="flex-1 px-3 py-2 rounded-md bg-blue-600 text-white">Daftar</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
