import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  challenges?: string[];
  metrics?: string[];
  tags: string[];
  imageUrl: string;
  projectType: 'real' | 'concept' | 'demo' | 'wip';
  link?: string;
  techStack?: string[];
}

export interface ServiceProp {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface NavItem {
  label: string;
  href: string;
}
