import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Bot, ChevronRight } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface QuickReply {
  id: string;
  text: string;
  response: string;
}

const QUICK_REPLIES: QuickReply[] = [
  {
    id: '1',
    text: '¿Qué servicios ofreces?',
    response: 'Digitalizo negocios con ingeniería: desde webs de alto rendimiento y chatbots con IA hasta automatización de procesos. ¿Buscas algo específico para tu sector?'
  },
  {
    id: '2',
    text: '¿Cómo puedo automatizar mi negocio?',
    response: 'Puedo ayudarte a conectar tus herramientas (Excel, CRM, Web) para que trabajen solas o crear dashboards que te digan dónde ganas más dinero. ¿Qué tareas o herramientas te quitan más tiempo ahora mismo?'
  },
  {
    id: '3',
    text: '¿Cuál es tu experiencia?',
    response: 'Estudiante de Ingeniería de Datos en la ULPGC con experiencia en proyectos reales. Si tienes un reto técnico complejo, me encantaría escucharlo. ¿De qué trata tu proyecto?'
  },
  {
    id: '4',
    text: '¿Precios orientativos?',
    response: 'Tengo planes desde 29€. Para darte una estimación real, lo mejor es que me mandes un WhatsApp al 650 676 334 o un email a yonesuarezviera@gmail.com con tu idea. ¿Por dónde prefieres hablar?'
  }
];

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      text: '¡Hola! 👋 Soy el asistente virtual de Yone. ¿En qué puedo ayudarte hoy?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const getSmartResponse = (userInput: string): string => {
    const input = userInput.toLowerCase().trim();
    
    // 1. Detección de contacto (Email o Teléfono)
    if (input.includes('@') || (input.replace(/\s/g, '').length >= 9 && !isNaN(Number(input.replace(/\s/g, ''))))) {
      return '¡Genial! 📝 Para que podamos avanzar rápido, mándame un mensaje directo por WhatsApp (650 676 334) o un correo a yonesuarezviera@gmail.com con los detalles de tu proyecto. ¿Te viene mejor por ahí?';
    }

    // 2. Empatía por saturación (todas, muchas, caos, etc.)
    if (input.includes('toda') || input.includes('much') || input.includes('varias') || input.includes('caos') || input.includes('lío')) {
      return '¡Uff, te entiendo perfectamente! 🤯 Gestionar un negocio con mil frentes abiertos es agotador. Mi especialidad es poner orden con ingeniería. Mándame un WhatsApp al 650 676 334 y vemos por dónde empezar a simplificar hoy mismo.';
    }
    
    // 3. Específico: Web / Tienda
    if (input.includes('web') || input.includes('tienda') || input.includes('página') || input.includes('online')) {
      return '¡Una web que venda es clave! 🚀 No solo que sea bonita, sino que sea rápida y eficiente. Cuéntame los detalles por WhatsApp (650 676 334) o email (yonesuarezviera@gmail.com) y te doy mi opinión profesional.';
    }

    // 4. Específico: Excel / Datos
    if (input.includes('excel') || input.includes('hoja') || input.includes('calculo') || input.includes('datos')) {
      return 'El Excel tiene un límite, pero la automatización no. 📈 Se puede hacer que el sistema trabaje solo. Escríbeme al 650 676 334 y te explico cómo podemos transformar esos archivos en un sistema inteligente.';
    }

    // 5. Respuesta por defecto mejorada
    return '¡Me lo apunto! 📝 Para darte una solución de ingeniería real, necesito conocer un poco más. Escríbeme directamente por WhatsApp al 650 676 334 o al email yonesuarezviera@gmail.com y lo vemos en un momento. 😊';
  };

  const handleSendMessage = (text: string, sender: 'user' | 'bot' = 'user') => {
    if (!text.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: text,
      sender: sender,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);

    if (sender === 'user') {
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: getSmartResponse(text),
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      }, 800);
    }
  };

  const handleQuickReply = (reply: QuickReply) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: reply.text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: reply.response,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputValue);
    setInputValue('');
  };

  return (
    <div className="fixed bottom-8 left-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: 'bottom left' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-80 sm:w-96 h-[550px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-stone-200"
          >
            {/* Header */}
            <div className="bg-stone-900 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-stone-700 rounded-full flex items-center justify-center">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Yone Assistant</h3>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-stone-300">En línea</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-stone-800 p-1 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, x: msg.sender === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.sender === 'user'
                        ? 'bg-stone-900 text-white rounded-br-none'
                        : 'bg-white text-stone-800 shadow-sm border border-stone-100 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            <div className="px-4 py-3 bg-white border-t border-stone-100">
              <div className="flex flex-wrap gap-2">
                {QUICK_REPLIES.map((reply) => (
                  <button
                    key={reply.id}
                    onClick={() => handleQuickReply(reply)}
                    className="text-left text-[10px] bg-stone-100 hover:bg-stone-200 text-stone-700 px-3 py-1.5 rounded-full transition-colors flex items-center gap-1 group"
                  >
                    {reply.text}
                    <ChevronRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-stone-100 flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Escribe tu email o duda..."
                className="flex-1 bg-stone-50 text-sm px-4 py-2 rounded-xl border border-stone-200 focus:outline-none focus:border-mar-500 transition-colors"
              />
              <button
                type="submit"
                className="bg-stone-900 text-white p-2 rounded-xl hover:bg-stone-800 transition-colors"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all ${
          isOpen ? 'bg-stone-800 text-white rotate-90' : 'bg-stone-900 text-white'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
};