// Open/close menu

document.addEventListener('DOMContentLoaded', function () {
  var navList = document.querySelector(".nav");
  var navButton = document.querySelector(".button-menu");
  var navContent = document.querySelector(".nav__list");
  var listHeight = navContent.offsetHeight;
  var navOpened = document.querySelector(".nav");

  navButton.addEventListener("click", function () {
    if (navList.classList.contains("nav--closed")) {
      navList.classList.remove("nav--closed");
      navList.classList.add("nav--opened");
      navOpened.style.height = listHeight + "px";
      navButton.classList.remove("button-menu--open");
      navButton.classList.add("button-menu--close");
    } else {
      navList.classList.add("nav--closed");
      navList.classList.remove("nav--opened");
      navOpened.style.height = "0px";
      navButton.classList.remove("button-menu--close");
      navButton.classList.add("button-menu--open");
    }
  });
});

// Filter

var filterActive = ''

function filterProducts(category) {
    if (filterActive != category) {
        var elements = document.querySelectorAll(".portfolio-filter__content-item");

        elements.forEach(function (item, i) {
          item.classList.add("not-active");
        });

        var activeElements = document.querySelectorAll(`[data-filter="${category}"]`);

        activeElements.forEach(function (item) {
          item.classList.remove("not-active");
        });

        filterActive = category;
    }
}

var buttons = document.querySelectorAll(".button-filter");
console.log(buttons);

buttons.forEach(function (el) {
  el.addEventListener('click', function (e) {
    var curretTarget = event.target.dataset.button
    filterProducts(curretTarget);
  })
});

  var buttonAll = document.querySelector(".button-all");
  var elements = document.querySelectorAll(".portfolio-filter__content-item");

  buttonAll.onclick = function () {
    elements.forEach(function (item, i) {
      item.classList.remove("not-active");
    });

    filterActive = "all";
  };


