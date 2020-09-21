const http = require('http');
const path = require('path');
const fs = require('fs');


const color = require('./js/color.js');

const host ='localhost';
const port = 8000;

const mimeTypes = require("./js/mimeTypes.js");

http.createServer((req,res)=>{
  
  let filePath,extname,contentType;
  
       req.url = req.url.split('?')[0];
   if(req.url==='' || req.url==='/'){
         filePath = path.join(__dirname,'public','index.html');
   } else {
         filePath = path.join(__dirname,'public',req.url);
   }
   extname = String(path.extname(filePath)).toLowerCase();
   contentType =  mimeTypes[extname] || 'application/octet-stream';
   
   console.log(color.green(filePath));
   
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
  

}).listen(port,host, function(){
         console.log(color.cyan('server running at https:\/\/'+host+':'+port+'\/'));
});