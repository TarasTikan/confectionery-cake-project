

import tasteBerry from "../img/tasteBerry.jpg";
import tasteBerryLemon from "../img/tasteBerryLemon.jpg";
import tasteCharryChocolate from "../img/tasteCharryChocolate.jpg";
import tasteChocolate from "../img/tasteChocolate.jpg";
import tasteNapoleon from "../img/tasteNapoleon.jpg";
import tastePistachioRaspberry from "../img/tastePistachioRaspberry.jpg";
import tasteRedVelvet from "../img/tasteRedVelvet.jpg";
import tasteSnikers from "../img/tasteSnikers.jpg";
import tasteStrawberry from "../img/tasteStrawberry.jpg";
import tasteStrawberryMango from "../img/tasteStrawberryMango.jpg";

export const cakes = [
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

export const fillings = [
  {
    id: 112,
    title: "Ягідна",
    image: tasteBerry,
    description: "Ягідна начинка з міксом сезонних ягід та ніжним кремом.",
  },
  {
    id: 22,
    title: "Фісташкка-малина",
    image: tastePistachioRaspberry,
    description: "Фісташковий бісквіт у поєднанні з малиновим прошарком.",
  },
  {
    id: 33,
    title: "Чорниця-лимон",
    image: tasteBerryLemon,
    description: "Чорниця та лимонний крем для свіжого смаку.",
  },
  {
    id: 44,
    title: "Шоколад",
    image: tasteChocolate,
    description: "Насичений шоколадний крем і м’який бісквіт.",
  },
  {
    id: 55,
    title: "Шоколад-вишня",
    image: tasteCharryChocolate,
    description: "Шоколадна основа з вишнею та ніжним кремом.",
  },
  {
    id: 66,
    title: "Червоний оксамит",
    image: tasteRedVelvet,
    description: "Класичний червоний бархат із вершковим сирним кремом.",
  },
  {
    id: 77,
    title: "Наполеон",
    image: tasteNapoleon,
    description: "Традиційний Наполеон із тонкими листковими коржами.",
  },
  {
    id: 88,
    title: "Снікерс",
    image: tasteSnikers,
    description: "Арахіс, карамель, шоколад — снікерс-начинка для гурманів.",
  },
  {
    id: 99,
    title: "Полуниця",
    image: tasteStrawberry,
    description: "Ніжний ванільний бісквіт із полуничною начинкою.",
  },
  {
    id: 110,
    title: "Полуниця-манго",
    image: tasteStrawberryMango,
    description: "Екзотичне поєднання полуниці та манго.",
  },
];

export const products = [
  {
    id: 122412,
    title: "Шоколадний дрип",
   image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cakes/product1.jpg",
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
    id: 9,
    title: "Фісташковий преміум",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cakes/product9.jpg",
    description: "Фісташковий крем і цілі фісташки зверху.",
    taste: "фісташка",
    type: "cakes",
    category: "горіховий",
    isTheme: false,
    weight: "1.2 кг",
    price: 1350
  },
  {
    id: 10,
    title: "Темний шоколад делюкс",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cakes/product10.jpg",
    description: "Густий гірко-шоколадний крем з хрусткою крихтою.",
    taste: "шоколад",
    type: "cakes",
    category: "шоколадний",
    isTheme: false,
    weight: "1.3 кг",
    price: 1190
  },
  {
    id: 11,
    title: "Ред Вельвет",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cakes/product11.jpg",
    description: "Класичний Red Velvet з вершковим кремом.",
    taste: "ваніль + какао",
    type: "cakes",
    category: "класичний",
    isTheme: false,
    weight: "1.2 кг",
    price: 1150
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
  {
    id: 14,
    title: "Counter Strike 2",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cakes/product13.jpg",
    description: "Стильний торт з CS2 логотипом та зброєю.",
    taste: "шоколад",
    type: "cakes",
    category: "тематичний",
    isTheme: true,
    weight: "1.5 кг",
    price: 1750
  },
  {
    id: 15,
    title: "Harry Potter",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cakes/product14.jpg",
    description: "Бордове покриття, окуляри, чарівна паличка та золотий HP логотип.",
    taste: "шоколад + ваніль",
    type: "cakes",
    category: "тематичний",
    isTheme: true,
    weight: "1.3 кг",
    price: 1600
  },
  {
    id: 16,
    title: "Акварельні квіти",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cakes/product15.jpg",
    description: "Акварельний дизайн і кремові троянди.",
    taste: "ваніль",
    type: "cakes",
    category: "квітковий",
    isTheme: false,
    weight: "1 кг",
    price: 1150
  },
  {
    id: 17,
    title: "Морозивний дитячий",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cakes/product16.jpg",
    description: "Веселий торт з кремовими морозивами та кольоровими посипками.",
    taste: "ваніль",
    type: "cakes",
    category: "дитячий",
    isTheme: false,
    weight: "1 кг",
    price: 1050
  },
  {
    id: 24124124124,
    title: "Шоколадний класичний",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cupcakes/products18.jpg",
    description: "Насичений шоколадний капкейк з густим кремом із какао.",
    taste: "шоколад",
    type: "cupcakes",
    category: "класичний",
    isTheme: false,
    price: 75
  },
  {
    id: 24124124125,
    title: "Полуничний крем",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cupcakes/products19.jpg",
    description: "Повітряний ванільний капкейк з полуничним кремом.",
    taste: "полуниця",
    type: "cupcakes",
    category: "ягідний",
    isTheme: false,
    price: 75
  },
  {
    id: 24124124126,
    title: "Ваніль-шоколад дрип",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cupcakes/products20.jpg",
    description: "Ванільний крем з шоколадним дрипом та плиточкою шоколаду.",
    taste: "ваніль-шоколад",
    type: "cupcakes",
    category: "дрип",
    isTheme: false,
    price: 85
  },
  {
    id: 24124124127,
    title: "Полуничний з ягідкою",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cupcakes/products21.jpg",
    description: "Ніжний капкейк зі свіжою полуницею та кремом з ягідним пюре.",
    taste: "полуниця",
    type: "cupcakes",
    category: "ягідний",
    isTheme: false,
    price: 85
  },
  {
    id: 24124124128,
    title: "Шоколад-карамель",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cupcakes/products22.jpg",
    description: "Ванільний крем з шоколадною стружкою та завитком какао.",
    taste: "шоколад",
    type: "cupcakes",
    category: "карамельний",
    isTheme: false,
    price: 80
  },
  {
    id: 24124124129,
    title: "Рожеве серце",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cupcakes/products23.jpg",
    description: "Ніжний рожевий крем з цукровим сердечком.",
    taste: "ваніль",
    type: "cupcakes",
    category: "романтичний",
    isTheme: true,
    price: 90
  },
  {
    id: 24124124130,
    title: "Карамельний мікс",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cupcakes/products24.jpg",
    description: "Білий крем з карамельним дрипом, вафельними паличками та меренгою.",
    taste: "карамель",
    type: "cupcakes",
    category: "десертний",
    isTheme: false,
    price: 90
  },
  {
    id: 24124124131,
    title: "Шоколадно-полуничний",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cupcakes/products25.jpg",
    description: "Шоколадний капкейк з полуничним кремом та свіжою ягодою.",
    taste: "шоколад-полуниця",
    type: "cupcakes",
    category: "ягідний",
    isTheme: false,
    price: 85
  },
  {
    id: 24124124132,
    title: "Шоколадна ромашка",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cupcakes/products26.jpg",
    description: "Шоколадний крем, прикрашений цукровою ромашкою.",
    taste: "шоколад",
    type: "cupcakes",
    category: "квітковий",
    isTheme: true,
    price: 95
  },
  {
    id: 24124124133,
    title: "Орео-шоколад",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cupcakes/products27.jpg",
    description: "Шоколадний крем з печивом Oreo та дрипом із шоколаду.",
    taste: "орео",
    type: "cupcakes",
    category: "oreo",
    isTheme: false,
    price: 95
  },
  {
    id: 24124124134,
    title: "Шоколадні вензелі",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cupcakes/products28.jpg",
    description: "Густий шоколадний крем з декоративними жовтими вензелями.",
    taste: "шоколад",
    type: "cupcakes",
    category: "дизайнерський",
    isTheme: true,
    price: 100
  },
  {
    id: 24124124135,
    title: "Червоний оксамит серця",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cupcakes/products29.jpg",
    description: "Red Velvet з білим кремом та цукровими червоними сердечками.",
    taste: "ред велвет",
    type: "cupcakes",
    category: "романтичний",
    isTheme: true,
    price: 100
  },
  {
    id: 24124124136,
    title: "Зірковий ваніль-шоколад",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cupcakes/products30.jpg",
    description: "Капкейк із зіркою з шоколаду та ніжним кремом.",
    taste: "ваніль-шоколад",
    type: "cupcakes",
    category: "святковий",
    isTheme: true,
    price: 95
  },
  {
    id: 24124124137,
    title: "Полуничка в горошок",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cupcakes/products31.jpg",
    description: "Ванільний крем з цукровою полуничкою та кольоровими посипками.",
    taste: "полуниця",
    type: "cupcakes",
    category: "квітково-ягідний",
    isTheme: true,
    price: 95
  },
  {
    id: 24124124138,
    title: "Квітковий ваніль",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cupcakes/products32.jpg",
    description: "Ванільний капкейк з квітами із цукрової мастики.",
    taste: "ваніль",
    type: "cupcakes",
    category: "квітковий",
    isTheme: true,
    price: 95
  },
  {
    id: 24124124139,
    title: "Сердечний мікс",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cupcakes/products33.jpg",
    description: "Капкейк з трьома цукровими сердечками й кремом ваніль.",
    taste: "ваніль",
    type: "cupcakes",
    category: "романтичний",
    isTheme: true,
    price: 90
  },
  {
    id: 24124124140,
    title: "Райдужний капкейк",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cupcakes/products34.jpg",
    description: "Рожевий крем з райдужною мастичною прикрасою та посипками.",
    taste: "ваніль",
    type: "cupcakes",
    category: "дитячий",
    isTheme: true,
    price: 110
  },
  {
    id: 24124124141,
    title: "Єдиноріжка",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cupcakes/products35.jpg",
    description: "Кремово-рожевий капкейк з рогом та вушками єдинорога.",
    taste: "ваніль",
    type: "cupcakes",
    category: "єдиноріг",
    isTheme: true,
    price: 130
  },
  {
    id: 24124124142,
    title: "Морська хвиля",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cupcakes/products36.jpg",
    description: "Бірюзовий крем у формі хвилі з мушлями та цукровим піском.",
    taste: "ваніль",
    type: "cupcakes",
    category: "морський",
    isTheme: true,
    price: 130
  },
  {
    id: 24124124143,
    title: "Лимонний фреш",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cupcakes/products37.jpg",
    description: "Жовтий крем з цукровою часточкою лимона та зеленим листочком.",
    taste: "лимон",
    type: "cupcakes",
    category: "цитрусовий",
    isTheme: false,
    price: 85
  },
  {
    id: 24124124144,
    title: "Шоколадний герб",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cupcakes/products38.jpg",
    description: "Двоколірний крем з шоколадною прикрасою у вигляді щита.",
    taste: "шоколад",
    type: "cupcakes",
    category: "дизайнерський",
    isTheme: true,
    price: 120
  },
  {
    id: 24124124145,
    title: "Метелик ніжності",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cupcakes/products39.jpg",
    description: "Рожевий крем з цукровою метеликом і ніжними перлинками.",
    taste: "ваніль",
    type: "cupcakes",
    category: "квітковий",
    isTheme: true,
    price: 100
  },
  {
    id: 24124124146,
    title: "Лаванда та квіти",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cupcakes/products40.jpg",
    description: "Лавандовий крем із цукровими квіточками та зеленими листочками.",
    taste: "лаванда-ваніль",
    type: "cupcakes",
    category: "квітковий",
    isTheme: true,
    price: 110
  },
    {
    id: 24124124147,
    title: "Лавандова ніжність",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/cupcakes/products41.jpg",
    description: "Лавандовий крем із цукровими квіточками.",
    taste: "лаванда-ваніль",
    type: "cupcakes",
    category: "квітковий",
    isTheme: true,
    price: 120
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
    id: 24122111,
    title: "Медовий макарон",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/macarons/product52.jpg",
    description: "Макарон з медовим кремом і рельєфним верхом у вигляді стільників.",
    taste: "мед",
    type: "macarons",
    category: "солодкі",
    isTheme: false,
    price: 55
  },
    {
    id: 24122112,
    title: "Малиновий макарон з крем-чізом",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/macarons/product53.jpg",
    description: "Ніжний рожевий макарон з кремом та яскравою малиною всередині.",
    taste: "малина",
    type: "macarons",
    category: "ягідні",
    isTheme: false,
    price: 55
  },
  {
    id: 24122113,
    title: "Чорничний макарон",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/macarons/product54.jpg",
    description: "Лавандовий макарон із насиченим чорничним ганашем.",
    taste: "чорниця",
    type: "macarons",
    category: "ягідні",
    isTheme: false,
    price: 55
  },
  {
    id: 24122114,
    title: "Ванільний макарон",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/macarons/product55.jpg",
    description: "Класичний біло-кремовий макарон із насиченим ванільним кремом.",
    taste: "ваніль",
    type: "macarons",
    category: "класичні",
    isTheme: false,
    price: 45
  },
  {
    id: 24122115,
    title: "Макарон із солоною карамеллю",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/macarons/product56.jpg",
    description: "Тануча карамель з легкою солоною ноткою всередині хрумкого макарону.",
    taste: "карамель",
    type: "macarons",
    category: "солодкі",
    isTheme: false,
    price: 55
  },
  {
    id: 24122116,
    title: "Екзотичний манго-маракуя",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/macarons/product57.jpg",
    description: "Тропічний макарон із соковитою фруктовою начинкою манго та маракуї.",
    taste: "манго",
    type: "macarons",
    category: "фруктові",
    isTheme: false,
    price: 60
  },
  {
    id: 24122117,
    title: "Подвійний шоколад",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/macarons/product58.jpg",
    description: "Шоколадний макарон із густим бельгійським шоколадним ганашем.",
    taste: "шоколад",
    type: "macarons",
    category: "шоколадні",
    isTheme: false,
    price: 60
  },
  {
    id: 24122118,
    title: "Рубіновий макарон",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/macarons/product59.jpg",
    description: "Ніжний рожево-червоний макарон з рубіновим шоколадом.",
    taste: "рубіновий шоколад",
    type: "macarons",
    category: "шоколадні",
    isTheme: false,
    price: 65
  },
  {
    id: 24122119,
    title: "Кава-лате макарон",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/macarons/product60.jpg",
    description: "Кавовий макарон із кремом латте — ніжний та ароматний.",
    taste: "кава",
    type: "macarons",
    category: "кавові",
    isTheme: false,
    price: 55
  },
  {
    id: 24122120,
    title: "Макарон «Раф»",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/macarons/product61.jpg",
    description: "Ванільно-карамельна начинка в поєднанні з легким кавовим ароматом.",
    taste: "ваніль, кава",
    type: "macarons",
    category: "кавові",
    isTheme: true,
    price: 60
  },
  {
    id: 24122122324,
    title: "Ягідний Mix",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/macarons/product62.jpg",
    description: "Насичена ягідна начинка: малина, чорниця та полуниця.",
    taste: "ягоди",
    type: "macarons",
    category: "ягідні",
    isTheme: false,
    price: 55
  },
   {
    id: 24122121,
    title: "Ягідний max",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/macarons/product63.jpg",
    description: "Насичена ягідна начинка: малина, чорниця та полуниця.",
    taste: "ягоди",
    type: "macarons",
    category: "ягідні",
    isTheme: false,
    price: 55
  },

  {
    id: 2223414211,
    title: "Малиновий тарт класичний",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/tarts/product64.jpg",
    description: "Тарт з ванільним кремом та свіжою малиною, прикрашений полуницею та м'ятою.",
    taste: "малина",
    type: "tarts",
    category: "ягідний",
    isTheme: false,
    price: 950
  },
  {
    id: 2223414212,
    title: "Малиновий спіральний тарт",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/tarts/product65.jpg",
    description: "Незвичайний дизайн з малиновою спіраллю та полуницею.",
    taste: "малина",
    type: "tarts",
    category: "дизайнерський",
    isTheme: false,
    price: 980
  },
  {
    id: 2223414213,
    title: "Малиновий тарт з полуницею",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/tarts/product66.jpg",
    description: "Класичний тарт із щедрою кількістю малини та полуниці.",
    taste: "малина",
    type: "tarts",
    category: "ягідний",
    isTheme: false,
    price: 950
  },
  {
    id: 2223414214,
    title: "Персиково-чорничний тарт",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/tarts/product67.jpg",
    description: "Тарт із персиковими пелюстками та великими чорницями.",
    taste: "персик, чорниця",
    type: "tarts",
    category: "фруктовий",
    isTheme: false,
    price: 990
  },
  {
    id: 2223414215,
    title: "Ягідний мікс тарт",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/tarts/product68.jpg",
    description: "Полуниця, малина та яблуко в красивому декоративному оформленні.",
    taste: "ягоди",
    type: "tarts",
    category: "ягідний",
    isTheme: false,
    price: 970
  },
  {
    id: 2223414216,
    title: "Мангово-малиновий тарт",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/tarts/product69.jpg",
    description: "Персикові пелюстки, малина та кремові бортики.",
    taste: "манго, малина",
    type: "tarts",
    category: "фруктовий",
    isTheme: false,
    price: 1050
  },
  {
    id: 2223414217,
    title: "Червона смородина з шоколадом",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/tarts/product70.jpg",
    description: "Яскравий тарт зі смородиною та шоколадною сіткою.",
    taste: "смородина",
    type: "tarts",
    category: "ягідний",
    isTheme: false,
    price: 960
  },
  {
    id: 2223414218,
    title: "Лимонний тарт з меренгою",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/tarts/product71.jpg",
    description: "Кисло-солодкий тарт з лимонним курдом та підпаленими італійськими меренгами.",
    taste: "лимон",
    type: "tarts",
    category: "кремовий",
    isTheme: false,
    price: 1020
  },
  {
    id: 2223414219,
    title: "Лимонний тарт квітка",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/tarts/product72.jpg",
    description: "Акуратний дизайн у вигляді квітки з кремовими меренгами.",
    taste: "лимон",
    type: "tarts",
    category: "кремовий",
    isTheme: false,
    price: 1080
  },
  {
    id: 2223414220,
    title: "Полуничний тарт класичний",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/tarts/product73.jpg",
    description: "Полуничний дизайн у формі квітки з м'ятою.",
    taste: "полуниця",
    type: "tarts",
    category: "ягідний",
    isTheme: false,
    price: 960
  },
  {
    id: 2223414221,
    title: "Полунично-фісташковий тарт",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/tarts/product74.jpg",
    description: "Полуниця та кремова фісташка у центрі — ідеальний баланс.",
    taste: "полуниця, фісташка",
    type: "tarts",
    category: "горіховий",
    isTheme: false,
    price: 1100
  },
  {
    id: 2223414222,
    title: "Полуничний тарт з білим шоколадом",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/tarts/product75.jpg",
    description: "Полуниця, білий шоколад та фісташкові крихти.",
    taste: "полуниця, білий шоколад",
    type: "tarts",
    category: "ягідний",
    isTheme: false,
    price: 1020
  },
  {
    id: 2223414223,
    title: "Полуничний тарт з темним шоколадом",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/tarts/product76.jpg",
    description: "Поєднання полуниці та шматочків темного шоколаду.",
    taste: "полуниця, шоколад",
    type: "tarts",
    category: "шоколадний",
    isTheme: false,
    price: 1040
  },
  {
    id: 2223414224,
    title: "Чорнично-малиновий тарт спіраль",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/tarts/product77.jpg",
    description: "Дизайнерський тарт зі спіраллю з малини та чорниці.",
    taste: "малина, чорниця",
    type: "tarts",
    category: "ягідний",
    isTheme: false,
    price: 1080
  },
  {
    id: 2223414225,
    title: "Малиновий тарт з трояндою",
    image_url: "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/tarts/product78.jpg",
    description: "Ніжний тарт з малиновою трояндою у центрі.",
    taste: "малина",
    type: "tarts",
    category: "декор",
    isTheme: false,
    price: 1120
  },
];

// const headers = ["id","title","image_url","description","taste","type","category","isTheme","weight","price"];

// const escapeCsv = (v) => {
//   if (v === null || v === undefined) return "";
//   const s = String(v).replace(/"/g, '""');
//   return /[,"\n]/.test(s) ? `"${s}"` : s;
// };

// const csv = [
//   headers.join(","),
//   ...products.map(p => headers.map(h => escapeCsv(p[h])).join(",")),
// ].join("\n");

// console.log(csv);