/*
   forms - ouutput as a card

 */

 let main = document.querySelector("#main");


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
    img.classList.add("pic")
    img.setAttribute("src" , "https://i.pinimg.com/236x/34/23/bd/3423bd94688401ba3ae7b51f704dd2b7.jpg");
 
 let h3 = document.createElement("h3");
    h3.textContent = "achillies";
 let h4 = document.createElement("h4");
    h4.textContent = "doggo-programmer";
 let p = document.createElement("p");
    p.textContent = "wooof wooof are there any treets in that Collider kind kitty?";

//appending elements in card to make card

profile.appendChild(img);
card.appendChild(profile);

card.appendChild(h3);
card.appendChild(h4);
card.appendChild(p);

main.appendChild(card);

});