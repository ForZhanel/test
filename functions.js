$('.block-text').hide();
$('input[name="radio"]').click(function(){
	var target = $('#block-' + $(this).val());
 
	$('.block-text').not(target).hide(0);
	target.fadeIn(500);
});

// ==============================

$("#btn1").click(function() {
	$(".img1").toggleClass("active");
});
$("#btn2").click(function() {
	$(".img2").toggleClass("active");
});
$("#btn3").click(function() {
	$(".img3").toggleClass("active");
});
$("#btn4").click(function() {
	$(".img4").toggleClass("active");
});
