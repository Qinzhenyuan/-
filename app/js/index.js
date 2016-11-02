
document.addEventListener('DOMContentLoaded',function(){
	//swiper 轮播图
	var mySwiper = new Swiper('.swiper-container', {
	autoplay: 3000,//可选选项，自动滑动
	direction: 'horizontal',
})
		
//	//回到顶部；
	$(".hxy-backTop").on("singleTap",function(){
		$("body").scrollTop("0");
		console.log($(document).scrollTop())
	})
	//用ajax获取数据实现加载；
	$.ajaxSetup({
		type:'GET',
		url:"data/indexpro.json",
		dataType:"json",
		timeout:300,
		success:function(data){
			console.log(data);
			$.each(data, function(idx,item) {
				//先加载部分；
				if(idx<5){
					//创建标签，并添加hxy-project
					var $dl = $("<dl/>").addClass("hxy-pro-list");
					var $dt = $("<dt/>");
					var $dd = $("<dd/>");
					var $a = $("<a/>").attr({href:item.href});
					var $a2 = $("<a/>").attr({href:item.href});
					var $a3 = $("<a/>").attr({href:item.href})
					//创建储产品图片；
					$("<img src='img/loading.gif' data-original="+item.imgurl+"/>").addClass("lazy").appendTo($a);				
//					$("<img src="+item.imgurl+"/>").addClass("lazy").appendTo($a);				
					//产品价格和产品说明；
					$("<p/>").addClass("hxy-pro-intr").html(item.title).appendTo($a2);
					$("<span/>").addClass("hxy-integral").html(item.proPri).appendTo($a3);
					$("<span/>").addClass("hxy-pro-price").html(item.price+"<i class='hxy-unit'>起</i>").appendTo($a3);
				
					$a.appendTo($dt);
					$a2.appendTo($dd);
					$a3.appendTo($dd);
					$dt.appendTo($dl);
					$dd.appendTo($dl);
					$dl.appendTo($(".hxy-project"));
				}
				$("img.lazy").lazyload();
			});
		},error:function(xhr,type){
			alert("Ajax error")
		}
	});
	$.ajax();
	
	$(window).on("scroll", function() {
	var $scrollTop = $(window).scrollTop();
	if($scrollTop >= $(document).height() - $(window).height() - 100) {
		$.ajax();
		}
	});
				
				
})
