'use strict';

function tnc(_id, callback){
  const txt = callback();
    let text = '';
  for(let u=0;u<txt.length;u++){
     if(txt[u]['en']==undefined && txt[u]['bn']==undefined){
        continue;
     }
 text += '<li>'+((txt[u]['en'])?txt[u]['en']:'')+' '+((txt[u]['bn'])?'--> '+txt[u]['bn']:'')+'<\/li>';
  }
  document.getElementById(_id).innerHTML = text;
};
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



