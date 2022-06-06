document.querySelector("form").addEventListener("submit", signUpFun);


  function signUpFun() {
    
    event.preventDefault();

    var userObj = {
      name: document.querySelector("#name").value,
      email: document.querySelector("#email").value,
      address: document.querySelector("#address").value,
      amount: document.querySelector("#amount").value,
    };
    console.log(userObj);
    //console.log(userData)

    localStorage.setItem("user",JSON.stringify(userObj))
        location.reload()
  }