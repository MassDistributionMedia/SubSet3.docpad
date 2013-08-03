// the entirety of global.js is wrapped in a "modern browser check"
// none of this code should run in browsers which fail the check.
if(detectBrowser.modernBrowser()){
document.write('<script type="text/javascript" src="http://s7.addthis.com/js/250/addthis_widget.js#pubid=addthisforshare"></script> ');
/*
	Section nav blinds 
	
	Note: the string 'test123' can be replaced with a variable that is set in another 
	      dynamically-generated javascript file so that the blinds can highlight and open
	      the correct item or sub-item as "current"
	
*/
Event.observe(window, 'load', function() {
	if($$('.section_nav_blinds .content').length > 0){
		var s3 = new Blinds($$('.section_nav_blinds .content'),$$('.section_nav_blinds')[0],null,{'current_id':$('menu_item_id').value});
	}
	if($$('.section_nav_blinds .no_content_section').length > 0){
			if($('menu_item_id') != null && $('menu_item_id').value != '')
			{
				var idVal = $('menu_item_id').value;
				if(document.getElementById(idVal) != null){
					document.getElementById(idVal).style.color  = "#99CCFF";
				}
			}
	}
}, false);


/*This is for On Demand Video. Calls function in plgindemandtv.js*/
Event.observe(window, 'load', function() {
	var nasatv = document.getElementById("NASATV");
	if (nasatv)
	{
		getSelectedVideoChannel();
	}
},false);


/*This is for NASA TV */
Event.observe(window, 'load', function() {
	var nasa_tv_rd = document.getElementById("nasa_tv_rd");
	if (nasa_tv_rd)
	{
		GetSelectedChannelNASATV();
	}
},false);


/*clear text input fields*/
Event.observe(window, 'load', function() {
	if($$('.input_clear')){
		$$('.input_clear').each(function(element){
			
			element.oldValue = element.value;
			
			Event.observe(element, "focus", function(e) {
				if(element.value == element.oldValue) {
					element.value = "";
				}
				Event.stop(e);
			});
			
		});
	}
}, false);

/* popular content blinds bootstrap */

Event.observe(window, 'load', function() {
	var allBlinds = $$('.narrow_blue_blinds').map(function(narrow_blue_blinds){
		var contents = narrow_blue_blinds.getElementsBySelector('.content');
		var cap = narrow_blue_blinds.getElementsBySelector('.cap')[0];
		return new Blinds(contents,narrow_blue_blinds,cap);
	});
}, false);

Event.observe(window, 'load', function() {
	var allBlinds = $$('.narrow_blue_blinds_img').map(function(narrow_blue_blinds_img){
		var contents = narrow_blue_blinds_img.getElementsBySelector('.content');
		var cap = narrow_blue_blinds_img.getElementsBySelector('.cap')[0];
		return new Blinds(contents,narrow_blue_blinds_img,cap);
	});
}, false);

/* Modules_Widgets-style grey accordions */
Event.observe(window, 'load', function() {
	$$('.grip_accordion').each(function(item){
		var s3 = new Blinds(item.getElementsBySelector('.content'),item, item.getElementsBySelector('.cap')[0]);
	});
}, false);

/* main news accordion bootstrap */
Event.observe(window, 'load', function() {
	if ($$('.main_news_accordion .content').length > 0) {
		$$('.main_news_accordion').each(function(item){
			var content = item.getElementsBySelector('.content');
			var cap = item.getElementsBySelector('.cap')[0];
			var s3 = new Blinds(content,item,cap);
		});
	}
}, false);	
/* top middle blinds bootstrap */
Event.observe(window, 'load', function() {
	if($$('.top_middle_blinds .content').length > 0){
		$$('.top_middle_blinds').each(function(item){
			var content = item.getElementsBySelector('.content');
			var cap = item.getElementsBySelector('.cap')[0];
			
			var s3 = new Blinds(content,item,cap);		
		});

	}
}, false);

/* main video accordion bootstrap */
Event.observe(window, 'load', function() {
	if ($$('.main_video_accordion .content').length > 0) {
		$$('.main_video_accordion').each(function(item){
			var content = item.getElementsBySelector('.content');
			var cap = item.getElementsBySelector('.cap')[0];
			var s4 = new Blinds(content,item,cap);
		});
	}
}, false);

/*For Video Landing Page */
Event.observe(window, 'load', function() {
	if ($$('.main_video_accordion_landing .content').length > 0) {
		$$('.main_video_accordion_landing').each(function(item){
			var content = item.getElementsBySelector('.content');
			var cap = item.getElementsBySelector('.cap')[0];
			var s4 = new Blinds(content,item,cap);
		});
	}
}, false);

/*For Video Pop-up Page */
Event.observe(window, 'load', function() {
	if ($$('.main_video_accordion_popup .content').length > 0) {
		$$('.main_video_accordion_popup').each(function(item){
			var content = item.getElementsBySelector('.content');
			var cap = item.getElementsBySelector('.cap')[0];
			var s4 = new Blinds(content,item,cap);
		});
	}
}, false);


/* SEARCH BUTTON SUBMIT 
Event.observe(window, 'load', function() {
	$$('.searchbtn').each(function(item){
		Event.observe(item, 'click', function() {
			window.location.href="search_results.html";
		}, false);
	});
}, false);*/

/* Overlays RSS bootstrap */
Event.observe(window, 'load', function() {
	if($$('.myOverlayRSS')){
		var allOverlays = $$('.myOverlayRSS').map(function(myOverlay){
			
			var theHref = myOverlay.href;

			function renderOverlayRss(contentElement, theHref){
				contentElement.innerHTML = "";
				
				function addRssPop(w, h, url){
					window.open(url, '', 'width='+ w +', height='+ h +', toolbar=no, resizable=yes, scrollbars=yes');
				}
				
				if(!Prototype.Browser.WebKit){
					var fieldFocus = "javascript: $$('.copy_bookmark')[0].select();";
				}
			
				var rssTitle = document.title;
				
				var title = new Element('h5',{});
				title.update("Add RSS");
				
				var description = new Element("p",{});
				description.update('Select a web-based rss site:');


				function makeListLink(title,classname,hideText){
					var link = new Element('a',{'className':classname,'href':'#'});
					if(hideText){
						var span = new Element('span',{'className':'hide'});
						span.update(title);
						link.insert(span);
					} else {
						link.update(title);
					}
					var li = new Element('li',{});
					li.insert(link);
					return li;
				}

				var links1 = [
					{className:'bookmark_msn',title:'My MSN'},
					{className:'bookmark_technorati',title:'Technorati'},
					{className:'bookmark_aol',title:'My Aol'}
				];
				var list1 = new Element('ul',{'className':'rss_left_ul'});
				for(var i=0;i<links1.length;i++){
					list1.insert(makeListLink(links1[i]['title'],links1[i]['className'],links1[i]['hideText']));
				}
							
				var links2 = [
					{className:'rss_google',title:'Google',hideText:true},
					{className:'bookmark_yahoo',title:'Yahoo!'}
				];
				var list2 = new Element('ul',{'className':'rss_right_ul'});
				for(var i=0;i<links2.length;i++){
					list2.insert(makeListLink(links2[i]['title'],links2[i]['className'],links2[i]['hideText']));
				}
	

				var br = new Element('br',{'className':'clear'});

				var footer = new Element('p',{});
				footer.update('Or copy the link below:');

				var textArea = new Element('textarea',{'className':'copy_bookmark','onfocus':fieldFocus});
				textArea.update(theHref);
				
				list1 = $(list1);
				list2 = $(list2);
				
				var rssTechnorati = list1.getElementsBySelector('.bookmark_technorati')[0];
				var rssTechnoratiURL = 'http://technorati.com/faves?add='+ theHref;
				
				Event.observe(rssTechnorati, "click", function(e) {
					addRssPop(980, 460, rssTechnoratiURL);
					Event.stop(e);
				});
				
				
				var rssAol = list1.getElementsBySelector('.bookmark_aol')[0];
				var rssAolURL = 'http://feeds.my.aol.com/add.jsp?url='+ theHref;
				
				Event.observe(rssAol, "click", function(e) {
					addRssPop(980, 460, rssAolURL);
					Event.stop(e);
				});
				
				var rssGoogle = list2.getElementsBySelector('.rss_google')[0];
				var rssGoogleURL = 'http://fusion.google.com/add?feedurl='+ theHref;
				
				Event.observe(rssGoogle, "click", function(e) {
					addRssPop(920, 460, rssGoogleURL);
					Event.stop(e);
				});
				
				var rssYahoo = list2.getElementsBySelector('.bookmark_yahoo')[0];
				var rssYahooURL = 'http://add.my.yahoo.com/rss?url='+ theHref;
				
				Event.observe(rssYahoo, "click", function(e) {
					addRssPop(920, 460, rssYahooURL);
					Event.stop(e);
				});
				
				var rssMsn = list1.getElementsBySelector('.bookmark_msn')[0];
				var rssMsnURL = 'http://my.msn.com/addtomymsn.armx?id=rss&ut='+ theHref;
				
				Event.observe(rssMsn, "click", function(e) {
					addRssPop(980, 460, rssMsnURL);
					Event.stop(e);
				});
	
				contentElement.appendChild(title);
				contentElement.appendChild(description);
				contentElement.appendChild(list1);
				contentElement.appendChild(list2);
				contentElement.appendChild(br);
				contentElement.appendChild(footer);
				contentElement.appendChild(textArea);
			
			}
			
			var classSplit = myOverlay.classNames().toString();
			var floatType = new Array();
			floatType = classSplit.split(" ");
	
			Event.observe(myOverlay, "mouseover", function(cellElement, floatDirection, cellContent) {
				return function (event) {
					new safariHover('over',cellElement, event, function(){
						new FloatingInfo(cellElement, {
							'float':'auto',
							'padding': 2,
							'floatDirection': floatDirection,
							'arrowClass':'float_arrow',
							'overlayClasses':
								{
								'top':'floatType_rss_top',
								'inner':'floatType_rss',
								'bottom':'floatType_rss_bottom'
								},
							'contentRender':  function(contentElement_){
											// this render function is called by the overlay
											renderOverlayRss(contentElement_, theHref);
										 }.bind(this)
						});
				
					});
				};
			}(myOverlay, floatType[2], theHref));

			Event.observe(myOverlay, "focus", function(cellElement, floatDirection, cellContent) {
				return function (event) {
					new safariHover('over',cellElement, event, function(){
						new FloatingInfo(cellElement, {
							'float':'auto',
							'padding': 2,
							'floatDirection': floatDirection,
							'arrowClass':'float_arrow',
							'overlayClasses':
								{
								'top':'floatType_rss_top',
								'inner':'floatType_rss',
								'bottom':'floatType_rss_bottom'
								},
							'contentRender':  function(contentElement_){
											// this render function is called by the overlay
											renderOverlayRss(contentElement_, theHref);
										 }.bind(this)
						});
				
					});
				};
			}(myOverlay, floatType[2], theHref));	
		});
	}

}, false);
	
/* Overlays bootstrap */
Event.observe(window, 'load', function() {
	
	var allOverlays = $$('.myOverlayVideo').map(function(myOverlay){

		var infoBody = myOverlay.getElementsBySelector("div")[0].innerHTML;
		var selectorCell = myOverlay.getElementsBySelector("a")[0];
		
		var classSplit = myOverlay.classNames().toString();
		var floatType = new Array();
		floatType = classSplit.split(" ");

		Event.observe(myOverlay, "mouseover", function(cellElement, floatDirection, cellContent, widthClass) {
			return function (event) {
				
				new safariHover('over',cellElement, event, function(){
					new FloatingInfo(cellElement, {
						'float':'auto',
						'padding': -7,
						'floatDirection': floatDirection,
						'arrowClass':'float_arrow',
						'overlayClasses':
							{
							'top':'floatType_bookmark_top',
							'inner':'floatType_bookmark',
							'bottom':'floatType_bookmark_bottom'
							},
						'widthClass': widthClass,
						'contentRender': cellContent
					});
				});
			};
		}(selectorCell, floatType[2], infoBody, floatType[3]));
         
		Event.observe(myOverlay, "focus", function(cellElement, floatDirection, cellContent, widthClass) {
			return function (event) {
				
				new safariHover('over',cellElement, event, function(){
					new FloatingInfo(cellElement, {
						'float':'auto',
						'padding': -7,
						'floatDirection': floatDirection,
						'arrowClass':'float_arrow',
						'overlayClasses':
							{
							'top':'floatType_bookmark_top',
							'inner':'floatType_bookmark',
							'bottom':'floatType_bookmark_bottom'
							},
						'widthClass': widthClass,
						'contentRender': cellContent
					});
				});
			};
		}(selectorCell, floatType[2], infoBody, floatType[3]));
	});
}, false);

Event.observe(window, 'load', function() {
	
	var allOverlays = $$('.myMyNASAAdd').map(function(myOverlay){

		var infoBody = $(myOverlay.parentNode).getElementsBySelector("div")[0].innerHTML;
		var selectorCell = myOverlay.getElementsBySelector("a")[0];
		
		var classSplit = myOverlay.classNames().toString();
		var floatType = new Array();
		floatType = classSplit.split(" ");

		Event.observe(selectorCell, "mouseover", function(cellElement, floatDirection, cellContent, widthClass) {
			return function (event) {
				
				new safariHover('over',cellElement, event, function(){
					new FloatingInfo(cellElement, {
						'float':'auto',
						'padding': 4,
						'floatDirection': floatDirection,
						'arrowClass':'float_arrow',
						'overlayClasses':
							{
							'top':'floatType_bookmark_top',
							'inner':'floatType_bookmark',
							'bottom':'floatType_bookmark_bottom'
							},
						'widthClass': widthClass,
						'contentRender': cellContent
					});
			
				});
			};
		}(selectorCell, floatType[2], infoBody, floatType[3]));
        Event.observe(selectorCell, "focus", function(cellElement, floatDirection, cellContent, widthClass) {
			return function (event) {
				
				new safariHover('over',cellElement, event, function(){
					new FloatingInfo(cellElement, {
						'float':'auto',
						'padding': 4,
						'floatDirection': floatDirection,
						'arrowClass':'float_arrow',
						'overlayClasses':
							{
							'top':'floatType_bookmark_top',
							'inner':'floatType_bookmark',
							'bottom':'floatType_bookmark_bottom'
							},
						'widthClass': widthClass,
						'contentRender': cellContent
					});
			
				});
			};
		}(selectorCell, floatType[2], infoBody, floatType[3])); 
	});
}, false);

Event.observe(window, 'load', function() {
	
	var allOverlays = $$('.myMyNASABookmarks').map(function(myOverlay){

		var infoBody = myOverlay.getElementsBySelector("span")[0].innerHTML;
		var selectorCell = myOverlay.getElementsBySelector("a")[0];
		
		var classSplit = myOverlay.classNames().toString();
		var floatType = new Array();
		floatType = classSplit.split(" ");

		Event.observe(myOverlay, "mouseover", function(cellElement, floatDirection, cellContent, widthClass) {
			return function (event) {
				new safariHover('over',cellElement, event, function(){
					new FloatingInfo(cellElement, {
						'float':'auto',
						'padding': 0,
						'floatDirection': floatDirection,
						'arrowClass':'float_arrow',
						'overlayClasses':
							{
							'top':'floatType_bookmark_top',
							'inner':'floatType_bookmark myMyNASABookmarks_inner',
							'bottom':'floatType_bookmark_bottom'
							},
						'widthClass': widthClass,
						'contentRender': cellContent
					});
				});
			};
		}(myOverlay, floatType[2], infoBody, floatType[3]));
		Event.observe(myOverlay, "focus", function(cellElement, floatDirection, cellContent, widthClass) {
			return function (event) {
				new safariHover('over',cellElement, event, function(){
					new FloatingInfo(cellElement, {
						'float':'auto',
						'padding': 0,
						'floatDirection': floatDirection,
						'arrowClass':'float_arrow',
						'overlayClasses':
							{
							'top':'floatType_bookmark_top',
							'inner':'floatType_bookmark myMyNASABookmarks_inner',
							'bottom':'floatType_bookmark_bottom'
							},
						'widthClass': widthClass,
						'contentRender': cellContent
					});
				});
			};
		}(myOverlay, floatType[2], infoBody, floatType[3]));
	});


}, false);


	
	var theHrefShare = getmetacontents('dc.identifier');
	var bookmarkTitleShare = getmetacontents('dc.title');
	var documentIdShare = getmetacontents('CMS Document Id');
	var shareTitle = "";
	var shareURL = "";
	var documentId = "";

	theHrefShare=(theHrefShare!=null && theHrefShare!="" && typeof(theHrefShare)!="undefined")?theHrefShare:location.href;
					
	bookmarkTitleShare=(bookmarkTitleShare!=null && bookmarkTitleShare!="" && typeof(bookmarkTitleShare)!="undefined")?bookmarkTitleShare:document.title;

	//Added to strip HTML tags for newsroom pages for twitter
	bookmarkTitleShare = bookmarkTitleShare.replace(/(<([^>]+)>)/ig,"");

	var addthis_config = {
            pubid: "addthisforshare",
            /*services_custom:[{name: "My NASA",url: "http://mynasa.nasa.gov/portal/bookmarks/BookmarkServlet?bookmark_title="+encodeURI(bookmarkTitleShare)+"&bookmark_url="+encodeURI(theHrefShare)+
                                                            "&bookmark_label="+documentIdShare,icon: "http://www.nasa.gov/mynasatemplateimages/redesign/modules/imagegallery/mynasa_1.gif"}],*/
            data_track_clickback: true,
            services_compact:'facebook,twitter,digg,more',
            data_use_flash:true,
            data_use_cookies:false,
            ui_click: true,
            ui_508_compliant:true,
            ui_header_color:"000000"
 
    }

	var addthis_share =  {
			url:theHrefShare,
			title:bookmarkTitleShare,
				 templates: {
                   twitter: '{{title}} - {{url}} (via @NASA)'
               }
	};

	//commented to fix IE problems. uncomment later
	/* function initAddThis() 
     {
          addthis.init()
     }*/

	document.observe('contentloaded', function() {
		if($('url')){
			shareURL = $('url').value;
		}
		if($('titleUrl')){
			shareTitle = $('titleUrl').value;
		}
		if($('documentId')){
			documentId = $('documentId').value;
		}

		/*if(shareURL!=null && shareURL!="" && shareTitle!=null && shareTitle!="" && documentId!=null && documentId!=""){
			addthis_config.services_custom[0].url = "http://mynasa.nasa.gov/portal/bookmarks/BookmarkServlet?bookmark_title="+encodeURI(shareTitle)+"&bookmark_url="+encodeURI(shareURL)+
										"&bookmark_label="+documentId;
		}*/
		
		if(shareURL!=null && shareURL!=""){
			addthis_share.url = shareURL;
		}
		else{
			addthis_share.url = theHrefShare;
		}
	
		if(shareTitle!=null && shareTitle!=""){
			addthis_share.title = shareTitle;
		}else{
			addthis_share.title = bookmarkTitleShare;
		}
//alert("addthis_share.url "+addthis_share.url);
//commented to fix IE problems. uncomment later
//initAddThis();
	});

//Added to fix the 508 issue on the bookmark.php page.  
   document.observe('contentloaded', function() {
	   
		var bookmarkSkipURL = "http://www.addthis.com/bookmark.php?u508=true&username=addthisforshare&url="+encodeURI(theHrefShare)+"&title="+encodeURI(bookmarkTitleShare);
		
		var ulTag = $('utilities_nav');

		if(typeof(ulTag)!='undefined' && ulTag != null){
			if(ulTag.childElements().length > 2){
				var skipTagOnPage = ulTag.childElements()[2].childElements()[0];
				if(skipTagOnPage!=null && skipTagOnPage!="" && typeof(skipTagOnPage)!="undefined" && skipTagOnPage.hasClassName("skiplinklogin")){
					if(skipTagOnPage.childElements().length > 0){
						if(skipTagOnPage.childElements()[0].id!="skipLinkShare"){
							skipTagOnPage.childElements()[0].href='javascript:openUserPref("'+bookmarkSkipURL+'")'
							skipTagOnPage.childElements()[0].id="skipLinkShare";
						}
					}
				}
			}else if(ulTag.childElements().length == 2){
				var skipTagOnPage = ulTag.childElements()[1].childElements()[0];
				if(skipTagOnPage!=null && skipTagOnPage!="" && typeof(skipTagOnPage)!="undefined" && skipTagOnPage.hasClassName("skiplinklogin")){
					if(skipTagOnPage.childElements().length > 0){
						if(skipTagOnPage.childElements()[0].id!="skipLinkShare"){
							skipTagOnPage.childElements()[0].href='javascript:openUserPref("'+bookmarkSkipURL+'")'
							skipTagOnPage.childElements()[0].id="skipLinkShare";
						}
					}
				}
			}
	
		}
	});

Event.observe(window, 'load', function() {
	
	var ulTag = $('utilities_nav');

	if(typeof(ulTag)!='undefined' && ulTag != null){

		var ulChild = ulTag.childElements();
		if(ulChild!=null && typeof(ulChild)!='undefined' && ulChild.length > 1){
			var shareTagOnPage = ulTag.childElements()[1].childElements()[2];

			if(ulTag.childElements().length > 2){
				shareTagOnPage = ulTag.childElements()[2].childElements()[2];
			}

		if(typeof(shareTagOnPage)=="undefined" || (typeof(shareTagOnPage)!="undefined" && !shareTagOnPage.hasClassName("addthis_button_compact"))){


			var liTag1 = "";
			var liTag2 = "";
			var liTag3 = "";
			var liTag = "";

			liTag1 = ulTag.childElements()[0].childElements()[0].innerHTML;
			liTag2 = ulTag.childElements()[1].childElements()[0].innerHTML;

			if(ulChild.length > 2){
				liTag3 = ulTag.childElements()[2].childElements()[0].innerHTML;
			}

			var checkVal = false;

			if(liTag1 == "Bookmark"){
				liTag = ulTag.childElements()[0];
				checkVal = true;
			}else if (liTag2 == "Bookmark")
			{
				liTag = ulTag.childElements()[1];
				checkVal = true;
			}else if(liTag3 == "Bookmark"){
				liTag = ulTag.childElements()[2];
				checkVal = true;
			}


			var footerInfo = null;
			var index1 = "Page Last Updated:".length;
			var index2 = null;
			var footerDate = null;
			var checkDate = Date.parse("Mar 28 2008");
			if($('footercol1')){
				footerInfo = $('footercol1').innerHTML;
				
				index2  = footerInfo.indexOf("<BR>");
				if(index2!=null && index2 == -1){
					index2  = footerInfo.indexOf("<br>");
				}
			}
		
			if(index2!=null && index2!=-1){
				footerDate = Date.parse(footerInfo.substring(index1,index2));
			}
		
			if(footerDate!=null && footerDate > checkDate ){
				if(checkVal){
					var hrefShare = getmetacontents('dc.identifier');
					var titleShare = getmetacontents('dc.title');

					hrefShare=(hrefShare!=null && hrefShare!="" && typeof(hrefShare)!="undefined")?hrefShare:location.href;
				
					titleShare=(titleShare!=null && titleShare!="" && typeof(titleShare)!="undefined")?titleShare:document.title;

					var spanShare = new Element('span',{'className':'skiplinklogin'});
					var skipAnc = new Element('a',{'id':'skipLinkShare','href':'javascript:openUserPref("http://www.addthis.com/bookmark.php?u508=true&username=addthisforshare&url='+encodeURI(hrefShare)+'&title='+encodeURI(titleShare)+'")'});
					skipAnc.update('Follow this link to Share this Page');
					spanShare.appendChild(skipAnc);

					var shareAnc = new Element('a',{'href':'#','className':'myOverlayBookmark myOverlayShare bookmark bottom null icons_black icon_share'});
					shareAnc.update('Share');
					

					liTag.childElements()[0].remove();
					

					liTag.insert(spanShare);
					liTag.insert(shareAnc);
				}
			}else{
				var checkVal = false;

				if(liTag1 == "Bookmark"){
					liTag = ulTag.childElements()[0];
					checkVal = true;
				}else if (liTag2 == "Bookmark")
				{
					liTag = ulTag.childElements()[1];
					checkVal = true;
				}else if(liTag3 == "Bookmark"){
					liTag = ulTag.childElements()[2];
					checkVal = true;
				}
				if(checkVal){
					var allOverlays = $$('.myOverlayBookmark').map(function(myOverlay){
					
						var theHref = myOverlay.href;
						var classSplit = myOverlay.classNames().toString();
						var floatType = new Array();
						floatType = classSplit.split(" ");

							
						function renderOverlayBookmarks(contentElement, theHref){
							contentElement.innerHTML = "";
							
							if($('url')){
								theHref = $('url').value;
							}

							function addBookPop(w, h, url){
								window.open(url, '', 'width='+ w +', height='+ h +', toolbar=no, resizable=yes, scrollbars=yes');
							}
							
							if(!Prototype.Browser.WebKit){
								var fieldFocus = "javascript: $$('.copy_bookmark')[0].select();";
							}
						
							if($('titleUrl')){
								var bookmarkTitle = $('titleUrl').value;
							}
							//var bookmarkTitle = document.title;
							if($('documentId')){
								var documentId = $('documentId').value;
							}
							/*var mynasaUrl	=	"http://mynasa.nasa.gov/portal/bookmarks/BookmarkServlet?bookmark_title="+encodeURI(bookmarkTitle)+"&bookmark_url="+encodeURI(theHref)+
												"&bookmark_label="+documentId;*/
							
							var title = new Element('h5',{});
							title.update('Bookmark this');
							
							var description = new Element('p',{});
							description.update('Select a bookmarking site.');
							
							/*var nasaLink = new Element('a',{'className':'rss_mynasa', 'href':mynasaUrl});
							nasaLink.update('MyNASA');*/
							
							function makeListLink(title,classname,hideText){
								var link = new Element('a',{'className':classname,'href':'#'});
								if(hideText){
									var span = new Element('span',{'className':'hide'});
									span.update(title);
									link.insert(span);
								} else {
									link.update(title);
								}
								var li = new Element('li',{});
								li.insert(link);
								return li;
							}

							var links = [
								{className:'bookmark_digg', 'title':'Digg It'},
								{className:'bookmark_delicious', 'title':'del.icio.us'},
								{className:'bookmark_stumble', 'title':'StumbleUpon'},
								{className:'bookmark_technorati', 'title':'Technorati'},
								{className:'bookmark_yahoo', 'title':'Yahoo'},
								{className:'bookmark_facebook', 'title':'Facebook'},
								{className:'bookmark_twitter', 'title':'Twitter'}
							];
							var list = new Element('ul');
							for(var i=0;i<links.length;i++){
								list.insert(makeListLink(links[i]['title'],links[i]['className'],links[i]['hideText']));
							}

							var br = new Element('br',{className:'clear'});
										
							var footer = new Element('p',{});
							footer.update('Or copy the link below:');
							
							var textArea = new Element('textarea',{'className':'copy_bookmark','onfocus':fieldFocus});
							textArea.update(theHref);
							
							list = $(list);
										
							var bookDigg = list.getElementsBySelector('.bookmark_digg')[0];
							var bookDiggURL = 'http://digg.com/submit?phase=2&title=' + encodeURI(bookmarkTitle) + '&url=' + encodeURI(theHref);
							
							Event.observe(bookDigg, "click", function(e) {
								addBookPop(960, 450, bookDiggURL);
								Event.stop(e);
							});		

							var bookDelicious = list.getElementsBySelector('.bookmark_delicious')[0];
							var bookDeliciousURL = 'http://del.icio.us/post?t&v=4&noui&jump=close&title='+ encodeURI(bookmarkTitle) +'&url='+ theHref;
							
							Event.observe(bookDelicious, "click", function(e) {
								addBookPop(750, 450, bookDeliciousURL);
								Event.stop(e);
							});
							
							var bookStumble = list.getElementsBySelector('.bookmark_stumble')[0];
							var bookStumbleURL = 'http://www.stumbleupon.com/submit?title='+ encodeURI(bookmarkTitle) +'&url='+ theHref;
							
							Event.observe(bookStumble, "click", function(e) {
								addBookPop(750, 450, bookStumbleURL);
								Event.stop(e);
							});

							var bookTechnorati = list.getElementsBySelector('.bookmark_technorati')[0];
							var bookTechnoratiURL = 'http://technorati.com/faves?add='+ theHref;
							
							Event.observe(bookTechnorati, "click", function(e) {
								addBookPop(980, 460, bookTechnoratiURL);
								Event.stop(e);
							});
							
							var bookYahoo = list.getElementsBySelector('.bookmark_yahoo')[0];
							var bookYahooURL = 'http://bookmarks.yahoo.com/toolbar/savebm?t='+ encodeURI(bookmarkTitle) +'&u='+ theHref;
							
							Event.observe(bookYahoo, "click", function(e) {
								addBookPop(750, 450, bookYahooURL);
								Event.stop(e);
							});	

							var bookFacebook = list.getElementsBySelector('.bookmark_facebook')[0];
							var bookFacebookURL = 'http://www.facebook.com/sharer.php?t='+ encodeURI(bookmarkTitle) +'&u='+ theHref;
					
							Event.observe(bookFacebook, "click", function(e) {
								addBookPop(750, 450, bookFacebookURL);
								Event.stop(e);
							});	

							var bookTwitter = list.getElementsBySelector('.bookmark_twitter')[0];
							var bookTwitterURL = 'http://twitter.com/home?status='+ theHref +'&title='+ encodeURI(bookmarkTitle);

							Event.observe(bookTwitter, "click", function(e) {
								addBookPop(980, 460, bookTwitterURL);
								Event.stop(e);
							});

							contentElement.appendChild(title);
							contentElement.appendChild(description);
							//contentElement.appendChild(nasaLink);
							contentElement.appendChild(list);
							contentElement.appendChild(br);
							contentElement.appendChild(footer);
							contentElement.appendChild(textArea);
							
						}


						Event.observe(myOverlay, "mouseover", function(cellElement, floatDirection, cellContent, widthClass) {
							return function (event) {
								new safariHover('over',cellElement, event, function(){
									new FloatingInfo(cellElement, {
										'float':'auto',
										'padding': 0,
										'floatDirection': floatDirection,
										'arrowClass':'float_arrow',
										'overlayClasses':
											{
											'top':'floatType_bookmark_top',
											'inner':'floatType_bookmark',
											'bottom':'floatType_bookmark_bottom'
											},
										'widthClass': widthClass,
										'contentRender': function(contentElement_){
															// this render function is called by the overlay
															renderOverlayBookmarks(contentElement_, theHref);
														 }.bind(this)
									});
								});
							};
						}(myOverlay, floatType[2], theHref, floatType[3]));
						Event.observe(myOverlay, "focus", function(cellElement, floatDirection, cellContent, widthClass) {
							return function (event) {
								new safariHover('over',cellElement, event, function(){
									new FloatingInfo(cellElement, {
										'float':'auto',
										'padding': 0,
										'floatDirection': floatDirection,
										'arrowClass':'float_arrow',
										'overlayClasses':
											{
											'top':'floatType_bookmark_top',
											'inner':'floatType_bookmark',
											'bottom':'floatType_bookmark_bottom'
											},
										'widthClass': widthClass,
										'contentRender': function(contentElement_){
															// this render function is called by the overlay
															renderOverlayBookmarks(contentElement_, theHref);
														 }.bind(this)
									});
								});
							};
						}(myOverlay, floatType[2], theHref, floatType[3]));
					});
				}
			}

			newBookmark();
		}
	}
	}
}, false);

Event.observe(window, 'load', function() {
	
	var allOverlays = $$('.myOverlayHelp').map(function(myOverlay){
		var theHref = myOverlay.href;
		var classSplit = myOverlay.classNames().toString();
		var floatType = new Array();
		floatType = classSplit.split(" ");
		var theHelpContents = floatType[4];
		var helpContents = $H({
			'materials_filter_help': $H({
				'title': '<h5>Education Materials Filter</h5>',
				'body': '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>\n'
			 }),
			'popular_content_help': $H({
				'title': '<h5>Popular Content</h5>',
				'body': '<p>These words and phrases are the current most popular searches. The larger the font size, the more frequently the term was searched.</p>\n'
			 }),
			'teaching_materials_help': $H({
				'title': '<h5>Teaching Materials</h5>',
				'body': '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>\n'
			 }),
			'confirm_email_help': $H({
				'title': '',
				'body': '<p>A confirmation email message will be sent to this address asking you to verify your registration.</p>\n'
			 }),
			'comment_on_article_help': $H({
				'title': '<h5>Commenting</h5>',
				'body': '<p>Make your opinion known by adding your comments on this article so other users can read them. Choose any username you wish � your submission can be entirely anonymous.</p>\n'
			 }),
			'satellite_tracking_help': $H({
				'title': '<h5>Hubble Space Telescope</h5>',
				'body': '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>\n' +
				'<a href="">Details</a>\n'
			 }),
			'education_material_types_help': $H({
				'title': '<h5>Lithographs</h5>',
				'body': '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>\n' 
			 }),
			'missions_education_filter_help': $H({
				'title': '<h5>Missions Filter</h5>',
				'body': '<p>Use this filter to quickly narrow your search for NASA missions of interest to you.<br /> Click as many boxes as you wish. As you do, the number of materials will update, showing you the materials that match what you\'re looking for.<br /> Click View Results to see a list of all of the materials.</p>\n'
			 }),
			'nasa_calendar_help': $H({
				'title': '<h5>NASA Calendar</h5>',
				'body': '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>\n' 
			 }),
			'nasa_tv_video_help': $H({
				'title': '<h5>NASA TV &amp; Video</h5>',
				'body': '<p>NASA\'s Video Player is designed to detect your preferred media player and offer video in that format. Videos may play in Windows MediaPlayer, RealPlayer or QuickTime. You may not be able to view all videos in the player unless you have the proper plugins.</p>\n'
			 }),
			'add_panels_help': $H({
				'title': '<h5>Add Panels</h5>',
				'body': '<p>You can add any panel you want to your MyNASA page. Hover your mouse over a panel title to see the description. If you like what you see, hit Add and the panel will appear on the page. We\'ve added a couple for you to get you started.</p>\n'
			 }),
			'mynasa_bookmarks_help': $H({
				'title': '<h5>Bookmarks</h5>',
				'body': '<p>Add NASA site content that you want to read later by hitting the bookmark icon where you see it around the site.</p>\n'
			 }),
			'mynasa_playlists_help': $H({
				'title': '<h5>Playlists</h5>',
				'body': '<p>Add video and audio content that you want to hear later by hitting the bookmark icon where you see it around the site.</p>\n'
			 }),
			'lorem_ipsum_help': $H({
				'title': '<h5>Lorem Ipsum</h5>',
				'body': '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>\n'
			 }),
				'nasa_tv_schedule_help': $H({
				'title': '<h5>NASA TV Schedule</h5>',
				'body': '<p>NASA Television is a multi-channel, digital service transmitted on a C-band U.S. satellite, AMC-18, Transponder 3C, at 105 degrees west longitude, with a downlink frequency of 3760 MHz, and vertical polarization. More info: <a href="http://www.nasa.gov/nasatv">www.nasa.gov/nasatv</a></p>\n'
						
			 })
		});
		
		var infoBody = helpContents[theHelpContents]['title'] + helpContents[theHelpContents]['body'];
		
		Event.observe(myOverlay, "mouseover", function(cellElement, floatDirection, cellContent) {
			return function (event) {
				new safariHover('over',cellElement, event, function(){
					new FloatingInfo(cellElement, {
						'float':'auto',
						'padding': 1,
						'floatDirection': floatDirection,
						'arrowClass': 'float_arrow',
						'overlayClasses':
							{
							'top': 'floatType_popular_top',
							'inner': 'floatType_popular',
							'bottom': 'floatType_popular_bottom'
							},
						'contentRender': cellContent
					});
				});
			};
		}(myOverlay, floatType[2], infoBody));
	});
}, false);

/*
document.observe('contentloaded', function() {
	var allOverlays = $$('.myOverlayLogin').map(function(myOverlay){
		var loginContents = $H({
			'login_error': $H({
				'title': '<h5>Error!</h5>',
				'body': '<p>Your name and password do not match our records. Please re-enter.</p>\n<p><a href="#" class="errorGetPassword">&rsaquo; Forgot Username<br />or Password?</a></p>'
			 }),
			'password_retrieval': $H({
				'title': '<h5>Password Retrieval</h5>',
				'body': '<p>Please enter your email address and we will send you an email with your Sign in information.</p>\n <form><p><input type="text" value="" name="" class="password_retrieval_box" /></p><p><input type="image" src="/templateimages/redesign/modules/forms/small_grey_submit.gif" value="" name="submit" /></p></form>'
			 }),
			'password_retrieval_error': $H({
				'title': '<h5>Password Retrieval</h5>',
				'body': '<p>Please enter your email address and we will send you an email with your Sign in information.</p>\n <form><p><input type="text" value="" name="" class="password_retrieval_box" /></p><p><input type="image" src="/templateimages/redesign/modules/forms/small_grey_submit.gif" value="" name="submit" /></p></form><p class="password_retrieval_error_msg">The email address you have entered is incorrect. Please try again</p>'
			 }),
			'registration_page_error': $H({
				'title': '',
				'body': '<p>The user name you selected is already taken.</p><p>Try something different.</p>\n'
			 })
		});

		var infoBody =  loginContents['login_error']['title'] + loginContents['login_error']['body'];

		_displayError = function(){
			new safariHover('over',myOverlay, "mouseover", function(){
				new FloatingInfo(myOverlay, {
					'float':'auto',
					'padding': 2,
					'floatDirection': 'bottom',
					'arrowClass':'float_arrow',
					'overlayClasses':
						{
						'top':'floatType_error_top',
						'inner':'floatType_error',
						'bottom':'floatType_error_bottom'
						},
					'contentRender': infoBody
				});
		
			});	
		};
		
		var url = '../temp-resources/scripts/login.php';

		Event.observe(myOverlay, "click", function(url) {
			return function (event) {
				var form = $('login_form');
				var formUserInput = form['user'];
				var formPassInput = form['pass'];
				var myRequest = new Ajax.Request( url, 
				{
					method:'post',
					postBody:'user=' + $('user').getValue() + '&pass=' + $('pass').getValue(),
					onSuccess:function(transport)
					{
						if(transport.responseText != 'error'){
							window.location = transport.responseText;
						}else{
							_displayError();
						}
					}
				});
				Event.stop(event);
				return false;
			};
			
			
		}(url));
	});
}, false);*/

/*ADDED NEW for overlay LOGIN*/

Event.observe(window, 'load', function() {
	
	var allOverlays = $$('.myOverlayLogin').map(function(myOverlay){
		
		var theHref = myOverlay.href;
		var classSplit = myOverlay.classNames().toString();
		var floatType = new Array();
		floatType = classSplit.split(" ");

			
		function renderOverlayLogin(contentElement){
			contentElement.innerHTML = "";
		    
			
			var mynasaUrl	=	"http://mynasa.nasa.gov/portal/site/mynasa/template.REGISTER/";
			var forgotPassUrl = "http://mynasa.nasa.gov/portal/site/mynasa/template.FORGOT_PASSWORD";
			
			var title = new Element('h5',{'id':'mynasah5'});
			title.update('Login to MyNASA');
			
			
			var closelink = new Element('a',{className:'module_close icons_black icon_close','href':'#','id':'closelink'});

			var nasaLink = new Element('a',{'href':mynasaUrl,className:'signup'});
			nasaLink.update('&rsaquo;&nbsp;Sign Up for MyNASA');

			var nasaForgot = new Element('a',{'href':forgotPassUrl,className:'signup'});
			nasaForgot.update('&rsaquo;&nbsp;Forgot Password');
			
			
			var inputtext = new Element('input',{'type':'text','id':'logon','name':'logon','value':''});
			var spaninput = new Element('span');
			spaninput.update('Username:&nbsp;');
				
			
					inputtext.onfocus = function() {   
						// if already cleared, do nothing 
						if (this._cleared) 
							return;   // when this code is executed, "this" keyword will in fact be the field itself 
						this.clear();
						this._cleared = true ;
					}
	

				var inputpass = new Element('input',{'type':'password','id':'password','name':'password','alt':'Password'});
				var spanpass = new Element('span');
				spanpass.update('Password:&nbsp;');

				var inputrealm = new Element('input',{'type':'hidden','id':'realm','name':'realm','value':'realm1'});
			
				
				var gridform =  new Element('form',{'id':'gridLogin','name':'gridLogin','method':'post','action':'http://mynasa.nasa.gov/portal/site/mynasa/template.NASA_LOGIN_PROCESS'});
			
				var loginbtn = new Element('a',{className:'linkbutton_tiny','href':"javascript:gridLoginSubmit();"});
				loginbtn.update('Log In');

				var cancelbtn = new Element('a',{className:'linkbutton_tiny','href':"#",'id':'cancellogin'});
				cancelbtn.update('Cancel');
				
			
			var br = new Element('br',{className:'clear'});
			var br1 = new Element('br',{className:'clear'});
			var br2 = new Element('br',{className:'clear'});

			var ullist = new Element('ul',{className:'loginoverlay'});
			var litag1 = new Element('li',{className:'inputFields'});
			var litag2 = new Element('li',{className:'inputFields'});
			var litag3 = new Element('li',{'id':'loginbtn'});
			var litag4 = new Element('li');
			var litag5 = new Element('li');
			

			
			litag1.insert(spaninput);
			litag1.insert(inputtext);
			
			litag2.insert(spanpass);
			litag2.insert(inputpass);
			
			litag3.insert(loginbtn);
			litag3.insert(cancelbtn);
			
			litag4.insert(nasaLink);
			litag5.insert(nasaForgot);

			ullist.insert(litag1);
			ullist.insert(litag2);
		
			ullist.insert(litag3);
			
			ullist.insert(litag4);
			ullist.insert(litag5);

			gridform.appendChild(ullist);
			gridform.appendChild(inputrealm);
			

			contentElement.appendChild(title);
			contentElement.appendChild(closelink);
			contentElement.appendChild(gridform);
		
					
		}

		Event.observe($("loginnasa"),"click", function(event) {
			event.preventDefault();
		});

		Event.observe(myOverlay, "mousedown", function(cellElement, floatDirection, cellContent, widthClass) {
			return function (event) {
				new safariHover('over',cellElement, event, function(){
					//alert('in mousedown : '+event);
					new FloatingInfo(cellElement, {
						'float':'auto',
						'padding': 0,
						'floatDirection': floatDirection,
						'arrowClass':'float_arrow',
						'overlayClasses':
							{
							'top':'floatType_bookmark_top',
							'inner':'floatType_bookmark',
							'bottom':'floatType_bookmark_bottom'
							},
						'widthClass': widthClass,
						'contentRender': function(contentElement_){
											// this render function is called by the overlay
											renderOverlayLogin(contentElement_);
										 }.bind(this)
					});
				});
			};
		}(myOverlay, floatType[2], theHref, floatType[3]));
		Event.observe(myOverlay, "focus", function(cellElement, floatDirection, cellContent, widthClass) {
			return function (event) {
				new safariHover('over',cellElement, event, function(){
					new FloatingInfo(cellElement, {
						'float':'auto',
						'padding': 0,
						'floatDirection': floatDirection,
						'arrowClass':'float_arrow',
						'overlayClasses':
							{
							'top':'floatType_bookmark_top',
							'inner':'floatType_bookmark',
							'bottom':'floatType_bookmark_bottom'
							},
						'widthClass': widthClass,
						'contentRender': function(contentElement_){
											// this render function is called by the overlay
											renderOverlayLogin(contentElement_);
										 }.bind(this)
					});
				});
			};
		}(myOverlay, floatType[2], theHref, floatType[3]));
	});
}, false);

	
Event.observe(window, 'load', function() {
	
	var allOverlays = $$('.myOverlayError').map(function(myOverlay){

		var classSplit = myOverlay.classNames().toString();
		var floatType = new Array();
		floatType = classSplit.split(" ");
		
		var theErrorContents = floatType[4];
		
		var errorContents = $H({
			'login_error': $H({
				'title': '<h5>Error!</h5>',
				'body': '<p>Your name and password do not match our records. Please re-enter.</p>\n<p><a href="#" class="errorGetPassword">&rsaquo; Forgot Username<br />or Password?</a></p>'
			 }),
			'general_error': $H({
				'title': '<h5>Error!</h5>',
				'body': '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>\n'
			 }),
			'incorrect_email_error': $H({
				'title': '<h5>Error!</h5>',
				'body': '<p>Sorry that email is not vaild.</p>\n'
			 }),
			'password_retrieval': $H({
				'title': '<h5>Password Retrieval</h5>',
				'body': '<p>Please enter your email address and we will send you an email with your Sign in information.</p>\n <form><p><input type="text" value="" name="" class="password_retrieval_box" /></p><p><input type="image" src="/templateimages/redesign/modules/forms/small_grey_submit.gif" value="" name="submit" /></p></form>'
			 }),
			'password_retrieval_error': $H({
				'title': '<h5>Password Retrieval</h5>',
				'body': '<p>Please enter your email address and we will send you an email with your Sign in information.</p>\n <form><p><input type="text" value="" name="" class="password_retrieval_box" /></p><p><input type="image" src="/templateimages/redesign/modules/forms/small_grey_submit.gif" value="" name="submit" /></p></form><p class="password_retrieval_error_msg">The email address you have entered is incorrect. Please try again</p>'
			 }),
			'registration_page_error': $H({
				'title': '',
				'body': '<p>The user name you selected is already taken.</p><p>Try something different.</p>\n'
			 })
		});

		var infoBody =  errorContents[theErrorContents]['title'] + errorContents[theErrorContents]['body'];

		Event.observe(myOverlay, "mousedown", function(cellElement, floatDirection, cellContent) {
			return function (event) {
				new safariHover('over',cellElement, event, function(){
					new FloatingInfo(cellElement, {
						'float':'auto',
						'padding': 2,
						'floatDirection': floatDirection,
						'arrowClass':'float_arrow',
						'overlayClasses':
							{
							'top':'floatType_error_top',
							'inner':'floatType_error',
							'bottom':'floatType_error_bottom'
							},
						'contentRender': cellContent
					});
				});
			};
		}(myOverlay, floatType[2], infoBody));
	});
}, false);

var mouseOverClassify = Class.create();
mouseOverClassify.prototype = { 
	initialize: function(options){
		//
		// Note: Positioning-based logic does not work for elements which are heavily z-indexed and overlapping (like StackedDeck)
		// in those cases, options must have ignore_position set to true
		//
		this.options = {};
		if(typeof(options)=='object' && options!=null){
			this.options = options;
		} else {
			this.options['ignore_position'] = false;
		}
		this.options['ignore_position'] = true;
	},
	classify: function(element, nameOfClass) {
		Event.observe(element, "mouseover",
			function(e){
				if(this.options['ignore_position']==true){
					if(typeof(this.options['adderFunction'])=='function'){
						this.options['adderFunction'](element);
					} else {
						element.addClassName(nameOfClass);
					}
				} else {
					var IsItIn = Position.within(element, Event.pointerX(e), Event.pointerY(e));
					if(IsItIn && !element.ItIsIn) {
						element.ItIsIn = true;
						if(typeof(this.options['adderFunction'])=='function'){
							this.options['adderFunction'](element);
						} else {
							element.addClassName(nameOfClass);
						}
					}
				}
				Event.stop(e);
			}.bind(this)
		);
		Event.observe(element, "mouseout",
			function(e){
				if(this.options['ignore_position']==true){
					if(typeof(this.options['removerFunction'])=='function'){
						this.options['removerFunction'](element);
					} else {
						element.removeClassName(nameOfClass);
					}
				} else {
					var IsItIn = Position.within(element, Event.pointerX(e), Event.pointerY(e));
					if(!IsItIn && element.ItIsIn) {
						element.ItIsIn = false;
						if(typeof(this.options['removerFunction'])=='function'){
							this.options['removerFunction'](element);
						} else {
							element.removeClassName(nameOfClass);
						}
					}
				}
				Event.stop(e);
			}.bind(this)
		);
	}
};


/* scan for generic selects to skin */
Event.observe(window, 'load', function() {
	
	if ($$('.select_dropdown')[0]) {
		var allDropDowns = $$('.select_dropdown').map(function(elm){
			if (detectBrowser.whichBrowser() != 'ie') {
				var classSplit = elm.parentNode.classNames().toString();
				var classType = new Array();
				classType = classSplit.split(" ");

				return new SkinnedSelect(elm.parentNode, elm, function(){
					window.location.href = elm.value;
				}, '', classType[0]);
			}
			else {
				elm.removeClassName('select_dropdown');
				elm.removeClassName('hide');
				elm.addClassName('select_dropdown_ie');
				Event.observe(elm, "change", function(e){
					window.location.href = elm.value;
					Event.stop(e);
				});
			}
		});
	}
}, false);

/* text size adjuster 
document.observe ('contentloaded', function(){
	// find each text adjuster, find its adjustee (thing to be adjusted in size), and 
	// listen for clicks and adjust size appropriately.

	$$('.text_adjust').each(function(adjuster){
		var adjustee = adjuster.up().getElementsBySelector('.text_adjust_me')[0];
		if(adjustee){
			var inTheMiddle = true;
			var inTheMax = false;
			var inTheMin = false;
			var adjustBox = adjuster;
			var boxToAdjust = adjustee;
			var growButton = adjustBox.getElementsByClassName('icon_plus')[0];
			var shrinkButton = adjustBox.getElementsByClassName('icon_minus')[0];

			Event.observe (growButton, 'click', function(ev) {
				if(inTheMiddle == true) {
					boxToAdjust.addClassName('article_grow');
					growButton.addClassName('icon_plus_inactive');
					inTheMiddle = false;
					inTheMax = true;
				} else 
				if(inTheMin == true) {
					boxToAdjust.removeClassName('article_shrink');
					shrinkButton.removeClassName('icon_minus_inactive');
					inTheMiddle = true;
					inTheMin = false;
				}
				ev.stop();
				return false;
			}, false);
			Event.observe (shrinkButton, 'click', function(ev) {
				if(inTheMiddle == true) {
					boxToAdjust.addClassName('article_shrink');
					shrinkButton.addClassName('icon_minus_inactive');
					inTheMiddle = false;
					inTheMin = true;
				} else 
				if(inTheMax == true) {
					boxToAdjust.removeClassName('article_grow');
					growButton.removeClassName('icon_plus_inactive');
					inTheMiddle = true;
					inTheMax = false;
				}
				ev.stop();
				return false;
			}, false);			
		}
	});

});*/

/* text size adjuster */
var inTheMiddle = true;
var inTheMax = false;
var inTheMin = false;

function textSizeAdjuster(click){
  // find each text adjuster, find its adjustee (thing to be adjusted in size), and
  // listen for clicks and adjust size appropriately.
  $$('.text_adjust').each(function(adjuster){
    var adjustee = adjuster.up().getElementsBySelector('.text_adjust_me')[0];
    if(adjustee){
      var adjustBox = adjuster;
      var boxToAdjust = adjustee;
      var growButton = adjustBox.getElementsByClassName('icon_plus')[0];
      var shrinkButton = adjustBox.getElementsByClassName('icon_minus')[0];
      if(click == 'grow') {
        if(inTheMiddle == true) {
          boxToAdjust.addClassName('article_grow');
          growButton.addClassName('icon_plus_inactive');
          inTheMiddle = false;
          inTheMax = true;
        } else
        if(inTheMin == true) {
          boxToAdjust.removeClassName('article_shrink');
          shrinkButton.removeClassName('icon_minus_inactive');
          inTheMiddle = true;
          inTheMin = false;
        }
      }
      if (click == 'shrink') {
        if(inTheMiddle == true) {
          boxToAdjust.addClassName('article_shrink');
          shrinkButton.addClassName('icon_minus_inactive');
          inTheMiddle = false;
          inTheMin = true;
        } else
        if(inTheMax == true) {
          boxToAdjust.removeClassName('article_grow');
          growButton.removeClassName('icon_plus_inactive');
          inTheMiddle = true;
          inTheMax = false;
        }
      }
    }
  });
}


/*

	Filters with counters:
	
	Note1: this code looks for elements with class .filterset and creates numeric filters out of them
	Note2: the entire thing should be inside of an element .filter_container if you don't want the code 
	       to confuse various co-existing counters on the same page. Make sure to encapsulate filters 
	       this way or just use counters every time.
	Note3: A visual counter resides inside of an element .totalweight which should either be a descendent 
	       of .filterset or should be a nearby sibling or 'cousin' node. In either case, they should both 
	       share a common .filter_container ancestor in order not to confuse co-existing counters on the 
	       same page.

*/
document.observe("contentloaded",function(){
	$$('.filterset').each(function(filterSetContainer){
		var setNumOnce = false;
		var found = false;
		var p = filterSetContainer;
		while(found==false){
			counterElement = p.getElementsBySelector(".totalweight")[0];
			if(p.hasClassName("filter_container") || p.nodeName=='BODY' || p.nodeName=='body'){
				// we've gone too far up the ancestry chain and there is no visual counter associated with this filter.
				counterElement = null;
				found = true;
			} else if(counterElement && counterElement.hasClassName('totalweight')){
				found = true;
			} else {
				p = p.up();
			}
			// if we've found element.totalweight, we'll be exiting here, else we move up the ancestry chain
		}
		if(counterElement){
			var pc = new PrettyCounter(counterElement,4,0,true);
			var educators_filter = new SetFilter(filterSetContainer,function(updateText){
				pc.setNum(parseInt(updateText),!setNumOnce);
				setNumOnce = true;
			},true);
		}
	});
});

// detect any scrollbars
document.observe("contentloaded",function(){
	var sFactory = new ScrollFactory();
});

/* Search results dropdown */
Event.observe(window, 'load', function() {
	if($$('select.browse_relevance').length > 0){
		var dds = new SkinnedSelect($$('select.browse_relevance')[0].parentNode,$$('select.browse_relevance')[0], function(){
			if($$('select.browse_relevance')[0].value != 0) {
				document.location.href = "search_results.html?sort=" + $$('select.browse_relevance')[0].value;
			}
		},'','white');
	}
}, false);

/*
Event.observe(window, 'load', function() {
 var faqpage = $$('.hideanswer');
 if(faqpage != null){
     showfaq('1');
    }
},false);
*/

Event.observe(window, 'load', function() {
 var nasalogo = $$('.nasa_logo');
 if(nasalogo != null){
        if(nasalogo[0] != null && nasalogo[0].readAttribute('href') != null) {
            nasalogo[0].writeAttribute("href","/home/index.html"); 
        } 
    }
},false);




/*iCal Calendar Overlay*/
Event.observe(window, 'load', function() {
	if($$('.myOverlayCalendar')){
		var allOverlays = $$('.myOverlayCalendar').map(function(myOverlay){
			
			var theHref = myOverlay.href;

			function renderOverlayRss(contentElement, theHref){
				contentElement.innerHTML = "";
				
				function addRssPop(w, h, url){
					window.open(url, '', 'width='+ w +', height='+ h +', toolbar=no, resizable=yes, scrollbars=yes');
				}
				
				if(!Prototype.Browser.WebKit){
					var fieldFocus = "javascript: $$('.iCal_bookmark')[0].select();";
				}
			
				var rssTitle = document.title;
				
				var title = new Element('h5',{});
				title.update("Subscribe/Import Calendar Events");
				
				var description = new Element("p",{});
				description.update('');


				function makeListLink(title,classname,hideText){
					var link = new Element('a',{'className':classname,'href':'#'});
					if(hideText){
						var span = new Element('span',{'className':'hide'});
						span.update(title);
						link.insert(span);
					} else {
						link.update(title);
					}
					var li = new Element('li',{});
					li.insert(link);
					return li;
				}

				var links1 = [
					{className:'calendar_msn',title:'Download'},
					{className:'calendar_aol',title:'Help'}
				];
				var list1 = new Element('ul',{'className':'rss_left_ul'});
				for(var i=0;i<links1.length;i++){
					list1.insert(makeListLink(links1[i]['title'],links1[i]['className'],links1[i]['hideText']));
				}
							
				
				var br = new Element('br',{'className':'clear'});

				var footer = new Element('p',{});
				footer.update('Copy Subscribe Link');

				var textArea = new Element('textarea',{'className':'iCal_bookmark','onfocus':fieldFocus});
				textArea.update(theHref);
				
				list1 = $(list1);
				//list2 = $(list2);
				
				
				
				
				var rssAol = list1.getElementsBySelector('.calendar_aol')[0];
				var rssAolURL = 'http://www.nasa.gov/ical/';
				
				Event.observe(rssAol, "click", function(e) {
					addRssPop(980, 460, rssAolURL);
					Event.stop(e);
				});
				
								
				var rssMsn = list1.getElementsBySelector('.calendar_msn')[0];
				var rssMsnURL = theHref;
				
				Event.observe(rssMsn, "click", function(e) {
					addRssPop(980, 460, rssMsnURL);
					Event.stop(e);
				});
	
				contentElement.appendChild(title);
				contentElement.appendChild(description);
				contentElement.appendChild(list1);
				//contentElement.appendChild(list2);
				contentElement.appendChild(br);
				contentElement.appendChild(footer);
				contentElement.appendChild(textArea);
			
			}
			
			var classSplit = myOverlay.classNames().toString();
			var floatType = new Array();
			floatType = classSplit.split(" ");
	
			Event.observe(myOverlay, "mouseover", function(cellElement, floatDirection, cellContent) {
				return function (event) {
					new safariHover('over',cellElement, event, function(){
						new FloatingInfo(cellElement, {
							'float':'auto',
							'padding': 2,
							'floatDirection': floatDirection,
							'arrowClass':'float_arrow',
							'overlayClasses':
								{
								'top':'floatType_rss_top',
								'inner':'floatType_rss',
								'bottom':'floatType_rss_bottom'
								},
							'contentRender':  function(contentElement_){
											// this render function is called by the overlay
											renderOverlayRss(contentElement_, theHref);
										 }.bind(this)
						});
				
					});
				};
			}(myOverlay, floatType[2], theHref));

			Event.observe(myOverlay, "focus", function(cellElement, floatDirection, cellContent) {
				return function (event) {
					new safariHover('over',cellElement, event, function(){
						new FloatingInfo(cellElement, {
							'float':'auto',
							'padding': 2,
							'floatDirection': floatDirection,
							'arrowClass':'float_arrow',
							'overlayClasses':
								{
								'top':'floatType_rss_top',
								'inner':'floatType_rss',
								'bottom':'floatType_rss_bottom'
								},
							'contentRender':  function(contentElement_){
											// this render function is called by the overlay
											renderOverlayRss(contentElement_, theHref);
										 }.bind(this)
						});
				
					});
				};
			}(myOverlay, floatType[2], theHref));	
		});
	}

}, false);

/* iCal Calendar Overlay End */


/*----------- JS TO DETECT FLASH PLUGIN START -------------*/
/*This is the same framework used by ondemand video to detect plugin but just has the flash detection*/

var PluginFactory=function(){this.isInstalled=function(name){return Plugin.getInfo(name).isInstalled;}
this.getVersion=function(name){return Plugin.getInfo(name).version;}
this.getInfo=function(name){var info=Plugin.PLUGINS[name];var isInstalled=false;var version=null;if(supportsNavigatorPlugins()){var plugin=findNavigatorPluginByName((name=="RealPlayer")?"RealPlayer Version Plugin":name);if(plugin){isInstalled=true;version=getVersionFromPlugin(plugin);}}else{isInstalled=hasActiveXObject(Plugin.PLUGINS[name]&&Plugin.PLUGINS[name].progID);if(isInstalled){if(Plugin.PLUGINS[name].getActiveXVersionInfo){version=Plugin.PLUGINS[name].getActiveXVersionInfo();}else{var progID=getProgIdForActiveXObject(Plugin.PLUGINS[name].progID);version=getVersionFromPlugin(progID);}}else{version=getActiveXPluginByClassId(Plugin.PLUGINS[name]&&Plugin.PLUGINS[name].classID);if(version)version=version.replace(/,/g,".");isInstalled=(version!=undefined);}}
var result={};for(var i in info){result[i]=info[i];}
result["isInstalled"]=isInstalled;result["version"]=version;result["name"]=name;return result;}
this.embed=function(plugin,options,target){options=options||{};var embedOptions=Object.extend({},options);var src=embedOptions.src;delete embedOptions.src;var id=embedOptions.id;delete embedOptions.id;var name=embedOptions.name||id;delete embedOptions.name;var width=embedOptions.width;delete embedOptions.width;var height=embedOptions.height;delete embedOptions.height;var type=embedOptions.type||(Plugin.PLUGINS[plugin]&&Plugin.PLUGINS[plugin].mimeType)||"";delete embedOptions.type;var activeXType=embedOptions.activeXType||(Plugin.PLUGINS[plugin]&&Plugin.PLUGINS[plugin].activeXType)||type;delete embedOptions.activeXType;var forceEmbedTag=(Plugin.PLUGINS[plugin]&&Plugin.PLUGINS[plugin].forceEmbedTag&&Plugin.PLUGINS[plugin].forceEmbedTag==true)?true:false;var embedOptions=Object.extend(((Plugin.PLUGINS[plugin]&&Plugin.PLUGINS[plugin].standardEmbedAttributes)||{}),embedOptions);switch(plugin){case"Flash":if(!supportsNavigatorPlugins()){embedOptions.movie=src;src=null;}
break;default:break;}
var html="";if(supportsNavigatorPlugins()||forceEmbedTag){html+='<embed'+getAttributeHtml("src",src)+getAttributeHtml("id",id)+getAttributeHtml("name",name)+getAttributeHtml("width",width)+getAttributeHtml("height",height)+getAttributeHtml("pluginspage",Plugin.PLUGINS[plugin]&&Plugin.PLUGINS[plugin].pluginsPage)+getAttributeHtml("type",type);for(var i in embedOptions){html+=' '+i+'="'+embedOptions[i]+'"';}
html+='></embed>\n';}else{html+='<object classid="clsid:'+(Plugin.PLUGINS[plugin]&&Plugin.PLUGINS[plugin].classID)+'"';html+=getAttributeHtml("id",id)+getAttributeHtml("name",name)+getAttributeHtml("width",width)+getAttributeHtml("height",height)+getAttributeHtml("codebase",(Plugin.PLUGINS[plugin]&&Plugin.PLUGINS[plugin].codeBase))+getAttributeHtml("type",activeXType)+'>\n';html+=(src)?'  <param name="src" value="'+src+'">\n':'';for(var i in embedOptions){html+='  <param name="'+i+'" value="'+embedOptions[i]+'" />';}
html+='</object>\n';}
if(target){if(typeof target=="string")target=document.getElementById(target);target.innerHTML=html;}else{document.write(html);}}
var getAttributeHtml=function(name,value){return(value)?(" "+name+"=\""+value+"\""):"";}
this.PLUGINS={"Director":{description:"Macromedia Director",progID:["SWCtl.SWCtl.11","SWCtl.SWCtl.10","SWCtl.SWCtl.9","SWCtl.SWCtl.8","SWCtl.SWCtl.7","SWCtl.SWCtl.6","SWCtl.SWCtl.5","SWCtl.SWCtl.4"],classID:"166B1BCA-3F9C-11CF-8075-444553540000",pluginsPage:"http://www.macromedia.com/shockwave/download/",codeBase:"http://download.macromedia.com/pub/shockwave/cabs/director/sw.cab#version=8,5,1,0",mimeType:"application/x-director"},"Flash":{description:"Macromedia Shockwave Flash",progID:["ShockwaveFlash.ShockwaveFlash.9","ShockwaveFlash.ShockwaveFlash.8.5","ShockwaveFlash.ShockwaveFlash.8","ShockwaveFlash.ShockwaveFlash.7","ShockwaveFlash.ShockwaveFlash.6","ShockwaveFlash.ShockwaveFlash.5","ShockwaveFlash.ShockwaveFlash.4"],classID:"D27CDB6E-AE6D-11CF-96B8-444553540000",pluginsPage:"http://www.macromedia.com/go/getflashplayer",codeBase:"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0",mimeType:"application/x-shockwave-flash",standardEmbedAttributes:{quality:"high"},acceptedMimeTypes:[{type:"application/x-shockwave-flash",suffixes:"swf"},{type:"application/futuresplash",suffixes:"spl"}]}}
var supportsNavigatorPlugins=function(){return(navigator.plugins&&(navigator.plugins.length>0));}
var supportsActiveX=function(){return((typeof'ActiveXObject'!='undefined')&&(navigator.userAgent.indexOf('Win')!=-1));}
var getIEClientCaps=function(){var clientcaps=document.getElementById("__Plugin_ClientCaps");if(!clientcaps){var clientcaps=document.createElement("DIV");clientcaps.id="__Plugin_ClientCaps";if(clientcaps.addBehavior){clientcaps.addBehavior("#default#clientCaps");document.body.appendChild(clientcaps);}
clientcaps=document.getElementById("__Plugin_ClientCaps");}
return clientcaps;}
var getActiveXPluginByClassId=function(classID){if(!classID)return null;if(!classID.match(/{[^}]+}/))classID="{"+classID+"}";var clientcaps=getIEClientCaps();try{var result=clientcaps.getComponentVersion(classID,"ComponentID")
return result||null;}catch(err){}
return null;}
var hasActiveXObject=function(progID){progID=getProgIdForActiveXObject(progID);return(progID!=null);}
var getProgIdForActiveXObject=function(progID){if(!progID)return null;for(var i=0;i<progID.length;i++){try{var obj=new ActiveXObject(progID[i]);return progID[i]||null;}
catch(e){}}
return null;}
var getVersionFromPlugin=function(plugin){if(!plugin.name)plugin={name:plugin,description:name};var matches=/[\d][\d\.]*/.exec(plugin.name);if(matches&&plugin.name.indexOf("Java")==-1)return matches[0];matches=/[\d\.]+/.exec(plugin.description);return matches?matches[0]:"";}};if(!window.Plugin){var Plugin=new Object();}
if(!Object.extend){Object.extend=function(destination,source){for(property in source){destination[property]=source[property];}
return destination;}}
Object.extend(Plugin,(new PluginFactory()));

