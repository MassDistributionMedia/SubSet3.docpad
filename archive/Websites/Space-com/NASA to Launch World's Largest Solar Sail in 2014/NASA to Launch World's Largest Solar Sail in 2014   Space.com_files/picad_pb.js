/* 
 Copyright 2011, Image Space Media, Inc. V1.0.01.002
*/

if(typeof picad_passback == 'undefined' || !picad_passback)
{
	var picad_passback = true;

	var _ref_cam_id = "";
	var _default_cam_id = "";
	var _width = 0;
	var _height = 0;
	var _rich_media = 0;

	// Library of utility functions
	var picadPassbackJL = {
		trackURL:"tracking.picadmedia.com",
		adservicesURL:"adservices.picadmedia.com",

        Event:{
            observe:function(element,eventName,handler){
				if(!handler) return;
                var name=eventName;
                if(element.addEventListener){element.addEventListener(name,handler,false)}
                else{element.attachEvent("on"+name,handler)}
                return element;
            },
            detach:function(element,eventName,handler){
                var name=eventName;
                if(element.removeEventListener)
                {
                    element.removeEventListener(name,handler,false);
                }
                else{element.detachEvent("on"+name,handler)}
                return element;
            }
        }
	};

	// Passback data to be updated by backfill and iframe ad for impression
	var picadPassbackData = {
		is_backfill : false,
		img_id : 0,
		data   : '',
		pub_id : 0,
		dom_id : 0,
		imp_id : 0,
		pg_cnt : 0,
		w      : 0,
		h      : 0,
		cat_id : 0,
		ref_cam_id : '',
		cur_ref_cam_id : 0,
		default_cam_id : '',
		hash : '',
		rm     : 1,
		rand   : 0
	}

	// Passback functions called from backfill and iframe ad
	var picadPassback={

		initialize : function() {
			if(_ref_cam_id)
				this.setRef(_ref_cam_id);

			if(_default_cam_id) 
				this.setDefault(_default_cam_id);

			if(_width)
				this.setWidth(_width);

			if(_height)
				this.setHeight(_height);

			if(_rich_media)
				this.setRichMedia(_rich_media);
		},

		setRef : function(ref) {
			if(picadPassbackData.ref_cam_id)
				picadPassbackData.ref_cam_id = picadPassbackData.ref_cam_id + ',' + ref;
			else {
				picadPassbackData.ref_cam_id = ref;
			}
		},

		setDefault : function(def) {
			picadPassbackData.default_cam_id = def;
		},

		setWidth : function(width) {
			picadPassbackData.w = width;
		},

		setHeight : function(height) {
			picadPassbackData.h = height;
		},

		setRichMedia : function(rich_media) {
			picadPassbackData.rm = rich_media;
		},

		// Function to be called in the backfill script tag
		getAd:function() {
			document.write('<script SRC="http://'+picadPassbackJL.adservicesURL+'/get_backfill_ad_2.php?w='+picadPassbackData.w+'&h='+picadPassbackData.h+'&cat_id='+picadPassbackData.cat_id+'&rm='+picadPassbackData.rm+'&ref_camid='+picadPassbackData.ref_cam_id+'&default_camid='+picadPassbackData.default_cam_id+'&hash='+picadPassbackData.hash+'"></script>');
		},

		// Function to set data by backfill and iframe ad
		setData:function(_img_id, _data, _pub_id, _dom_id, _imp_id, _w, _h, _cat_id, _ref_cam_id, _rand) {
			picadPassback.setDataV1(_img_id, _data, _pub_id, _dom_id, _imp_id, _w, _h, _cat_id, _ref_cam_id, _rand, "");
		},
		setDataV1:function(_img_id, _data, _pub_id, _dom_id, _imp_id, _w, _h, _cat_id, _ref_cam_id, _rand, _hash) {
			picadPassback.setDataV2(_img_id, _data, _pub_id, _dom_id, _imp_id, 0, _w, _h, _cat_id, _ref_cam_id, _rand, "");
		},
		setDataV2:function(_img_id, _data, _pub_id, _dom_id, _imp_id, _pg_cnt, _w, _h, _cat_id, _ref_cam_id, _rand, _hash) {
			picadPassbackData.hash        = _hash;
			picadPassbackData.img_id      = _img_id;
			picadPassbackData.data        = _data;
			picadPassbackData.pub_id      = _pub_id;
			picadPassbackData.dom_id      = _dom_id;
			picadPassbackData.imp_id      = _imp_id;
			picadPassbackData.pg_cnt      = _pg_cnt;
			picadPassbackData.w           = _w;
			picadPassbackData.h           = _h;
			picadPassbackData.cat_id      = _cat_id;
			picadPassbackData.ref_cam_id  = _ref_cam_id;
			picadPassbackData.rand        = _rand;
		},

		// Function to add tracking pixel to be added as a handler on page load
		// The pixel fires an impression based on the data set using the above function
		getPixel: function() {
			var tracking_url = 'http://'+picadPassbackJL.trackURL+'/impression/'+picadPassbackData.img_id+'/?data='+picadPassbackData.data+'&hash='+picadPassbackData.hash+'&pub_id='+picadPassbackData.pub_id+'&dom_id='+picadPassbackData.dom_id+'&imp_id='+picadPassbackData.imp_id+'&pg_cnt='+picadPassbackData.pg_cnt+'&w='+picadPassbackData.w+'&h='+picadPassbackData.h+'&cat_id='+picadPassbackData.cat_id+'&rand='+picadPassbackData.rand;
			if(picadPassbackData.pub_id < 1 || picadPassbackData.dom_id < 1 || picadPassbackData.data == "") {
                tracking_url = 'http://'+picadPassbackJL.trackURL+'/impressionbf/'+picadPassbackData.img_id+'/?data='+picadPassbackData.data+'&hash='+picadPassbackData.hash+'&pub_id='+picadPassbackData.pub_id+'&dom_id='+picadPassbackData.dom_id+'&imp_id='+picadPassbackData.imp_id+'&pg_cnt='+picadPassbackData.pg_cnt+'&w='+picadPassbackData.w+'&h='+picadPassbackData.h+'&cat_id='+picadPassbackData.cat_id+'&ref_cam_id='+picadPassbackData.ref_cam_id+'&rand='+picadPassbackData.rand;
			}
			else if(picadPassbackData.is_backfill) {
				tracking_url += '&bf=' + picadPassbackData.cur_ref_cam_id;
            }
            else {
				tracking_url += '&bf=0';
            }
			(new Image).src = tracking_url;
		}
	};
}
