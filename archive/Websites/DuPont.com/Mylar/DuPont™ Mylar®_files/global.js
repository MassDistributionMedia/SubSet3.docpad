 var name="flashdiv";
	 var requiredVersion = 5;
	 var useRedirect = false;
	
	 var flash2Installed = false;
	 var flash3Installed = false;
	 var flash4Installed = false;
	 var flash5Installed = false;
	 var flash6Installed = false;
	 var maxVersion = 6;
	 var actualVersion = 0;
	 var hasRightVersion = false;
	 var jsVersion = 1.0;
//scripttag1
	

	var isIE = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;
	var isWin = (navigator.appVersion.indexOf("Windows") != -1) ? true : false;
	jsVersion = 1.1;
	
	if(isIE && isWin)
	{
		document.write('<SCR' + 'IPT LANGUAGE=VBScript\> \n');
		document.write('on error resume next \n');
		document.write('flash2Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.2"))) \n');
		document.write('flash3Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.3"))) \n');
		document.write('flash4Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.4"))) \n');
		document.write('flash5Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.5"))) \n');
		document.write('flash6Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.6"))) \n');
		document.write('</SCR' + 'IPT\> \n');
	}
//scripttag2
	function detectFlash() 
	{
		if (navigator.plugins) 
		{
			if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) 
			{
				var isVersion2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
		        var flashDescription = navigator.plugins["Shockwave Flash" + isVersion2].description;
		        var flashVersion = parseInt(flashDescription.charAt(flashDescription.indexOf(".") - 1));
		
		        flash2Installed = flashVersion == 2;
		        flash3Installed = flashVersion == 3;
		        flash4Installed = flashVersion == 4;
		        flash5Installed = flashVersion == 5;
		        flash6Installed = flashVersion >= 6;
			}
		}
	
	    for (var i = 2; i <= maxVersion; i++) 
		{
			if (eval("flash" + i + "Installed") == true) actualVersion = i;
	    }
	
	    if(navigator.userAgent.indexOf("WebTV") != -1) actualVersion = 3;
	
		if (actualVersion >= requiredVersion) 
		{
			hasRightVersion = true;
			
		} 
		else 
		{
			
			isDOM?document.getElementById(name).innerHTML = flashreplaceobj:document.all[name].innerHTML=flashreplaceobj;
			
	    }
	}
	
	function revert()
	{
		isDOM?document.getElementById(name).innerHTML = moviecode:document.all[name].innerHTML=moviecode;
	}

//Calling flash detect function after loading it
detectFlash() ;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////			
//// index of industries for leftnav dropdown menu
//// delimiter syntax: name of item $$&&$$http://www.url.com (relative paths ok)
//// Uncomment the product and industry array below if referencing the global.js not in maintained in Interwoven
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//industryUrlArray = new Array;
//industryUrlArray[0] = 'Select$$&&$$#';
//industryUrlArray[1] = 'Agriculture$$&&$$C_agric.html';
//industryUrlArray[2] = 'Building &amp; Construction$$&&$$C_build.html';
//industryUrlArray[3] = 'Electronics$$&&$$C_electr.html';
//industryUrlArray[4] = 'Energy and Utilities$$&&$$C_energy.html';
//industryUrlArray[5] = 'Government$$&&$$C_government.html';
//industryUrlArray[6] = 'Healthcare &amp; Medical$$&&$$C_health.html';
//industryUrlArray[7] = 'Manufacturing$$&&$$C_man.html';
//industryUrlArray[8] = 'Packaging, Printing & Graphics$$&&$$C_packaging.html';
//industryUrlArray[9] = 'Plastics$$&&$$C_plastics.html';
//industryUrlArray[10] = 'Safety & Protection$$&&$$C_safety.html';
//industryUrlArray[11] = 'Transportation$$&&$$C_transportation.html';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// index of product families for leftnav dropdown menu
//// delimiter syntax: name of item $$&&$$http://www.url.com (relative paths ok)
//// Uncomment the product and industry array below if referencing the global.js not in maintained in Interwoven
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//prodFamUrlArray = new Array;
//prodFamUrlArray[0] = 'Select$$&&$$#';
//prodFamUrlArray[1] = 'Consumer Brands & Products$$&&$$other_consumerBrands2.html';
//prodFamUrlArray[2] = 'Additives and Modifiers$$&&$$other_prodFam_additiv.html';
//prodFamUrlArray[3] = 'Adhesives and Binders$$&&$$other_prodFam_adhes.html';
//prodFamUrlArray[4] = 'Building & Construction$$&&$$other_prodFam_build.html';
//prodFamUrlArray[5] = 'Chemicals$$&&$$other_prodFam_chem.html';
//prodFamUrlArray[6] = 'Consulting$$&&$$other_prodFam_consult.html';
//prodFamUrlArray[7] = 'Crops, Seeds and Inoculants$$&&$$other_prodFam_crop.html';
//prodFamUrlArray[8] = 'Crop, Plant and Pest Management Products$$&&$$other_prodFam_pest.html';
//prodFamUrlArray[9] = 'Display Materials$$&&$$other_prodFam_display.html';
//prodFamUrlArray[10] = 'Electronic and Electrical Materials$$&&$$other_prodFam_electr.html';
//prodFamUrlArray[11] = 'Films$$&&$$other_prodFam_films.html';
//prodFamUrlArray[12] = 'Filtration and Separation$$&&$$other_prodFam_filter.html';
//prodFamUrlArray[13] = 'Food Protection and Quality Assurance Products$$&&$$other_prodFam_food.html#';
//prodFamUrlArray[14] = 'Fuel Cell Components$$&&$$other_prodFam_fuel.html';
//prodFamUrlArray[15] = 'Packaging Materials$$&&$$other_prodFam_pack.html';
//prodFamUrlArray[16] = 'Paint, Coatings and Finishes$$&&$$other_prodFam_pain.html';
//prodFamUrlArray[17] = 'Performance Fibers and Fabrics$$&&$$other_prodFam_perf.html';
//prodFamUrlArray[18] = 'Photovoltaic Components$$&&$$other_prodFam_phot.html';
//prodFamUrlArray[19] = 'Pigments and Colorants$$&&$$other_prodFam_pigm.html';
//prodFamUrlArray[20] = 'Plastics, Polymers and Elastomers$$&&$$other_prodFam_plastics.html';
//prodFamUrlArray[21] = 'Printing and Proofing Materials$$&&$$other_prodFam_prin.html';
//prodFamUrlArray[22] = 'Protective Apparel and Accessories$$&&$$other_prodFam_prot.html';
//prodFamUrlArray[23] = 'Wire and Cable Materials$$&&$$other_prodFam_wire.html';

