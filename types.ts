import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  isNew?: boolean;
}

export interface Certification {
  name: string;
  code: string;
  description: string;
}

export interface FeatureBlock {
  title: string;
  description: string;
  icon?: React.ReactNode;
}