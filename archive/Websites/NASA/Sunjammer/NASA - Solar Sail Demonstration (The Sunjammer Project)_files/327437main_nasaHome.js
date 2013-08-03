function processBlogRSS(rssxml,noOfItems,module,rsslink)
{
    try
	{

    //alert("rssxml:"+rssxml);
	//alert("noOfItems:"+noOfItems);
	//alert("module:"+module);

	var randomnumberNew=Math.floor(Math.random()*11);
	var completeLiTag="";
	if(module=='blogsModule') {
		completeLiTag = new Element('div',{'id':'tempNasaBlogRss'});
	} else if (module== 'twitterModule'){		
	    completeLiTag = new Element('ul',{'id':'tempNasaTwitterRss','className':'small_gray_scroll'});
	}

    var chanElement = rssxml.getElementsByTagName("channel")[0];
    var itemElements = rssxml.getElementsByTagName("item");
	var mainTags	=	'';
	 
	if (itemElements.length < 1)
	{
	  throw err;
	} 
	
    if(noOfItems=='' || noOfItems=='undefined' || noOfItems==null || noOfItems>itemElements.length){ 
		noOfItems = itemElements.length;
	}
	
		
	   	if(itemElements.length>0){
		
     		for (var i=0; i<noOfItems; i++)
			{
                
		    
                   		
	            var tmpTitle = null;
	            var tmpDesc	=	null;
	            var tmpPubDate	=null;
	            var tmpComments	=null;
	            var tmpLink= null;
	            var tmpLinkChild;

                      if (module=='blogsModule'){
	                
	               tmpTitle = itemElements[i].getElementsByTagName("title")[0];
		        tmpLink = itemElements[i].getElementsByTagName("link")[0];
		        tmpDesc = itemElements[i].getElementsByTagName("description")[0];
		        tmpPubDate = itemElements[i].getElementsByTagName("pubDate")[0];
 	    
	            
	   	        var liTag = new Element('li',{});
		        var divTag = new Element('div',{});
		        var spanTag	= new Element('span',{'className':'datefield'});
		        var pTag	= new Element('p',{});
		
     	         var tmpTitleChild = tmpTitle.childNodes[0].nodeValue;
		        //alert(tmpTitleChild.length);
		        if (tmpTitleChild.length > 38)
		        {
		                  tmpTitleChild=tmpTitleChild.substring(0,34);
		                  if (tmpTitleChild.lastIndexOf(" ") > -1)
		                  {tmpTitleChild=tmpTitleChild.substring(0,tmpTitleChild.lastIndexOf(" "));}
		                   tmpTitleChild+=" ...";
		        }
		
		        if (tmpLink && tmpLink.childNodes[0])
		        {
		           tmpLinkChild = tmpLink.childNodes[0].nodeValue;
		        }
		        var tmpPubChild = tmpPubDate.childNodes[0].nodeValue;
		        var tmpDescChild = tmpDesc.childNodes[0].nodeValue;
		        var indexDot = tmpDescChild.indexOf('<br/>');
	
		        if(indexDot!=-1)
		        {
			        tmpDescChild = tmpDescChild.substring(0,indexDot);
		        }

	          	//alert(tmpDescChild.length);
		        if (tmpDescChild.length > 54)
		        {
		                  tmpDescChild=tmpDescChild.substring(0,50);
		                  if (tmpDescChild.lastIndexOf(" ") > -1)
		                  {tmpDescChild=tmpDescChild.substring(0,tmpDescChild.lastIndexOf(" "));}
		                   tmpDescChild+=" ...";
		        }
		
	   	         spanTag.update(timeDifference(tmpPubChild,'blogsModule'));
		         pTag.update(tmpDescChild);
		         
                       if (tmpLink && tmpLink.childNodes[0])
		         {
			
		             var anchorTag	=	new Element('a',{'className':'titlefield','href':tmpLinkChild});
		             var boldTag	=	new Element('b',{});
		             anchorTag.update(tmpTitleChild);
		             liTag.insert(divTag);
                           divTag.insert(boldTag);
		             boldTag.insert(anchorTag);
		             divTag.insert(spanTag);
			      liTag.insert(pTag);
			 
			  }
		         else
		         {
				var spanTitle	=	new Element('b',{'className':'titlefield'});
		              spanTitle.update(tmpTitleChild);
		              liTag.insert(divTag);
                            divTag.insert(spanTitle);
		              divTag.insert(spanTag);
		              liTag.insert(pTag);
			  }

	   	             completeLiTag.appendChild(liTag);
                       }

                       if (module=='twitterModule'){
	                
                      
	               
                      tmpTitle= itemElements[i].getElementsByTagName("title")[0];
                                           

		        tmpLink = itemElements[i].getElementsByTagName("link")[0];
		        tmpPubDate = itemElements[i].getElementsByTagName("pubdate")[0];
 	    
	            
	   	        var liTag = new Element('li',{});
		        var divTag = new Element('div',{});
		        var spanTag	= new Element('span',{'className':'datefield'});
		        
		
     	               var tmpTitleChild1 = tmpTitle.childNodes[0].nodeValue;
                      
                      


                     var tmpTitleChild;
                      


		        if (tmpLink && tmpLink.childNodes[0])
		        {
		           tmpLinkChild = tmpLink.childNodes[0].nodeValue;
		        }
		        var tmpPubChild = tmpPubDate.childNodes[0].nodeValue;
		        
	   	         if (tmpLink && tmpLink.childNodes[0])
		         {
			      
                           //tmpTitleChild = tmpTitleChild1.replace(/(f|ht)tps?:\/\/.+?(\s|$)/g,"<a href=\'"+tmpLinkChild+"\' class=\'titlefield link\'>(link)</a>");
						   tmpTitleChild = tmpTitleChild1.replace(/(f|ht)tps?:\/\/.+?(\s|$)/g,function(match){match=match.replace(/^\s+|\s+$/g, '');
if (((match.lastIndexOf('.')+1) == match.length) && (match.lastIndexOf('.') != -1)){match=match.substring(0,match.lastIndexOf('.'));}/*alert("match:"+match);*/var temp="<a href=\'"+match+"\' class=\'titlefield link\'>(link)</a>";return temp;});

                           //alert(tmpTitleChild);

                    liTag.insert(tmpTitleChild);
        		    divTag.update("about "+timeDifference(tmpPubChild));
		            liTag.insert(divTag);
			  }
		         else
		         {
			       var spanTitle	= new Element('div',{'className':'titlefield'});
                            tmpTitleChild=tmpTitleChild1;
		              spanTitle.update(tmpTitleChild);
		              liTag.insert(spanTitle);
                            divTag.update("about "+timeDifference(tmpPubChild,'twitterModule'));
		              liTag.insert(divTag);
			 }

                           //alert(liTag.innerHTML);
	   	             completeLiTag.appendChild(liTag);
                       }

              }
			  
			           var anchorTag1;
                       if (module=='twitterModule'){
                       var liTag1 = new Element('li',{});
					   if (rsslink != undefined && rsslink != '') 
                       {anchorTag1 = new Element('a',{'className':'titlefield','href':rsslink});}
					   else
					   {anchorTag1 = new Element('a',{'className':'titlefield','href':'http://twitter.com/nasa'});}
				       anchorTag1.setStyle({'float':'right'});
                       anchorTag1.update('&rsaquo;&nbsp;More Updates&nbsp;&rarr;');
                       liTag1.insert(anchorTag1);
                       completeLiTag.appendChild(liTag1);}


		}

	
	var dummyParent = "";
	var tempDiv = "";

	if(module=='blogsModule') {
		dummyParent = $('nasablogs_recentpostings').parentNode;
		tempDiv = $('tempNASABlogRss');
	}
    else if (module=='twitterModule')
    {
		dummyParent = $('nasatwitter_recenttweets').parentNode;
		tempDiv = $('tempNASATwitterRss');
	}
	
	if(tempDiv!=null){
		tempDiv.remove();
	}
	
	dummyParent.appendChild(completeLiTag);

				
	
  	if(module=='blogsModule') {
		$('nasablogs_recentpostings').innerHTML='';
	}
    
    if(module=='twitterModule') {
		$('nasatwitter_recenttweets').innerHTML='';
	}
	
	}
	catch(err)
	{
	       if(module=='blogsModule'){
	       try
		   {
	       $('blog_dynamic_html').hide();
           document.getElementById('blog_static_html').style.display='block';
           document.getElementById('blog_static_html').style.visibility='visible';
	       }
		   catch (err)
		   {
		   }
		   }
		   else if (module=='twitterModule'){
	       try
		   {
	        $('nasa_ticker').hide();
            document.getElementById('nasa_ticker_static_msg').style.display='block';
            document.getElementById('nasa_ticker_static_msg').style.visibility='visible';
	       }
		   catch (err)
		   {
		   }
		   }
		   else {
		   }
	}
	
}

function timeDifference(tmpPubChild,module)
{

    try
	{

  	var date = new Date(tmpPubChild);
	var date1= new Date();
	//alert("date:"+date);
	//alert("date1:"+date1);
		

    var difference = date1.getTime() - date.getTime();
    var daysDifference = Math.floor(difference/1000/60/60/24);
    difference -= daysDifference*1000*60*60*24
    var hoursDifference = Math.floor(difference/1000/60/60);
    difference -= hoursDifference*1000*60*60
    var minutesDifference = Math.floor(difference/1000/60);
    difference -= minutesDifference*1000*60
    var secondsDifference = Math.floor(difference/1000);
	
	/*alert(32 - new Date (2008,1,32).getDate());*/

	if ( daysDifference > 0 )
     {
     	 if( daysDifference >= 365 )
          {
           var year = date1.getFullYear()-date.getFullYear();
           if(year==0)year=1;
           tmpPubChild = year + (year>1?" years":" year") + " ago";
          }
          else
          {
                  var month = 0;
		          if ( daysDifference >  (32 - new Date (date.getFullYear(),date.getMonth(),32).getDate()))
		          {
                      month = Math.abs(((date1.getFullYear()-date.getFullYear())*12)+(date1.getMonth()-date.getMonth()));
                  }
		  
                 if(month>0)
                 {
                      tmpPubChild = month + (month>1?" months":" month") + " ago";
                 }
                  else
                 {
                      tmpPubChild = daysDifference + (daysDifference>1?" days":" day") + " ago";
                 }
         
		   }
         
	 }
     else if(hoursDifference>0)
     {
        tmpPubChild = hoursDifference + (hoursDifference>1?" hours":" hour") + " ago";
     }
    else if(minutesDifference>0)
     {
        tmpPubChild = minutesDifference + (minutesDifference>1?" mins":" min") + " ago";
     }
    else if(secondsDifference>0)
     {
        tmpPubChild = secondsDifference + (secondsDifference>1?" secs":" sec") + " ago";
     }
    else
     {
        tmpPubChild = "just now";
     }

	//alert(tmpPubChild);
	return tmpPubChild;
	
	}
	catch(err)
	{
	       if(module=='blogsModule'){
	       try
		   {
	       $('blog_dynamic_html').hide();
           document.getElementById('blog_static_html').style.display='block';
           document.getElementById('blog_static_html').style.visibility='visible';
	       }
		   catch (err)
		   {
		   }
		   }
		   else if (module=='twitterModule'){
	       try
		   {
	        $('nasa_ticker').hide();
            document.getElementById('nasa_ticker_static_msg').style.display='block';
            document.getElementById('nasa_ticker_static_msg').style.visibility='visible';
	       }
		   catch (err)
		   {
		   }
		   }
		   else {
		   }
	}
	
}

