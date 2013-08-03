/* This source code is Copyright (c) Vibrant Media 2001-2013 and forms part of the patented Vibrant Media product "IntelliTXT" (sm). */
$iTXT.js.loader["$iTXT.ui.Aura2TooltipPlacer"]=true;$iTXT.ui.Aura2TooltipPlacer_Load=function(){$iTXT.ui.TooltipPosition={AR:"AR",AC:"AC",AL:"AL",CL:"CL",CR:"CR",BR:"BR",BC:"BC",BL:"BL"};var undefined;var posArr={};var ttps=$iTXT.ui.TooltipPosition;var debug_labels={'AR':'Above Right','CR':'Centre Right','CL':'Centre Left','AL':'Above Left','AC':'Above Centre','BL':'Below Left','BC':'Below Centre','BR':'Below Right'};$iTXT.ui.Aura2TooltipPlacer={ttOffY:5,TOPOFFSCREENWEIGHT:20,EXPTOPOFFSCREENWEIGHT:20,OFFSCREENWEIGHT:15,EXPOFFSCREENWEIGHT:2,reportWeights:function(ttps){for(var i in posArr){}},decoratedDebugHeader:function(title){},updateWeights:function(weight){var to_be_updated=Array.prototype.slice.call(arguments,1);if(_.isArray(to_be_updated)){to_be_updated=to_be_updated[0];}
for(var i=0,len=to_be_updated.length;i<len;i++){if(posArr[to_be_updated[i]]){posArr[to_be_updated[i]].weight+=weight;}}},evalutePosition:function(rule,orient,weight,label){if(rule<0){var t_weight=weight*(rule/orient);var to_be_updated=Array.prototype.slice.call(arguments,4);this.updateWeights(t_weight,to_be_updated);}},place:function(opts)
{posArr={};var aura=false;var ttOffX=50;var normal=true;var ordinal=false;var aura_adj=0;if(opts.tt.currentAdvert.templateClass==="$iTXT.tmpl.js.Aura2"){aura=true;aura_adj=parseInt(opts.tt.currentAdvert.params.get("AURA2.PED.HEIGHT"),10);}
var aura_top=0;var aura_right=0;$iTXT.core.$(document).itxtFire("$iTXT:tt:before:position");if(opts.bb&&opts.tt)
{if(opts.bb.target&&opts.bb.target.tagName==="SPAN"&&opts.bb.target.parentNode.tagName==="A"&&aura){var tOff=$iTXT.core.$(opts.bb.target.parentNode).itxtTotalOffset();if(opts.bb.target.parentNode.offsetHeight<39){opts.bb={left:tOff.left,top:tOff.top,height:opts.bb.target.parentNode.offsetHeight,width:opts.bb.target.parentNode.offsetWidth,target:opts.bb.target};}}
var tt_width=opts.tt.width;var tt_height=opts.tt.height;var bound_box_left=opts.bb.left;var bound_box_top=opts.bb.top;var bound_box_right=opts.bb.left+opts.bb.width;var bound_box_bottom=opts.bb.top+opts.bb.height;var bound_box_width=opts.bb.width;var Pose=function(label,left,top){this.label=label;this.left=left;this.top=top;this.width=tt_width;this.height=tt_height;this.weight=0;};if(aura){normal=false;ordinal=true;aura_top=(aura_adj>40)?40:-40;aura_right=40;ttOffX=20;}
var right_pos=bound_box_right-ttOffX+aura_right;var left_pos=bound_box_left-tt_width+ttOffX;var horiz_centre_pos=bound_box_left+(bound_box_width/2)-tt_width/2;var above_pos=bound_box_top-tt_height+aura_top;var below_pos=bound_box_bottom+this.ttOffY;var vert_centre_pos=bound_box_bottom-this.ttOffY-(tt_height/5)*3;if(normal){posArr[ttps.AR]=new Pose(ttps.AR,right_pos,above_pos);posArr[ttps.AL]=new Pose(ttps.AL,left_pos,above_pos);posArr[ttps.BR]=new Pose(ttps.BR,right_pos,below_pos);posArr[ttps.BL]=new Pose(ttps.BL,left_pos,below_pos);}
if(ordinal){posArr[ttps.AC]=new Pose(ttps.AC,horiz_centre_pos,above_pos);posArr[ttps.CL]=new Pose(ttps.CL,left_pos,vert_centre_pos);posArr[ttps.CR]=new Pose(ttps.CR,right_pos,vert_centre_pos);posArr[ttps.BC]=new Pose(ttps.BC,horiz_centre_pos,below_pos);}
for(var i in posArr){}
var sSize=$iTXT.core.Util.getWindowSize();var dScroll=$iTXT.core.Util.getPageScroll();var sb={left:dScroll[0],top:dScroll[1],width:sSize[0],height:sSize[1]};this.decoratedDebugHeader("SCREEN OVERLAP TEST a)");for(var i in posArr){posArr[i].weight-=100*(1-$iTXT.core.Math.intersectsPercentage(posArr[ttps[i]],sb));}
this.reportWeights(ttps);this.decoratedDebugHeader("SCREEN OVERLAP TEST b)");this.evalutePosition(above_pos-sb.top,tt_height,this.TOPOFFSCREENWEIGHT,"Above",ttps.BR,ttps.CR);this.evalutePosition(above_pos-tt_height-sb.top,tt_height,this.EXPTOPOFFSCREENWEIGHT,"Above expanded",ttps.AR,ttps.AL,ttps.AC);this.evalutePosition(sb.left+sb.width-left_pos+tt_width,tt_width,this.OFFSCREENWEIGHT,"Right",ttps.AR,ttps.CR,ttps.BR);this.evalutePosition(sb.left+sb.width-left_pos+tt_width,tt_width,this.EXPOFFSCREENWEIGHT,"Right expanded",ttps.CR,ttps.BR);this.evalutePosition(left_pos-sb.left,tt_width,this.OFFSCREENWEIGHT,"Left",ttps.AL,ttps.CL,ttps.BL);this.evalutePosition(left_pos-sb.left-tt_width,tt_width,this.EXPOFFSCREENWEIGHT,"Left expanded",ttps.AL,ttps.CL,ttps.BL);this.evalutePosition(sb.top+sb.height-below_pos+tt_height*2,tt_height,this.OFFSCREENWEIGHT,"Below",ttps.BL,ttps.BR,ttps.BC);this.evalutePosition(sb.top+sb.height-above_pos,tt_height,this.EXPOFFSCREENWEIGHT,"Below expanded",ttps.BL,ttps.BR,ttps.BC);this.reportWeights(ttps,posArr);this.decoratedDebugHeader("SCREEN OVERLAP TEST c)");var scpos=$iTXT.core.Util.getPageScroll();var arTop=above_pos-sb.top+scpos[1];if(arTop<0)
{this.updateWeights(-500,ttps.AR,ttps.AL,ttps.AC);}
this.reportWeights(ttps,posArr);this.decoratedDebugHeader("Avoidance Nodes Test");var avList=[{w:10,n:"IFRAME"},{w:10,n:"OBJECT"},{w:10,n:"EMBED"}];for(var i=0;i<avList.length;i++)
{var avN=avList[i];var nLst=document.getElementsByTagName(avN.n);var nLstLen=nLst.length;for(var i2=0;i2<nLstLen;i2++)
{var nd=nLst[i2];var nbb=$iTXT.core.$(nd).itxtBounds();for(var i in posArr){posArr[i].weight-=avN.w*($iTXT.core.Math.intersectsPercentage(posArr[ttps[i]],nbb));}}}
this.reportWeights(ttps,posArr);var posState=posArr[ttps.AL]||posArr[ttps.AC];for(var i in posArr){if(posArr[i].weight>posState.weight){posState=posArr[i];}}
if($iTXT.glob.params)
{var dbgTTPS=$iTXT.glob.params.get("tt.pos.state");if(null!==dbgTTPS)
{posState=dbgTTPS;}}
var returnOptions={left:posState.left,top:posState.top,state:posState.label};$iTXT.glob.params.set("tt.placer.value",posState.label,$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN);return returnOptions;}}};};$iTXT.js.loader["$iTXT.ui.AutoPeek"]=true;$iTXT.ui=$iTXT.ui||{};$iTXT.ui.AutoPeek_Load=function(){var tmplate=_.template("<% if (icon) { %><img src='<%=icon%>' width='<%=icon_width%>' height='20' style='float:left; margin-right: 2px; display: inline-block'><% } %><a style='float: left; color:<%=color%> !important; font-size: <%=font_size%>;'><%= kw %></a>");var css_tmpl=_.template("@-webkit-keyframes <%=animid %> {     \n"+"0% {                                  \n"+"   <%=anim_hidden_state%>;            \n"+" }                                    \n"+"<%=animin%>% {                        \n"+"   <%=anim_display_state%>         ;  \n"+"}                                     \n"+"<%=animout%>% {                       \n"+"   <%=anim_display_state%>;           \n"+"}                                     \n"+"                                      \n"+" 100% {                               \n"+"   <%=anim_hidden_state%>;            \n"+" }                                    \n"+"}");$iTXT.ui.AutoPeek={};(function(exports){var rendered={};var pos;var expand_css=function(metrics){ret="";_.each(metrics,function(val,key){ret+=key+":"+val+";";});return ret;};var opticals=function(){var sizes={left:5,top:3,scale:1};if(navigator.userAgent.indexOf("iPhone")>-1){sizes.scale=1.5;sizes.left=4;}
if(navigator.userAgent.indexOf("iPad")>-1){sizes.scale=1.1;sizes.top=10;}
if(navigator.userAgent.indexOf("Android")>-1){sizes.top=11;}
return sizes;};var get_params=function(hk,font_size){var z=opticals().scale;return{font_size:(font_size*z)+"px",kw:hk.ad.params.parse(hk.ad.params.get("hk.mobt.text"),"")||hk.keyword,icon:decodeURIComponent(hk.ad.params.get("hk.mobt.icon","")),icon_width:parseInt(hk.ad.params.get("hk.mobt.icon.width",20),10),color:decodeURIComponent(hk.ad.params.get("hk.mobt.text.color","#003399"))};};var loffset=function(hk,peek){return hk.rootElement.offsetWidth-peek.offsetWidth-opticals().left;};var offscreen_div=function(htm,metrics,hkID,animtype){var d=document.createElement("div");d.id="itxt_autopeek"+hkID;d.className="itxt_autopeek itxt_autopeek_"+animtype;d.style.cssText=expand_css(metrics);d.innerHTML=htm;return d;};var self_erase=function(el,hk){el.addEventListener("webkitAnimationEnd",function(){hk.peek=false;el.parentNode.removeChild(el);},false);};var inject=function(htm,hk,metrics,dur,animtype){if(!hk.peek){hk.peek=true;metrics.left=parseInt(metrics.left-1000,10)+"px";var d=offscreen_div(htm,metrics,hk.id,animtype);document.getElementById("itxtttholder").appendChild(d);metrics.left=(parseInt(metrics.left,10)+1000+Math.floor(loffset(hk,d)/2))+"px";metrics.top=parseInt(metrics.top,10)+(pos.height-get_position(d).height)/2-2+"px";d.style.cssText=expand_css(metrics);d.addEventListener("touchend",function(){$iTXT.ui.tt.currentAdvert=hk.ad;$iTXT.core.$(document).itxtFire("$iTXT:hook:click",{source:$iTXT.data.ClickSource.AUTOPEEK,hookid:hk.options.id,hook:hk,advert:hk.ad});},true);self_erase(d,hk);return true;}else{return false;}};var render=function(pram,id){var now_hk="hk_"+id;if(!rendered[now_hk]){rendered[now_hk]=tmplate(pram);}
return rendered[now_hk];};var calc_anim=function(hk,dur,delay){var anim_in=parseInt(hk.ad.params.parse(hk.ad.params.get("hk.autopeek.anim_in",500)),10);var anim_out=parseInt(hk.ad.params.parse(hk.ad.params.get("hk.autopeek.anim_out",anim_in)),10);dur=anim_in+anim_out+dur;anim_in=Math.floor(anim_in/dur*100);anim_out=Math.floor(100-anim_out/dur*100);return{dur:dur,animin:anim_in,animout:anim_out,animid:"id_"+dur+"_"+anim_in+"_"+anim_out+"_"+delay};};var render_anim=function(pram,delay,animtype){var el_id="itxt_anim_"+pram.dur+"_"+pram.animin+"_"+pram.animout+"_"+pram.dur+"_"+delay;if(animtype=="opacity"){pram.anim_hidden_state="opacity: 0";pram.anim_display_state="opacity: 1";}else{pram.anim_hidden_state="-webkit-transform: rotateX(90deg)";pram.anim_display_state="-webkit-transform: rotateX(0deg)";}
if(!document.getElementById(el_id)){var styl=document.createElement("style");styl.id=el_id;styl.innerHTML=css_tmpl(pram);document.getElementsByTagName("head")[0].appendChild(styl);}};var calc_css=function(pos,anim_pram,delay,font_size){return{top:pos.top+"px",left:pos.left,"-webkit-animation-name":anim_pram.animid,"text-decoration":"underline","-webkit-animation-duration":anim_pram.dur+"ms","-webkit-animation-delay":delay+"ms"};};var get_position=function(el){var t_pos=el.getBoundingClientRect();return{top:t_pos.top+window.scrollY,left:t_pos.left+window.scrollX,height:t_pos.height};};var get_bounds=function(){var parms=[["hk.autopeek.portrait.horizontal","portrait","left","right"],["hk.autopeek.portrait.vertical","portrait","top","bottom"],["hk.autopeek.landscape.horizontal","landscape","left","right"],["hk.autopeek.landscape.vertical","landscape","top","bottom"]];var t_bounds={portrait:{right:0,left:0,top:0,bottom:0},landscape:{right:0,left:0,top:0,bottom:0}};_.each(parms,function(ar){var parm=$iTXT.glob.params.get(ar[0],"0@10");var tmp=parm.split("@");if(tmp.length==1){t_bounds[ar[1]][ar[2]]=t_bounds[ar[1]][ar[3]]=+tmp[0];}else{t_bounds[ar[1]][ar[2]]=+tmp[0];t_bounds[ar[1]][ar[3]]=+tmp[1];}});return t_bounds;};var get_zoom=function(){var cmp=$iTXT.glob.params.get("hk.autopeek.zoom",0);if(cmp===0||!screen.width||!window.innerWidth){return false;}
var c_zoom=screen.width/window.innerWidth;if(get_orientation()=="landscape"){c_zoom=screen.height/window.innerHeight;}
return c_zoom>cmp;};var calculate_bounds=function(){var bounds=get_bounds()[get_orientation()];bounds.left=window.innerWidth*(bounds.left/100);bounds.right=window.innerWidth-(window.innerWidth*(bounds.right/100));bounds.top=window.innerHeight*(bounds.top/100);bounds.bottom=window.innerHeight-(window.innerHeight*(bounds.bottom/100));return bounds;};var get_orientation=function(){if(window.orientation%180===0){return"portrait";}else{return"landscape";}};var display=function(hk,default_duration){pos=get_position(hk.rootElement);var font_size=parseInt(getComputedStyle(hk.rootElement)['font-size'],10);if(_.isNaN(font_size)){font_size=16;}
var dur=parseInt(hk.ad.params.parse(hk.ad.params.get("hk.autopeek.duration",2000)),10);var animtype=hk.ad.params.get("hk.autopeek.type","opacity");var delay=hk.ad.params.get("hk.autopeek.delay",0);var anim_pram=calc_anim(hk,dur,delay);var inject_pram=calc_css(pos,anim_pram,delay,font_size);var h=render(get_params(hk,font_size),hk.id);render_anim(anim_pram,delay,animtype);inject(h,hk,inject_pram,dur,animtype);$iTXT.trigger("$iTXT:hk:autopeek",hk);};exports.calculate_bounds=calculate_bounds;exports.display=display;exports.get_zoom_threshold=get_zoom;})($iTXT.ui.AutoPeek);};$iTXT.js.loader["$iTXT.ui.ComponentBase"]=true;$iTXT.ui.ComponentBase_Load=function(){var undefined;$iTXT.ui.ComponentBase=$iTXT.core.Class.create({options:null,rootElement:null,width:undefined,height:undefined,left:undefined,top:undefined,componentParams:{},evtDspFuncs:null,init:function(_options)
{this.evtDspFuncs=[];this.options=$iTXT.core.Util.extend({id:"itxtcomponent",className:""},_options);this.defaultOptions=$iTXT.core.Util.cloneObject(this.options);this.advert=this.options.advert;this.children=[];this.rootElement=$iTXT.core.Builder.make("DIV",{id:this.options.id,className:this.options.className});this.params=new $iTXT.data.Param(undefined,undefined,undefined,this.options.id);this.params.set(this.componentParams,null,$iTXT.cnst.WEIGHTING_DEFAULT_COMPONENT);this._tokenizeOptions();},dispose:function()
{if(this.rootElement.parentNode)
{this.rootElement.parentNode.removeChild(this.rootElement);}
for(var i=0;i<this.evtDspFuncs.length;i++)
{var f=this.evtDspFuncs[i];if('function'==typeof f)
{f.call();}}
this.evtDspFuncs=[];},resize:function()
{this.setSize(this.width,this.height);},setSize:function(w,h)
{this.width=w;this.height=h;this.rootElement.itxtSetStyle({width:this.width+"px",height:this.height+"px"});},setPosition:function(l,t)
{this.left=l;this.top=t;this.rootElement.itxtSetStyle({left:this.left+"px",top:this.top+"px"});},getWidth:function()
{return this.width||this.rootElement.offsetWidth;},getHeight:function()
{return this.height||this.rootElement.offsetHeight;},getLeft:function()
{return this.left||this.rootElement.offsetLeft;},getTop:function()
{return this.top||this.rootElement.offsetTop;},addChild:function(childComp)
{if(childComp&&childComp.rootElement)
{this.children.push(childComp);this.rootElement.appendChild(childComp.rootElement);}},addChildren:function(children)
{if(!children)
return;for(var childComp in children)
{this.addChild(children[childComp]);}},removeChild:function(childComp)
{$iTXT.core.Util.without(this.children,childComp);this.rootElement.removeChild(childComp.rootElement);},show:function()
{var re=$iTXT.core.$(this.rootElement);if(re){re.itxtShow();};},hide:function()
{var re=$iTXT.core.$(this.rootElement);if(re){re.itxtHide();};},getHTML:function()
{if(this.rootElement)
{return $iTXT.core.Builder.make("DIV",{},[this.rootElement]).innerHTML;}
return"";},setBackgroundColor:function(c)
{this.rootElement.itxtSetStyle({backgroundColor:c});},setAdvert:function(a)
{this.advert=a;this._tokenizeOptions();},changeAdvert:function(a)
{this.advert=a;this._tokenizeOptions();},_tokenizeOptions:function()
{if(null!=this.advert&&this.advert.params)
{this.params.setParent(this.advert.params);}
else if($iTXT.glob.params)
{this.params.setParent($iTXT.glob.params);}
this.options=$iTXT.core.Util.cloneObject(this.defaultOptions);this.options=this.params.tokenize(this.options);},tooltipOver:function()
{},tooltipOut:function()
{}});};$iTXT.js.loader["$iTXT.ui.Hook"]=true;$iTXT.ui.Hook_Load=function(){var undefined;var $itxtUtil=$iTXT.core.Util;var cleanString=$itxtUtil.cleanString;function hkTrkVisibility(){var gval=$iTXT.glob.dbParams.getBool('hk.trk.visibility'),cval=$iTXT.glob.params.getBool('hk.trk.visibility');return!(cval==false||(cval==undefined&&gval==false));}
$iTXT.subscribe("$iTXT:hooks:loaded",function(){var i,n,masterTs=$itxtUtil.ts(),$HookMngr=$iTXT.ui.HookManager,viewportHeight=$itxtUtil.getWindowSize().height,pageHeight=$itxtUtil.getPageSize().height;function notify_visible(hk,afterTime){if(!hk.seenAlready){hk.seenAlready=true;hk.seenAfter=afterTime;$iTXT.fire("$iTXT:data:log:monitor",{advert:hk.ad,mt:118,mv:hk.initPos.top+','+viewportHeight+','+pageHeight,mv2:afterTime});}}
var duration=parseInt($iTXT.glob.dbParams.get("hk.autopeek.duration",3000));var repeat=$iTXT.glob.params.getBool('hk.autopeek.repeat',false);function flipHook(hk,duration){if(!hk.ad.params.getBool('hk.autopeek.on',false)){return;}
if(!hk.flipped||repeat){hk.flipped=true;$iTXT.ui.AutoPeek.display(hk);$iTXT.data.al.logAV(hk.ad,$iTXT.data.AdViewValue.ADVIEW_UNQUALIFIED,0,{});}}
function monitor(hooks,afterTime,callback){var i=0,n=hooks.length;for(;i<n;i++){callback(hooks[i],afterTime);}}
for(i=0,n=$HookMngr.hooks.length;i<n;i++){$HookMngr.hooks[i].initPos=$HookMngr.hooks[i].getPosition();}
if(hkTrkVisibility()){monitor($HookMngr.visibleHooks(),0,notify_visible);var mon=_.throttle(function(){monitor($HookMngr.visibleHooks(),$itxtUtil.ts()-masterTs,notify_visible);},250);$iTXT.core.$(window).itxtSubscribe('scroll',mon);}
if($iTXT.core.Browser.isSmartphoneOrTablet(false,false)){var zoom=$iTXT.glob.params.get("hk.autopeek.zoom",0);var throttle=+($iTXT.glob.params.get("hk.autopeek.throttle",500));var flip=_.throttle(function(){if($iTXT.core.Browser.is("Android",2.3,2)){monitor($HookMngr.visibleHooks(),0,flipHook);}else{var bounds=$iTXT.ui.AutoPeek.calculate_bounds();monitor($HookMngr.visibleHooks(bounds,zoom),0,flipHook);}},throttle);$iTXT.core.$(window).itxtSubscribe('scroll',flip);_.each($iTXT.ui.HookManager.hooks,function(hook){hook.ad.params.set("cts",0,99999);if(hook.ad.params.getBool('hk.autopeek.on')){hook.ad.params.set("hk.click.mode",0,$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN);}else{if(hook.ad.params.get('hk.click.mode')==0||!hook.ad.params.get('hk.click.mode')){hook.ad.params.set("hk.click.mode",1,$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN);}}});}});$iTXT.ui.HookManager={id:0,hookedCounter:0,textNodes:[],hooks:[],startIndex:0,unHookedHooks:[],initSkip:0,maxKWNode:5,maxKWPara:5,keywordPadding:0,keywordInterval:0,placePerParagraph:0,paragraphCounts:{},specialChars:{},nodeID:1,add:function(hook)
{if(hook)
{hook.id=this.id++;this.hooks.push(hook);}},get:function(id)
{for(var i=1;i<this.hooks.length;i++)
{var hk=this.hooks[i];if(hk.id==id)
{return hk;}}
return null;},getHookByDetailId:function(id){var hooks=this.hooks;var i=hooks.length;for(;--i>=0;){if(hooks[i].ad.did==id){return hooks[i];}}
return null;},list:function()
{return this.hooks;},visibleHooks:function(bounds,zoom){var i=0,n=this.hooks.length,a=[];if(zoom&&!$iTXT.ui.AutoPeek.get_zoom_threshold()){return a;}
for(;i<n;i++){if($itxtUtil.isElementVisible(this.hooks[i].rootElement,bounds)){a.push(this.hooks[i]);}}
return a;},execute:function(tn)
{this.setDefaultHookParameters();this.maxKWNode=Math.max(1,$iTXT.glob.params.getInt("kwpn",this.maxKWNode));this.maxKWPara=Math.max(1,$iTXT.glob.params.getInt("kwpp",this.maxKWPara));this.keywordPadding=$iTXT.glob.params.getInt("kwp",this.keywordPadding);this.keywordInterval=$iTXT.glob.params.getInt("hk.interval",this.keywordInterval);this.placePerParagraph=$iTXT.glob.params.getInt("ppp",this.placePerParagraph);this.initSkip=$iTXT.glob.params.getInt("skip",this.initSkip);if(!tn)
{if(this.placePerParagraph&&$iTXT.data.Context.paragraphNodes.length>0)
{tn=$iTXT.core.$A($iTXT.data.Context.paragraphNodes);}
else
{if(this.placePerParagraph)
{}
else
{}
this.placePerParagraph=0;tn=$iTXT.core.$A($iTXT.data.Context.textNodes);}}
tn=$iTXT.core.$A(tn);if(this.initSkip>0)
{var sn=tn.splice(0,this.initSkip);var i=sn.length;while(i--)
{var sTn=(_.isArray(sn[i]))?sn[i]:[sn[i]];var j=sTn.length;while(j--)
{$iTXT.debug.Util.hilite(sTn[j],$iTXT.debug.Util.HL_COL_INIT,null,true);}}}
this.textNodes=$iTXT.core.$A(tn);for(var i=0;i<this.hooks.length;i++)
{var hk=this.hooks[i];var hkad=hk.ad;if(hkad){var esc=hkad.params.get("js.special.hook.chars","").split(",");for(var i2=0;i2<esc.length;i2++)
{this.specialChars[esc[i2]]=1;}}}
this._findAllHooks();if(this.hooks.length>0)
{this.textNodes.itxtEach(function(n)
{if(this.placePerParagraph)
{$iTXT.core.$A(n).itxtEach(function(pn)
{var hks=this._getHooks(pn);if(hks.length>0)
{this._hookNode(pn,hks);}},this);}
else
{var hks=this._getHooks(n);if(hks.length>0)
{this._hookNode(n,hks);}}},this);}
$iTXT.fire("$iTXT:hooks:loaded",this.hooks);},_findAllHooks:function()
{this.unHookedHooks=this.hooks;this.hooks=[];if(this.unHookedHooks.length>0)
{var track=$iTXT.glob.params.get("ti");if(null!=track)
{$iTXT.core.Util.dropImage(track);}
if(this.placePerParagraph)
{}
else
{}
var nodesSinceHook=this.keywordInterval;var extraMask=0;this.textNodes.itxtEach(function(o)
{if(this.placePerParagraph)
{var pHookCount=0;$iTXT.core.$A(o).itxtEach(function(pn)
{var sd=this._searchNode(pn,pHookCount,this.maxKWPara,extraMask,nodesSinceHook);var nc=sd.nc;extraMask=sd.lo;pHookCount+=nc;},this);if(pHookCount>0)
{nodesSinceHook=1;}
else
{nodesSinceHook++;}}
else
{var sd=this._searchNode(o,0,this.maxKWNode,extraMask,nodesSinceHook);var nc=sd.nc;extraMask=sd.lo;if(nc>0)
{nodesSinceHook=1;}
else
{nodesSinceHook++;}}},this);}
else
{}},_searchNode:function(n,nc,maxHooks,extraMask,nodesSinceLastHook)
{if(nodesSinceLastHook<this.keywordInterval)
{return{nc:0,lo:0};}
var nodeHookCount=nc;var thisNC=0;var stillUnHooked=[];var nodeText=$iTXT.core.Util.getNodeText(n);var leftOverMask=0;extraMask=extraMask||0;if(extraMask>0)
{var mask=this._maskHookText(0,extraMask,nodeText);nodeText=mask.text;leftOverMask=mask.leftover;}
for(var i=0;i<this.unHookedHooks.length;i++)
{var hk=this.unHookedHooks[i];if(null==hk.childSpans)
{var found=false;if(nodeHookCount<maxHooks)
{found=this._findHookByNode(hk,nodeText,n);}
if(found)
{this.hooks.push(hk);var mask=this._maskHookText(hk.details.s-this.keywordPadding,hk.details.e+this.keywordPadding,nodeText);nodeText=mask.text;leftOverMask=mask.leftover;nodeHookCount++;thisNC++;}
else
{stillUnHooked.push(hk);}}}
this.unHookedHooks=stillUnHooked;return{nc:thisNC,lo:leftOverMask};},_maskHookText:function(s,e,text)
{var maskStart=s;if(maskStart<0)
maskStart=0;var maskEnd=e;var leftover=0;if(maskEnd>text.length)
{leftover=maskEnd-text.length;maskEnd=text.length;}
var rs=text.substring(0,maskStart);rs+=$iTXT.core.Util.strRepeat("#",maskEnd-maskStart);rs+=text.substring(maskEnd);return{text:rs,leftover:leftover};},_findHookByNode:function(hk,t,n)
{var kw=hk.options.value;var okw=kw;var specialChar=(1===this.specialChars[okw]);kw=kw.replace(/(\+|\(|\.|\[|\-|\$|\<|\{|\%|\!|\)|\]|\?)/g,'\\$1');kw=kw.replace(/\ /g,'\\s+');var flags="gm";if(!hk.options.cs)
{flags+="i";}
var leftREChars="(\\b|\u201C|\u2018|\\s)",rightREChars="(\\b|\u201D|\\s|\\.|\\,|\\?|\\!)",pluralChars="(?:[\x27\u2019]s?)?";if(specialChar)
{leftREChars="";rightREChars="";pluralChars="";}
var kwRegEx=new RegExp(leftREChars+kw+rightREChars+pluralChars,flags);var match,foundHk=false,offset=0;while((match=kwRegEx.exec(t))&&!foundHk)
{var kwMatch=match[0];if(kwMatch.length>0)
{foundHk=true;}
var he=(typeof(match.lastIndex)=='undefined'?kwRegEx.lastIndex:match.lastIndex);var kwl=kwMatch.length;var hs=he-kwl;if(1==$iTXT.glob.params.get('hk.cap.subterm',0))
{var kwS=hs,kwE=he;for(kwS=hs;kwS<kwE;kwS++)
{if(!t.substr(kwS,1).match(/\s/))
{break;}}
if(this._isCapitalisedSubTerm(t,kwS,kwE))
{foundHk=false;}}
if(foundHk)
{var hkLc=kwMatch.charAt(0);var hkRc=kwMatch.charAt(kwMatch.length-1);if(this._isNonBorderChar(hkLc)&&!specialChar)
{hs++;kwl--;kwMatch=kwMatch.substring(1,kwMatch.length);}
if(this._isNonBorderChar(hkRc)&&!specialChar)
{he--;kwl--;kwMatch=kwMatch.substring(0,kwMatch.length-1);}
var lc=t.substring(hs-1,hs);var rc=t.substring(he,he+1);if(!specialChar&&((lc=='-')||(lc.charCodeAt(0)==92)||(lc=='$')||(lc=='£')||(lc=='€')||(lc=='/')||(lc=='@')||(rc=='-')))
{foundHk=false;}
if(!specialChar&&(((lc.charCodeAt(0)>127)&&(lc.charCodeAt(0)!=0x201C)&&(lc.charCodeAt(0)!=0x2018)&&(lc.charCodeAt(0)!=160))||((rc.charCodeAt(0)>127)&&(rc.charCodeAt(0)!=0x201D)&&(rc.charCodeAt(0)!=0x2019)&&(rc.charCodeAt(0)!=39)&&(rc.charCodeAt(0)!=8230)&&(rc.charCodeAt(0)!=160))||(/[a-z\u0600-\u06ff]/.test(lc))))
{foundHk=false;}}
if(foundHk)
{hk.details={n:n,s:hs+offset,e:he+offset,kw:kwMatch};}
t=t.substring(he);offset+=he;kwRegEx.lastIndex=0;}
return foundHk;},_hookNode:function(n,hks)
{var newNodes=[];var pos=0;var text=$iTXT.core.Util.getNodeText(n);var followingText=text;hks.sort(function(a,b)
{if(a.details&&b.details)
{return(a.details.s-b.details.s);}
return 0;});for(var i=0;i<hks.length;i++)
{var hk=hks[i];hk.options.id=this.hookedCounter;hk.setKeyword(hk.details.kw);if(hk.details)
{$iTXT.fire("$iTXT:hook:hooked",hk);var leadingText=document.createTextNode(text.substring(pos,hk.details.s));followingText=text.substring(hk.details.e,text.length);newNodes.push(leadingText);newNodes.push(hk.getHook());pos=hk.details.e;this.hookedCounter++;}}
if(newNodes.length>0)
{newNodes.push(document.createTextNode(followingText));var pNode=n.parentNode;if(pNode)
{for(var i=0;i<newNodes.length;i++)
{pNode.insertBefore(newNodes[i],n);}
pNode.removeChild(n);}}},_getHooks:function(n)
{var newArr=[];for(var i=0;i<this.hooks.length;i++)
{var hk=this.hooks[i];if(hk.details.n==n)
{newArr.push(hk);}}
return newArr;},_isNonBorderChar:function(c)
{return c==' '||c=='\n'||c=='\r'||c=='?'||c=='!'||c==','||c=='.'||c=='\u201C'||c=='\u2018';},_isCapitalisedSubTerm:function(t,s,e)
{var kw=t.substring(s,e);if(!$iTXT.core.Util.hasCapitals(kw.substring(0,1)))
{return false;}
var ssS=Math.max(0,t.lastIndexOf(' ',s-2)+1);var ssE=Math.min(t.indexOf(' ',e+2),t.length);var bef=(s>ssS)?$iTXT.core.Util.cleanString(t.substring(ssS,s)):null;var aft=(ssE>e)?$iTXT.core.Util.cleanString(t.substring(e,ssE)):null;if(bef&&$iTXT.core.Util.hasPunctuation(bef.substr((bef.length-1),1)))
{bef=null;}
if(aft&&$iTXT.core.Util.hasPunctuation(aft.substr(0,1)))
{aft=null;}
var subT=t.substring(((s>ssS)?ssS:s),((ssE>e)?ssE:e));if((bef&&$iTXT.core.Util.hasCapitals(bef.substring(0,1)))||(aft&&$iTXT.core.Util.hasCapitals(aft.substring(0,1))))
{return true;}
return false;},getNodeTag:function(o)
{if(o&&o.nodeType)
{var nT=o.nodeType;if($iTXT.core.Util.ELEMENT_NODE==nT)
{if(o.ndPar)
{return o.ndPar['this'];}
o.ndPar=new Object();}
else
{var pn=o.parentNode;if($iTXT.core.Util.TEXT_NODE==nT)
{if(o.parentNode.ndPar)
{return o.parentNode.ndPar[$iTXT.core.Util.nodeIndex(o)];}}}}
return null;},setDefaultHookParameters:function()
{if($iTXT.glob.params)
{var gps=$iTXT.glob.params;var wdb=$iTXT.cnst.WEIGHTING_DEFAULT_DATABASE;gps.set("hk.class","itxthook",wdb);gps.set("hk.class.active","itxthookactive",wdb);gps.set("hk.icon","",wdb);gps.set("hk.icon.active","",wdb);gps.set("hk.icon.path","http://images.intellitxt.com/ast/adTypes/",wdb);gps.set("fg","#006400",wdb);gps.set("bg","transparent",wdb);gps.set("hk.fg.col","${fg}",wdb);gps.set("hk.fg.h.col","#006400",wdb);gps.set("hk.bg.col","transparent",wdb);gps.set("hk.bg.h.col","${bg}",wdb);gps.set("hk.def.style","text-decoration: underline; border-bottom: 1px solid ${hk.fg.col}; border-top: none; color: ${hk.fg.col}; background-color: ${hk.bg.col}",wdb);gps.set("hk.def.h.style","text-decoration: underline; border-bottom: 0.2em solid ${hk.fg.h.col}; border-top: none; color: ${hk.fg.h.col}; background-color: ${hk.bg.h.col}",wdb);gps.set("hk.style","${hk.def.style}",wdb);gps.set("hk.h.style","${hk.def.h.style}",wdb);}}};$iTXT.ui.HookHelper={defaults:{fgColr:'#009900',fgColrOld:'#006400',bgColr:'transparent',bgColrOld:'transparent',upperLnColr:'#009900',lowerLnColr:'#00CC00',icon:'icon1.png',lbIcon:'lb_icon1.png'},getStyleObjectFromString:function(str){var i,n,k,v,arr,css={};str=cleanString(str);if(!str)return{};arr=str.toLowerCase().split(';');for(i=0,n=arr.length;i<n;i++){arr[i]=arr[i].split(':');if(arr[i].length==2){k=cleanString(arr[i][0]);v=cleanString(arr[i][1]);css[k]=v;}}
return css;},getStyleStringFromObject:function(css){return $iTXT.core.Util.buildQueryString(css,';',':');},isCustomStyle:function(style)
{var key,numkey=0;if(!style){return false;}
for(key in style){if(style.hasOwnProperty(key)){numkey++;}}
if(numkey!=7&&numkey!=6){return true;}
if((!style['font-weight']||!style['font-size']||!style['text-decoration']||!style['border-bottom']||!style['padding-bottom']||!style['color']||!style['background-color'])&&(!style['text-decoration']||!style['border-bottom']||!style['border-top']||!style['color']||!style['background-color']||!style['padding-bottom'])){return true;}
if((style['font-weight']!='normal'||style['font-size']!='100%'||style['text-decoration']!='underline'||style['border-bottom']!='darkgreen 0.075em solid'||style['padding-bottom']!='1px'||style['color']!='darkgreen'||style['background-color']!='transparent')&&(style['text-decoration']!='underline'||style['border-bottom']!='1px solid #006400'||style['border-top']!='none'||style['color']!='#006400'||style['background-color']!='transparent'||style['padding-bottom']!='1px')){return true;}
return false;},isCustomActiveStyle:function(style)
{var key,numkey=0;if(!style){return false;}
for(key in style){if(style.hasOwnProperty(key)){numkey++;}}
if(numkey!=7&&numkey!=6){return true;}
if((!style['font-weight']||!style['font-size']||!style['text-decoration']||!style['border-bottom']||!style['padding-bottom']||!style['color']||!style['background-color'])&&(!style['text-decoration']||!style['border-bottom']||!style['border-top']||!style['color']||!style['background-color']||!style['padding-bottom'])){return true;}
if((style['font-weight']!='normal'||style['font-size']!='100%'||style['text-decoration']!='underline'||style['border-bottom']!='darkgreen 0.2em solid'||style['padding-bottom']!='1px'||style['color']!='darkgreen'||style['background-color']!='transparent')&&(style['text-decoration']!='underline'||style['border-bottom']!='0.2em solid #006400'||style['border-top']!='none'||style['color']!='#006400'||style['background-color']!='transparent'||style['padding-bottom']!='1px')){return true;}
return false;}};$iTXT.ui.Hook=$iTXT.core.Class.create({options:null,isActive:false,childSpans:null,mouseOver:false,mouseOutFireTID:-1,mouseOverTS:null,mouseOverPos:null,mouseOverSpan:null,delayedOverTO:-1,seenAlready:false,flipped:false,seenAfter:-1,hkStyle:null,hkActiveStyle:null,spanStyle:null,spanActiveStyle:null,isImpetus:false,disableIcon:false,_tt:null,_bb:null,_launcher:null,_closer:null,_timer:-1,init:function(_options)
{var is_mobile=$iTXT.core.Browser.isTargetedSmartphone($iTXT.glob.params.getBool("tt.force.mobile",false));this.defaultOptions=this.options=$iTXT.core.Util.extend({id:0,uid:"id",uidh:"idh",clickUrl:is_mobile?"javascript:void(0);":"#",className:"${hk.class}",activeClassName:"${hk.class.active}",hookIconPath:'${hk.icon.path}',hookIconSrc:"${hk.icon}",activeHookIconSrc:"${hk.icon.active}",hookIconStyle:"${hk.icon.style}",value:"hook",hookStyle:"${hk.style}",hookActiveStyle:"${hk.h.style}"},_options);var ad=this.options.advert;$iTXT.ui.HookManager.add(this);this.keyword=this.options.value;this._events=[];this.setAdvert(ad||new $iTXT.data.Advert($iTXT.tmpl.TestTemplate,{title:"Hello World!",link:"http://www.google.com",ttthbg:"yellow"}));if(!this.isLightbox(ad)&&$iTXT.core.Browser.isSmartphoneOrTablet()&&ad.params.getBool('hk.autopeek.on',false)){ad.params.set("nott",1,$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN);}},isLightbox:function(ad){return(ad.$A.at>159&&ad.$A.at<166);},applyResetStyle:function(){this.rootElement.style.cssText=['font-weight: normal','font-size: 100%','font-style: normal','text-decoration: none','border: 0px none transparent','padding: 0px','background-color: transparent','background-image: none','display: inline'].join(';');},setAdvert:function(ad)
{this.ad=ad;this.ad.params.set("H.ID",this.options.uid,$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN);this.ad.params.set("H.IDH",this.options.uidh,$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN);var ord=Math.floor(Math.random()*10e12);this.ad.params.set("hookhash",ord);this.ad.processAdvert();},setKeyword:function(kw)
{this.keyword=kw;this._buildHook();},setHookId:function(id)
{this.rootElement.id=id;},_buildHook:function()
{if(!this.ad)
return;var p=b;this.ad.createTemplate();var adps=this.ad.params;var w=$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN;var at=this.ad.getAdvertType();var showIcon=adps.getBool("hk.icon.show",true);var p=new $iTXT.data.Param(adps);var eati=p.getBool("eati",false);if(eati)
{if(at)
{var icon=p.get("hk.icon",p.get("atig"+at,p.get("atig")));var iconActive=p.get("hk.icon.active",icon);if("none"==icon)
{p.set("hk.icon","",w);p.set("hk.icon.active","",w);this.disableIcon=true;}
else if(null!==icon)
{p.set("hk.icon",icon,w);p.set("hk.icon.active",iconActive,w);this.disableIcon=false;}
var atis=p.get("atis");if(null!==atis)
{p.set("hk.icon.style",atis,w);this.disableIcon=false;}}}
else if(showIcon){icon=$iTXT.ui.HookHelper.defaults.icon;if(this.ad.params.getBool("lbox",false)){icon=$iTXT.ui.HookHelper.defaults.lbIcon;}
p.set("hk.icon",icon,w);p.set("hk.icon.active",icon,w);this.disableIcon=false;}else{p.set("hk.icon","",w);p.set("hk.icon.active","",w);this.disableIcon=true;}
var align=this.ad.params.get("hk.icon.align","right");this.options.hookIconOnRight=(align=="right");var iconStyle=this.ad.params.get("hk.icon.style",p.get("hk.icon.style",null));this.options.hookIconStyle=iconStyle;if(!this.options.hookIconStyle){this.options.hookIconStyle='';}
this.options.hookIconStyle=$iTXT.ui.HookHelper.getStyleObjectFromString(this.options.hookIconStyle);this.options.hookIconStyle['padding-top']='0px!important';this.options.hookIconStyle['padding-right']='0px!important';this.options.hookIconStyle['padding-bottom']='0px!important';this.options.hookIconStyle['padding-left']='4px!important';this.options.hookIconStyle['margin-top']='0px!important';this.options.hookIconStyle['margin-right']='0px!important';this.options.hookIconStyle['margin-bottom']='0px!important';this.options.hookIconStyle['margin-left']='0px!important';this.options.hookIconStyle['vertical-align']='baseline!important';this.options.hookIconStyle=$iTXT.ui.HookHelper.getStyleStringFromObject(this.options.hookIconStyle);if(at)
{var ul=p.get("ul"+at);if(null!==ul)
{p.set("hk.style",ul,w);}
var hv=p.get("hv"+at);if(null!==hv)
{p.set("hk.h.style",hv,w);}}
var hks=p.get("hk.style");if(null!==hks&&""!==hks&&"${hk.def.style}"!=hks)
{var hkhs=p.get("hk.h.style");if(hkhs===null||""===hkhs||"${hk.def.h.style}"==hkhs)
{p.set("hk.h.style","${hk.style};background-color:${hk.bg.h.col};",$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN);}}else{p.set("hk.style","${hk.def.style};padding-bottom:1px;",$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN);p.set("hk.h.style","${hk.def.h.style};padding-bottom:1px;",$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN);}
this.hookAsBtn=p.get('hk.btn',false);this.ad.template.onBuildHookStyle(this.defaultOptions);this.options=$iTXT.core.Util.cloneObject(this.defaultOptions);this.options=p.tokenize(this.options);if(this.rootElement)
{}
var b=$iTXT.core.Builder;this.childSpans=[];var HkHelper=$iTXT.ui.HookHelper;this.hkStyle=HkHelper.getStyleObjectFromString(this.options.hookStyle.toLowerCase());this.hkActiveStyle=HkHelper.getStyleObjectFromString(this.options.hookActiveStyle.toLowerCase());this.spanStyle=this.hkStyle;this.spanActiveStyle=this.hkActiveStyle;this.rootElement=b.make("A",{href:this.options.clickUrl,id:"itxthook"+this.options.id,rel:"nofollow"});this.applyResetStyle();if(!HkHelper.isCustomStyle(this.spanStyle)&&!HkHelper.isCustomActiveStyle(this.spanActiveStyle)){this.isImpetus=true;this.rootElement.className='itxtnewhook';this.spanStyle['padding-top']=this.spanActiveStyle['padding-top']='0px!important';this.spanStyle['padding-right']=this.spanActiveStyle['padding-right']='0px!important';this.spanStyle['padding-bottom']=this.spanActiveStyle['padding-bottom']='1px!important';this.spanStyle['padding-left']=this.spanActiveStyle['padding-left']='0px!important';this.spanStyle['text-decoration']=this.spanActiveStyle['text-decoration']='underline!important';this.spanStyle['border-top']=this.spanActiveStyle['border-top']='0px none transparent';this.spanStyle['border-right']=this.spanActiveStyle['border-right']='0px none transparent';this.spanStyle['border-left']=this.spanActiveStyle['border-left']='0px none transparent';this.spanStyle['color']=HkHelper.defaults.upperLnColr;this.spanActiveStyle['color']=HkHelper.defaults.upperLnColr;this.spanStyle['border-bottom']='1px solid '+HkHelper.defaults.lowerLnColr;this.spanActiveStyle['border-bottom']='1px solid '+HkHelper.defaults.lowerLnColr;}else{this.spanStyle['padding-bottom']=this.spanStyle['padding-bottom']||'1px';this.spanActiveStyle['padding-bottom']=this.spanActiveStyle['padding-bottom']||'1px';if(this.spanStyle['padding-bottom'].indexOf('!important')<0){this.spanStyle['padding-bottom']+='!important';}
if(this.spanActiveStyle['padding-bottom'].indexOf('!important')<0){this.spanActiveStyle['padding-bottom']+='!important';}}
if(!this.isImpetus&&!this.ad.params.get('hk.icon')){this.disableIcon=true;}
this.options.hookStyle=$iTXT.ui.HookHelper.getStyleStringFromObject(this.hkStyle);this.options.hookActiveStyle=$iTXT.ui.HookHelper.getStyleStringFromObject(this.hkActiveStyle);this.spanStyle=$iTXT.ui.HookHelper.getStyleStringFromObject(this.spanStyle);this.spanActiveStyle=$iTXT.ui.HookHelper.getStyleStringFromObject(this.spanActiveStyle);var hkw=b.make("SPAN",{id:("itxthook"+this.options.id+"w"),className:"itxtnowrap"+($iTXT.core.Browser.isIE7OrLessMode()?'_ie7':''),style:this.spanStyle},[this.keyword]);if(this.isImpetus){hkw.className+=' itxtnewhookspan';}
if(!this.disableIcon&&this.options.hookIconSrc.length>0)
{this.hookIcon=b.make("IMG",{className:"itxthookicon",id:("itxthook"+this.options.id+"icon"),src:(this.options.hookIconPath+this.options.hookIconSrc),style:this.options.hookIconStyle});var childSpans=[hkw,this.hookIcon];if(!this.options.hookIconOnRight)
{childSpans=[this.hookIcon,hkw];}
p=b.make("span",{id:("itxthook"+this.options.id+"p"),className:'itxtnowrap'+($iTXT.core.Browser.isIE7OrLessMode()?'_ie7':'')},childSpans);this.childSpans.push(p);}
else
{this.childSpans.push(hkw);}
this.rootElement.itxtAppendChildren(this.childSpans);if($iTXT.ui.MobtManager.isMobtEnabled(this)){var m=$iTXT.ui.Mobt;this.mobt_timeout=-1;if(this.options.hookActiveStyle.indexOf("border-bottom")>-1){this.options.hookActiveStyle=this.options.hookActiveStyle.replace(/border-bottom:[^;]+;/,"");}
$iTXT.ui.MobtManager.infest(this);this.rootElement.itxtSubscribe("mouseover",$iTXT.core.Event.bind(this,this._onMobtMouseOver));if(this.isImpetus&&(!$iTXT.core.Browser.supportsFeature("transforms")||!$iTXT.core.Browser.supportsFeature("transitions"))){this.rootElement.itxtSubscribe("mouseover",$iTXT.core.Event.bind(this,function(){var hasIcon=this.rootElement.getElementsByTagName('img').length>0;var span=this.rootElement.firstChild;if(hasIcon){span=span.firstChild;}
span.style.color='#00CC00';span.style.borderBottomColor='#00CC00';}));}
this.rootElement.itxtSubscribe("mouseout",$iTXT.core.Event.bind(this,m._onHookOut));this.rootElement.itxtSubscribe("$iTXT:tt:close",$iTXT.core.Event.bind(this,m._ttCloseMobt));this.rootElement.itxtSubscribe("$iTXT:tt:ittc",$iTXT.core.Event.bind(this,m._ttCancelled));this.rootElement.itxtSubscribe("$iTXT:tt:mouse:out",$iTXT.core.Event.bind(this,m._ttMouseOut));}else{if(!$iTXT.MOBILE){this.rootElement.itxtSubscribe("mouseover",$iTXT.core.Event.bind(this,this._onMouseOver));this.rootElement.itxtSubscribe("mouseout",$iTXT.core.Event.bind(this,this._onMouseOut));}}
if(!$iTXT.MOBILE){this.rootElement.itxtSubscribe("click",$iTXT.core.Event.bind(this,this._onClick));}
this.rootElement.itxtSubscribe("touchend",$iTXT.core.Event.bind(this,this._onTouch));this.ad.setHook(this);this.updateHookStyle();},updateHookStyle:function()
{if(this.isActive)
{this.rootElement.itxtAddClass(this.options.activeClassName,this.options.className);this.updateSpanStyle(this.spanActiveStyle);if(!this.disableIcon&&""!==this.options.hookIconSrc&&""!==this.options.activeHookIconSrc)
{this.hookIcon.src=this.options.hookIconPath+this.options.activeHookIconSrc;}}
else
{this.rootElement.itxtAddClass(this.options.className,this.options.activeClassName);this.updateSpanStyle(this.spanStyle);if(!this.disableIcon&&""!==this.options.hookIconSrc)
{this.hookIcon.src=this.options.hookIconPath+this.options.hookIconSrc;}}},updateSpanStyle:function(css)
{var hasIcon=this.rootElement.getElementsByTagName('img').length>0;var span=this.rootElement.firstChild;if(hasIcon){span=span.getElementsByTagName('span')[0];}
if(this.hookAsBtn){this.rootElement.style.cssText=css;span.style.cssText='';}else{span.style.cssText=css;}},getHook:function()
{return this.rootElement;},isWrapped:function()
{if(this.childSpans.length==1)
return false;var span1Off=this.childSpans[0].itxtTotalOffset();var span2Off=this.childSpans[this.childSpans.length-1].itxtTotalOffset();return(span1Off.top!=span2Off.top);},saveTT:function(obj){this._tt=obj;},saveBounds:function(bb){this._bb=bb;},saveTTLaunchFunction:function(launch){this._launcher=launch;},_onMouseOver:function(e){this._clearMouseTID();var targ=this._captureMousePos(e);if(targ){var t=this;this.delayedOverTO=setTimeout(function(){t.launchTooltip(targ);},10);}},_onMobtMouseOver:function(e){var relatedTarget;if(!e)e=window.event;relatedTarget=e.relatedTarget?e.relatedTarget:e.fromElement;if(!this.rootElement.itxtContains(relatedTarget)){this.hookIn(e);this._onMouseOver(e);}},_clearMouseTID:function(){if(this.mouseOutFireTID!=-1)
{window.clearTimeout(this.mouseOutFireTID);this.mouseOutFireTID=-1;}},_captureMousePos:function(e)
{var target=e.srcElement||e.target;var scrollTop=0,scrollLeft=0;this.mouseOverSpan=target;if(target==this.rootElement)
{$iTXT.core.$(document).itxtFire("$iTXT:hook:in",{hookid:this.options.id,hook:this});return false;}
this.mouseOverTS=(new Date()).getTime();try
{scrollTop=document.documentElement.scrollTop||document.body.scrollTop;scrollLeft=document.documentElement.scrollLeft||document.body.scrollLeft;}
catch(er)
{scrollTop=0;scrollLeft=0;}
this.mouseOverPos={x:e.clientX+scrollLeft,y:e.clientY+scrollTop};return target;},launchTooltip:function(target)
{this.mouseOver=true;if(target.itxtSetStyle){target.itxtSetStyle({position:"relative"});}else{target.style.position="relative";}
var tOff=$iTXT.core.$(target).itxtTotalOffset();target.itxtSetStyle({position:""});var bb={left:tOff.left,top:tOff.top,width:target.offsetWidth,height:target.offsetHeight,target:target};$iTXT.core.$(document).itxtFire("$iTXT:hook:over",{bounds:bb,hookid:this.options.id,hook:this});},_onMouseOut:function(e)
{if(this.delayedOverTO!=-1)
{clearTimeout(this.delayedOverTO);}
if(this.mouseOver)
{var t=this;this.mouseOutFireTID=window.setTimeout(function(){t._mouseOutFire(e);},20);}},_mouseOutFire:function(e)
{this.mouseOver=false;var len=(new Date()).getTime()-this.mouseOverTS;$iTXT.core.$(document).itxtFire("$iTXT:hook:out",{hookid:this.options.id,hook:this,len:len});},_onClick:function(e)
{var src=(e.target==this.hookIcon)?$iTXT.data.ClickSource.ICON:$iTXT.data.ClickSource.KEYWORD;$iTXT.core.$(document).itxtFire("$iTXT:hook:click",{source:src,hookid:this.options.id,hook:this,advert:this.ad});return false;},_onTouch:function(e)
{var src=(e.target==this.hookIcon)?$iTXT.data.ClickSource.ICON:$iTXT.data.ClickSource.KEYWORD;$iTXT.core.$(document).itxtFire("$iTXT:hook:touch",{source:src,hookid:this.options.id,hook:this,advert:this.ad});this._clearMouseTID();var targ=this._captureMousePos(e);if(targ){var t=this;this.delayedOverTO=setTimeout(function(){t.launchTooltip(targ);},10);}
return false;},setState:function(s)
{this.isActive=s;this.updateHookStyle();},getPosition:function()
{var el=this.rootElement.firstChild;if(el.childNodes.length>1){el=el.firstChild;}
return $iTXT.core.Util.getPosition(el);},setHookStyle:function(s,as)
{if(s)
{this.options.hookStyle=s;}
if(as)
{this.options.hookActiveStyle=as;}
this.updateHookStyle();},_updateSpanCol:function()
{var c=this.rootElement.style.color;for(var i=0;i<this.childSpans.length;i++)
{this.childSpans[i].style.color=c;if(this.childSpans[i].nodeName.toLowerCase()!='span')
{this._updateInnerSpanCol(this.childSpans[i],c);}}},_updateInnerSpanCol:function(parent,color)
{var nodes=parent.childNodes,node,nodeName,i=0,n=nodes.length;for(;i<n;i++)
{node=nodes[i];nodeName=node.nodeName.toLowerCase();if(nodeName=='span')
{node.style.color=color;}}}});};$iTXT.js.loader["$iTXT.ui.LightboxChrome"]=true;$iTXT.ui.LightboxAVTrigger={ONBUFFER:0,ONOPEN:1,ONTIME:2};$iTXT.ui.LightboxChrome_Load=function(){var undefined;$iTXT.ui.LightboxChrome=$iTXT.core.Class.create($iTXT.ui.ComponentBase,{advert:null,init:function(_options,$super)
{var defOpts=$iTXT.core.Util.extend({id:"itxtTakeoverAd",zIndex:$iTXT.core.Util.highestZIndex()+500},_options);$super(defOpts);},build:function()
{var lightboxDiv=document.getElementById(this.options.id);if(lightboxDiv)
{this.rootElement=lightboxDiv;}
else
{this.rootElement.wrapper=$iTXT.core.Builder.make("DIV",{id:"itxtLboxWrpr"});this.rootElement.wrapper.itxtSetStyle({marginTop:"-400px",position:"fixed",width:"100%",left:0,top:"50%",overflow:"hidden",zIndex:this.options.zIndex+500});this.rootElement.wrapper.itxtSubscribe("click",$iTXT.core.Event.bind(this,this._wrapperClick));this.rootElement.appendChild(this.rootElement.wrapper);var existingMask=document.getElementById("itxtLboxMask");if(!existingMask)
{this.rootElement.mask=$iTXT.core.Builder.make("DIV",{id:"itxtLboxMask"},[]);this.rootElement.mask.itxtSetStyle({background:"#000",position:"fixed",top:"0px",left:"0px",width:"100%",height:"100%",zIndex:this.options.zIndex,overflow:"visible",opacity:0.8,filter:'alpha(opacity = 80)'});this.rootElement.iframe=$iTXT.core.Builder.make("iframe",{name:"itxtLboxWrprIframe",id:"itxtLboxWrprIframe",src:"about:blank",frameborder:0});this.rootElement.iframe.itxtSetStyle({background:'#444',position:"fixed",top:0,left:0,zIndex:this.options.zIndex-500,width:'100%',height:'100%'});this.rootElement.iframe.itxtHide();document.body.appendChild(this.rootElement.iframe);}
else
{this.rootElement.mask=existingMask;}
this.rootElement.mask.itxtHide();this.rootElement.itxtHide();document.body.appendChild(this.rootElement.mask);document.body.appendChild(this.rootElement);}},fixOpacity:function()
{var invalidObjects=0;var allowedWmode={transparent:true,opaque:true};var flashes=document.getElementsByTagName('object');var iframes=document.getElementsByTagName('iframe');if(flashes)
{for(var f=0,fLen=flashes.length;f<fLen;f++)
{var isAttrWmode=false;var isParamWmode=false;var thisFlash=flashes[f];if(thisFlash)
{if(thisFlash.attributes)
{for(var a=0,aLen=thisFlash.attributes.length;a<aLen;a++)
{var thisAttr=thisFlash.attributes[a];if(thisAttr&&thisAttr.nodeValue&&!$iTXT.core.Util.isObject(thisAttr.nodeValue)&&allowedWmode[thisAttr.nodeValue])
{isAttrWmode=true;}}}
if(thisFlash.childNodes)
{for(var c=0,cLen=thisFlash.childNodes.length;c<cLen;c++)
{var thisChild=thisFlash.childNodes[c];if(thisChild&&thisChild.name=="wmode"&&allowedWmode[thisChild.value])
{isParamWmode=true;}}}}
if($iTXT.core.Browser.is("Explorer")&&!isParamWmode)
{invalidObjects++;}
else if(!(isAttrWmode||isParamWmode))
{invalidObjects++;}}}
if(iframes)
{for(var i=0,iLen=iframes.length;i<iLen;i++)
{var thisFrame=iframes[i];if(thisFrame&&thisFrame.src&&thisFrame.src.indexOf('youtube.com')>0&&thisFrame.src.indexOf('wmode')==-1)
{invalidObjects++;}}}
if(invalidObjects>0)
{var solidMaskColor=this.advert.params.get('lbox.solidMaskColor','#444');this.rootElement.mask.itxtSetStyle({background:solidMaskColor,opacity:1,filter:'alpha(opacity=100)'});window.frames["itxtLboxWrprIframe"].document.body.style.backgroundColor=solidMaskColor;this.rootElement.iframe.itxtShow();}},_unitClick:function(e)
{e.preventDefault();e.stop();},_wrapperClick:function(w)
{$iTXT.fire("$iTXT:tt:lightbox:close",{isMaskClick:true});},_onMouseDownUp:function(e)
{},show:function(ad)
{this.advert=ad;this.fixOpacity();var overlaySrc=ad.params.get("lboxsrc");var _options={props:{src:overlaySrc,width:800,height:800},id:"lboxTakover"};var flash=new $iTXT.tmpl.Flash(_options,this.advert);var unit=$iTXT.core.Builder.make("DIV",{id:"itxtLboxUnit"},[flash.rootElement]);unit.itxtSetStyle({width:"800px",height:"800px",margin:"0 auto",zIndex:this.options.zIndex+1000});unit.itxtBatchSubscribe([["mouseup",$iTXT.core.Event.bind(this,this._onMouseDownUp)],["mousedown",$iTXT.core.Event.bind(this,this._onMouseDownUp)],["contextmenu",$iTXT.core.Event.bind(this,this._onMouseDownUp)],["click",$iTXT.core.Event.bind(this,this._unitClick)]],this.evtDspFuncs);this.rootElement.wrapper.itxtClear();this.rootElement.wrapper.appendChild(unit);this.rootElement.mask.itxtShow();this.rootElement.itxtShow();},hide:function()
{if(!this.advert.flash){this.advert.flash=document.getElementById("lboxTakoverMC");}
if(this.advert.flash)
{try
{flash.muteVideo();flash.reset();}
catch(e)
{}}
this.rootElement.mask.itxtHide();this.rootElement.iframe.itxtHide();this.rootElement.itxtHide();}});};$iTXT.js.loader["$iTXT.ui.Mobt"]=true;$iTXT.ui.Mobt_Load=function(){$iTXT.ui.Mobt={defaults:{color:'#000000',colorHover:'#003399',bgColor:'#F0F0F0',bgColorHover:'#F0F0F0',iconWidth:20,iconHeight:20,openDelay:0,hideDelay:1000},initMobt:function(){var b=$iTXT.core.Builder,holder,mobtHookEl,mobtIconEl;holder=document.getElementById('itxtmobtholder');function _makeicon(ctx){var mobtIconEl,that;var icon_w=$iTXT.ui.Mobt.defaults.iconWidth,icon_h=$iTXT.ui.Mobt.defaults.iconHeight;if(ctx.options.hookMobtIconWidth&&!isNaN(parseInt(ctx.options.hookMobtIconWidth,10))){icon_w=parseInt(ctx.options.hookMobtIconWidth,10);}
mobtIconEl=b.make("img",{"src":ctx.options.hookMobtIcon,"width":icon_w,"height":icon_h,style:"width:"+icon_w+"px;height:"+icon_h+"px"});mobtIconEl.className="mobt_icon";return mobtIconEl;}
if(this.options.hookMobtModern){if(this.options.hookMobtIcon){mobtHookEl=b.make("div",{},[_makeicon(this),this.options.hookMobtText]);}
else{mobtHookEl=b.make("div",{},[this.options.hookMobtText]);}
mobtHookEl.className="mobt_hook";}else{if(this.options.hookMobtIcon){mobtHookEl=b.makeNoReset("div",{},[b.makeNoReset("div",{},[],"mobt_sprite_left"),b.makeNoReset("div",{},[_makeicon(this),this.options.hookMobtText],"mobt_sprite_middle"),b.makeNoReset("div",{},[],"mobt_sprite_right")],"mobt_hook_legacy");}else{mobtHookEl=b.makeNoReset("div",{},[b.makeNoReset("div",{},[],"mobt_sprite_left"),b.makeNoReset("div",{},[this.options.hookMobtText],"mobt_sprite_middle"),b.makeNoReset("div",{},[],"mobt_sprite_right")],"mobt_hook_legacy");}}
this.mobt=b.makeEl("div",{id:"itxt_mbtc_"+this.ad.did,style:"left:-1000px"},[mobtHookEl],{resets:"mobt_container"});that=this;var offsets=this.getPosition();var defaultStyles={};defaultStyles.top=(offsets.top-5)+"px";var bgcolor=$iTXT.ui.Mobt.defaults.bgColor;if(this.options.hookMobtBgColor!==undefined&&this.options.hookMobtBgColor!==""){bgcolor=this.options.hookMobtBgColor;}
if(this.options.hookMobtColor!==undefined&&this.options.hookMobtColor!==""){defaultStyles.color=this.options.hookMobtColor;}
this.mobt.itxtSetStyle(defaultStyles);this.built=true;holder.setAttribute('data-did',this.ad.did);holder.appendChild(this.mobt);},addMobtOptions:function(){var opts=this.options,params=this.ad.params,def=$iTXT.ui.Mobt.defaults;opts.hookMobtModern=$iTXT.core.Browser.supportsFeature("transforms")&&$iTXT.core.Browser.supportsFeature("transitions");opts.hookMobtText=params.parse(params.get("hk.mobt.text"),"")||this.keyword;opts.hookMobtIcon=decodeURIComponent(params.get("hk.mobt.icon",""));opts.hookMobtIconWidth=params.get("hk.mobt.icon.width",def.iconWidth);opts.hookMobtColor=decodeURIComponent(params.get("hk.mobt.text.color",""));opts.hookMobtColorHover=decodeURIComponent(params.get("hk.mobt.h.text.color",""));$iTXT.ui.Mobt._delayOptions.call(this);},_delayOptions:function(){var opts=this.options,params=this.ad.params,def=$iTXT.ui.Mobt.defaults,ttd;opts.hookMobtOpenDelay=parseInt(params.get("hk.mobt.delay",def.openDelay),10);opts.hookMobtHideDelay=parseInt(params.get("hk.mobt.hide.delay",def.hideDelay),10);ttd=parseInt(params.get("tt.open.delay",params.get("ttd",100)),10);if(isNaN(opts.hookMobtOpenDelay)||opts.hookMobtOpenDelay<=0){opts.hookMobtOpenDelay=def.openDelay;}
if(isNaN(opts.hookMobtHideDelay)||opts.hookMobtHideDelay<=0){opts.hookMobtHideDelay=def.hideDelay;}
if(isNaN(ttd)){ttd=100;}else if(ttd>1000){ttd=750;}
if(opts.hookMobtOpenDelay>ttd){opts.hookMobtOpenDelay=(ttd-200)<0?def.openDelay:ttd-200;}},_mobtCoverOn:function(el){if(document.getElementById("cover_"+el.ad.did)){return;}
var offsets=el.getPosition();var topModifier=4;var leftModifier=el.options.hookMobtModern?-1:-2;var widther=8;var style=["position: absolute","top:"+(offsets.top-topModifier)+"px","left:"+((offsets.left-widther/2)+leftModifier)+"px","width:"+(el.rootElement.itxtBounds().width)+"px","height:"+(el.rootElement.itxtBounds().height)+"px"];var hotdog=$iTXT.core.Builder.make("div",{"style":style.join(';')},[]);if(!el.options.hookMobtModern){hotdog.style.backgroundColor='transparent';hotdog.style.boxShadow='none';}
hotdog.id="cover_"+el.ad.did;hotdog.className="mobt_hook_cover";document.getElementById('itxtmobtholder').appendChild(hotdog);return hotdog;},preMobt:function(){var that=this,el;function getHookStyle(props){var util=$iTXT.core.Util,hk=that.rootElement,css={},i,n,val;for(i=0,n=props.length;i<n;i++){val=util.getStyle(hk,props[i][0],props[i][1]);if(val){css[props[i][0]]=val;}}
return css;}
if(!this.isImpetus){return;}
el=document.createElement('div');el.className=this.options.hookMobtModern?'mobt_premobt_modern':'mobt_premobt_legacy';for(var i=0,n=this.rootElement.childNodes.length;i<n;i++){var clone=this.rootElement.childNodes[i].cloneNode(true);el.appendChild(clone);}
if(this.options.hookMobtModern){var hookSpans=el.getElementsByTagName('span');var styleFromHook=getHookStyle([['font-family','fontFamily'],['font-size','fontSize'],['font-weight','fontWeight']]);styleFromHook=$iTXT.ui.HookHelper.getStyleStringFromObject(styleFromHook);for(i=0,n=hookSpans.length;i<n;i++){var style;style=hookSpans[i].style.cssText.toLowerCase();style=$iTXT.ui.HookHelper.getStyleObjectFromString(style);style['border-bottom-width']='0px!important';style['border-bottom-style']='none!important';style['border-bottom-color']='transparent!important';style['text-decoration']='none!important';style=$iTXT.ui.HookHelper.getStyleStringFromObject(style);hookSpans[i].style.cssText=style+';'+styleFromHook;}}
else{this.rootElement.style.visibility='hidden';}
if(this.mobtCover){this.mobtCover.appendChild(el);}
setTimeout(function(){el.className+=' animate';},20);},flipMobt:function(left,l_offset,t_offset){var that=this;var top_off=0;this.mobtCover=$iTXT.ui.Mobt._mobtCoverOn(this);this.preMobt();this.mobt.itxtSetStyle({left:Math.floor(left)+"px"});this.mobt.firstChild.itxtSetStyle({left:l_offset+"px",top:top_off+"px",MozTransitionDelay:"250ms",MozTransform:"rotateX(0deg)",WebkitTransitionDelay:"250ms",WebkitTransform:"rotateX(0deg)",transitionDelay:"250ms",transform:"rotateX(0deg)"});return true;},legacyReveal:function(left,l_offset,t_offset){this.mobtCover=$iTXT.ui.Mobt._mobtCoverOn(this);this.preMobt();this.mobt.itxtSetStyle({left:(Math.floor(left)+l_offset)+"px"});this.mobt.firstChild.itxtSetStyle({top:t_offset+"px",marginTop:"-3px"});return true;},closeMobt:function(data){window.clearTimeout(this.mobt_timeout);if(this.built&&this.mobt!==undefined){this.rootElement.style.visibility='visible';this.mobt.firstChild.itxtSetStyle({MozTransitionDelay:"0ms",MozTransform:"rotateX(-90deg)",WebkitTransitionDelay:"0ms",WebkitTransform:"rotateX(-90deg)",transitionDelay:"0ms",transform:"rotateX(-90deg)"});try{document.getElementById("cover_"+this.ad.did).parentNode.removeChild(document.getElementById("cover_"+this.ad.did));}catch(e){}
this.built=false;var that=this;setTimeout(function(){var dead_id=that.mobt.id;if(that.mobt&&that.mobt.parentNode){that.mobt.parentNode.removeChild(that.mobt);}},300);$iTXT.trigger("$iTXT:mobt:close",{data:{hook:this,ttWasOpen:data&&data.ttWasOpen}});}
return true;},_onHookIn:function(e){var that=this,b=$iTXT.core.Builder;if(!this.built){this.initMobt();}
var new_left=this.getPosition().left;var new_width=this.rootElement.itxtBounds().width;var off_setobj=this.rootElement;if(this.isWrapped()){for(var i in this.childSpans){var ins=$iTXT.core.Math.pointInside({l:this.childSpans[i].offsetLeft,t:this.childSpans[i].offsetTop,h:this.childSpans[i].offsetHeight,w:this.childSpans[i].offsetHeight},{x:e.clientX,y:e.clientY},50);if(ins){new_left=$iTXT.core.Util.getElementPosition(this.childSpans[i]).left;new_width=this.childSpans[i].itxtBounds().width;off_setobj=this.childSpans[i];}}}
var w_offset=(off_setobj.itxtBounds().width-this.mobt.firstChild.itxtBounds().width)/2;var h_offset;if(!this.options.hookMobtModern){h_offset=-3;var nodes=this.mobt.firstChild.children,begin=0,end=100;for(var k=0,ln=nodes.length;k<ln;k++){if(nodes[k].className==="mobt_sprite_left"){}
if(nodes[k].className==="mobt_sprite_right"){end=nodes[k].offsetLeft+nodes[k].offsetWidth;}}
w_offset=(off_setobj.itxtBounds().width-(end-begin))/2;}
if(off_setobj!==this.rootElement){h_offset=off_setobj.offsetTop-this.rootElement.offsetTop;var poses=$iTXT.core.Util.getElementPosition(off_setobj);if(poses.left-this.mobt.firstChild.itxtBounds().width<0){new_left=1;w_offset=2;}else if(document.body.offsetWidth>poses.left+new_width/2){new_left=document.body.offsetWidth;w_offset=-this.mobt.firstChild.itxtBounds().width;}}
this._closeMobt=$iTXT.ui.Mobt._closeMobt;if(!this.options.hookMobtModern){this.mobt.itxtSetStyle({'height':'30px','width':($iTXT.data.Dom.getElementsByClassName("mobt_sprite_middle",this.mobt)[0].offsetWidth+29)+'px'});}else{this.mobt.style.width=(this.mobt.firstChild.offsetWidth+w_offset)+"px";}
function reveal(){if(that.flipMobt(new_left,w_offset,h_offset)){$iTXT.trigger("$iTXT:mobt:open",{data:{hook:that}});}}
if(this.options.hookMobtOpenDelay){setTimeout(reveal,this.options.hookMobtOpenDelay);}
else{reveal();}},_onHookOut:function(e){if(this.dontFireHookOut){return;}
var th=this;setTimeout(function(){$iTXT.trigger("$iTXT:mobt:ittc",e);},20);},_onMobtIn:function(e){window.clearTimeout(this.mobt_timeout);var css={},opts=this.options,def=$iTXT.ui.Mobt.defaults;css.color=opts.hookMobtColorHover||def.colorHover;this.mobt.firstChild.itxtAddClass('hover');this.mobt.firstChild.itxtSetStyle(css);if(!$iTXT.ui.tt.isOpen||$iTXT.ui.tt.currentAdvert.hook!==this){setTimeout(this._launcher,60);}
$iTXT.ui.tt.cancelScheduledHide(this.ad);$iTXT.fire("$iTXT:mobt:in",{data:{hook:this}});},_onMobtOut:function(e){var css={},opts=this.options,def=$iTXT.ui.Mobt.defaults;css.color=opts.hookMobtColor||def.color;this.mobt.firstChild.itxtRemoveClass('hover');this.mobt.firstChild.itxtSetStyle(css);if($iTXT.ui.tt.currentAdvert){this._mouseOutFire(e);}
this.visited=false;$iTXT.fire("$iTXT:mobt:out",{data:{hook:this}});},_onHotdogIn:function(e){window.clearTimeout(this.mobt_timeout);},_onHotdogOut:function(e){$iTXT.fire("$iTXT:mobt:out",{hook:this,src:"hotdog out"});var css={},opts=this.options,def=$iTXT.ui.Mobt.defaults;css.color=opts.hookMobtColor||def.color;this.mobt.firstChild.itxtRemoveClass('hover');this.mobt.firstChild.itxtSetStyle(css);},_onMobtClick:function(e){var src=(e.target==this.hookIcon)?$iTXT.data.ClickSource.ICON:$iTXT.data.ClickSource.KEYWORD;$iTXT.fire("$iTXT:hook:click",{source:src,so:25,hookid:this.options.id,hook:this,advert:this.ad});return false;},_ttCloseMobt:function(e){if(this.mobt!==undefined&&e.data.did!==this.ad.did){this.closeMobt(e);}},_ttCancelled:function(e){if(this.id===e.data.data.hook.id){this._scheduleClose();}},_scheduleClose:function(e){window.clearTimeout(this.mobt_timeout);var th=this;this.mobt_timeout=setTimeout(function(){th.closeMobt(e);},this.options.hookMobtHideDelay);},_ttMouseOut:function(){},_closeMobt:function(e){var that=this;if(this.mobt&&this.mobt.id&&this.built&&this.ad.did===$iTXT.ui.tt.currentAdvert.did){setTimeout(function(){that.closeMobt({ttWasOpen:true,id:that.id,source:"_close"});},60);}}};};$iTXT.js.loader["$iTXT.ui.MobtManager"]=true;$iTXT=$iTXT||{};$iTXT.ui.MobtManager_Load=function(){var holder;(function(hkManager){var hooks=hkManager.hooks;holder=$iTXT.core.Builder.make('div',{id:"itxtmobtholder"});holder.itxtSetStyle({position:"absolute",left:"0px",top:"0px"});holder.className="";document.body.appendChild(holder);$iTXT.addEvent(holder,'mouseover',function(e){var relatedTarget;if(!e)e=window.event;relatedTarget=e.relatedTarget?e.relatedTarget:e.fromElement;if(!holder.itxtContains(relatedTarget)){$iTXT.trigger('$iTXT:mobt:over',e);}});$iTXT.addEvent(holder,'mouseout',function(e){var relatedTarget;if(!e)e=window.event;relatedTarget=e.relatedTarget?e.relatedTarget:e.toElement;if(!holder.itxtContains(relatedTarget)){$iTXT.trigger('$iTXT:mobt:out',e);}});$iTXT.addEvent(holder,'mousedown',function(e){if(!e)e=window.event;$iTXT.trigger('$iTXT:mobt:click',e);});})($iTXT.ui.HookManager);$iTXT.ui.MobtManager={curMobt:null,infest:function(hook){var m=$iTXT.ui.Mobt,opts=hook.options,enabled=$iTXT.ui.MobtManager.isMobtEnabled(hook);if(!enabled||hook.initMobt==m.initMobt){return;}
hook.addMobtOptions=m.addMobtOptions;hook.initMobt=m.initMobt;hook.preMobt=m.preMobt;hook.flipMobt=m.flipMobt;hook.closeMobt=m.closeMobt;hook.hookIn=m._onHookIn;hook._scheduleClose=m._scheduleClose;hook.addMobtOptions();if(!opts.hookMobtModern){var host=$iTXT.glob.params.get('tt.img.dir','http://images.intellitxt.com/ast/tt/09/');hook.flipMobt=m.legacyReveal;var i=new Image();i.src=host+"mobt/mobt_sprites.png";}},isMobtEnabled:function(hook){var paramValue,campaignEnabled,channelEnabled;var isMobile=$iTXT.core.Browser.isTargetedSmartphone($iTXT.glob.params.getBool("tt.force.mobile",false));var allowMobile=$iTXT.glob.params.getBool("ui.mobt.mobile",false);if(isMobile&&!allowMobile){return false;}
if(hook.ad.getAdvertType()===0){return false;}
if(hook.ad.params.getBool("lbox.bar",false)&&'classic'==($iTXT.glob.params.get('ui.set.progressbar',$iTXT.glob.params.get('ui.set','classic')).toLowerCase())){return false;}
paramValue=$iTXT.glob.params.getBool("ui.mobt");if(false===paramValue){channelEnabled=0;}
else if(true===paramValue){channelEnabled=1;}
else{channelEnabled=-1;}
paramValue=hook.ad.params.getBool("hk.mobt");if(true===paramValue){campaignEnabled=1;}
else if(false===paramValue){campaignEnabled=0;}
else{campaignEnabled=-1;}
if(campaignEnabled==1&&channelEnabled!==0){return true;}
if(campaignEnabled==-1&&channelEnabled==1){return true;}
return false;},_setCurMobt:function(mobt){var that=$iTXT.ui.MobtManager;if(that.curMobt&&that.curMobt.ad.did!=mobt.ad.did){that.curMobt.closeMobt();that.curMobt=mobt;}else if(!that.curMobt){that.curMobt=mobt;}},_mobtOpen:function(e){var that=$iTXT.ui.MobtManager;that._setCurMobt(e.data.hook);that.curMobt.timeOpen=$iTXT.core.Util.ts();$iTXT.data.al.logAV(that.curMobt.ad,$iTXT.data.AdViewValue.ADVIEW_MOBT_OPEN,0,{});},_mobtClose:function(e){var that=$iTXT.ui.MobtManager,curMobt=that.curMobt,mtrData;if(curMobt&&curMobt.ad.did===e.data.hook.ad.did){curMobt.timeClose=$iTXT.core.Util.ts();mtrData={advert:curMobt.ad,mt:125,mv:e.data.ttWasOpen?'1':'0',mv2:curMobt.timeClose-curMobt.timeOpen};$iTXT.fire("$iTXT:data:log:monitor",mtrData);}
that.curMobt=null;},_mobtIn:function(e){var that=$iTXT.ui.MobtManager;that._setCurMobt(e.data.hook);}};$iTXT.subscribe("$iTXT:tt:lightbox:close",function(){var curMobt=$iTXT.ui.MobtManager.curMobt;if(curMobt){curMobt.closeMobt({ttWasOpen:true});}});$iTXT.on('$iTXT:mobt:open',function(e){this._mobtOpen(e);this.curMobt._scheduleClose(e);this.curMobt.dontFireHookOut=true;},$iTXT.ui.MobtManager);$iTXT.on('$iTXT:mobt:close',function(e){var hook=e.data.hook;hook.dontFireHookOut=false;this._mobtClose(e);},$iTXT.ui.MobtManager);$iTXT.on('$iTXT:mobt:over',function(e){var did=holder.getAttribute('data-did');var hook=$iTXT.ui.HookManager.getHookByDetailId(did);e.data={};e.data.hook=hook;$iTXT.ui.MobtManager._setCurMobt(hook);$iTXT.ui.Mobt._onMobtIn.call(hook,e);});$iTXT.on('$iTXT:mobt:out',function(e){var did=holder.getAttribute('data-did');var hook=$iTXT.ui.HookManager.getHookByDetailId(did);e.data={};e.data.hook=hook;$iTXT.ui.Mobt._onMobtOut.call(hook,e);});$iTXT.on('$iTXT:mobt:click',function(e){var did=holder.getAttribute('data-did');var hook=$iTXT.ui.HookManager.getHookByDetailId(did);e.data={};e.data.hook=hook;$iTXT.ui.Mobt._onMobtClick.call(hook,e);});};$iTXT.js.loader["$iTXT.ui.OldTooltipHeader"]=true;$iTXT.ui.OldTooltipHeader_Load=function(){var undefined;var $iUtil=$iTXT.core.Util;$iTXT.ui.OldTooltipHeader=$iTXT.core.Class.create($iTXT.ui.ComponentBase,{options:null,closeBtn:null,whatBtn:null,vmLogo:null,privIconBtn:null,privIconLnk:null,containers:{rootElement:[],buttons:[],topLeftDiv:[]},init:function(_options,$super)
{this.componentParams=$iTXT.core.Util.extend({'hdr.wt.alt':'${swti}','hdr.close.alt':'${scls}','hdr.img.dir':'http://images.intellitxt.com/ast/tt/09/','hdr.brand':'','hdr.brand.txt':'','hdr.txt':'${SSPL}','hdr.logo.name':'vm_logo2009.gif','hdr.logo':"${hdr.img.dir}${hdr.logo.name}",'hdr.logo.width':'66','hdr.logo.height':'19','hdr.close.on.name':'close_on.gif','hdr.close.on':"${hdr.img.dir}${hdr.close.on.name}",'hdr.close.off.name':'close_off.gif','hdr.close.off':"${hdr.img.dir}${hdr.close.off.name}",'hdr.close.width':'19','hdr.close.height':'19','hdr.what.on.name':'what_on.gif','hdr.what.on':"${hdr.img.dir}${hdr.what.on.name}",'hdr.what.off.name':'what_off.gif','hdr.what.off':"${hdr.img.dir}${hdr.what.off.name}",'hdr.what.width':'19','hdr.what.height':'19','hdr.privacyicon.txt':'${trans.privacyicon.txt}','hdr.privacyicon.on.name':'ad_choices_on.png','hdr.privacyicon.src.on':"${hdr.img.dir}${hdr.privacyicon.on.name}",'hdr.privacyicon.off.name':'ad_choices_off.png','hdr.privacyicon.src.off':"${hdr.img.dir}${hdr.privacyicon.off.name}",'hdr.privacyicon.width':'19','hdr.privacyicon.height':'19','hdr.privacyicon.style':'','hdr.privacyicon.hover':''},this.componentParams);var gp=$iTXT.glob.params;var defOpts=$iTXT.core.Util.extend({id:"itxtheader",height:21,margins:[6,4,2,2,1,1],defbgcol:"#FDFEFF$$#F6F6F6$$#F4F4F4$$#F1F0F0$$#EEEDEE$$#ECECEC$$#EBEBEA$$#EBEBEB$$#EBEBEB$$#E7E7E6$$#CFCFCF$$#D1D1D2$$#D3D3D3$$#D8D7D5$$#DDDDD9$$#E1E0D9$$#E5E4DB$$#E9E9DC$$#EBEBDC$$#EDECDD$$#E4E4E4",hdrTxt:"${hdr.txt}",whtTxt:"${hdr.wt.alt}",privIconTxt:"${hdr.privacyicon.txt}",clsTxt:"${hdr.close.alt}",vmLogoSrc:"${hdr.logo}",vmLogoWidth:"${hdr.logo.width}",vmLogoHeight:"${hdr.logo.height}",clsSrcOn:"${hdr.close.on}",clsSrc:"${hdr.close.off}",clsWidth:"${hdr.close.width}",clsHeight:"${hdr.close.height}",whtSrcOn:"${hdr.what.on}",whtSrc:"${hdr.what.off}",whtWidth:"${hdr.what.width}",whtHeight:"${hdr.what.height}",privIconSrcOnDef:"${hdr.privacyicon.src.on}",privIconSrcDef:"${hdr.privacyicon.src.off}",privIconSrcOn:gp.parse("${hdr.privacyicon.src.on.${cc}}"),privIconSrc:gp.parse("${hdr.privacyicon.src.off.${cc}}"),privIconWidth:"${hdr.privacyicon.width}",privIconHeight:"${hdr.privacyicon.height}",privIconSrcStyle:"${hdr.privacyicon.style}",privIconSrcHover:"${hdr.privacyicon.hover}",topLeftDivContainer:this.containers.rootElement,logoContainer:this.containers.buttons,customLogoContainer:this.containers.rootElement,headerTextContainer:this.containers.topLeftDiv,privacyIconContainer:this.containers.buttons,whatsThisButtonContainer:null,adChoicesButtonContainer:null,custLogoSrc:"${hdr.brand}",custLogoTxt:"${hdr.brand.txt}"},_options);$super(defOpts);var o=this.options;$iTXT.core.Util.cacheImages([o.vmLogoSrc,o.clsSrcOn,o.clsSrc,o.whtSrcOn,o.whtSrc]);this.options.bgcolours=$iTXT.core.Util.parseColorArray(this.options.defbgcol,this.options.height,"$$");this.height=this.options.height;this.rootElement.itxtBatchSubscribe([["mouseover",function(e){$iTXT.core.$(document).itxtFire("$iTXT:tt:hdr:mouse:over",e);}],["mouseout",function(e){$iTXT.core.$(document).itxtFire("$iTXT:tt:hdr:mouse:out",e);}]],this.evtDspFuncs);},setSize:function(w,h,$super)
{$super(w,this.options.height);},build:function()
{var b=$iTXT.core.Builder;var t=this;this.rootElement.ondragstart=function(){return false;};this.rootElement.onselectstart=function(){return false;};if(!this.options.draggable)
{this.rootElement.className="fixed";}
this.buildLogo();this.buildHeaderText();this.buildPrivacyButton();this.buildCloseButton();if(this.options.custLogoSrc)
{this._showCustomLogo();}
else
{this._hideCustomLogo();}
this.buildTopLeftDiv();this.rootElement.appendChild(b.make("DIV",{className:"itxttrc"},this.containers.buttons));this.containers.buttons.length=0;for(var i=0;i<this.containers.rootElement.length;i++)
{this.rootElement.appendChild(this.containers.rootElement[i]);}
this.containers.rootElement.length=0;var cornerNodes=[];for(var i=0;i<this.options.height;i++)
{var bgcol=this.options.bgcolours[i]||"black";cornerNodes.push(this._createDiv(this.options.margins[i],this.options.margins[i],bgcol));}
this.cornerHolder=$iTXT.core.Builder.make("DIV",{className:"itxtcrnhldr"},cornerNodes);this.rootElement.appendChild(this.cornerHolder);this.rootElement.itxtSubscribe("mousedown",$iTXT.core.Event.bind(this,this._hdrDown));this.rootElement.itxtSubscribe("mouseup",$iTXT.core.Event.bind(this,this._hdrUp));},buildLogo:function()
{var t=this;this.vmLogo=$iTXT.core.Builder.make("APNG",{className:"itxtvmlogo",src:this.options.vmLogoSrc,width:this.options.vmLogoWidth,height:this.options.vmLogoHeight});this.vmLogo.ondragstart=function(){return false;};this.vmLogo.itxtSubscribe("mousedown",function(e){$iTXT.core.Event.preventDefault(e);});this.vmLogo.itxtSubscribe("click",$iTXT.core.Event.bind(this,this._vmLogoBtnClk));this.vmLogoWrapper=$iTXT.core.Builder.make("A",{target:'_blank'},[this.vmLogo]);this.options.logoContainer.push(this.vmLogoWrapper);},buildHeaderText:function()
{this.hdrTxtCont=$iTXT.core.Builder.make("DIV",{className:"itxtadv"},[this.options.hdrTxt]);this.options.headerTextContainer.push(this.hdrTxtCont);},buildTopLeftDiv:function()
{this.topLeftDiv=$iTXT.core.Builder.make("DIV",{className:"itxttlc"},this.containers.topLeftDiv);this.containers.topLeftDiv.length=0;this.containers.rootElement.push(this.topLeftDiv);if(this.options.hdrTxt=='')
{this.topLeftDiv.itxtHide();}},buildCloseButton:function()
{var t=this;this.closeBtn=$iTXT.core.Builder.make("APNG",{className:"itxtclose",src:this.options.clsSrc,width:this.options.clsWidth,height:this.options.clsHeight,alt:this.options.clsTxt,title:this.options.clsTxt});this.closeBtn.itxtSubscribe("mouseover",function(){t.closeBtn.src=t.options.clsSrcOn;});this.closeBtn.itxtSubscribe("mouseout",function(){t.closeBtn.src=t.options.clsSrc;});this.closeBtn.itxtSubscribe("click",$iTXT.core.Event.bind(this,this._closeBtnClk));this.containers.buttons.push(this.closeBtn);},buildPrivacyButton:function()
{this.options.privIconMode=parseInt(this.params.get(this.params.parse("hdr.privacyicon.mode.${cc}"),$iTXT.ui.privacyIconAlign.ICON_ONLY));var allowedRegions=this.params.get("tt.privacyicon.regions","").toLowerCase().split(','),countryCode=this.params.get("cc","en").toLowerCase(),button;if(($iTXT.core.Util.inArray(allowedRegions,'all')||$iTXT.core.Util.inArray(allowedRegions,countryCode))&&this.options.privIconMode>0)
{button=this.buildAdChoicesLink();}
else
{button=this.buildWhatsThisButton();}
this.options.privacyIconContainer.push(button);},buildAdChoicesLink:function()
{var t=this,builder=$iTXT.core.Builder;if(this.options.privIconMode!=$iTXT.ui.privacyIconAlign.TEXT_ONLY)
{this.privIconBtn=builder.make("APNG",{className:"itxtprivacyicon",src:this.options.privIconSrcDef,width:this.options.privIconWidth,height:this.options.privIconHeight,alt:this.options.privIconTxt,title:this.options.privIconTxt});this.privIconBtn.itxtBatchSubscribe([["mouseover",function(){t._changePrivateIcon(true);}],["mouseout",function(){t._changePrivateIcon(false);}],["click",function(){t._onPrivacyIconClick();}]],this.evtDspFuncs);}
if(this.options.privIconMode!=$iTXT.ui.privacyIconAlign.ICON_ONLY)
{this.privIconLnk=builder.make("div",{className:"itxtprivacyicontxt",title:this.options.privIconTxt,style:this.options.privIconSrcStyle},[this.params.parse(this.options.privIconTxt)]);if(''!=this.options.privIconSrcStyle&&''!=this.options.privIconSrcHover)
{this.privIconLnk.itxtSubscribe("mouseover",function(){t.privIconLnk.style.cssText=t.options.privIconSrcHover;});this.privIconLnk.itxtSubscribe("mouseout",function(){t.privIconLnk.style.cssText=t.options.privIconSrcStyle;});}}
var privIconElems=[];switch(this.options.privIconMode)
{case $iTXT.ui.privacyIconAlign.ICON_ONLY:privIconElems.push(this.privIconBtn);break;case $iTXT.ui.privacyIconAlign.ICON_LEFT:privIconElems.push(this.privIconBtn);privIconElems.push(this.privIconLnk);break;case $iTXT.ui.privacyIconAlignn.ICON_RIGHT:privIconElems.push(this.privIconLnk);privIconElems.push(this.privIconBtn);break;case $iTXT.ui.privacyIconAlign.TEXT_ONLY:privIconElems.push(this.privIconLnk);break;}
if(this.options.adChoicesButtonContainer)
{this.options.privacyIconContainer=this.options.adChoicesButtonContainer;}
return this.privIconWrapper=builder.make("A",{target:'_blank',className:"itxtprivacyicon"},privIconElems);},buildWhatsThisButton:function()
{var t=this,builder=$iTXT.core.Builder;this.whatBtn=builder.make("APNG",{className:"itxtwhat",src:this.options.whtSrc,width:this.options.whtWidth,height:this.options.whtHeight,alt:this.options.whtTxt,title:this.options.whtTxt});this.whatBtn.itxtSubscribe("mouseover",function(){t.whatBtn.src=t.options.whtSrcOn;});this.whatBtn.itxtSubscribe("mouseout",function(){t.whatBtn.src=t.options.whtSrc;});this.whatBtn.itxtSubscribe("click",$iTXT.core.Event.bind(this,this._whatBtnClk));if(this.options.whatsThisButtonContainer)
{this.options.privacyIconContainer=this.options.whatsThisButtonContainer;}
return this.whatBtnWrapper=builder.make("A",{target:'_blank',style:this.options.whatButtonStyle||''},[this.whatBtn]);},_changePrivateIcon:function(isOver)
{if($iTXT.glob.params.containsTokens(this.options.privIconSrc))
{this.privIconBtn.src=isOver?this.options.privIconSrcOnDef:this.options.privIconSrcDef;}
else
{this.privIconBtn.src=isOver?this.options.privIconSrcOn:this.options.privIconSrc;}},_onPrivacyIconClick:function()
{var opts={mt:124,mv:this.advert.params.get("A.AT"),ipid:this.advert.params.get("IPID")};$iTXT.fire("$iTXT:data:log:monitor",opts);},_createCustomLogo:function()
{if(!this.customLogo)
{this.customLogo=$iTXT.core.Builder.make("APNG",{className:"itxtcustlogo",style:"display:none",src:this.options.custLogoSrc,alt:this.options.custLogoTxt,title:this.options.custLogoTxt});this.options.customLogoContainer.push(this.customLogo);this.customLogo.itxtSubscribe("click",$iTXT.core.Event.bind(this,this._customLogoBtnClk));}},_showCustomLogo:function()
{this._createCustomLogo();this.customLogo.itxtShow();},_hideCustomLogo:function()
{if(this.customLogo)
{this.customLogo.itxtHide();}},_createDiv:function(lm,rm,bgcol)
{return $iTXT.core.Builder.make("DIV",{className:"itxtcrn",style:"background-color: "+(bgcol||this.options.bgcol)+"; margin-left: "+(lm||0)+"px; margin-right:"+(rm||0)+"px;"});},_hdrDown:function(e)
{if(this._hdrTarget(e.target))
{$iTXT.core.$(document).itxtFire("$iTXT:tt:hdr:mouse:down",e);}},_hdrUp:function(e)
{if(this._hdrTarget(e.target))
{$iTXT.core.$(document).itxtFire("$iTXT:tt:hdr:mouse:up",e);}},_hdrTarget:function(t)
{return((t!=this.closeBtn)&&(t!=this.whatBtn)&&(t!=this.vmLogo));},_closeBtnClk:function(e)
{$iTXT.core.$(document).itxtFire("$iTXT:tt:close:btn:click");},_whatBtnClk:function(e)
{$iTXT.core.$(document).itxtFire("$iTXT:tt:what:btn:click");},_vmLogoBtnClk:function()
{$iTXT.core.$(document).itxtFire("$iTXT:tt:vmlogo:click");},_customLogoBtnClk:function()
{$iTXT.core.$(document).itxtFire("$iTXT:tt:logo:click");},setAdvert:function(ad,$super)
{if(this.advert==ad)
return;var adopts=ad.params;var tmpl=ad.getTemplate();var tmplopts=(null!=tmpl)?(tmpl.options||{}):{};$super(ad);var wtUrl=this.advert.params.parse("${tt.wturl}");var privIconUrl=adopts.parse(this.advert.params.get(adopts.parse("tt.privacyicon.url.${cc}"),wtUrl));this.advert.params.set('tt.privacyicon.url',privIconUrl,$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN);var logoAT=ad.params.get("hdr.logo"+ad.getAdvertType());if(null!=logoAT&&""!=logoAT)
{this.options.vmLogoSrc=logoAT;}
if(this.vmLogo)
{this.vmLogo.itxtChangeSrc(this.options.vmLogoSrc);if(""==this.options.vmLogoSrc)
{this.vmLogo.itxtHide();}
else
{this.vmLogo.itxtShow();this.vmLogoWrapper.href=wtUrl;}}
if(this.hdrTxtCont)
{this.hdrTxtCont.innerHTML=this.options.hdrTxt;var hdts=this.advert.params.get("hdr.txt.style");if(hdts)
{this.hdrTxtCont.itxtSetStyle(hdts);}}
if(this.closeBtn)
{this.closeBtn.alt=this.closeBtn.title=$iUtil.decodeHtmlEntities(this.options.clsTxt);this.closeBtn.itxtChangeSrc(this.options.clsSrc);if(""==this.options.clsSrc)
{this.closeBtn.itxtHide();}
else
{this.closeBtn.itxtShow();}}
if(this.whatBtn)
{this.whatBtn.alt=this.whatBtn.title=$iUtil.decodeHtmlEntities(this.options.whtTxt);this.whatBtn.itxtChangeSrc(this.options.whtSrc);if(""==this.options.whtSrc)
{this.whatBtn.itxtHide();}
else
{this.whatBtn.itxtShow();this.whatBtnWrapper.href=wtUrl;}}
if(this.privIconWrapper)
{if(this.privIconBtn)
{this.privIconBtn.alt=this.privIconBtn.title=$iUtil.decodeHtmlEntities(this.options.privIconTxt);this._changePrivateIcon(false);}
if(this.privIconLnk)
{var acts=this.advert.params.get("hdr.privacyicon.style");if(acts)
{this.privIconLnk.itxtSetStyle(acts);}}
if(""==this.options.privIconSrc)
{if(this.privIconBtn)
{this.privIconBtn.itxtHide();}
if(this.privIconLnk)
{this.privIconLnk.itxtHide();}}
else
{if(this.privIconBtn)
{this.privIconBtn.itxtShow();}
if(this.privIconLnk)
{this.privIconLnk.itxtShow();}
this.privIconWrapper.href=privIconUrl;}
this.advert.params.set("tt.privacyicon",true,$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN);}
else
{this.advert.params.set("tt.privacyicon",false,$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN);}
if(""!=this.options.custLogoSrc)
{this._createCustomLogo();this.customLogo.itxtShow();this.customLogo.alt=this.customLogo.title=$iUtil.decodeHtmlEntities(this.options.custLogoTxt);this.customLogo.itxtChangeSrc(this.options.custLogoSrc);}
else if(this.customLogo)
{if(this.customLogo)
{this.customLogo.itxtHide();}}
if(this.topLeftDiv)
{if(""==this.options.hdrTxt)
{this.topLeftDiv.itxtHide();}
else
{this.topLeftDiv.itxtShow();}}
this.options.bgcolours=$iTXT.core.Util.parseColorArray(tmplopts.tthdrcol||adopts.get("tt.hdr.col",this.options.defbgcol),this.options.height,"$$");this._ubg();},_ubg:function(c)
{var bgCol=this.options.bgcolours;for(var i=0;i<this.cornerHolder.childNodes.length;i++)
{this.cornerHolder.childNodes[i].itxtSetStyle({backgroundColor:(bgCol[i]||'#ffffff')});}}});};$iTXT.js.loader["$iTXT.ui.Tooltip"]=true;$iTXT.ui.Tooltip_Load=function(){var undefined;$iTXT.ui.TooltipPosition={AR:"AR",AL:"AL",BR:"BR",BL:"BL"};$iTXT.ui.SnapMode={Mouse:1,Text:0};$iTXT.ui.Tooltip=$iTXT.core.Class.create($iTXT.ui.ComponentBase,{options:null,currentHook:null,currentHookBB:null,hideTID:-1,openTID:-1,lastDID:-1,isOpen:false,fixedOpen:false,openTS:null,hdrDown:false,hdrDownX:0,hdrDownY:0,loading:false,isMouseOver:false,mouseOutTID:-1,mouseOverTS:null,defaultBgCol:"#f3f3f3",defaultHoverBgCol:"#f6f6f6",defaultImageDirectory:'http://images.intellitxt.com/ast/tt/09/',mouseOutLogged:false,interactionLatch:false,timeouts:[],prefadeKiller:null,hasClosed:false,fadeInit:1,init:function(_options,$super)
{$iTXT.glob.dbParams.set('tt.img.dir',this.defaultImageDirectory,$iTXT.cnst.WEIGHTING_DEFAULT_DEFAULT);var rootsub,rootevents,docsub,docevs,evt=$iTXT.core.Event,defOpts=$iTXT.core.Util.extend({id:"itxttt",ps:$iTXT.ui.TooltipPosition.AR,bgcol:"#ececec",hbgcol:'#f6f6f6',ftrbgcol:'#f3f3f3',tailbgcol:'#f3f3f3',minShowTime:0,tthd:1500,mintthd:0,openDelay:100,draggable:true,invisible:false},_options);this.zindex=9910000;$super(defOpts);this.rootElement.style.zIndex=this.zindex;rootsub=$iTXT.core.Dom.router(this);rootevents=[["mouseover","_onMouseOver"],["mouseout","_onMouseOut"],["mouseup","_onMouseDownUp"],["mousedown","_onMouseDownUp"],["contextmenu","_onMouseDownUp"]];this.rootElement.itxtBatchSubscribe(rootsub(rootevents),this.evtDspFuncs);$iTXT.core.$(document.body).itxtBatchSubscribe([["mouseover",$iTXT.core.Event.bind(this,this._bodyOver)],["mouseup",$iTXT.core.Event.bind(this,this._hdrUp)]],this.evtDspFuncs);docsub=$iTXT.core.Dom.router(this);docevs=[["mousemove","_onBodyMouseMove"],["$iTXT:tt:close","close"],["$iTXT:tt:expand","_expand"],["$iTXT:hook:over","_hookOver"],["$iTXT:hook:in","_hookIn"],["$iTXT:hook:out","_hookOut"],["$iTXT:hook:click","_hookClick"],["$iTXT:tt:hdr:mouse:down","_hdrDown"],["$iTXT:tt:hdr:mouse:up","_hdrUp"],["$iTXT:tt:open","_decorateOnTTOpen"],["$iTXT:tt:content:loaded","_resizeOnTTOpenFreeform"],["$iTXT:tt:mouse:over","_latchExpand"],["$iTXT:tt:resize","_resizeTooltip"],["$iTXT:tt:set:fixed:open","_setFixedOpen"],["$iTXT:tt:over","_ttOver"],["$iTXT:tt:out","_ttOut"],["$iTXT:tt:content:change:ad","_changeAdvert"],["$iTXT:tt:content:loaded","_contentLoaded"],["$iTXT:tt:expand","_resizeOnExpand"],["$iTXT:function:mvuExpand","_mvuExpand"],["$iTXT:function:fExp","_fExp"],["$iTXT:function:fClick","_fClick"],["$iTXT:tt:iframe:out","_iframeOut"],["$iTXT:tt:global:set:bgcol","_setBGCol"],["$iTXT:tt:global:set:hvcol","_setHVCol"]];$iTXT.core.$(document).itxtBatchSubscribe(docsub(docevs),this.evtDspFuncs);$iTXT.on('$iTXT:mobt:over',this._mobtIn,this);$iTXT.on('$iTXT:mobt:out',this._clearLaunch,this);$iTXT.on('$iTXT:mobt:ittc',this._clearLaunch,this);$iTXT.on('$iTXT:mobt:close',this.close,this);this.hide();},build:function()
{this.chrome=new $iTXT.ui.TooltipChrome({ps:this.options.ps,bgcol:this.options.bgcol,draggable:this.options.draggable});this.chrome.build(this.options.bgcol);this.addChild(this.chrome);this.content=new $iTXT.ui.TooltipContent({ps:this.options.ps,bgcol:this.options.bgcol});this.chrome.rootElement.appendChild(this.content.rootElement);},setPositionState:function(ps)
{if(ps)
{this.ps=ps;this.chrome.setPositionState(ps);}},setSize:function(w,h,resizeContent,$super)
{this.chrome.setPosition(0,0);if(resizeContent)
{this.content.resize(null,null,false);}
var contentW=this.content.getWidth();var contentH=this.content.getHeight();this.chrome.setSize(contentW,contentH-this.content.heightOverlap,this.content.heightOverlap);var contentOff=this.chrome.getContentOffset();this.content.setPosition(contentOff[0],contentOff[1]);var thisHeight=Math.max(0,this.chrome.getOverlappedHeight());$super(contentW,thisHeight);},open:function(l,t,state)
{this.left=l;this.top=t;this.hasClosed=false;this._stripClass("itxtsemi");this._stripClass("itxtfade");this._stripClass("itxtsnapback");$iTXT.core.$(document).itxtFire("$iTXT:tt:before:open");this.hide();this.setPositionState(state);this.rootElement.itxtRemoveClass("minimise");this.setPosition(l,t);this.setSize(null,null,false);if(!this.options.invisible){this.show();if(this._useFade()){this.prepFade();if(this.currentAdvert.params.getBool("fade.in.on",true)){var m=this;this._stickClass("itxtprefade");if($iTXT.ui.tt.ps.charAt(0)==="A"){this._stickClass("itxtfadeabove");}else{this._stickClass("itxtfadebelow");}
setTimeout(function(){m._stripClass(["itxtprefade","itxtfadeabove","itxtfadebelow"]);},200);}}
if(this._useLegacyFade()){this.fadeInit=1;$iTXT.fx2.Fade2.fade('OPEN','itxtchrome',200,{fadein:true,reset:false,onend:function(){$iTXT.fx2.Fade2.clearIEOpacity('itxtchrome');}});}}else{}
$iTXT.core.$(document).itxtFire("$iTXT:tt:after:open");if(!this.options.invisible)
{this.isOpen=true;}
this.openTS=(new Date()).getTime();},_useFade:function(){var use_fade_out=$iTXT.core.Browser.supportsFeature("transforms")&&$iTXT.core.Browser.supportsFeature("transitions");if(!this.currentAdvert){return use_fade_out;}
return(use_fade_out&&this.currentAdvert.params.getBool("fade.out.on",true));},_useLegacyFade:function(){if($iTXT.core.Browser.is("Explorer",9,0)||(navigator.userAgent.indexOf("Trident/5")>-1)){var ad=this.currentAdvert;if(!ad&&this.currentHook){ad=this.currentHook.ad;}
return ad.params.getBool("fade.out.legacy.on",true)&&ad.params.getBool("fade.out.on",true);}else{return false;}},_storeTO:function(to_name,id){if(this.timeouts[to_name]){clearTimeout(this.timeouts[to_name]);}
this.timeouts[to_name]=id;},_clearTO:function(to_name){clearTimeout(this.timeouts[to_name]);},_clearAllTOs:function(){for(var i in this.timeouts){clearTimeout(this.timeouts[i]);}
this.timeouts=[];},_stripClass:function(klas){var r;if(typeof klas==="string"){r=new RegExp("."+klas+"\\b","g");document.getElementById('itxtchrome').className=document.getElementById('itxtchrome').className.replace(r,"");}else{for(var y=0;y<klas.length;y++){r=new RegExp("."+klas[y]+"\\b","g");document.getElementById('itxtchrome').className=document.getElementById('itxtchrome').className.replace(r,"");}}},_stickClass:function(klas){function add_class(k){if(document.getElementById('itxtchrome').className.indexOf(k)===-1){document.getElementById('itxtchrome').className+=" "+k;}}
if(typeof klas==="string"){add_class(klas);}else{for(var y=0;y<klas.length;y++){add_class(klas[y]);}}},classicClose:function(){ttOff=this.rootElement.itxtTotalOffset();dX=(this.currentHookBB.left-ttOff.left)+(this.currentHookBB.width/2);dY=this.currentHookBB.top-ttOff.top;this.rootElement.itxtAddClass("minimise");this.content.hide();this.chrome.hide();t=this;combOpts={start:true,duration:150,effects:[new $iTXT.fx.Move({target:this.rootElement,dX:dX,dY:dY}),new $iTXT.fx.Size({target:this.rootElement,width:5,height:5})],afterFinish:function()
{t.hideTooltip();$iTXT.core.$(document).itxtFire("$iTXT:tt:after:minimise");}};$iTXT.core.$(document).itxtFire("$iTXT:tt:before:minimise");new $iTXT.fx.Combination(combOpts);},prepFade:function(){if(document.getElementById('itxtfadecss')){return;}
function fmt(opts){var css=[];opts.forEach(function(it){var moz=(typeof it.value==="string")?it.value.replace("{{pfx}}","-moz-"):it.value;var wk=(typeof it.value==="string")?it.value.replace("{{pfx}}","-webkit-"):it.value;var vanilla=(typeof it.value==="string")?it.value.replace("{{pfx}}",""):it.value;css.push("-moz-"+it.cssname+": "+moz+";\n"+"-webkit-"+it.cssname+": "+wk+";\n"+
it.cssname+": "+vanilla+";\n");});return css.join("");}
var css=$iTXT.core.Css,dom=$iTXT.core.Dom,pram=this.currentAdvert.params,opts,duration=pram.get("fade.out.time",150),origin,de_stijl,style_el;if($iTXT.ui.tt.ps.charAt(0)==="A"){origin=pram.get("fade.out.x",50)+"% "+pram.get("fade.out.y",100)+"%";}else{origin=pram.get("fade.out.x",50)+"% "+pram.get("fade.out.y",0)+"%";}
opts=[{"cssname":"transition-property","value":pram.get("fade.out.property","opacity, {{pfx}}transform")},{"cssname":"transition-duration","value":duration+"ms"},{"cssname":"transform-origin","value":origin},{"cssname":"transition-timing-function","value":pram.get("fade.out.transition","linear")},{"cssname":"transform","value":"scale3d("+pram.get("fade.out.scale",0.9)+", "+pram.get("fade.out.scale",0.9)+", 1.0)"}];de_stijl=[];de_stijl.push(".itxtfade { \n");de_stijl.push(fmt(opts));de_stijl.push("opacity: "+pram.get("fade.out.opacity",0.5)+";\n");de_stijl.push("}\n");de_stijl.push(".itxtsemi {\n");de_stijl.push("opacity: "+pram.get("fade.out.prefade.opacity",0.9));de_stijl.push(";\n");de_stijl.push(fmt([{"cssname":"transition","value":"opacity "+pram.get("fade.out.prefade.time",1000)+"ms ease-out"}]));de_stijl.push("}\n");de_stijl.push(".itxtsnapback {\n");de_stijl.push("opacity: 1");de_stijl.push(";\n");de_stijl.push(fmt([{"cssname":"transition","value":"opacity "+pram.get("fade.out.snapback.time",80)+"ms ease-in"}]));de_stijl.push("}\n");style_el=document.createElement("style");style_el.id="itxtfadecss";style_el.type="text/css";style_el.innerHTML=de_stijl.join("");document.getElementsByTagName("body")[0].appendChild(style_el);},fadeClose:function(){var t=this,saved_class=document.getElementById('itxtchrome').className,old_did=this.currentAdvert?this.currentAdvert.did:0;this._stripClass("itxtsnapback");this._stickClass("itxtfade");saved_class=saved_class.replace(/.itxtfade/g,"");this.hasClosed=true;setTimeout(function(){if(old_did!==$iTXT.ui.tt.currentAdvert.did)return;t.hide();t.hideTooltip();if(document.getElementById('itxtfadecss')){var st_el=document.getElementById('itxtfadecss');st_el.parentNode.removeChild(st_el);}
document.getElementById('itxtchrome').className=saved_class;},this.currentAdvert.params.get("fade.out.time",150));},legacyFadeClose:function(){var t=this,old_did=this.currentAdvert?this.currentAdvert.did:0;this.hasClosed=true;var dur=this.currentAdvert.params.get("fade.out.time",150);var hide=function(){if(old_did!==$iTXT.ui.tt.currentAdvert.did)return;t.hide();t.hideTooltip();};var from=1;if(this.currentAdvert.params.getBool("fade.out.prefade.on",true)){from=parseFloat(this.currentAdvert.params.get("fade.out.prefade.opacity",0.9));}
$iTXT.fx2.Fade2.fade('CLOSE','itxtchrome',dur,{fadein:false,reset:true,onend:hide,from:from,to:0});},close:function(e){var ttOff,dX,dY,t,combOpts,opts=e.data||{};this.interactionLatch=false;$iTXT.core.$(document).itxtFire("$iTXT:tt:before:close");if(this.currentHookBB!==null&&opts.closeSource!=$iTXT.data.TTCloseSource.OVERNEWHOOK){if(this._useFade()){this.fadeClose();}else if(this._useLegacyFade()){this.legacyFadeClose();}else{this.content.beforeClose();this.classicClose();}}else{this.hideTooltip();}},hideTooltip:function()
{if(this.hideTID!=-1&&(this.currentAdvert.did!==this.lastDID||!this.currentAdvert)){window.clearTimeout(this.hideTID);this.hideTID=-1;this.lastDID=this.currentAdvert.did;}
this.hide();this.rootElement.itxtSetStyle({left:"-1000px",top:"-1000px",width:"300px",height:"300px"});this.isOpen=false;this.fixedOpen=false;this.openTS=null;this.isMouseOver=false;if(this.content.advert)
{this.content.advert.template.isMouseOver=false;}
if(this.currentHook!==null)
{this.currentHook.setState(false);this.currentHook=null;this.currentHookBB=null;}
$iTXT.core.$(document).itxtFire("$iTXT:tt:after:close");this.content.afterClose();},queueHide:function(t)
{if(this.isMouseOver)
{return;}
if(this.currentAdvert&&this.currentAdvert.params&&this.currentAdvert.params.get("tt.disable.hide"))
{return;}
if(!this.fixedOpen)
{$iTXT.core.$(document).itxtFire("$iTXT:tt:queue:hide");var toAdjustment=0;if(this.options.mintthd>0)
{var timeOpenFor=this.openTS?(new Date()).getTime()-this.openTS:0;var timeLeft=this.options.mintthd-timeOpenFor;if(timeLeft>0)
{toAdjustment=timeLeft;}}
var hideTO=parseInt(this.options.tthd,10)+toAdjustment;if(this.openTS!==null)
{var tSO=((new Date()).getTime()-this.openTS);hideTO+=Math.max(this.options.minShowTime-tSO,0);}
if(this._useFade()||this._useLegacyFade()){this.fadeQueue(t,hideTO);}else{this.hideTID=setTimeout(function(){$iTXT.core.$(document).itxtFire("$iTXT:tt:close",{closeSource:$iTXT.data.TTCloseSource.MOUSEOUT});},(t||hideTO));}}},fadeQueue:function(t,hideTO){function createTimeout(th,tag,func,timer){th._storeTO(tag,setTimeout(func,timer));}
var me=this;function close_tt(){if(!me.isMouseOver&&!me.fixedOpen){me._stripClass(["itxtsemi","itxtsnapback"]);if(!me.hasClosed){$iTXT.core.$(document).itxtFire("$iTXT:tt:close",{closeSource:$iTXT.data.TTCloseSource.MOUSEOUT});}}}
function prefader(){if(!me.isMouseOver&&!me.fixedOpen){me._stripClass("itxtsnapback");me._stickClass("itxtsemi");if(me._useLegacyFade()){var dur=parseInt(me.currentAdvert.params.get("fade.out.prefade.time",1000),10);var tofade=parseFloat(me.currentAdvert.params.get("fade.out.prefade.opacity",0.9));me.prefadeKiller=$iTXT.fx2.Fade2.fade('PREFADE','itxtchrome',dur,{fadein:false,reset:false,onend:function(){},from:1,to:tofade});}}}
if(this.currentAdvert&&this.currentAdvert.params.getBool("fade.out.prefade.on",true)){createTimeout(this,"FADE",prefader,(t||hideTO));createTimeout(this,"CLOSE",close_tt,(t||hideTO)+parseInt(this.currentAdvert.params.get("fade.out.prefade.time",1000),10));}else{createTimeout(this,"CLOSE",close_tt,(t||hideTO));}},_hookIn:function(e)
{if(this.hideTID!=-1&&e.data&&e.data.hook&&e.data.hook==this.currentHook)
{window.clearTimeout(this.hideTID);this.hideTID=-1;}},_mobtIn:function(e)
{if(this.hideTID!=-1&&e.data&&e.data.hook&&e.data.hook==this.currentHook)
{window.clearTimeout(this.hideTID);this.hideTID=-1;}},cancelScheduledHide:function(ad){if(this.hideTID==-1||(ad&&this.currentAdvert!=ad)){return;}
window.clearTimeout(this.hideTID);if(ad){this._clearAllTOs();}
this.hideTID=-1;},_hookOver:function(e){var t,adParams,tooltipDelay,launcher;if(this.hideTID!==-1&&e.data&&e.data.hook&&e.data.hook==this.currentHook)
{this.cancelScheduledHide();}
this._clearAllTOs();if($iTXT.glob.params.get('hk.snapmode')==$iTXT.ui.SnapMode.Mouse)
{e.data.bounds.left=e.data.hook.mouseOverPos.x;e.data.bounds.top=e.data.hook.mouseOverPos.y;}
if(e.data&&e.data.hook&&e.data.hook!=this.currentHook){t=this;adParams=e.data.hook.ad.params;this.currentHook=e.data.hook;tooltipDelay=adParams.getInt("tt.open.delay",adParams.getInt("ttd",100));if(tooltipDelay>1000)
{tooltipDelay=750;}
this.options.mintthd=e.data.hook.ad.params.get("mintthd",0);launcher=function(){t._showOnHook(e.data.hook,e.data.bounds);};if(e&&e.data&&e.data.hook){e.data.hook.saveTTLaunchFunction(launcher);}
this.openTID=window.setTimeout(launcher,tooltipDelay);}},_clearLaunch:function(){window.clearTimeout(this.openTID);},_resetCurrentHook:function(){if(!this.currentHook){return;}
this.currentHook.setState(false);this.currentHook=null;this.currentHookBB=null;},_hookOut:function(e)
{if(this.openTID!=-1)
{var adParams=e.data.hook.ad.params;var ittc=adParams.getBool("tt.stop.pending.open",adParams.getBool("ittc",false));if(ittc)
{window.clearTimeout(this.openTID);$iTXT.core.$(document).itxtFire("$iTXT:tt:ittc",e);}
else
{}}
if(e.data&&e.data.hook&&e.data.hook==this.currentHook&&!this.isMouseOver)
{this.queueHide();}
else if(this.openTID!=-1)
{this.queueHide();}
if(!this.isOpen){this.cancelScheduledHide();this._resetCurrentHook();}},_hookClick:function(e)
{this.hideTail();this.fixedOpen=true;},_close_open_hooks:function(mouseOverHook){if(this.isOpen)
{$iTXT.core.$(document).itxtFire("$iTXT:tt:close",{closeSource:$iTXT.data.TTCloseSource.OVERNEWHOOK,tso:this.getTimeSinceOpen(),did:mouseOverHook.ad.did});}},show:function($super){$super();this.content.show();this.chrome.show();},hide:function($super){$super();if(this.content)this.content.hide();if(this.chrome)this.chrome.hide();},placeAndOpen:function(bb,hk){var tt=$iTXT.ui.tt;if(this.options.invisible){this.onTooltipOpen({left:-1000,top:-1000,state:$iTXT.ui.TooltipPosition.AR});}else{if($iTXT.core.Util.parseBool($iTXT.glob.dbParams.get("tt.placer.extended",false),false)){this.onTooltipOpen($iTXT.ui.Aura2TooltipPlacer.place({bb:bb,tt:tt}));}else{this.onTooltipOpen($iTXT.ui.TooltipPlacer.place({bb:bb,tt:tt,hk:hk}));}}
if(this._useLegacyFade()){$iTXT.core.$('itxtchrome').itxtOpacity(0);}},_showOnHook:function(hk,bb)
{try{this._close_open_hooks(hk);this._resetDecorations();this.showTail();this.currentHook=hk;this.currentAdvert=hk.ad;this.currentHookBB=bb;this.currentHook.setState(true);if(undefined!==hk.ad)
{this.setAdvert(hk.ad);}
this.show();this.setSize(null,null,true);this.hide();this.content.beforeOpen();if('SIMULATION'==hk.options.value){this.onTooltipOpen({left:bb.left,top:bb.top,state:bb.state});}else{this.placeAndOpen(bb,hk);}
this.content.afterOpen(this.chrome);$iTXT.core.$(document).itxtFire("$iTXT:tt:open",{advert:hk.ad});}catch(e){throw(e);}},openWithAdvert:function(advert,leftPos,topPos,posState){this._showOnHook({ad:advert,options:{value:'SIMULATION'},setState:function(){}},{left:leftPos,top:topPos,state:posState});},_onMouseOver:function(e)
{if(this.hasClosed){return-1;}
this.mouseOutLogged=false;if(this.mouseOutTID!=-1)
{window.clearTimeout(this.mouseOutTID);}
this._clearAllTOs();if(this.prefadeKiller){var starter=this.prefadeKiller();$iTXT.fx2.Fade2.fade('PREFADE','itxtchrome',50,{fadein:false,reset:false,onend:function(){$iTXT.fx2.Fade2.clearIEOpacity('itxtchrome');},from:starter,to:1});this.fadeInit=1;this.prefadeKiller=null;}
this._stripClass("itxtsemi");if(document.getElementById('itxtchrome').className.indexOf("itxtsnapback")===-1){document.getElementById('itxtchrome').className+=" itxtsnapback";}
if((e.target!=this.rootElement)&&(e.target!=this.chrome.rootElement))
{if(this.mouseOutTID!=-1)
{window.clearTimeout(this.mouseOutTID);this.mouseOutTID=-1;}
if(!this.isMouseOver)
{this.isMouseOver=true;if(this.content.advert)
{this.content.advert.template.isMouseOver=true;}
this.tooltipOver();this.mouseOverTS=(new Date()).getTime();$iTXT.core.$(document).itxtFire("$iTXT:tt:mouse:over",e);}
if(this.hideTID!=-1)
{window.clearTimeout(this.hideTID);this.hideTID=-1;}}
e.stop();},_ttOver:function()
{this.isMouseOver=true;if(this.content.advert)
{this.content.advert.template.isMouseOver=true;}
if(this.mouseOutTID!=-1)
{window.clearTimeout(this.mouseOutTID);}
if(this.hideTID!=-1)
{window.clearTimeout(this.hideTID);this.hideTID=-1;}},_ttOut:function()
{if(!this.mouseOutLogged){this.mouseOutLogged=true;}
this._onMouseOut();},_onMouseOut:function(e)
{var t=this;this.mouseOutTID=window.setTimeout(function(){t._ttMouseOut(e);},50);},_onMouseDownUp:function(e)
{var rc=false;if(e.which)rc=(e.which==3);else if(e.button)rc=(e.button==2);if(rc)
{return false;}
return true;},_ttMouseOut:function(e)
{if(this.isMouseOver)
{this.isMouseOver=false;if(this.content.advert)
{this.content.advert.template.isMouseOver=false;}
this.tooltipOut();var len=(new Date()).getTime()-this.mouseOverTS;$iTXT.core.$(document).itxtFire("$iTXT:tt:mouse:out",{len:len});this.queueHide();}},showTail:function()
{this.chrome.showTail();},hideTail:function()
{this.chrome.hideTail();},_onBodyMouseMove:function(e)
{if(this.hdrDown&&this.options.draggable)
{this.hideTail();this.fixedOpen=true;this.setPosition(e.clientX-this.hdrDownX,e.clientY-this.hdrDownY);}},_setFixedOpen:function()
{this.fixedOpen=true;},_hdrDown:function(e)
{this.hdrDown=true;var thisOff=this.rootElement.itxtTotalOffset();this.hdrDownX=e.data.clientX-thisOff.left;this.hdrDownY=e.data.clientY-thisOff.top;},_hdrUp:function()
{this.hdrDown=false;},_latchExpand:function(){this.interactionLatch=true;},_expand:function(e)
{var opts=e.data||{};if(opts.disableClose)
{this._setFixedOpen();}
if(opts.hideTail)
{this.hideTail();}
var hOffset=0;var oHOffset=this.content.heightOverlap;if(opts.hOffset)
{hOffset=opts.hOffset;}
var oW=(undefined!==opts.oW)?opts.oW:this.content.getWidth();var oH=(undefined!==opts.oH)?opts.oH:this.content.getHeight();var eW=(undefined!==opts.eW)?opts.eW:this.content.getExpandedWidth();var eH=(undefined!==opts.eH)?opts.eH:this.content.getExpandedHeight();var wD=eW-oW;var hD=eH-oH;if(undefined!==opts.dX)
{wD=opts.dX;}
if(undefined!==opts.dY)
{hD=opts.dY;}
if(0===wD&&0===hD)
{if(opts.afterFinish)
{opts.afterFinish.apply(t);}
return;}
var dX=0;var dY=0;var ttps=$iTXT.ui.TooltipPosition;if(this.ps==ttps.AR)
{dY=-hD+hOffset;}
else if(this.ps==ttps.AL)
{dY=-hD+hOffset;dX=-wD;}
else if(this.ps==ttps.BR)
{}
else if(this.ps==ttps.BL)
{dX=-wD;}
var duration=200;if($iTXT.core.Browser.performance<60)
{duration=0;}
var t=this;var moveOpts={start:true,duration:duration,target:this.rootElement,dX:dX,dY:dY,afterUpdate:function(p)
{var nW=Math.round(oW+(wD*p));var nH=Math.round(oH+(hD*p));var hO=Math.round(oHOffset+(hOffset*p));if(t.resetSizeDuringExpando||t.expandableFlash||t.chrome.expandable){t._setContentSize(nW,nH,hO);}
if(opts.afterUpdate)
{opts.afterUpdate.apply(t,[p]);}},afterFinish:function()
{if(t.interactionLatch){t.content.afterExpand(t.chrome);}
if(opts.afterFinish)
{opts.afterFinish.apply(t);}}};new $iTXT.fx.Move(moveOpts);},_decorateOnTTOpen:function(data){var ad=data.data.advert;var adtype=ad.getAdvertType();if(adtype===5||adtype===122){this.chrome.addPaddingAndBorder(data.data.advert.template.width,data.data.advert.template.height);}else{if(adtype!==155&&adtype!==39&&adtype!==58&&adtype!==48&&adtype!==54&&adtype!==160){this.chrome.addDoubleBorder();}}
var isLightBox=ad.params.getBool("lbox",false);var isProgressBar=ad.params.getBool("lbox.bar");if(adtype===60||(isLightBox&&!isProgressBar)){this.chrome.addLeftMargin();}
if((adtype===153||(isLightBox&&isProgressBar))&&this.chrome.suppressWings){this.chrome.suppressWings();}
if(isProgressBar){this.content.rootElement.itxtSetStyle({'border':'0px none transparent'});}},_resetDecorations:function(){this.chrome.resetPaddingAndBorder();$iTXT.core.$('itxtcontentbg').itxtShow();},_resizeOnTTOpenFreeform:function(){var t=this;if(t.currentAdvert.getAdvertType()===122){setTimeout(function(){t.chrome.addPaddingAndBorder(document.getElementById("itxtcontent").offsetWidth,document.getElementById("itxtcontent").offsetHeight);},400);setTimeout(function(){t.chrome.addPaddingAndBorder(document.getElementById("itxtcontent").offsetWidth,document.getElementById("itxtcontent").offsetHeight);},700);}},_resizeOnExpand:function(data){this.resetSizeDuringExpando=false;var hihi=data.data.cH||data.data.eH;if(this.chrome.expandable){this.chrome.addPadding(parseInt(data.data.eW,10),hihi-data.data.hOffset);}else{this.chrome.addPaddingAndBorder(parseInt(data.data.eW,10),hihi-data.data.hOffset);}},_setContentSize:function(w,h,hO)
{this.content.setContentSize(w,h,hO);if(!this.chrome.expandable){this.setSize(null,null,false);}},setAdvert:function(ad)
{var adopts=ad.params;var nott=adopts.get("nott",false);if(nott)
{adopts.set("scmh",1,$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN);}
this.options.invisible=nott;var tmpl=ad.getTemplate();var tmplopts=(null!==tmpl)?(tmpl.options||{}):{};var adBgCol=adopts.parse(adopts.get("tt.bg.col","#f0f0f0"));adBgCol=(adBgCol.length>0)?adBgCol:"#f0f0f0";this.options.bgcol=$iTXT.core.Util.validHexColor(tmplopts.ttbgcol||adBgCol);$iTXT.core.$(document).itxtFire("$iTXT:tt:impetus:bgchange",{col:this.options.bgcol});var adHvBgColor=adopts.parse(adopts.get("tt.bg.h.col",adBgCol));adHvBgColor=(adHvBgColor.length>0)?adHvBgColor:"#f0f0f0";this.options.hbgcol=$iTXT.core.Util.validHexColor(tmplopts.ttbghcol||adHvBgColor);this.options.tthd=adopts.getInt("tthd",this.defaultOptions.tthd);this.chrome.setAdvert(ad);if(this.options.invisible)
{this.content.clearContent();}
else
{this.content.setAdvert(ad);}
$iTXT.core.$(document).itxtFire("$iTXT:tt:ad:set",{did:ad.did});},onTooltipOpen:function(opts)
{if(undefined===opts.left||undefined===opts.top||!opts.state)
return;this.options.ps=opts.state;$iTXT.ui.tt.open(opts.left,opts.top,opts.state);},_resizeTooltip:function()
{this.setSize(null,null,true);},_smoothResizeTooltip:function(e)
{var dX=0,dY=0,sW=this.content.getWidth(),sH=this.content.getHeight(),t=this;var newSize=this.content.tryResize(null,null);if(isNaN(sW))
{sW=newSize[0];}
if(isNaN(sH))
{sH=newSize[1];}
dX=newSize[0]-sW;dY=newSize[1]-sH;var expe={data:{dX:dX,dY:dY,oW:sW,oH:sH,afterFinish:function()
{if(e&&e.data&&'function'==typeof e.data)
{window.setTimeout(function(){e.data();},150);}
$iTXT.core.$(document).itxtFire("$iTXT:tt:ready");setTimeout(function(){t.chrome.expanded=true;},300);}}};this._expand(expe);},_iframeOut:function()
{this.mouseOutTID=window.setTimeout($iTXT.core.Event.bind(this,this._ttMouseOut),20);},getTimeSinceOpen:function()
{if(this.isOpen)
{return(new Date()).getTime()-this.openTS;}
return null;},getTimeInTooltip:function()
{if(this.isMouseOver)
{return(new Date()).getTime()-this.mouseOverTS;}
return null;},_changeAdvert:function(e)
{if(e.data)
{this.currentAdvert=e.data;}},tooltipOver:function()
{this.chrome.tooltipOver();},tooltipOut:function()
{this.chrome.tooltipOver();},_mvuExpand:function(e)
{var opts=e.data||{};if(opts.rt==1)
{this._expand({data:{eW:opts.w,eH:opts.h}});}
else if(opts.rt===0)
{this._expand({data:{eW:this.content.getTemplateDefaultWidth(),eH:this.content.getTemplateDefaultHeight()}});}},_fExp:function(e)
{this._expand({});},_fClick:function(e)
{this.hideTooltip();},_setBGCol:function(e)
{this.options.bgcol=$iTXT.core.Util.validHexColor(e.data);},_setHVCol:function(e)
{this.options.hbgcol=$iTXT.core.Util.validHexColor(e.data);},_bodyOver:function(e)
{this._ttOut(e);},_contentLoaded:function(e)
{this.resetSizeDuringExpando=true;this.chrome.expanded=false;var opts=e.data||{};var loadTimeout=opts.loadTimeout||0;var t=this;window.setTimeout(function(){t._smoothResizeTooltip();},loadTimeout);},isAboveHook:function(){return this.options.ps.charAt(0).toUpperCase()==='A';}});};$iTXT.js.loader["$iTXT.ui.TooltipChrome"]=true;$iTXT.ui.TooltipChrome_Load=function(){$iTXT.ui.TooltipChrome=$iTXT.core.Class.create($iTXT.ui.ComponentBase,{options:null,w:0,h:0,overlappedHeight:0,allowCustomHeader:true,init:function(_options,$super)
{var defOpts=$iTXT.core.Util.extend({id:"itxtchrome",ps:$iTXT.ui.TooltipPosition.AR},_options);this.expandable=false;$super(defOpts);},build:function(bg)
{var bgcol=bg||"#ffffff";this.contentBG=$iTXT.core.Builder.make("DIV",{style:"background-color:"+bgcol,id:"itxtcontentbg"});this.contentBG.appendChild($iTXT.core.Builder.make("div",{id:"itxt12_left_edge",className:"itxt12_left_edge"},[]));this.contentBG.appendChild($iTXT.core.Builder.make("div",{id:"itxt12_right_edge",className:"itxt12_right_edge"},[]));this.contentBG.appendChild($iTXT.core.Builder.make("div",{id:"itxt_bg_inside",className:"itxt_bg_inside"},[]));this.rootElement.appendChild(this.contentBG);this.defaultHeader=this.header=new $iTXT.ui.TooltipHeader({ps:this.options.ps,bgcol:this.options.bgcol,draggable:this.options.draggable});this.header.build();this.defaultFooter=this.footer=new $iTXT.ui.TooltipFooter({ps:this.options.ps,bgcol:this.options.bgcol});this.footer.build();this.defaultTail=this.tail=new $iTXT.ui.TooltipTail({ps:this.options.ps,bgcol:this.options.bgcol});this.addChildren([this.slideOut,this.header,this.footer,this.tail]);$iTXT.subscribe("$iTXT:tt:impetus:bgchange",function(s){document.getElementById("itxtcontentbg").style.backgroundColor=s.data.col;});},setPositionState:function(ps)
{this.options.ps=ps;if(this.tail)
this.tail.setPositionState(ps);this.resize(this.w,this.h);},_sset:function(el,prop,styl){try{document.getElementById(el).style[prop]=styl;}catch(e){}},addPaddingAndBorder:function(w,h){this.addBorder();this.addPadding(parseInt(w,10),parseInt(h,10));},addPadding:function(w,h){this._sset('itxtcontent',"margin-left","4px");this.setSize(w+10,h,0);},addDoubleBorder:function(){this._sset("itxt_underliner","display","block");},addBorder:function(){this._sset("itxtcontent","border","1px solid #c1c1c1");},removeBorder:function(){this._sset("itxtcontent","border","none");},resetPaddingAndBorder:function(){this._sset("itxt_underliner","display","none");this._sset("itxtcontent","border","none");this._sset("itxtcontent","margin-left","0");this._sset("itxt12_left_edge","display","block");this._sset("itxt12_right_edge","display","block");},addLeftMargin:function(){document.getElementById("itxtcontent").itxtAddClass("leftshift");},removeLeftMargin:function(){document.getElementById("itxtcontent").itxtRemoveClass("leftshift");},removeLRBBorder:function(){this._sset("itxtcontent","border","none");this._sset("itxtcontent","border-top","1px solid #c1c1c1");},suppressWings:function(){if(this.advert.template.usePaddingAndBorder){return;}
this._sset("itxt12_left_edge","display","none");this._sset("itxt12_right_edge","display","none");},setSize:function(w,h,overlap)
{var tailLeft;overlap=Number(overlap)?overlap:0;var ttps=$iTXT.ui.TooltipPosition;this.width=w;var headerAndContentHeight=h+this.getHeaderHeight();this.height=headerAndContentHeight+
this.getFooterHeight()+
this.getTailHeight();this.overlappedHeight=Math.max(headerAndContentHeight+overlap,this.height);this.rootElement.itxtSetStyle({width:this.width+"px",height:this.overlappedHeight+"px"});this.contentBG.itxtSetStyle({width:this.width+"px",height:h+"px"});if((ttps.AR==this.options.ps)||(ttps.AL==this.options.ps))
{if(this.header)
{this.header.setPosition(0,0);this.header.setSize(this.width,this.height);}
if(this.footer)
{this.footer.setPosition(0,h+this.getHeaderHeight());this.footer.setSize(this.width,this.height);}
if(this.tail)
{this.tail.setPosition(this.tail.getCenterLeft(),h+this.getHeaderHeight()+this.getFooterHeight());}
if(this.contentBG)
{this.contentBG.itxtSetStyle({top:this.getHeaderHeight()+"px"});}}
else
{if(this.header)
{this.header.setPosition(0,this.getTailHeight());this.header.setSize(this.width,this.height);}
if(this.footer)
{this.footer.setPosition(0,h+this.getHeaderHeight()+this.getTailHeight());this.footer.setSize(this.width,this.height);}
if(this.tail)
{this.tail.setPosition(this.tail.getCenterLeft(),0);}
if(this.contentBG)
{this.contentBG.itxtSetStyle({top:(this.getHeaderHeight()+this.getTailHeight())+"px"});}}
var ttsoH=h+this.getHeaderHeight()+this.getFooterHeight();var ttsoOffH=0;if((ttps.BR==this.options.ps)||(ttps.BL==this.options.ps))
{ttsoOffH=this.getTailHeight();}},getOverlappedHeight:function()
{return this.overlappedHeight;},getContentOffset:function()
{var ttps=$iTXT.ui.TooltipPosition;var h=this.getHeaderHeight();if((ttps.BR==this.options.ps)||(ttps.BL==this.options.ps))
{h+=this.getTailHeight();}
return[0,h];},showTail:function()
{if(this.tail)
this.tail.show();},hideTail:function()
{if(this.tail)
this.tail.hide();},getTTHeight:function()
{var ttps=$iTXT.ui.TooltipPosition;return((ttps.AR==this.options.ps)||(ttps.AL==this.options.ps))?0:this.getTailHeight();},setAdvert:function(ad,$super)
{var tmpl=ad.getTemplate();if(this.allowCustomHeader)
{if(this.footer)
{if(tmpl.options.customFooter)
{if(this.footer)
{this.removeChild(this.footer);this.footer.dispose();}
this.footer=new tmpl.options.customFooter({ps:this.options.ps,bgcol:this.options.bgcol});if(this.footer.build)
{this.footer.build();}
this.addChild(this.footer);this.defaultFooter.hide();}
else if(this.defaultFooter!=this.footer)
{if(this.footer)
{this.removeChild(this.footer);this.footer.dispose();}
this.footer=this.defaultFooter;this.addChild(this.defaultFooter);this.footer.show();}}
if(this.header)
{if(tmpl.options.customHeader)
{if(this.header)
{this.removeChild(this.header);this.header.dispose();}
this.header=new tmpl.options.customHeader({ps:this.options.ps,bgcol:this.options.bgcol,draggable:this.options.draggable});if(this.header.build)
{this.header.build();}
this.addChild(this.header);this.defaultHeader.hide();}
else if(this.defaultHeader!=this.header)
{if(this.header)
{this.removeChild(this.header);this.header.dispose();}
this.header=this.defaultHeader;this.addChild(this.defaultHeader);this.header.show();}}
if(this.tail)
{if(tmpl.options.customTail)
{if(this.tail)
{this.removeChild(this.tail);this.tail.dispose();}
this.tail=new tmpl.options.customTail({ps:this.options.ps,bgcol:this.options.bgcol,draggable:this.options.draggable});if(this.tail.build)
{this.tail.build();}
this.addChild(this.tail);this.defaultTail.hide();}
else if(this.defaultTail!=this.tail)
{if(this.tail)
{this.removeChild(this.tail);this.tail.dispose();}
this.tail=this.defaultTail;this.addChild(this.defaultTail);this.tail.show();}}}
if(this.header)
this.header.setAdvert(ad);if(this.footer)
this.footer.setAdvert(ad);if(this.tail)
this.tail.setAdvert(ad);$super(ad);},tooltipOver:function()
{if(this.header)
this.header.tooltipOver();if(this.footer)
this.footer.tooltipOver();if(this.tail)
this.tail.tooltipOver();},tooltipOut:function()
{if(this.header)
this.header.tooltipOut();if(this.footer)
this.footer.tooltipOut();if(this.tail)
this.tail.tooltipOut();},getTailWidth:function()
{return(this.tail)?this.tail.getWidth():0;},getTailHeight:function()
{return(this.tail)?this.tail.getHeight():0;},getFooterWidth:function()
{return(this.footer)?this.footer.getWidth():0;},getFooterHeight:function()
{return(this.footer)?this.footer.getHeight():0;},getHeaderWidth:function()
{return(this.header)?this.header.getWidth():0;},getHeaderHeight:function()
{return(this.header)?this.header.getHeight():0;},changeBgColor:function(col){document.getElementById('itxtcontentbg').style.backgroundColor=col;}});};$iTXT.js.loader["$iTXT.ui.TooltipContent"]=true;$iTXT.ui.TooltipContent_Load=function(){var undefined;var loadingImage="http://images.intellitxt.com/ast/tt/09/loading.gif";$iTXT.core.Util.cacheImage(loadingImage);$iTXT.ui.TooltipContent=$iTXT.core.Class.create($iTXT.ui.ComponentBase,{options:null,template:null,loading:false,ccTS:null,advert:null,heightOverlap:0,drawers:null,init:function(_options,$super)
{this.componentParams=$iTXT.core.Util.extend({'tt.loading.img.name':'loading.gif','tt.loading.img':'${tt.img.dir}${tt.loading.img.name}','tt.loading.img.width':'32','tt.loading.img.height':'32'},this.componentParams);var defOpts=$iTXT.core.Util.extend({id:"itxtcontent",className:"itxt12content",loadingImage:"${tt.loading.img}",loadingImageWidth:"${tt.loading.img.width}",loadingImageHeight:"${tt.loading.img.height}"},_options);$super(defOpts);var o=this.options;$iTXT.core.Util.cacheImages([o.loadingImage]);this.width=300;this.height=100;this.loadingImg=$iTXT.core.Builder.make("IMG",{src:o.loadingImage,width:o.loadingImageWidth,height:o.loadingImageHeight,id:this.options.id+"LdgImg",style:"position: absolute; left: 50%; top: 50%;"});this.loadingDiv=$iTXT.core.Builder.make("DIV",{id:this.options.id+"Ldg",style:"position: absolute; display: none;"},[this.loadingImg]);this.rootElement.appendChild(this.loadingDiv);this.resize();this.rootElement.itxtBatchSubscribe([["mouseover",function(e){$iTXT.core.$(document).itxtFire("$iTXT:tt:cnt:mouse:over",e);}],["mouseout",function(e){$iTXT.core.$(document).itxtFire("$iTXT:tt:cnt:mouse:out",e);}],["mouseup",function(e){$iTXT.core.$(document).itxtFire("$iTXT:tt:cnt:mouse:up",e);}]],this.evtDspFuncs);$iTXT.core.$(document).itxtBatchSubscribe([["$iTXT:tt:close:btn:click",$iTXT.core.Event.bind(this,this._hdrCloseClk)],["$iTXT:tt:what:btn:click",$iTXT.core.Event.bind(this,this._hdrWhatsClk)],["$iTXT:tt:vmlogo:click",$iTXT.core.Event.bind(this,this._hdrVMLogoClk)],["$iTXT:function:setClickThrough",$iTXT.core.Event.bind(this,this._setClickThrough)],["$iTXT:tt:content:change:ad",$iTXT.core.Event.bind(this,this.changeAdvert)],["$iTXT:tt:ready",$iTXT.core.Event.bind(this,this._tooltipReady)]],this.evtDspFuncs);this.drawers=[];},setSize:function(w,h,$super)
{$super(w,h);this.loadingDiv.itxtSetStyle({width:w+"px",height:h+"px"});this.loadingImg.itxtSetStyle({marginLeft:-(this.loadingImg.offsetWidth/2)+"px",marginTop:-(this.loadingImg.offsetHeight/2)+"px"});},resize:function(w,h,force)
{if(null!==this.template)
{var nW=w||this.currentWidth||this.template.defaultWidth;var nH=h||this.currentHeight||this.template.defaultHeight;this.setSize(nW,nH);var dim=this.template.resize(nW,nH,force);if(!force)
{this.width=dim[0];this.height=dim[1];}}
this.setSize(this.width,this.height);this._resizeDrawers();},hideContent:function()
{if(null!==this.template&&null!==this.template.rootElement)
{this.template.rootElement.style.visibility="hidden";}},showContent:function()
{if(null!==this.template&&null!==this.template.rootElement)
{this.template.rootElement.style.visibility="visible";if(this.template.afterShow)
{this.template.afterShow();}}},tryResize:function(w,h)
{if(null!==this.template)
{var nW=w||this.currentWidth||this.template.defaultWidth;var nH=h||this.currentHeight||this.template.defaultHeight;var dim=this.template.resize(nW,nH);this.width=dim[0];this.height=dim[1];}
return[this.width,this.height];},setContentSize:function(w,h,hO)
{if(hO)
{this.heightOverlap=hO;}
this.currentWidth=w;this.currentHeight=h;this.resize(null,null,true);},setAdvert:function(ad,$super)
{$super(ad);this.ccTS=(new Date()).getTime();this._changeAdvert(ad);},changeAdvert:function(e,$super)
{$super(e.data);this._changeAdvert(e.data);},_changeAdvert:function(ad,$super)
{if(!ad)
{return;}
this.loadingImg.src=this.options.loadingImage;this.heightOverlap=0;var h=this.advert.params.get("FTROVERLAP");if(null!==h)
{this.heightOverlap=h;}
this.currentWidth=undefined;this.currentHeight=undefined;if(this.template)
{this.template.remove();this.template=null;}
this.template=this.advert.getTemplate();if(null!==this.template)
{this.rootElement.appendChild(this.template.rootElement);window.setTimeout($iTXT.core.Event.bind(this,this._handleAdvert),1);if(!this.advert.template.fullyBuilt)
{this.setLoading(true);}}},_handleAdvert:function()
{if(!this.template&&!!this.advert.template){this.template=this.advert.template;}
var adHandler=this.template.getAdvertHandler();adHandler.handle($iTXT.core.Event.bind(this,this._handleAdvertCallback));},_handleAdvertCallback:function()
{this.template.buildTemplate($iTXT.core.Event.bind(this,this._templateLoadCallback));},_templateLoadCallback:function(templateNode)
{var td=(new Date()).getTime()-this.ccTS;var tout=Math.max(250-td,0);$iTXT.core.$(document).itxtFire("$iTXT:tt:content:loaded",{loadTimeout:tout});},beforeOpen:function()
{if(null!==this.template)
{this.template.beforeOpen();}},afterOpen:function(khrome)
{if(null!==this.template)
{this.template.afterOpen(khrome);}},beforeClose:function()
{if(null!==this.template)
{this.template.beforeClose();}},afterClose:function()
{if(null!==this.template)
{this.template.afterClose();this.template.remove();this.template=null;}},afterExpand:function(khrome){if(null!==this.template)
{this.template.afterExpand(khrome);}},getTemplateDefaultWidth:function()
{return this.template?this.template.defaultWidth:0;},getTemplateDefaultHeight:function()
{return this.template?this.template.defaultHeight:0;},getExpandedWidth:function()
{return this.template?(this.template.expandedWidth||this.template.defaultWidth):0;},getExpandedHeight:function()
{return this.template?(this.template.expandedHeight||this.template.defaultHeight):0;},setLoading:function(b)
{this.loading=b;if(this.loading)
{if(""!==this.options.loadingImage)
{this.loadingDiv.itxtShow();}
if(this.template)
{this.template.onHide();}
this.hideContent();}
else
{this.loadingDiv.itxtHide();if(this.template)
{this.template.onShow();}
this.showContent();}},_finishSmoothRs:function()
{this.setLoading(false);},getWidth:function()
{return parseInt(this.width,10);},getHeight:function()
{return parseInt(this.height,10);},_addDrawerContent:function(e)
{var d=e.data||null;if(null!==d)
{this.rootElement.itxtAppendChild(d.drawerContent);d.setSize(this.width,this.height);d.drawerContent.itxtSetStyle({left:"0px",top:this.height+"px"});this.drawers.push(d);}},_showDrawerContent:function(e)
{var openDrawer=e.data||null;var closeDrawer,dr;for(var i=0;i<this.drawers.length;i++)
{dr=this.drawers[i];if(openDrawer!=dr&&dr.isOpen)
{closeDrawer=dr;break;}}
if(openDrawer&&closeDrawer)
{new $iTXT.fx.Queue(new $iTXT.fx.Move({target:dr.drawerContent,dX:0,y:this.height,duration:150,afterFinish:function(){closeDrawer.startHide();}})).push(new $iTXT.fx.Move({target:openDrawer.drawerContent,dX:0,y:0,duration:150,afterFinish:function(){openDrawer.finishShow();}}));}
else if(openDrawer)
{new $iTXT.fx.Move({start:true,target:openDrawer.drawerContent,dX:0,y:0,duration:150,afterFinish:function(){openDrawer.finishShow();}});}},_hideDrawerContent:function(e)
{var closeDrawer=e.data||null;if(null!==closeDrawer)
{closeDrawer.startHide();new $iTXT.fx.Move({start:true,target:closeDrawer.drawerContent,dX:0,y:this.height,duration:150});}},_resetDrawers:function()
{if(this.drawers)
{for(var i=0;i<this.drawers.length;i++)
{var d=this.drawers[i];this.rootElement.removeChild(d.drawerContent);}}
this.drawers=[];},_resizeDrawers:function()
{if(!this.drawers)
return;for(var i=0;i<this.drawers.length;i++)
{var d=this.drawers[i];d.setSize(this.width,this.height);if(!d.isOpen)
{d.drawerContent.itxtSetStyle({top:this.height+"px"});}}},_hdrCloseClk:function(e)
{if(this.template&&this.template.onCloseClick&&this.template.onCloseClick())
{e.closeSource=$iTXT.data.TTCloseSource.CLOSECLICK;$iTXT.core.$(document).itxtFire("$iTXT:tt:close",e);}},_hdrWhatsClk:function()
{if(this.template&&this.template.onWhatsThisClick&&this.template.onWhatsThisClick())
{this._defWhatsThisClk();}},_hdrVMLogoClk:function()
{if(this.template&&this.template.onVibrantLogoClick&&this.template.onVibrantLogoClick())
{this._defWhatsThisClk();}},_defWhatsThisClk:function()
{var adPms=this.advert.params;var wtcl=adPms.get("wtcl");if(wtcl&&"template"==wtcl)
{var opts={mt:20,mv:adPms.get("A.AT"),ipid:adPms.get("IPID")};$iTXT.fire("$iTXT:data:log:monitor",opts);}},_setClickThrough:function(e)
{var opts=e.data||{};if(opts.url){if(opts.did!=this.advert.did){return;}
this.advert.params.set("CLICKTAG",opts.url,$iTXT.cnst.WEIGHTING_DEFAULT_CAMPAIGN);}},clearContent:function()
{if(this.template)
{this.template.remove();this.template=null;}},_tooltipReady:function()
{this.setLoading(false);}});};$iTXT.js.loader["$iTXT.ui.TooltipFooter"]=true;$iTXT.ui.TooltipFooter_Load=function(){var undefined;$iTXT.ui.TooltipFooter=$iTXT.core.Class.create($iTXT.ui.ComponentBase,{options:null,init:function(_options,$super)
{var defOpts=$iTXT.core.Util.extend({id:"itxtfooter",height:6},_options);$super(defOpts);this.height=this.options.height;},setSize:function(w,h,$super)
{$super(w,this.height);},build:function()
{var b=$iTXT.core.Builder;var cont=b.makeEl("div",{},[b.makeEl("div",{"id":"itxt12_ftr_left "},[],{resets:"itxt12_ftr_left itxt12_sprited"}),b.makeEl("div",{"id":"itxt12_ftr_mid"},[],{resets:"itxt12_ftr_mid itxt12_sprited"}),b.makeEl("div",{"id":"itxt12_ftr_right"},[],{resets:"itxt12_ftr_right itxt12_sprited"})],{resets:"itxt12_ftr"});this.rootElement.appendChild(cont);},setAdvert:function(ad,$super)
{this.hasDrawers=true;var h=ad.params.get("FTRHIGHT");if(null!==h)
{this.height=h;}
else
{this.height=this.options.height;}
this.rootElement.itxtSetStyle({backgroundColor:"transparent"});$super(ad);var adopts=ad.params;var tmpl=this.advert.getTemplate();var tmplopts=(null!==tmpl)?(tmpl.options||{}):{};},_onMouseOver:function(e)
{$iTXT.core.$(document).itxtFire("$iTXT:tt:ftr:mouse:over",e);},_onMouseOut:function(e)
{$iTXT.core.$(document).itxtFire("$iTXT:tt:ftr:mouse:out",e);},_onMouseClick:function(e)
{$iTXT.core.$(document).itxtFire("$iTXT:tt:ftr:mouse:click",e);},setDrawers:function(b)
{this.hasDrawers=b;this.height=0;}});};$iTXT.js.loader["$iTXT.ui.TooltipHeader"]=true;$iTXT.ui.TooltipHeader_Load=function(){$iTXT.ui.privacyIconAlign={ICON_ONLY:1,ICON_RIGHT:2,ICON_LEFT:3,TEXT_ONLY:4};$iTXT.ui.TooltipHeader=$iTXT.core.Class.create($iTXT.ui.ComponentBase,{adchoices:null,whatsthis:null,options:{},init:function(_options,$super)
{this.componentParams=$iTXT.core.Util.extend({'hdr.privacyicon.txt':'${trans.privacyicon.txt}'},this.componentParams);var defOpts=$iTXT.core.Util.extend({id:"itxtheader",height:30,defbgcol:"#F0F0F0",privIconTxt:"${hdr.privacyicon.txt}"},_options);$super(defOpts);this.height=this.options.height;this.rootElement.itxtBatchSubscribe([["mouseover",function(e){$iTXT.core.$(document).itxtFire("$iTXT:tt:hdr:mouse:over",e);}],["mouseout",function(e){$iTXT.core.$(document).itxtFire("$iTXT:tt:hdr:mouse:out",e);}]],this.evtDspFuncs);},setSize:function(w,h,$super)
{$super(w,this.options.height);},build:function(opts)
{var b=$iTXT.core.Builder,bg_on=true;if(opts){if(opts.no_bg){bg_on=false;}}
this.rootElement.ondragstart=function(){return false;};this.rootElement.onselectstart=function(){return false;};if(!this.options.draggable)
{this.rootElement.className="fixed";}
if(bg_on){this.cornerHolder=b.make("DIV",{id:"itxtcrnhldr",className:"itxtcrnhldr"},[b.makeEl("div",{},[],{resets:"itxt12_tlc itxt12_sprited"}),b.makeEl("div",{},[],{resets:"itxt12_tm itxt12_sprited"}),b.makeEl("div",{},[],{resets:"itxt12_trc itxt12_sprited"})]);this.rootElement.appendChild(this.cornerHolder);}
var ad_choice=this._buildAdChoices();var what_this=this._buildWhatsThis();this.rootElement.appendChild(this._buildBlock([this.buildLogo(),ad_choice],"itxt12_hdr_lft","itxt12_hdr_lft"));this.rootElement.appendChild(this._buildBlock([this._buildTwitter(),this._buildFB()],"itxt12_hdr_social","itxt12_hdr_social"));this.rootElement.appendChild(this._buildBlock([what_this,this.buildCloseButton()],"itxt12_hdr_rt","itxt12_hdr_lft"));this.rootElement.appendChild(this._buildUnderLine());this.adchoices=ad_choice;this.whatsthis=what_this;this.rootElement.itxtSubscribe("mousedown",$iTXT.core.Event.bind(this,this._hdrDown));this.rootElement.itxtSubscribe("mouseup",$iTXT.core.Event.bind(this,this._hdrUp));},_buildBlock:function(children,klass,id){return $iTXT.core.Builder.makeEl("div",{className:klass,id:id},children,{noResets:true});},showAdChoices:function(){this.adchoices.style.display="block";this.whatsthis.style.display="none";},hideAdChoices:function(){this.adchoices.style.display="none";this.whatsthis.style.display="block";},buildLogo:function()
{var pubLogo=decodeURIComponent($iTXT.glob.params.get('hdr.logo'));if("null"==pubLogo||pubLogo.indexOf('vm_logo2009')>=0){pubLogo=null;}
var vmLogo;if(pubLogo){var pubLogoEl=$iTXT.core.Builder.make("APNG",{className:"itxtvmlogo",src:pubLogo});vmLogo=$iTXT.core.Builder.makeEl("div",{className:"itxt12_publogo"},[pubLogoEl],{noResets:true});}else{vmLogo=$iTXT.core.Builder.makeEl("div",{className:"itxt12_vmlogo itxt_sprited"},[],{noResets:true});this.spritedInteraction(vmLogo,{over:{x:-60,y:-123},out:{x:-60,y:-93},down:{x:-60,y:-123}});}
vmLogo.ondragstart=function(){return false;};vmLogo.itxtSubscribe("mousedown",function(e){$iTXT.core.Event.preventDefault(e);});vmLogo.itxtSubscribe("click",$iTXT.core.Event.bind(this,this._vmLogoBtnClk));var vmLogoWrapper=$iTXT.core.Builder.make("A",{target:'_blank'},[vmLogo]);return vmLogoWrapper;},spritedInteraction:function(el,pos_arr,targEl,otherfx){var actor=targEl||el;el.itxtSubscribe("mouseover",function(){actor.style.backgroundPosition=pos_arr.over.x+"px "+pos_arr.over.y+"px";if(otherfx!==undefined)otherfx("over");});el.itxtSubscribe("mouseout",function(){actor.style.backgroundPosition=pos_arr.out.x+"px "+pos_arr.out.y+"px";if(otherfx!==undefined)otherfx("out");});el.itxtSubscribe("mousedown",function(){actor.style.backgroundPosition=pos_arr.down.x+"px "+pos_arr.down.y+"px";if(otherfx!==undefined)otherfx("down");});},buildCloseButton:function()
{var closeBtn=$iTXT.core.Builder.makeEl("div",{},[],{resets:"itxt12_cls_btn"});this.spritedInteraction(closeBtn,{over:{x:-60,y:-30},out:{x:-60,y:0},down:{x:-60,y:-60}});closeBtn.itxtSubscribe("click",$iTXT.core.Event.bind(this,this._closeBtnClk));return closeBtn;},_buildAdChoices:function()
{var logo=$iTXT.core.Builder.makeEl("div",{id:"itxt_ad_choices"},[],{resets:"itxt12_adchoices"});var txt=$iTXT.core.Builder.makeEl("div",{},[this.options.privIconTxt],{resets:"itxt12_adchoices_txt"});var priv=$iTXT.core.Builder.makeEl("div",{},[logo,txt],{resets:"itxt12_priv"});var hlText=function(st){switch(st){case"over":txt.style.color="#333333";break;case"down":txt.style.color="#333333";break;default:txt.style.color="#bababa";}};this.spritedInteraction(priv,{over:{x:-67,y:-173},out:{x:-67,y:-153},down:{x:-67,y:-173}},logo,hlText);priv.itxtSubscribe("click",$iTXT.core.Event.bind(this,this._onPrivacyIconClick));return priv;},_buildWhatsThis:function(){var wassit=$iTXT.core.Builder.makeEl("div",{id:"itxt_whats_this"},[],{resets:"itxt12_sprited"});this.spritedInteraction(wassit,{over:{x:-19,y:-172},out:{x:-6,y:-172},down:{x:-32,y:-172}});wassit.itxtSubscribe("click",$iTXT.core.Event.bind(this,this._whatBtnClk));return wassit;},_buildFB:function(){var fb=$iTXT.core.Builder.makeEl("div",{id:"itxt_social_fb"},[],{resets:"itxt12_sprited itxt_social"});this.spritedInteraction(fb,{over:{x:-7,y:-381},out:{x:-7,y:-351},down:{x:-7,y:-381}});fb.itxtSubscribe("click",$iTXT.core.Event.bind(this,this._facebookClick));return fb;},_buildTwitter:function(){var tw=$iTXT.core.Builder.makeEl("div",{id:"itxt_social_twitter"},[],{resets:"itxt12_sprited itxt_social"});this.spritedInteraction(tw,{over:{x:-31,y:-381},out:{x:-31,y:-351},down:{x:-31,y:-381}});tw.itxtSubscribe("click",$iTXT.core.Event.bind(this,this._twitterClick));return tw;},_buildUnderLine:function(){var underline=$iTXT.core.Builder.makeEl("div",{id:"itxt_underliner"},[],{resets:"itxt_underliner"});underline.innerHTML='&nbsp;';return underline;},_twitterClick:function(){var uri=decodeURIComponent(this.advert.params.parse("${tt.social.twitter.url}"));var cts=parseInt(this.advert.params.get("cts",0),10);$iTXT.data.al.openUrl($iTXT.data.al.getClickURL(this,{so:225,redir:uri}),cts);},_facebookClick:function(){var uri=decodeURIComponent(this.advert.params.parse("${tt.social.facebook.url}"));var cts=parseInt(this.advert.params.get("cts",0),10);$iTXT.data.al.openUrl($iTXT.data.al.getClickURL(this,{so:224,redir:uri}),cts);},_onPrivacyIconClick:function()
{var opts={mt:124,mv:this.advert.params.get("A.AT"),ipid:this.advert.params.get("IPID")};$iTXT.fire("$iTXT:data:log:monitor",opts);var wtUrl=this.advert.params.parse("${tt.wturl}");$iTXT.core.Util.openUrl(this.advert.params.parse(this.advert.params.get(this.advert.params.parse("tt.privacyicon.url.${cc}"),wtUrl)),false);},_hdrDown:function(e)
{if(this._hdrTarget(e.target))
{$iTXT.core.$(document).itxtFire("$iTXT:tt:hdr:mouse:down",e);}},_hdrUp:function(e)
{if(this._hdrTarget(e.target))
{$iTXT.core.$(document).itxtFire("$iTXT:tt:hdr:mouse:up",e);}},_hdrTarget:function(t)
{return((t!=this.closeBtn)&&(t!=this.whatBtn)&&(t!=this.vmLogo));},_closeBtnClk:function(e)
{$iTXT.core.$(document).itxtFire("$iTXT:tt:close:btn:click");},_whatBtnClk:function(e)
{$iTXT.core.$(document).itxtFire("$iTXT:tt:what:btn:click");var wtUrl=this.advert.params.parse("${tt.wturl}");$iTXT.core.Util.openUrl(wtUrl,false);},_vmLogoBtnClk:function()
{$iTXT.core.$(document).itxtFire("$iTXT:tt:vmlogo:click");var wtUrl=this.advert.params.parse("${tt.wturl}");$iTXT.core.Util.openUrl(wtUrl);},showComponent:function(el){el=$iTXT.core.$(el);el.itxtShow();},hideComponent:function(el){el=$iTXT.core.$(el);el.itxtHide();},setAdvert:function(ad,$super)
{if(this.advert==ad){return;}
if(ad.useAdChoices()){this.showAdChoices();$iTXT.core.$('itxt12_hdr_social').style.right="26px";}else{this.hideAdChoices();$iTXT.core.$('itxt12_hdr_social').style.right="40px";}
if(ad.params.get("aura2.type",0)!=3){if(ad.params.get('tt.social.facebook.url',null)){this.showComponent("itxt_social_fb");}else{this.hideComponent("itxt_social_fb");}
if(ad.params.get('tt.social.twitter.url',null)){this.showComponent("itxt_social_twitter");}else{this.hideComponent("itxt_social_twitter");}}
$super(ad);}});};$iTXT.js.loader["$iTXT.ui.TooltipPlacer"]=true;$iTXT.ui.TooltipPlacer_Load=function(){var debug;var debugZindex=666;var debugColor={'itxtdebughotzone':'black','itxtdebugac':'blue','itxtdebugbc':'green','itxtdebugleft':'orange','itxtdebugright':'yellow','itxtdebugfinal':'white','itxtdebugburn':'red'};function initDebug(){var dbg,noop;if(debug){return;}
dbg=$iTXT.glob.params.getBool('itxtloc-xx',false);noop=function(){};debug={clear:!dbg?noop:function(){var curNode=document.body.lastChild,nextNode=curNode,i=0;do{i++;nextNode=curNode.previousSibling;if(curNode.className.indexOf('itxtdebugplacer')>-1){document.body.removeChild(curNode);curNode=nextNode;}}while(nextNode&&i<200);},draw:!dbg?noop:function(coords,cssClass){var el=document.createElement('div');el.className='itxtdebugplacer '+cssClass;el.innerHTML='&nbsp;';el.style.cssText=['position: absolute','top: '+coords.top+'px','right: '+coords.right+'px','bottom: '+coords.bottom+'px','left: '+coords.left+'px','background-color: '+debugColor[cssClass],'border: 1px solid black','height: '+(coords.bottom-coords.top)+'px','width: '+(coords.right-coords.left)+'px','z-index: '+debugZindex].join(';');document.body.appendChild(el);debugZindex+=1000;},drawHotZones:!dbg?noop:function(zones){var i;for(i=zones.length-1;i>=0;i--){debug.draw(zones[i],'itxtdebughotzone');}}};}
$iTXT.ui.TooltipPosition={AR:"AR",AC:"AC",AL:"AL",CL:"CL",CR:"CR",BR:"BR",BC:"BC",BL:"BL"};$iTXT.ui.TooltipPlacer={weight:{AC:90,AL:85,AR:80,BC:70,BL:65,BR:60},getHookPosition:function(){if(this.mobtEnabled){return $iTXT.core.Util.getPosition(this.hook.mobtCover);}
return this.hook.getPosition();},getHookSize:function(){var el=this.hook.rootElement;if(this.mobtEnabled){el=this.hook.mobtCover;}
return{width:el.offsetWidth,height:el.offsetHeight};},getHookCenterPosition:function(){var pos=this.getHookPosition(),size=this.getHookSize();var yTopModifier=this.mobtEnabled?-2:0;return{top:{y:pos.top+yTopModifier,x:Math.round(pos.left+size.width/2)},bottom:{y:pos.top+size.height,x:Math.round(pos.left+size.width/2)}};},initHotZones:function(){var i,j,avoid,nodes;this.hotZones=[];avoid=['iframe','object','embed'];for(i=0;i<avoid.length;i++){nodes=document.getElementsByTagName(avoid[i]);for(j=nodes.length-1;j>=0;j--){var pos=$iTXT.core.Util.getPosition(nodes[j]);this.hotZones.push({top:pos.top,right:pos.left+nodes[j].offsetWidth,bottom:pos.top+nodes[j].offsetHeight,left:pos.left});}}
debug.drawHotZones(this.hotZones);},initScreenBounds:function(){var size=$iTXT.core.Util.getWindowSize(),scroll=$iTXT.core.Util.getPageScroll();this.scrTop=scroll[1];this.scrRight=scroll[0]+size.width;this.scrBottom=scroll[1]+size.height;this.scrLeft=scroll[0];},getTooltipPlacement:function(){var center=this.getHookCenterPosition();var places={};var shift=25;var halfWidth=Math.round(this.ttWidth/2);var position={TOP:10,RIGHT:20,BOTTOM:30,LEFT:40};function placeCenter(pos){var place={},point=pos===position.TOP?center.top:center.bottom,yModifier=pos===position.TOP?-this.ttHeight:0;place.top=point.y+yModifier;place.left=point.x-halfWidth;place.bottom=place.top+this.ttHeight;place.right=place.left+this.ttWidth;place.damage=this.assessDamage(place);debug.draw(place,(pos===position.TOP?'itxtdebugac':'itxtdebugbc'));return place;}
function placeAside(pos,start){var coords={top:start.top,right:start.right,bottom:start.bottom,left:start.left},xModifier=pos===position.LEFT?-shift:shift,totalShift=0,damage=0,place;place={top:start.top,right:start.right,bottom:start.bottom,left:start.left,damage:Infinity};do{coords.left+=xModifier;coords.right+=xModifier;damage=this.assessDamage(coords);if(damage<place.damage){place.left=coords.left;place.right=coords.right;place.damage=damage;}
totalShift+=shift;}while(totalShift<halfWidth&&damage);debug.draw(place,(pos===position.LEFT?'itxtdebugleft':'itxtdebugright'));return place;}
function bestPlacement(){var state,place,damageWeight=Infinity;for(state in places){if((places[state].damage/this.weight[state])<damageWeight){place=places[state];damageWeight=places[state].damage/this.weight[state];}}
debug.draw(place,'itxtdebugfinal');return place;}
places.AC=placeCenter.call(this,position.TOP);places.AC.state='AR';if(!places.AC.damage){return places.AC;}
places.AL=placeAside.call(this,position.LEFT,places.AC);places.AL.state='AL';if(!places.AL.damage){return places.AL;}
places.AR=placeAside.call(this,position.RIGHT,places.AC);places.AR.state='AR';if(!places.AR.damage){return places.AR;}
places.BC=placeCenter.call(this,position.BOTTOM);places.BC.state='BR';if(!places.BC.damage){return places.BC;}
places.BL=placeAside.call(this,position.LEFT,places.BC);places.BL.state='BL';if(!places.BL.damage){return places.BL;}
places.BR=placeAside.call(this,position.RIGHT,places.BC);places.BR.state='BR';if(!places.BR.damage){return places.BR;}
return bestPlacement.call(this);},assessDamage:function(coords){return this.offScreenDamage(coords)+this.burnDamage(coords);},offScreenDamage:function(coords){var nohit={},nohitArea,ttArea;nohit.top=coords.top<this.scrTop?this.scrTop:coords.top;nohit.right=coords.right>this.scrRight?this.scrRight:coords.right;nohit.left=coords.left<this.scrLeft?this.scrLeft:coords.left;nohit.bottom=coords.bottom>this.scrBottom?this.scrBottom:coords.bottom;ttArea=this.ttWidth*this.ttHeight;nohitArea=(nohit.right-nohit.left)*(nohit.bottom-nohit.top);return ttArea-nohitArea;},burnDamage:function(coords){var i,zone,totalDamage=0;function damage(zone){var overlap={};if((coords.bottom<zone.top||coords.top>zone.bottom)||(coords.right<zone.left||coords.left>zone.right)){return 0;}
overlap.top=zone.top<=coords.top?coords.top:zone.top;overlap.right=zone.right>=coords.right?coords.right:zone.right;overlap.bottom=zone.bottom>=coords.bottom?coords.bottom:zone.bottom;overlap.left=zone.left<=coords.left?coords.left:zone.left;debug.draw(overlap,'itxtdebugburn');return(overlap.bottom-overlap.top)*(overlap.right-overlap.left);}
for(i=this.hotZones.length-1;i>=0;i--){zone=this.hotZones[i];totalDamage+=damage(zone);}
return totalDamage;},place:function(opts)
{this.hook=opts.hk;this.mobtEnabled=$iTXT.ui.MobtManager.isMobtEnabled(opts.hk);this.ttWidth=opts.tt.width;this.ttHeight=opts.tt.height;initDebug();debug.clear();this.initScreenBounds();this.initHotZones();return this.getTooltipPlacement();}};};$iTXT.js.loader["$iTXT.ui.TooltipTail"]=true;$iTXT.ui.TooltipTail_Load=function(){$iTXT.ui.TooltipTail=$iTXT.core.Class.create($iTXT.ui.ComponentBase,{options:null,width:30,height:18,init:function(_options,$super)
{var defOpts=$iTXT.core.Util.extend({id:"itxttail",height:18,bgcol:[],transparent:false},_options);$super(defOpts);this._build();this.resize();},getCenterLeft:function(){var a,b,c;var hkPos=this.advert.hook.getPosition();var hkWidth=this.advert.hook.rootElement.offsetWidth;a=hkPos.left-$iTXT.ui.tt.left;b=this.width/2;c=hkWidth/2;return Math.round(a-b+c);},setPositionState:function(ps)
{this.options.ps=ps;if($iTXT.ui.TooltipPosition.BL==ps||$iTXT.ui.TooltipPosition.BR==ps)
{var tmpl=this.advert.getTemplate();var tmplopts=(null!==tmpl)?(tmpl.options||{}):{};this.options.transparent=(tmplopts.transparenttoptail===true);}
else
{this.options.transparent=false;}
this._build();this.resize();},_build:function()
{if($iTXT.ui.tt.isAboveHook()){this.height=15;}else{this.height=18;}
this.rootElement.innerHTML="";var ttps=$iTXT.ui.TooltipPosition;var tail=$iTXT.core.Builder.make("div",{id:"itxt12_tail",className:"itxt12_tail itxt12_sprited"},[]);if(this.options.ps.charAt(0).toUpperCase()==='B'){tail.className+=' itxt12_tail_belowcenter';}else{tail.className+=' itxt12_tail_abovecenter';}
this.rootElement.itxtAppendChild(tail);},setAdvert:function(ad,$super)
{this.customBgCol=undefined;$super(ad);},tooltipOver:function()
{},tooltipOut:function()
{},getHeight:function($super)
{if(this.advert.getAdvertType()===155){return 0;}else{return $super();}}});};