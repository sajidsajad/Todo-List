alert("Note: Make sure your machine has internet connection ;) and after typing new todo in input field - Add New Todo, Press Enter!!!");

$("ul").on("click","li",function(){	//we use on instead of click because on adds listener for all potential future 
									//elements & li argument following click specifies run following code
									// on clicking li which is under the particular ul
	$(this).toggleClass("completed");
	// console.log($(this).css("color"));
	// if($(this).css("color") === "rgb(128, 128, 128)")
	// {
	// 	console.log($(this).css("color") + " i m gray make me black");
	// 	$(this).css({
	// 		color: "black",
	// 		textDecoration: "none"
	// 	});
	// }
	// else
	// {
	// 	console.log("i m black make me gray " + $(this).css("color"));
	// 	$(this).css({
	// 		color: "gray",
	// 		textDecoration: "line-through"
	// 	});
	// }
});

			// ----------------------- Toggling the plus sign ------------------------ //
$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});

			//------------------------ Removing the todo ----------------------------------//
$("ul").on("click","span",function(event){
	// $(this).remove(); // it will only remove span but not li in the todo list
	// $(this).parent().remove(); //as li is parent of span that is why we used parent.remove()
	$(this).parent().fadeOut(500,function(){ //here 'this' refers to span
		$(this).remove();	//here 'this' refers to li 
	});
	event.stopPropagation(); //a jQuery method used to stop the event from bubbling out
});

			//------------------------ adding the todo ----------------------------------//
$("input[type='text'").keypress(function(event){
	if(event.which === 13){	//13 is code for key enter
		var todoText = $(this).val();
		$(this).val("");	//it will clears the text from input after hitting the enter
		$("ul").append("<li><span><i class=\"fa fa-trash\"></i></span> " + todoText + "</li>");
	}
});