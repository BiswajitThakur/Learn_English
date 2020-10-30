'use strict';

fetch('./data/verbs.json').then(res=>res.json()).then((data)=>{
  let dataX='';
for(let a=0;a<data.length;a++){
    dataX+='<tr>';
    dataX+='<td style="color:yellow;">'+parseInt(a+1)+'<\/td>';
    dataX+='<td>'+data[a].bn+'<\/td>';
    dataX+='<td>'+data[a].v1+'<\/td>';
    dataX+='<td>'+data[a].v2+'<\/td>';
    dataX+='<td>'+data[a].v3+'<\/td>';
    dataX+='<\/tr>'; }
document.getElementById('tbody').innerHTML=dataX;
});