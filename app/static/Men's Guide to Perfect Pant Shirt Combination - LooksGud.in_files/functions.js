var _extends=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};!function(a,b){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.LazyLoad=b()}(this,function(){"use strict";var a={elements_selector:"img",container:window,threshold:300,throttle:150,data_src:"original",data_srcset:"original-set",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_initial:"initial",skip_invisible:!0,callback_load:null,callback_error:null,callback_set:null,callback_processed:null},b=!("onscroll"in window)||/glebot/.test(navigator.userAgent)||/opera mini\/|presto\/|\) gecko|ucweb\//i.test(navigator.userAgent),c=function(a,b){a&&a(b)},d=function(a){return a.getBoundingClientRect().top+window.pageYOffset-a.ownerDocument.documentElement.clientTop},e=function(a,b,c){return(b===window?window.innerHeight+window.pageYOffset:d(b)+b.offsetHeight)<=d(a)-c},f=function(a){return a.getBoundingClientRect().left+window.pageXOffset-a.ownerDocument.documentElement.clientLeft},g=function(a,b,c){var d=window.innerWidth;return(b===window?d+window.pageXOffset:f(b)+d)<=f(a)-c},h=function(a,b,c){return(b===window?window.pageYOffset:d(b))>=d(a)+c+a.offsetHeight},i=function(a,b,c){return(b===window?window.pageXOffset:f(b))>=f(a)+c+a.offsetWidth},j=function(a,b,c){return!(e(a,b,c)||h(a,b,c)||g(a,b,c)||i(a,b,c))},k=function(a,b){var c=new a(b),d=new CustomEvent("LazyLoad::Initialized",{detail:{instance:c}});window.dispatchEvent(d)},l=function(a,b){var c=a.parentElement;if("PICTURE"===c.tagName)for(var d=0;d<c.children.length;d++){var e=c.children[d];if("SOURCE"===e.tagName){var f=e.dataset[b];f&&e.setAttribute("srcset",f)}}},m=function(a,b,c){var d=a.tagName,e=a.dataset[c];if("IMG"===d){l(a,b);var f=a.dataset[b];return f&&a.setAttribute("srcset",f),void(e&&a.setAttribute("src",e))}if("IFRAME"===d)return void(e&&a.setAttribute("src",e));e&&(a.style.backgroundImage="url("+e+")")},n=function(b){this._settings=_extends({},a,b),this._queryOriginNode=this._settings.container===window?document:this._settings.container,this._previousLoopTime=0,this._loopTimeout=null,this._boundHandleScroll=this.handleScroll.bind(this),this._isFirstLoop=!0,window.addEventListener("resize",this._boundHandleScroll),this.update()};n.prototype={_reveal:function(a){var b=this._settings,d=function d(){b&&(a.removeEventListener("load",e),a.removeEventListener("error",d),a.classList.remove(b.class_loading),a.classList.add(b.class_error),c(b.callback_error,a))},e=function e(){b&&(a.classList.remove(b.class_loading),a.classList.add(b.class_loaded),a.removeEventListener("load",e),a.removeEventListener("error",d),c(b.callback_load,a))};"IMG"!==a.tagName&&"IFRAME"!==a.tagName||(a.addEventListener("load",e),a.addEventListener("error",d),a.classList.add(b.class_loading)),m(a,b.data_srcset,b.data_src),c(b.callback_set,a)},_loopThroughElements:function(){var a=this._settings,d=this._elements,e=d?d.length:0,f=void 0,g=[],h=this._isFirstLoop;for(f=0;f<e;f++){var i=d[f];a.skip_invisible&&null===i.offsetParent||(b||j(i,a.container,a.threshold))&&(h&&i.classList.add(a.class_initial),this._reveal(i),g.push(f),i.dataset.wasProcessed=!0)}for(;g.length>0;)d.splice(g.pop(),1),c(a.callback_processed,d.length);0===e&&this._stopScrollHandler(),h&&(this._isFirstLoop=!1)},_purgeElements:function(){var a=this._elements,b=a.length,c=void 0,d=[];for(c=0;c<b;c++){a[c].dataset.wasProcessed&&d.push(c)}for(;d.length>0;)a.splice(d.pop(),1)},_startScrollHandler:function(){this._isHandlingScroll||(this._isHandlingScroll=!0,this._settings.container.addEventListener("scroll",this._boundHandleScroll))},_stopScrollHandler:function(){this._isHandlingScroll&&(this._isHandlingScroll=!1,this._settings.container.removeEventListener("scroll",this._boundHandleScroll))},handleScroll:function(){var a=this,b=this._settings.throttle;0!==b?function(){var c=function(){(new Date).getTime()},d=c(),e=b-(d-a._previousLoopTime);e<=0||e>b?(a._loopTimeout&&(clearTimeout(a._loopTimeout),a._loopTimeout=null),a._previousLoopTime=d,a._loopThroughElements()):a._loopTimeout||(a._loopTimeout=setTimeout(function(){this._previousLoopTime=c(),this._loopTimeout=null,this._loopThroughElements()}.bind(a),e))}():this._loopThroughElements()},update:function(){this._elements=Array.prototype.slice.call(this._queryOriginNode.querySelectorAll(this._settings.elements_selector)),this._purgeElements(),this._loopThroughElements(),this._startScrollHandler()},destroy:function(){window.removeEventListener("resize",this._boundHandleScroll),this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._stopScrollHandler(),this._elements=null,this._queryOriginNode=null,this._settings=null}};var o=window.lazyLoadOptions;return o&&function(a,b){var c=b.length;if(c)for(var d=0;d<c;d++)k(a,b[d]);else k(a,b)}(n,o),n});function fnlazyL(){var myLazyLoad=new LazyLoad({threshold:500,throttle:30,skip_invisible:false});}
if(lazyL)fnlazyL();$(function(){if(myLazyLoad===undefined){var myLazyLoad=new LazyLoad({threshold:500,throttle:30,skip_invisible:false});}
myLazyLoad.update();myLazyLoad.handleScroll();});var BlogItemText='<div class="p_thumb"><a href="https://www.looksgud.in/{{I_url}}" title="{{name}}" target="_blank"><img alt="{{name}}" src="{{Img300}}"><div class="buy_item"><div class="price"><span>{{Price}} </span><strike>{{MRP}}</strike></div><div class="buy"><button>Buy Now</button></div></div><div class="expert_like">{{Expert}}</div></a></div>';function viewitem(url,this1){var div=jQuery(this1).closest('.blog_products').attr('id');doAnAjax(url,function(ItemJson){var BlogItem=new Array();var blog_text='';if(ItemJson!==null){BlogItem=JSON.parse(ItemJson);if(BlogItem){jQuery.each(BlogItem,function(k2,v2){jQuery.each(v2.Item,function(k1,v1){t=BlogItemText;jQuery.each(v1,function(k,v){regex=new RegExp('{{'+k+'}}',"g");t=t.replace(regex,v);});blog_text=blog_text+t;});if(v2.next_page){blog_text=blog_text+"<div class='clearfix'></div><button class='mui-btn mui-btn--primary' id='btn_loadmore' onclick=viewitem('"+v2.next_page+"',this);>Load More</button>";}});}
jQuery(this1).remove();jQuery('#'+div).append(blog_text);}});}
function doAnAjax(newUrl,callBack){jQuery.ajax({url:newUrl,async:true,dataType:'html',type:"GET",cache:true,success:function(data){return callBack(data);}});}
$(function(){jQuery('#content #primary #main .post .entry-content a img').each(function(i){var $this=jQuery(this),url=$this.parents('a').attr('href');if(url.indexOf('/blog/')==-1&&url.indexOf('utm_medium=banner')==-1&&(url.indexOf('http')==-1||url.indexOf('//www.looksgud.in/')!=-1)&&!$this.parents('a').hasClass('blogproduct')){$this.after('<span class="prLinkBtn">Buy Now</a>');$this.parents('a').addClass('prLink').attr('href',url);}});jQuery(document).ready(function(t){t(".ts-fab-tabs > div").hide(),t(".ts-fab-tabs > div:first-child").show(),t(".ts-fab-list li:first-child").addClass("active"),t(".ts-fab-list li a").click(function(){t(this).closest(".ts-fab-wrapper").find("li").removeClass("active"),t(this).parent().addClass("active");var s=t(this).attr("href");return-1!=s.indexOf("#")&&(currentTabExp=s.split("#"),s="#"+currentTabExp[1]),t(this).closest(".ts-fab-wrapper").find(".ts-fab-tabs > div").hide(),t(s).show(),!1})});var ResponsiveMenu={trigger:'#responsive-menu-button',animationSpeed:200,breakpoint:760,pushButton:'off',animationType:'push',animationSide:'left',pageWrapper:'',isOpen:false,triggerTypes:'click',activeClass:'is-active',container:'#responsive-menu-container',openClass:'responsive-menu-open',accordion:'off',activeArrow:'▲',inactiveArrow:'▼',wrapper:'#responsive-menu-wrapper',closeOnBodyClick:'off',closeOnLinkClick:'off',itemTriggerSubMenu:'off',linkElement:'.responsive-menu-item-link',openMenu:function(){$(this.trigger).addClass(this.activeClass);$('html').addClass(this.openClass);$('.responsive-menu-button-icon-active').hide();$('.responsive-menu-button-icon-inactive').show();this.setWrapperTranslate();this.isOpen=true},closeMenu:function(){$(this.trigger).removeClass(this.activeClass);$('html').removeClass(this.openClass);$('.responsive-menu-button-icon-inactive').hide();$('.responsive-menu-button-icon-active').show();this.clearWrapperTranslate();this.isOpen=false},triggerMenu:function(){this.isOpen?this.closeMenu():this.openMenu()},triggerSubArrow:function(subarrow){var sub_menu=$(subarrow).parent().next('.responsive-menu-submenu');var self=this;if(this.accordion=='on'){var top_siblings=sub_menu.parents('.responsive-menu-item-has-children').last().siblings('.responsive-menu-item-has-children');var first_siblings=sub_menu.parents('.responsive-menu-item-has-children').first().siblings('.responsive-menu-item-has-children');top_siblings.children('.responsive-menu-submenu').slideUp(200,'linear').removeClass('responsive-menu-submenu-open');top_siblings.each(function(){$(this).find('.responsive-menu-subarrow').first().html(self.inactiveArrow);$(this).find('.responsive-menu-subarrow').first().removeClass('responsive-menu-subarrow-active')});first_siblings.children('.responsive-menu-submenu').slideUp(200,'linear').removeClass('responsive-menu-submenu-open');first_siblings.each(function(){$(this).find('.responsive-menu-subarrow').first().html(self.inactiveArrow);$(this).find('.responsive-menu-subarrow').first().removeClass('responsive-menu-subarrow-active')})}if(sub_menu.hasClass('responsive-menu-submenu-open')){sub_menu.slideUp(200,'linear').removeClass('responsive-menu-submenu-open');$(subarrow).html(this.inactiveArrow);$(subarrow).removeClass('responsive-menu-subarrow-active')}else{sub_menu.slideDown(200,'linear').addClass('responsive-menu-submenu-open');$(subarrow).html(this.activeArrow);$(subarrow).addClass('responsive-menu-subarrow-active')}},menuHeight:function(){return $(this.container).height()},menuWidth:function(){return $(this.container).width()},wrapperHeight:function(){return $(this.wrapper).height()},setWrapperTranslate:function(){switch(this.animationSide){case'left':translate='translateX('+this.menuWidth()+'px)';break;case'right':translate='translateX(-'+this.menuWidth()+'px)';break;case'top':translate='translateY('+this.wrapperHeight()+'px)';break;case'bottom':translate='translateY(-'+this.menuHeight()+'px)';break}if(this.animationType=='push'){$(this.pageWrapper).css({'transform':translate});$('html, body').css('overflow-x','hidden')}if(this.pushButton=='on'){$('#responsive-menu-button').css({'transform':translate})}},clearWrapperTranslate:function(){var self=this;if(this.animationType=='push'){$(this.pageWrapper).css({'transform':''});setTimeout(function(){$('html, body').css('overflow-x','')},self.animationSpeed)}if(this.pushButton=='on'){$('#responsive-menu-button').css({'transform':''})}},init:function(){var self=this;$(this.trigger).on(this.triggerTypes,function(e){e.stopPropagation();self.triggerMenu()});$('.responsive-menu-subarrow').on('click',function(e){e.preventDefault();e.stopPropagation();self.triggerSubArrow(this)});$(window).resize(function(){if($(window).width()>self.breakpoint){if(self.isOpen){self.closeMenu()}}else{if($('.responsive-menu-open').length>0){self.setWrapperTranslate()}}});if(this.closeOnLinkClick=='on'){$(this.linkElement).on('click',function(e){e.preventDefault();if(self.itemTriggerSubMenu=='on'&&$(this).is('.responsive-menu-item-has-children > '+self.linkElement)){return}old_href=$(this).attr('href');old_target=typeof $(this).attr('target')=='undefined'?'_self':$(this).attr('target');if(self.isOpen){if($(e.target).closest('.responsive-menu-subarrow').length){return}self.closeMenu();setTimeout(function(){window.open(old_href,old_target)},self.animationSpeed)}})}if(this.closeOnBodyClick=='on'){$(document).on('click','body',function(e){if(self.isOpen){if($(e.target).closest('#responsive-menu-container').length||$(e.target).closest('#responsive-menu-button').length){return}}self.closeMenu()})}if(this.itemTriggerSubMenu=='on'){$('.responsive-menu-item-has-children > '+this.linkElement).on('click',function(e){e.preventDefault();self.triggerSubArrow($(this).children('.responsive-menu-subarrow').first())})}}};ResponsiveMenu.init();});