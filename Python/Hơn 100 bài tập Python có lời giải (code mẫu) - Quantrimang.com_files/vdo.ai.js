
    /*30-Dec-2020 01:07:27*/
    var vdo_analyticsID = 'UA-113932176-29';
(function(v, d, o, ai) {
    ai = d.createElement('script');
    ai.async = true;
    ai.src = o;
    d.head.appendChild(ai);
})(
    window,
    document,
    'https://www.googletagmanager.com/gtag/js?id=' + vdo_analyticsID
);

function vdo_analytics() {
    window.dataLayer.push(arguments);

}
(function () {
  window.dataLayer = window.dataLayer || [];
  vdo_analytics("js", new Date());
})();
vdo_analytics('event', 'loaded', { send_to: vdo_analyticsID, value:1, event_category: 'vdoaijs' });



try {


function insideSafeFrame() {
  try {
    if(top != self && window.innerWidth > 1 && window.innerHeight > 1) {
      return true;
    }
    if(top.location.href) {
      return false;
    }
  } catch (error) {
    return true;
  }
}



var w_vdo = (insideSafeFrame()) ? window : window.top,
d_vdo = w_vdo.document;
(function (window, document, deps, publisher) {
  var protocol = window.location.protocol;

  window.vdo_ai_stories = window.vdo_ai_stories || {};
  window.vdo_ai_stories.cmd = window.vdo_ai_stories.cmd || [];

  function loadStyleSheet(src, id) {
    var s = document.createElement('link');
    s.id = id;
    s.rel = "stylesheet";
    s.href = protocol + src;
    document.head.appendChild(s);
  }

    function loadPlayerDiv(id,parentId,iframeBurst=false) {
    if (!iframeBurst) {
      if(document.getElementById(id) == null) {
        var s = document.createElement('div');
        s.id = id;
      } else{
        var s = document.getElementById(id);
      }
       if (parentId != '') {
         var parentDiv = document.getElementById(parentId);
         parentDiv.style.display = "block";
         parentDiv.style.width = "100%";
         if (document.getElementById(parentId).parentNode.offsetWidth < 350){
           var margin = (352 - document.getElementById(parentId).parentNode.clientWidth )/2 ;
           parentDiv.style.marginLeft = '-'+margin + 'px';
         }
         parentDiv.appendChild(s);
       } else{
         document.body.appendChild(s);
       }

    } else{

      var parentIframes = top.document.querySelectorAll('iframe');
      for (var i=0; i < parentIframes.length; i++) {
        var el = parentIframes[i];
        if (el.contentWindow === self) {
            // here you can create an expandable ad
            var s = document.createElement('div');
            s.style.zIndex=111;
            s.style.margin = "0 auto";
            s.style.display = "block";
            s.style.position = "relative";
            s.width = 'fit-content';
            s.id = id;
            var googleDiv = el.parentNode;


            if (parentId != '') {
              var parentDiv = document.createElement('div');
              parentDiv.id = parentId;
              parentDiv.style.display = "block";
              parentDiv.style.width = "100%";
              parentDiv.appendChild(s);
              googleDiv.insertBefore(parentDiv, el);
            } else{
              googleDiv.insertBefore(s, el);
            }


            googleDiv.style.width = "auto";
            googleDiv.parentNode.style.width='auto';
            googleDiv.parentNode.style.height='auto';
        }
      }
    }
  }

  

  var playerLoaded = false;

  var checkTimer = setInterval(function() {
      if(window.initVdoStories && typeof window.google != 'undefined' && window.google.ima) {
       callAdframe();
      }
  }, 1000);


  function callAdframe() {
    if(!playerLoaded) {
        playerLoaded = true;
        clearInterval(checkTimer);
        window.vdo_ai_stories.cmd.push(function() {
          window.initVdoStories({"desktop":{"show":true,"muted":true,"autoResize":true,"width":300,"height":250,"bottomMargin":10,"topMargin":10,"unitType":"content","leftOrRight":{"position":"right","margin":10},"cancelTimeoutType":{"type":"timeout","eventtype":"readyforpreroll","cancelTimeout":60000},"passback":{"allow":false,"src":"","string":"","timeout":15000},"smallWidth":498,"smallHeight":280,"crossSize":17,"dispose_off":false,"bannerOff":false,"companionOff":false},"mobile":{"dispose_off":false,"show":true,"muted":true,"autoResize":false,"width":300,"height":250,"bottomMargin":10,"topMargin":10,"unitType":"content","leftOrRight":{"position":"right","margin":10},"cancelTimeoutType":{"type":"timeout","eventtype":"readyforpreroll","cancelTimeout":60000},"passback":{"allow":false,"src":"","string":"","timeout":15000},"smallWidth":333,"smallHeight":250,"crossSize":17,"bannerOff":false,"companionOff":false},"bottomMargin":10,"showOnlyFirst":false,"cancelTimeout":10000,"id":"vdo_ai_7593","muted":true,"playsinline":true,"autoplay":true,"preload":true,"video_clickthrough_url":"","content_sources":["videos\/categories\/ent22.m3u8","videos\/categories\/ent38.m3u8","videos\/categories\/ent31.m3u8","videos\/categories\/ent29.m3u8","videos\/categories\/ent17.m3u8"],"pubId":"1773","brandLogo":{"img":"","url":""},"coppa":false,"add_on_page_ready":"no","showLogo":true,"adbreak_offsets":[0,5,10],"show_on_ad":false,"close_after_first_ad_timer":0,"domain":"quantrimang.com","path":"\/\/a.vdo.ai\/core\/b-quantrimang\/adframe.js","unitId":"_vdo_ads_player_ai_3454","tag_type":"other","parent_div":"b-quantrimang","hls":false,"media_url":"https:\/\/h.vdo.ai\/","show_on":"ads-ad-started","canAutoplayCheck":true,"bidders":{"0":{"bids":[{"bidder":"appnexus","params":{"placementId":20142223,"video":{"skippable":true,"playback_method":null}}},{"bidder":"pubmatic","params":{"publisherId":"159175","adSlot":"b-quantrimang-mid-1-v-pre-2","video":{"mimes":["video\/mp4","video\/webm","application\/javascript","video\/ogg"],"skippable":true}}}],"banner":{"prebid":[{"bidder":"appnexus","params":{"placementId":20142226}},{"bidder":"pubmatic","params":{"publisherId":"159175","adSlot":"b-quantrimang-mid-1-b-pre-2"}}]}},"5":{"bids":[{"bidder":"appnexus","params":{"placementId":20142224,"video":{"skippable":true,"playback_method":null}}},{"bidder":"pubmatic","params":{"publisherId":"159175","adSlot":"b-quantrimang-mid-1-v-mid1-2","video":{"mimes":["video\/mp4","video\/webm","application\/javascript","video\/ogg"],"skippable":true}}}],"banner":{"prebid":[{"bidder":"appnexus","params":{"placementId":20142227}},{"bidder":"pubmatic","params":{"publisherId":"159175","adSlot":"b-quantrimang-mid-1-b-mid1-2"}}]}},"10":{"bids":[{"bidder":"appnexus","params":{"placementId":20142225,"video":{"skippable":true,"playback_method":null}}},{"bidder":"pubmatic","params":{"publisherId":"159175","adSlot":"b-quantrimang-mid-1-v-mid2-2","video":{"mimes":["video\/mp4","video\/webm","application\/javascript","video\/ogg"],"skippable":true}}}],"banner":{"prebid":[{"bidder":"appnexus","params":{"placementId":20142228}},{"bidder":"pubmatic","params":{"publisherId":"159175","adSlot":"b-quantrimang-mid-1-b-mid2-2"}}]}}},"waterfallTags":[],"adx":[],"s2s":false,"overflow_size":false,"handle_url_change":true,"style":"","storiesData":{"items":[{"img":"https:\/\/st.quantrimang.com\/photos\/image\/2020\/05\/16\/Chay-Spin-Coin-Master-201.jpg","title":"C\u00e1c c\u00e1ch nh\u1eadn Spin, ch\u1ea1y spin Coin Master","url":"https:\/\/quantrimang.com\/cach-kiem-spin-coin-master-171857"},{"img":"https:\/\/st.quantrimang.com\/photos\/image\/2020\/09\/03\/trai-dat-200.jpg","title":"B\u1ea3n \u0111\u1ed3 n\u00e0y s\u1ebd cho b\u1ea1n bi\u1ebft H\u00e0 N\u1ed9i v\u00e0 TP.HCM n\u1eb1m \u1edf \u0111\u00e2u tr\u00ean Tr\u00e1i \u0110\u1ea5t khi kh\u1ee7ng long xu\u1ea5t hi\u1ec7n 220 tri\u1ec7u n\u0103m tr\u01b0\u1edbc","url":"https:\/\/quantrimang.com\/ancient-earth-globe-174871"},{"img":"https:\/\/st.quantrimang.com\/photos\/image\/2020\/09\/06\/xoa-facebook-200.jpg","title":"Facebook tr\u1ea3 ti\u1ec1n \u0111\u1ec3 ng\u01b0\u1eddi d\u00f9ng t\u1eeb b\u1ecf m\u00ecnh","url":"https:\/\/quantrimang.com\/facebook-tra-tien-de-nguoi-dung-tu-bo-minh-174931"},{"img":"https:\/\/st.quantrimang.com\/photos\/image\/2020\/09\/03\/Doi-Hinh-Manh-DTCL-Mua-4-200.jpg","title":"Top \u0111\u1ed9i h\u00ecnh m\u1ea1nh DTCL m\u00f9a 4 (10.19), m\u00f9a 3 (10.17, 10.18)","url":"https:\/\/quantrimang.com\/top-5-doi-hinh-manh-trong-dau-truong-chan-ly-9-15-165799"}]}});
        });

    }
  }

  
  function loadScriptSync(src, id) {
    return new Promise(function(resolve, reject) {
        
        if(src.indexOf('ima3.js') > 0 && document.querySelector('script[src*="imasdk.googleapis.com/js/sdkloader/ima3.js"]')) {
            resolve();
            return false;
        }
        var s = document.createElement("script");
        s.id = id;
        var existingScript = document.getElementById(id);
        
        s.async = true;
        s.src = protocol + src;
        document.body.appendChild(s);
        s.onload = resolve;
        s.onerror = reject;
    })
  }

  function inIframe(){try{return self!==top}catch(r){return!0}}var iframe_Burst=inIframe() ? insideSafeFrame() ? false : true : false;



  //#region full_dependencies testing
                  loadPlayerDiv('_vdo_ads_player_ai_3454','b-quantrimang',iframe_Burst);
       if(typeof window.initVdoStories !== 'function') {  // Check for existing dependencies
            Promise.all([
              loadScriptSync(deps + "dependencies_stories_v1/vdo.min.js", "_vdo_ads_css_5654_"),
              loadScriptSync("//imasdk.googleapis.com/js/sdkloader/ima3.js", "_vdo_ads_sdk_5654_")
            ]).then(function() {
               callAdframe();
          })
        }
  //#endregion

})(w_vdo, d_vdo, '//a.vdo.ai/core/', 'b-quantrimang');


} catch (e) {


    vdo_analytics('event', 'Err:' + (btoa(e.message).substr(0,10)), { send_to: vdo_analyticsID, value:1, event_category: 'VDOError' });


    var oReq = new XMLHttpRequest();
    oReq.open('get', '//a.vdo.ai/core/logger.php?msg=' + encodeURIComponent(e.stack)+ '&tag=b-quantrimang&code='+btoa(e.message).substr(0,10) + '&url=' + encodeURIComponent(location.href)  + '&func=vdo.ai.js', true);
    oReq.send();
}