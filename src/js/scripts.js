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

  const sort = document.querySelector(".content-sort-settings");

  let div = document.createElement("div");
  div.id = "like";
  div.style.display = "none";

  sort.appendChild(div);

  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  let path = document.createElementNS("http://www.w3.org/2000/svg", "path");

  svg.setAttribute("viewBox", "0 0 46 42");
  path.setAttribute(
    "d",
    "M33.781.695c-2.496 0-4.784.791-6.802 2.351-1.933 1.496-3.221 3.4-3.979 4.786-.758-1.385-2.046-3.29-3.98-4.786-2.017-1.56-4.305-2.35-6.801-2.35C5.253.695 0 6.392 0 13.947 0 22.11 6.553 27.695 16.475 36.15a571.533 571.533 0 015.579 4.798 1.435 1.435 0 001.892 0c1.985-1.735 3.895-3.363 5.58-4.8C39.447 27.697 46 22.112 46 13.95 46 6.392 40.747.694 33.781.694z"
  );

  path.setAttribute("fill", "blck");
  svg.appendChild(path);
  div.append(svg);

  const likeId = document.getElementById("like");
  const elem = likeId.querySelector("svg");
  const like = document.querySelectorAll(".content-card__like");
  const fieldGrid = document.getElementById("grid");
  like.forEach((item) => {
    item.appendChild(elem.cloneNode(true));
  });

  fieldGrid.onclick = function (event) {
    let choice = event.target;
    if (choice.tagName != "DIV") return;
    selectDate(choice);
  };
  function selectDate(choice) {
    if (choice.classList.contains("content-card__like")) {
      choice.classList.toggle("content-card__like--checked");
    }
  }
}
