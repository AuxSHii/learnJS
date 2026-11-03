/* 
   Dynamic DOM
1.creating elemnts
   element = document.createElement("tag");
2.post element to dom's body
 1st WAY: 
   document.body.append(element);
 
 2ND WAY:
   let body = document.querySelector("body");
   body.append(h1);


  a. append - elemnt comes after the body
  b. prepend - elmnt comes before the body

3. TO REMOVE AN ELEMENT
        element.remove();
*/

//create
let h1 = document.createElement("h1");
//edit
h1.textContent = "loading ashii...";
//post
console.log(h1);
//post it to body
//1. select body
let body = document.querySelector("body");

body.append(h1);