window.onload = function () {
  /*----------------Menu dropdown---------------------*/
  const btnMenu = document.querySelector(".header-hamburger");
  const dropDownMenu = document.querySelector(".header-hamburger-menu");

  btnMenu.addEventListener("click", function () {
    dropDownMenu.classList.toggle("menuIsVisible");
  });
  dropDownMenu.addEventListener("click", function () {
    dropDownMenu.classList.toggle("menuIsVisible");
  });

  /*----------------Functions on scroll-start---------------------*/
  window.onscroll = function () {
    myToTop();
  };

  const toTop = document.querySelector(".go-up");
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
  
   <li class="content-card__like " ></li>
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
/*----------------Add database-end---------------------*/

let grid = "";
let cardsNumber = 6; /* initial number of cards 0... cards.length */

function renderData() {
  cards.forEach((el, index) => {
    if (index < cardsNumber) {
      grid += renderCard(el);
    }
  });
}

renderData();
document.getElementById("grid").innerHTML = grid;
supportRender();

/*----------------Add cards start---------------------*/
const addCards = document.querySelector(".show-more-btn");
addCards.onclick = function () {
  if (cardsNumber <= cards.length) {
    grid = "";
    cardsNumber += 20;
    renderData();
    document.getElementById("grid").innerHTML = grid;
    supportRender();
  } else {
    addCards.classList.add("hide");
  }
};
/*----------------Add cards end---------------------*/

/*----------------Sorting ---------------------*/
const priceSorting = document.querySelector(
  ".content-sort-settings__btn--first"
);
const ageSorting = document.querySelector(".content-sort-settings__btn--last");
const sortingUp = "content-sort-settings__btn--up";

/*----------------by price start---------------------*/

priceSorting.onclick = function () {
  if (this.classList.contains("content-sort-settings__btn--up")) {
    cards.sort((a, b) =>
      parseInt(a.price) < parseInt(b.price)
        ? 1
        : parseInt(b.price) < parseInt(a.price)
        ? -1
        : 0
    );
    this.classList.remove(sortingUp);
  } else {
    cards.sort((a, b) =>
      parseInt(a.price) > parseInt(b.price)
        ? 1
        : parseInt(b.price) > parseInt(a.price)
        ? -1
        : 0
    );
    this.classList.add(sortingUp);
  }
  grid = "";
  renderData();
  document.getElementById("grid").innerHTML = grid;
  supportRender();
};
/*----------------by price end---------------------*/
/*----------------Sort by age start--------------------*/
ageSorting.onclick = function () {
  if (this.classList.contains("content-sort-settings__btn--up")) {
    cards.sort((a, b) =>
      parseInt(a.age) < parseInt(b.age)
        ? 1
        : parseInt(b.age) < parseInt(a.age)
        ? -1
        : 0
    );
    this.classList.remove(sortingUp);
  } else {
    cards.sort((a, b) =>
      parseInt(a.age) > parseInt(b.age)
        ? 1
        : parseInt(b.age) > parseInt(a.age)
        ? -1
        : 0
    );
    this.classList.add(sortingUp);
  }
  grid = "";
  renderData();
  document.getElementById("grid").innerHTML = grid;
  supportRender();
};
/*----------------Sort by age end---------------------*/

function supportRender() {
  const discountNone = document.querySelectorAll(".content-card__discount");
  discountNone.forEach((el) => {
    if (el.innerHTML == 0) el.classList.add("hide");
  });

  const button = document.querySelectorAll(".content-card__button");
  button.forEach((el) => {
    if (el.innerHTML == 0) {
      el.classList.add("content-card__button--inactive");
    }
  });

  /*----------------Add content-card__like--checked---------------------*/
  const fieldGrid = document.getElementById("grid");
  const likeId = document.getElementById("like");
  const elem = likeId.querySelector("svg");
  const like = document.querySelectorAll(".content-card__like");

  like.forEach((item) => {
    item.appendChild(elem.cloneNode(true));
  });

  fieldGrid.onclick = function (event) {
    let target = event.target;
    if (target.tagName != "LI") return;
    selectDate(target);
  };

  function selectDate() {
    event.target.classList.toggle("content-card__like--checked");
  }
}
