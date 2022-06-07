
document.querySelector('form').addEventListener("submit",local)
// let arrData=JSON.parse(localStorage.getItem("user"))||[];
// localStorage.setItem("user", JSON.stringify(arrData))

function local(e) {
    
   e.preventDefault()
   
   let name = document.getElementById('name').value;

let email = document.getElementById('email').value;

let address = document.getElementById('address').value;

 let amount = document.getElementById('amount').value;

 let ObjData = {
     name:name,
     email:email,
     address:address,
     amount:amount
 }
localStorage.setItem('user',JSON.stringify(ObjData))
 
// let x= new Objmaker(name,email,address,amount);
// arrData.push(x);
  // localStorage.setItem("user", JSON.stringify(x))
}

// function Objmaker (name,email,address,amount) {
//     this.name= name;
//     this.email=email;
//     this.address=address;
//     this.amount=amount;
// }