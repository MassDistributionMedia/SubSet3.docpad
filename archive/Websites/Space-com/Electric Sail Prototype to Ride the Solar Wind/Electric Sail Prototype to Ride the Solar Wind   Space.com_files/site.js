function build_ad(zone,tile, ad_num, w,h, ord, dmn,sz,maxHeight,kw) {
    sz = !sz ? '' : sz;
    kw = !kw ? '' : kw;
    maxHeight = !maxHeight ? 0 : maxHeight;
    dmn = !dmn ? '' : dmn;

    var params='path=' + escape(zone) + '&w='+w+'&h='+h+'&tile='+tile+'&ord=' + ord + '&dmn=' + dmn+'&num='+ad_num+'&sz='+sz+'&kw='+kw;
    var adcont=document.getElementById('ad_'+ad_num);
    var subdomainArray = location.href.split(".",1);
    var subdomain = subdomainArray.toString();
    
    if (subdomain.match("cms") != null || subdomain.match("10") !=null) {
        adcont.innerHTML='<img src="/images/site/filler.jpg" height="'+h+'" width="'+w+'" />';
    }
    else {

        if(document.getElementById('ad_'+ad_num+'_ifm')) {
            ifm=document.getElementById('ad_'+ad_num+'_ifm');
        }
        else {
            adcont.innerHTML='';
            ifm=document.createElement('iframe');
            ifm.id='ad_' + ad_num + '_ifm';
            ifm.style.width=w + 'px';
            ifm.style.height=h +'px';
            ifm.style.border='0';
            ifm.setAttribute('allowTransparency',"true");
        ifm.frameBorder='0';
            ifm.scrolling='no';
            ifm.setAttribute('onload','resize_ad_frame("ad_'+ ad_num +'_ifm", '+h+', '+maxHeight+');');
            if(!ifm.addEventListener) {
                ifm.attachEvent('onload',function() { top.resize_ad_frame("ad_"+ ad_num +"_ifm", h, maxHeight); });
            }
            adcont.appendChild(ifm);
        }
            ifm.src='/javascripts/servead.php?' + params;
    }
}

function resize_ad_frame(frameId, orig_height, maxHeight) {
    var ifm=top.document.getElementById(frameId);
    var height=ifm.contentWindow.document.documentElement.scrollHeight;
    if(maxHeight > 0 && maxHeight < height) { height=maxHeight; }
    if(height > orig_height) {
        ifm.style.height=height + 'px';
    }
}
function runAds() {
    if(typeof(pagebanners) !='undefined') {
        // reset the ord value so we get minty freshness
            var axel = Math.random() + "";
            var ord = axel * 1000000000000000000;
        for(var i=0; i<pagebanners.ads.length; i++) {
            var curad=pagebanners.ads[i];
            var cont=document.getElementById('ad_' + curad.num)
            if(typeof(cont) != 'undefined' && cont != null) {
                build_ad(pagebanners.zone,curad.tile,curad.num,curad.w,curad.h,ord,pagebanners.domain,curad.sz, curad.mh, !pagebanners.kw ? curad.kw : pagebanners.kw);
            }
        }
    }
}
function loadComscore(){
    // Omniture.
    currentUrl = window.location.href;
    COMSCORE.beacon({
    c1:2,
    c2:"6035753",
    c3:"6035753",
    c4:currentUrl.replace('index.html', ''),
    c5:"Technology - News",
    c6:"",
    c15:""
    });
}
function loadVideoComscore(url, title){
    currentUrl = window.location.href;
    COMSCORE.beacon({
    c1:1,
    c2:"6035753",
    c3:"6035753",
    c4:currentUrl.replace('index.html', ''),
    c5:02,
    c6:"sdc",
    c7:url,
    c8:title,
    c15:""
    });
}

function reloadScripts(event_name, targetTags){
    event_name = !event_name ? '' : ':' + event_name;
    targetTags = !targetTags ? [] : targetTags
    // Omniture
    if(!s.t && !!s_gi && s_account) {
        s=s_gi(s_account);
    }
    var ini_loc = s.prop17;
    s.prop17 = (event_name == '') ? s.prop17 : s.prop17.replace(/:.*?$/,event_name);
    s.eVar17=s.prop17;
    s.t();
    s.prop17 = ini_loc;
    s.eVar17=s.prop17;
    // Comscore
    loadComscore();
    // Google Analytics
    _gaq.push(['_trackPageview']);
    // Reload ads

    if(typeof(googletag) != "undefined"){ //determin if use old or new dfp tags
        if(targetTags.length > 0){
            kill_ad_frames(targetTags);
            var loadAds=[];
            for(curAd in targetTags) { loadAds.push(adSlots[targetTags[curAd]]); }
            googletag.pubads().refresh(loadAds);
        } else{
            var loadAds=[];
            var AdNames=[];
            for(var ad_name in adSlots){
                if(ad_name.search(/sense[1-3]/)<0){
                    loadAds.push(adSlots[ad_name]);
                    AdNames.push(ad_name);
                }
            }
            kill_ad_frames(AdNames);
            googletag.pubads().refresh(loadAds);
        }
    }else{
        runAds();
    }
}  

