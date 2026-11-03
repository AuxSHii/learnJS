/* let -> variable
  const -> constant
  container to store data -> variable while the program runs

declarations-what type its + name , 
initializations- give its initial val+ its dt+name
var - 1.adds itself to window.
      2.alwasy fxn scoped
      3.again declared with same name and no errors will be thrown

const - fixed value;

SCOPE = [global , block , fxnl] = vars can be used in' n only in
redeclaration psbl with var but not let.

3.Temporal dead zone: 
  			area underwhich engine knows the existance of var
  			but cannot access it as it isnt reached there yet.
  			it will init only then.
4.hoiting  : var = declaration + initi. 
                     {undefined}   {value}
    hence engine can read the declaration as undef . bfore reaching it 
   js moves all decalration to top ; as it prep mem before runing code

  var -> hoist -> undefined
  let -> hoist -> ref error
  const -> hoist -> ref error


*/

var name1 = "ashi";
let name2 = "gulliver";

name1 = "ashish"; //redeclaration psbl with var. 