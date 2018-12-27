
var fs = require("fs");		
		
var dirName = "C:\\nwjs\\nwjs-sdk-v0.35.3-win-x64\\existingfiles";
var sfiles="";
document.getElementById("dirname").innerHTML = dirName;
fs.readdir(dirName, function(err, files) {
	for(var i = 0; i < files.length; i++) {
		sfiles=sfiles+'   '+files[i];

	}
	document.getElementById("filenames").innerHTML =sfiles;
});
