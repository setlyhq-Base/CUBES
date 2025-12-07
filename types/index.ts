export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  ingredients: string[];
  howToUse: string[];
  storage: string;
  benefits: string[];
  suggestedRecipes: string[];
  imageUrl?: string;
}

export interface NavigationLink {
  href: string;
  label: string;
}