//// replace an image by ID
function replaceImage(RightImageObj, NewImageUrl){
    var lang_country_url="";
    if (lang_country == '') {
        lang_country_url = '/globalassets/v3/images/en_US/' + NewImageUrl;
    }
    else{ 
        lang_country_url = '/globalassets/v3/images/' + lang_country + '/' + NewImageUrl ;
    }

    document.getElementById(RightImageObj).src = lang_country_url;
}

// simple rollover
function simpleRollover(imageToChange, overState) {
	if(overState == 'over') {
	    replaceImage(imageToChange, (imageToChange + '_o.gif'));
	} else {
	    replaceImage(imageToChange, (imageToChange + '.gif'));
	}
}

//// topnav functions to handle rollover
//// mainNavBtnOvr = image object which should chnage on rollover
function topNav(mainNavBtnOvr) {
	//// handle the top row
	if(mainNavBtnOvr.indexOf('topNav_Mn_') != -1){
		for (var loop = 0; loop < document.getElementsByTagName('img').length; loop++) {
		var imgIdName = "document.getElementsByTagName('img')[" + loop + "]";
			if(eval(imgIdName).id == mainNavBtnOvr){
			replaceImage((eval(imgIdName).id), (eval(imgIdName).id + '_o.gif'));
				if (document.getElementById(mainNavBtnOvr + 'SubDiv')) {
				document.getElementById(mainNavBtnOvr + 'SubDiv').style.display = 'block';
				}
			} else if (eval(imgIdName).id.indexOf('topNav_Mn_') != -1 || eval(imgIdName).id.indexOf('topNav_Sn_') != -1 ) {
			replaceImage((eval(imgIdName).id), (eval(imgIdName).id + '.gif'));
				if (document.getElementById(eval(imgIdName).id + 'SubDiv')) {
				document.getElementById(eval(imgIdName).id + 'SubDiv').style.display = 'none';
				}
			}
		}
	//// handle the bottom row
	} else if (mainNavBtnOvr.indexOf('topNav_Sn_') != -1){
		for (var loop = 0; loop < document.getElementsByTagName('img').length; loop++) {
		var imgIdName = "document.getElementsByTagName('img')[" + loop + "]";
			if(eval(imgIdName).id == mainNavBtnOvr) {
			 simpleRollover(eval(imgIdName).id, 'over');
			} else if (eval(imgIdName).id.indexOf('topNav_Sn_') != -1) {
			 simpleRollover(eval(imgIdName).id, 'out');
			}
		}
	//// handle the defaults
	} else if (mainNavBtnOvr == 'false'){
		for (var loop = 0; loop < document.getElementsByTagName('img').length; loop++) {
		var imgIdName = "document.getElementsByTagName('img')[" + loop + "]";
			if(eval(imgIdName).id == currentTopNavHomeIcon){
			replaceImage((eval(imgIdName).id), (eval(imgIdName).id + '_s.gif'));
				if (document.getElementById(eval(imgIdName).id + 'SubDiv')) {
				document.getElementById(eval(imgIdName).id + 'SubDiv').style.display = 'block';
				}
			} else if (eval(imgIdName).id.indexOf('topNav_Mn_') != -1 || eval(imgIdName).id.indexOf('topNav_Sn_') != -1 ) {
			replaceImage((eval(imgIdName).id), (eval(imgIdName).id + '.gif'));
				if (document.getElementById(eval(imgIdName).id + 'SubDiv')) {
				document.getElementById(eval(imgIdName).id + 'SubDiv').style.display = 'none';
				}
			}
		}
	}
}



