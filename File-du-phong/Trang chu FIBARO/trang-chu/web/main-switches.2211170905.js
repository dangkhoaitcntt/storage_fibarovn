!function e(t,a,o){function i(r,s){if(!a[r]){if(!t[r]){var d="function"==typeof require&&require;if(!s&&d)return d(r,!0);if(n)return n(r,!0);var f=new Error("Cannot find module '"+r+"'");throw f.code="MODULE_NOT_FOUND",f}var u=a[r]={exports:{}};t[r][0].call(u.exports,function(e){var a=t[r][1][e];return i(a?a:e)},u,u.exports,e,t,a,o)}return a[r].exports}for(var n="function"==typeof require&&require,r=0;r<o.length;r++)i(o[r]);return i}({1:[function(e,t,a){var o=e("jquery"),i=e("gsap"),n=e("scrollmagic"),r="screen and (min-width: 544px)",s="screen and (min-width: 1200px)";o(function(){function e(){c.fadeIn()}var t=Modernizr.mq(r),a=Modernizr.mq(s),d=o(".section-product-header"),f=d.find(".content"),u=d.find(".spinner"),c=d.find(".button-replay");if(a){var p=d.find(".splash"),l=d.find("video");l[0].load(),l.on("loadeddata canplay canplaythrough",function(){l[0].readyState<3||(l.css({opacity:1}),u.fadeOut(250),i.to(p,1,{opacity:0,onComplete:function(){l[0].play()}}))}).on("timeupdate",function(){l[0].currentTime>=.8&&f.fadeIn(2e3),l[0].currentTime>=4&&c.fadeIn()})}else{var w=d.find(".base"),v=d.find(".device"),h=d.find(".wallswitch"),y=d.find(".shadow"),m=new i.TimelineMax,O={deviceSpeed:1.25,deviceOffset:"-=0",buttonSpeed:1.5,shadowSpeed:1.5,shadowOffset:"-=1.5"};t&&(O={deviceSpeed:1.75,deviceOffset:"-=.75",buttonSpeed:2,shadowSpeed:2,shadowOffset:"-=2"}),m.to(h,.25,{opacity:0,ease:Power2.easeOut}),m.to(y,.25,{opacity:0,ease:Power2.easeOut}),m.to(w,.25,{opacity:0,ease:Power2.easeOut}),m.to(h,.5,{opacity:1,ease:Power2.easeOut}),m.to(y,.5,{opacity:1,ease:Power2.easeOut},"-=.5"),m.to(w,.5,{opacity:1,ease:Power2.easeOut}),m.add("replay"),m.to(h,O.buttonSpeed,{left:"150%",ease:Power2.easeOut}),m.to(y,O.shadowSpeed,{left:"150%",ease:Power2.easeOut},O.shadowOffset),m.to(y,.5,{opacity:0,ease:Power2.easeOut},O.shadowOffset),m.to(v,O.deviceSpeed,{left:"50%",ease:Power2.easeOut},O.deviceOffset),m.to(h,O.buttonSpeed,{left:"50%",ease:Power2.easeOut}),m.to(y,O.shadowSpeed,{left:"50%",ease:Power2.easeOut,onComplete:e},O.shadowOffset),m.to(y,2.5,{opacity:1,ease:Power2.easeOut},"-=1")}c.on("click",function(e){e.preventDefault(),o(this).fadeOut(),a?f.fadeOut(1e3,function(){l[0].play()}):m.seek("replay").play()});var S=o("#many-functions"),g=S.find(".swiper-button"),P=new Swiper("#many-functions .swiper-container",{simulateTouch:!1,speed:500,effect:"fade",breakpoints:{543:{autoHeight:!0}}});g.on("click",function(e){e.preventDefault();var t=o(this).index();P.slideTo(t),g.removeClass("active").eq(t).addClass("active")}),o(window).on("resize",function(){P.update(!0)});var T=o("#multifunc-device"),b=T.find(".pagination a"),C={simulateTouch:!1,noSwipingClass:"swiper-slide",speed:1e3,autoplay:5e3,effect:"fade",fade:{crossFade:!0},breakpoints:{767:{autoHeight:!0}}},q={onTransitionStart:function(e){b.removeClass("active").eq(e.realIndex).addClass("active")}},x=new Swiper("#multifunc-device .copy-slides",o.extend({},C,q)),k=new Swiper("#multifunc-device .image-slides",C);if(b.on("click",function(e){e.preventDefault();var t=o(this).attr("data-slide");x.slideTo(t),k.slideTo(t),b.removeClass("active").eq(t).addClass("active")}),a){var D=o("#control-what-you-want"),z=D.find(".swiper-container");new Swiper(z,{simulateTouch:!1,loop:!0,autoplay:1e3,speed:500,slidesPerView:10,breakpoints:{1599:{slidesPerView:8}},onAfterResize:function(e){e.update(),e.startAutoplay()}}).disableTouchControl()}var I=o("#power-metering"),M=I.find("video");new n.Scene({triggerHook:"onCenter",triggerElement:"#power-metering .bg",reverse:!1}).on("start",function(){M.each(function(e,t){if(o(t).is(":visible"))var a=window.setTimeout(function(){t.play(),window.clearTimeout(a)},500)})}).addTo(new n.Controller)})},{undefined:void 0}]},{},[1]);