var findNavigatorPluginByName = function(name) {
    if (supportsNavigatorPlugins()) {
      for(var i=0;i<navigator.plugins.length;++i) {
        var plugin = navigator.plugins[i];
        if (plugin.name.indexOf(name) != -1) {
          return plugin;
        }
      }
    }
    return null;
  }

   var supportsNavigatorPlugins = function() {
    return (navigator.plugins && (navigator.plugins.length > 0));
  }

  /*---------------JS TO DETECT FLASH PLUGIN END---------------*/
  
  
  Event.observe(window, 'load', function() {
        var titleDiv = $('homepage_feature_title_bottom_left');
        if(typeof(titleDiv)!='undefined' && titleDiv != null){
		  var innerTitleDiv = $('homepage_feature_title_region');
		  var titleAnc = innerTitleDiv.getElementsBySelector('a#title_text')[0];
		  
		   if(typeof(titleAnc)!='undefined' && titleAnc != null){
			  var titleText=titleAnc.innerHTML.toLowerCase();
			  //alert("Test:"+titleText);
			  if (titleText.indexOf("<br />") > 0 || titleText.indexOf("<br>") > 0 || titleText.indexOf("<br/>") > 0) {
					//alert("Test 1:"+titleAnc.innerHTML);
					titleDiv.setStyle({
							top:'186px'					
					});             
					$('main-feature-container').makePositioned();
					//alert("after");
			  }
		  }
		}
	});
  
  
    Event.observe(window, 'load', function() {
        var btnBacktogalleryElement =  $('btn_backtogallery');
        //alert(btnBacktogalleryElement);
        if (btnBacktogalleryElement) {
           if (btnBacktogalleryElement.hasClassName('icons_gallery icon_back')) {
                   galLink=btnBacktogalleryElement.href;
                   btnBacktogalleryElement.href="javascript:backtogallery('"+galLink+"');";
                }
        }
    });
  
}


