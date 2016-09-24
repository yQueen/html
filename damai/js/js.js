;(function($){
	var index=0,
		len=$("#banner").find("img").length;
		$("#banner").on("swipeLeft",function(){
			index++;
			if(index>=len-1){index=len-1}
				changeImg();
		}).on("swipeRight",function(){
			index--;
			if(index<=0){index=0}
				changeImg();
		})
	function changeImg(){
		$(".banner").find("img").css("transform","translatex("+(-index*100)+"%)");
		$("#ol").find("li").eq(index).addClass("bg").siblings().removeClass("bg");
	}

	$(".mark").css("transform","translatex(-100%)");
	$("#a1").on("tap",function(){
		$(this).hide();
		$(".up").show();
		$(".mark").css("transform","translatex(0%)");
	})
	$(".up").on("tap",function(){
		$(this).hide();
		$("#a1").show();
		$(".mark").css("transform","translatex(-100%)");
	})
})(Zepto)