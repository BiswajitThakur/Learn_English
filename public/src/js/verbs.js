'use strict';

let xhr = new XMLHttpRequest();
    xhr.open('GET', '../data/verbs.json');
    xhr.onprogress = function () {
//let progress = document.getElementById('progress');
    document.getElementById('vList').innerHTML="<h3>loading.....<\/h3>"
  /*  progress.max = e.total;
    progress.value = e.loaded;*/
    };
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = ()=>{
let data = xhr.response;
let vList = document.getElementById('vList');
let vLst1 = "";
    vLst1 += '<input type="text" id="myInput" onkeyup="myFu()">';
    vLst1 += '<table class="hovertable"><tr><th>S.no</th><th>bengali</th><th>present tense</th><th>past tense</th><th>past participle</th></tr>';
  for(let a=0;a<data.length;a++){
       vLst1+='<tr><td style="color:yellow;">'+(a+1)+'<td id="bn">'+data[a].bn+'</td><td>'+data[a].v1+'</td><td>'+data[a].v2+'</td><td>'+data[a].v3+'</td></tr>';
    }
    vLst1+='</table>';
    vList.innerHTML=vLst1; 
  }
    xhr.onerror = () =>{
      alert("failed to open!");
   }

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