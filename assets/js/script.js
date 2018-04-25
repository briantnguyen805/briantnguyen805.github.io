$(document).ready(function(){

// jQuery Function Number 1	
$('.home-button2').css("opacity", 0);
// jQuery Function Number 2	
$('.home-button2').hover(function() {
	$('.home-button2').css("opacity", 0);
	$(this).css("opacity", 1);

}, function(){
	$('.home-button2').css("opacity", 0);
})

$('.back-button').css("opacity", 0);	
$('.back-button').hover(function() {
	$('.back-button').css("opacity", 0);
	$(this).css("opacity", 1);

}, function(){
	$('.back-button').css("opacity", 0);
})

var offset = 0;
setInterval(function() {
	$('.container').css("background-position", offset + "px 0");
	offset = offset + 1;
}, 20)

var offset = 0;
setInterval(function() {
	$('.container2').css("background-position", offset + "px 0");
	offset = offset + 1;
}, 20)

});	