/*---------------Date formatter and date validator JS Start---------------*/

/*
 * Date Format 1.2.2
 * (c) 2007-2008 Steven Levithan <stevenlevithan.com>
 * MIT license
 * Includes enhancements by Scott Trenda <scott.trenda.net> and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */
var dateFormat = function () {
	var	token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
		timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
		timezoneClip = /[^-+\dA-Z]/g,
		pad = function (val, len) {
			val = String(val);
			len = len || 2;
			while (val.length < len) val = "0" + val;
			return val;
		};

	// Regexes and supporting functions are cached through closure
	return function (date, mask, utc) {
		var dF = dateFormat;

		// You can't provide utc if you skip other args (use the "UTC:" mask prefix)
		if (arguments.length == 1 && (typeof date == "string" || date instanceof String) && !/\d/.test(date)) {
			mask = date;
			date = undefined;
		}

		// Passing date through Date applies Date.parse, if necessary
		date = date ? new Date(date) : new Date();
		if (isNaN(date)) throw new SyntaxError("invalid date");

		mask = String(dF.masks[mask] || mask || dF.masks["default"]);

		// Allow setting the utc argument via the mask
		if (mask.slice(0, 4) == "UTC:") {
			mask = mask.slice(4);
			utc = true;
		}

		var	_ = utc ? "getUTC" : "get",
			d = date[_ + "Date"](),
			D = date[_ + "Day"](),
			m = date[_ + "Month"](),
			y = date[_ + "FullYear"](),
			H = date[_ + "Hours"](),
			M = date[_ + "Minutes"](),
			s = date[_ + "Seconds"](),
			L = date[_ + "Milliseconds"](),
			o = utc ? 0 : date.getTimezoneOffset(),
			flags = {
				d:    d,
				dd:   pad(d),
				ddd:  dF.i18n.dayNames[D],
				dddd: dF.i18n.dayNames[D + 7],
				m:    m + 1,
				mm:   pad(m + 1),
				mmm:  dF.i18n.monthNames[m],
				mmmm: dF.i18n.monthNames[m + 12],
				yy:   String(y).slice(2),
				yyyy: y,
				h:    H % 12 || 12,
				hh:   pad(H % 12 || 12),
				H:    H,
				HH:   pad(H),
				M:    M,
				MM:   pad(M),
				s:    s,
				ss:   pad(s),
				l:    pad(L, 3),
				L:    pad(L > 99 ? Math.round(L / 10) : L),
				t:    H < 12 ? "a"  : "p",
				tt:   H < 12 ? "am" : "pm",
				T:    H < 12 ? "A"  : "P",
				TT:   H < 12 ? "AM" : "PM",
				Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
				o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
				S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
			};

		return mask.replace(token, function ($0) {
			return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
		});
	};
}();

