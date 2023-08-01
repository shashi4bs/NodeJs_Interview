const fs = require('fs');

fs.readFile("data.txt", "utf8", (err, data)=>{
	if(err){
		console.log("Error while reading File. error: ", err);
	}else{
		let dataArray = data.trim().split(' ');
		console.log("Number of Words in data.txt : ", dataArray.length);
	}		
});
