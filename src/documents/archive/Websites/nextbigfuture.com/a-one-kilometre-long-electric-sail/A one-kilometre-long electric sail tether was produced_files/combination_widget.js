

function dsqComboTab(tab) {
	document.getElementById('dsq-combo-people').style.display = "none";
	document.getElementById('dsq-combo-popular').style.display = "none";
	document.getElementById('dsq-combo-recent').style.display = "none";
	document.getElementById('dsq-combo-tab-people').className = "dsq-combo-tab";
	document.getElementById('dsq-combo-tab-popular').className = "dsq-combo-tab";
	document.getElementById('dsq-combo-tab-recent').className = "dsq-combo-tab";

	document.getElementById('dsq-combo-' + tab).style.display = "block";
	document.getElementById('dsq-combo-tab-' + tab).className = "dsq-combo-tab dsq-active";
}

document.write(' \
<style type="text/css" media="screen">\
	 #dsq-combo-widget ul,\
	 #dsq-combo-widget li,\
	 #dsq-combo-widget ol,\
	 #dsq-combo-widget div,\
	 #dsq-combo-widget p,\
	 #dsq-combo-widget a,\
	 #dsq-combo-widget cite,\
	 #dsq-combo-widget img {\
	 border: 0;\
	 padding: 0;\
	 margin: 0;\
	 float: none;\
	 text-indent: 0;\
	 background: none;\
	 }\
	 #dsq-combo-widget ul,\
	 #dsq-combo-widget li,\
	 #dsq-combo-widget ol {\
	 list-style-type: none;\
	 list-style-image: none;\
	 background: none;\
	 display: block;\
	 }\
	 #dsq-combo-widget #dsq-combo-content ul,\
	 #dsq-combo-widget #dsq-combo-content li,\
	 #dsq-combo-widget #dsq-combo-content ol,\
	 #dsq-combo-widget #dsq-combo-content div,\
	 #dsq-combo-widget #dsq-combo-content p,\
	 #dsq-combo-widget #dsq-combo-content a,\
	 #dsq-combo-widget #dsq-combo-content cite,\
	 #dsq-combo-widget #dsq-combo-content img {\
	 border: 0;\
	 padding: 0;\
	 margin: 0;\
	 float: none;\
	 text-indent: 0;\
	 background: none;\
	 }\
	 #dsq-combo-widget #dsq-combo-content ul,\
	 #dsq-combo-widget #dsq-combo-content li,\
	 #dsq-combo-widget #dsq-combo-content ol {\
	 list-style-type: none;\
	 list-style-image: none;\
	 background: none;\
	 display: block;\
	 }\
	 .dsq-clearfix:after {\
	 content:".";\
	 display: block;\
	 height: 0;\
	 clear: both;\
	 visibility: hidden;\
	 }\
	 /* end reset */\
	 #dsq-combo-widget { ;\
	 text-align: left;\
	 }\
	 #dsq-combo-widget #dsq-combo-tabs {\
	 float: left;\
	 }\
	 #dsq-combo-widget #dsq-combo-content {\
	 position: static;\
	 }\
	 #dsq-combo-widget #dsq-combo-content h3 {\
	 float: none;\
	 text-indent: 0;\
	 background: none;\
	 padding: 0;\
	 border: 0;\
	 margin: 0 0 10px 0;\
	 font-size: 16px;\
	 }\
	 #dsq-combo-widget #dsq-combo-tabs li {\
	 display: inline;\
	 float: left;\
	 margin-right: 2px;\
	 padding: 0px 5px;\
	 text-transform: uppercase;\
	 }\
	 #dsq-combo-widget #dsq-combo-tabs li a {\
	 text-decoration: none;\
	 font-weight: bold;\
	 font-size: 10px;\
	 }\
	 #dsq-combo-widget #dsq-combo-content .dsq-combo-box {\
	 margin: 0 0 20px;\
	 padding: 12px;\
	 clear: both;\
	 }\
	 #dsq-combo-widget #dsq-combo-content .dsq-combo-box li {\
	 padding-bottom: 10px;\
	 margin-bottom: 10px;\
	 overflow: hidden;\
	 word-wrap: break-word;\
	 }\
	 #dsq-combo-widget #dsq-combo-content .dsq-combo-avatar {\
	 float: left;\
	 height: 48px;\
	 width: 48px;\
	 margin-right: 15px;\
	 }\
	 #dsq-combo-widget #dsq-combo-content .dsq-combo-box cite {\
	 font-weight: bold;\
	 font-size: 14px;\
	 }\
	 span.dsq-widget-clout {\
	 background-color:#FF7300;\
	 color:#FFFFFF;\
	 padding:0pt 2px;\
	 }\
	 #dsq-combo-logo { text-align: right; }\
	 /* Blue */\
	 #dsq-combo-widget.blue #dsq-combo-tabs li.dsq-active { background: #E1F3FC; }\
	 #dsq-combo-widget.blue #dsq-combo-content .dsq-combo-box { background: #E1F3FC; }\
	 #dsq-combo-widget.blue #dsq-combo-tabs li { background: #B5E2FD; }\
	 #dsq-combo-widget.blue #dsq-combo-content .dsq-combo-box li { border-bottom: 1px dotted #B5E2FD; }\
	 /* Grey */\
	 #dsq-combo-widget.grey #dsq-combo-tabs li.dsq-active { background: #f0f0f0; }\
	 #dsq-combo-widget.grey #dsq-combo-content .dsq-combo-box { background: #f0f0f0; }\
	 #dsq-combo-widget.grey #dsq-combo-tabs li { background: #ccc; }\
	 #dsq-combo-widget.grey #dsq-combo-content .dsq-combo-box li { border-bottom: 1px dotted #ccc; }\
	 /* Green */\
	 #dsq-combo-widget.green #dsq-combo-tabs li.dsq-active { background: #f4ffea; }\
	 #dsq-combo-widget.green #dsq-combo-content .dsq-combo-box { background: #f4ffea; }\
	 #dsq-combo-widget.green #dsq-combo-tabs li { background: #d7edce; }\
	 #dsq-combo-widget.green #dsq-combo-content .dsq-combo-box li { border-bottom: 1px dotted #d7edce; }\
	 /* Red */\
	 #dsq-combo-widget.red #dsq-combo-tabs li.dsq-active { background: #fad8d8; }\
	 #dsq-combo-widget.red #dsq-combo-content .dsq-combo-box { background: #fad8d8; }\
	 #dsq-combo-widget.red #dsq-combo-tabs li { background: #fdb5b5; }\
	 #dsq-combo-widget.red #dsq-combo-content .dsq-combo-box li { border-bottom: 1px dotted #fdb5b5; }\
	 /* Orange */\
	 #dsq-combo-widget.orange #dsq-combo-tabs li.dsq-active { background: #fae6d8; }\
	 #dsq-combo-widget.orange #dsq-combo-content .dsq-combo-box { background: #fae6d8; }\
	 #dsq-combo-widget.orange #dsq-combo-tabs li { background: #fddfb5; }\
	 #dsq-combo-widget.orange #dsq-combo-content .dsq-combo-box li { border-bottom: 1px dotted #fddfb5; }\
	 </style>\
	 <div id="dsq-combo-widget" class="blue">\
	 <ul id="dsq-combo-tabs">\
	 <li id="dsq-combo-tab-people" ><a href="#" onclick="dsqComboTab(\'people\'); return false">People</a></li>\
	 <li id="dsq-combo-tab-recent" ><a href="#" onclick="dsqComboTab(\'recent\'); return false">Recent</a></li>\
	 <li id="dsq-combo-tab-popular" class="dsq-active"><a href="#" onclick="dsqComboTab(\'popular\'); return false">Popular</a></li>\
	 </ul>\
	 <div id="dsq-combo-content">\
	 <div id="dsq-combo-people" class="dsq-combo-box" style="display:none">\
	 <h3>Top Commenters</h3>\
	 <ul>\
	 <li class="dsq-clearfix">\
	 <a href="http://disqus.com/GoatGuy/">\
	 <img class="dsq-combo-avatar" src="http://mediacdn.disqus.com/uploads/users/8/3438/avatar92.jpg?1352898716">\
	 </a>\
	 <cite><a href="http://disqus.com/GoatGuy/">GoatGuy</a></cite>\
	 <div><span class="dsq-widget-clout" title="Clout: Reputation on Disqus"></span>&nbsp;&middot;&nbsp;3622 posts</div>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a href="http://disqus.com/phamnuwen/">\
	 <img class="dsq-combo-avatar" src="http://mediacdn.disqus.com/1367013285/images/noavatar92.png">\
	 </a>\
	 <cite><a href="http://disqus.com/phamnuwen/">phamnuwen</a></cite>\
	 <div><span class="dsq-widget-clout" title="Clout: Reputation on Disqus"></span>&nbsp;&middot;&nbsp;2762 posts</div>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a href="http://disqus.com/sebtal/">\
	 <img class="dsq-combo-avatar" src="http://mediacdn.disqus.com/1367013285/images/noavatar92.png">\
	 </a>\
	 <cite><a href="http://disqus.com/sebtal/">sebtal</a></cite>\
	 <div><span class="dsq-widget-clout" title="Clout: Reputation on Disqus"></span>&nbsp;&middot;&nbsp;2512 posts</div>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a href="http://disqus.com/doctorpat/">\
	 <img class="dsq-combo-avatar" src="http://mediacdn.disqus.com/uploads/users/212/130/avatar92.jpg?1273133021">\
	 </a>\
	 <cite><a href="http://disqus.com/doctorpat/">doctorpat</a></cite>\
	 <div><span class="dsq-widget-clout" title="Clout: Reputation on Disqus"></span>&nbsp;&middot;&nbsp;2422 posts</div>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a href="http://disqus.com/Combinatorics/">\
	 <img class="dsq-combo-avatar" src="http://mediacdn.disqus.com/1367013285/images/noavatar92.png">\
	 </a>\
	 <cite><a href="http://disqus.com/Combinatorics/">Combinatorics</a></cite>\
	 <div><span class="dsq-widget-clout" title="Clout: Reputation on Disqus"></span>&nbsp;&middot;&nbsp;2071 posts</div>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a href="http://disqus.com/Paul451/">\
	 <img class="dsq-combo-avatar" src="http://mediacdn.disqus.com/uploads/users/713/3356/avatar92.jpg?1355129478">\
	 </a>\
	 <cite><a href="http://disqus.com/Paul451/">Paul451</a></cite>\
	 <div><span class="dsq-widget-clout" title="Clout: Reputation on Disqus"></span>&nbsp;&middot;&nbsp;2065 posts</div>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a href="http://disqus.com/kurt9/">\
	 <img class="dsq-combo-avatar" src="http://mediacdn.disqus.com/1367013285/images/noavatar92.png">\
	 </a>\
	 <cite><a href="http://disqus.com/kurt9/">kurt9</a></cite>\
	 <div><span class="dsq-widget-clout" title="Clout: Reputation on Disqus"></span>&nbsp;&middot;&nbsp;1189 posts</div>\
	 </li>\
	 </ul>\
	 <div id="dsq-combo-logo"><a href="http://disqus.com"><img src="http://mediacdn.disqus.com/1367013285/images/embed/widget-logo.png"></a></div>\
	 </div>\
	 <div id="dsq-combo-recent" class="dsq-combo-box" style="display:none">\
	 <h3>Recent Comments</h3>\
	 <ul>\
	 <li class="dsq-clearfix">\
	 <a href="http://disqus.com/google-d15fc42241b048c3aa8ddb011c4083c1/"><img class="dsq-combo-avatar" src="http://mediacdn.disqus.com/1367013285/images/noavatar92.png"></a>\
	 <a class="dsq-widget-user" href="http://disqus.com/google-d15fc42241b048c3aa8ddb011c4083c1/">Carl White</a>\
	 <span class="dsq-widget-comment"><p>"don\'t have NASA guys debating stuff that they\'re clearly out of their depth on to develop, prove or demonstrate."</p>\
	 <p>Do you have any proof of this assertion?</p></span>\
	 <p class="dsq-widget-meta"><a href="http://nextbigfuture.com/2013/04/2013-starship-congress-will-have-update.html">2013 Starship Congress will have an update on the Warp Field Experiments</a>&nbsp;&middot;&nbsp;<a href="http://nextbigfuture.com/2013/04/2013-starship-congress-will-have-update.html#comment-879167673">21 minutes ago</a></p>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a href="http://disqus.com/google-d15fc42241b048c3aa8ddb011c4083c1/"><img class="dsq-combo-avatar" src="http://mediacdn.disqus.com/1367013285/images/noavatar92.png"></a>\
	 <a class="dsq-widget-user" href="http://disqus.com/google-d15fc42241b048c3aa8ddb011c4083c1/">Carl White</a>\
	 <span class="dsq-widget-comment"><p>Maybe if mainstream physicists weren\'t so hyperconservative, outside groups wouldn\'t need to get involved.</p></span>\
	 <p class="dsq-widget-meta"><a href="http://nextbigfuture.com/2013/04/2013-starship-congress-will-have-update.html">2013 Starship Congress will have an update on the Warp Field Experiments</a>&nbsp;&middot;&nbsp;<a href="http://nextbigfuture.com/2013/04/2013-starship-congress-will-have-update.html#comment-879165373">24 minutes ago</a></p>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a href="http://disqus.com/PhilipKGlass/"><img class="dsq-combo-avatar" src="http://mediacdn.disqus.com/1367013285/images/noavatar92.png"></a>\
	 <a class="dsq-widget-user" href="http://disqus.com/PhilipKGlass/">PhilipKGlass</a>\
	 <span class="dsq-widget-comment"><p>New observations in physics lead to new mathematical models. There are currently no FTL or exotic matter observations in want of explanation. There\'s plenty of wishing and mathematics. I wish that...</p></span>\
	 <p class="dsq-widget-meta"><a href="http://nextbigfuture.com/2013/04/2013-starship-congress-will-have-update.html">2013 Starship Congress will have an update on the Warp Field Experiments</a>&nbsp;&middot;&nbsp;<a href="http://nextbigfuture.com/2013/04/2013-starship-congress-will-have-update.html#comment-879079653">2 hours ago</a></p>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a href="http://disqus.com/manofsan/"><img class="dsq-combo-avatar" src="http://mediacdn.disqus.com/1367013285/images/noavatar92.png"></a>\
	 <a class="dsq-widget-user" href="http://disqus.com/manofsan/">manofsan</a>\
	 <span class="dsq-widget-comment"><p>Well, too bad the Superconductive SuperCollider project fell through then, because that might have given Texas Congressmen something bigger to crow about, and it might have unlocked deeper secrets...</p></span>\
	 <p class="dsq-widget-meta"><a href="http://nextbigfuture.com/2013/04/2013-starship-congress-will-have-update.html">2013 Starship Congress will have an update on the Warp Field Experiments</a>&nbsp;&middot;&nbsp;<a href="http://nextbigfuture.com/2013/04/2013-starship-congress-will-have-update.html#comment-879036227">3 hours ago</a></p>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a href="http://disqus.com/tombillings/"><img class="dsq-combo-avatar" src="http://mediacdn.disqus.com/uploads/users/162/9427/avatar92.jpg?1324343910"></a>\
	 <a class="dsq-widget-user" href="http://disqus.com/tombillings/">Tom Billings</a>\
	 <span class="dsq-widget-comment"><p>I think that in proposing NASA should go to a National Lab, you are forgetting a fundamental of NASA existence that has continually grown in importance over the last 40 years. The funding for work...</p></span>\
	 <p class="dsq-widget-meta"><a href="http://nextbigfuture.com/2013/04/2013-starship-congress-will-have-update.html">2013 Starship Congress will have an update on the Warp Field Experiments</a>&nbsp;&middot;&nbsp;<a href="http://nextbigfuture.com/2013/04/2013-starship-congress-will-have-update.html#comment-879024579">3 hours ago</a></p>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a href="http://disqus.com/PontificusPinion/"><img class="dsq-combo-avatar" src="http://mediacdn.disqus.com/1367013285/images/noavatar92.png"></a>\
	 <a class="dsq-widget-user" href="http://disqus.com/PontificusPinion/">A1</a>\
	 <span class="dsq-widget-comment"><p>How much money, time and expertise devoted to this non-problem? How about all these brainiacs work on enabling rapid space resource development and industrialization before embarking on these...</p></span>\
	 <p class="dsq-widget-meta"><a href="http://nextbigfuture.com/2013/04/deceleration-of-interstellar-probe.html">Deceleration of an interstellar probe</a>&nbsp;&middot;&nbsp;<a href="http://nextbigfuture.com/2013/04/deceleration-of-interstellar-probe.html#comment-879005923">4 hours ago</a></p>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a href="http://disqus.com/manofsan/"><img class="dsq-combo-avatar" src="http://mediacdn.disqus.com/1367013285/images/noavatar92.png"></a>\
	 <a class="dsq-widget-user" href="http://disqus.com/manofsan/">manofsan</a>\
	 <span class="dsq-widget-comment"><p>Look, even nuclear fusion is not fundamental physics in the way that warping space is. We know that fusion can be done - stars run on it, and hydrogen bombs have been made. It\'s just controlled...</p></span>\
	 <p class="dsq-widget-meta"><a href="http://nextbigfuture.com/2013/04/2013-starship-congress-will-have-update.html">2013 Starship Congress will have an update on the Warp Field Experiments</a>&nbsp;&middot;&nbsp;<a href="http://nextbigfuture.com/2013/04/2013-starship-congress-will-have-update.html#comment-878965228">4 hours ago</a></p>\
	 </li>\
	 </ul>\
	 <div id="dsq-combo-logo"><a href="http://disqus.com"><img src="http://mediacdn.disqus.com/1367013285/images/embed/widget-logo.png"></a></div>\
	 </div>\
	 <div id="dsq-combo-popular" class="dsq-combo-box" >\
	 <h3>Most Discussed</h3>\
	 <ul>\
	 <li class="dsq-clearfix">\
	 <a class="dsq-widget-thread" href="http://nextbigfuture.com/2013/04/2013-starship-congress-will-have-update.html">2013 Starship Congress will have an update on the Warp Field Experiments</a>\
	 <p class="dsq-widget-meta">15 comments &middot; 21 minutes ago</p>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a class="dsq-widget-thread" href="http://nextbigfuture.com/2013/04/20-billion-dollar-international-tokomak.html">20 billion dollar International Tokomak Fusion Project Keeps Rolling Along but would deliver commercial power in 2050 at the earliest</a>\
	 <p class="dsq-widget-meta">19 comments &middot; 6 hours ago</p>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a class="dsq-widget-thread" href="http://nextbigfuture.com/2013/04/aubrey-de-grey-undoing-aging.html">Aubrey de Grey - Undoing aging</a>\
	 <p class="dsq-widget-meta">26 comments &middot; 5 hours ago</p>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a class="dsq-widget-thread" href="http://nextbigfuture.com/2013/04/high-energy-costs-are-making-europe.html">High Energy Costs are Making Europe Even more Uncompetitive</a>\
	 <p class="dsq-widget-meta">153 comments &middot; 18 hours ago</p>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a class="dsq-widget-thread" href="http://nextbigfuture.com/2013/04/spacex-grasshopper-flew-250-meters-into.html">Spacex Grasshopper flew 250 meters into the air on a windy day</a>\
	 <p class="dsq-widget-meta">65 comments &middot; 2 days ago</p>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a class="dsq-widget-thread" href="http://nextbigfuture.com/2013/04/is-this-century-we-begin-to-build.html">Is this the century we begin to build starships ?</a>\
	 <p class="dsq-widget-meta">41 comments &middot; 5 hours ago</p>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a class="dsq-widget-thread" href="http://nextbigfuture.com/2013/04/shanghai-tower-construction-continues.html">Shanghai Tower Construction Continues Despite Rumors of salt in concrete sand</a>\
	 <p class="dsq-widget-meta">29 comments &middot; 13 hours ago</p>\
	 </li>\
	 </ul>\
	 <div id="dsq-combo-logo"><a href="http://disqus.com"><img src="http://mediacdn.disqus.com/1367013285/images/embed/widget-logo.png"></a></div>\
	 </div>\
	 </div>\
	 </div>\
');
