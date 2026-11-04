/*
  custom button in place of default input btn   

 */

let btn = document.querySelector("#btn");
let fileinp = document.querySelector("#fileinp");

btn.addEventListener("click" , function(){
	fileinp.click(); 

});

fileinp.addEventListener("change" , function(dets){
  //name of file = dets.target.files[0].name
  const file = dets.target.files[0];


  if(file) {
  	btn.textContent = file.name;
  }	
  else
  	console.log("there's a  problem parsing the file")
  


});