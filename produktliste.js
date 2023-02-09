const urlParams = new URLSearchParams(window.location.search);
let url = `https://kea-alt-del.dk/t7/api/products`;
if (urlParams.get("cat")) {
  const cat = urlParams.get("cat");
  url = `https://kea-alt-del.dk/t7/api/products?category=${cat}&limit=14`;
  document.querySelector("section h1").textContent = cat;
}
async function hentData() {
  const response = await fetch(url);
  const data = await response.json();
  data.forEach(visProdukt);
}
hentData();
function visProdukt(produkt) {
  const template = document.querySelector("#prodcardtemplate").content;
  const klon = template.cloneNode(true);

  klon.querySelector("h3").textContent = produkt.productdisplayname;
  klon.querySelector(".prodcard .prodstyle").textContent = produkt.articletype;
  klon.querySelector(".prodcard .prodbrand").textContent = produkt.brandname;
  klon.querySelector(".prodcard .realpris").textContent = produkt.price;
  klon.querySelector(".prodcard .nupris").textContent = Math.floor(produkt.price - (produkt.price * produkt.discount) / 100);
  klon.querySelector(".prodcard .proddiscount").textContent = produkt.discount;
  klon.querySelector("a").href = "produkt.html?id=" + produkt.id;

  klon.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/1000/${produkt.id}.webp`;
  if (produkt.soldout) {
    klon.querySelector("article").classList.add("udsolgt");
  }
  if (produkt.discount) {
    klon.querySelector("article").classList.add("tilbud");
  }
  document.querySelector("main").appendChild(klon);
}
