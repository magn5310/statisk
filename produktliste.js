async function hentData() {
  const response = await fetch("https://kea-alt-del.dk/t7/api/products?limit=20");
  const data = await response.json();
  data.forEach(visProdukt);
}
hentData();
function visProdukt(produkt) {
  console.log(produkt);
  const template = document.querySelector("#prodcardtemplate").content;
  const klon = template.cloneNode(true);
  let besparelse = produkt.discount;
  let beforePrice = produkt.price;
  let nyPris = (beforePrice * besparelse) / 100;
  klon.querySelector("h3").textContent = produkt.productdisplayname;
  klon.querySelector("h3").textContent = produkt.productdisplayname;
  klon.querySelector(".prodcard .prodstyle").textContent = produkt.articletype;
  klon.querySelector(".prodcard .prodbrand").textContent = produkt.brandname;
  klon.querySelector(".prodcard .realpris").textContent = produkt.price;
  klon.querySelector(".prodcard .nupris").textContent = Math.floor(beforePrice - nyPris);
  klon.querySelector(".prodcard .proddiscount").textContent = produkt.discount;

  klon.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/1000/${produkt.id}.webp`;
  if (produkt.soldout) {
    klon.querySelector("article").classList.add("udsolgt");
  }
  if (produkt.discount) {
    klon.querySelector("article").classList.add("tilbud");
  }
  document.querySelector("main").appendChild(klon);
}
