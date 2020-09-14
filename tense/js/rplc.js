'use strict';
/*
* Biswajit Thakur *
* 1 Sep,2020 *
*/

function rpc(id, callback){
     const a = document.querySelectorAll(id);
     const r = callback();
     const key = Object.keys(r);
  for(let m=0;m<a.length;m++){
          let b = a[m].innerHTML;
      for(let x=0;x<key.length;x++){
            let reg1 = '\\[\\{'+key[x]+'\\}\\]';
            let reg = new RegExp(reg1, 'g');
           b = b.replace(reg, r[key[x]]);
       }
    a[m].innerHTML = b;
   }
};