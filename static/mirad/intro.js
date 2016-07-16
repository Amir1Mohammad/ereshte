$(document).ready(imReady);
currentNavID=1;
navNumber=4;
rightDisable=false;
leftDisable=true;
currentComment=0;
commentNameLst=["علی در آیتونز","عالی نژاد در کافه بازار","مهدی در سیبچه"]
commentTextLst=[
	" به نظر من ك خيلي نرم افزار خوبيه و من ك خيلي راضيم و اينكه نمونشو نديده بودم و ي چيز جديد بود،خيليم هوش خوبي داره،در كل ب نظرم يكي از بهترين نرم افزار هاي فارسي آي او اس هست و حتي اگ تعداد خبر ها رو بيشتر كنيد بهتر هم ميشه",
	" سلام ،حقیقتا عالی ،عالی ،عالی است دست مریزاد بچه های ایران زمین ،سربلندی و موفقیت شما در هر زمینه ای ،موجب اعتلای ایران عزیز است.",
	" نرم افزار شما نه تا حدی بلکه بلکه بطور کامل رضیت من و خانواده ام را جلب کرده و ما خوشحالیم که از نرم افزار شما استفاده می کنیم"]
commentImageLst=["/static/image/user.jpg","/static/image/user.jpg","/static/image/user.jpg"]
selectedPlatform='iphone';

