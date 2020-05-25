

					/*HEADER SLIDER*/
$(document).ready(function () {
var timeList = 500;
var TimeView = 3000;

$('.slide_item').hide().eq(0).show();
var slideNum = 0;
var slideTime;
slideCount = $(".slide_item").length;

var animSlide = function(arrow){
		clearTimeout(slideTime);

		function slideDirectionHide(slideFloatNum, directTo){
						$('.slide_item').eq(slideFloatNum).fadeOut(timeList);
		}

		function slideDirectionShow(slideFloatNum, directTo, pause){
						$('.slide_item').eq(slideFloatNum).fadeIn(timeList, function() {
								if(pause == true) { rotator(); }
						});
		}

		var old_slideNum = slideNum;

		if(arrow == "next"){
						slideDirectionHide(slideNum, "left");
						if(slideNum == (slideCount-1)){slideNum=0;}
						else{slideNum++}
						slideDirectionShow(slideNum, "right", true);
						}
		else if(arrow == "prew")
		{
						slideDirectionHide(slideNum, "right");
						if(slideNum == 0){slideNum=slideCount-1;}
						else{slideNum-=1}
						slideDirectionShow(slideNum, "left", true);
		}else{
								if(arrow !== old_slideNum)
								{
										if(arrow > old_slideNum)
										{
												slideDirectionHide(slideNum, "left");
												slideNum = arrow;
												slideDirectionShow(slideNum, "right", true);
										}else if(arrow < old_slideNum) {
												slideDirectionHide(slideNum, "right");
												slideNum = arrow;
												slideDirectionShow(slideNum, "left", true);
										}

								}
		}

}



				var pause = false;
				var rotator = function(){
							 if(!pause){slideTime = setTimeout(function(){animSlide('next')}, TimeView);}
							 }
				$('.slider').hover(
					 function(){clearTimeout(slideTime); pause = true;},
					 function(){pause = false; rotator();
					 });

		var clicking = false;
		var prevX;
		$('.slider-arrow-right').mousedown(function(){
				clicking = true;
				if(clicking == true) { animSlide("next"); clearTimeout(slideTime); }
				clicking = false;
			});

				$('.slider-arrow-left').mousedown(function(){
						clicking = true;
						if(clicking == true) { animSlide("prew"); clearTimeout(slideTime); }
						clicking = false;
		});

		$('.slide_item').hover().css('cursor', 'pointer');
		rotator();

});

					/*INFO ACCORDION*/
					$(document).ready(function(){
    $(".accord_item").click(function(){
		 if ($(this).index() == 0){
				$(".accord_item").removeClass("active");
				$(".accord_item").eq(0).toggleClass("active");
				$(".accord_content").css("display", "none");
        $(".accord_content").eq(0).slideToggle(1000);
			}
			else if ($(this).index() == 1) {
				$(".accord_item").removeClass("active");
				$(".accord_item").eq(1).toggleClass("active");
				$(".accord_content").css("display", "none");
				$(".accord_content").eq(1).slideToggle(1000);
			}
			else if ($(this).index() == 2) {
				$(".accord_item").removeClass("active");
				$(".accord_item").eq(2).toggleClass("active");
				$(".accord_content").css("display", "none");
				$(".accord_content").eq(2).slideToggle(1000);
			}
			else {
				$(".accord_item").removeClass("active");
				$(".accord_item").eq(3).toggleClass("active");
				$(".accord_content").css("display", "none");
				$(".accord_content").eq(3).slideToggle(1000);
			}
    });

});


					/*TEXT SLIDER*/
	$(document).ready(function () {

	var timeList = 500;
	var TimeView = 3000;

	$('.slide').hide().eq(0).show();
	var slideNum = 0;
	var slideTime;
	slideCount = $("#slider .slide").length;

	var animSlide = function(arrow){
	    clearTimeout(slideTime);

	    function slideDirectionHide(slideFloatNum, directTo){
	            $('.slide').eq(slideFloatNum).fadeOut(timeList);
	    }

	    function slideDirectionShow(slideFloatNum, directTo, pause){
	            $('.slide').eq(slideFloatNum).fadeIn(timeList, function() {
	                if(pause == true) { rotator(); }
	            });
	    }

	  let old_slideNum = slideNum;

	    if(arrow == "next"){
	            slideDirectionHide(slideNum, "left");
	            if(slideNum == (slideCount-1)){slideNum=0;}
	            else{slideNum++}
	            slideDirectionShow(slideNum, "right", true);
	            }
	    else if(arrow == "prew")
	    {
	            slideDirectionHide(slideNum, "right");
	            if(slideNum == 0){slideNum=slideCount-1;}
	            else{slideNum-=1}
	            slideDirectionShow(slideNum, "left", true);
	    }else{
	                if(arrow !== old_slideNum)
	                {
	                    if(arrow > old_slideNum)
	                    {
	                        slideDirectionHide(slideNum, "left");
	                        slideNum = arrow;
	                        slideDirectionShow(slideNum, "right", true);
	                    }else if(arrow < old_slideNum) {
	                        slideDirectionHide(slideNum, "right");
	                        slideNum = arrow;
	                        slideDirectionShow(slideNum, "left", true);
	                    }

	                }
	    }

	}



	      let pause = false;
	      let rotator = function(){
	               if(!pause){slideTime = setTimeout(function(){animSlide('next')}, TimeView);}
	               }
	        $('#slider-wrap').hover(
	           function(){clearTimeout(slideTime); pause = true;},
	           function(){pause = false; rotator();
	           });

	  let clicking = false;
	  let prevX;
	    $('#nextBut').mousedown(function(){
	        clicking = true;
					if(clicking == true) { animSlide("next"); clearTimeout(slideTime); }
					clicking = false;
				});

					$('#prewBut').mousedown(function(){
			        clicking = true;
							if(clicking == true) { animSlide("prew"); clearTimeout(slideTime); }
							clicking = false;
	    });

	    $('.slide').hover().css('cursor', 'pointer');
	    rotator();

	});

	/* MENU NAVIGATION AND TOGGLE */
		$(document).ready(function () {
	$("#nav_toggle").on("click", function(event) {
			event.preventDefault();

			$(this).toggleClass("active");
			$("#nav").toggleClass("active");

	});
});

/* FIXED HEADER */
$(document).ready(function () {

  let header = $("#header"),
    	banner = $("#banner").innerHeight(),
      scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= banner ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }
	});


	    /* SMOOTH SCROLL */
			$(document).ready(function () {
	    $("[data-scroll]").on("click", function(event) {
	        event.preventDefault();

	      let $this = $(this),
	            blockId = $this.data('scroll'),
	            blockOffset = $(blockId).offset().top;

	        $("#nav a").removeClass("active");
	        $this.addClass("active");

	        $("html, body").animate({
	            scrollTop:  blockOffset
	        }, 500);
	    })
		});
