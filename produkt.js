//https://kea-alt-del.dk/t7/api/products/1529
console.log("produkt.js");

async function hentProdukt() {
  const response = await fetch("https://kea-alt-del.dk/t7/api/products/1529");
  const data = await response.json();
  console.log(data);
  visProdukt(data);
}

function visProdukt(produkt) {
  document.querySelector(".inspectcard h2").textContent = produkt.productdisplayname;
  document.querySelector(".inspectcard .prodpris").textContent = produkt.price;
  document.querySelector(".inspectcard .prodstyle").textContent = produkt.articletype;
  document.querySelector(".inspectcard .prodbrand").textContent = produkt.brandname;
  document.querySelector(".prodinfo .prodtype").textContent = produkt.variantname;
  document.querySelector(".prodinfo .prodcolor").textContent = produkt.basecolour;
  document.querySelector(".prodinfo .produse").textContent = produkt.usagetype;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp`;
}
hentProdukt();
