const os = require('os');
const interfaces = os.networkInterfaces();

let ip = '';

for(let devName in interfaces) {
	let iface = interfaces[devName];
	for(let i=0;i<iface.length;i++){
		let alias = iface[i];
	   if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){
        ip = alias.address;
	   }
	}
};

let myip = ip || '127.0.0.1';

module.exports = myip;
