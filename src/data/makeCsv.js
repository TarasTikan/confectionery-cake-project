const products = [
  {
    id: 122412,
    title: "Шоколадний дрип",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cakes/product1.jpgs",
    description: "Ніжний шоколадний крем з густим ганашем та шоколадними завитками.",
    taste: "шоколад",
    type: "cakes",
    category: "шоколадний",
    isTheme: false,
    weight: "1 кг",
    price: 950
  },
  {
    id: 2,
    title: "Полуничний дрип",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cakes/product2.jpg",
    description: "Свіжі полуниці з ягідним соусом та ванільним кремом.",
    taste: "полуниця",
    type: "cakes",
    category: "ягідний",
    isTheme: false,
    weight: "1 кг",
    price: 1050
  },
  {
    id: 3,
    title: "Чорничний мус",
   image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cakes/product3.jpg",
    description: "Легкий чорничний мус на пісочній основі з глянцевим дрипом.",
    taste: "чорниця",
    type: "cakes",
    category: "ягідний",
    isTheme: false,
    weight: "1.2 кг",
    price: 1150
  },
  {
    id: 4,
    title: "Подвійний шоколад",
   image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cakes/product4.jpg",
    description: "Густий шоколадний крем та какао-трюфелі зверху.",
    taste: "шоколад",
    type: "cakes",
    category: "шоколадний",
    isTheme: false,
    weight: "1.1 кг",
    price: 1100
  },
   {
    id: 24122101,
    title: "Жовтий класичний макарон",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/macarons/product42.jpg",
    description: "Ніжний мигдальний макарон з кремовою лимонною начинкою.",
    taste: "лимон",
    type: "macarons",
    category: "цитрусові",
    isTheme: false,
    price: 45
  },
  {
    id: 24122102,
    title: "Апельсиновий макарон",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/macarons/product43.jpg",
    description: "Яскравий апельсиновий макарон з освіжаючим цитрусовим кремом.",
    taste: "апельсин",
    type: "macarons",
    category: "цитрусові",
    isTheme: false,
    price: 45
  },
  {
    id: 24122103,
    title: "Фісташковий макарон",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/macarons/product44.jpg",
    description: "Традиційний фісташковий макарон з насиченим кремом.",
    taste: "фісташка",
    type: "macarons",
    category: "горіхові",
    isTheme: false,
    price: 50
  },
  {
    id: 24122104,
    title: "Шоколадно-ванільний макарон",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/macarons/product45.jpg",
    description: "Ніжна ванільна начинка у поєднанні з темним шоколадним ганашем.",
    taste: "шоколад",
    type: "macarons",
    category: "шоколадні",
    isTheme: false,
    price: 50
  },
  {
    id: 24122105,
    title: "Полунично-лимонний макарон",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/macarons/product46.jpg",
    description: "Ніжна полунична нотка з яскравим лимонним кремом усередині.",
    taste: "полуниця",
    type: "macarons",
    category: "ягідні",
    isTheme: false,
    price: 45
  },
  {
    id: 24122106,
    title: "М'ятно-апельсиновий макарон",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/macarons/product47.jpg",
    description: "Екзотичний макарон з апельсиновим конфі та свіжим листочком м’яти.",
    taste: "апельсин",
    type: "macarons",
    category: "цитрусові",
    isTheme: false,
    price: 50
  },
  {
    id: 24122107,
    title: "Фіолетовий макарон з шоколадом",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/macarons/product48.jpg",
    description: "Ніжний лавандовий макарон з білим кремом та шоколадним декором.",
    taste: "ваніль",
    type: "macarons",
    category: "квіткові",
    isTheme: false,
    price: 55
  },
  {
    id: 24122108,
    title: "Валентинів макарон",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/macarons/product49.jpg",
    description: "Полуничний макарон з серцем — ідеальний для романтичних моментів.",
    taste: "полуниця",
    type: "macarons",
    category: "ягідні",
    isTheme: true,
    price: 55
  },
  {
    id: 24122109,
    title: "Лимонний макарон з цукром",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/macarons/product50.jpg",
    description: "Яскравий лимонний макарон, посипаний хрумким цукром.",
    taste: "лимон",
    type: "macarons",
    category: "цитрусові",
    isTheme: false,
    price: 45
  },
  {
    id: 24122110,
    title: "Класичний фісташковий макарон",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/macarons/product51.jpg",
    description: "Ніжний зелений макарон з густим фісташковим кремом.",
    taste: "фісташка",
    type: "macarons",
    category: "горіхові",
    isTheme: false,
    price: 50
  },
  {
    id: 5,
    title: "Малиновий мус",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cakes/product5.jpg",
    description: "Яскравий малиновий мус з ягідним соусом.",
    taste: "малина",
    type: "cakes",
    category: "ягідний",
    isTheme: false,
    weight: "1 кг",
    price: 1050
  },
  {
    id: 6,
    title: "Лимонний десерт",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cakes/product6.jpg",
    description: "Ніжний лимонний мус зі свіжими цитрусовими нотками.",
    taste: "лимон",
    type: "cakes",
    category: "цитрусовий",
    isTheme: false,
    weight: "1 кг",
    price: 1000
  },
  {
    id: 7,
    title: "Шоколадний торт з трюфелями",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cakes/product7.jpg",
    description: "Повітряний шоколадний крем та какао-трюфелі зверху.",
    taste: "шоколад",
    type: "cakes",
    category: "шоколадний",
    isTheme: false,
    weight: "1 кг",
    price: 1090
  },
  {
    id: 8,
    title: "Японський полуничний",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cakes/product8.jpg",
    description: "Суфле-крем та цільні ягоди полуниці.",
    taste: "полуниця",
    type: "cakes",
    category: "ягідний",
    isTheme: false,
    weight: "0.9 кг",
    price: 990
  },
  {
    id: 12,
    title: "Minecraft Block",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cakes/product12.jpg",
    description: "Торт у стилі Minecraft, повністю у вигляді блоку.",
    taste: "ваніль",
    type: "cakes",
    category: "тематичний",
    isTheme: true,
    weight: "1.4 кг",
    price: 1650
  },
];

const fs = require("fs");
const path = require("path");

const headers = [
  "id",
  "title",
  "image_url",
  "description",
  "taste",
  "type",
  "category",
  "isTheme",
  "weight",
  "price",
];

function csvEscape(value) {
  if (value === null || value === undefined) return "";
  const s = String(value);
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

const rows = products.map((p) => headers.map((h) => csvEscape(p[h])).join(","));

const csv = [headers.join(","), ...rows].join("\n");

// UTF-8
const outPath = path.join(process.cwd(), "products.csv");
fs.writeFileSync(outPath, csv, "utf8");

console.log("✅ products.csv created:", outPath);
