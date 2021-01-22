let progress = document.getElementById("progress");
let btn= document.getElementById("yes");

setInterval(()=>{
	if (progress.value < 100) {
	 progress.value += 5 
	}else {
		progress.value = 0
	}
}, 1000);


