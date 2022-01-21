const beerString = `[{"id":72,"name":"Whisky Sour - B-Sides","tagline":"Pilot Brew - Deconstructed Whisky Sour.","first_brewed":"03/2015","description":"Deconstructed whisky sour, reconstructed as a beer.","image_url":"https://images.punkapi.com/v2/keg.png","abv":7,"ibu":20,"target_fg":1021,"target_og":1081,"ebc":12,"srm":6,"ph":3.2,"attenuation_level":74,"volume":{"value":20,"unit":"litres"},"boil_volume":{"value":25,"unit":"litres"},"method":{"mash_temp":[{"temp":{"value":60,"unit":"celsius"},"duration":10},{"temp":{"value":65,"unit":"celsius"},"duration":30},{"temp":{"value":72,"unit":"celsius"},"duration":10},{"temp":{"value":78,"unit":"celsius"},"duration":5}],"fermentation":{"temp":{"value":null,"unit":"celsius"}},"twist":"Kettle Soured"},"ingredients":{"malt":[{"name":"Extra Pale","amount":{"value":6.88,"unit":"kilograms"}},{"name":"Acidulated Malt","amount":{"value":1.88,"unit":"kilograms"}},{"name":"Wheat Malt","amount":{"value":1.25,"unit":"kilograms"}},{"name":"Rye","amount":{"value":0.25,"unit":"kilograms"}},{"name":"Special W","amount":{"value":0.05,"unit":"kilograms"}}],"hops":[{"name":"Amarillo","amount":{"value":8.5,"unit":"grams"},"add":"start","attribute":"bitter"},{"name":"Citra","amount":{"value":8.5,"unit":"grams"},"add":"start","attribute":"bitter"},{"name":"Simcoe","amount":{"value":8.5,"unit":"grams"},"add":"start","attribute":"bitter"},{"name":"Amarillo","amount":{"value":5,"unit":"grams"},"add":"end","attribute":"flavour"},{"name":"Citra","amount":{"value":5,"unit":"grams"},"add":"end","attribute":"flavour"},{"name":"Simcoe","amount":{"value":5,"unit":"grams"},"add":"end","attribute":"flavour"},{"name":"Amarillo","amount":{"value":1.5,"unit":"grams"},"add":"dry hop","attribute":"aroma"},{"name":"Citra","amount":{"value":1.5,"unit":"grams"},"add":"dry hop","attribute":"aroma"},{"name":"Simcoe","amount":{"value":1.5,"unit":"grams"},"add":"dry hop","attribute":"aroma"}],"yeast":"Wyeast 1272 - American Ale II™"},"food_pairing":["Potted fresh & smoked salmon","Spiced nut loaf","Lemon poppyseed donuts"],"brewers_tips":"Lemon poppyseed donuts.","contributed_by":"Sam Mason <samjbmason>"}]`;

//Visa bild, namn på ölen och alla food pairings

const obj = JSON.parse(beerString);
console.log(obj);

//url
console.log(obj[0].image_url);
const img = document.createElement('img');
img.src = obj[0].image_url;
document.body.append(img);

//Namnet
console.log(obj[0].name);
const h1 = document.createElement('h1');
h1.innerText = obj[0].name;
document.body.append(h1);

//Alla food pairings
console.log(obj[0].food_pairing[0]);

for(const food of obj[0].food_pairing){
    const p = document.createElement('p');
    p.innerText = food;
    document.body.append(p);
}