
var $mainNav = $(".main-nav");
var $dropDwnBtn = $(".drop-down");

$dropDwnBtn.on("click", function() {
	$mainNav.toggleClass("hide");
});