//hack to get new dfp ads to consistenly load in crome
//destroys iframe before google refresh() method is called
function kill_ad_frames(which_ads){
    var which_ads = !which_ads ? adSlots : which_ads;
    for(curAd in which_ads) {
        var ad = document.getElementById((!adSlots[curAd] ? which_ads[curAd] : curAd));
        if(typeof(ad) != 'undefined' && ad) {
            var adfrm=ad.getElementsByTagName('iframe')[0];
            adfrm.src='';
        }
    }
}

function loadPopupImage(url, clickedItem,newId){
    $jq('#currentid')[0].value=newId;
    if(document.getElementById('current_limage'+newId)){
        document.getElementById('current_limage'+newId).src=url;
        document.getElementById('popped_image').src='';
        document.getElementById('popped_image').src=url;
    }

    window.currentimage=clickedItem;

        reloadScripts();
}

function popupImageSize(url){
    if(url == '') {
        return false;
    }
    var newId=$jq('#currentid')[0].value;
    var popimg=document.getElementById('popped_image');

    var heightx = popimg.offsetHeight;
    var widthx = popimg.offsetWidth;

    var browseheight=(window.innerHeight) ? window.innerHeight:document.documentElement.clientHeight;
    var browsewidth=(window.innerWidth) ? window.innerWidth:document.documentElement.clientWidth;
    var height=(browseheight < heightx) ? browseheight-100:heightx;
    var width=(browsewidth < widthx) ? browsewidth-60:widthx;

    width = (width > 900) ? 900 : width;
    height = (height > 600) ? 600 : height;
    var circus=document.getElementById('current_cus'+newId);
    var cus=document.getElementById('custom'+newId);
    circus.style.overflow = "auto";

    if(widthx <= width && heightx <= height){
        circus.style.overflow = "hidden";
    }
    cus.style.width = width+"px";
    cus.style.height = height+"px";
    circus.style.width = width+"px";
    circus.style.height = height+"px";

    $jq(window.currentimage).overlay({
      mask:{ opacity: 0.5,
      color: '#000' },
      effect: 'apple',
      left:'center',
      top:'center',
      load:true
    });
}
function block_iframe_download(width, height, html){
  /* This function will check to see if you are rendering this block of HTML in the CMS, if so, show a gray box of the width and height specified. */
  var location_check = location.href;
  if (location_check.match("stagingcms.space.com") != null || location_check.match("cms2.space.com") != null || location_check.match("10.207.58.195") != null ) {
	  return '<img src="/images/site/filler.jpg" height="'+height+'px" width="'+width+'px" />';
  }else{
    return html;
  }
}
/*  google event track build / runner */
function trackLink(e, num, trackGroup, trackName){
    var button;
    if (e.which == null) { // IE...
       button= (e.button < 2) ? true : ((e.button == 4) ? true : false);
    }
    else { // everybody else *
       button= (e.which < 2) ? true : ((e.which == 2) ? true : false);
    }
    if(button){
      _gaq.push(['_trackEvent', trackGroup, 'click', trackName+'_'+num+'']);
    }
  }
  function googleLinks(obj, num, trackGroup, trackName){
    if(!obj.addEventListener) {
      obj.attachEvent('onmouseup',function(event){ trackLink(event, num, trackGroup,trackName); });
    }else{
      obj.addEventListener("mouseup", function(event){ trackLink(event, num, trackGroup, trackName); }, false);
    }
  }

function buildLinkTracking( searchClass,  trackGroup, trackName, searchTags, exclusions, useCustomNum ) {
    var trackName = !trackName ? trackGroup : trackName;
    var useCustomNum = !!useCustomNum;
    var exclusions = !exclusions ? [] : exclusions;
    var searchTags = !searchTags ? ['a'] : searchTags;
    var trackElements=[];
    var trackNum = 1;

    for(var i=0; i < searchTags.length; i++) {
        tagName = searchTags[i];
        var searchItems = $jq('.' + searchClass);

        for( var j = 0; j < searchItems.length; j++) {
            var items=searchItems[j].getElementsByTagName(tagName);
            for( var k = 0; k < items.length; k++) { // sigh, can't concat nodeList directly into array...
                trackElements=trackElements.concat(items[k]);
            }
        }
    }
    for(var i = 0; i < trackElements.length; i++ ) {
        var curEle = trackElements[i];
        var skipIt=false;
        for(var j = 0; j < exclusions.length; j++ ) {
            if(curEle.className.indexOf(exclusions[j]) != -1) {
                skipIt=true;
                break;
            }
        }
        if(skipIt) {
            continue;
        }
        var numAppend = ((useCustomNum) ? ((curEle.className.length > 0) ? curEle.className : trackNum) : trackNum);
        googleLinks(curEle, numAppend, trackGroup, trackName);
        trackNum++;
    }
}
function plus_one_callback() { _gaq.push(['_trackEvent', 'plus-one', 'click', window.location.href]); }
/* end google event builder */
