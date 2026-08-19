const bookdata = [
  { image: "", price: 234 },
  { image: "", price: 345 },
  { image: "", price: 545 },
];
function Book() {
  const div = document.createElement("div");
  div.setAttribute("class", "book");
  const image = document.createElement("img");
  image.setAttribute("src", "./cover.jpg");
  image.setAttribute("height", "120px");
  image.setAttribute("width", "120px");
  const h2 = document.createElement("h2");
  h2.innerText = "Price: 345/-";
  h2.style.color = "blue";
  const bt = document.createElement("button");
  bt.innerText = "Add To Cart";
  div.appendChild(image);
  div.appendChild(h2);
  div.appendChild(bt);
  return div;
}
// const parent = document.getElementById("book");
// parent.appendChild(div);
const bookstore = bookdata.map((b) => {
  Book(b);
});
const parent = document.getElementById("bookstore");
for (i in bookstore) {
  parent.appendChild(i);
}
