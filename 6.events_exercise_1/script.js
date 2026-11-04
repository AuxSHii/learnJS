/*
   the entire browser screen = window
   universal events -> add listener to window

   window.addEventListener("event" , function());

 */

let h1 = document.querySelector("h1");



 window.addEventListener("keydown" , function(dets){
 	//typed char = dets.key
 	//space = key = " "
 	if(dets.key === " ")
 		h1.textContent = "SPC";
 	else	 
 		h1.textContent = dets.key;

 });