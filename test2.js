const crypto = require("crypto");
const fs = require('fs');

/*
let jsonData = fs.readFileSync('./public/verbs/data/verbs.json','utf-8');
              jsonData = JSON.parse(jsonData);
      for(let a=0;a<jsonData.length;a++){
        jsonData[a].id=crypto.randomBytes(16).toString("hex");
      }

              
      function containsAllAscii(str){
        function unicode(theString){
          let unicodeString = '';
          for (let i = 0; i < theString.length; i++) {
            let theUnicode = theString.charCodeAt(i).toString(16).toUpperCase();
            while (theUnicode.length < 4) {
              theUnicode = '0' + theUnicode;
            }
            theUnicode = '\\u' + theUnicode;
            unicodeString += theUnicode;
          }
          return unicodeString;
        }
        let reg = /[^\x00-\x7F]/g;
        return str.replace(reg, (t) => {
          return unicode(t);
        });
      };
          const newData = containsAllAscii(JSON.stringify(jsonData,null,3));
        fs.writeFileSync('./public/verbs/data/verbs.json',newData);
     */