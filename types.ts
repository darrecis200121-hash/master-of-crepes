
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'Savory' | 'Sweet' | 'Drinks';
  tags: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
  groundingUrls?: Array<{ title: string; uri: string }>;
}

export interface Location {
  lat: number;
  lng: number;
  name: string;
  address: string;
  status: 'Open' | 'Closed' | 'Moving';
}
