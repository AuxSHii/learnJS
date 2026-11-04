/*
   forms - ouutput as a card

 */


let inputs = document.querySelectorAll("input")

let form = document.querySelector("form");

form.addEventListener("submit" , function(dets){
	dets.preventDefault(); //stpo form from reloding and submitin

//making card div
   let card = document.createElement("div");
   card.classList.add("card");

//under card - profile div
  let profile = document.createElement("div");  
  profile.classList.add("profile");

//appendinf profile div inside card div
 card.appendChild(profile);

 let img = document.createElement("img");
    img.setAttribute("src" , "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D");
 
 let h3 = document.createElement("h3");
    h3.textContent = "achillies";
 let h4 = document.createElement("h4");
    h4.textContent = "doggo-programmer";
 let p = document.createElement("p");
    p.textContent = "wooof wooof are there any treets in that Collider kind kitty?";



});