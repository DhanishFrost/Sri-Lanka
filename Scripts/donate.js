
/*------------Donation page---------------------*/


let modalBtns = [...document.querySelectorAll(".donationbtn")];
      modalBtns.forEach(function (btn) {
        btn.onclick = function () {
          let modal = btn.getAttribute("data-modal");
          document.getElementById(modal).style.display = "block";
        };
      });
      let closeBtns = [...document.querySelectorAll(".closecross")];
      closeBtns.forEach(function (btn) {
        btn.onclick = function () {
          let modal = btn.closest(".popup");
          modal.style.display = "none";
        };
      });
      window.onclick = function (event) {
        if (event.target.className === "modal") {
          event.target.style.display = "none";
        }
    };

    const btndonate = document.getElementById(btnDonate);
    const fullName = document.getElementById("donateName");
    const email = document.getElementById("donateEmail");
    const dateOfBirthday = document.getElementById("donateBirthday");
    const cardnum = document.getElementById("donateCardNumber");
    const cvv = document.getElementById("donateCVV");
    const expMon = document.getElementById("donateExpMonth");
    const expYear = document.getElementById("donateExpYear");
    const amount = document.getElementById("donateAmount");
    
    
    
    
  btnDonate.addEventListener("click",pay)

  function pay(){
          var fName = fullName.value;
          alert("Thank you "+fName); 
          console.log("test submit");
}

   btnDonate2.addEventListener("click",pay)
    
   function pay(){
      var fName = fullName.value;
      alert("Thank you "+fName); 
      console.log("test submit");
  }

