import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'agaete-live',
    title: 'Agaete.live',
    category: 'Vision & Lab Prototype',
    description: 'Mi visión digital para el municipio. Un prototipo inteligente que conecta servicios y comercio en tiempo real.',
    longDescription: 'Agaete.live es un proyecto personal donde exploro cómo la ingeniería de datos puede mejorar la vida en mi pueblo. Es un prototipo funcional que centraliza mareas, servicios y el tejido comercial, demostrando el potencial de una Villa 100% conectada.',
    challenges: [
      'Modelado de datos marítimos y climáticos en tiempo real.',
      'Integración experimental de negocios locales.',
      'Interfaz optimizada para la identidad de Agaete.'
    ],
    metrics: [
      'Prototipo de monitor de mareas.',
      'Arquitectura de Hub Comercial.',
      'Sistema de avisos municipales.'
    ],
    techStack: ['Next.js', 'Real-time APIs', 'Personal Lab'],
    tags: ['Visión Personal', 'Prototipo', 'Agaete'],
    imageUrl: '/agaete-live.png',
    projectType: 'demo',
    link: 'https://agaete-live.vercel.app/'
  },
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
    tags: ['Próximamente', 'Pre-Lanzamiento', 'Logística'],
    imageUrl: '/tamadaba-web.png',
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
    imageUrl: '/la-rama-web.png',
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
    imageUrl: '/jabones-jacaranda.png',
    projectType: 'concept',
    link: 'https://jabones-agaete.vercel.app/'
  },
  {
    id: 'platano-loco',
    title: 'Plátano Loco',
    category: 'E-commerce & Branding',
    description: 'Tienda online con identidad vibrante y optimización para redes sociales.',
    longDescription: 'Desarrollo de plataforma e-commerce para Plátano Loco, enfocada en una experiencia de usuario fluida y una fuerte presencia en redes sociales mediante metatags optimizados.',
    challenges: [
      'Implementación de Open Graph para RRSS.',
      'Diseño de interfaz vibrante y atractiva.',
      'Optimización de carga en dispositivos móviles.'
    ],
    techStack: ['React', 'Social SEO', 'Tailwind'],
    tags: ['E-commerce', 'Branding', 'RRSS'],
    imageUrl: '/platano-loco-web.png',
    projectType: 'wip',
    link: 'https://platano-loco.vercel.app'
  },
  {
    id: 'salsamora',
    title: 'Salsamora',
    category: 'Digital Presence',
    description: 'Presencia digital elegante para el sector servicios.',
    longDescription: 'Creación de la identidad digital para Salsamora, proporcionando una plataforma limpia y profesional para conectar con sus clientes.',
    challenges: [
      'Arquitectura de información simplificada.',
      'Diseño minimalista y premium.',
      'Configuración de despliegue continuo.'
    ],
    techStack: ['React', 'Clean Design', 'Vercel'],
    tags: ['Web', 'Minimal', 'Servicios'],
    imageUrl: '/salsamora-web.png',
    projectType: 'concept',
    link: 'https://salsamora.vercel.app'
  },
  {
    id: 'el-dedo-de-dios',
    title: 'Restaurante El Dedo de Dios',
    category: 'Hostelería & Gestión',
    description: 'Sistema de reserva inteligente y carta digital interactiva para el restaurante más emblemático.',
    longDescription: 'Digitalización integral del Restaurante El Dedo de Dios. El sistema permite la gestión automatizada de reservas de mesas y ofrece una carta digital inmersiva para los comensales, optimizando la operativa diaria.',
    challenges: [
      'Sistema de reservas con confirmación instantánea.',
      'Carta digital optimizada para dispositivos móviles.',
      'Panel de gestión para el personal del restaurante.'
    ],
    techStack: ['React', 'Reservations API', 'Digital Menu'],
    tags: ['Hostelería', 'Agaete', 'Gestión'],
    imageUrl: '/dedo-de-dios.png',
    projectType: 'concept',
    link: 'https://el-dedo-de-dios.vercel.app'
  }
];