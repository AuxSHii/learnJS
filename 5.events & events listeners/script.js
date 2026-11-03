/*  Events and Events handing

event raised = anyhting occurs in browser screen

event handle - to react to tha event
event-listener = reaction

1.adding event listener on elmnt

elmnt.addEventListener("name" , function(){
	whatever manipulation needed
});
   


*/

let h1 = document.querySelector("h1");

h1.addEventListener("click" , function(){
	h1.style.color = "#FFBF00";
	h1.style.textDecoration = "underline";
	console.log("color changed");
});



let p = document.querySelector("p");
//1. fxn for dblclick
function dblclick(){
	p.style.color = "#FEF3B3";
}

   
p.addEventListener("dblclick" , dblclick);

//2. removing listener from elmnt


p.removeEventListener("dblclick" , dblclick);

//3. event or inputing

let inp = document.querySelector("input");

inp.addEventListener("input" , function(dets){
	if(dets.data !== null)
		console.log(dets.data);
});

//change event  --> changes in input area or selection field[options]
 
 let sel = document.querySelector("#select_topics");
 let topic = document.querySelector("#topic");

 sel.addEventListener("change" ,  function(dets){
    topic.textContent = `${dets.target.value} topic selected `;

 });


