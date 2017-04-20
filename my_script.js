$(document).ready(function(){

	//$("nav ul li").click(function(){  
	//	$("nav ul li").addClass( "highlight-nav");
 	//});
 	$("#menu-icons").bind("click touchstart", function() {  //reveals menu, hides menu-icons
 		$("nav").slideDown(1000);
 		$("#menu-icons").hide();
 	}); // closing tags menu reveal click


 	$("nav ul li").bind("click touchstart", function() {
 		$(this).addClass("highlight-nav");                   //adds highlight to li
	}); // closing tags menu item highlight click

 	$("nav li.drop").bind("click touchstart", function() {   //reveals sub-menu items
 		$(this).next("nav li.supp").slideDown(1000);
 	});

});  //closing tags for "document ready"
