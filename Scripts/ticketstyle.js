let ttype;
let nof;
let dutype;
let noft;
var totalQuantity;
var finalquant;
var loyaltypoints



let ticketType=document.getElementById("Ticket-Type")
let TB=document.getElementById("Ticket_Booking")
let AOD=document.getElementById("add")
let Numberoftickets=document.getElementById("Number-of-tickets")
let Dur1=document.getElementById("Duration1");
let Dur2=document.getElementById("Duration2");
var Dur3=document.getElementById("Duration3");
var Dur4=document.getElementById("Duration4");
let Cc=document.getElementById("cur-cost")
let Nofft=document.getElementById("Number-of-Food-Tockens")
let Duration=document.getElementsByName("duration");
let RB= document.querySelectorAll('input[type="radio"]')
let btnpurchase=document.getElementsByClassName("btn-purchase")[0]
let Addfav=document.getElementById("addfav")
let LoadFav=document.getElementById("loadFav")
let CheckLoyalty=document.getElementById("checkLoyalty")


let Tickettypecost;
let Tickettype=ticketType.options[ticketType.selectedIndex].value;
let select1=ticketType.options[ticketType.selectedIndex].text;
let Numberoffoodt=Nofft.value;




window.addEventListener("load", init);

function init() {
     
    ttype = 0; 
    nof = 0; 
    dutype = 0; 
    noft = 0; 
    
    cost = ttype*nof + (dutype*nof)+noft;

    Cc.innerText = `${cost.toFixed(2)}`; 
}





ticketType.addEventListener('change',fticketType)
function fticketType(){ 
    let select1=ticketType.options[ticketType.selectedIndex].value;
    if(select1==5000){
        ttype=5000;
    }
    else if(select1==2500){
        ttype=2500;
    }
    else if(select1==1000){
        ttype=1000;
    }
    else if(select1==500){
        ttype=500;
    }
    else if(select1==4500){
        ttype=4500;
    }
    else if(select1==15000){
        ttype=15000;
    }
    
    cost = ttype*nof + (dutype*nof)+noft;

    Cc.innerText = `${cost.toFixed(2)}`; 
    if (select1==4500 || select1==15000) {
        dutype=0   
        RB.forEach(RB=>RB.disabled =true) 
        document.getElementById("Number-of-Food-Tockens").disabled=true;
    }
    else {
        RB.forEach(RB=>RB.disabled =false)
        document.getElementById("Number-of-Food-Tockens").disabled=false;
    }
}

Numberoftickets.addEventListener("change",numberoftickets)
function numberoftickets(){
    nof=Numberoftickets.value;
    cost = ttype*nof + (dutype*nof)+noft;
    Cc.innerText = `${cost.toFixed(2)}`;
    


}




Duration.forEach(item => item.addEventListener("change", fduration));
function fduration(){
    if(Dur1.checked==true){
        if(ttype==1000 || ttype==500 || ttype==5000 || ttype==2500){
            dutype=0;  
        }       
}
    else if(Dur2.checked==true){
        if(ttype==1000 || ttype==500 ) {
            dutype=250;  
        }  
        if(ttype==5000 || ttype==2500 ) {
            dutype=500;  
        }            
    }
    else if(Dur3.checked==true){
        if(ttype==1000 || ttype==500 ) {
            dutype=500;  
        }  
        if(ttype==5000 || ttype==2500 ) {
            dutype=1000;  
        }            
    }
    else if(Dur4.checked==true){
        if(ttype==1000 || ttype==500 ) {
            dutype=1000;  
        }  
        if(ttype==5000 || ttype==2500 ) {
            dutype=2000;  
        }            
    }
    cost = ttype*nof + (dutype*nof)+noft;
    Cc.innerText = `${cost.toFixed(2)}`;
    }

Nofft.addEventListener("change",fnumberoftickets)
function fnumberoftickets(){
    let Numberoffoodt=Nofft.value;
    if(ttype==""){
        noft=0;
    }
    else{
    noft=Numberoffoodt*500;
    cost = ttype*nof + (dutype*nof)+noft;
    Cc.innerText = `${cost.toFixed(2)}`;}
    
}






