import React from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const phoneNumber = "34650676334";
  const message = "Hola Yone! 👋 He visto tu web y me gustaría profesionalizar mi negocio. ¿Podemos hablar?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center gap-2 hover:bg-[#20ba5a] transition-all group"
    >
      <div className="relative">
        <MessageCircle size={28} fill="currentColor" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse" />
      </div>
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 font-bold text-sm px-0 group-hover:px-2">
        ¿Hablamos de tu proyecto?
      </span>
    </motion.a>
  );
};