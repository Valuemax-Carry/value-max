import drinksBeverages from './drinks-beverages';
import snacks from './snacks';
import teaCoffee from './tea-coffee';
import dairy from './dairy';
import pluses from './pluses';
import Rice from './Rice';
import oilGhee from './oil-ghee';
import flour from './flour';
import sugar from './sugar';
import detergents from './detergents';
import icecream from './icecream';
import frozen from "./frozen";

const MAP = {
  'drinks-beverages': drinksBeverages,
  'snacks': snacks,
  'tea-coffee': teaCoffee,
  'dairy': dairy,
  'pluses': pluses,
  'Rice': Rice,
  'oil-ghee': oilGhee,
  'flour': flour,
  'sugar': sugar,
  'detergents': detergents,
  'icecream': icecream,
  'frozen': frozen
};

const NORMALIZED_MAP = Object.fromEntries(
  Object.entries(MAP).map(([key, value]) => [String(key).toLowerCase(), value])
);

export const CATEGORY_SLUGS = Object.keys(MAP).map((slug) => String(slug).toLowerCase());

export function getProductsBySlug(slug) {
  if (!slug) return [];
  const key = String(slug).toLowerCase();
  return NORMALIZED_MAP[key] || [];
}

export default MAP;
