
var CTRloadingTime = 500;
var CTRslideInterval = 6000;
var CTRtransitionDuration = 1000;
var CTRtransitionText = 1000;
var CTRrotateAction = 'click';
var CTRtext_effect = 0;

var jwfs=jQuery.noConflict();
var speed_delay=6000;
//var slide_speed=1000;
var slide_speed=0;
var CTRrotateAction="click";
var autoslide=true;
var slideOuter="landing-slide-wrapper";
var slideLoading="landing-slide-loading";
var slideClass="landing-slide";
var naviClass="navi";
var navisTitleClass="landing-slidetext";
var activeSuffix="-active";
var isShowing=0;
var slides;
var navis;
var fx1=new Array;
var firstDelay=false;
var pauseFlag=false;
var timer;
var playButton;
var archiveHtml;
function initFrontpageSlideshow()
	{
    
	displayloading=document.getElementById(slideLoading);
	if(displayloading)
		{
		displayloading.style.display="none"
	}
	else
		{
		return
	}
	displayslide=document.getElementById(slideOuter);
	if(displayslide)
		{
		displayslide.style.display="block"
	}
	/*if(readCookie("com_jw_fpss")=="true")
		{
		autoslide=true
	}
	else if(readCookie("com_jw_fpss")=="false")
		{
		autoslide=false
	}*/
	playButton=document.getElementById("fpss-container_playButton");
	if(autoslide)
		{
		showPauseButton()
	}
	else
		{
		showPlayButton()
	}
	slides=jwfs("body").find("."+slideClass);
	navis=jwfs("body").find("."+naviClass);
	navisTitles=jwfs("body").find("."+navisTitleClass);
    archiveHtml=document.getElementById('landing-top_blinds_title').innerHTML;
	//alert(archiveHtml);
	if(slides.length==0||navis.length==0)
		{
		return
	}
	for(i=0;	i<slides.length;	++i)
		{
		var a=function()
			{
			current=null;
			
			for(j=0;j<navis.length;	++j)
				{
				if(this==navis[j])
					{
					current=j
				}
			}
			//alert((navis[i]).children().find(".navbar-img").innerHTML);
			if(current!=isShowing)
				{
				//jwfs(slides[isShowing]).clearTimer();
				if(slides[isShowing].offsetHeight)
					{
					jwfs(slides[isShowing]).fadeOut(slide_speed)
				}
				jwfs(slides[current]).fadeIn(slide_speed);
				//alert
				//alert(jwfs(navis[current]).children()[0]);
				//var img=jwfs(navis[current]).children()[0];
				navis[isShowing].className=naviClass;
				navis[current].className=naviClass+activeSuffix;
				
				for(k=0;k<navis.length;k++)
				{
					/*if(k==current)
						jwfs(navis[k]).children()[0].innerHTML="<img src=\"images/images/dot1-top-blinds-light.gif\"/>";
                    else
						jwfs(navis[k]).children()[0].innerHTML="<img src=\"images/images/dot1-top-blinds-dark.gif\"/>";
					*/
				}
				isShowing=current;
				showPlayButton();
                                clearSlide()
			}
			return false
		};
		
		var titleDisplay=function()
			{
			current=null;
			//alert("in titel display");
			for(j=0;j<navis.length;	++j)
				{
				if(this==navis[j])
					{
					current=j
				}
			}
			//alert((navis[i]).children().find(".navbar-img").innerHTML);
			
				for(k=0;k<navis.length;k++)
				{
										
					if(k==current){
					    //alert(jwfs(navisTitles[k]).find('h1').find('a').length);
						//alert(jwfs(navisTitles[k]).find('h1').text());
						//document.getElementById('top_blinds_title').innerHTML=jwfs(navis[k]).children()[1].innerHTML;			
						//alert(jQuery.isEmptyObject(navisTitles[k]).find('h1').find('a'));	
						if(jwfs(navisTitles[k]).find('h1').find('a').length > 0){
						   var text=jwfs(navisTitles[k]).find('h1').find('a').text();
						   titleLength=eval((464-((navis.length+1)*18)-40)/7);
						   //alert("titleLength:"+titleLength);
						   //alert("text.length:"+text.length);
						   if(text.length > titleLength){
						     text=text.substring(0,titleLength)+"...";
						   }
						   //alert("text:"+text);
						   document.getElementById('landing-top_blinds_title').innerHTML=text;
						} else if(jwfs(navisTitles[k]).find('h1').length > 0){
						    var text=jwfs(navisTitles[k]).find('h1').text();
							titleLength=eval((464-((navis.length+1)*18)-40)/7);
						   if(text.length > titleLength){
						     text=text.substring(0,titleLength)+"...";
						   }
							document.getElementById('landing-top_blinds_title').innerHTML=text;
						}
					}
					/*if(k==current)
						jwfs(navis[k]).children()[0].innerHTML="<img src=\"images/images/dot1-top-blinds-light.gif\"/>";
                    else
						jwfs(navis[k]).children()[0].innerHTML="<img src=\"images/images/dot1-top-blinds-dark.gif\"/>";
					*/
				}
			
			return false
		};
			var titleRemove=function()
			{
				//document.getElementById('top_blinds_title').innerHTML="";
				document.getElementById('landing-top_blinds_title').innerHTML=archiveHtml;
				return false
			};
		if(CTRrotateAction=="click")
			{
			navis[i].onclick=a
		}
		navis[i].onmouseover=titleDisplay;
		navis[i].onmouseout=titleRemove;
		/*else
			{
			navis[i].onmouseover=a
		}*/
		if(i!=0)
			{
			jwfs(slides[i]).fadeOut(slide_speed)
		}
		else
			{
			navis[i].className=naviClass+activeSuffix
            for(k=0;k<navis.length;k++)
				{
					/*if(k==i)
						jwfs(navis[k]).children()[0].innerHTML="<img src=\"images/images/dot1-top-blinds-light.gif\"/>";
                    else
						jwfs(navis[k]).children()[0].innerHTML="<img src=\"images/images/dot1-top-blinds-dark.gif\"/>";
					*/
				}
		}
	}
}
function showPauseButton()
	{
	//createCookie("com_jw_fpss","true");
	//playButton.innerHTML="Pause";
       	playButton.innerHTML="<img src=\"/templateimages/redesign/modules/main_news/pause-4.gif\"/>";;

	playButton.title="Pause";
	pauseFlag=false;
	autoSlide()
}
function showPlayButton()
	{
	//createCookie("com_jw_fpss","false");
//	playButton.innerHTML="Play";
       	playButton.innerHTML="<img src=\"/templateimages/redesign/modules/main_news/right-1.gif\"/>";

	playButton.title="Play";
	pauseFlag=true;
	clearTimeout(timer);
	firstDelay=false
}
function showNext()
	{
	//alert("test:");
	if(slides.length<=1)
		{
		return
	}
	//jwfs(slides[isShowing]).clearTimer();
	if(slides[isShowing].offsetHeight)
		{
		jwfs(slides[isShowing]).fadeOut(slide_speed)
	}
	navis[isShowing].className=naviClass;
	if(isShowing==slides.length-1)
		{
		isShowing=0;
		jwfs(slides[isShowing]).fadeIn(slide_speed)
	}
	else
		{
		jwfs(slides[++isShowing]).fadeIn(slide_speed)
	}
	navis[isShowing].className=naviClass+activeSuffix;

    for(k=0;k<navis.length;k++)
				{
				   /*
					if(k==isShowing)
						jwfs(navis[k]).children()[0].innerHTML="<img src=\"images/images/dot1-top-blinds-light.gif\"/>";
                    else
						jwfs(navis[k]).children()[0].innerHTML="<img src=\"images/images/dot1-top-blinds-dark.gif\"/>";
					*/
				}


}
function showPrev()
	{
	if(slides.length<=1)
		{
		return
	}
	//jwfs(slides[isShowing]).clearTimer();
	if(slides[isShowing].offsetHeight)
		{
		jwfs(slides[isShowing]).fadeOut(slide_speed)
	}
	navis[isShowing].className=naviClass;
	if(isShowing==0)
		{
		isShowing=slides.length-1;
		jwfs(slides[isShowing]).fadeIn(slide_speed)
	}
	else
		{
		jwfs(slides[--isShowing]).fadeIn(slide_speed)
	}
	navis[isShowing].className=naviClass+activeSuffix;

	for(k=0;k<navis.length;k++)
				{
				   /*
					if(k==isShowing)
						jwfs(navis[k]).children()[0].innerHTML="<img src=\"images/images/dot1-top-blinds-light.gif\"/>";
                    else
						jwfs(navis[k]).children()[0].innerHTML="<img src=\"images/images/dot1-top-blinds-dark.gif\"/>";
					*/
				}

}
function autoSlide()
	{
	if(!pauseFlag)
		{
		timer=setTimeout("autoSlide()",speed_delay);
		if(!firstDelay)
			{
			firstDelay=true;
		}
		else
			{
			showNext();
		}
	}
}
function clearSlide()
	{
	if(!pauseFlag)
		{
		clearTimeout(timer);
		firstDelay=false;
		autoSlide()
	}
}
function playButtonClicked()
	{
	if(pauseFlag)
		{
		showPauseButton()
	}
	else
		{
		showPlayButton()
	}
}

jwfs(document).ready(function()
	{
	initFrontpageSlideshow()
}
);




