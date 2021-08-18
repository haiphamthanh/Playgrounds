
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

  window.vdo_ai_ = window.vdo_ai_ || {};
  window.vdo_ai_.cmd = window.vdo_ai_.cmd || [];

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
      if(window.initVdo && typeof window.google != 'undefined' && window.google.ima) {
       callAdframe();
      }
  }, 1000);


  function callAdframe() {
    if(!playerLoaded) {
        playerLoaded = true;
        clearInterval(checkTimer);
        window.vdo_ai_.cmd.push(function() {
          window.initVdo({"desktop":{"show":true,"muted":true,"autoResize":true,"width":498,"height":280,"bottomMargin":10,"topMargin":10,"unitType":"floating","leftOrRight":{"position":"right","margin":10},"cancelTimeoutType":{"type":"timeout","eventtype":"readyforpreroll","cancelTimeout":60000},"passback":{"allow":false,"src":"","string":"","timeout":15000},"smallWidth":498,"smallHeight":280,"crossSize":17,"dispose_off":false,"bannerOff":false,"companionOff":false},"mobile":{"dispose_off":false,"show":true,"muted":true,"autoResize":false,"width":333,"height":250,"bottomMargin":10,"topMargin":10,"unitType":"content-floating","leftOrRight":{"position":"right","margin":10},"cancelTimeoutType":{"type":"timeout","eventtype":"readyforpreroll","cancelTimeout":60000},"passback":{"allow":false,"src":"","string":"","timeout":15000},"smallWidth":333,"smallHeight":250,"crossSize":17,"bannerOff":false,"companionOff":false},"bottomMargin":10,"parent_div":"vdo_ai_div","canAutoplayCheck":false,"showOnlyFirst":false,"cancelTimeout":10000,"id":"vdo_ai_3691","muted":true,"playsinline":true,"autoplay":true,"preload":true,"old_parent_div":"vdo_ai_div","show_on":"ads-ad-started","video_clickthrough_url":"","content_sources":["videos\/categories\/ent26.m3u8","videos\/categories\/ent19.m3u8","videos\/categories\/ent27.m3u8","videos\/categories\/ent11.m3u8","videos\/categories\/Ent1.m3u8"],"pubId":"1773","brandLogo":{"img":"","url":""},"coppa":false,"add_on_page_ready":"no","adbreak_offsets":[0,5,10],"domain":"quantrimang.com","path":"\/\/a.vdo.ai\/core\/v-quantrimang\/adframe.js","unitId":"_vdo_ads_player_ai_2961","tag_type":"other","showLogo":true,"show_on_ad":true,"close_after_first_ad_timer":0,"autoReplay":true,"hls":false,"media_url":"https:\/\/h.vdo.ai\/","bidders":{"0":{"bids":[{"bidder":"appnexus","params":{"placementId":19689526,"floor":0,"video":{"skippable":true,"playback_method":null}}},{"bidder":"pubmatic","params":{"publisherId":"159175","adSlot":"quantrimang.com_pre_0x0_ATF","video":{"mimes":["video\/mp4","video\/webm","application\/javascript","video\/ogg"],"skippable":true},"floor":"0"}}],"banner":{"prebid":[{"bidder":"appnexus","params":{"placementId":19689529,"floor":0}},{"bidder":"pubmatic","params":{"publisherId":"159175","adSlot":"quantrimang.com_pre_336x280_ATF","floor":"0"}}]}},"5":{"bids":[{"bidder":"appnexus","params":{"placementId":19689527,"floor":0,"video":{"skippable":true,"playback_method":null}}},{"bidder":"pubmatic","params":{"publisherId":"159175","adSlot":"quantrimang.com_mid1_0x0_ATF","video":{"mimes":["video\/mp4","video\/webm","application\/javascript","video\/ogg"],"skippable":true},"floor":"0"}}],"banner":{"prebid":[{"bidder":"appnexus","params":{"placementId":19689530,"floor":0}},{"bidder":"pubmatic","params":{"publisherId":"159175","adSlot":"quantrimang.com_mid1_336x280_ATF","floor":"0"}}]}},"10":{"bids":[{"bidder":"appnexus","params":{"placementId":19689528,"floor":0,"video":{"skippable":true,"playback_method":null}}},{"bidder":"pubmatic","params":{"publisherId":"159175","adSlot":"quantrimang.com_mid2_0x0_ATF","video":{"mimes":["video\/mp4","video\/webm","application\/javascript","video\/ogg"],"skippable":true},"floor":"0"}}],"banner":{"prebid":[{"bidder":"appnexus","params":{"placementId":19689531,"floor":0}},{"bidder":"pubmatic","params":{"publisherId":"159175","adSlot":"quantrimang.com_mid2_336x280_ATF","floor":"0"}}]}}},"waterfallTags":[],"adx":[],"s2s":false,"overflow_size":false,"handle_url_change":true,"style":""});
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
                  loadPlayerDiv('_vdo_ads_player_ai_2961','vdo_ai_div',iframe_Burst);
       if(typeof window.initVdo !== 'function') {  // Check for existing dependencies
            Promise.all([
              loadScriptSync(deps + "dependencies_hbv4/vdo.min.js", "_vdo_ads_css_5654_"),
              loadScriptSync("//imasdk.googleapis.com/js/sdkloader/ima3.js", "_vdo_ads_sdk_5654_")
            ]).then(function() {
               callAdframe();
          })
        }
  //#endregion

})(w_vdo, d_vdo, '//a.vdo.ai/core/', 'v-quantrimang');


} catch (e) {


    vdo_analytics('event', 'Err:' + (btoa(e.message).substr(0,10)), { send_to: vdo_analyticsID, value:1, event_category: 'VDOError' });


    var oReq = new XMLHttpRequest();
    oReq.open('get', '//a.vdo.ai/core/logger.php?msg=' + encodeURIComponent(e.stack)+ '&tag=v-quantrimang&code='+btoa(e.message).substr(0,10) + '&url=' + encodeURIComponent(location.href)  + '&func=vdo.ai.js', true);
    oReq.send();
}