// Some common format strings
dateFormat.masks = {
	"default":      "ddd mmm dd yyyy HH:MM:ss",
	shortDate:      "m/d/yy",
	mediumDate:     "mmm d, yyyy",
	longDate:       "mmmm d, yyyy",
	fullDate:       "dddd, mmmm d, yyyy",
	shortTime:      "h:MM TT",
	mediumTime:     "h:MM:ss TT",
	longTime:       "h:MM:ss TT Z",
	isoDate:        "yyyy-mm-dd",
	isoTime:        "HH:MM:ss",
	isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
	isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// Internationalization strings
dateFormat.i18n = {
	dayNames: [
		"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
		"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
	],
	monthNames: [
		"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
		"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
	]
};

// For convenience...
Date.prototype.format = function (mask, utc) {
	return dateFormat(this, mask, utc);
};

// Validate Date To Mask v0.1
// (c) 2008 Steven Levithan <http://stevenlevithan.com>; MIT License
// Requires Date Format <http://blog.stevenlevithan.com/archives/date-time-format>

function validateDateToMask (date, mask) {
	var	token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]/g,
		flags = {
			d:    "(?:[1-9]|[12]\\d|3[01])",
			dd:   "(?:0[1-9]|[12]\\d|3[01])",
			ddd:  "(?:" + dateFormat.i18n.dayNames.slice(0,7).join("|") + ")",
			dddd: "(?:" + dateFormat.i18n.dayNames.slice(7).join("|") + ")",
			m:    "(?:[1-9]|1[0-2])",
			mm:   "(?:0[1-9]|1[0-2])",
			mmm:  "(?:" + dateFormat.i18n.monthNames.slice(0,12).join("|") + ")",
			mmmm: "(?:" + dateFormat.i18n.monthNames.slice(12).join("|") + ")",
			yy:   "\\d{2}",
			yyyy: "\\d{4}",
			h:    "(?:[1-9]|1[0-2])",
			hh:   "(?:0[1-9]|1[0-2])",
			H:    "(?:[1-9]|1\\d|2[0-4])",
			HH:   "(?:0[1-9]|1\\d|2[0-4])",
			M:    "(?:\\d|[1-5]\\d|60)",
			MM:   "(?:[0-5]\\d|60)",
			s:    "(?:\\d|[1-5]\\d|60)",
			ss:   "(?:[0-5]\\d|60)",
			l:    "\\d{3}",
			L:    "\\d{2}",
			t:    "[ap]",
			tt:   "[ap]m",
			T:    "[AP]",
			TT:   "[AP]M",
			Z:    "(?:[PMCEA][SDP]T|(?:GMT|UTC)(?:[-+]\\d{4})?)",
			o:    "[-+]\\d{4}",
			S:    "(?:th|st|nd|rd)"
		},
		escape = function (str) {
			return str.replace(/[[\]{}()*+?.\\^$|]/g, "\\$&");
		};
	
	return new RegExp("^" + escape(mask).replace(token, function ($0) {
		return flags[$0];
	}) + "$").test(date);
}
/*---------------Date formatter and date validator JS End---------------*/

