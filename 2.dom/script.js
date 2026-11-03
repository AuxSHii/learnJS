/* 
DOM = document of html which contets its nodes like
  its a tree structure
   nodes ,elmnts , content , commentd
       node =  parent element
         that has other child elmnt and contents

some basics in html

  <tags attribute1 , att2 , att3> </tag>

   dom = body
   dom manipulation -> to change the state of an element

   1.select element from html
   by 1.getElementById                                              html collection
      2.getElementsByClassName   = many elemnts = gives aray like structure[node list] which has various elmnts of that class
      3.querySelector  - slects the 1st elemnt in body
      4.querySelectorAll

    
    elmnt  = document.querySelector("#id");    wanna get elmnt by id


  select all elmnts of a class

    elmnt = document.querySelectorAll(".class_name");



     let one =  document.get___("id_value")

   2.change its html , css , attribute , event listeners
      inneHTML 
      innerText = only visible
      textContent =  all chilren's content 


attribute change
tag.setAttribute("attribute" , "value");
    




*/

let one = document.getElementById("a");
console.log(one);

let h2 = document.querySelector("h2"); 
console.dir(h2);
//change html
h2.innerHTML = "ashi is here , i am excited"

let a = document.querySelector("a");
console.log(a);
//change the attributes of a tag{element} 1st WAY
a.href = "https://www.google.com";
//2nd way: change atribute
a.setAttribute("href" , "https://www.google.com");
console.log(a.getAttribute("href")); //getting val of an attr

//removing attr
a.removeAttribute("href");

