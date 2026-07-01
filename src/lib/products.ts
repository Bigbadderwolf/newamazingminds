export type ProductCategory = "art" | "accessories" | "artefacts";

export interface Product {
  id: string;
  name: string;
  artist: string;
  handle: string;
  price: number;
  category: ProductCategory;
  emoji: string;
  desc: string;
  bg: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Savanna Sunset",
    artist: "Amara Osei",
    handle: "@Amara_Arts",
    price: 2500,
    category: "art",
    emoji: "🖼",
    desc: "A stunning oil painting capturing the golden hues of an African savanna at sunset. Hand-painted on canvas, signed by the artist.",
    bg: "from-orange-900/40 to-amber-900/30",
  },
  {
    id: "p2",
    name: "Beaded Bracelet Set",
    artist: "Fatuma Wanjiru",
    handle: "@BeadsByFatuma",
    price: 850,
    category: "accessories",
    emoji: "📿",
    desc: "Handcrafted beaded bracelet set using traditional Maasai beading techniques. Set of 3 matching bracelets.",
    bg: "from-blue-900/40 to-sky-900/30",
  },
  {
    id: "p3",
    name: "Ubuntu Portrait",
    artist: "Kembo Diallo",
    handle: "@KemboCreates",
    price: 4200,
    category: "art",
    emoji: "🎨",
    desc: "A powerful mixed-media portrait exploring the Ubuntu philosophy — 'I am because we are'. Bold colours on stretched canvas.",
    bg: "from-green-900/40 to-emerald-900/30",
  },
  {
    id: "p4",
    name: "Healing Hands Print",
    artist: "Zara Mensah",
    handle: "@ZaraArtHouse",
    price: 1800,
    category: "art",
    emoji: "🖌",
    desc: "A limited edition giclee print of the acclaimed 'Healing Hands' series. Printed on archival paper, numbered edition.",
    bg: "from-pink-900/40 to-rose-900/30",
  },
  {
    id: "p5",
    name: "Ankara Earrings",
    artist: "Njeri Kamau",
    handle: "@AnkaraByNjeri",
    price: 650,
    category: "accessories",
    emoji: "💛",
    desc: "Vibrant Ankara fabric earrings in bold African print patterns. Lightweight, hypoallergenic hooks.",
    bg: "from-yellow-900/40 to-amber-900/30",
  },
  {
    id: "p6",
    name: "Carved Mahogany Mask",
    artist: "Ibrahim Mwangi",
    handle: "@WoodSoulKE",
    price: 6500,
    category: "artefacts",
    emoji: "🏺",
    desc: "Hand-carved mahogany ceremonial mask inspired by West African traditions. Each piece is unique, taking 3-4 weeks to complete.",
    bg: "from-purple-900/40 to-violet-900/30",
  },
  {
    id: "p7",
    name: "Kanga Wall Tapestry",
    artist: "Aisha Mohamed",
    handle: "@AishaTextiles",
    price: 3200,
    category: "artefacts",
    emoji: "🎭",
    desc: "A large decorative kanga tapestry with Swahili proverb border. Hand-dyed using natural plant-based dyes.",
    bg: "from-teal-900/40 to-cyan-900/30",
  },
  {
    id: "p8",
    name: "Copper Cuff Bracelet",
    artist: "David Otieno",
    handle: "@CopperCraftKE",
    price: 1200,
    category: "accessories",
    emoji: "✨",
    desc: "Handcrafted pure copper cuff bracelet with traditional Luo geometric engravings. One size fits most.",
    bg: "from-orange-900/40 to-red-900/30",
  },
];

export const CATEGORIES = [
  { key: "all", label: "All Items" },
  { key: "art", label: "🎨 Art" },
  { key: "accessories", label: "💎 Accessories" },
  { key: "artefacts", label: "🏺 Artefacts" },
];