/*---------------added for back to gallery---------------*/
function backtogallery(ref){
   docId=document.getElementById('documentId').value;
   setCookie("galleryDocId", docId, null, "/", null, null);
   window.location.href=ref;
}
/*document.observe('contentloaded', function() {
	var btnBacktogallery = $('btn_backtogallery');
	if (btnBacktogallery) {		
	   if (btnBacktogallery.hasClassName('icons_gallery icon_back')) {
		   galLink=btnBacktogallery.href;
		   btnBacktogallery.href="javascript:backtogallery('"+galLink+"');";
		}
	}
});*/
/*---------------End of back to gallery---------------*/

function hideSpinner()
{
	document.getElementById("spinner").style.visibility="hidden";
	document.getElementById("spinner").style.display="none";
	document.getElementById("image_gallery").style.visibility="visible";
	document.getElementById("image_gallery").style.display="block";
	new ImageGallery();
}


/***************************** Added for new Bookmark & Share ********************************/
function newBookmark(){

	if($('utilities_nav')){
		var footerInfo = null;
		var index1 = "Page Last Updated:".length;
		var index2 = null;
		var footerDate = null;
		var checkDate = Date.parse("Mar 28 2008");
		if($('footercol1')){
			footerInfo = $('footercol1').innerHTML;
		
			index2  = footerInfo.indexOf("<BR>");
			if(index2!=null && index2 == -1){
				index2  = footerInfo.indexOf("<br>");
			}
		}
		
		

		if(index2!=null && index2!=-1){
			footerDate = Date.parse(footerInfo.substring(index1,index2));
			
		}



		if(footerDate!=null && footerDate > checkDate ){
			var shareBookmark = $('utilities_nav').getElementsBySelector('.myOverlayBookmark')[0];
			var shareBookmarkJS = $('utilities_nav').getElementsBySelector('.myOverlayShare')[0];
			var liTag =  null;
			var nAgent = navigator.userAgent;
			if(shareBookmark != null && typeof(shareBookmark) != 'undefined'){
				liTag = shareBookmark.up();
				if(nAgent.indexOf('MSIE') !=-1){
					if(!liTag.hasClassName('marginCSS'))
					liTag.addClassName('marginCSS');
				}
			
				Event.observe(shareBookmark, "click", function(e) {
				
				Event.stop(e);
				
				addthis_sendto();
				/*Added to fix the focus error for invisible field in IE*/
						
					/*if(nAgent.indexOf('MSIE') !=-1){
						 var div = $$('div#at16pib div#at16psf')[0];
						 if(div!=null)
						 div.remove();
					}*/
						
				},false);
			}
		}
	}
}

