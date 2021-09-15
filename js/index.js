var elForm = document.querySelector(".form");
var elSelect = document.querySelector(".select");
var elInput = document.querySelector ('.input');
var elButton = document.querySelector(".button");
var elResult = document.querySelector(".rusult");
var elClick = document.querySelector(".click-me");
var elWrapper = document.querySelector(".wrapper");
var elClose = document.querySelector(".close");


elForm = addEventListener("submit", function (evt) {
  evt.preventDefault();
  jamshid();

  function dollarToSum(kurs) {
    return kurs * 10652.69
  }

  function rublToSum(kurs) {
    return kurs * 146.04
  }

  function liraToSum(kurs) {
    return kurs * 37000
  }

  function euroToSum(kurs) {
    return kurs * 12560.47
  }

  function jamshid() {
    var result = (elInput.value)
    if (elSelect.value === "dollar") {
      elResult.innerHTML = dollarToSum(result).toFixed(2);
    }else if(elSelect.value === "rubl") {
      elResult.innerHTML = rublToSum(result).toFixed(2);
    }else if (elSelect.value === "lira") {
      elResult.innerHTML = liraToSum(result).toFixed(2);
    }else if (elSelect.value === "euro") {
      elResult.innerHTML = euroToSum(result).toFixed(2);
    }

  }
});

elClick = addEventListener("click", (e) => {
  console.log(elClick);
});
