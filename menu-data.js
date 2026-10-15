// ===== menu-data.js =====
// All the dishes live here. menu.js and dish.js both read this list,
// so to change a name, price or description you only edit it in one place.

var CATEGORIES = {
  main:     { label: "Main Dishes", folder: "MainDishes" },
  soup:     { label: "Soup",        folder: "Soup" },
  grilled:  { label: "Grilled",     folder: "Grilled" },
  silog:    { label: "Silog",       folder: "Silog" },
  sizzling: { label: "Sizzlings",   folder: "Sizzlings" },
  dessert:  { label: "Desserts",    folder: "Dessert" },
  drinks:   { label: "Beverages",   folder: "Beverages" }
};

// Customization choices shown on the dish page, per category
var EXTRAS = {
  main:     { prep: [["Classic", "Original recipe · included"], ["With chili", "A little extra warmth · +₱0 sample"]], addon: ["Extra rice", 20], tip: "Serve with steamed rice and a side of atchara (pickled papaya) for a full Filipino lunch." },
  soup:     { prep: [["Classic", "Original recipe · included"], ["Extra spicy", "Added siling labuyo · +₱0 sample"]], addon: ["Steamed rice", 20], tip: "Serve piping hot with rice, and calamansi or patis on the side to season to taste." },
  grilled:  { prep: [["Classic", "Grilled the traditional way · included"], ["With chili vinegar", "Spicy dipping sauce on the side · +₱0 sample"]], addon: ["Steamed rice", 20], tip: "Best shared at the table with rice, sliced tomatoes and a bowl of sawsawan." },
  silog:    { prep: [["Sunny-side up", "Runny yolk · included"], ["Over easy", "Cooked through on both sides · +₱0 sample"]], addon: ["Extra egg", 15], tip: "A hearty breakfast any time of day. Pair it with a cold calamansi juice." },
  sizzling: { prep: [["Classic", "Original recipe · included"], ["With chili", "Extra chili on the hot plate · +₱0 sample"]], addon: ["Extra rice", 20], tip: "Served on a hot plate, so give it a minute before the first bite. Squeeze calamansi over the top." },
  dessert:  { prep: [["Regular", "Original sweetness · included"], ["Less sweet", "Lighter on the sugar · +₱0 sample"]], addon: ["Extra topping", 20], tip: "A cool finish after a rich meal. Perfect for sharing." },
  drinks:   { prep: [["Regular ice", "Served over ice · included"], ["Less ice", "More drink, less ice · +₱0 sample"]], addon: ["Upsize to large", 15], tip: "Refreshing beside anything grilled, fried or sizzling." }
};

var DISHES = [];

