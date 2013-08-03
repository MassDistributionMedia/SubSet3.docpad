
  var top_five = [{"pageviews":320009,"name":"NASA to Webcast Lyrid Meteor Shower Tonight: Watch It Live","img":"<img src=\"http://i.space.com/images/i/000/028/225/i84/lyrid-meteor-berkes-maryland.jpg?1366646067\" alt=\"Lyrid Meteor Over Southern Maryland\" />","path":"/20769-lyrid-meteor-shower-nasa-webcast.html","formatted":"320,009"},{"pageviews":236552,"name":"Lyrid Meteor Shower Is Peaking Now","img":"<img src=\"http://i.space.com/images/i/000/028/180/i84/lyrid-meteor-shower-2013-sky-map.jpg?1366407705\" alt=\"2013 Lyrid Meteor Shower\" />","path":"/20751-lyrid-meteor-shower-peaking-now.html","formatted":"236,552"},{"pageviews":79468,"name":"'Pink' Full Moon Brings Lunar Eclipse Thursday","img":"<img src=\"http://i.space.com/images/i/000/027/665/i84/full-moon-march-2013-harris.jpg?1364847054\" alt=\"March 2013 Full Moon Over Cornwall, England\" />","path":"/20768-april-full-moon-lunar-eclipse.html","formatted":"79,468"},{"pageviews":53890,"name":"Einstein's Gravity Theory Passes Toughest Test Yet","img":"<img src=\"http://i.space.com/images/i/000/028/374/i84/J0348-0432-system.jpg?1366910020\" alt=\"Artist's Impression of the J0348+0432 System.\" />","path":"/20826-einstein-gravity-theory-toughest-test.html","formatted":"53,890"},{"pageviews":41867,"name":"Partial Lunar Eclipse Occurs Thursday: Watch It Live Online","img":"<img src=\"http://i.space.com/images/i/000/028/337/i84/lunar-eclipse-dec-2009-blue-moon.jpg?1366833214\" alt=\"December 2009 Lunar Eclipse &quot;Blue Moon&quot;\" />","path":"/20815-lunar-eclipse-full-moon-webcasts.html","formatted":"41,867"}]
  var rank_max = top_five[0].pageviews
  
  function get_top_five(){
    var articles ='<div class="most_pop_b"><div class="side_row">';
    articles += '<div style="float:left; font-size:20px; font-weight:bold; color:#FFFFFF; margin-bottom:15px;">';
    articles += '   MOST POPULAR ARTICLES';
    articles += '</div>';
    articles += '';
    for (asset in top_five){
      articles += '<div style="float:left; margin-bottom:15px; width:100%; cursor:pointer;">';
      articles += '  <a href="'+ top_five[asset].path +'" style="text-decoration:none;" >';
      articles += '    <div style="float:left; width:100%;" >';
      articles += '      <div style="float:left; padding-right:10px;">';
      articles += '        <span class="img_overlay overlay_i84"></span>';
      articles += '        '+ top_five[asset].img;
      articles += '      </div>';
      articles += '      <div style="float:left; width:210px;">'
      articles += '        <div style="float:left; width:100%; color:#FFFFFF; font-size:12px; margin-bottom:10px; height:30px; overflow:hidden;" >';
      articles += '          '+ top_five[asset].name.substr(0, 70)+((top_five[asset].name.length > 70) ? '...' : '') ;
      articles += '        </div>';
      articles += '        <div style="clear:both; float:left; width:100%; color:#727f6e; height:16px; overfolow:hidden;" >';
      articles += '          <div style="float:left; width:'+ ((top_five[asset].pageviews/rank_max)*55) +'%; background-color:#727f6e; text-indent:5px; overflow:hidden; height:15px; margin-right:5px;" ></div>';
      articles += '            '+ top_five[asset].formatted +' views';
      articles += '        </div>';
      articles += '      </div>';
      articles += '    </div>';
      articles += '  </a>';
      articles += '</div>' +"\n";
    }
    articles += '<div style="float:left;width:100%;"></div>';
    articles += '</div></div>';
    return articles
  }
