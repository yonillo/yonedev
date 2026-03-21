import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck, Scale, FileText } from 'lucide-react';

export const Legal: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fafaf9] min-h-screen pb-24 relative z-20">
      {/* Header simple */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <Link to="/" className="text-stone-500 hover:text-stone-900 flex items-center gap-2 mb-12 transition-colors font-bold z-30 relative">
          <ArrowLeft size={16} /> Volver al Inicio
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4 relative z-10">Aviso Legal</h1>
        <p className="text-stone-500 mb-16 italic relative z-10">"Transparencia y cumplimiento legal para tu tranquilidad."</p>

        <div className="grid gap-12 text-stone-600 leading-relaxed relative z-10">
          
          <section className="bg-white p-8 rounded-[2.5rem] border border-stone-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6 text-stone-900">
              <Scale size={20} className="text-mar-600" />
              <h2 className="font-bold text-xl uppercase tracking-wider">1. Información Legal</h2>
            </div>
            <p className="mb-4">En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI), se informa que:</p>
            <ul className="space-y-2 font-medium text-stone-800">
              <li>• Titular: Yone Suárez Viera</li>
              <li>• NIF/DNI: Disponible bajo petición para clientes</li>
              <li>• Domicilio: Agaete, Gran Canaria, España</li>
              <li>• Email: yonesuarezviera@gmail.com</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-[2.5rem] border border-stone-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6 text-stone-900">
              <ShieldCheck size={20} className="text-mar-600" />
              <h2 className="font-bold text-xl uppercase tracking-wider">2. Protección de Datos (RGPD)</h2>
            </div>
            <p className="mb-4">Al contactar vía WhatsApp o email, los datos proporcionados se tratarán exclusivamente para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responder a consultas y presupuestos.</li>
              <li>Gestionar la relación profesional.</li>
            </ul>
            <p className="mt-4 italic">No se cederán datos a terceros bajo ninguna circunstancia sin consentimiento previo.</p>
          </section>

          <section className="bg-white p-8 rounded-[2.5rem] border border-stone-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6 text-stone-900">
              <FileText size={20} className="text-mar-600" />
              <h2 className="font-bold text-xl uppercase tracking-wider">3. Propiedad Intelectual</h2>
            </div>
            <p>Todos los diseños, códigos y contenidos de esta web (salvo marcas de clientes como Coordenadas o Tamadaba) son propiedad de Yone.dev.</p>
          </section>

        </div>
      </div>
    </div>
  );
};
