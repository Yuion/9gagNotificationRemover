(function() {
	var texts = ["upvoted your comment.", "replied to a comment you followed."];
	var counter = 0;
	
	for (var z = 0; z < 5; z++) {
		var container = document.getElementById("jsid-header-notification-items-container");
		var listElements = container.getElementsByTagName("li");
		for (var i = 0; i < listElements.length; i++) {
			for(var y = 0; y < texts.length; y++){
				if (listElements[i].textContent.includes(texts[y])) {
					container.removeChild(listElements[i]);
					counter++;
					break;
				}
			}
		}
	}
	console.log(counter + " elements removed");
})();