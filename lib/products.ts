import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Onion Cubes',
    slug: 'onion-cubes',
    description: 'Pre-diced, perfectly portioned onion cubes ready to enhance any dish.',
    longDescription: 'Our Onion Cubes are made from fresh, high-quality onions that are carefully diced, lightly sautéed for enhanced flavor, and flash-frozen at peak freshness. Perfect for curries, stir-fries, soups, and more.',
    ingredients: ['100% Fresh Onions', 'No Preservatives', 'No Additives'],
    imageUrl: '/images/products/onion-cubes.svg',
    howToUse: [
      'Heat oil in a pan',
      'Add 3-4 onion cubes directly from freezer',
      'Sauté until golden and aromatic',
      'Continue with your recipe'
    ],
    storage: 'Keep frozen at -18°C (0°F). Use directly from freezer. Do not refreeze once thawed.',
    benefits: [
      'Saves 10-15 minutes of chopping and prep time',
      'No more tears while cutting onions',
      'Perfectly portioned for consistent cooking',
      'Stays fresh for 6-9 months',
      'Zero food waste'
    ],
    suggestedRecipes: [
      'Butter Chicken',
      'Vegetable Stir Fry',
      'Tomato-Onion Gravy Base',
      'Dal Tadka',
      'Fried Rice'
    ]
  },
  {
    id: '2',
    name: 'Tomato Cubes',
    slug: 'tomato-cubes',
    description: 'Rich, flavorful tomato cubes that bring instant depth to your cooking.',
    longDescription: 'Made from vine-ripened tomatoes, our Tomato Cubes are blanched, diced, and flash-frozen to preserve their natural sweetness and nutritional value. Perfect for curries, pasta sauces, and soups.',
    ingredients: ['100% Fresh Tomatoes', 'No Preservatives', 'No Additives'],
    imageUrl: '/images/products/tomato-cubes.svg',
    howToUse: [
      'Heat pan with oil or butter',
      'Add 4-5 tomato cubes directly from freezer',
      'Cook until soft and sauce-like consistency',
      'Season and proceed with your dish'
    ],
    storage: 'Keep frozen at -18°C (0°F). Use directly from freezer. Do not refreeze once thawed.',
    benefits: [
      'No peeling, blanching, or chopping required',
      'Consistent quality year-round',
      'Rich in lycopene and vitamins',
      'Perfect for gravies and sauces',
      'Reduces kitchen prep time significantly'
    ],
    suggestedRecipes: [
      'Pasta Marinara',
      'Paneer Butter Masala',
      'Tomato Soup',
      'Shakshuka',
      'Mexican Salsa Base'
    ]
  },
  {
    id: '3',
    name: 'Mixed Vegetable Cubes',
    slug: 'mixed-veg-cubes',
    description: 'A perfect blend of fresh vegetables in convenient, portion-controlled cubes.',
    longDescription: 'Our Mixed Vegetable Cubes feature a carefully selected combination of carrots, peas, beans, and corn. Each vegetable is blanched and flash-frozen to retain nutrients, color, and flavor.',
    ingredients: ['Carrots', 'Green Peas', 'Green Beans', 'Sweet Corn', 'No Preservatives'],
    imageUrl: '/images/products/mixed-veg-cubes.svg',
    howToUse: [
      'Add cubes directly to boiling water or hot pan',
      'Cook for 3-5 minutes',
      'Season as desired',
      'Perfect for quick stir-fries, soups, or curries'
    ],
    storage: 'Keep frozen at -18°C (0°F). Use directly from freezer. Do not refreeze once thawed.',
    benefits: [
      'Pre-washed and ready to cook',
      'Nutritionally balanced vegetable mix',
      'Great for kids and picky eaters',
      'No chopping or prep needed',
      'Ideal for quick weeknight dinners'
    ],
    suggestedRecipes: [
      'Vegetable Fried Rice',
      'Mixed Veg Curry',
      'Vegetable Soup',
      'Pasta Primavera',
      'Vegetable Pulao'
    ]
  },
  {
    id: '4',
    name: 'Spinach Cubes',
    slug: 'spinach-cubes',
    description: 'Nutrient-rich spinach cubes for healthy, hassle-free cooking.',
    longDescription: 'Fresh spinach leaves are carefully washed, blanched, and pureed into convenient cubes. Packed with iron, vitamins, and minerals, our Spinach Cubes make it easy to add greens to any meal.',
    ingredients: ['100% Fresh Spinach', 'No Preservatives', 'No Additives'],
    imageUrl: '/images/products/spinach-cubes.svg',
    howToUse: [
      'Heat oil with garlic (optional)',
      'Add 2-3 spinach cubes directly from freezer',
      'Stir until melted and heated through',
      'Use in curries, dals, or smoothies'
    ],
    storage: 'Keep frozen at -18°C (0°F). Use directly from freezer. Do not refreeze once thawed.',
    benefits: [
      'No washing or chopping required',
      'Retains maximum nutrients',
      'Perfect for Palak Paneer and dals',
      'Great for adding greens to any dish',
      'Reduces prep time from 20 mins to 2 mins'
    ],
    suggestedRecipes: [
      'Palak Paneer',
      'Saag Dal',
      'Green Smoothies',
      'Spinach Soup',
      'Pasta with Spinach Cream Sauce'
    ]
  },
  {
    id: '5',
    name: 'Ginger-Garlic Cubes',
    slug: 'ginger-garlic-cubes',
    description: 'Essential flavor base for Indian cooking, pre-ground and portioned.',
    longDescription: 'Our Ginger-Garlic Cubes feature fresh ginger and garlic ground together in perfect proportions. This essential flavor base is ready to elevate your curries, stir-fries, and marinades.',
    ingredients: ['Fresh Ginger', 'Fresh Garlic', 'No Preservatives'],
    imageUrl: '/images/products/ginger-garlic-cubes.svg',
    howToUse: [
      'Heat oil in pan',
      'Add 1-2 ginger-garlic cubes',
      'Sauté for 30 seconds until fragrant',
      'Continue with your cooking'
    ],
    storage: 'Keep frozen at -18°C (0°F). Use directly from freezer. Do not refreeze once thawed.',
    benefits: [
      'No peeling or grinding required',
      'Perfect proportion every time',
      'Essential for Indian cooking',
      'Saves 10+ minutes of prep time',
      'No garlic smell on hands'
    ],
    suggestedRecipes: [
      'Chicken Tikka Masala',
      'Stir-Fried Vegetables',
      'Ginger-Garlic Soup',
      'Marinades',
      'Curry Base'
    ]
  },
  {
    id: '6',
    name: 'Smoothie Fruit Cubes',
    slug: 'smoothie-fruit-cubes',
    description: 'Pre-portioned fruit blends for perfect smoothies every time.',
    longDescription: 'A delicious mix of strawberries, blueberries, mangoes, and bananas, cut and frozen at peak ripeness. Just blend with your choice of liquid for an instant, nutritious smoothie.',
    ingredients: ['Strawberries', 'Blueberries', 'Mangoes', 'Bananas', 'No Added Sugar'],
    imageUrl: '/images/products/smoothie-fruit-cubes.svg',
    howToUse: [
      'Add 4-6 fruit cubes to blender',
      'Add milk, yogurt, or juice',
      'Blend until smooth',
      'Enjoy immediately'
    ],
    storage: 'Keep frozen at -18°C (0°F). Blend directly from freezer. Do not refreeze once thawed.',
    benefits: [
      'Pre-portioned for consistent smoothies',
      'No chopping or measuring',
      'Naturally sweet, no added sugar',
      'Perfect for busy mornings',
      'Rich in vitamins and antioxidants'
    ],
    suggestedRecipes: [
      'Berry Blast Smoothie',
      'Tropical Mango Smoothie',
      'Protein Power Smoothie',
      'Green Detox Smoothie',
      'Smoothie Bowls'
    ]
  },
  {
    id: '7',
    name: 'Curry Base Cubes',
    slug: 'curry-base-cubes',
    description: 'Authentic Indian curry base with onion, tomato, and spices.',
    longDescription: 'Our signature Curry Base Cubes combine sautéed onions, tomatoes, ginger, garlic, and aromatic spices. This ready-made base saves hours of prep and delivers restaurant-quality flavor.',
    ingredients: ['Onions', 'Tomatoes', 'Ginger', 'Garlic', 'Cumin', 'Coriander', 'Turmeric', 'Red Chili'],
    imageUrl: '/images/products/curry-base-cubes.svg',
    howToUse: [
      'Heat oil in pan',
      'Add 3-4 curry base cubes',
      'Stir until melted and bubbling',
      'Add main ingredients (paneer, chicken, vegetables)',
      'Simmer and serve'
    ],
    storage: 'Keep frozen at -18°C (0°F). Use directly from freezer. Do not refreeze once thawed.',
    benefits: [
      'Restaurant-quality curry in 10 minutes',
      'No need to prep multiple ingredients',
      'Perfectly balanced spices',
      'Authentic Indian flavor',
      'Saves 30+ minutes of cooking time'
    ],
    suggestedRecipes: [
      'Paneer Tikka Masala',
      'Chicken Curry',
      'Chana Masala',
      'Vegetable Korma',
      'Egg Curry'
    ]
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 6);
};
