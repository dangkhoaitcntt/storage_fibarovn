!function e(t,i,n){function o(r,a){if(!i[r]){if(!t[r]){var d="function"==typeof require&&require;if(!a&&d)return d(r,!0);if(s)return s(r,!0);var l=new Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l}var c=i[r]={exports:{}};t[r][0].call(c.exports,function(e){var i=t[r][1][e];return o(i?i:e)},c,c.exports,e,t,i,n)}return i[r].exports}for(var s="function"==typeof require&&require,r=0;r<n.length;r++)o(n[r]);return o}({1:[function(e,t,n){var o=e("jquery"),s=e("swiper"),r=e("scrollmagic");!function(e){var t=e(window);e.fn.visible=function(e,i,n){if(!(this.length<1)){var o=this.length>1?this.eq(0):this,s=o.get(0),r=t.width(),a=t.height(),n=n?n:"both",d=i!==!0||s.offsetWidth*s.offsetHeight;if("function"==typeof s.getBoundingClientRect){var l=s.getBoundingClientRect(),c=l.top>=0&&l.top<a,f=l.bottom>0&&l.bottom<=a,h=l.left>=0&&l.left<r,u=l.right>0&&l.right<=r,p=e?c||f:c&&f,v=e?h||u:h&&u;if("both"===n)return d&&p&&v;if("vertical"===n)return d&&p;if("horizontal"===n)return d&&v}else{var g=t.scrollTop(),w=g+a,m=t.scrollLeft(),k=m+r,b=o.offset(),C=b.top,T=C+o.height(),y=b.left,E=y+o.width(),S=e===!0?T:C,H=e===!0?C:T,I=e===!0?E:y,q=e===!0?y:E;if("both"===n)return!!d&&w>=H&&S>=g&&k>=q&&I>=m;if("vertical"===n)return!!d&&w>=H&&S>=g;if("horizontal"===n)return!!d&&k>=q&&I>=m}}}}(jQuery),o("body").css({height:o(window).height()+0+"px",overflow:"hidden"}),window.scrollTo(0,0),o(function(){function e(){var e=f.width();e>=1180&&(t(),window.scrollTo(0,0))}function t(){o("#placeholder").visible(!0)&&(o("body").css({overflow:"hidden"}),o("body").attr("scroll","no"))}function n(){o("body").css({overflow:"visible"}),o("body").attr("scroll","yes")}function a(e,i){t(),i&&o("#header-desktop .bg"+e).addClass("active"),setTimeout(function(){i&&o("#header-desktop .bg"+e).addClass("active").addClass("finished")},1500),setTimeout(function(){o("#header-desktop .slider-pointer").removeClass("active"),o("#header-desktop .slider-pointer:nth-child("+e+")").addClass("active")},100)}function d(e){1==e?a(e,!0):a(e,!1);var t=o("#header-desktop .bg .active").length;for(e<t&&o("#header-desktop .active").removeClass("active").removeClass("finished"),i=1;i<=e;i++)o("#header-desktop .bg"+i).addClass("active").addClass("finished")}function l(){v.currentTime=0,v.play(),g=0,setTimeout(function(){v.pause()},5e3)}function c(){v.currentTime=6,v.play(),g=1}var f=o(window);o(window).resize(e),o(document).ready(function(){e()}),window.pointers=d,o("#header-desktop").each(function(){animationScene=new r.Scene({triggerElement:this,triggerHook:"onEnter",reverse:!1,offset:0}).on("start",function(){t(),a(1,!0),o("#header-desktop").bind("mousewheel DOMMouseScroll",function(e){var t=e.originalEvent.wheelDelta||-e.originalEvent.detail;for(i=1;i<6;i++)if(t<0&&o("#header-desktop .bg"+i).hasClass("finished"))n(),i<6&&a(i+1,!0);else if(t>0&&o("#header-desktop .bg"+i).hasClass("finished")){var s=o(".finished").length;setTimeout(function(){o(".finished").length>1&&o("#header-desktop .bg"+s).removeClass("active").removeClass("finished")},500),i>=1&&a(i,!1),setTimeout(function(){o("#header-desktop .slider-pointer").removeClass("active"),o("#header-desktop .slider-pointer:nth-child("+(s-1)+")").addClass("active"),o("#header-desktop .slider-pointer.active").length<=0&&o("#header-desktop .slider-pointer:nth-child(1)").addClass("active")},100)}t<0&&o("#header-desktop .bg5").hasClass("finished")&&(o("#header-desktop .buttons").css("opacity","1"),o("#header-desktop").css("background-color","#ffffff")),t<0&&o("#header-desktop .bg6").hasClass("finished")&&n(),0==o(".finished").length&&a(1,!0)})}.bind(this)).addTo(new r.Controller)}),o("#header-01-mobile, #applications").each(function(){animationScene=new r.Scene({triggerElement:this,triggerHook:"onEnter",reverse:!1,offset:500}).on("start",function(){n()}.bind(this)).addTo(new r.Controller)}),o("#data-safety").each(function(){animationScene=new r.Scene({triggerElement:this,triggerHook:"onCenter",reverse:!1,offset:0}).on("start",function(){var e=o(window),t=e.width();if(t>=1180){var i=-80;o("html, body").animate({scrollTop:o("#data-safety").offset().top+i},1e3)}}.bind(this)).addTo(new r.Controller)}),new s("#panels-mobile .swiper-container",{simulateTouch:!0,loop:!0,speed:1e3,autoHeight:!0,pagination:"#panels-mobile .swiper-pagination"}),new s("#usecases-mobile .swiper-container",{simulateTouch:!0,loop:!0,speed:1e3,autoHeight:!0,pagination:"#usecases-mobile .swiper-pagination"}),o("#panels-desktop").each(function(){animationScene=new r.Scene({triggerElement:this,triggerHook:"onEnter",reverse:!1,offset:100}).on("start",function(){function e(e){var t=document.getElementById("p-tab-"+e);t.checked=!0,o("#panels-desktop .slide1").removeClass("active"),o("#panels-desktop .slide2").removeClass("active"),o("#panels-desktop .slide3").removeClass("active"),o("#panels-desktop .slide4").removeClass("active"),o("#panels-desktop .slide"+e).addClass("active")}function t(t){e(t),clearInterval(n)}e(1);var i=2,n=setInterval(function(){e(i),i<4?i++:i=1},6e3);window.cancelSlider=t}.bind(this)).addTo(new r.Controller)}),o("#usecases-desktop").each(function(){animationScene=new r.Scene({triggerElement:this,triggerHook:"onEnter",reverse:!1,offset:100}).on("start",function(){function e(e){var t=document.getElementById("u-tab-"+e);t.checked=!0,o("#usecases-desktop .slide1").removeClass("active"),o("#usecases-desktop .slide2").removeClass("active"),o("#usecases-desktop .slide3").removeClass("active"),o("#usecases-desktop .slide4").removeClass("active"),o("#usecases-desktop .slide"+e).addClass("active")}function t(t){e(t),clearInterval(n)}e(1);var i=2,n=setInterval(function(){e(i),i<4?i++:i=1},6e3);window.cancelUscaseSlider=t}.bind(this)).addTo(new r.Controller)});var h=o("#range"),u=h.find(".bg1, .bg2"),p=h.find(".switch"),v=document.getElementById("rangevideo"),g=0;p.on("click",function(){p.toggleClass("active"),u.fadeToggle();var e=f.width();e>=1180&&(0===g?c():l())}),o("#range").each(function(){animationScene=new r.Scene({triggerElement:this,triggerHook:"onCenter",reverse:!1,offset:0}).on("start",function(){l()}.bind(this)).addTo(new r.Controller)}),new s("#packshot .swiper-container",{loop:!0,speed:1e3,autoHeight:!0,slidesPerView:2,simulateTouch:!1,breakpoints:{991:{slidesPerView:1,simulateTouch:!0,pagination:"#packshot .swiper-pagination"}}})})},{undefined:void 0}]},{},[1]);