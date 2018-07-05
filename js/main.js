

$("#button1").on("click", function(){
	var name = $("#names").val();
	if(name==="Roham"){
		alert("Hello Roham");
	}
	else{
		alert("Enter authorized user's name");
		var name= $("#names").val();
	}

});

$("#button2").on("click", function(){
	var number= $("#numbers").val();
	if(number<0 || number>100){
		alert("Please enter a number between 0-100");
	
		}
	else if(isNaN(number)){
		alert("You can only put whole numbers");
	}
	else{
		alert ("You have entered:" + number);
		for(i=1;i<=number;i+=2){
			
			$("#results").append(i+"<br>");
		}
	}
})