function getmetacontents(mn){ 
  var metas = document.getElementsByTagName('META'); 
  for (var x=0,y=metas.length; x<y; x++) {
   if(metas[x].name == mn){ 
    return metas[x].content; 
   } 
 }
}

/***************************** Added for new Bookmark & Share ********************************/




/*---------------added for home page kids club icon change randomly---------------*/

var KidsClubImages = new Array();
KidsClubImages[0]="/templateimages/redesign/modules/kids_club/icons/411665main_KidsClub.jpg";
KidsClubImages[1]="/templateimages/redesign/modules/kids_club/icons/nkcgraphic1_154x116.jpg";
KidsClubImages[2]="/templateimages/redesign/modules/kids_club/icons/nkcgraphic2_154x116.jpg";
KidsClubImages[3]="/templateimages/redesign/modules/kids_club/icons/nkcgraphic3_154x116.jpg";
KidsClubImages[4]="/templateimages/redesign/modules/kids_club/icons/nkcgraphic4_154x116.jpg";
KidsClubImages[5]="/templateimages/redesign/modules/kids_club/icons/nkcgraphic5_154x116.jpg";
KidsClubImages[6]="/templateimages/redesign/modules/kids_club/icons/nkcgraphic7_154x116.jpg";

function generate_randomnumber(num1,num2)
{

        num1 = parseInt(num1);
        num2 = parseInt(num2);
        if(num1 >= num2)
        {
                alert("Number 2 should be greater than Number 1");
        }
        else
        {
                var generator = Math.random()*(num2-num1);
                generator = Math.round(num1+generator);
        }
        return generator;
}
/*
document.observe('contentloaded', function() {
           var KidsClubImages = new Array();
           KidsClubImages[0]="/templateimages/redesign/modules/kids_club/icons/411665main_KidsClub.jpg";
           KidsClubImages[1]="/templateimages/redesign/modules/kids_club/icons/nkcgraphic1_154x116.jpg";
           KidsClubImages[2]="/templateimages/redesign/modules/kids_club/icons/nkcgraphic2_154x116.jpg";
           KidsClubImages[3]="/templateimages/redesign/modules/kids_club/icons/nkcgraphic3_154x116.jpg";
           KidsClubImages[4]="/templateimages/redesign/modules/kids_club/icons/nkcgraphic4_154x116.jpg";
           KidsClubImages[5]="/templateimages/redesign/modules/kids_club/icons/nkcgraphic5_154x116.jpg";
           KidsClubImages[6]="/templateimages/redesign/modules/kids_club/icons/nkcgraphic7_154x116.jpg";

           var randonNumber=generate_randomnumber("0","6");
           kids_club_home_page_icon_img=$('kids_club_home_page_icon');
           if(kids_club_home_page_icon_img){
		      kids_club_home_page_icon_img.src=KidsClubImages[randonNumber];
		   }
});
*/
/*---------------End of home page kids club icon change---------------*/




