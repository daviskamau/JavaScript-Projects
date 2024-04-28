
$('.price__amount').on('input', function (e) {
  let min = e.target.min,
    max = e.target.max,
    val = e.target.value;
  $(e.target).css({
    'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
  });
}).trigger('input');


var   values = [10 + "K", 50 + "K", 100 + "K", 500 + "K", 1 + "M"],
       prices = [8 , 12, 16, 24, 36],
       
       input = document.querySelector("input[type=range]"),
       output = document.querySelector(".views");



input.oninput = function () {
  output.innerHTML = values[this.value];
  if (output.innerHTML == "10K") {
    document.querySelector(".price").innerHTML = prices[0];
  } else if (output.innerHTML == "50K") {
    document.querySelector(".price").innerHTML = prices[1];
  } else if (output.innerHTML == "100K") {
    document.querySelector(".price").innerHTML = prices[2];
  } else if (output.innerHTML == "500K") {
    document.querySelector(".price").innerHTML = prices[3];
  } else if (output.innerHTML == "1M") {
    document.querySelector(".price").innerHTML = prices[4];
  }
}
input.oninput();



//Discount function 
document.querySelector("input[type=checkbox]").addEventListener("click", discount)
function discount() {
  let arr = [8, 12, 16, 24, 36];
  let discountYearly = 25;
  if (document.querySelector("input[type=checkbox]").checked == "1") {
    for (let i = 0; i < prices.length; i++) {
      prices[i] = (prices[i] -(prices[i] * discountYearly) / 100).toFixed(2);
    }
  } else {
    prices = arr;
  }
}

window.onload = function () {
   input.value = 2;
}





        
      
            
    




      
      
                                                                


  



  // sass --watch scss/style.scss: css/style.css;