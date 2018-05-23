$(function(){
	//当季推荐显示隐藏
    $(".time-recomm ul li").hover(function () {
          $(this).find(".top,.down").stop().fadeIn(500);
         }, function () {
        $(this).find(".top,.down").stop().fadeOut(500);
    });



	// var resetBottom=function(){
	// 	var body_H=$("body").height();
	// 	var win_H=$(window).height();
	// 	var foot_H=$("#footer").height();

	// 	if(body_H>win_H && body_H+foot_H>win_H){
			
	// 		$("#footer").removeClass("footerBottom");
	// 	}
	// 	else{
	// 		$("#footer").addClass("footerBottom");
	// 	}
	// }
	// resetBottom();
});	