var dropdowncontent={
	disableanchorlink: false, //when user clicks on anchor link, should link itself be disabled (always true if "revealbehavior" above set to "click")
 hidedivmouseout: [true, 100], //Set hiding behavior within Drop Down DIV itself: [hide_div_onmouseover?, miliseconds_before_hiding]
	ajaxloadingmsg: "Loading content. Please wait...", //HTML to show while ajax page is being feched, if applicable
	ajaxbustcache: false, //Bust cache when fetching Ajax pages?

	getposOffset:function(what, offsettype){
		return (what.offsetParent)? what[offsettype]+this.getposOffset(what.offsetParent, offsettype) : what[offsettype]
	},

	isContained:function(m, e){
		var e=window.event || e
		var c=e.relatedTarget || ((e.type=="mouseover")? e.fromElement : e.toElement)
		while (c && c!=m)try {c=c.parentNode} catch(e){c=m}
		if (c==m)
			return true
		else
			return false
	},

	show:function(anchorobj, subobj, e){
		if ((!this.isContained(anchorobj, e) || (e && e.type=="click")) && !(window['dropDownMenusDisabled']==true)){
			var e=window.event || e
			if (e.type=="click" && subobj.style.visibility=="visible"){
				subobj.style.visibility="hidden"
				return
			}
			var anchorId=anchorobj.getAttribute("id");
			//alert("anchorId:"+anchorId);
			if(anchorId=='topnav_homelink'){
				document.getElementById('shelf-nav-home').className="nav-home-over";	  
		 	}
			if(anchorId=='topnav_newslink'){
				  document.getElementById('shelf-nav-news').className="nav-news-over";	  
			}
			if(anchorId=='topnav_missionslink'){
				  document.getElementById('shelf-nav-missions').className="nav-missions-over";	  
			}
			if(anchorId=='topnav_multimedialink'){
				  document.getElementById('shelf-nav-multimedia').className="nav-multimedia-over";	  
			}
			if(anchorId=='topnav_connectlink'){
				  document.getElementById('shelf-nav-connect').className="nav-connect-over";	  
			}
			if(anchorId=='topnav_aboutuslink'){
				  document.getElementById('shelf-nav-aboutnasa').className="nav-aboutnasa-over";	  
			}
	
			var horizontaloffset=(subobj.dropposition[0]=="left")? -(subobj.offsetWidth-anchorobj.offsetWidth) : 0 //calculate user added horizontal offset			
			var verticaloffset=(subobj.dropposition[1]=="top")? -subobj.offsetHeight : anchorobj.offsetHeight //calculate user added vertical offset
			//alert(this.getposOffset(anchorobj, "offsetLeft") + horizontaloffset + "px");
			//added this to get the hope anchor position always.
			//var homeanchorObj=document.getElementById('topnav_homelink');
			//subobj.style.left=this.getposOffset(anchorobj, "offsetLeft") + horizontaloffset + "px"			
			subobj.style.left="0px";//this.getposOffset(homeanchorObj, "offsetLeft") + horizontaloffset + "px"			
			//subobj.style.top=((this.getposOffset(homeanchorObj, "offsetTop")+verticaloffset)-2)+"px"
			subobj.style.top=verticaloffset+"px"
			//alert("verticaloffset:"+verticaloffset);
			//alert("offsetTop:"+this.getposOffset(anchorobj, "offsetTop"));
			//subobj.style.top=(this.getposOffset(anchorobj, "offsetTop")+verticaloffset)+"px"
			//subobj.style.clip=(subobj.dropposition[1]=="top")? "rect(auto auto auto 0)" : "rect(0 auto 0 0)" //hide drop down box initially via clipping
			subobj.style.visibility="visible"
			subobj.startTime=new Date().getTime()
			subobj.contentheight=parseInt(subobj.offsetHeight)
			if (typeof window["hidetimer_"+subobj.id]!="undefined") //clear timer that hides drop down box?
				clearTimeout(window["hidetimer_"+subobj.id])
			this.slideengine(subobj, (subobj.dropposition[1]=="top")? "up" : "down")
		}
	},

	curveincrement:function(percent){
		return (1-Math.cos(percent*Math.PI)) / 2 //return cos curve based value from a percentage input
	},

	slideengine:function(obj, direction){
		var elapsed=new Date().getTime()-obj.startTime //get time animation has run
		if (elapsed<obj.glidetime){ //if time run is less than specified length
			var distancepercent=(direction=="down")? this.curveincrement(elapsed/obj.glidetime) : 1-this.curveincrement(elapsed/obj.glidetime)
			var currentclip=(distancepercent*obj.contentheight)+"px"
			obj.style.clip=(direction=="down")? "rect(0 auto "+currentclip+" 0)" : "rect("+currentclip+" auto auto 0)"
			window["glidetimer_"+obj.id]=setTimeout(function(){dropdowncontent.slideengine(obj, direction)}, 10)
		}
		else{ //if animation finished
			obj.style.clip="rect(0 auto auto 0)"
		}
	},

	hide:function(activeobj, subobj, e){
		if ((!dropdowncontent.isContained(activeobj, e)) && !(window['dropDownMenusDisabled']==true)){
			window["hidetimer_"+subobj.id]=setTimeout(function(){
			
			var anchorId=activeobj.getAttribute("id");
			//alert("anchorId:"+anchorId);
			if(anchorId=='topnav_homelink_submenu'){
				document.getElementById('shelf-nav-home').className="nav-home-out";	  
		 	}
			if(anchorId=='topnav_newslink_submenu'){
				  document.getElementById('shelf-nav-news').className="nav-news-out";	  
			}
			if(anchorId=='topnav_missionslink_submenu'){
				  document.getElementById('shelf-nav-missions').className="nav-missions-out";	  
			}
			if(anchorId=='topnav_multimedialink_submenu'){
				  document.getElementById('shelf-nav-multimedia').className="nav-multimedia-out";	  
			}
			if(anchorId=='topnav_connectlink_submenu'){
				  document.getElementById('shelf-nav-connect').className="nav-connect-out";	  
			}
			if(anchorId=='topnav_aboutuslink_submenu'){
				  document.getElementById('shelf-nav-aboutnasa').className="nav-aboutnasa-out";	  
			}
			
				//subobj.style.visibility="hidden"
				//subobj.style.left=subobj.style.top=0
				subobj.style.left=subobj.style.top='-1300px';
				clearTimeout(window["glidetimer_"+subobj.id])
			}, dropdowncontent.hidedivmouseout[1])
		}
	},

	hidediv:function(subobjid){
		document.getElementById(subobjid).style.visibility="hidden"
	},

	ajaxconnect:function(pageurl, divId){
		var page_request = false
		var bustcacheparameter=""
		if (window.XMLHttpRequest) // if Mozilla, IE7, Safari etc
			page_request = new XMLHttpRequest()
		else if (window.ActiveXObject){ // if IE6 or below
			try {
			page_request = new ActiveXObject("Msxml2.XMLHTTP")
			} 
			catch (e){
				try{
				page_request = new ActiveXObject("Microsoft.XMLHTTP")
				}
				catch (e){}
			}
		}
		else
			return false
		document.getElementById(divId).innerHTML=this.ajaxloadingmsg //Display "fetching page message"
		page_request.onreadystatechange=function(){dropdowncontent.loadpage(page_request, divId)}
		if (this.ajaxbustcache) //if bust caching of external page
			bustcacheparameter=(pageurl.indexOf("?")!=-1)? "&"+new Date().getTime() : "?"+new Date().getTime()
		page_request.open('GET', pageurl+bustcacheparameter, true)
		page_request.send(null)
	},

	loadpage:function(page_request, divId){
		if (page_request.readyState == 4 && (page_request.status==200 || window.location.href.indexOf("http")==-1)){
			document.getElementById(divId).innerHTML=page_request.responseText
		}
	},

 init:function(anchorid, pos, glidetime, revealbehavior){
		//alert(anchorid);
		var anchorobj=document.getElementById(anchorid)
		//alert(anchorobj);
		if (anchorobj)
			var subobj=document.getElementById(anchorobj.getAttribute("rel"))
		if (!anchorobj || !subobj)
			return
		//alert(subobj);	
		var subobjsource=anchorobj.getAttribute("rev")
		if (subobjsource!=null && subobjsource!="")
			this.ajaxconnect(subobjsource, anchorobj.getAttribute("rel"))
		subobj.dropposition=pos.split("-")
		subobj.glidetime=glidetime || 1000
		subobj.style.left=subobj.style.top=0
		if (typeof revealbehavior=="undefined" || revealbehavior=="mouseover"){
			anchorobj.onfocus=anchorobj.onmouseover=function(e){dropdowncontent.show(this, subobj, e)}
			anchorobj.onblur=anchorobj.onmouseout=function(e){dropdowncontent.hide(subobj, subobj, e)}
			if (this.disableanchorlink) anchorobj.onclick=function(){return false}
		}/*else if (typeof revealbehavior=="undefined" || revealbehavior=="onfocus"){
			anchorobj.onfocus=function(e){dropdowncontent.show(this, subobj, e)}
			anchorobj.onblur=function(e){dropdowncontent.hide(subobj, subobj, e)}
			if (this.disableanchorlink) anchorobj.onclick=function(){return false}
		}*/
		else
			anchorobj.onclick=function(e){dropdowncontent.show(this, subobj, e); return false}
		if (this.hidedivmouseout[0]==true) //hide drop down DIV when mouse rolls out of it?
			subobj.onmouseout=function(e){dropdowncontent.hide(this, subobj, e)}
	}
}