function nasaHomeNextItem(divid,nasaHomeCurrentItem,nasaHomeTotalItems,image)
{

  try
  {  

  //alert($(nasaHomeCurrentItem).value); 
  //alert(($(nasaHomeCurrentItem).value+1));
  //alert(parseInt($(nasaHomeCurrentItem).value)+1);

  var currentItem=parseInt($(nasaHomeCurrentItem).value);
  var totalItems=nasaHomeTotalItems;

 // alert(currentItem);
 // alert(totalItems);
 // alert(divid+currentItem);
  
  if ((currentItem+1) < totalItems){
    $(divid+currentItem).setStyle({display: 'none',visibility: 'hidden'});
    $(divid+(currentItem+1)).setStyle({display: 'block',visibility: 'visible'});
  }

  if (currentItem == totalItems-1){ 
    $(divid+currentItem).setStyle({display: 'none',visibility: 'hidden'});
    $(divid+'0').setStyle({display: 'block',visibility: 'visible'});
  }

   
  
  if ($(image+currentItem)){
    $(image+currentItem).removeClassName('active');
	$(image+currentItem).addClassName('inactive');
  }
  
  
  if (currentItem == totalItems-1){
     $(nasaHomeCurrentItem).value=0;
     currentItem=0;
  }
  else{
    $(nasaHomeCurrentItem).value=currentItem+1;
    currentItem=currentItem+1;
  }

  
  if ($(image+currentItem)){
  $(image+currentItem).removeClassName('inactive');
  $(image+currentItem).addClassName('active');
  }
  
  }
  catch(err)
	{
         
	}
}

function nasaHomeCurrentItem(divid,nasaHomeCurrentItem,nasaHomeTotalItems,image,item)
{

  try
  {
  
  var currentItem=parseInt($(nasaHomeCurrentItem).value);
  if($(image+currentItem)){
  $(image+currentItem).removeClassName('active');
  $(image+currentItem).addClassName('inactive');
  }
  
  //alert(divid+parseInt($(nasaHomeCurrentItem).value));
  $(divid+parseInt($(nasaHomeCurrentItem).value)).setStyle({display: 'none',visibility: 'hidden'});
  $(divid+item).setStyle({display: 'block',visibility: 'visible'});
  
   
   $(nasaHomeCurrentItem).value=item;
  
  
  if ($(image+item))
  {
  $(image+item).removeClassName('inactive');
  $(image+item).addClassName('active');
  }

  }
  catch(err)
	{
  	 
	}
}


function nasaHomePrevItem(divid,nasaHomeCurrentItem,nasaHomeTotalItems,image)
{

  try
  {

  
  //alert(parseInt($(nasaHomeCurrentItem).value)+1);
  var currentItem=parseInt($(nasaHomeCurrentItem).value);
  var totalItems=nasaHomeTotalItems;

    
  if ((currentItem < totalItems) && (currentItem > 0))
  { $(divid+currentItem).setStyle({display: 'none',visibility: 'hidden'});
    $(divid+(currentItem-1)).setStyle({display: 'block',visibility: 'visible'});
  }
  
  if (currentItem == 0)
  { $(divid+currentItem).setStyle({display: 'none',visibility: 'hidden'});
    $(divid+(totalItems-1)).setStyle({display: 'block',visibility: 'visible'});
  }
  
  if ($(image+currentItem)){
  $(image+currentItem).removeClassName('active');
  $(image+currentItem).addClassName('inactive');
  }

  if (currentItem == 0){
     $(nasaHomeCurrentItem).value=totalItems-1;
     currentItem=totalItems-1; 
  }
  else{
    $(nasaHomeCurrentItem).value=currentItem-1;
    currentItem=currentItem-1;
  }

  if ($(image+currentItem)){
  $(image+currentItem).removeClassName('inactive');
  $(image+currentItem).addClassName('active');
  }

  }
  catch(err)
	{
 	    
	}
}

