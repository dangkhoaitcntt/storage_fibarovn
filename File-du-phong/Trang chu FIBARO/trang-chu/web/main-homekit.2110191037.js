!function e(n,t,i){function o(a,s){if(!t[a]){if(!n[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(r)return r(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var f=t[a]={exports:{}};n[a][0].call(f.exports,function(e){var t=n[a][1][e];return o(t?t:e)},f,f.exports,e,n,t,i)}return t[a].exports}for(var r="function"==typeof require&&require,a=0;a<i.length;a++)o(i[a]);return o}({1:[function(e,n,t){var i=e("jquery"),o=e("scrollmagic"),r=e("swiper");i(function(){function e(){a.fadeOut(100)}function n(){a.fadeIn(100)}function t(){s.prop("checked",!1),a.removeAttr("style")}var a=i("nav, .links"),s=i("#menu-switch"),c=i("nav a"),l="screen and (min-width: 1200px)";if(s.on("click",function(){i(this).prop("checked")?n():e()}),i(".site-wrapper").hasClass("homekit-landing")){c.on("click",function(e){e.preventDefault(),Modernizr.mq(l)||t();var n=i(this),o=n.get(0);TweenMax.to(window,1,{scrollTo:o.hash,ease:Power2.easeInOut,onComplete:function(){c.removeClass("current"),n.addClass("current")}})});var f=i(".section-bin, #mobile-app"),d=i("#header, #devices, #devices-slider"),u=new o.Controller;f.each(function(){var e=i(this);new o.Scene({triggerElement:e.get(0),triggerHook:.05}).on("start",function(){c.removeClass("current"),c.filter('[data-section="'+e.find("h2").get(0).id+'"]').addClass("current")}).addTo(u)}),d.each(function(){new o.Scene({triggerElement:this}).on("start",function(){c.removeClass("current")}).addTo(u)});var p=new r("#mobile-app .swiper-container",{simulateTouch:!1,effect:"fade",autoplay:3e3,speed:500}),v=i("#mobile-app .actions a");p.disableTouchControl(),p.on("slideChangeStart",function(e){v.removeClass("active"),v.filter('[data-swiper-item="'+e.activeIndex+'"]').addClass("active")}),v.on("click",function(e){e.preventDefault(),p.slideTo(i(this).attr("data-swiper-item"))})}if(i(".site-wrapper").hasClass("homekit-faq")){i(".faq-item h2").on("click",function(){i(this).parent().toggleClass("active")}),i.expr[":"].casecontains=function(e,n,t){return i(e).text().toUpperCase().indexOf(t[3].toUpperCase())>=0};var h=i(".faq-item");i("#header input").on("keyup",function(){var e=i(this).val();return 0===e.length?void h.show().removeClass("filtered last"):(h.show().removeClass("last").addClass("filtered").not(":casecontains("+e+")").hide().removeClass("filtered last"),void h.filter(":visible").last().addClass("last"))})}var m=function(e){document.cookie=e+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"};m("hkf-cookie-info-closed");var k=HKCookies.read("hkf-cookie-info-closed-2018"),C=i("#cookie-info");k||C.show(),C.find(".close, .cookie-ok").on("click",function(e){e.preventDefault(),HKCookies.create("hkf-cookie-info-closed-2018",1,100),C.hide()}),i(window).on("resize",function(){Modernizr.mq(l)&&t()})})},{undefined:void 0}]},{},[1]);