!function e(i,t,n){function o(s,r){if(!t[s]){if(!i[s]){var l="function"==typeof require&&require;if(!r&&l)return l(s,!0);if(a)return a(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var d=t[s]={exports:{}};i[s][0].call(d.exports,function(e){var t=i[s][1][e];return o(t?t:e)},d,d.exports,e,i,t,n)}return t[s].exports}for(var a="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(e,i,t){var n=e("jquery"),o=e("swiper");ScrollMagic=e("scrollmagic"),TweenMax=e("gsap"),n(function(){function e(){n(E).hasClass("swiper-slide-active")?(document.querySelector("#data-safety").scrollIntoView({behavior:"smooth"}),window.scrollBy(0,-50)):M.slideNext()}function i(){window.scrollTo(0,0)}function t(){window.addEventListener("scroll",i)}function a(){console.log("enabled"),setTimeout(function(){window.removeEventListener("scroll",i)},1500)}function s(){var e=q.width();e>=970?(L=document.getElementById("hc3video"),$headeLogoSlider=n("#header-slider .slide7 .five-logo-display")):L=document.getElementById("hc3video-mobile")}function r(){var e=L.play();void 0!==e&&e.then(function(){})["catch"](function(e){})}function l(){function e(){L.currentTime<=.4?L.pause():setTimeout(function(){e()},50)}L.currentTime=0,r(),e()}function c(){function e(){L.currentTime>=2?L.pause():setTimeout(function(){e()},10)}L.currentTime=.4,r(),e()}function d(){function e(){L.currentTime>=4.7?L.pause():setTimeout(function(){e()},10)}L.currentTime=2,r(),e()}function u(){function e(){L.currentTime>=5.5?L.pause():setTimeout(function(){e()},10)}L.currentTime=4.7,r(),e()}function p(){function e(){L.currentTime>=6.5?L.pause():setTimeout(function(){e()},10)}L.currentTime=5.5,r(),e()}function v(){function e(){L.currentTime>=7.5?L.pause():setTimeout(function(){e()},10)}L.currentTime=6.5,r(),e()}function h(){L.currentTime=7.5,r()}function f(){n(B).removeClass("active"),n(O).removeClass("active")}function m(){n(B).removeClass("active"),n(O).addClass("active")}function w(){n(B).removeClass("active"),n(O).removeClass("active")}function y(){TweenMax.fromTo("#header-slider .slide3 .hc3-progress-bar span",1,{width:"0"},{width:"100%",delay:1}),TweenMax.fromTo("#header-slider .slide3 .hc2-progress-bar span",1,{width:"0"},{width:"66%",delay:1}),TweenMax.fromTo("#header-slider .slide4 .hc3-progress-bar span",1,{width:"0"},{width:"100%",delay:1}),TweenMax.fromTo("#header-slider .slide4 .hc2-progress-bar span",1,{width:"0"},{width:"50%",delay:1}),TweenMax.fromTo("#header-slider .slide5 .hc3-progress-bar span",1,{width:"0"},{width:"100%",delay:1}),TweenMax.fromTo("#header-slider .slide5 .hc2-progress-bar span",1,{width:"0"},{width:"66%",delay:1}),TweenMax.fromTo("#header-slider .slide6 .hc3-progress-bar span",1,{width:"0"},{width:"100%",delay:1}),TweenMax.fromTo("#header-slider .slide6 .hc2-progress-bar span",1,{width:"0"},{width:"25%",delay:1})}function g(){function e(){var e=q.width();a=e>=970?setInterval(t,5e3):setInterval(t,2e3)}function i(){e()}function t(){var e=r.eq(o);r.not(e).removeClass(s),e.addClass(s),o=++o%l}var o=0,a=null,s="active",r=n(">*",$headeLogoSlider),l=r.length;t(),i()}function T(){0===M.activeIndex&&(L.style.opacity="1",f()),1===M.activeIndex&&(c(),L.style.opacity="1",f(),g()),2===M.activeIndex&&(d(),L.style.opacity="1",f(),y()),3===M.activeIndex&&(u(),L.style.opacity="1",f(),y()),4===M.activeIndex&&(p(),L.style.opacity="1",f(),y()),5===M.activeIndex&&(v(),L.style.opacity="1",f(),y()),6===M.activeIndex&&(h(),L.style.opacity="1",m(),g())}function b(){0===M.activeIndex&&(L.style.opacity="1",L.currentTime=0,L.pause(),n(B).addClass("active"),n(O).removeClass("active")),1===M.activeIndex&&(c(),L.style.opacity="1",w()),2===M.activeIndex&&(d(),L.style.opacity="1",w(),y()),3===M.activeIndex&&(u(),L.style.opacity="1",w(),y()),4===M.activeIndex&&(p(),L.style.opacity="1",w(),y()),5===M.activeIndex&&(v(),L.style.opacity="1",w(),y()),6===M.activeIndex&&(h(),L.style.opacity="1")}function C(){n("#header-slider").addClass("modal-active"),n("#header-slider.modal-active .content").addClass("visible"),n("#header-slider .swiper-pagination").css("display","none"),n("#header-slider .next-slide").css("display","none"),n("#header-slider .more-btn").css("display","none"),n("#header-slider .one-logo-display").css("display","none"),n("#data-safety, #no-internet, #remote-application, #section-siri, #carplay, #packshot, footer, .sub-footer").css("display","none"),n(I).css({height:"150vh"}),M.disableMousewheelControl(),M.disableTouchControl(),window.removeEventListener("scroll",i),setTimeout(function(){n("#header-slider.modal-active .content").addClass("visible-delay"),n(D).toggleClass("active")},10)}function x(){n("#header-slider").removeClass("modal-active"),n("#header-slider.modal-active .content").removeClass("visible"),n("#header-slider .swiper-pagination").css("display","flex"),n("#header-slider .next-slide").css("display","block"),n("#header-slider .more-btn").css("display","inline-block"),n("#header-slider .one-logo-display").css("display","block"),n("#data-safety, #no-internet, #remote-application, #section-siri, #carplay, #packshot, footer, .sub-footer").css("display","block"),n(I).css({height:"calc(100vh - "+S+"px)"}),M.enableMousewheelControl(),M.enableTouchControl(),window.addEventListener("scroll",i),setTimeout(function(){n("#header-slider.modal-active .content").removeClass("visible-delay"),n(D).toggleClass("active")},10)}new o("#header-slider .swiper-container",{direction:"vertical",slidesPerView:1,spaceBetween:30,effect:"fade",speed:3e3,mousewheelControl:!0,mousewheelReleaseOnEdges:!0,touchReleaseOnEdges:!0,mousewheelSensitivity:.1,paginationClickable:!0,pagination:"#header-slider .swiper-pagination"}),n(document).scroll(function(){0===n(window).scrollTop()&&n(D).hide(500)}),n("[data-video-id], [data-playlist-id]").on("click",function(e){function i(e){e.preventDefault(),r.fadeOut(250,function(){r.remove(),a.each(function(){n(this)[0].pause()})})}e.preventDefault();var t=n(this).is("[data-video-id]"),o=t?n(this).attr("data-video-id"):n(this).attr("data-playlist-id"),a=n("video"),s=t?'<iframe class="embed-responsive-item" src="//www.youtube.com/embed/'+o+'?rel=0&autoplay=1" allowfullscreen></iframe>':'<iframe class="embed-responsive-item" src="//www.youtube.com/embed/videoseries?list='+o+'&rel=0&autoplay=1" allowfullscreen></iframe>';a.each(function(){n(this)[0].pause()}),n("body").append('<div class="popup-overlay popup-video"><div class="container"><div class="row"><div class="col-phoneS-12"><div class="embed-responsive embed-responsive-16by9">'+s+'</div></div></div></div><a href="#" class="close"><span class="sr-only">Close</span></a></div>');var r=n(".popup-video");r.fadeIn(250),r.on("click",i),r.find("> a").on("click",i)});var S=n("header").height(),I=n("#header-slider .swiper-wrapper");n(I).css({height:"calc(100vh - "+S+"px)"});var M=document.querySelector(".swiper-container").swiper,E=document.querySelector("#header-slider .slide7"),k=document.querySelector(".next-slide");k.addEventListener("click",e,!1),M.on("onSlideNextStart",function(){n(E).hasClass("swiper-slide-active")?(T(),setTimeout(function(){a()},500)):(t(),T())}),M.on("onSlidePrevStart",function(){window.scrollTo({top:0,left:0,behavior:"smooth"}),setTimeout(function(){t()},700),b()}),M.on("onReachEnd",function(){});var q=n(window),L=document.getElementById("hc3video");$headeLogoSlider=n("#header-slider .slide7 .one-logo-display"),n(window).resize(s),n(document).ready(function(){s(),l()});var B=document.getElementById("initial-mask"),O=document.getElementById("last-mask");window.showModal=C,window.hideModal=x;var D=n("#secondary-nav");n("#data-safety").each(function(){animationScene=new ScrollMagic.Scene({triggerElement:this,triggerHook:"onCenter",reverse:!0,offset:0}).on("start",function(){n(D).toggleClass("active")}.bind(this)).addTo(new ScrollMagic.Controller)}),n("#carplay").each(function(){animationScene=new ScrollMagic.Scene({triggerElement:this,triggerHook:"onCenter",reverse:!0,offset:10}).on("start",function(){n("#carplay .bg2").toggleClass("hide")}.bind(this)).addTo(new ScrollMagic.Controller)}),n("#no-internet").each(function(){animationScene=new ScrollMagic.Scene({triggerElement:this,triggerHook:"onCenter",reverse:!0,offset:100}).on("start",function(){n("#no-internet .bg2").toggleClass("hide"),n("#no-internet .description").toggleClass("toggle")}.bind(this)).addTo(new ScrollMagic.Controller)})})},{undefined:void 0}]},{},[1]);