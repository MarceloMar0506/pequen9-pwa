function progressBar(percent) {
	//console.log($(document).width() +  "  " + percent + " " + screen.width); 	           
	var progressBarWidth = (percent *  $(document).width()) / 100;
	$("#progressBar").text(percent + "%");
	$("#progressBar").width(progressBarWidth);	
}