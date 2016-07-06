$(document).ready(function() {

	$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".podrt_descr").attr("id", "work_" + i);
	});

	$(".top_mnu ul a").mPageScroll2id();

	$("#portfolio_grid").mixItUp();

	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	$("input, select, textarea").jqBootstrapValidation();

	$(".popup").magnificPopup({type:'image'});
	$(".popup_content").magnificPopup({
		type:"inline",
		Click: true
	});


	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("fadeInUp", "fadeOutDown");


	function heightDetect() {
		$(".main_head").css("min-height", $(window).height());


	};
	heightDetect();
	$(window).resize(function() {

		heightDetect();
	})


});

//TOGGLE MENU 2016 30 6
$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});

$(".sandwich").click(function() {
	$(".sandwich").toggleClass("active");
});


$(".top_mnu ul a").click(function() {
	$(".top_mnu").fadeOut(600);
	$(".sandwich").toggleClass("active");
	$(".top_text").removeClass("h_opacify");
}).append("<span>");



$(".toggle_mnu").click(function() {
	if ($(".top_mnu").is(":visible")) {
	$(".top_text").removeClass("h_opacify");
	$(".top_mnu").fadeOut(600);
	$(".top_mnu li a").removeClass("fadeInUp animated");
}
else{
	$(".top_text").addClass("h_opacify");
	$(".top_mnu").fadeIn(600);
	$(".top_mnu li a").addClass("fadeInUp animated");
}

});
