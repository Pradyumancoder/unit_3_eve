let objData=JSON.parse(localStorage.getItem("user"))
let amount= +(objData.amount);


let x=document.getElementById('wallet_balance')
x.innerText=amount
document.getElementById('navbar')


let data= JSON.parse(localStorage.getItem("purchase"))
let img= document.createElement('img')
img.src=data.image;



let p= document.createElement("h3")
  p.innerText=data.name;
  let price=document.createElement('p')
  price.innerText=data.price;
  let box= document.createElement("div")
  box.append(img,p,price)
  document.getElementById('purchased_vouchers').append(box)


  if(amount>price.innerText) {
      alert("Hurray! purchase successful")
      amount=amount-(price.innerText)
      localStorage.setItem('user', JSON.stringify(amount))
      
    x.innerText=amount

    
   
      
    }
  
  else {
      alert("Sorry! insufficient balance")
      
  }  
     

//console.log(p.innerText)
