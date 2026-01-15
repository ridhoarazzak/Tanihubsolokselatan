export interface Product {
  id: string;
  name: string;
  price: number;
  unit: string;
  category: string;
  image: string;
  farmer: string;
  location: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  image?: string; // base64 string
  timestamp: number;
}

export enum ViewState {
  HOME = 'HOME',
  MARKET = 'MARKET',
  AI_EXPERT = 'AI_EXPERT',
  PROFILE = 'PROFILE'
}

export type Category = 'Semua' | 'Beras' | 'Kopi' | 'Rempah' | 'Sayuran';