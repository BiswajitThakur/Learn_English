'use strict';

const myFu =()=>{
    let input = document.getElementById("myInput").value.toUpperCase();
    let tr = document.getElementsByTagName("tr");
    let v1 = (n) => tr[n].getElementsByTagName("td")[2].innerHTML.toUpperCase();
    let v2 = (n) => tr[n].getElementsByTagName("td")[3].innerHTML.toUpperCase();
    let v3 = (n) => tr[n].getElementsByTagName("td")[4].innerHTML.toUpperCase();
    
for(let y=1;y<tr.length;y++){
  if ((v1(y).indexOf(input)>-1)||(v2(y).indexOf(input)>-1)||(v3(y).indexOf(input)>-1)){
         tr[y].style.display = "";
    } else {
         tr[y].style.display = "none";
     }
   }
 };