var topMenu_curr_event=0;
function nextNasaEventsInMenu(){
	//alert("this is a test");
	var nasaeventobj=document.getElementById("menu_nasa_nasaevents");
	var evetn_child_elements=nasaeventobj.getElementsByTagName('li');
	//alert(evetn_child_elements.length);
	topMenu_curr_event=eval(topMenu_curr_event+1);
	if(topMenu_curr_event > eval(evetn_child_elements.length-1)){
	   topMenu_curr_event=0;
	}
	for(var i=0; i<evetn_child_elements.length;i++){
	   var childObj=evetn_child_elements[i];       	   
	   if(i==topMenu_curr_event){
	     childObj.style.display = "block";
	   }else{
	      childObj.style.display = "none";
	   }
	}
	var nasaeventcntobj=document.getElementById("top_menu_event_count");
	//alert(nasaeventcntobj.innerHTML);
	var evntCntTxt=(topMenu_curr_event+1)+" / "+evetn_child_elements.length;
	nasaeventcntobj.innerHTML= evntCntTxt;
	
}
function prevNasaEventsInMenu(){
	//alert("this is a test");
	var nasaeventobj=document.getElementById("menu_nasa_nasaevents");
	var evetn_child_elements=nasaeventobj.getElementsByTagName('li');
	//alert(evetn_child_elements.length);
	topMenu_curr_event=eval(topMenu_curr_event-1);
	if(topMenu_curr_event < 0){
	   topMenu_curr_event=evetn_child_elements.length-1;
	}
	for(var i=0;i<evetn_child_elements.length;i++){
	   var childObj=evetn_child_elements[i];       	   
	   if(i==topMenu_curr_event){
	     childObj.style.display = "block";
	   }else{
	      childObj.style.display = "none";
	   }
	}
	
	var nasaeventcntobj=document.getElementById("top_menu_event_count");
	//alert(nasaeventcntobj.innerHTML);
	var evntCntTxt=(topMenu_curr_event+1)+" / "+evetn_child_elements.length;
	nasaeventcntobj.innerHTML= evntCntTxt;
}

/******** google analytics javascript include*/
document.write('<script type="text/javascript" src="/templateimages/redesign/gsa/federated-analytics.js"></script> ');
/******** google analytics javascript include*/