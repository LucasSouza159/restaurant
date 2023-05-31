// Carousel menu food
let left = document.getElementsByClassName("bi-caret-left-fill")[0];
let right = document.getElementsByClassName("bi-caret-right-fill")[0];
let cards = document.getElementsByClassName("cards")[0];

left.addEventListener("click", () => {
  cards.scrollLeft -= 140;
});
right.addEventListener("click", () => {
  cards.scrollLeft += 140;
});

// Alterando os itens principais conforme clique
let poster = document.getElementById("poster");
let title = document.getElementById("title");
let price_cont = document.getElementById("price_cont");

Array.from(document.getElementsByClassName("card")).forEach((item, index) => {
  item.addEventListener("click", () => {
    poster.src = item.getElementsByTagName("img")[0].src;
    title.innerText = item.getElementsByTagName("h5")[0].innerText;
    price_cont.innerText = item.getElementsByTagName("h4")[0].innerText;
  });
});
