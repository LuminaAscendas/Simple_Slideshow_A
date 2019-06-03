var begin_entered=false;
var focus_change=2;
var back_tab=false;
var swiperControl = false;
var tabClick = false;
$(document).ready(function(){
	
	//$('#direction_text').attr('aria-label',$('#direction_text').text());
	for(i=0;i<slider.length;i++){
		$('#text_container').append('<div class="text_container" role="none" id="textcont_'+(i+1)+'">'+slider[i].slide_text+'</div>');
		$('#textcont_'+(i+1)).attr('aria-label',$('#textcont_'+(i+1)).text());
		$('#imgCont_'+(i+1)+' img').attr('aria-label',slider[i].img_alt_text);
		$('#imgCont_'+(i+1)+' img').attr('alt',slider[i].img_alt_text);
	}


if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) ||/Edge\/\d./i.test(navigator.userAgent)) {
    // This is internet explorer 9 or 11
    	setTimeout(function(){
			$('#dummy_reader').html('').removeAttr('aria-label');
			$('#direction_text').removeAttr('role').attr('aria-label',$('#direction_text').text());
			$('#dummy_reader,#reverse_extra_tab').attr('aria-hidden','true')
			//alert('1');
		},10)		

}
	var userAgent = navigator.userAgent || navigator.vendor || window.opera;
//	if (/windows phone/i.test(userAgent)) {
//		return "Windows Phone";
//	}
//	if (/android/i.test(userAgent)) {
//		return "Android";
//	}
	if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
		$('#direction_text').attr('role','text').attr('aria-label',$('#direction_text').text());
	}
	$(".beginPageImage").hover(function(event) {
		$(".beginPageImage").attr("title","Examples of environmental exploitation");
		$(this).focus(function(){	
			$(".beginPageImage").removeAttr("title");
		});
	},function (event) {
		$(".beginPageImage").removeAttr("title");
	});

	$('#begin_btn').off('click').on('click',function(){
		begin_entered=true;
//		$('#direction_text').attr('role','text');
			$('#begin_page').hide();
/* 			$('#head_ing').hide();
			$('#direction_text').hide();
			$('.text_container').hide(); */
			//$('.img_container').hide();
		setTimeout(function(){
			$('#responsive_container,#text_container').css('opacity','1');
			/* $('#head_ing').fadeIn(500);
			$('#direction_text').fadeIn(500);
			$('.text_container').eq(0).fadeIn(500); */
			$('#head_ing').addClass('fade_in');
			$('#direction_text').addClass('fade_in');
			$('.text_container').addClass('fade_in');
			//$('.img_container').eq(0).fadeIn();
			$('#head_ing').attr('aria-label',slider[0].slide_Title);
			$('#head_ing').html(slider[0].slide_Title);
			$('#direction_text').html(direction_text);
			$('#direction_text').attr('aria-label',$('#direction_text').text());
			$(".slideImg").hover(function(event) {
				var ariaTitle = $(this).attr("aria-label");
				$(this).attr("title",ariaTitle);
				$(this).focus(function(){	
					$(".slideImg").removeAttr("title");
				});
			},function (event) {
				$(".slideImg").removeAttr("title");
			});
			set_tab();
			resizeApp();
//			setTimeout(function(){
//				$('#dummy_reader').focus();
//			},5)
		},10);
	});
	
	$('#click_popup').off('click').on('click',function(){
		$('#pop_up').css('display','inline-block');
	});

	$('#next_btn,#prev_btn').off('click').on('click',function(){

	});
	$('#close_btn').off('click').on('click',function(){
		$('#pop_up').css('display','none');
	});
	/* $('.refreshBtn').off('click').on('click',function(){
		location.reload();
	});
 */
	/*----------------------------------------tab_functionality-----------------------------------*/
	$('#direction_text').on('focus', function(Event) {
//		$('#direction_text').removeAttr('role','text');
		$('#dummy_reader').attr('aria-hidden','true')
		setTimeout(function(){
			if ($("#direction_text").is(":focus") && back_tab==true) {
				setTimeout(function(){
					$('#dummy_reader').focus();
				},5)
			}
		},10)
	});
	$('#head_ing').on('focus', function(Event) {
		//$('#direction_text').removeAttr('role');
		back_tab=true;
	})	
	$('.direction').on('focus', function(Event) {
		alert('direction');
	})	
	$('.dir_text').on('focus', function(Event) {
		alert('dir_text');
	})
	//head_ing
	$('#dummy_reader').on('focus', function() {
		back_tab=false
		$('#dummy_reader,#reverse_extra_tab').attr('aria-hidden','true')
		setTimeout(function(){
			set_tab();
			$('.tab_index').eq(2).focus();
		},10);
	});
	
	$('.tab_index').eq(2).on('focus', function() {	
		back_tab=true;
	});
	
	$('#extra_tab').on('focus', function() {
		$('.tab_index').eq(focus_change).focus();
		
	});
	
	$('#reverse_extra_tab').on('focus', function() {
		//alert()
		setTimeout(function(){
			$('.tab_index').eq(1).focus();
		},10)
	})
