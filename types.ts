
import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PainPoint {
  title: string;
  content: string;
  isSolution?: boolean;
}