function processBaynoteData(rssxml,noOfItems,module,divid,item)
{
    //alert("module:"+module);
	//alert("rssxml:"+rssxml);
	//alert("noOfItems:"+noOfItems);
	//alert("divid:"+divid);
	//alert("item:"+item);
    
	try{
	
	var itemElements="";
	var completeLiTag="";
	
	if (module=='ratingsModule5'){
	
	 var ratingsXML=rssxml.replace(/^\s+|\s+$/g, '');
    
     //alert("ratingsXML:"+ratingsXML);
	 completeLiTag = new Element('div',{'id':'tempNasaPortalBaynoteData','className':'small_gray_scroll'});
	 
	 var matches=ratingsXML.match(/<link>.+?<\/link>/g);
	 //alert(matches.length);
	 var titles=ratingsXML.match(/<title>.+?<\/title>/g);
	 //alert(titles.length);
	 
	 for (var i = 0, len = matches.length; i < len && i < (noOfItems+1) && matches.length == titles.length ; i++) {
     	 
	 if (matches[i].indexOf("TopRatings.rss") == -1 && titles[i].indexOf("rated articles from") == -1 ){
	 
	 var tempLink=matches[i].replace("<link>","");
	 var tempLink1=tempLink.replace("</link>","");
	 
	 var tempTitle=titles[i].replace("<title>","");
	 var tempTitle1=tempTitle.replace("</title>","");
	 
	 //alert(tempLink1);
	 //alert(tempTitle1);
	 var liTag = new Element('li',{'className':'baynote'});
	 var anchorTag = new Element('a',{'className':'ratingLink','href':tempLink1});
	 anchorTag.update(tempTitle1);
	 liTag.appendChild(anchorTag);
	 //alert(liTag.innerHTML);
	 completeLiTag.appendChild(liTag);
	 
	 	 	 }
     }
	 	
	}else{
	itemElements = rssxml.getElementsByTagName("r");
	
		    
    	if(itemElements.length>0){
	    
		completeLiTag = new Element('div',{'id':'tempNasaPortalBaynoteData','className':'small_gray_scroll'});
	
	
			for (var i=0; i<itemElements.length && i<noOfItems ; i++)
			 {
                //alert(itemElements[i].getAttribute('u'));
				//alert(itemElements[i].getAttribute('t'));
				 
				if (module=='baynoteModule3'){
				
				    if (itemElements[i].getAttribute('u') != null && itemElements[i].getAttribute('u') != "undefined" && itemElements[i].getAttribute('u') != eval("") && itemElements[i].getAttribute('u') != "null" && itemElements[i].getElementsByTagName("a")[1] != null && itemElements[i].getElementsByTagName("a")[1] != eval("")){
				
				    var liTag = new Element('li',{'className':'baynote'});
					
				    var videoImage = itemElements[i].getElementsByTagName("a")[0];
					videoImage = videoImage.getAttribute('v');
					videoImage = videoImage.replace(/\'/g,"\\'");
					
					var videoTitle = itemElements[i].getElementsByTagName("a")[1];
					var videoTitle1 = videoTitle.getAttribute('v');
					videoTitle1 = videoTitle1.replace(/\'/g,"\\'");
					
					var videoId = itemElements[i].getElementsByTagName("a")[2];
					
					var param=itemElements[i].getAttribute('u');
					if (param.indexOf("&param=") > -1){
					 //alert(url.substring(param.indexOf("&param=")+7,param.length));
					 var temp=param.substring(param.indexOf("&param=")+7,param.length);
					 //alert(temp);
					 var temp1=temp.split("|");
					 //alert(temp1.length);
					 
					 var param1="",param2="",param3="",param4="";
					 
					 for (var j=0; temp1.length >0 && j<temp1.length && temp1.length < 5 ; j++){
					    if (j == 0){
						param1=temp1[0];
						param1 = param1.replace(/\'/g,"\\'");
					    }else if (j == 1){
						param2=temp1[1];
						param2 = param2.replace(/\'/g,"\\'");
						}else if (j == 2){
						param3=temp1[2];
						param3 = param3.replace(/\'/g,"\\'");
						}else if (j == 3){
						param4=temp1[3];
						param4 = param4.replace(/\'/g,"\\'");
						}
					 }
						
					 	var functioncall="javascript:watchNASAOnDemandVideos(\'"+param1+"\',\'"+param2+"\',\'"+param3+"\',\'"+param4+"\',\'"+videoTitle1+"\',\'"+videoImage+"\',\'"+videoId.getAttribute('v')+"\',\'\')";
					 
				 //var functioncall="javascript:watchNASAOnDemandVideos(\'"+param1+"\',\'"+param2+"\',\'"+param3+"\',\'"+param4+"\',\'"+videoTitle.getAttribute('v')+"\',\'"+videoImage.getAttribute('v')+"\',\'"+videoId.getAttribute('v')+"\',\'\')";
					 
					//alert(functioncall); 
					//alert(videoTitle.getAttribute('v'));
					var anchorTag	=	new Element('a',{'className':'baynoteLinks','onClick':functioncall,'href':functioncall});
				    anchorTag.update(videoTitle.getAttribute('v'));
					liTag.appendChild(anchorTag); 
					 
					 }
					 completeLiTag.appendChild(liTag);
					 }else{
					noOfItems=noOfItems+1;
				    }
					 
					
				}else if (module=='baynoteModule8'){
				
				   
				    var tnImage = itemElements[i].getElementsByTagName("labels")[0];
					
					if (tnImage.getElementsByTagName("l")[0]!= null && itemElements[i].getAttribute('u') != "undefined" && itemElements[i].getAttribute('u') != eval("") && itemElements[i].getAttribute('u') != "null" && itemElements[i].getAttribute('u') != null && itemElements[i].getAttribute('u') != "undefined" && itemElements[i].getAttribute('u') != eval("") && itemElements[i].getAttribute('u') != "null" && itemElements[i].getAttribute('t') != null && itemElements[i].getAttribute('t') != "undefined" && itemElements[i].getAttribute('t') != eval("") && itemElements[i].getAttribute('t') != "null"){
					
					var liTag = new Element('li',{'className':'baynote'});
					var tnImage1= tnImage.getElementsByTagName("l")[0];
										
					var divTag =   new Element('div',{'className':'baynoteImgDivLeft'});
					var divTag1 =   new Element('div',{'className':'baynoteImgDivRight'});
					
					var multiImage=tnImage1.getAttribute('v');
					var multiImageArray = multiImage.split(",");
					if (multiImageArray.length > 0){
					 multiImage = multiImageArray[0];
					}
					
					var imgTitle=itemElements[i].getAttribute('t');
					//alert(imgTitle.length);
		            /*if (imgTitle.length > 38)
		            {
		                  imgTitle=imgTitle.substring(0,34);
		                  if (imgTitle.lastIndexOf(" ") > -1)
		                  {imgTitle=imgTitle.substring(0,imgTitle.lastIndexOf(" "));}
		                   imgTitle+=" ...";
		            }*/
					

                    var imgTag	=	new Element('img',{'className':'baynoteImg','src':multiImage,'width':'64','height':'48','title':imgTitle,'alt':imgTitle});
					var spanTag =   new Element('span',{'className':'baynoteImgTitle'});
					
					
					spanTag.update(imgTitle);
					var anchorTag	=	new Element('a',{'className':'baynoteLinks','href':itemElements[i].getAttribute('u')});
				    anchorTag.appendChild(imgTag);
					var anchorTag1	=	new Element('a',{'className':'baynoteLinks','href':itemElements[i].getAttribute('u')});
					anchorTag1.appendChild(spanTag);
					
					divTag.appendChild(anchorTag);
					divTag1.appendChild(anchorTag1);
					liTag.appendChild(divTag);
				    liTag.appendChild(divTag1);
					
					completeLiTag.appendChild(liTag);
					
					}else{
					noOfItems=noOfItems+1;
				    }
				
				}else if (module=='baynoteModule1'){
				  
				   
				    var tnImage = itemElements[i].getElementsByTagName("labels")[0];
					
					if (tnImage.getElementsByTagName("l")[0]!= null && itemElements[i].getAttribute('u') != "undefined" && itemElements[i].getAttribute('u') != eval("") && itemElements[i].getAttribute('u') != "null" && itemElements[i].getAttribute('u') != null && itemElements[i].getAttribute('u') != "undefined" && itemElements[i].getAttribute('u') != eval("") && itemElements[i].getAttribute('u') != "null" && itemElements[i].getAttribute('t') != null && itemElements[i].getAttribute('t') != "undefined" && itemElements[i].getAttribute('t') != eval("") && itemElements[i].getAttribute('t') != "null"){
					
					var liTag = new Element('li',{'className':'baynote'});
					var tnImage1= tnImage.getElementsByTagName("l")[0];
										
					var divTag =   new Element('div',{'className':'baynoteImgDivLeft'});
					var divTag1 =   new Element('div',{'className':'baynoteImgDivRight'});
					
					
					var multiImage=tnImage1.getAttribute('v');
					var multiImageArray = multiImage.split(",");
					if (multiImageArray.length > 0){
					 multiImage = multiImageArray[0];
					}
					
					var imgTitle=itemElements[i].getAttribute('t');
					//alert(imgTitle.length);
		            /*if (imgTitle.length > 38)
		            {
		                  imgTitle=imgTitle.substring(0,34);
		                  if (imgTitle.lastIndexOf(" ") > -1)
		                  {imgTitle=imgTitle.substring(0,imgTitle.lastIndexOf(" "));}
		                   imgTitle+=" ...";
		            }*/
                   
                    var imgTag	=	new Element('img',{'className':'baynoteImg','src':multiImage,'width':'64','height':'48','title':imgTitle,'alt':imgTitle});
					var spanTag =   new Element('span',{'className':'baynoteImgTitle'});
										
					spanTag.update(imgTitle);
					var anchorTag	=	new Element('a',{'className':'baynoteLinks','href':itemElements[i].getAttribute('u')});
				    anchorTag.appendChild(imgTag);
					var anchorTag1	=	new Element('a',{'className':'baynoteLinks','href':itemElements[i].getAttribute('u')});
					anchorTag1.appendChild(spanTag);
					
					divTag.appendChild(anchorTag);
					divTag1.appendChild(anchorTag1);
					liTag.appendChild(divTag);
				    liTag.appendChild(divTag1);
					
					completeLiTag.appendChild(liTag);
					
					}else{
					noOfItems=noOfItems+1;
				    }
				
				
				}else{
				  
				  if (itemElements[i].getAttribute('u') != null && itemElements[i].getAttribute('u') != "undefined" && itemElements[i].getAttribute('u') != eval("") && itemElements[i].getAttribute('u') != "null" && itemElements[i].getAttribute('t') != null && itemElements[i].getAttribute('t') != "undefined" && itemElements[i].getAttribute('t') != eval("") && itemElements[i].getAttribute('t') != "null"){
				  
				  var liTag = new Element('li',{'className':'baynote'});
				  var anchorTag	=	new Element('a',{'className':'baynoteLink','href':itemElements[i].getAttribute('u')});
				  anchorTag.update(itemElements[i].getAttribute('t'));
				  liTag.appendChild(anchorTag);
				  completeLiTag.appendChild(liTag);
				  
				  }else{ 
				  noOfItems=noOfItems+1;
				  }
				  
				}

                
				}
		} 
	     
	}
	
	var dummyParent = "";
	
	if(module=='baynoteModule1') {
		dummyParent = $('baynote_temp1').parentNode;
	}else if (module=='baynoteModule2'){
		dummyParent = $('baynote_temp2').parentNode;
	}else if (module=='baynoteModule3'){
		dummyParent = $('baynote_temp3').parentNode;
	}else if (module=='baynoteModule4'){
		dummyParent = $('baynote_temp4').parentNode;
	}else if (module=='ratingsModule5'){
		dummyParent = $('ratings_temp5').parentNode;
	}else if (module=='baynoteModule6'){
		dummyParent = $('baynote_temp6').parentNode;
	}else if (module=='baynoteModule7') {
        dummyParent = $('baynote_temp7').parentNode;
	}else if (module=='baynoteModule8') {
        dummyParent = $('baynote_temp8').parentNode;
    }
	
	
	if($(divid+item).getElementsBySelector("div")[1])
	{
	   ($(divid+item).getElementsBySelector("div")[1]).remove();
	}
	
	if (completeLiTag !="")
	dummyParent.appendChild(completeLiTag);
			
	
	
	//scroll bar
	if ($(divid+item)){ 
          //alert($(divid+item).style.display);
         if ($(divid+item).style.display != 'none' && $(divid+item).getElementsBySelector("div")[1]){ 
          var scrollbar=new ScrollRegion($(divid+item).getElementsBySelector("div")[1]);
          }
        }
		
	
  	if(module=='baynoteModule1') {
		$('baynote_temp1').innerHTML='';
	}else if (module=='baynoteModule2') {
        $('baynote_temp2').innerHTML='';
	}else if (module=='baynoteModule3') {
        $('baynote_temp3').innerHTML='';
	}else if (module=='baynoteModule4') {
        $('baynote_temp4').innerHTML='';
	}else if (module=='ratingsModule5') {
        $('ratings_temp5').innerHTML='';
	}else if (module=='baynoteModule6') {
        $('baynote_temp6').innerHTML='';
	}else if (module=='baynoteModule7') {
        $('baynote_temp7').innerHTML='';
	}else if (module=='baynoteModule8') {
        $('baynote_temp8').innerHTML='';
	}
	
	
	
	}catch (err)
	{
	
	try{
      //alert("error:"+err);
	  //alert("error.description:"+err.description);
	  var temp='<div style="margin: 125px 15px 0 15px">Error Loading Baynote Widget Data</div>';
	
	if(module=='baynoteModule1') {
		if ($(divid+item).getElementsBySelector("ul")[0]){ 
          ($(divid+item).getElementsBySelector("ul")[0]).innerHTML='';
		  ($(divid+item).getElementsBySelector("ul")[0]).innerHTML=temp;
	    }
	}else if (module=='baynoteModule2') {
        if ($(divid+item).getElementsBySelector("ul")[0]){ 
          ($(divid+item).getElementsBySelector("ul")[0]).innerHTML='';
		  ($(divid+item).getElementsBySelector("ul")[0]).innerHTML=temp;
	    }
	}else if (module=='baynoteModule3') {
        if ($(divid+item).getElementsBySelector("ul")[0]){ 
          ($(divid+item).getElementsBySelector("ul")[0]).innerHTML='';
		  ($(divid+item).getElementsBySelector("ul")[0]).innerHTML=temp;
	    }
	}else if (module=='baynoteModule4') {
        if ($(divid+item).getElementsBySelector("ul")[0]){ 
          ($(divid+item).getElementsBySelector("ul")[0]).innerHTML='';
		  ($(divid+item).getElementsBySelector("ul")[0]).innerHTML=temp;
	    }
	}else if (module=='ratingsModule5') {
        if ($(divid+item).getElementsBySelector("ul")[0]){ 
          ($(divid+item).getElementsBySelector("ul")[0]).innerHTML='';
		  ($(divid+item).getElementsBySelector("ul")[0]).innerHTML=temp;
	    }
	}else if (module=='baynoteModule6') {
        if ($(divid+item).getElementsBySelector("ul")[0]){ 
          ($(divid+item).getElementsBySelector("ul")[0]).innerHTML='';
		  ($(divid+item).getElementsBySelector("ul")[0]).innerHTML=temp;
	    }
	}else if (module=='baynoteModule7') {
        if ($(divid+item).getElementsBySelector("ul")[0]){ 
          ($(divid+item).getElementsBySelector("ul")[0]).innerHTML='';
		  ($(divid+item).getElementsBySelector("ul")[0]).innerHTML=temp;
	    }
	}else if (module=='baynoteModule8') {
        if ($(divid+item).getElementsBySelector("ul")[0]){ 
          ($(divid+item).getElementsBySelector("ul")[0]).innerHTML='';
		  ($(divid+item).getElementsBySelector("ul")[0]).innerHTML=temp;
	    }
	}}catch (err){}
	
	}
}


function baynoteWidgetScrollBar(divid,tabid,xml,tempId,module,item){
try{
new Ajax.Updater(tempId,xml, { method:'get', onSuccess: function(transport) { processBaynoteData(transport.responseText,6,module,divid,item); }, onFailure: function() {
$(divid+item).getElementsBySelector("ul")[0].innerHTML='';
$(divid+item).getElementsBySelector("ul")[0].innerHTML='<div style="margin: 125px 15px 0 15px">Error Loading Baynote Widget Data</div>';
}});
}catch (err){
         try{
		 $(divid+item).getElementsBySelector("ul")[0].innerHTML='';
         $(divid+item).getElementsBySelector("ul")[0].innerHTML='<div style="margin: 125px 15px 0 15px">Error Loading Baynote Widget Data</div>';
         }catch(err){}
}
}

function nasaHomeBaynoteWidgetCurrentItem(divid,nasaHomeTotalItems,image,item,xml,tempId,module)
{
  try
  {
  
  for (var i=0;i<nasaHomeTotalItems;i++){
  if($(image+i)){
  $(image+i).removeClassName('active');
  $(image+i).addClassName('inactive');
  $(divid+i).setStyle({display: 'none',visibility: 'hidden'});
  }}
  
  if (item != 2){
  new Ajax.Updater(tempId,xml, { method:'get', onSuccess: function(transport) { processBaynoteData(transport.responseXML,6,module,divid,item); }, onFailure: function() { 
  $(divid+item).getElementsBySelector("ul")[0].innerHTML='';
  $(divid+item).getElementsBySelector("ul")[0].innerHTML='<div style="margin: 125px 15px 0 15px">Error Loading Baynote Widget Data</div>';
  } });
  }
  
  if (item == 2){
  new Ajax.Updater(tempId,xml, { method:'get', onSuccess: function(transport) { processBaynoteWidgetVmixVideosData(transport.responseXML,6,module,divid,item); }, onFailure: function() { 
  $(divid+item).getElementsBySelector("ul")[0].innerHTML='';
  $(divid+item).getElementsBySelector("ul")[0].innerHTML='<div style="margin: 125px 15px 0 15px">Error Loading Baynote Widget Data</div>';
  } });
  }
   
  
  $(divid+item).setStyle({display: 'block',visibility: 'visible'});
      
  if ($(image+item)){
  $(image+item).removeClassName('inactive');
  $(image+item).addClassName('active');
  }
  
  }
  catch(err)
	{
	  	 try{
		 $(divid+item).getElementsBySelector("ul")[0].innerHTML='';
         $(divid+item).getElementsBySelector("ul")[0].innerHTML='<div style="margin: 125px 15px 0 15px">Error Loading Baynote Widget Data</div>';
         }catch(err){}
		 
	}
}


function processBaynoteWidgetVmixVideosData(rssxml,noOfItems,module,divid,item)
{

   try{
	
	var itemElements="";
	var completeLiTag="";

    itemElements = rssxml.getElementsByTagName("item");
	
		    //alert("items:"+itemElements.length);
    	if(itemElements.length>0){
	    
		completeLiTag = new Element('div',{'id':'tempNasaPortalBaynoteData','className':'small_gray_scroll'});
	
	
			    for (var i=0; i<noOfItems ; i++)
			    {
                
                	
			    var tmpTitle = itemElements[i].getElementsByTagName("title")[0];
				var tmpTitleChild = tmpTitle.childNodes[0].nodeValue;
				//alert(tmpTitleChild);

		        var tmpLink = itemElements[i].getElementsByTagName("link")[0];
				var tmpLinkChild = tmpLink.childNodes[0].nodeValue;
					
				var tmpImage = itemElements[i].getElementsByTagName("image")[0];
 	            var tmpImageChild = tmpImage.childNodes[0].nodeValue;
				//alert(tmpImageChild);
					
				var imageSrc='http://cdn-aki.vmixcore.com/imgman.jpg?width=64&height=48&fill=000000000&url='+tmpImageChild;	
				//alert(imageSrc);
					
					var liTag = new Element('li',{'className':'baynote'});
															
					var divTag =   new Element('div',{'className':'baynoteImgDivLeft'});
					var divTag1 =   new Element('div',{'className':'baynoteImgDivRight'});
					
					var imgTag	=	new Element('img',{'className':'baynoteImg','src':imageSrc,'width':'64','height':'48','title':tmpTitleChild,'alt':tmpTitleChild});
					
					var spanTag =   new Element('span',{'className':'baynoteImgTitle'});
					
					
					//spanTag.update(vmixTrim(tmpTitleChild,35));
					spanTag.update(tmpTitleChild);
					var anchorTag	=	new Element('a',{'className':'baynoteLinks','href':tmpLinkChild});
				    anchorTag.appendChild(imgTag);
					var anchorTag1	=	new Element('a',{'className':'baynoteLinks','href':tmpLinkChild});
					anchorTag1.appendChild(spanTag);
					
					divTag.appendChild(anchorTag);
					divTag1.appendChild(anchorTag1);
					liTag.appendChild(divTag);
				    liTag.appendChild(divTag1);
					
					completeLiTag.appendChild(liTag);
					
					}
				
    var dummyParent = "";
	
	if (module=='baynoteModule3') {
        dummyParent = $('baynote_temp3').parentNode;
    }
	
	
	if($(divid+item).getElementsBySelector("div")[1])
	{
	   ($(divid+item).getElementsBySelector("div")[1]).remove();
	}
	
	if (completeLiTag !="")
	dummyParent.appendChild(completeLiTag);
			
	
	
	//scroll bar
	if ($(divid+item)){ 
          //alert($(divid+item).style.display);
         if ($(divid+item).style.display != 'none' && $(divid+item).getElementsBySelector("div")[1]){ 
          var scrollbar=new ScrollRegion($(divid+item).getElementsBySelector("div")[1]);
          }
        }
		
	
  	if (module=='baynoteModule3') {
        $('baynote_temp3').innerHTML='';
	}
	
    }
	}catch (err)
	{
	
	try{
      //alert("error:"+err);
	  var temp='<div style="margin: 125px 15px 0 15px">Error Loading Baynote Widget Data</div>';
	
	if (module=='baynoteModule3') {
        if ($(divid+item).getElementsBySelector("ul")[0]){ 
          ($(divid+item).getElementsBySelector("ul")[0]).innerHTML='';
		  ($(divid+item).getElementsBySelector("ul")[0]).innerHTML=temp;
	    }
	}
	}catch (err){}
	
	}

}

// Homepage Multimedia Box On-Demand Videos Function 
function processHomepageFeaturedVideos(result,divId){

     try{
	
	    var current_video;
     	var str = '';
		var recentUploads='';
		
		
		var itemElements = result.getElementsByTagName("item");
        //alert(itemElements.length);
             		    
	    if(itemElements.length >= 3 && itemElements.length > 0){
		
     	for (var i=0; i< 3; i++)
		{
                
		        var tmpTitle;
				var tmpTitleChild;
	            var tmpLink;
	            var tmpLinkChild;
				var id;
				
                tmpTitle = itemElements[i].getElementsByTagName("title")[0];
				tmpTitleChild = tmpTitle.childNodes[0].nodeValue;

		        tmpLink = itemElements[i].getElementsByTagName("link")[0];
				tmpLinkChild = tmpLink.childNodes[0].nodeValue;
								
				id=tmpLinkChild.substring((tmpLinkChild.lastIndexOf("media_id=")+9),tmpLinkChild.length);
												
				tmpImage = itemElements[i].getElementsByTagName("image")[0];
 	            tmpImageChild = tmpImage.childNodes[0].nodeValue;
				
		if (i==0)
    	{recentUploads +='<li id="nasa_multimedia_ondemand'+i+'">';}
		else
		{recentUploads +='<li style="display:none;visibility:hidden;" id="nasa_multimedia_ondemand'+i+'">';}
		recentUploads +='<a class="img_mul_left" href="javascript:nasaHomePrevItem(\'nasa_multimedia_ondemand\',\'nasaMultimediaOnDemandVideosCurrentItem\',3,\'ondemand_dot_button\')"></a><a id="nasa_multimedia_img_anchor" href="/multimedia/videogallery/index.html?collection_id=14483&media_id='+id+'&module=homepage"><img height="75" width="100" border="0" align="Bottom" src="http://image.vmixcore.com/imgman.jpg?width=100&amp;height=75&amp;fill=000000000&amp;url=' + tmpImageChild + '" title="'+tmpTitleChild+'" alt="'+tmpTitleChild+'"></a><a class="img_mul_right" href="javascript:nasaHomeNextItem(\'nasa_multimedia_ondemand\',\'nasaMultimediaOnDemandVideosCurrentItem\',3,\'ondemand_dot_button\')"></a>';
		recentUploads +='<h3>Videos</h3>';
		recentUploads +='<p><a href="/multimedia/videogallery/index.html?collection_id=14483&media_id='+id+'&module=homepage">'+vmixTrim(tmpTitleChild,100)+'</a></p>';
        recentUploads +='<a class="nasa_multimedia_more_link" href="/multimedia/videogallery/index.html">>&nbsp;More Videos</a>';
		recentUploads +='</li>';
        }
		
		recentUploads +='<div class="nasa_multimedia_box_controls"> <a id="ondemand_dot_button0" src="/templateimages/redesign/modules/imagegallery/dot1-light.gif" alt="Item 1" title="Item 1" class="dot_button active" href="javascript:nasaHomeCurrentItem(\'nasa_multimedia_ondemand\',\'nasaMultimediaOnDemandVideosCurrentItem\',3,\'ondemand_dot_button\',0)"><span class="hide">1</span></a><a id="ondemand_dot_button1" src="/templateimages/redesign/modules/imagegallery/dot1-dark.gif" alt="Item 2" title="Item 2" class="dot_button inactive" href="javascript:nasaHomeCurrentItem(\'nasa_multimedia_ondemand\',\'nasaMultimediaOnDemandVideosCurrentItem\',3,\'ondemand_dot_button\',1)"><span class="hide">2</span></a><a id="ondemand_dot_button2" src="/templateimages/redesign/modules/imagegallery/dot1-dark.gif" alt="Item 3" title="Item 3" class="dot_button inactive" href="javascript:nasaHomeCurrentItem(\'nasa_multimedia_ondemand\',\'nasaMultimediaOnDemandVideosCurrentItem\',3,\'ondemand_dot_button\',2)"><span class="hide">3</span></a></div> ';
	
        //alert(recentUploads);
				
	    }else{
        //alert("in else part");
		throw err;
        }        
      
	  jQuery('#'+divId).html(recentUploads);
	  
	  }catch (err){
	  //recentUploads='<div style="margin: 28px 15px 0 15px">Error Loading Homepage Multimedia Box On-Demand Videos</div>';
	  recentUploads='<li id="nasa_multimedia_ondemand0"><a class="img_mul_left" href="javascript:nasaHomePrevItem(\'nasa_multimedia_ondemand\',\'nasaMultimediaOnDemandVideosCurrentItem\',3,\'ondemand_dot_button\')"></a><a id="nasa_multimedia_img_anchor" href="/multimedia/videogallery/index.html?media_id=79936041"><img src="http://cdn-aki.vmixcore.com/imgman.jpg?url=http://cdn-aki.vmixcore.com/423/15623/26/213462631/1421/423/799/f08d949c46a6b5f1fe22e9ee94126d0c.jpg&width=100&height=75&fill=000000000" title="The Space Shuttle (Narrated by William Shatner)" alt="The Space Shuttle (Narrated by William Shatner)" align="Bottom" border="0" height="75" width="100"></a><a class="img_mul_right" href="javascript:nasaHomeNextItem(\'nasa_multimedia_ondemand\',\'nasaMultimediaOnDemandVideosCurrentItem\',3,\'ondemand_dot_button\')"></a><h3>Videos</h3><p><a href="/multimedia/videogallery/index.html?media_id=79936041">The Space Shuttle (Narrated by William Shatner)</a></p><a href="/multimedia/videogallery/index.html" class="nasa_multimedia_more_link"> >&nbsp;More Videos</a></li><li style="display: none; visibility: hidden;" id="nasa_multimedia_ondemand1"><a class="img_mul_left" href="javascript:nasaHomePrevItem(\'nasa_multimedia_ondemand\',\'nasaMultimediaOnDemandVideosCurrentItem\',3,\'ondemand_dot_button\')"></a><a id="nasa_multimedia_img_anchor" href="/multimedia/videogallery/index.html?media_id=15769086"><img src="http://cdn-aki.vmixcore.com/imgman.jpg?width=100&height=75&fill=000000000&url=http://cdn-aki.vmixcore.com/423/0/26/55540901/781/423/5838/ca09f2a51b6a2272182bbc7d2423dbb6.jpg" title="Know Your Earth" alt="Know Your Earth" align="Bottom" border="0" height="75" width="100"></a><a class="img_mul_right" href="javascript:nasaHomeNextItem(\'nasa_multimedia_ondemand\',\'nasaMultimediaOnDemandVideosCurrentItem\',3,\'ondemand_dot_button\')"></a><h3>Videos</h3><p><a href="/multimedia/videogallery/index.html?media_id=15769086">Know Your Earth</a></p><a href="/multimedia/videogallery/index.html" class="nasa_multimedia_more_link"> >&nbsp;More Videos</a></li><li style="display: none; visibility: hidden;" id="nasa_multimedia_ondemand2"><a class="img_mul_left"  href="javascript:nasaHomePrevItem(\'nasa_multimedia_ondemand\',\'nasaMultimediaOnDemandVideosCurrentItem\',3,\'ondemand_dot_button\')"></a><a id="nasa_multimedia_img_anchor" href="/multimedia/videogallery/index.html?media_id=49065741"><img src="http://cdn-aki.vmixcore.com/imgman.jpg?width=100&height=75&fill=000000000&url=http://cdn-aki.vmixcore.com/423/0/26/109090961/1311/423/6401/318e7957a5553f07969c68d432799c07.jpg" title="NASA EDGE Tribute to the Space Shuttle" alt="NASA EDGE Tribute to the Space Shuttle" align="Bottom" border="0" height="75" width="100"></a><a class="img_mul_right" href="javascript:nasaHomeNextItem(\'nasa_multimedia_ondemand\',\'nasaMultimediaOnDemandVideosCurrentItem\',3,\'ondemand_dot_button\')"></a><h3>Videos</h3><p><a href="/multimedia/videogallery/index.html?media_id=49065741">NASA EDGE Tribute to the Space Shuttle</a></p><a href="/multimedia/videogallery/index.html" class="nasa_multimedia_more_link"> >&nbsp;More Videos</a></li><div class="nasa_multimedia_box_controls"><a id="ondemand_dot_button0" src="/templateimages/redesign/modules/imagegallery/dot1-light.gif" alt="Item 1" title="Item 1" class="dot_button active" href="javascript:nasaHomeCurrentItem(\'nasa_multimedia_ondemand\',\'nasaMultimediaOnDemandVideosCurrentItem\',3,\'ondemand_dot_button\',0)"><span class="hide">1</span></a><a id="ondemand_dot_button1" src="/templateimages/redesign/modules/imagegallery/dot1-dark.gif" alt="Item 2" title="Item 2" class="dot_button inactive" href="javascript:nasaHomeCurrentItem(\'nasa_multimedia_ondemand\',\'nasaMultimediaOnDemandVideosCurrentItem\',3,\'ondemand_dot_button\',1)"><span class="hide">2</span></a><a id="ondemand_dot_button2" src="/templateimages/redesign/modules/imagegallery/dot1-dark.gif" alt="Item 3" title="Item 3" class="dot_button inactive" href="javascript:nasaHomeCurrentItem(\'nasa_multimedia_ondemand\',\'nasaMultimediaOnDemandVideosCurrentItem\',3,\'ondemand_dot_button\',2)"><span class="hide">3</span></a></div>';
	  jQuery('#'+divId).html(recentUploads);
	  }
	  
}

//vmix function calls
function getVmixVideos(divId,vmixInputData,title,noOfItems,action,module,enableArchives,archiveLabel,overrideArchiveUrl)
{

var api_url = 'cdn-api.vmixcore.com';
var atoken = 'cf15596810c05b64c422e071473549f4';
var url='';
var mediaIdArray='';

//alert(vmixInputData);
//alert(divId);
//alert($(divId));

if (vmixInputData != undefined && vmixInputData != null && vmixInputData != ''){

if (noOfItems != '')
{
var limit=noOfItems;

  if (action == "getGenreVideos"){
  
  if (vmixInputData.indexOf(",") != -1)
  {vmixInputData=vmixInputData.substring(0,vmixInputData.lastIndexOf(","));}
  
  if (vmixInputData == 131)
  {url='http://'+api_url+'/apis/media.php?action=getMediaList&get_count=1&class_id=1&alltime=1&order_method=DESC&start=0&limit='+limit+'&order=date_published_start&export=JSONP&external_genre_ids='+vmixInputData+'&atoken='+atoken+'&callback=?';
  }else{
  url='http://'+api_url+'/apis/media.php?action=getMediaList&get_count=1&class_id=1&alltime=1&order_method=DESC&start=0&limit='+limit+'&order=date_published_start&export=JSONP&genre_ids='+vmixInputData+'&atoken='+atoken+'&callback=?';
  }
  
 }else if (action == "getCollectionVideos"){
  url = 'http://'+api_url+'/apis/media.php?action=getMediaList&get_count=1&order_method=DESC&start=0&limit='+limit+'&order=date_published_start&collection_ids='+vmixInputData+'&class_id=1&alltime=1&export=JSONP&atoken='+atoken+'&callback=?';
 }else if (action == "getMediaVideos"){
 url = 'http://'+api_url+'/apis/media.php?action=getMediaList&get_count=1&order_method=DESC&start=0&limit='+limit+'&order=date_published_start&media_ids='+vmixInputData+'&class_id=1&alltime=1&export=JSONP&atoken='+atoken+'&callback=?';
 
 if (vmixInputData != ''){
 mediaIdArray = vmixInputData.split(",");
 }
 
}else if (action == "getSearchVideos"){
  url='http://'+api_url+'/apis/media.php?action=searchMedia&get_count=1&start=0&limit='+limit+'&fields=title,description&class_id=1&export=JSONP&atoken='+atoken+'&query='+vmixInputData+'&callback=?';
}

}else{

 if (action == "getGenreVideos"){
  
  if (vmixInputData.indexOf(",") != -1)
  {vmixInputData=vmixInputData.substring(0,vmixInputData.lastIndexOf(","));}
  
  if (vmixInputData == 131)
  {url='http://'+api_url+'/apis/media.php?action=getMediaList&get_count=1&class_id=1&alltime=1&order_method=DESC&order=date_published_start&export=JSONP&external_genre_ids='+vmixInputData+'&atoken='+atoken+'&callback=?';
  }else{
  url='http://'+api_url+'/apis/media.php?action=getMediaList&get_count=1&class_id=1&alltime=1&order_method=DESC&order=date_published_start&export=JSONP&genre_ids='+vmixInputData+'&atoken='+atoken+'&callback=?';
  }
  
}else if (action == "getCollectionVideos"){
  url = 'http://'+api_url+'/apis/media.php?action=getMediaList&get_count=1&order_method=DESC&order=date_published_start&collection_ids='+vmixInputData+'&class_id=1&alltime=1&export=JSONP&atoken='+atoken+'&callback=?';
 }else if (action == "getMediaVideos"){
 url = 'http://'+api_url+'/apis/media.php?action=getMediaList&get_count=1&order_method=DESC&order=date_published_start&media_ids='+vmixInputData+'&class_id=1&alltime=1&export=JSONP&atoken='+atoken+'&callback=?';
 
 if (vmixInputData != ''){
 mediaIdArray = vmixInputData.split(",");
 }
 
}else if (action == "getSearchVideos"){
  url='http://'+api_url+'/apis/media.php?action=searchMedia&get_count=1&fields=title,description&class_id=1&export=JSONP&atoken='+atoken+'&query='+vmixInputData+'&callback=?';
}

}


//alert(url);
//alert(module);
   
   if (module.indexOf("Landing-Blinds-Blue-Sm") != -1 ){

     
   jQuery.getJSON(url, function(object){
   
   try{

        var recentUploads='';
        var result1='';
   
        
        recentUploads+='<div class="box_230_cap">';
        recentUploads+='<div class="top_cap"></div>';

        if (module == "Landing-Blinds-Blue-Sm(Fixed Height)"){
		recentUploads+='<div class="box_230 box_230_tall box_blue" style="overflow:hidden;text-align:left;">';
		}else{
        recentUploads+='<div class="box_230 box_230_tall box_blue" style="text-align:left;height:auto;">';
		}
		
        recentUploads+='<h2>'+vmixTrim(title,27)+'</h2>';

				
        if (action == "getGenreVideos" || action == "getCollectionVideos" )
		{result1=object.media;
		}else if (action == "getSearchVideos"){
		result1=object.medias.media;
		}else if (action == "getMediaVideos"){
		result1=[];
		object=object.media;
		for(i = 0; i < mediaIdArray.length; i++){
	    for (var key in object) {
		if (mediaIdArray[i] == key){
		    result1.push(object[key]);
		}
		}}
		}
		
		if (result1.length > 0 ){ 
		
		if (module == "Landing-Blinds-Blue-Sm(Fixed Height)")
        {recentUploads+='<div class="blinds 210 narrow_blue_blinds_img prejs_blue_blinds">';}
		else 
		{recentUploads+='<div class="blinds 210 narrow_blue_blinds_img prejs_blue_blinds" style="height:auto;">';}
		
		if (noOfItems == ''){
         noOfItems=result1.length
        }

		
		if (noOfItems > result1.length)
		{noOfItems=result1.length};
		
	    for (j=0;j<noOfItems;j++){

    	if (j == 0)
		{recentUploads +='<div class="cap"></div>';}
					
		if (action == "getCollectionVideos" ){			
		recentUploads +='<h3 class="top_h3">';
        recentUploads +='<a href="/multimedia/videogallery/index.html?collection_id='+vmixInputData+'&amp;media_id='+result1[j].id+'">'+ vmixTrim(result1[j].title, 50)+'</a></h3>';
				
		recentUploads +='<div class="content">';
        recentUploads +='<div class="fill_narrow_blind_wrap">';
		recentUploads +='<a href="/multimedia/videogallery/index.html?collection_id='+vmixInputData+'&amp;media_id='+result1[j].id+'"><IMG WIDTH="226" ALT="'+result1[j].title+'" TITLE="'+result1[j].title+'" src="http://cdn-aki.vmixcore.com/imgman.jpg?width=226&amp;height=170&amp;fill=000000000&amp;url=' + result1[j].thumbnail[0].url + '" HEIGHT="170" ALIGN="Bottom" BORDER="0" /></a>';
        recentUploads +='</div>';
        recentUploads +='<div class="story_link">';
        recentUploads +='<a href="/multimedia/videogallery/index.html?collection_id='+vmixInputData+'&amp;media_id='+result1[j].id+'">&rsaquo; View This Video</a>';
        recentUploads +='</div>';
        recentUploads +='</div>';
        recentUploads +='<div class="footer"></div>';		
		
		}else{
			
		recentUploads +='<h3 class="top_h3">';
        recentUploads +='<a href="/multimedia/videogallery/index.html?media_id='+result1[j].id+'">'+ vmixTrim(result1[j].title, 50)+'</a></h3>';
				
		recentUploads +='<div class="content">';
        recentUploads +='<div class="fill_narrow_blind_wrap">';
		recentUploads +='<a href="/multimedia/videogallery/index.html?media_id='+result1[j].id+'"><IMG WIDTH="226" ALT="'+result1[j].title+'" TITLE="'+result1[j].title+'" src="http://cdn-aki.vmixcore.com/imgman.jpg?width=226&amp;height=170&amp;fill=000000000&amp;url=' + result1[j].thumbnail[0].url + '" HEIGHT="170" ALIGN="Bottom" BORDER="0" /></a>';
        recentUploads +='</div>';
        recentUploads +='<div class="story_link">';
        recentUploads +='<a href="/multimedia/videogallery/index.html?media_id='+result1[j].id+'">&rsaquo; View This Video</a>';
        recentUploads +='</div>';
        recentUploads +='</div>';
        recentUploads +='<div class="footer"></div>';		
		}
						
		}
		
		recentUploads +='</div>';
        recentUploads +='<div class="more_button">';
		
		if (enableArchives == "Yes"){
		
		var collectionVmixInputData=vmixInputData;
		if (vmixInputData.indexOf(",") != -1)
		{vmixInputData=vmixInputData.substring(0,vmixInputData.lastIndexOf(","));}
		
		var label='';
		if (archiveLabel != ''){
		label=archiveLabel;
		}else{
		label='View Archives';
		}
		
		var archive_url='';
		if (overrideArchiveUrl != ''){
		archive_url=overrideArchiveUrl;
		}else{
		if (action == "getGenreVideos"){
		archive_url='/multimedia/videogallery/index.html?genre_id='+vmixInputData;
		}else if (action == "getSearchVideos"){
        archive_url='/multimedia/videogallery/index.html?search_query='+vmixInputData;
		}else if (action == "getCollectionVideos"){
        archive_url='/multimedia/videogallery/index.html?collection_id='+collectionVmixInputData;
		}else{
		archive_url='/multimedia/videogallery/index.html?media_id='+result1[0].id;
		}
		}
		
        recentUploads +='<a class="linkbutton_on_blue" href="'+archive_url+'">'+label+'</a>';
		}
		
		recentUploads +='</div>';
		recentUploads +='</div><div class="bottom_cap"></div></div>';
		
		}
		else
        {
		
		throw err;		
        
		/*
         if (action == "getGenreVideos"){
		 recentUploads +='Please check the genre id given. We do not have any data returned for the given genre id';
         }else if (action == "getCollectionVideos"){
		 recentUploads +='Please check the collection id given. We do not have any data returned for the given collection id';
         }else if (action == "getMediaVideos"){
		 recentUploads +='Please check the media id given. We do not have any data returned for the given media id';
         }else if (action == "getSearchVideos"){
		 recentUploads +='Please check the search term given. We do not have any data returned for the given search term';
         }
		 */
		 
        }
		
		//alert(recentUploads);		
		jQuery('#'+divId).html(recentUploads);
		
		}catch (err)
      {
   
            //recentUploads='System encountered a problem loading videos on this page. Please visit <a href="http://www.nasa.gov/videos">http://www.nasa.gov/videos</a> to watch NASA&acute;s latest videos.';
			recentUploads="";
		    jQuery('#'+divId).html(recentUploads);
			$(divId).setStyle({display:'none',visibility:'hidden'});
   
      }
		
		
		var allBlinds = $$('.narrow_blue_blinds').map(function(narrow_blue_blinds){
		var contents = narrow_blue_blinds.getElementsBySelector('.content');
		var cap = narrow_blue_blinds.getElementsBySelector('.cap')[0];
		return new Blinds(contents,narrow_blue_blinds,cap);
	});

	var allBlinds = $$('.narrow_blue_blinds_img').map(function(narrow_blue_blinds_img){
		var contents = narrow_blue_blinds_img.getElementsBySelector('.content');
		var cap = narrow_blue_blinds_img.getElementsBySelector('.cap')[0];
		return new Blinds(contents,narrow_blue_blinds_img,cap);
	});
 
    });
   
   
   }else if (module.indexOf("Landing-Blinds-Grey-Med") != -1 ){

     
   jQuery.getJSON(url, function(object){
   
   try{

        var recentUploads='';
        var result1='';
   
        recentUploads+='<div class="top_middle (none)" style="text-align: left;">';
        recentUploads+='<div class="top_middle_cap"></div>';
        recentUploads+='<h2 class="top_middle_head">'+vmixTrim(title,37)+'</h2>';

	    if (action == "getGenreVideos" || action == "getCollectionVideos" )
		{result1=object.media;
		}else if (action == "getSearchVideos"){
		result1=object.medias.media;
		}else if (action == "getMediaVideos"){
		result1=[];
		object=object.media;
	
		for(i = 0; i < mediaIdArray.length; i++){
	    for (var key in object) {
		if (mediaIdArray[i] == key){
		    result1.push(object[key]);
		}
		}}
		
		/*for(i = 0; i < result1.length; i++){
	        alert("Result " + i + " = " + result1[i].id); 
        }*/
		}
		
		
		if (result1.length > 0 ){ 
		
		recentUploads+='<div class="blinds 200 top_middle_blinds prejs_topmiddle" style="height: auto;">';
        
		if (noOfItems == ''){
         noOfItems=result1.length
        }

		
		if (noOfItems > result1.length)
		{noOfItems=result1.length};
		
	    for (j=0;j<noOfItems;j++){

    	if (j == 0)
		{recentUploads +='<div class="cap"></div>';}
					
		if (action == "getCollectionVideos" ){			
		recentUploads +='<h3 class="top_h3">';
        recentUploads +='<a href="/multimedia/videogallery/index.html?collection_id='+vmixInputData+'&amp;media_id='+result1[j].id+'">'+ vmixTrim(result1[j].title, 50)+'</a></h3>';
				
		recentUploads +='<div class="content">';
        recentUploads +='<div class="fill_narrow_blind_wrap">';
		recentUploads +='<a href="/multimedia/videogallery/index.html?collection_id='+vmixInputData+'&amp;media_id='+result1[j].id+'"><IMG WIDTH="226" ALT="'+result1[j].title+'" TITLE="'+result1[j].title+'" src="http://cdn-aki.vmixcore.com/imgman.jpg?width=226&amp;height=170&amp;fill=000000000&amp;url=' + result1[j].thumbnail[0].url + '" HEIGHT="170" ALIGN="Bottom" BORDER="0" /></a>';
        recentUploads +='</div>';
		if (result1[j].description && result1[j].description != ''){
		recentUploads +='<p>';
		recentUploads +=vmixTrim(result1[j].description,300);
		recentUploads +='</p>';
		}
		recentUploads +='<div class="story_link">';
        recentUploads +='<a href="/multimedia/videogallery/index.html?collection_id='+vmixInputData+'&amp;media_id='+result1[j].id+'">&rsaquo; View This Video</a>';
        recentUploads +='</div>';
        recentUploads +='</div>';
        		
		}else{
			
		recentUploads +='<h3 class="top_h3">';
        recentUploads +='<a href="/multimedia/videogallery/index.html?media_id='+result1[j].id+'">'+ vmixTrim(result1[j].title, 50)+'</a></h3>';
				
		recentUploads +='<div class="content">';
        recentUploads +='<div class="fill_narrow_blind_wrap">';
		recentUploads +='<a href="/multimedia/videogallery/index.html?media_id='+result1[j].id+'"><IMG WIDTH="226" ALT="'+result1[j].title+'" TITLE="'+result1[j].title+'" src="http://cdn-aki.vmixcore.com/imgman.jpg?width=226&amp;height=170&amp;fill=000000000&amp;url=' + result1[j].thumbnail[0].url + '" HEIGHT="170" ALIGN="Bottom" BORDER="0" /></a>';
        recentUploads +='</div>';
        if (result1[j].description && result1[j].description != ''){
		recentUploads +='<p>';
		recentUploads +=vmixTrim(result1[j].description,300);
		recentUploads +='</p>';
		}
		recentUploads +='<div class="story_link">';
        recentUploads +='<a href="/multimedia/videogallery/index.html?media_id='+result1[j].id+'">&rsaquo; View This Video</a>';
        recentUploads +='</div>';
        recentUploads +='</div>';
        }
		
		if (j == (noOfItems-1)){
		recentUploads +='<div class="footer_b"></div>';
		}else{
		recentUploads +='<div class="footer"></div>';
		}
		
		}
		
		recentUploads +='</div>';
        recentUploads +='<div class="top_middle_footer">';
		
		if (enableArchives == "Yes"){
		
		var collectionVmixInputData=vmixInputData;
		if (vmixInputData.indexOf(",") != -1)
		{vmixInputData=vmixInputData.substring(0,vmixInputData.lastIndexOf(","));}
		
		var label='';
		if (archiveLabel != ''){
		label=archiveLabel;
		}else{
		label='View Archives';
		}
		
		var archive_url='';
		if (overrideArchiveUrl != ''){
		archive_url=overrideArchiveUrl;
		}else{
		if (action == "getGenreVideos"){
		archive_url='/multimedia/videogallery/index.html?genre_id='+vmixInputData;
		}else if (action == "getSearchVideos"){
        archive_url='/multimedia/videogallery/index.html?search_query='+vmixInputData;
		}else if (action == "getCollectionVideos"){
        archive_url='/multimedia/videogallery/index.html?collection_id='+collectionVmixInputData;
		}else{
		archive_url='/multimedia/videogallery/index.html?media_id='+result1[0].id;
		}
		}
		
        recentUploads +='<a class="linkbutton_on_blue" href="'+archive_url+'">'+label+'</a>';
		}
		
		recentUploads +='</div>';
		recentUploads +='</div>';
		
		}
		else
        {
		
		throw err;		
        
		/*
         if (action == "getGenreVideos"){
		 recentUploads +='Please check the genre id given. We do not have any data returned for the given genre id';
         }else if (action == "getCollectionVideos"){
		 recentUploads +='Please check the collection id given. We do not have any data returned for the given collection id';
         }else if (action == "getMediaVideos"){
		 recentUploads +='Please check the media id given. We do not have any data returned for the given media id';
         }else if (action == "getSearchVideos"){
		 recentUploads +='Please check the search term given. We do not have any data returned for the given search term';
         }
		 */
		 
        }
		
		//alert(recentUploads);		
		jQuery('#'+divId).html(recentUploads);
		
		}catch (err)
      {
   
            //recentUploads='System encountered a problem loading videos on this page. Please visit <a href="http://www.nasa.gov/videos">http://www.nasa.gov/videos</a> to watch NASA&acute;s latest videos.';
			recentUploads="";
		    jQuery('#'+divId).html(recentUploads);
			$(divId).setStyle({display:'none',visibility:'hidden'});
   
      }
		
		
		var allBlinds = $$('.top_middle_blinds').map(function(narrow_blue_blinds){
		var contents = narrow_blue_blinds.getElementsBySelector('.content');
		var cap = narrow_blue_blinds.getElementsBySelector('.cap')[0];
		return new Blinds(contents,narrow_blue_blinds,cap);
	});

	    var allBlinds = $$('.top_middle_blinds_img').map(function(narrow_blue_blinds_img){
		var contents = narrow_blue_blinds_img.getElementsBySelector('.content');
		var cap = narrow_blue_blinds_img.getElementsBySelector('.cap')[0];
		return new Blinds(contents,narrow_blue_blinds_img,cap);
	});
 
    });
   
   
   }else if (module.indexOf("Landing-NoBlinds-Blue-Sm") != -1 ){

     
   jQuery.getJSON(url, function(object){
   
   try{

        var recentUploads='';
        var result1='';
   
        
        recentUploads+='<div class="box_230_cap">';
        recentUploads+='<div class="top_cap"></div>';

        if (module == "Landing-NoBlinds-Blue-Sm(Variable Height)"){
		recentUploads+='<div id="narrow_blue_news" class="box_230 box_blue box_230_tall narrow_blue_news" style="height:auto;text-align:left;">';
		}else{
        recentUploads+='<div id="narrow_blue_news" class="box_230 box_blue box_230_tall narrow_blue_news" style="text-align:left">';
		}
		
        recentUploads+='<h2>'+vmixTrim(title,27)+'</h2>';
		recentUploads+='<div class="content_outline_blue">';

	    if (module == "Landing-NoBlinds-Blue-Sm(Variable Height)")
        {recentUploads+='<ul class="content_outline_black" style="height:auto" >';}
		else 
		{recentUploads+='<ul class="content_outline_black">';}
        
		if (action == "getGenreVideos" || action == "getCollectionVideos" )
		{result1=object.media;
		}else if (action == "getSearchVideos"){
		result1=object.medias.media;
		}else if (action == "getMediaVideos"){
		result1=[];
		object=object.media;
		for(i = 0; i < mediaIdArray.length; i++){
	    for (var key in object) {
		if (mediaIdArray[i] == key){
		    result1.push(object[key]);
		}
		}}
		}
		
			
		if (result1.length > 0 ){ 
		
		if (noOfItems == ''){
         noOfItems=result1.length
        }
		
		if (noOfItems > result1.length)
		{noOfItems=result1.length};
		
	    for (j=0;j<noOfItems;j++){

		
		 if (action == "getCollectionVideos" ){
		 recentUploads +='<li>';
         recentUploads +='<a class="small_legacy_wrap" href="/multimedia/videogallery/index.html?collection_id='+vmixInputData+'&amp;media_id='+result1[j].id+'"><img height="75" width="100" border="0" align="Bottom" src="http://cdn-aki.vmixcore.com/imgman.jpg?width=226&amp;height=170&amp;fill=000000000&amp;url=' + result1[j].thumbnail[0].url + '" title="'+result1[j].title+'" alt="'+result1[j].title+'"></a>';
         recentUploads +='<h3><a href="/multimedia/videogallery/index.html?collection_id='+vmixInputData+'&amp;media_id='+result1[j].id+'">'+result1[j].title+'</a></h3>';
         recentUploads +='<p>'+result1[j].description+'</p>';
         recentUploads +='</li>';			
		 
		 }else{
		 
		 recentUploads +='<li>';
         recentUploads +='<a class="small_legacy_wrap" href="/multimedia/videogallery/index.html?media_id='+result1[j].id+'"><img height="75" width="100" border="0" align="Bottom" src="http://cdn-aki.vmixcore.com/imgman.jpg?width=226&amp;height=170&amp;fill=000000000&amp;url=' + result1[j].thumbnail[0].url + '" title="'+result1[j].title+'" alt="'+result1[j].title+'"></a>';
         recentUploads +='<h3><a href="/multimedia/videogallery/index.html?media_id='+result1[j].id+'">'+result1[j].title+'</a></h3>';
         recentUploads +='<p>'+result1[j].description+'</p>';
         recentUploads +='</li>';			
		 }
		
        }
		
		recentUploads +='</ul>';

		if (enableArchives == "Yes"){
		
		var collectionVmixInputData=vmixInputData;
		if (vmixInputData.indexOf(",") != -1)
		{vmixInputData=vmixInputData.substring(0,vmixInputData.lastIndexOf(","));}
		
		var label='';
		if (archiveLabel != ''){
		label=archiveLabel;
		}else{
		label='View Archives';
		}
		
		var archive_url='';
		if (overrideArchiveUrl != ''){
		archive_url=overrideArchiveUrl;
		}else{
		if (action == "getGenreVideos"){
		archive_url='/multimedia/videogallery/index.html?genre_id='+vmixInputData;
		}else if (action == "getSearchVideos"){
        archive_url='/multimedia/videogallery/index.html?search_query='+vmixInputData;
		}else if (action == "getCollectionVideos"){
        archive_url='/multimedia/videogallery/index.html?collection_id='+collectionVmixInputData;
		}else{
		archive_url='/multimedia/videogallery/index.html?media_id='+result1[0].id;
		}
		}
		
		
		recentUploads +='<a href="'+archive_url+'" class="linkbutton_a-z">'+label+'</a>';
		}
		
		recentUploads +='</div><div class="bottom_cap"></div></div>';
				       
		}
		else
        {
		
		throw err;
		/*
         if (action == "getGenreVideos"){
		 recentUploads +='Please check the genre id given. We do not have any data returned for the given genre id';
         }else if (action == "getCollectionVideos"){
		 recentUploads +='Please check the collection id given. We do not have any data returned for the given collection id';
         }else if (action == "getMediaVideos"){
		 recentUploads +='Please check the media id given. We do not have any data returned for the given media id';
         }else if (action == "getSearchVideos"){
		 recentUploads +='Please check the search term given. We do not have any data returned for the given search term';
         }
		 */
		
        }

		//alert(recentUploads);		
		jQuery('#'+divId).html(recentUploads);
		
		}catch (err)
      {
            recentUploads="";
		    jQuery('#'+divId).html(recentUploads);
			$(divId).setStyle({display:'none',visibility:'hidden'});
   
             
      }
		
		
 
    });
   
   
   }else if (module == "Landing-NoBlinds-Grey-Med" || module == "Landing-NoBlinds-Grey-Large"){
      
   jQuery.getJSON(url, function(object){
   
    try{

        var recentUploads='';
		
		
        if (module == "Landing-NoBlinds-Grey-Med"){
        recentUploads+='<div class="box_470_cap ArchiveBrowse">';
        recentUploads+='<div class="top_cap_white"></div>';
        recentUploads+='<div class="box_470 box_white">';
		recentUploads+='<h2 class="h2_small">'+vmixTrim(title,75)+'</h2>';
   		recentUploads+='<div id="imgGallery3Col"><ul>';}
		if (module == "Landing-NoBlinds-Grey-Large"){
	    recentUploads+='<div class="box_710_cap ArchiveBrowse">';
        recentUploads+='<div class="top_cap_white"></div>';
        recentUploads+='<div class="box_710 box_white box_710_white wide_img_archive" >';
		recentUploads+='<h2 class="h2_small">'+vmixTrim(title,75)+'</h2>';
        recentUploads+='<div id="imgGallery5Col"><ul>';}
		
		
		
		
		if (action == "getGenreVideos" || action == "getCollectionVideos" )
		{result1=object.media;
		}else if (action == "getSearchVideos"){
		result1=object.medias.media;
		}else if (action == "getMediaVideos"){
		result1=[];
		object=object.media;
		for(i = 0; i < mediaIdArray.length; i++){
	    for (var key in object) {
		if (mediaIdArray[i] == key){
		    result1.push(object[key]);
		}
		}}
		}
		
		if (result1.length > 0 ){ 
		
		if (noOfItems == ''){
         noOfItems=result1.length
        }

		
		if (noOfItems > result1.length)
		{noOfItems=result1.length};
		
	    for (j=0;j<noOfItems;j++){
		
		if ( action == "getCollectionVideos" ) {
    	recentUploads +='<li style="height:150px;">';
        recentUploads +='<a href="/multimedia/videogallery/index.html?collection_id='+vmixInputData+'&amp;media_id='+result1[j].id+'"><IMG WIDTH="100" ALT="'+result1[j].title+'" TITLE="'+result1[j].title+'" src="http://cdn-aki.vmixcore.com/imgman.jpg?width=100&amp;height=75&amp;fill=000000000&amp;url=' + result1[j].thumbnail[0].url + '" HEIGHT="75" ALIGN="Bottom" BORDER="0" /></a>';

		recentUploads +='<p>'+vmixTrim(result1[j].title, 50)+'</p>';
        recentUploads +='<p><a href="/multimedia/videogallery/index.html?collection_id='+vmixInputData+'&amp;media_id='+result1[j].id+'">&rsaquo; View This Video</a></p>';
		recentUploads +='</li>';
		}else{
		recentUploads +='<li style="height:150px;">';
        recentUploads +='<a href="/multimedia/videogallery/index.html?media_id='+result1[j].id+'"><IMG WIDTH="100" ALT="'+result1[j].title+'" TITLE="'+result1[j].title+'" src="http://cdn-aki.vmixcore.com/imgman.jpg?width=100&amp;height=75&amp;fill=000000000&amp;url=' + result1[j].thumbnail[0].url + '" HEIGHT="75" ALIGN="Bottom" BORDER="0" /></a>';

		recentUploads +='<p>'+vmixTrim(result1[j].title, 50)+'</p>';
        recentUploads +='<p><a href="/multimedia/videogallery/index.html?media_id='+result1[j].id+'">&rsaquo; View This Video</a></p>';
		recentUploads +='</li>';
		}
        					
		}
		
		recentUploads +='</ul>';
		
		if (module == "Landing-NoBlinds-Grey-Med"){
		recentUploads +='<div id="imgGallery3Colfooter">';
       	}else if (module == "Landing-NoBlinds-Grey-Large"){
        recentUploads +='<div id="imgGallery5Colfooter">';
        }

		if (enableArchives == "Yes"){
		
		var collectionVmixInputData=vmixInputData;
		if (vmixInputData.indexOf(",") != -1)
		{vmixInputData=vmixInputData.substring(0,vmixInputData.lastIndexOf(","));}
		
		var label='';
		if (archiveLabel != ''){
		label=archiveLabel;
		}else{
		label='View Archives';
		}
		
		var archive_url='';
		if (overrideArchiveUrl != ''){
		archive_url=overrideArchiveUrl;
		}else{
		if (action == "getGenreVideos"){
		archive_url='/multimedia/videogallery/index.html?genre_id='+vmixInputData;
		}else if (action == "getSearchVideos"){
        archive_url='/multimedia/videogallery/index.html?search_query='+vmixInputData;
		}else if (action == "getCollectionVideos"){
        archive_url='/multimedia/videogallery/index.html?collection_id='+collectionVmixInputData;
		}else{
		archive_url='/multimedia/videogallery/index.html?media_id='+result1[0].id;
		}
		}
		
        		
        if (module == "Landing-NoBlinds-Grey-Med"){
		recentUploads +='<p><a class="imgGallery3Colfooterbutton" href="'+archive_url+'">'+label+'</a></p>';
        }else if (module == "Landing-NoBlinds-Grey-Large"){
        recentUploads +='<p><a class="imgGallery5Colfooterbutton" href="'+archive_url+'">'+label+'</a></p>';
		}
		
		}
		
		if (module == "Landing-NoBlinds-Grey-Med"){
		recentUploads +='</div>';
		}else if (module == "Landing-NoBlinds-Grey-Large"){
        recentUploads +='</div>';
		}
		
		recentUploads +='</div></div><div class="bottom_cap_white"></div>';
        //alert(recentUploads);		
		
		       
		}
		else
        {
		
		throw err;
		
		/*
		if (action == "getGenreVideos"){
		 recentUploads +='Please check the genre id given. We do not have any data returned for the given genre id';
         }else if (action == "getCollectionVideos"){
		 recentUploads +='Please check the collection id given. We do not have any data returned for the given collection id';
         }else if (action == "getMediaVideos"){
		 recentUploads +='Please check the media id given. We do not have any data returned for the given media id';
         }else if (action == "getSearchVideos"){
		 recentUploads +='Please check the search term given. We do not have any data returned for the given search term';
         }
		*/
		
		
		}

		jQuery('#'+divId).html(recentUploads);
		
		}catch (err)
      {
            recentUploads="";
		    jQuery('#'+divId).html(recentUploads);
			$(divId).setStyle({display:'none',visibility:'hidden'});
   
       
      }
 
    });
      
   }else if (module == "Landing-NoBlinds-Grey-Med(With Description)" || module == "Landing-NoBlinds-Grey-Large(With Description)"){
      
        jQuery.getJSON(url, function(object){
		
		try{

        var recentUploads='';
		var result1='';
		
		if (module == "Landing-NoBlinds-Grey-Med(With Description)"){
        recentUploads+='<div class="box_470_cap ArchiveBrowse">';
        recentUploads+='<div class="top_cap_white"></div>';
        recentUploads+='<div class="box_470 box_white">';
		recentUploads+='<h2 class="h2_small">'+vmixTrim(title,75)+'</h2>';
   		recentUploads+='<div id="browseArchive"><ul>';}
		if (module == "Landing-NoBlinds-Grey-Large(With Description)"){
	    recentUploads+='<div class="box_710_cap ArchiveBrowse">';
        recentUploads+='<div class="top_cap_white"></div>';
        recentUploads+='<div class="box_710 box_white box_710_white wide_img_archive" style="height: auto; text-align: left;">';
		recentUploads+='<h2 class="h2_small">'+vmixTrim(title,75)+'</h2>';
        recentUploads+='<div id="browseArchive"><ul>';}
		
       
		
		if (action == "getGenreVideos" || action == "getCollectionVideos" )
		{result1=object.media;
		}else if (action == "getSearchVideos"){
		result1=object.medias.media;
		}else if (action == "getMediaVideos"){
		result1=[];
		object=object.media;
		for(i = 0; i < mediaIdArray.length; i++){
	    for (var key in object) {
		if (mediaIdArray[i] == key){
		    result1.push(object[key]);
		}
		}}
		}
		
		
		
		if (result1.length > 0 ){ 
		
         if (noOfItems == ''){
         noOfItems=result1.length
        }

		if (noOfItems > result1.length)
		{noOfItems=result1.length};
		
	    for (j=0;j<noOfItems;j++){

		if ( action == "getCollectionVideos" ){
    	recentUploads +='<li>';
		recentUploads +='<a class="small_legacy_wrap" href="/multimedia/videogallery/index.html?collection_id='+vmixInputData+'&amp;media_id='+result1[j].id+'"><img height="75" width="100" border="0" align="Bottom" src="http://cdn-aki.vmixcore.com/imgman.jpg?width=100&amp;height=75&amp;fill=000000000&amp;url=' + result1[j].thumbnail[0].url + '" title="'+result1[j].title+'" alt="'+result1[j].title+'"></a>';
		recentUploads +='<h3><a href="/multimedia/videogallery/index.html?collection_id='+vmixInputData+'&amp;media_id='+result1[j].id+'">'+result1[j].title+'</a></h3>';
        recentUploads +='<p>'+result1[j].description+'</p>';
		recentUploads +='</li>';
		}else{
		recentUploads +='<li>';
		recentUploads +='<a class="small_legacy_wrap" href="/multimedia/videogallery/index.html?media_id='+result1[j].id+'"><img height="75" width="100" border="0" align="Bottom" src="http://cdn-aki.vmixcore.com/imgman.jpg?width=100&amp;height=75&amp;fill=000000000&amp;url=' + result1[j].thumbnail[0].url + '" title="'+result1[j].title+'" alt="'+result1[j].title+'"></a>';
		recentUploads +='<h3><a href="/multimedia/videogallery/index.html?media_id='+result1[j].id+'">'+result1[j].title+'</a></h3>';
        recentUploads +='<p>'+result1[j].description+'</p>';
		recentUploads +='</li>';
		}
        				
		}
		
		recentUploads +='</ul>';
		
		if (module == "Landing-NoBlinds-Grey-Med(With Description)"){
		recentUploads +='<div class="view_all_navigation_bottom">';
        recentUploads +='<div class="view_all_navigation blue_text">';
		}
		
		if (module == "Landing-NoBlinds-Grey-Large(With Description)"){
		recentUploads +='<div class="footer">';
        recentUploads +='<p>';
		}
		

		if (enableArchives == "Yes"){
       
	    var collectionVmixInputData=vmixInputData;
	  	if (vmixInputData.indexOf(",") != -1)
		{vmixInputData=vmixInputData.substring(0,vmixInputData.lastIndexOf(","));}
		
		var label='';
		if (archiveLabel != ''){
		label=archiveLabel;
		}else{
		label='View Archives';
		}
		
		var archive_url='';
		if (overrideArchiveUrl != ''){
		archive_url=overrideArchiveUrl;
		}else{
		if (action == "getGenreVideos"){
		archive_url='/multimedia/videogallery/index.html?genre_id='+vmixInputData;
		}else if (action == "getSearchVideos"){
        archive_url='/multimedia/videogallery/index.html?search_query='+vmixInputData;
		}else if (action == "getCollectionVideos"){
        archive_url='/multimedia/videogallery/index.html?collection_id='+collectionVmixInputData;
		}else{
		archive_url='/multimedia/videogallery/index.html?media_id='+result1[0].id;
		}
		}
		
		
		if (module == "Landing-NoBlinds-Grey-Med(With Description)"){
		recentUploads +='<a href="'+archive_url+'">'+label+'</a>';
		}
				
        if (module == "Landing-NoBlinds-Grey-Large(With Description)"){
		recentUploads +='<a href="'+archive_url+'" class="linkbutton_155_white">'+label+'</a>';
		}
		
		}
		
		if (module == "Landing-NoBlinds-Grey-Med(With Description)"){
		 recentUploads +='</div></div>';
		} 
		
		if (module == "Landing-NoBlinds-Grey-Large(With Description)"){
		recentUploads +='</p>';
        recentUploads +='</div>';
		}
		
		
		recentUploads +='</div><div class="bottom_cap"></div></div>';
        //alert(recentUploads);		
		
		       
		}
		else
        {
		
		
		throw err;
		
		/*
		  if (action == "getGenreVideos"){
		 recentUploads +='Please check the genre id given. We do not have any data returned for the given genre id';
         }else if (action == "getCollectionVideos"){
		 recentUploads +='Please check the collection id given. We do not have any data returned for the given collection id';
         }else if (action == "getMediaVideos"){
		 recentUploads +='Please check the media id given. We do not have any data returned for the given media id';
         }else if (action == "getSearchVideos"){
		 recentUploads +='Please check the search term given. We do not have any data returned for the given search term';
         }
		 */
		 
		 
		
        }

        jQuery('#'+divId).html(recentUploads);
		
		}catch (err)
      {
            recentUploads="";
		    jQuery('#'+divId).html(recentUploads);
			$(divId).setStyle({display:'none',visibility:'hidden'});
   
       
      }
    });
      
   }else if (module == "HomePage-MultimediaBox-OnDemandVideos"){
      
        jQuery.getJSON(url, function(object){

	try{
	
        var recentUploads='';
		
		if (action == "getGenreVideos" || action == "getCollectionVideos" )
		{result1=object.media;
		}else if (action == "getSearchVideos"){
		result1=object.medias.media;
		}else if (action == "getMediaVideos"){
		result1=[];
		object=object.media;
		for(i = 0; i < mediaIdArray.length; i++){
	    for (var key in object) {
		if (mediaIdArray[i] == key){
		    result1.push(object[key]);
		}
		}}
		}
		
		if (result1.length > 0 ){ 
		
         if (noOfItems == '' || noOfItems > result1.length){
         noOfItems=result1.length
        }
		
		noOfItems=3;

		for (j=0;j<noOfItems;j++){

		if (j==0)
    	{recentUploads +='<li id="nasa_multimedia_ondemand'+j+'">';}
		else
		{recentUploads +='<li style="display:none;visibility:hidden;" id="nasa_multimedia_ondemand'+j+'">';}
		recentUploads +='<a href="/multimedia/videogallery/index.html?media_id='+result1[j].id+'"><img height="75" width="100" border="0" align="Bottom" src="http://cdn-aki.vmixcore.com/imgman.jpg?width=100&amp;height=75&amp;fill=000000000&amp;url=' + result1[j].thumbnail[0].url + '" title="'+result1[j].title+'" alt="'+result1[j].title+'"></a>';
		recentUploads +='<h3>Videos</h3>';
		recentUploads +='<p><a href="/multimedia/videogallery/index.html?media_id='+result1[j].id+'">'+vmixTrim(result1[j].title,100)+'</a></p>';
        recentUploads +='<a class="linkbutton_tiny play_button" href="/multimedia/videogallery/index.html?media_id='+result1[j].id+'">Play</a>';
		recentUploads +='</li>';
        				
		}
		
		recentUploads +='<div class="nasa_multimedia_box_controls"> <a id="ondemand_dot_button0" src="/templateimages/redesign/modules/imagegallery/dot1-light.gif" alt="Item 1" title="Item 1" class="dot_button active" href="javascript:nasaHomeCurrentItem(\'nasa_multimedia_ondemand\',\'nasaMultimediaOnDemandVideosCurrentItem\',3,\'ondemand_dot_button\',0)"><span class="hide">1</span></a><a id="ondemand_dot_button1" src="/templateimages/redesign/modules/imagegallery/dot1-dark.gif" alt="Item 2" title="Item 2" class="dot_button inactive" href="javascript:nasaHomeCurrentItem(\'nasa_multimedia_ondemand\',\'nasaMultimediaOnDemandVideosCurrentItem\',3,\'ondemand_dot_button\',1)"><span class="hide">2</span></a><a id="ondemand_dot_button2" src="/templateimages/redesign/modules/imagegallery/dot1-dark.gif" alt="Item 3" title="Item 3" class="dot_button inactive" href="javascript:nasaHomeCurrentItem(\'nasa_multimedia_ondemand\',\'nasaMultimediaOnDemandVideosCurrentItem\',3,\'ondemand_dot_button\',2)"><span class="hide">3</span></a><a id="prev-button" src="/templateimages/redesign/modules/imagegallery/arrow-lt-4.gif" alt="Previous" title="Previous" href="javascript:nasaHomePrevItem(\'nasa_multimedia_ondemand\',\'nasaMultimediaOnDemandVideosCurrentItem\',3,\'ondemand_dot_button\')"><span class="hide">4</span></a><a id="next-button" src="/templateimages/redesign/modules/imagegallery/arrow-rt-4.gif" alt="Next" title="Next" href="javascript:nasaHomeNextItem(\'nasa_multimedia_ondemand\',\'nasaMultimediaOnDemandVideosCurrentItem\',3,\'ondemand_dot_button\')"><span class="hide">5</span></a><a href="/multimedia/videogallery/index.html" class="linkbutton_tiny viewall_button">View All</a> </div> ';

		//alert(recentUploads);		
		jQuery('#'+divId).html(recentUploads);
		       
		}
		else
        {
		
		
		throw err;
		
		
		/*
		  if (action == "getGenreVideos"){
		 recentUploads +='Please check the genre id given. We do not have any data returned for the given genre id';
         }else if (action == "getCollectionVideos"){
		 recentUploads +='Please check the collection id given. We do not have any data returned for the given collection id';
         }else if (action == "getMediaVideos"){
		 recentUploads +='Please check the media id given. We do not have any data returned for the given media id';
         }else if (action == "getSearchVideos"){
		 recentUploads +='Please check the search term given. We do not have any data returned for the given search term';
         }
		 */
		 
		
        }

        jQuery('#'+divId).html(recentUploads);
		
		
	}catch (err)
      {
   
            recentUploads="";
		    jQuery('#'+divId).html(recentUploads);
			$(divId).setStyle({display:'none',visibility:'hidden'});
   
   
      }
		
		
		
    });
      
   }else if (module == "HomePage-BaynoteWidget-MostWatchedVideos"){
      
	    url1='http://'+api_url+'/apis/collection.php?action=getCollectionMedias&collection_id=13230&start=0&class_id=1&alltime=1&show_total_view=1&export=JSONP&limit=6&atoken='+atoken+'&callback=?';
			  
        jQuery.getJSON(url1, function(object){

        var recentUploads='';
        		
		var result=object.media;
		//alert(result.length);
	    for (j=0;j<result.length;j++){

		if (result[j].id !=  undefined && result[j].title !=  undefined && result[j].thumbnail[0].url != undefined){
			
    	recentUploads +='<li class="baynote">';
		recentUploads +='<div class="baynoteImgDivLeft">';
		recentUploads +='<a class="baynoteLinks" href="/multimedia/videogallery/index.html?media_id='+result[j].id+'">';
		recentUploads +='<img height="48" width="64" class="baynoteImg" src="http://cdn-aki.vmixcore.com/imgman.jpg?width=64&amp;height=48&amp;fill=000000000&amp;url=' + result[j].thumbnail[0].url + '" title="'+result[j].title+'" alt="'+result[j].title+'"></a></div>';
		recentUploads +='<div class="baynoteImgDivRight">';
		recentUploads +='<a class="baynoteLinks" href="/multimedia/videogallery/index.html?media_id='+result[j].id+'"><span class="baynoteImgTitle">'+vmixTrim(result[j].title, 35)+'</span></a>';
		recentUploads +='</div>';
		recentUploads +='</li>';
		
		}
			
		}
	
	    //alert(recentUploads);
	  	jQuery('#vmixMostWatchedVideoData').html(recentUploads);

    });
      
   }
   }
   
   
   
   
}   
     
    function vmixTrim(str, str_max){
	 if (str != eval('') && str != undefined && str != null){
	    if (str.length > str_max){
	        str = str.substr(0, str_max);
			if (str.lastIndexOf(" ") > -1)
			{str = str.substr(0,(str.lastIndexOf(" ")));}
			return str+" ...";
	    } else {
	        return str;
	    }
		}
	}











