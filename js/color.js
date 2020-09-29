

module.exports = {
         black : function(a){
              return '\x1b[30m'+a+"\x1b[0m";
         },
         red : function(a){
               return "\x1b[31m"+a+"\x1b[0m";
         },
         green : function(a){
               return "\x1b[32m"+a+"\x1b[0m";
         },
         yellow : function(a){
               return "\x1b[33m"+a+"\x1b[0m";
         },
         blue : function(a){
               return "\x1b[34m"+a+"\x1b[0m";
         },
         magenta : function(a){
               return "\x1b[35m"+a+"\x1b[0m";
         },
         cyan : function(a){
               return "\x1b[36m"+a+"\x1b[0m";
         },
         white : function(a){
               return "\x1b[37m"+a+"\x1b[0m";
         },
         bgBlack : function(a){
               return "\x1b[40m"+a+"\x1b[0m";
         },
         bgRed : function(a){
               return "\x1b[41m"+a+"\x1b[0m";
         },
         bgGreen : function(a){
               return  "\x1b[42m"+a+"\x1b[0m";
         },
         bgYellow : function(a){
               return "\x1b[43m"+a+"\x1b[0m";
         },
         bgBlue : function(a){
               return "\x1b[44m"+a+"\x1b[0m";
         },
         bgMagenta : function(a){
               return "\x1b[45m"+a+"\x1b[0m";
         },
         bgCyan : function(a){
               return "\x1b[46m"+a+"\x1b[0m";
         },
         bgWhite : function(a){
               return "\x1b[47m"+a+"\x1b[0m";
         }

};