selectedImage=1;
function goToBlog()
{
	var win = window.open('http://blog.mirad.ir', '_blank');
	win.focus();
}
function goToAppstore()
{
	var win = window.open('https://itunes.apple.com/us/app/mirad/id905669570', '_blank');
	win.focus();
}
function goToTop()
{
	$("html, body").animate({ scrollTop: 0 }, "slow");
}
function selectIpad()
{
	if(selectedPlatform=='ipad')
		return;
	$('#ipadSelector').addClass('activated');
	if($('#iphoneSelector').hasClass('activated'))
	{
		$('#iphoneSelector').removeClass('activated');
	}
	selectedPlatform='ipad';

	if($('.sliderBullet').hasClass('icon-circle'))
		$('.sliderBullet').removeClass('icon-circle');
	$('.sliderBullet').addClass('icon-circle-empty');

	$('#nav1').addClass('icon-circle');
	if($('#nav1').hasClass('icon-circle-empty'))
		$('#nav1').removeClass('icon-circle-empty');
	leftDisable=true;
	rightDisable=false;
	$('#showroomImage').css({'animation':'hider 0.3s','-webkit-animation':'hider 0.3s','animation-fill-mode': 'forwards'});
	$('#sliderNavPlate').css({'animation':'hider 0.3s','-webkit-animation':'hider 0.3s','animation-fill-mode': 'forwards'});
	setTimeout(function()
	{
		$('#showroomImage').css({'display':'none'});
		$('#loading-plate').css({'display':'block'});
		$('#loading-col').css({'margin-top':(($('#loading-plate').height()-$('#loading-col').height())/2).toString()+'px'});
		$('#loading-plate').css({'animation':'shower 0.3s','-webkit-animation':'shower 0.3s','animation-fill-mode': 'forwards'});
		currentNavID=1;
		var file = 'static/image/screenshots/'+selectedPlatform+currentNavID.toString()+'.jpg';
			$('#showroomImage').attr('src', file).load(function() {  
			$('#loading-plate').css({'animation':'hider 0.3s','-webkit-animation':'hider 0.3s','animation-fill-mode': 'forwards'});
			setTimeout(function(){
				$('#showroomImage').css({'display':'block'});
				$('#loading-plate').css({'display':'none'});
				$('#showroomImage').css({'animation':'shower 0.3s','-webkit-animation':'shower 0.3s','animation-fill-mode': 'forwards'});
				$('#sliderNavPlate').css({'animation':'shower 0.3s','-webkit-animation':'shower 0.3s','animation-fill-mode': 'forwards'});
			},300);
		});
	},300);

}
function selectIphone()
{
	if(selectedPlatform=='iphone')
		return;
	$('#iphoneSelector').addClass('activated');
	if($('#ipadSelector').hasClass('activated'))
	{
		$('#ipadSelector').removeClass('activated');
	}
	selectedPlatform='iphone';
	if($('.sliderBullet').hasClass('icon-circle'))
		$('.sliderBullet').removeClass('icon-circle');
	$('.sliderBullet').addClass('icon-circle-empty');
	$('#toSlideLeft').css({'opacity':'0.6'});
	$('#toSlideRight').css({'opacity':'1'});
	$('#nav1').addClass('icon-circle');
	if($('#nav1').hasClass('icon-circle-empty'))
		$('#nav1').removeClass('icon-circle-empty');
	leftDisable=true;
	rightDisable=false;
	$('#showroomImage').css({'animation':'hider 0.3s','-webkit-animation':'hider 0.3s','animation-fill-mode': 'forwards'});
	$('#sliderNavPlate').css({'animation':'hider 0.3s','-webkit-animation':'hider 0.3s','animation-fill-mode': 'forwards'});
	setTimeout(function(){
		$('#showroomImage').css({'display':'none'});
		$('#loading-plate').css({'display':'block'});
		$('#loading-col').css({'margin-top':(($('#loading-plate').height()-$('#loading-col').height())/2).toString()+'px'});
		$('#loading-plate').css({'animation':'shower 0.3s','-webkit-animation':'shower 0.3s','animation-fill-mode': 'forwards'});
		currentNavID=1;
		var file = 'static/image/screenshots/'+selectedPlatform+currentNavID.toString()+'.jpg';
			$('#showroomImage').attr('src', file).load(function() {  
			$('#loading-plate').css({'animation':'hider 0.3s','-webkit-animation':'hider 0.3s','animation-fill-mode': 'forwards'});
			setTimeout(function(){
				$('#showroomImage').css({'display':'block'});
				$('#loading-plate').css({'display':'none'});
				$('#showroomImage').css({'animation':'shower 0.3s','-webkit-animation':'shower 0.3s','animation-fill-mode': 'forwards'});
				$('#sliderNavPlate').css({'animation':'shower 0.3s','-webkit-animation':'shower 0.3s','animation-fill-mode': 'forwards'});
			},300);
		});
	},300);


}
function changeSlideLeft()
{
	rightDisable=false;
	$('#toSlideRight').css({'opacity':'1'});
	console.log(leftDisable)
	if(!leftDisable)
	{
		currentNavID-=1;
		if(currentNavID<=1)
		{
			leftDisable=true;
			$('#toSlideLeft').css({'opacity':'0.6'});
		}
		if($('.sliderBullet').hasClass('icon-circle'))
			$('.sliderBullet').removeClass('icon-circle');
		$('.sliderBullet').addClass('icon-circle-empty');
		console.log('#nav'+(currentNavID).toString())
		$('#nav'+(currentNavID).toString()).addClass('icon-circle');
		if($('#nav'+(currentNavID).toString()).hasClass('icon-circle-empty'))
			$('#nav'+(currentNavID).toString()).removeClass('icon-circle-empty');
		$('#showroomImage').css({'animation':'hider 0.3s','-webkit-animation':'hider 0.3s','animation-fill-mode': 'forwards'});
		setTimeout(function(){
			$('#showroomImage').css({'display':'none'});
			$('#loading-plate').css({'display':'block'});
			$('#loading-col').css({'margin-top':(($('#loading-plate').height()-$('#loading-col').height())/2).toString()+'px'});
			$('#loading-plate').css({'animation':'shower 0.3s','-webkit-animation':'shower 0.3s','animation-fill-mode': 'forwards'});
			var file = 'static/image/screenshots/'+selectedPlatform+currentNavID.toString()+'.jpg';
				$('#showroomImage').attr('src', file).load(function() {  
				$('#loading-plate').css({'animation':'hider 0.3s','-webkit-animation':'hider 0.3s','animation-fill-mode': 'forwards'});
				setTimeout(function(){
					$('#showroomImage').css({'display':'block'});
					$('#loading-plate').css({'display':'none'});
					$('#showroomImage').css({'animation':'shower 0.3s','-webkit-animation':'shower 0.3s','animation-fill-mode': 'forwards'});
				},300);
			});
		},300);


	}
}
function changeSlideRight()
{
	leftDisable=false;
	$('#toSlideLeft').css({'opacity':'1'});
	if(!rightDisable)
	{
		currentNavID+=1;
		if(currentNavID>=navNumber)
		{
			rightDisable=true;
			$('#toSlideRight').css({'opacity':'0.6'});
		}
		if($('.sliderBullet').hasClass('icon-circle'))
			$('.sliderBullet').removeClass('icon-circle');
		$('.sliderBullet').addClass('icon-circle-empty');
		console.log('#nav'+(currentNavID).toString())
		$('#nav'+(currentNavID).toString()).addClass('icon-circle');
		if($('#nav'+(currentNavID).toString()).hasClass('icon-circle-empty'))
			$('#nav'+(currentNavID).toString()).removeClass('icon-circle-empty');
		$('#showroomImage').css({'animation':'hider 0.3s','-webkit-animation':'hider 0.3s','animation-fill-mode': 'forwards'});
		setTimeout(function(){
			$('#showroomImage').css({'display':'none'});
			$('#loading-plate').css({'display':'block'});
			$('#loading-col').css({'margin-top':(($('#loading-plate').height()-$('#loading-col').height())/2).toString()+'px'});
			$('#loading-plate').css({'animation':'shower 0.3s','-webkit-animation':'shower 0.3s','animation-fill-mode': 'forwards'});
			var file = 'static/image/screenshots/'+selectedPlatform+currentNavID.toString()+'.jpg';
				$('#showroomImage').attr('src', file).load(function() {  
				$('#loading-plate').css({'animation':'hider 0.3s','-webkit-animation':'hider 0.3s','animation-fill-mode': 'forwards'});
				setTimeout(function(){
					$('#showroomImage').css({'display':'block'});
					$('#loading-plate').css({'display':'none'});
					$('#showroomImage').css({'animation':'shower 0.3s','-webkit-animation':'shower 0.3s','animation-fill-mode': 'forwards'});
				},300);
			});
		},300);

	}	
}
function sliderNavigation()
{
	navID=parseInt($(this).attr("id").match(/\d+$/)[0])
	if(navID!=currentNavID)
	{
		currentNavID=navID;
		//console.log(currentNavID)
		if(currentNavID==1)
		{
			leftDisable=true;
			rightDisable=false;
			$('#toSlideLeft').css({'opacity':'0.6'});
			$('#toSlideRight').css({'opacity':'1'});
		}
		else if(currentNavID>=navNumber)
		{
			rightDisable=true;
			leftDisable=false;
			$('#toSlideRight').css({'opacity':'0.6'});
			$('#toSlideLeft').css({'opacity':'1'});
		}
		else
		{
			rightDisable=false;
			leftDisable=false;
			$('#toSlideRight').css({'opacity':'1'});
			$('#toSlideLeft').css({'opacity':'1'});
		}
		if($('.sliderBullet').hasClass('icon-circle'))
			$('.sliderBullet').removeClass('icon-circle');
		$('.sliderBullet').addClass('icon-circle-empty');
		$(this).addClass('icon-circle');
		if($(this).hasClass('icon-circle-empty'))
			$(this).removeClass('icon-circle-empty');
		$('#showroomImage').css({'animation':'hider 0.3s','-webkit-animation':'hider 0.3s','animation-fill-mode': 'forwards'});
		setTimeout(function(){
			$('#showroomImage').css({'display':'none'});
			$('#loading-plate').css({'display':'block'});
			$('#loading-col').css({'margin-top':(($('#loading-plate').height()-$('#loading-col').height())/2).toString()+'px'});
			$('#loading-plate').css({'animation':'shower 0.3s','-webkit-animation':'shower 0.3s','animation-fill-mode': 'forwards'});
			var file = 'static/image/screenshots/'+selectedPlatform+currentNavID.toString()+'.jpg';
				$('#showroomImage').attr('src', file).load(function() {  
				$('#loading-plate').css({'animation':'hider 0.3s','-webkit-animation':'hider 0.3s'});
				setTimeout(function(){
					$('#showroomImage').css({'display':'block'});
					$('#loading-plate').css({'display':'none'});
					$('#showroomImage').css({'animation':'shower 0.3s','-webkit-animation':'shower 0.3s'});
				},300);
			});
		},300);
	}

}
function nextComment()
{
	currentComment+=1
	if(currentComment>=commentNameLst.length)
		currentComment=0;
	$('#secondComment .commentImage').attr('src', commentImageLst[currentComment])
	$('#secondComment .commentText').text(commentTextLst[currentComment]);
	$('#secondComment .commentName').text(commentNameLst[currentComment]);
	$('#secondComment').css({'margin-top':(-1*$('#firstComment').height()).toString()+"px"})
	$('#firstComment').removeClass('off');
	$('#secondComment').removeClass('off');
	setTimeout(function()
	{
		$('#firstComment .commentImage').attr('src', commentImageLst[currentComment])
		$('#firstComment .commentText').text(commentTextLst[currentComment]);
		$('#firstComment .commentName').text(commentNameLst[currentComment]);
		$('#firstComment').addClass("off")
		$('#secondComment').addClass("off")
		setTimeout(function()
		{
			nextComment();
		},2000);
	},1100);

}
function imReady()
{
		
	//$('#mainPage').css({'height':$(window).height().toString()+'px'})
	$('#downloadPage').css({'min-height':$('.dowloadPagePlate').height().toString()+'px'})
	
	$('.mainHeader').css({'margin-top':(($(window).height()-$('.mainHeader').height()-$('#mainDownloadPlate').outerHeight())*1/3).toString()+"px"})
	//console.log($('.rightFeaturesPlate').outerHeight())
	//$('.featuresImage').css({'height':$('.rightFeaturesPlate').outerHeight().toString()+"px"})

	var file = '/static/image/screenshots/'+selectedPlatform+'/'+(selectedImage).toString()+'.png';
	$('.featuresImage').attr('src', file)
	if($('#showroomBox').height()<$(window).height())
	{
		$('#showroomBox').css({'margin-top':(($(window).height()-$('#showroomBox').height())/2).toString()+'px'})
	}
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, "slow");
	        return false;
	      }
	    }
	  });
	});

	//console.log($('.orbit-slides-container').height())
	//console.log($('.commentBox').height())
	// $('.commentBox').css({'margin-top':(($('.orbit-slides-container').height()-$('.commentBox').height())/2).toString()+'px'})
	$('.commentBox').css({'margin-top':'60px'})

	$('#firstComment').addClass('off');
	$('#secondComment').addClass('off');
	$('#firstComment .commentImage').attr('src', commentImageLst[currentComment])
	$('#firstComment .commentText').text(commentTextLst[currentComment]);
	$('#firstComment .commentName').text(commentNameLst[currentComment]);
	$('#secondComment').css({'margin-top':(-1*$('#firstComment').height()).toString()+"px"})
	$('#iphoneSelector').click(function()
	{
		if(selectedPlatform=='iphone')
			return;
		$('#iphoneSelector').addClass("active");
		$('#androidSelector').removeClass("active");
		$('#webSelector').removeClass("active");
		selectedPlatform="iphone"
		//$('.featuresImage').removeClass('webMode');
		var file = '/static/image/screenshots/'+selectedPlatform+'/'+(selectedImage).toString()+'.png';
		$('.featuresImage').css({'animation':'hide 0.3s','-webkit-animation':'hide 0.3s','-moz-animation':'hide 0.3s','animation-fill-mode': 'forwards'});
		setTimeout(function()
		{
			$('.featuresImage').attr('src', file).load(function()
			{
				$('.featuresImage').css({'animation':'show 0.3s','-webkit-animation':'show 0.3s','-moz-animation':'show 0.3s','animation-fill-mode': 'forwards'});
			})
		},300)
	})
	$('#androidSelector').click(function()
	{
		if(selectedPlatform=='android')
			return;
		$('#iphoneSelector').removeClass("active");
		$('#androidSelector').addClass("active");
		$('#webSelector').removeClass("active");
		selectedPlatform="android"
		//$('.featuresImage').removeClass('webMode');
		var file = '/static/image/screenshots/'+selectedPlatform+'/'+(selectedImage).toString()+'.png';
		$('.featuresImage').css({'animation':'hide 0.3s','-webkit-animation':'hide 0.3s','-moz-animation':'hide 0.3s','animation-fill-mode': 'forwards'});
		setTimeout(function()
		{
			$('.featuresImage').attr('src', file).load(function()
			{
				$('.featuresImage').css({'animation':'show 0.3s','-webkit-animation':'show 0.3s','-moz-animation':'show 0.3s','animation-fill-mode': 'forwards'});
			})
		},300)
	})
	$('#webSelector').click(function()
	{
		if(selectedPlatform=='web')
			return;
		$('#iphoneSelector').removeClass("active");
		$('#androidSelector').removeClass("active");
		$('#webSelector').addClass("active");
		selectedPlatform="web"
		$('.featuresImage').css({'margin-top':(($('.rightFeaturesPlate').outerHeight()-$('.featuresImage').height())/2).toString()+"px"})
		//$('.featuresImage').addClass('webMode');
		var file = '/static/image/screenshots/'+selectedPlatform+'/'+(selectedImage).toString()+'.png';
		$('.featuresImage').css({'animation':'hide 0.3s','-webkit-animation':'hide 0.3s','-moz-animation':'hide 0.3s','animation-fill-mode': 'forwards'});
		setTimeout(function()
		{
			$('.featuresImage').attr('src', file).load(function()
			{
				$('.featuresImage').css({'animation':'show 0.3s','-webkit-animation':'show 0.3s','-moz-animation':'show 0.3s','animation-fill-mode': 'forwards'});
			})
		},300)
	})
	$(".leftFeaturesPlate .featurePlate").hoverIntent(function(){
		if(selectedImage==parseInt($(this).attr('pid')))
			return;
		$(".leftFeaturesPlate .featurePlate").removeClass("active");
		$(".rightFeaturesPlate .featurePlate").removeClass("active");
		$(this).addClass("active");
		selectedImage=parseInt($(this).attr('pid'))

		var file = '/static/image/screenshots/'+selectedPlatform+'/'+(selectedImage).toString()+'.png';
		$('.featuresImage').css({'animation':'hide 0.3s','-webkit-animation':'hide 0.3s','-moz-animation':'hide 0.3s','animation-fill-mode': 'forwards'});
		setTimeout(function()
		{
			$('.featuresImage').attr('src', file).load(function()
			{
				$('.featuresImage').css({'animation':'show 0.3s','-webkit-animation':'show 0.3s','-moz-animation':'show 0.3s','animation-fill-mode': 'forwards'});
			})
		},300)
	},function(){})

	$(".rightFeaturesPlate .featurePlate").hoverIntent(function(){
		if(selectedImage==parseInt($(this).attr('pid')))
			return;
		$(".leftFeaturesPlate .featurePlate").removeClass("active");
		$(".rightFeaturesPlate .featurePlate").removeClass("active");
		$(this).addClass("active");
		selectedImage=parseInt($(this).attr('pid'))
		var file = '/static/image/screenshots/'+selectedPlatform+'/'+(selectedImage).toString()+'.png';
		$('.featuresImage').css({'animation':'hide 0.3s','-webkit-animation':'hide 0.3s','-moz-animation':'hide 0.3s','animation-fill-mode': 'forwards'});
		setTimeout(function()
		{
			$('.featuresImage').attr('src', file).load(function()
			{
				$('.featuresImage').css({'animation':'show 0.3s','-webkit-animation':'show 0.3s','-moz-animation':'show 0.3s','animation-fill-mode': 'forwards'});
			})
		},300)
	},function(){})


	setTimeout(function()
	{
		nextComment();
	 },2000);
}
function reseting()
{
	$('#downloadPage').css({'min-height':$('.dowloadPagePlate').height().toString()+'px'})
	
	$('.mainHeader').css({'margin-top':(($(window).height()-$('.mainHeader').height()-$('#mainDownloadPlate').outerHeight())*1/3).toString()+"px"})
	//console.log($('.rightFeaturesPlate').outerHeight())
	//$('.featuresImage').css({'height':$('.rightFeaturesPlate').outerHeight().toString()+"px"})

	var file = '/static/image/screenshots/'+selectedPlatform+'/'+(selectedImage).toString()+'.png';
	$('.featuresImage').attr('src', file)
	if($('#showroomBox').height()<$(window).height())
	{
		$('#showroomBox').css({'margin-top':(($(window).height()-$('#showroomBox').height())/2).toString()+'px'})
	}
	$('.commentBox').css({'margin-top':(($('.orbit-slides-container').height()-$('.commentBox').height())/2).toString()+'px'})
}