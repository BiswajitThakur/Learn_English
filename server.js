const http = require('http');
const path = require('path');
const fs = require('fs');
const querystring = require("querystring");
const crypto = require("crypto");


const color = require('./js/color.js');
const host = require('./js/Myip.js');
const port = 8181;
const mimeTypes = require("./js/mimeTypes.js");

http.createServer((req,res)=>{
    
      if(req.method==='GET'){
  let filePath,extname,contentType,reqPath;
  
       reqPath = req.url.split('?')[0];
   if(req.url==='' || req.url==='/'){
         filePath = path.join(__dirname,'public','index.html');
   } else {
         filePath = path.join(__dirname,'public',reqPath);
   }
   extname = String(path.extname(filePath)).toLowerCase();
   contentType =  mimeTypes[extname] || 'application/octet-stream';
   
   
   console.log(color.green(filePath));
  
   res.writeHead(200, { 'Content-Type' : contentType });
   
   fs.readFile(filePath, function(err, data){
           if(err){
                if(err.code === 'ENOENT'){
               console.log(color.red(filePath));
                     fs.readFile(path.join(__dirname,'public','404','404.html'), function(error, content) {
                     res.writeHead(404, { 'Content-Type': 'text/html' });
                     res.end(content, 'utf-8');
                     });
                }
                
           } else {

              res.writeHead(200, { 'Content-Type' : contentType });
              res.end(data,'utf-8');
           }
   });

    } else if(req.method==='POST'){
           
       if(req.url==='/verbs/add'){
 
      function containsAllAscii(str) {
        function unicode(theString) {
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
         
           let body = '';
        req.on('data', (data)=>{
              body += data;
    });
        req.on('end', ()=>{
      res.writeHead(200, {'Content-Type': 'text/html'});
 
          let jsonData = fs.readFileSync('./public/verbs/data/verbs.json','utf-8');
              jsonData = JSON.parse(jsonData);
         let formData = querystring.parse(body);
             formData.id = crypto.randomBytes(16).toString("hex");
         const checkData =d=>{
          let reg1 = new RegExp(formData.v1,'gi');
          let reg2 = new RegExp(formData.v2,'gi');
          let reg3 = new RegExp(formData.v3,'gi');
             return reg1.test(d.v1)&&reg2.test(d.v2)&&reg3.test(d.v3);
      }
          if(!jsonData.find(checkData)){
             jsonData.push(formData);
             const newData = containsAllAscii(JSON.stringify(jsonData,null,3));
        fs.writeFileSync('./public/verbs/data/verbs.json',newData);
        console.log('data added : ');
        console.log(formData);
         res.write('<script>alert("successful added you data");window.history.back();</script>');
          } else {
         res.write('<script>window.history.back();</script>');
          }
         res.end();
     
    });
           }
      
    }

}).listen(port,host,()=>{
         console.log(color.cyan('server running at http:\/\/'+host+':'+port+'\/'));
});
