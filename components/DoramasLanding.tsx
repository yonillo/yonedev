import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Shield, 
  Zap, 
  BarChart3,
  Search,
  Smartphone,
  MousePointer2,
  Code2,
  Database,
  User2,
  MapPin,
  GraduationCap
} from 'lucide-react';

const DoramasLanding: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const PintaderaPattern = () => (
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30H0z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E")`, backgroundSize: '30px 30px' }} />
  );

  return (
    <div className="min-h-screen font-sans selection:bg-doramas-blue selection:text-black bg-doramas-sand">
      {/* 1. HERO IMPACTO */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-doramas-green text-white text-center">
        <PintaderaPattern />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-doramas-blue/30 text-doramas-blue text-[10px] font-bold uppercase tracking-[0.4em] mb-6 bg-white/5 backdrop-blur-md"
          >
            <Zap size={12} fill="currentColor" /> Ingeniería de Software & Datos
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            ¿Tu negocio no está <br /><span className="text-doramas-blue italic">vendiendo</span> en internet?
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto font-medium">
            Somos Doramas. Ayudamos a los comercios de Gran Canaria a recuperar su tiempo y multiplicar sus ventas con tecnología real.
          </p>

          <a 
            href="https://wa.me/34622013143" 
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all shadow-lg bg-doramas-blue text-doramas-green hover:scale-105 active:scale-95"
          >
            <MessageSquare size={20} />
            Hablemos por WhatsApp
          </a>
        </div>
      </section>

      {/* 2. DIAGNÓSTICO RÁPIDO */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2 {...fadeIn} className="text-3xl font-serif font-bold mb-12 text-doramas-green text-center">
            Si te pasa esto, necesitas a Doramas:
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <Search className="text-doramas-blue" />, title: "No apareces en Google", desc: "Si un cliente te busca y no te encuentra, le está comprando a tu competencia." },
              { icon: <Smartphone className="text-doramas-blue" />, title: "Tu web da problemas en móvil", desc: "El 90% de tus clientes te ven desde el móvil. Si tu web va lenta, se van." },
              { icon: <MousePointer2 className="text-doramas-blue" />, title: "Pierdes horas en WhatsApp", desc: "Responder siempre lo mismo quita tiempo de ventas. Nuestra IA lo hace por ti." },
              { icon: <BarChart3 className="text-doramas-blue" />, title: "No sabes cuánto vendes realmente", desc: "Si no mides tus datos, no puedes crecer. Te damos el control total." }
            ].map((item, i) => (
              <motion.div key={i} {...fadeIn} className="flex gap-4 p-6 bg-white rounded-3xl border border-stone-100 shadow-sm">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-doramas-green/5 flex items-center justify-center">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-doramas-green mb-1">{item.title}</h4>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CASOS REALES */}
      <section className="py-20 px-6 bg-doramas-green text-white relative overflow-hidden">
        <PintaderaPattern />
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-4xl font-serif font-bold mb-4">Lo que ya hemos construido.</h2>
          <p className="text-white/60 mb-12">Casos de éxito reales con negocios de la isla.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-doramas-green">
            {[
              { title: "Coordenadas Store", image: "/coordenadas-web.png", result: "Web & Gestión de Stock", link: "https://coordenadas-store.com" },
              { title: "Plátano Loco", image: "/platano-loco-web.png", result: "E-commerce & Branding", link: "https://platanoloco.es" },
              { title: "Tamadaba Sport", image: "/tamadaba-web.png", result: "Logística & Admin Panel", link: "https://tamadabasport.com" }
            ].map((project, i) => (
              <motion.a 
                key={i} 
                {...fadeIn} 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-doramas-sand rounded-3xl overflow-hidden border border-white/10 block hover:scale-[1.02] transition-transform duration-300 shadow-lg"
              >
                <div className="h-40 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                  <p className="text-doramas-green/60 text-xs font-bold uppercase tracking-widest">{project.result}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EL EQUIPO: AGAETE + VECINDARIO */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-doramas-green mb-4">Ingeniería canaria de punta a punta.</h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">Unimos la fuerza del Norte y el empuje de Vecindario para modernizar el tejido comercial de nuestra isla.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div {...fadeIn} className="p-10 rounded-[3.5rem] bg-doramas-sand border border-stone-100 flex flex-col items-center text-center relative overflow-hidden group">
              <div className="absolute top-4 right-6 text-doramas-green/10 group-hover:text-doramas-green/20 transition-colors">
                <MapPin size={40} />
              </div>
              <div className="w-24 h-24 bg-doramas-green rounded-full flex items-center justify-center text-doramas-blue mb-6 shadow-xl">
                 <User2 size={48} />
              </div>
              <h3 className="text-2xl font-bold text-doramas-green mb-2">Yone Suárez</h3>
              <p className="text-doramas-green/60 font-bold uppercase tracking-widest text-[10px] mb-4 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-doramas-blue" /> Agaete · Fullstack Dev</p>
              <p className="text-stone-600 text-sm leading-relaxed">Arquitecto de soluciones digitales. Desde el diseño visual hasta el motor interno que hace que tu negocio venda más.</p>
            </motion.div>

            <motion.div {...fadeIn} className="p-10 rounded-[3.5rem] bg-doramas-sand border border-stone-100 flex flex-col items-center text-center relative overflow-hidden group">
              <div className="absolute top-4 right-6 text-doramas-green/10 group-hover:text-doramas-green/20 transition-colors">
                <MapPin size={40} />
              </div>
              <div className="w-24 h-24 bg-doramas-green rounded-full flex items-center justify-center text-doramas-blue mb-6 shadow-xl">
                 <User2 size={48} />
              </div>
              <h3 className="text-2xl font-bold text-doramas-green mb-2">Máximo</h3>
              <p className="text-doramas-green/60 font-bold uppercase tracking-widest text-[10px] mb-4 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-doramas-blue" /> Vecindario · Data Specialist</p>
              <p className="text-stone-600 text-sm leading-relaxed">Especialista en convertir tus datos en decisiones. Automatización e IA para que tu negocio sea más eficiente cada día.</p>
            </motion.div>
          </div>

          <motion.div {...fadeIn} className="mt-16 p-10 rounded-[3rem] bg-doramas-green text-white text-center shadow-2xl">
             <div className="flex justify-center gap-4 mb-6">
                <GraduationCap size={40} className="text-doramas-blue" />
             </div>
             <h4 className="text-xl font-bold mb-4">Talento ULPGC en formación</h4>
             <p className="text-white/70 text-base max-w-2xl mx-auto leading-relaxed mb-6">
                Actualmente nos estamos formando en el <strong>Grado de Ciencia e Ingeniería de Datos</strong> de la Universidad de Las Palmas de Gran Canaria. Aplicamos el conocimiento más actualizado del sector para resolver problemas reales del comercio local.
             </p>
             <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-doramas-blue/80">
                <span className="flex items-center gap-2"><Code2 size={14} /> Fullstack Mastery</span>
                <span className="flex items-center gap-2"><Database size={14} /> Data Engineering</span>
                <span className="flex items-center gap-2"><Shield size={14} /> Ingeniería de Calidad</span>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 5. CIERRE FINAL */}
      <section className="py-24 px-6 text-center bg-doramas-green text-white border-t border-white/5">
        <div className="max-w-xl mx-auto">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl font-serif font-bold mb-6">¿Hablamos en ENORTE?</h2>
            <p className="text-lg text-white/70 mb-10">
              Estaremos por la feria conociendo los retos de los comercios de la isla. Escanea, escríbenos y fijamos un café allí mismo para ver cómo podemos ayudarte.
            </p>
            <a 
              href="https://wa.me/34622013143" 
              className="inline-flex items-center gap-4 px-10 py-5 rounded-2xl text-xl font-bold text-doramas-green bg-doramas-blue shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              <MessageSquare size={24} />
              WhatsApp Directo
            </a>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-doramas-sand border-t border-black/5 px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
           <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white bg-doramas-green">D</div>
           <span className="font-serif font-bold text-xl text-doramas-green">Doramas</span>
        </div>
        <p className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.3em]">
           Yone (Agaete) & Máximo (Vecindario) · Gran Canaria 2026
        </p>
      </footer>
    </div>
  );
};

export default DoramasLanding;