AOD.addEventListener("click",addorder)
function addorder(){
    let Tickettype=ticketType.options[ticketType.selectedIndex].value;
    nof=Numberoftickets.value;
    let Numberoffoodt=Nofft.value;
    if(Tickettype!="n" && nof!=0 ){
        
cost = ttype*nof + (dutype*nof)+noft;
let select2=ticketType.options[ticketType.selectedIndex].text
var cartRow = document.createElement('div')
cartRow.classList.add('cart-row')
var cartItems = document.getElementsByClassName('cart-items')[0]
var cartItemNames = cartItems.getElementsByClassName('cart-item-title')

if(cost>0){
var cartRowContents = `
    <div class="cart-item cart-column">
        <span class="cart-item-title">${select2} </span>
    </div>
    <span class="cart-price cart-column">${cost}</span>
    <div class="cart-quantity cart-column">
    <span class="cart-quantity-input">${nof} </span>
    <button class="btn btn-danger" onclick="removeCartItem(this)" type="button">REMOVE</button></div>
    `
 
cartRow.innerHTML = cartRowContents

   cartItems.append(cartRow)
}

updateCartTotal()
ttype = 0; 
nof = 0; 
dutype = 0; 
noft = 0; 

cost = ttype*nof + (dutype*nof)+noft;

Cc.innerText = `${cost.toFixed(2)}`; 

document.getElementById("Ticket-Type").value = "n";

document.getElementById("Number-of-tickets").value = 0;

document.getElementById("Number-of-Food-Tockens").value = 0;

Dur1.checked=true;
    }
    else{
        alert("Please fill the required fields")
    }
}






function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    
    
    var total = 0
    var totalQuantity=0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
       var quantityElement1= parseInt(quantityElement.textContent)
        
        var price = parseFloat(priceElement.innerText.replace('Rs.', ''))

        total = total + price  

        totalQuantity=totalQuantity+quantityElement1
     

    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = 'Rs. ' + total
    finalquant=totalQuantity

    
    
   }

   function removeCartItem(buttonClicked) {
    
     buttonClicked.parentElement.parentElement.remove()
     remUpdatecart()
 }
 function remUpdatecart(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    
    
    var total = 0
    var totalQuantity=0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        
        
        var price = parseFloat(priceElement.innerText.replace('Rs.', ''))

        total = total +price 


        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var quantityElement1= parseInt(quantityElement.textContent)
        totalQuantity=totalQuantity+quantityElement1
        
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = 'Rs. ' + total
    finalquant=totalQuantity
}

btnpurchase.addEventListener("click",placeOrder)
function placeOrder(){
    var cartItems = document.getElementsByClassName('cart-items')[1]
    
       
    alert('Thank you for your purchase')
    location.reload()
}

Addfav.addEventListener("click",Addfavb)
function Addfavb(){
   
    let select1=ticketType.options[ticketType.selectedIndex].text;
    newselect1=select1
    newcost1=cost
    newnof=parseInt(nof)
    newdutype=dutype*newnof
    let Addfav1={itemname:newselect1,Fcost:newcost1,quantity:newnof,duration:newdutype}
    localStorage.setItem('fav',JSON.stringify(Addfav1));

    if(newselect1!=0 && newnof!=0 && RB != 0){
    alert("Your order has been successfully added to favorites")
    }
    else{
        alert("Please fill the required fields")
    }
  
    
    
}
LoadFav.addEventListener("click",loadFav)
function loadFav(){
let retufav = JSON.parse(localStorage.getItem('fav'))

newselect1=retufav.itemname
newcost1=retufav.Fcost
newdutype=retufav.duration
newnof=retufav.quantity

cost = ttype*nof + (dutype*nof)+noft;
let select2=ticketType.options[ticketType.selectedIndex].text
var cartRow = document.createElement('div')
cartRow.classList.add('cart-row')
var cartItems = document.getElementsByClassName('cart-items')[0]
var cartItemNames = cartItems.getElementsByClassName('cart-item-title')





if(cost>0){
var cartRowContents = `
    <div class="cart-item cart-column">
        
        <span class="cart-item-title">${newselect1}</span>
    </div>
    <span class="cart-price cart-column">${newcost1}</span>
    <div class="cart-quantity cart-column">
    <span class="cart-quantity-input">${newnof} </span>
    <button class="btn btn-danger" onclick="removeCartItem(this)" type="button">REMOVE</button></div>
    `
 
cartRow.innerHTML = cartRowContents

   cartItems.append(cartRow)
   updateCartTotal()





}
}

CheckLoyalty.addEventListener("click",countnumberoftickets)
function countnumberoftickets(){
    
    if(finalquant>3){
        loyaltypoints=20*finalquant;
       alert(`you earned ${loyaltypoints} of loyalty points`)
        let loyaltyp={Loyaltypoint:loyaltypoints}
        localStorage.setItem('loyal',JSON.stringify(loyaltyp))
    }
    else{
        alert('buy more than 3 items')
    }
}