// URL - this is a string containing the URL of the document to open 
// name - this is a string containing the name of the new window. 
// w - This sets the width of the new window in pixels. 
// h - This sets the height of the new window in pixels. 
// features - this is an optional string 
// (see: http://www.devguru.com/technologies/ecmascript/quickref/win_open.html)

function newWindow(mypage,myname,w,h,features) {
  if(screen.width){
  var winl = (screen.width-w)/2;
  var wint = (screen.height-h)/2;
  }else{winl = 0;wint =0;}
  if (winl < 0) winl = 0;
  if (wint < 0) wint = 0;
  var settings = 'height=' + h + ',';
  settings += 'width=' + w + ',';
  settings += 'top=' + wint + ',';
  settings += 'left=' + winl + ',';
  settings += features;
  win = window.open(mypage,myname,settings);
  win.window.focus();
} 

<!--
// name - name of the cookie
// value - value of the cookie
// [expires] - expiration date of the cookie (defaults to end of current session)
// [path] - path for which the cookie is valid (defaults to path of calling document)
// [domain] - domain for which the cookie is valid (defaults to domain of calling document)
// [secure] - Boolean value indicating if the cookie transmission requires a secure transmission
// * an argument defaults when it is assigned null as a placeholder
// * a null placeholder is not required for trailing omitted arguments

function setCookie(name, value, expires, path, domain, secure) {
var curCookie = name + "=" + escape(value) +
((expires) ? "; expires=" + expires.toGMTString() : "") +
((path) ? "; path=" + path : "") +
((domain) ? "; domain=" + domain : "") +
((secure) ? "; secure" : "");

document.cookie = curCookie;
}

// name - name of the desired cookie
// * return string containing value of specified cookie or null if cookie does not exist

function getCookie(name) {
var dc = document.cookie;
var prefix = name + "=";
var begin = dc.indexOf("; " + prefix);

if (begin == -1) {
begin = dc.indexOf(prefix);
if (begin != 0) return null;
} else
begin += 2;
var end = document.cookie.indexOf(";", begin);
if (end == -1)
end = dc.length;
return unescape(dc.substring(begin + prefix.length, end));
}

// name - name of the cookie
// [path] - path of the cookie (must be same as path used to create cookie)
// [domain] - domain of the cookie (must be same as domain used to create cookie)
// * path and domain default if assigned null or omitted if no explicit argument proceeds

function deleteCookie(name, path, domain) {
if (getCookie(name)) {
document.cookie = name + "=" + 
((path) ? "; path=" + path : "") +
((domain) ? "; domain=" + domain : "") +
"; expires=Thu, 01-Jan-70 00:00:01 GMT";
}
}


function isCookieInDomain(_cookieDomainName,_domain) {
   var d = getCookie(_cookieDomainName);

   return ( -1 != _domain.indexOf(d)) ? 1 : 0;
}


function resetCookie(_refname, _domainname) {
   // See if referrer cookie already exists 
   var referrer = getCookie(_refname);

   // if the cookie wasn't found, then set the cookie
   if (referrer) { 
     if( !isCookieInDomain(_domainname, document.domain)) {
       setCookie(_refname, document.referrer);
       setCookie(_domainname, document.domain);
     } 

   } else {
     setCookie(_refname, document.referrer);
     setCookie(_domainname, document.domain);
   }
}

//resetCookie();

// svcContactForm - this function is used to process some variables which are sent to the contact us servlet
// _refname - name of the cookie
// _svltUrl - path to the servlet 
// _form - name of form on page

function svcContactForm(_refname, _svltUrl, _form) {
   _form.pageref.value = getCookie(_refname);
   _form.domain.value = document.domain;
   //eval(_form+".submit()");
   _form.submit();
}

// svcRequestDocumentForm - this function is used to process some variables which are sent to the request document servlet
// _refname - name of the cookie
// _svltUrl - path to the servlet 
// _form - name of form on page
// documentID - the document ID number for the request

function svcRequestDocumentForm(_refname, _svltUrl, _form, documentId) {
   _form.pageref.value = getCookie(_refname);
   _form.domain.value = document.domain;
   _form.docid.value = documentId;
   _form.submit();
}


// name - name of the referrer cookie string

function setReferrer(name) {
// See if referrer cookie already exists 
var referrer = getCookie(name);

// if the cookie wasn't found, then set the cookie
if (!referrer) { 
referrer = document.referrer;
setCookie(name, referrer);
}
}

// variable - name of the query string variable to return

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");

  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    } else {
      return "";
    } //end if
  } //end for
}//end function


function submitSearch() {
   var search_q = document.getElementById('search_query');
   if (search_q.value==search_q.defaultValue)
       search_q.focus();
   else
       document.forms[0].submit();
   return true;
}

function submitHeaderSearch(){
   var search_q = document.getElementById('search_query');
   if (search_q.value==search_q.defaultValue || search_q.value=='')
	{
	search_q.focus();
	return false;
	}
   else
	{
	if (document.getElementById('ss').value!='')
		{search_q.value="site:" + document.getElementById('ss').value + " " + search_q.value;}
	return true;
	}
}