import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'coordenadas-store',
    title: 'Coordenadas Store',
    category: 'E-commerce & Data',
    description: 'Arquitectura e-commerce profesional con gestión de inventario inteligente en desarrollo.',
    longDescription: 'Sede digital de Coordenadas Store en Agaete. Implementación de carga optimizada de imágenes, SEO avanzado y sistema de gestión de impuestos. Actualmente trabajando en la sincronización automatizada del stock físico con la plataforma online.',
    challenges: [
      'Optimización de rendering y carga de imágenes.',
      'Estrategia de SEO local y metadatos dinámicos.',
      'Desarrollo de sincronización de stock bidireccional.'
    ],
    techStack: ['React', 'Performance Auth', 'SEO Mastery'],
    tags: ['Cliente Real', 'Lanzado', 'E-commerce'],
    imageUrl: '/coordenadas-web.png',
    projectType: 'real',
    link: 'https://coordenadas-store.com'
  },
  {
    id: 'tamadaba-sport',
    title: 'Tamadaba Sport',
    category: 'E-commerce & Logistics',
    description: 'E-commerce con panel de administración profesional. Fase final de lanzamiento.',
    longDescription: 'Sistema integral desarrollado para Tamadaba Sport. Incluye un panel de administración profesional para la gestión de pedidos y productos. Actualmente en fase de carga de datos y despliegue final.',
    challenges: [
      'Desarrollo de Panel de Administración a medida.',
      'Arquitectura de base de datos para logística local.',
      'Branding digital integrado.'
    ],
    techStack: ['Next.js', 'Admin Panel', 'PostgreSQL'],
    tags: ['Cliente Real', 'Pre-Lanzamiento', 'Logística'],
    imageUrl: '/tamadabasport-web.png',
    projectType: 'wip',
    link: 'https://tamadaba-sport.vercel.app/'
  },
  {
    id: 'la-rama-tienda',
    title: 'La Rama Tienda',
    category: 'Cultura & Merchandising',
    description: 'Propuesta digital para la venta de productos oficiales de las fiestas de Agaete.',
    longDescription: 'Prototipo de alta fidelidad diseñado como propuesta para centralizar la venta de productos oficiales de las fiestas. Un ejercicio de identidad visual y e-commerce rápido centrado en la cultura canaria.',
    challenges: [
      'Diseño centrado en la identidad cultural de Agaete.',
      'Prototipado rápido de flujo de compra.',
      'Integración visual de símbolos locales.'
    ],
    techStack: ['React', 'E-commerce Prototype'],
    tags: ['Propuesta', 'Cultura', 'Venta Online'],
    imageUrl: '/lamagia-web.png', // Usamos una imagen diferente para variar
    projectType: 'concept',
    link: 'https://la-rama-tienda.vercel.app/'
  },
  {
    id: 'jabones-agaete',
    title: 'Jabones Jacaranda',
    category: 'Artesanía & Digitalización',
    description: 'Propuesta de tienda online con pedidos directos por WhatsApp para artesanos.',
    longDescription: 'Estudio de digitalización para pequeños artesanos. Este prototipo demuestra cómo Jabones Jacaranda podría automatizar sus ventas directamente a su móvil de forma sencilla y elegante.',
    challenges: [
      'Integración de pedidos vía WhatsApp API.',
      'Catálogo visual optimizado.',
      'UX simplificada para clientes del pueblo.'
    ],
    techStack: ['React', 'WhatsApp Integration'],
    tags: ['Propuesta', 'Artesanía', 'WhatsApp'],
    imageUrl: '/salsamora-web.png', // Usamos otra imagen para variar el grid
    projectType: 'concept',
    link: 'https://jabones-agaete.vercel.app/'
  },
  {
    id: 'platano-loco',
    title: 'Plátano Loco',
    category: 'Marca & Presencia Digital',
    description: 'Propuesta de optimización de marca y presencia en redes sociales.',
    longDescription: 'Prototipo enfocado en el branding y la presencia en redes sociales. Una visión personal de cómo este negocio local puede escalar su imagen digital con tecnología moderna.',
    challenges: [
      'Configuración de Meta Tags para RRSS.',
      'Optimización de activos de marca.',
      'Diseño vibrante y moderno.'
    ],
    techStack: ['Vite', 'SEO Meta Tags'],
    tags: ['Propuesta', 'Branding', 'Social Media'],
    imageUrl: '/logosinnombre.png',
    projectType: 'concept',
    link: 'https://platano-loco.vercel.app/'
  },
  {
    id: 'agaete-live',
    title: 'Agaete.live',
    category: 'Ciudad Inteligente',
    description: 'Monitor inteligente para el pueblo. El pulso de Agaete en tiempo real.',
    longDescription: 'Mi proyecto más personal: un monitor inteligente para Agaete que interpreta mareas, clima y transporte. Una propuesta técnica de lo que el futuro digital de Agaete podría ser.',
    techStack: ['React', 'IoT Data', 'API Mastery'],
    tags: ['Laboratorio', 'Agaete', 'IoT'],
    imageUrl: '/logosinnombre.png',
    projectType: 'demo',
    link: 'https://agaete-live.vercel.app/'
  }
];