//	
	$('#begin_dummy').on('focus', function() {
		$('.tab_index').eq(1).focus();
	});

	$('#begin_reverse_dummy').on('focus', function() {
		$('.tab_index').eq(0).focus();
	});
	setTimeout(function(){
		set_tab();
		//$('#begin_dummy').focus();
	},1000)
	resizeApp();
	setTimeout(function(){
		$('.swiper-button-next').attr('id','next_btn')
		$('.swiper-button-prev').attr('id','prev_btn')
	},100);
	document.body.onkeyup = function(e){
		if(e.keyCode == 32 || e.keyCode == 13){
			console.log(document.activeElement.id)
			e.preventDefault();
			$('#'+document.activeElement.id).trigger('click');
			$('#'+e.target.id).focus();
		}
	}
});
window.onresize = function() {
	resizeApp(); 
}
function transTextFun(crntScrNo){
	//$('#head_ing').hide();
	//$('.text_container').hide();
	$('#head_ing').removeClass('fade_in');
	$('.text_container').removeClass('fade_in');
	if(crntScrNo == 0)$('#direction_text').removeClass('fade_in');
	$('.text_container').css('display','none');
	var setTimeForFadein = setTimeout(function(){
		$('#head_ing').addClass('fade_in');
		//$('.text_container').eq(crntScrNo).addClass('fade_in');
		console.log(crntScrNo);
		$('#textcont_'+(crntScrNo+1)).css('display','block');
		$('#textcont_'+(crntScrNo+1)).addClass('fade_in');
		if(crntScrNo == 0)$('#direction_text').addClass('fade_in');
	},10);

}
function goBeginPage(){
	begin_entered=false;
	$('#responsive_container,#text_container').css('opacity','0');
	setTimeout(function(){
		$('#begin_page').fadeIn();
		set_tab();
		resizeApp();
	},10);
}
function set_tab(){
	if(!begin_entered){
		$('#text_container,#responsive_container').hide()
		$('.tab_index,#text_container,#responsive_container').removeClass('tab_index').removeAttr('tabindex');
		$('#pageTitle').addClass('tab_index');
		$('.beginPageImage').addClass('tab_index');
		$('#begin_reverse_dummy,#begin_dummy,#begin_btn').addClass('tab_index');
	}else{
		$('#text_container,#responsive_container').show()
		$('.tab_index,.text_container').removeClass('tab_index').removeAttr('tabindex');
		//$('.swiper-pagination-bullet').removeClass('tab_index').removeAttr('tabindex');
		$('#dummy_reader').addClass('tab_index');
		$('.swiper-button-prev,.swiper-button-next').addClass('tab_index');
		$('#textcont_'+(swiper.activeIndex+1)).addClass('tab_index');
		if(swiperControl){
			$('#direction_text').removeClass('tab_index').removeAttr('tabindex');
		}else{
			$('#direction_text').addClass('tab_index');
		}
		$('#head_ing').addClass('tab_index');
		$('.dummy_div').addClass('tab_index');
		$('.swiper-slide-active .text_container').addClass('tab_index');
		$('.swiper-slide-active img').addClass('tab_index');
		$('#extra_tab,#reverse_extra_tab').addClass('tab_index');
		$('.refreshBtn').addClass('tab_index');
	}
	$('.tab_index').each(function( index ) {		
		$('.tab_index').attr('tabindex','0');
		
	});
}

