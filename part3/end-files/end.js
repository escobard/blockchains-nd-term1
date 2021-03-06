// encode / decode in hex for node.js runtime

// Require file system access
fs = require('fs');

// Read file buffer 
imgReadBuffer = fs.readFileSync('test-pattern.jpg');

// Encode image buffer to hex
imgHexEncode = new Buffer(imgReadBuffer).toString('hex');

// Output encoded data to console
console.log(imgHexEncode);

// comment out either the encode or decode sections 

// Decode hex
var imgHexDecode = new Buffer(imgHexEncode, 'hex');

// Save decoded file file system 
fs.writeFileSync('decodedHexImage.jpg', imgHexDecode);
