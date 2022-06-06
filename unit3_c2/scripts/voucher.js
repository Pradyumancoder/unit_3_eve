const url="https://masai-vouchers-api.herokuapp.com/api/vouchers"
getData(url)
async function getData(url){
  let res=await fetch(url)
  let data=await res.json();
  console.log(data[0].vouchers)
  append(data[0].vouchers)
}
let Get=JSON.parse(localStorage.getItem("user"))
console.log(Get.amount)
let amount=+(Get.amount)

document.getElementById("wallet_balance").innerText=amount

function append(vouchers){
vouchers.forEach(function(el){
  let box=document.createElement("div")
let image=document.createElement("img")
image.src=el.image
let name=document.createElement("h3")
name.innerText=el.name
let price=document.createElement("h3")
price.innerText=el.price
let btn=document.createElement("button")
btn.innerHTML="Buy"
btn.setAttribute("class","buy_voucher")
btn.addEventListener("click",function(){
  buyfunc(el)
  

  
})
box.append(image,name,price,btn)
document.getElementById("voucher_list").append(box)
// window.location.href="purchase.html"
// localStorage.setItem("purchase",JSON.stringify("Get"))

})
}
let arr=[]
function Booknow(el){
let obj={el}
arr.push(el);
localStorage.setItem("user",JSON.stringify(arr))
window.location.href="purchase.html"
}