var crtg_nid="1627"; 
var crtg_cookiename="cto_techmed"; 
function crtg_getCookie(c_name){var i,x,y,ARRcookies=document.cookie.split(";");for(i=0;i<ARRcookies.length;i++){x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);x=x.replace(/^\s+|\s+$/g,"");if(x==c_name){return unescape(y);}}return'';} var crtg_content=crtg_getCookie(crtg_cookiename);var crtg_rnd=Math.floor(Math.random()*99999999999);var crtg_url='http://rtax.criteo.com/delivery/rta/rta.js?netId='+escape(crtg_nid);crtg_url+='&cookieName='+escape(crtg_cookiename);crtg_url+='&rnd='+crtg_rnd;crtg_url+='&varName=crtg_content';var crtg_script=document.createElement('script');crtg_script.type='text/javascript';crtg_script.src=crtg_url;crtg_script.async=true;if(document.getElementsByTagName("head").length>0)document.getElementsByTagName("head")[0].appendChild(crtg_script);else if(document.getElementsByTagName("body").length>0)document.getElementsByTagName("body")[0].appendChild(crtg_script); 

function getCrtgKW(){
  var c_content = crtg_content.match(/[^;]+/g);
  var results = new Object;
  if(!!c_content){
    var kw_values;
    for(var i = 0; i<c_content.length; i++ ){
      kw_values = new Array;
      kw_values = c_content[i].split('=');
      if(kw_values.length > 1) results[kw_values[0]] = kw_values[1];
    }
  }
  return results;
}