"use strict";

window.onload = function () {
  /*----------------Menu dropdown---------------------*/
  const btnMenu = document.querySelector(".header-hamburger");
  const dropDownMenu = document.querySelector(".header-hamburger-menu");
  btnMenu.addEventListener("click", function () {
    dropDownMenu.classList.toggle("hide");
  });

  /*----------------Functions on scroll-start---------------------*/
  window.onscroll = function () {
    myToTop();
  };

  const toTop = document.querySelector(".btnGoTop");
  function myToTop() {
    if (window.pageYOffset > 200) {
      toTop.classList.add("go-top");
    } else {
      toTop.classList.remove("go-top");
    }
  }

  toTop.addEventListener("click", () => {
    const section = document.getElementById("header");
    scrollToElement(section, {
      offset: -90,
      ease: "linear",
      duration: 1000,
    });
  });
};
/*----------------Functions on scroll-end---------------------*/

let out = "";
let cardsNumber = 3;

// sort by price
/* cards.sort((a, b) => (parseInt(a.price) > parseInt(b.price) ? 1 : parseInt(b.price) > parseInt(a.price) ? -1 : 0));
console.log(cards);  */

/*cards.sort((a, b) => (parseInt(a.age) > parseInt(b.age) ? 1 : parseInt(b.age) > parseInt(a.age) ? -1 : 0));
console.log(cards);*/

/*----------------Add database-start---------------------*/
const renderCard = (cardData) => {
  return (
    `<div class = "content-card content-grid__item"> 
    <img class="content-card__photo" src=" ` +
    cardData.photo +
    ` " /> 
  
   <div class="content-card__discount"  >` +
    cardData.discount +
    `</div>
  
   <div class="content-card__like " ></div>
   <div class="content-card__description">
  
   <div class="content-card__title">` +
    cardData.cardTitle +
    `</div>
  
   <div class="content-card__specifications">
  
   <div class="content-card__specifications-block">
  <span> ` +
    cardData.color +
    `</span>
  <span>окрас</span>
  </div>
  
  <div class="content-card__specifications-block">
  <strong>` +
    cardData.age +
    `</strong>
  <span>Возраст</span>
  </div>
  
  <div class="content-card__specifications-block">
  <strong>4</strong>
   <span>Кол-во лап</span>
  </div>
  
  </div>
  
  <div class="content-card__price"> ` +
    cardData.price +
    ` </div>
  
   </div>
  
   <div class="content-card__button content-card__button--active">` +
    cardData.status +
    `</div>
     </div>`
  );
};

function renderData() {
  cards.forEach((el, index) => {
    if (index < cardsNumber) {
      out += renderCard(el);
    }
  });
}
/*----------------Add database-end---------------------*/

renderData();
document.getElementById("grid").innerHTML = out;
supportRender();

const showMore = document.querySelector(".show-more-btn");
showMore.onclick = function () {
  out = "";
  cardsNumber += 20;
  renderData();
  document.getElementById("grid").innerHTML = out;
  supportRender();
  console.log("Start: " + cardsNumber);
};

function supportRender() {
  const discountNull = document.querySelectorAll(".content-card__discount");
  for (let i = 0; i < discountNull.length; i++) {
    if (discountNull[i].innerHTML === "") {
      discountNull[i].classList.add("hide");
    }
  }

  const button = document.querySelectorAll(".content-card__button");
  for (let i = 0; i < button.length; i++) {
    if (button[i].innerHTML == 0) {
        button[i].classList.add("content-card__button--inactive");
    }
  }

  /*----------------Add content-card__like--checked---------------------*/

  const likeId = document.getElementById("like");
  const elem = likeId.querySelector("svg");
  const like = document.querySelectorAll(".content-card__like");
  const likeChecked = "content-card__like--checked";
  for (let i = 0; i < like.length; i++) {
    like[i].appendChild(elem.cloneNode(true));

    like[i].addEventListener("click", selectDate);
  }
  function selectDate() {
    /*  if (this.classList.contains(likeChecked)) {
      this.classList.remove(likeChecked);
    } else {
      this.classList.add(likeChecked);
    } */

    this.classList.toggle(likeChecked);
  }
}
