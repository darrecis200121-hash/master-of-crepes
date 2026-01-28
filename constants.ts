
import { MenuItem, Location } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'nutella-classic',
    name: 'Nutella Classic',
    description: 'The pure perfection of our signature ginger-clove crepe filled with velvety Nutella. Chef Karla\'s gift to the sweet tooth.',
    price: 2.00,
    image: '',
    category: 'Sweet',
    tags: ['Our Special', 'Chef\'s Pick']
  },
  {
    id: '1',
    name: 'Clove Chicken',
    description: 'Tender pulled chicken, signature ginger-clove crepe, mozzarella, and micro-greens.',
    price: 4.00,
    image: '',
    category: 'Savory',
    tags: ['Signature', 'Bestseller']
  },
  {
    id: '2',
    name: 'Berry Bliss',
    description: 'Fresh strawberries, blueberries, honey-infused ricotta, and dark chocolate drizzle.',
    price: 3.50,
    image: '',
    category: 'Sweet',
    tags: ['Fresh']
  },
  {
    id: '3',
    name: 'Mushroom Magic',
    description: 'Wild forest mushrooms, caramelized onions, thyme, and Swiss cheese.',
    price: 5.00,
    image: '',
    category: 'Savory',
    tags: ['Vegetarian']
  },
  {
    id: 'drink-1',
    name: 'Americano',
    description: 'Rich espresso diluted with hot water.',
    price: 1.20,
    image: '',
    category: 'Drinks',
    tags: ['Coffee']
  },
  {
    id: 'drink-2',
    name: 'Cappuccino',
    description: 'Espresso, steamed milk, and velvety foam.',
    price: 1.80,
    image: '',
    category: 'Drinks',
    tags: ['Coffee']
  },
  {
    id: 'drink-3',
    name: 'Espresso',
    description: 'A concentrated shot of premium dark roast.',
    price: 1.50,
    image: '',
    category: 'Drinks',
    tags: ['Coffee']
  },
  {
    id: 'drink-4',
    name: 'Latte',
    description: 'Creamy steamed milk over double espresso.',
    price: 2.00,
    image: '',
    category: 'Drinks',
    tags: ['Coffee']
  },
  {
    id: 'drink-5',
    name: 'Hot Chocolate',
    description: 'Rich Belgian chocolate with frothy milk.',
    price: 2.00,
    image: '',
    category: 'Drinks',
    tags: ['Warm']
  },
  {
    id: 'drink-6',
    name: 'Matcha',
    description: 'Premium Japanese ceremonial grade matcha.',
    price: 2.50,
    image: '',
    category: 'Drinks',
    tags: ['Specialty']
  },
  {
    id: 'drink-7',
    name: 'Cold Beverages',
    description: 'Coca Cola, Fanta, Sprite, or Mineral Water.',
    price: 1.50,
    image: '',
    category: 'Drinks',
    tags: ['Chilled']
  }
];

export const CURRENT_LOCATIONS: Location[] = [
  {
    lat: 56.3269,
    lng: 44.0059,
    name: 'Minin Square',
    address: 'Near the Kremlin Main Gates',
    status: 'Open'
  },
  {
    lat: 56.3213,
    lng: 43.9936,
    name: 'Pokrovskaya St.',
    address: 'Pedestrian Walkway, central NN',
    status: 'Moving'
  }
];
