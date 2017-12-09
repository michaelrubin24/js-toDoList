
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
