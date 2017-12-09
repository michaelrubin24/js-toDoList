
function toDoList(){
  var element_of_list = document.createElement("li");
  var deal = document.createElement("span");
  deal.innerText = document.getElementById("deal-text").value;
  if(deal.innerText.length > 2){
    element_of_list.appendChild(deal);
    document.getElementsByTagName("ul")[0]
    .insertBefore(element_of_list, document.getElementsByTagName("li")[1]);
}else{
  document.getElementById("deal-text").value = "Маленькое дело";
 }
}

document.getElementById("add-deal").addEventListener("click",
function(){
  toDoList();
})

document.getElementById("deal-text").addEventListener("keyup",
function(){
  if(event.keyCode == 13){
    toDoList();
  }
})




















/*var first_number = document.getElementById("first-number");
var second_number = document.getElementById("second-number");
var plus = document.getElementsByClassName("plus")[0];
var minus = document.getElementsByClassName("minus")[0];
var myltiply = document.getElementsByClassName("multiply")[0];
var divide = document.getElementsByClassName("divide")[0];
var result = document.getElementById("result");
plus.addEventListener("click", function(){
  result.innerHTML = ((+first_number.value) + (+second_number.value)).toFixed(2);
})
minus.addEventListener("click", function(){
  result.innerHTML = ((+first_number.value) - (+second_number.value)).toFixed(2);
})
myltiply.addEventListener("click", function(){
  result.innerHTML = ((+first_number.value) * (+second_number.value)).toFixed(2);
})
divide.addEventListener("click", function(){
  if(+first_number.value != 0 && +second_number.value == 0 ){
    result.innerHTML = "Вы делите на ноль, результат бесконечность";
  }else if(+first_number.value == 0 && +second_number.value == 0){
    result.innerHTML = "Результат не определён";
  }else{
    result.innerHTML = ((+first_number.value) / (+second_number.value)).toFixed(2);
  }
})*/