function slug(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

// add(category, name, price, image file, description, ingredients, bestseller?)
function add(cat, name, price, file, desc, ing, best) {
  DISHES.push({
    id: slug(name), cat: cat, name: name, price: price,
    img: CATEGORIES[cat].folder + "/" + file,
    desc: desc + ((cat == "main" || cat == "sizzling") ? " Rice included." : ""), ing: ing, best: best === true
  });
}

// ---- Main Dishes ----
add("main", "Adobong Pusit", 120, "adobongpusit.JPG", "Tender squid simmered in its own ink with soy sauce, vinegar and garlic.", "squid, soy sauce, vinegar, garlic, onion");
add("main", "Beef Caldereta", 130, "beefcaldereta.JPG", "Beef stewed in tomato sauce with potatoes, carrots and bell peppers.", "beef, tomato sauce, potatoes, carrots, bell peppers");
add("main", "Beef Mechado", 120, "beefmechado.jpg", "Beef braised in tomato and soy sauce until fork-tender, with potatoes and carrots.", "beef, tomato sauce, soy sauce, potatoes, carrots");
add("main", "Beef Morcon", 140, "beefmorcon.JPG", "Beef rolled around sausage, egg and pickles, then simmered in tomato sauce.", "beef, sausage, egg, pickles, tomato sauce");
add("main", "Chicken Adobo", 95, "Chicken_Adobo.JPG", "Slow-braised chicken in soy, vinegar and garlic, finished with bay leaves and peppercorns.", "chicken, soy sauce, vinegar, garlic, bay leaves, peppercorns", true);
add("main", "Chicken Afritada", 100, "chickenafritada.JPG", "Chicken in a light tomato sauce with potatoes, carrots and bell peppers.", "chicken, tomato sauce, potatoes, carrots, bell peppers");
add("main", "Chicken Caldereta", 110, "chickencaldereta.JPG", "Chicken simmered in a rich, slightly spicy tomato and liver sauce.", "chicken, tomato sauce, liver spread, potatoes, bell peppers");
add("main", "Kare-kare", 140, "KareKare.png", "Tender oxtail, vegetables and a rich peanut sauce, with bagoong on the side.", "oxtail, peanut sauce, eggplant, string beans, bok choy, bagoong", true);
add("main", "Lengua Estofado", 150, "lenguaestofado.JPG", "Ox tongue braised until tender in a sweet and savory sauce with saba bananas.", "ox tongue, soy sauce, saba banana, olives, tomato sauce");
add("main", "Menudo", 90, "Menudo.JPG", "Diced pork and liver stewed with potatoes, carrots and raisins in tomato sauce.", "pork, liver, tomato sauce, potatoes, carrots, raisins");
add("main", "Pork Adobo", 95, "porkadobo.JPG", "Pork belly braised in soy, vinegar and garlic until the sauce turns glossy.", "pork belly, soy sauce, vinegar, garlic, peppercorns");
add("main", "Pork Afritada", 100, "porkafritada.JPG", "Pork stewed in tomato sauce with potatoes, carrots and green peas.", "pork, tomato sauce, potatoes, carrots, green peas");
add("main", "Pork Giniling", 85, "porkginiling.JPG", "Ground pork sautéed with potatoes, carrots and raisins. A weeknight favorite.", "ground pork, potatoes, carrots, raisins, tomato sauce");
add("main", "Pork Potchero", 85, "porkpotchero.JPG", "Pork simmered with saba bananas, chickpeas and cabbage in a tomato broth.", "pork, saba banana, chickpeas, cabbage, tomato sauce");

// ---- Soup ----
add("soup", "Arroz Caldo", 75, "arozzcaldo.jpg", "Ginger-scented rice porridge with chicken, toasted garlic and a boiled egg.", "rice, chicken, ginger, garlic, egg, scallions");
add("soup", "Batchoy", 95, "batchoy.jpg", "Pork noodle soup with crushed chicharon and liver in a rich pork broth.", "egg noodles, pork, liver, chicharon, garlic, scallions");
add("soup", "Bulalo", 199, "bulalo.jpg", "Beef shank and bone marrow soup with corn and cabbage.", "beef shank, bone marrow, corn, cabbage, pechay");
add("soup", "Dinuguan", 100, "dinuguan.jpg", "Pork stewed in a savory dark sauce with vinegar and a touch of chili.", "pork, pork blood, vinegar, garlic, siling haba");
add("soup", "Gotong Lugaw", 85, "gotonglugaw.jpg", "Rice porridge with beef tripe, ginger and toasted garlic.", "rice, beef tripe, ginger, garlic, scallions");
add("soup", "Lomi Batangas", 100, "lomibatangas.jpg", "Thick egg noodle soup with pork, liver and egg in a hearty broth.", "lomi noodles, pork, liver, egg, cabbage, carrots");
add("soup", "Mami", 75, "mami.jpg", "Egg noodle soup with chicken, egg and scallions in a clear broth.", "egg noodles, chicken, egg, scallions, garlic");
add("soup", "Nilagang Baboy", 130, "nilagangbaboy.jpg", "Pork boiled slowly with potatoes, corn and cabbage in a clear, peppery broth.", "pork, potatoes, corn, cabbage, pechay, peppercorns");
add("soup", "Papaitan", 120, "papaitan.jpg", "An Ilocano soup of beef innards in ginger broth with a gentle bitter finish.", "beef innards, ginger, onion, siling labuyo");
add("soup", "Pares", 120, "pares.jpg", "Beef braised in a sweet-savory sauce, served with garlic rice and broth.", "beef, soy sauce, star anise, garlic rice, scallions");
add("soup", "Pork Sinigang", 150, "Pork_Sinigang.jpg", "Pork and seasonal vegetables in a bright tamarind broth. Comfort in every spoonful.", "pork, tamarind, kangkong, radish, tomato, eggplant", true);
add("soup", "Sinigang na Bangus", 150, "sinigangnabangus.jpg", "Milkfish and vegetables in a sour tamarind broth.", "milkfish, tamarind, kangkong, radish, tomato, string beans");
add("soup", "Sinigang na Hipon", 180, "sinigangnahipon.jpg", "Fresh shrimp in a tangy tamarind broth with garden vegetables.", "shrimp, tamarind, kangkong, radish, tomato, eggplant");
add("soup", "Tinolang Manok", 130, "tinola.jpg", "Chicken in ginger broth with green papaya and chili leaves.", "chicken, ginger, green papaya, chili leaves, onion");

// ---- Grilled ----
add("grilled", "Chicken Barbecue", 120, "chickenbbq.JPG", "Chicken skewered and grilled with a sweet, smoky barbecue glaze.", "chicken, soy sauce, banana ketchup, calamansi, garlic");
add("grilled", "Crispy Pata", 650, "crispypata.JPG", "Crackling pork knuckle with a soy-vinegar dipping sauce and calamansi.", "pork knuckle, garlic, bay leaves, soy sauce, vinegar");
add("grilled", "Inihaw na Baboy", 180, "inihawnababoy.JPG", "Charcoal-grilled pork belly with a sweet-sour glaze.", "pork belly, soy sauce, calamansi, garlic, brown sugar");
add("grilled", "Inihaw na Bangus", 250, "inihawnabangus.JPG", "Grilled milkfish stuffed with tomato and onion.", "milkfish, tomato, onion, ginger, salt");
add("grilled", "Inihaw na Manok", 220, "inihawnamanok.JPG", "Chicken marinated in calamansi and lemongrass, grilled and basted with annatto oil.", "chicken, calamansi, lemongrass, garlic, annatto oil");
add("grilled", "Inihaw na Pusit", 280, "inihawnapusit.JPG", "Squid grilled over charcoal and stuffed with tomato and onion.", "squid, tomato, onion, soy sauce, calamansi");
add("grilled", "Inihaw na Tilapia", 160, "inihawnatilapia.JPG", "Whole tilapia grilled until the skin is lightly crisp, with tomato and onion.", "tilapia, tomato, onion, ginger, salt");
add("grilled", "Lechon Belly", 280, "lechonbelly.JPG", "Herb-stuffed pork belly roasted until the skin crackles.", "pork belly, lemongrass, garlic, pepper, salt");
add("grilled", "Pork BBQ", 35, "porkbbq.JPG", "Per stick. Pork marinated in soy, calamansi and banana ketchup, grilled over charcoal.", "pork, soy sauce, banana ketchup, calamansi, garlic");

// ---- Silog ----
add("silog", "Bacsilog", 95, "bacsilog.jpg", "Crisp bacon, garlic rice and a fried egg.", "bacon, garlic rice, egg");
add("silog", "Bangsilog", 100, "bangsilog.jpg", "Boneless fried milkfish, garlic rice and a fried egg.", "milkfish, garlic rice, egg");
add("silog", "Chicksilog", 95, "chicksilog.jpg", "Fried chicken, garlic rice and a fried egg.", "chicken, garlic rice, egg");
add("silog", "Longsilog", 90, "longsilog.jpg", "Garlicky native sausage, garlic rice and a fried egg.", "longganisa, garlic rice, egg");
add("silog", "Spamsilog", 100, "spamsilog.jpg", "Pan-fried luncheon meat, garlic rice and a fried egg.", "luncheon meat, garlic rice, egg");
add("silog", "Tapsilog", 110, "tapsi.jpg", "Marinated beef strips, garlic rice and a fried egg.", "beef tapa, garlic rice, egg");
add("silog", "Tocilog", 95, "tocilog.jpg", "Sweet cured pork, garlic rice and a fried egg.", "sweet cured pork, garlic rice, egg");

// ---- Sizzlings ----
add("sizzling", "Bangus Sisig", 120, "bangussisig.JPG", "Flaked milkfish with onion and chili on a hot plate, topped with egg.", "milkfish, onion, chili, calamansi, egg");
add("sizzling", "Chicken Sisig", 110, "chickensisig.JPG", "Chopped chicken with onion and chili on a sizzling plate.", "chicken, onion, chili, calamansi, mayonnaise");
add("sizzling", "Crispy Dinakdakan", 130, "crispydinakdakan.JPG", "Crisp pork with onion, chili and a creamy tangy dressing.", "pork, onion, chili, vinegar, mayonnaise");
add("sizzling", "Pork Sisig", 120, "porksisig.JPG", "Chopped pork with onion and chili on a hot plate, topped with egg.", "pork, onion, chili, calamansi, egg");
add("sizzling", "Sizzling Tofu", 85, "Sizzling Tofu.JPG", "Crispy tofu with onion and a savory sauce.", "tofu, onion, soy sauce, chili");
add("sizzling", "Sizzling Beef", 140, "sizzlingbeef.JPG", "Sliced beef on a sizzling plate with onions and a savory gravy.", "beef, onion, gravy, soy sauce");
add("sizzling", "Sizzling Chicken", 120, "sizzlingchiken.JPG", "Chicken on a sizzling plate with onions and a savory gravy.", "chicken, onion, gravy, soy sauce");
add("sizzling", "Sizzling Porkchop", 130, "sizzlingporkchop.JPG", "Pork chop on a sizzling plate with gravy and onions.", "pork chop, onion, gravy, soy sauce");
add("sizzling", "Tokwa't Baboy", 90, "tokwatbaboy.JPG", "Fried tofu and boiled pork in a tangy soy-vinegar sauce with onion.", "tofu, pork, soy sauce, vinegar, onion");

// ---- Desserts ----
add("dessert", "Banana Split", 120, "bananasplit.jpg", "Banana with scoops of ice cream, syrup and a cherry on top.", "banana, ice cream, syrup, cherry");
add("dessert", "Fruit Salad", 80, "fruitsalad.jpg", "Mixed fruits in a sweet cream dressing.", "fruit cocktail, cream, condensed milk, nata de coco");
add("dessert", "Halo-halo", 100, "halohalo.jpg", "A joyful mix of sweet beans, fruit and shaved ice, crowned with ube and leche flan.", "shaved ice, sweet beans, fruit, ube, leche flan, milk", true);
add("dessert", "Leche Flan", 60, "lecheflan.jpg", "Silky caramel custard, steamed slowly until smooth.", "egg yolks, condensed milk, milk, caramel");
add("dessert", "Mais con Yelo", 80, "maisconyelo.jpg", "Sweet corn over shaved ice with milk and sugar.", "sweet corn, shaved ice, milk, sugar");
add("dessert", "Mango Graham", 90, "mangograham.jpg", "Layers of ripe mango, cream and graham crackers, chilled until set.", "ripe mango, cream, graham crackers, condensed milk");
add("dessert", "Saging con Yelo", 80, "sagingconyelo.jpg", "Sweet saba bananas over shaved ice with milk.", "saba banana, shaved ice, milk, sugar");
add("dessert", "Ube Ice Cream", 60, "ubeicecream.jpg", "Creamy purple yam ice cream.", "purple yam, milk, cream, sugar");

// ---- Beverages ----
add("drinks", "Buko Juice", 65, "buko.jpg", "Fresh young coconut water.", "young coconut water, coconut meat");
add("drinks", "Calamansi Juice", 55, "calamansi.jpg", "Fresh calamansi, lightly sweetened.", "calamansi, sugar, water");
add("drinks", "Iced Tea", 50, "icedtea.jpg", "House-brewed and served over ice.", "black tea, sugar, water");
add("drinks", "Sago't Gulaman", 60, "Sago.jpg", "Brown sugar syrup with tapioca pearls and jelly.", "brown sugar, sago, gulaman, water");
add("drinks", "Soft Drinks", 45, "softdrinks.jpg", "Bottled soda, served cold.", "carbonated soft drink");
add("drinks", "Water", 15, "waterrrr.jpg", "Bottled drinking water, served cold.", "drinking water");