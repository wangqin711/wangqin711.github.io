!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(e,t,n){var r;(r=function(e,t,n){n.exports={getComment:function r(e,t,n){var o,a=(t||document.body).childNodes;if(n=n?--n:10)for(var i=0;o=a[i++];)8===o.nodeType?e&&e(o):o.childNodes.length>0&&r(e,o,n)},loadScript:function(e,t){var n=document.createElement("script");n.src=e+(e.indexOf("?")>0?"&":"?")+"_="+Math.random(),t?t.parentNode.insertBefore(n,t):document.getElementsByTagName("head")[0].appendChild(n)},trim:function(e){return e?(""+e).replace(/\s/g,""):""},parseJSON:function(e){return window.JSON?JSON.parse(e):Function("return "+e)()},getCookie:function(e){var t="; "+document.cookie,n=t.split("; "+e+"=");return 2===n.length?n.pop().split(";").shift():""},setCookie:function(e,t){document.cookie=e+"="+t},indexOf:function(e,t){return e.indexOf?e.indexOf(t):"#"+e.join("#")+"#".indexOf("#"+t+"#")},addEventListener:function(e,t,n){document.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)},removeEventListener:function(e,t,n){document.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent("on"+t,n)},log:function(e,t){var n,r;t=t||"|";for(var o=this.isArray(e)?e:e.split(t);n=o.shift();)r=new Image,r.src=n},isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},strTransformDom:function(e){var t=document.createElement("div");return t.innerHTML=e,Array.prototype.slice.call(t.children)},setCookieItem:function(e,t,n,r,o,a){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var i="";if(n)switch(n.constructor){case Number:i=n===Infinity?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+n;break;case String:i="; expires="+n;break;case Date:i="; expires="+n.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+i+(o?"; domain="+o:"")+(r?"; path="+r:"")+(a?"; secure":""),!0}}}.call(t,n,t,e))!==undefined&&(e.exports=r)},function(e,t,n){var r;(r=function(e,t,n){n.exports={adWord:"\u5e7f\u544a",adIcon:"//pic.zol-img.com.cn/201801/ad_0125.png",adIconWidth:"22",adIconHeight:"12",view:"//ca.zol.com.cn/view?g=",extension:"//p.zol-img.com.cn/da/",ipareaUrl:"//stat.zol.com.cn/adrs/iparea.php",ipareaUrlCros:"//stat.zol.com.cn/adrs/iparea_cros.php",pvtest:"//impa.zol.com.cn/?t={time}&event={event}&ip_ck={ipck}&url={url}",keyword:"_bms_",beforFun:"bms_befor_fun",afterFun:"bms_after_fun",noGet:"bms_no_parse",noReq:"bms_no_request",scriptId:"zol_bms",scriptChannel:"data-channel"}}.call(t,n,t,e))!==undefined&&(e.exports=r)},function(e,t,n){var r;(r=function(e,t,n){n.exports=function r(e,t,n){var o;if(!e||!t)return e;if(e.length&&e[0]){for(var a=0;a<e.length;a++)r(e[a],t,n);return e}if(o=e,1!==o.nodeType)return o;if("string"!=typeof t||n!==undefined){if("string"!=typeof t)for(var i in t)o.style[i]=t[i];else o.style[t]=n;return o}return o.style[t]}}.call(t,n,t,e))!==undefined&&(e.exports=r)},function(e,t,n){var r;(r=function(e,t,n){function r(e,t){this.adBar=e,this.adComment=t}r.prototype.create=function(e){var t=this.adBar,n=this.adBar.conf,r=this.adComment,o=e.dom.createElement("iframe",{src:n.src,marginheight:0,marginwidth:0,frameBorder:0,scrolling:"no"},{width:n.width+"px",height:n.height+"px"}),a=e.dom.createElement("div",{"class":"gmine_ad"});return e.ad.addAdMargin(a,n),a.appendChild(o),e.ad.addAdIcon(a,t),{elements:[a],height:n.height,appendAfterFn:function(){e.ad.statAdBar(a,r,t)}}},n.exports=r}.call(t,n,t,e))!==undefined&&(e.exports=r)},function(e,t,n){var r;(r=function(e,t,r){var o,a=n(0),i=n(1);r.exports={ua:window.navigator.userAgent,host:document.location.host,href:window.location.href,location:function(){var e,t,n,r,c,d;if(o)return o;if(e=a.getCookie("userLocationId"),t=a.getCookie("userProvinceId"),c=a.getCookie("z_pro_city"),!e||!t||!c){try{var s=new XMLHttpRequest;s.open("GET",i.ipareaUrlCros,!1),s.onreadystatechange=function(){if(4==s.readyState){var e=document.createElement("script");e.appendChild(document.createTextNode(s.responseText)),document.head.appendChild(e)}},s.send(null)}catch(l){a.loadScript(i.ipareaUrlCros)}if("undefined"!=typeof ad_sheng_str&&ad_sheng_str){var p=(new Date).getTime();p=new Date(p+144e5),c="s_provice="+ad_sheng_str+"&s_city="+ad_shi_str,a.setCookieItem("z_pro_city",c,p,"/","zol.com.cn"),a.setCookieItem("userProvinceId",adProvinceId,p,"/","zol.com.cn"),a.setCookieItem("userLocationId",adLocationId,p,"/","zol.com.cn"),c=encodeURIComponent(c)}}return d=decodeURIComponent(c).split("&"),d.length>1&&(n=d[1].replace("s_city=",""),r=d[0].replace("s_provice=","")),"null"==n&&(n=""),"juyuwang"==r&&(r="beijing"),o={cityId:e,provId:t,cityStr:n,provStr:r}},pvtest:function(e){var t=decodeURIComponent(a.getCookie("ip_ck"));return i.pvtest.replace("{ipck}",t).replace("{time}",Date.now()).replace("{event}",e).replace("{url}",this.href)},getChannel:function(){var e=document.getElementById(i.scriptId);if(e){var t=e.getAttribute(i.scriptChannel);if(t)return t.split(",")}}}}.call(t,n,t,e))!==undefined&&(e.exports=r)},function(e,t,n){var r={baidu:n(6),code:n(7),pic:n(8),iframe:n(3),flash:n(9),iframe_code:n(10)},o={txt:n(11),code:n(12),normal:n(13)};n(14)(o,r)},function(e,t,n){var r;(r=function(e,t,n){function r(e,t){var n=t.dom.createElement("div",{id:"cpro_"+e.cpro_id});(window.cproArray=window.cproArray||[]).push({id:e.cpro_id});var r=t.dom.createElement("script");return r.src="//cpro.zol.com.cn/cpro/ui/c.js",[n,r]}function o(e,t){var n=t.dom.createElement("div",{id:"cpro_"+e.cpro_id});(window.cpro_mobile_slot=window.cpro_mobile_slot||[]).push({id:e.cpro_id});var r=t.dom.createElement("script");return r.src="//cpro.zol.com.cn/cpro/ui/cm.js",[n,r]}function a(e,t){var n=t.dom.createElement("script");n.text='var cpro_id="'+e.cpro_id+'";';var r=t.dom.createElement("script");return r.src="//cpro.zol.com.cn/cpro/ui/mi.js",[n,r]}function i(e,t){var n=t.dom.createElement("div",{id:e.cpro_id}),r=t.dom.createElement("script");return r.src=e.script_src,[n,r]}function c(e,t){this.adBar=e,this.adComment=t}c.prototype.create=function(e){var t=[],n=this.adBar,c=this.adBar.conf,d=this.adComment,s=this.adComment.parentNode.getAttribute("class");return s=s?s+" gmine_ad":"gmine_ad",e.dom.attr(this.adComment.parentNode,"class",s),1===c.baidu_type?t=r(c,e):2===c.baidu_type?t=o(c,e):3===c.baidu_type?t=a(c,e):4===c.baidu_type&&(t=i(c,e)),{elements:t,height:c.height,appendAfterFn:function(){e.ad.statAdBar(t[0],d,n)}}},n.exports=c}.call(t,n,t,e))!==undefined&&(e.exports=r)},function(e,t,n){var r;(r=function(e,t,n){function r(e,t){this.adBar=e,this.adComment=t}r.prototype.create=function(e){var t,n,r,o,a,i,c=!0,d=[],s=this.adBar,p=this.adBar.conf,l=this.adComment,u=[],f=e.dom.createElement("div");e.css(f,"display","none"),f.innerHTML='<span style="display:none">code</span>'+p.code,document.getElementsByTagName("body")[0].appendChild(f),i=f.getElementsByTagName("script");for(var m=0,h=i.length;m<h;m++){t=i[m],r=e.dom.createElement("script"),t.src?r.src=t.src:r.text=t.innerHTML;for(var v=t.attributes,m=0,g=v.length;m<g;m++){var _=v[m];r.setAttribute(_.nodeName,_.nodeValue)}t.parentNode.appendChild(r),u.push(t)}if(u.length>0)for(var m=0;m<u.length;m++)u[m].parentNode.removeChild(u[m]);a=f.getElementsByTagName("style");for(var m=0,h=a.length;m<h;m++)t=a[m],n=e.dom.createElement("style"),n.type="text/css",n.styleSheet?n.styleSheet.cssText=t.innerHTML:n.appendChild(document.createTextNode(t.innerHTML)),t.parentNode.appendChild(n),t.parentNode.removeChild(t);for(var m=1;m<f.childNodes.length;m++)t=f.childNodes[m],"SCRIPT"!==t.nodeName&&"STYLE"!==t.nodeName&&c&&(c=!1,o=t),d.push(t);return f.parentNode.removeChild(f),{elements:d,height:p.height,appendAfterFn:function(){e.ad.statAdBar(o,l,s)}}},n.exports=r}.call(t,n,t,e))!==undefined&&(e.exports=r)},function(e,t,n){var r;(r=function(e,t,n){function r(e,t){this.adBar=e,this.adComment=t}r.prototype.create=function(e){var t=this.adBar,n=this.adBar.conf,r=this.adComment,o=e.dom.createElement("a",{"class":"gmine_ad",href:n.click_url,target:"1"===n.is_self?"_self":"_blank"},{display:"block",width:n.width+"px",height:n.height+"px"});e.ad.addAdMargin(o,n);var a=new Image(n.width,n.height);return a.src=n.src,e.dom.attr(a,"class","ad-img"),o.appendChild(a),e.ad.addAdIcon(o,t),{elements:[o],height:n.height,appendAfterFn:function(){r&&e.ad.statAdBar(o,r,t)}}},n.exports=r}.call(t,n,t,e))!==undefined&&(e.exports=r)},function(e,t,n){var r;(r=function(e,t,n){function r(e,t){this.adBar=e,this.adComment=t}r.prototype.create=function(e){var t=this.adBar,n=this.adBar.conf,r=this.adComment,o=n.width,a=n.height,i=['<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="'+o+'" height="'+a+'" align="middle">','<param name="movie" value="'+n.src+'"/>','<param name="wmode" value="'+("1"===n.is_transparent?"transparent":"opaque")+'">','<param name="allowscriptaccess" value="always"/>',"\x3c!--[if !IE]>--\x3e",'<object type="application/x-shockwave-flash" data="'+n.src+'" width="'+o+'" height="'+a+'">','<param name="movie" value="'+n.src+'"/>','<param name="wmode" value="'+("1"===n.is_transparent?"transparent":"opaque")+'">','<param name="allowscriptaccess" value="always"/>',"</object>","\x3c!--<![endif]--\x3e","</object>"],c=e.dom.createElement("div",{"class":"gmine_ad"},{width:o+"px",height:a+"px"});return e.ad.addAdMargin(c,n),c.innerHTML=i.join(""),e.ad.addAdIcon(c,t),{elements:[c],height:n.height,appendAfterFn:function(){e.ad.statAdBar(c,r,t)}}},n.exports=r}.call(t,n,t,e))!==undefined&&(e.exports=r)},function(e,t,n){var r;(r=function(e,t,r){r.exports=n(3)}.call(t,n,t,e))!==undefined&&(e.exports=r)},function(e,t,n){var r;(r=function(e,t,n){function r(e,t){this.adBar=e,this.adComment=t}r.prototype.create=function(e){var t=this.adBar,n=t.conf,r=this.adComment,o=n.click_url||"javascript:;",a=e.dom.createElement("a",{href:o,target:n.is_self?"_self":"_blank"});return a.innerHTML=n.title,e.ad.addAdIcon(a,t),{elements:[a],height:n.height,appendAfterFn:function(){e.ad.statAdBar(a,r,t)}}},n.exports=function(e,t){return r}}.call(t,n,t,e))!==undefined&&(e.exports=r)},function(e,t,n){var r;(r=function(e,t,n){n.exports=function(e,t){return t[e.conf.type||""]||t.code}}.call(t,n,t,e))!==undefined&&(e.exports=r)},function(e,t,n){var r;(r=function(e,t,n){n.exports=function(e,t){return t[e.conf.type]||!1}}.call(t,n,t,e))!==undefined&&(e.exports=r)},function(e,t,n){var r;(r=function(e,t,r){function o(e){var t,n=[];e=""+e;var r=e.split(",");if(I){for(var o=0,a=r.length;o<a;o++)for(var i=0,c=I.length;i<c;i++)t=I[i],n.push(r[o]+":"+t);return window._bms_test&&_.fun.loadScript("//0.0.0.0:8088/testplace?n="+e+"&g="+n.join("`")),n.join("`")}return e.replace(/,/g,"`")}function a(e){var t,n,r,a=w.keyword;return r=_.fun.trim(e.nodeValue),r&&r.substr(0,a.length)===a&&(n=_.fun.parseJSON(r.replace(a,"")),t=n.place?o(n.place):"",n.id&&C[n.id]&&(t=""+C[n.id](n.place)),e.pagePlace=t,e.pageTid=n.tid,e.pageFunId=n.id),t&&_.ad.statPlace(e),t}function i(){var e=[];return _.fun.getComment(function(t){var n=a(t);n&&(e.push(n),y.push(t))}),e}function c(e,t){if(e.length>0){var n=w.view+e.join(",");t&&(n+="&pid="+t),_.fun.loadScript(n)}}function d(e,t){if(e){for(var n=t.adBar,r=t.adComment,o=new e(n,r).create(_),a=0;a<o.elements.length;a++)r.parentNode.appendChild(o.elements[a]);o.appendAfterFn&&o.appendAfterFn(),r.parentNode.adHeight||(r.parentNode.adHeight=0),r.parentNode.adHeight+=+o.height+10,27263===n.loc_id&&document.getElementById("mv_ad_dom")&&l("qhad-article")}}function s(e,t){var n={};e=_.ad.sort(e);for(var r=0;r<e.length;r++){var o=e[r];("number"==typeof o.rotate||_.ad.rotate(o,n))&&p(o,t)}}function p(e,t){var n=e.type,r={adBar:e,adComment:t};_.ad.checkOS(e)&&_.ad.checkCity(e)&&_.ad.checkProduct(e)&&(v[n]?d(v[n](e,g),r):b[n]?b[n].push(r):(b[n]=[r],l(n)))}function l(e){var t=w.extension+e+".js";_.fun.loadScript(t)}function u(e,t,n){var r,o;if(t&&x[t])return r=e[0],o=x[t],void(r.length>0&&(o.pageValidPlace=n[0],s(r,o)));for(var a=0;a<e.length;a++)r=e[a],o=y.shift(),o.pageValidPlace=n[a],o.pageFunId&&k[o.pageFunId]?k[o.pageFunId](new f(r,o)):r.length>0&&s(r,o)}function f(e,t){this.adPlace=e,this.adComment=t}function m(e,t){for(var n=t(g),r=0;r<b[e].length;r++){var o=b[e][r];d(n,o)}b[e].push=function(e){d(n,e)}}function h(e,t){t?a(e):t=a(e),t&&(x[t]=e,c([t],t))}var v,g,_=n(15),w=n(1),y=[],x={},b={},C=window[w.beforFun]||{},k=window[w.afterFun]||{},I=_.user.getChannel();f.prototype.render=function(){s(this.adPlace,this.adComment)},f.prototype.getHeight=function(){return this.adComment.parentNode.adHeight},window._da_={cb:u,ec:m,render:h,util:_},window._da_.testplace=function(e,t){t>0?console.log("%c "+e+" ok!","font-size:20px;color:green",t):console.log("%c "+e+" error!","font-size:20px;color:red",t)},r.exports=function(e,t){var n;v=e,g=t,window[w.noGet]||(n=i()),!window[w.noReq]&&n&&c(n)}}.call(t,n,t,e))!==undefined&&(e.exports=r)},function(e,t,n){var r;(r=function(e,t,r){r.exports={ad:n(16),css:n(2),fun:n(0),dom:n(17),user:n(4)}}.call(t,n,t,e))!==undefined&&(e.exports=r)},function(e,t,n){var r;(r=function(e,t,r){function o(e,t){var n=e.getBoundingClientRect();return!(n.top+(n.bottom-n.top)*t>p||n.bottom<0)}var a,i=n(0),c=n(4),d=n(2),s=n(1),p="innerHeight"in window?window.innerHeight:document.documentElement.clientHeight;r.exports={sort:function(e){for(var t=[],n=[],r=0;r<e.length;r++){var o=e[r];"1"===o.is_random?n.push(o):t[r]=o}n.sort(function(){return.5>Math.random()});for(var a=0;a<t.length;a++)t[a]||(n[a]=n.pop());return t},rotate:function(e,t){if(e.rotate.length>0){if(!t[e.rotate[0]]){var n="bms_rotate"+e.rotate[0],r=i.getCookie(n);if(r=r?r>e.rotate.length-1?0:r:0,""+e.bid===e.rotate[r])return i.setCookie(n,++r),t[e.rotate[0]]=1,!0}return!1}return!0},checkOS:function(e){var t,n,r,o=e.conf;if(o.platform&&-1===i.indexOf(o.platform,"0")){for(var a=0;r=o.platform[a++];){switch(n=1,r+""){case"1":t=/Android/;break;case"2":t=/iPhone/;break;case"4":n="lib.wap.zol.com.cn"===c.host,t=/Android/;break;case"8":n="lib.wap.zol.com.cn"===c.host,t=/iPhone/}if(n&&t.test(c.ua))return!0}return!1}return!0},checkCity:function(e){var t,n,r;if(e.province){r=c.location(),t=e.province.split("{ZOL}"),n=e.city.split("{ZOL}");for(var o=0,a=t.length;o<a;o++)if(r.provStr===t[o]&&(!n[o]||n[o]===r.cityStr))return!0;return!1}return!0},addAdIcon:function(e,t){var n,r=t.conf;"1"===t.adtag&&(a?n=a.cloneNode():(n=new Image(s.adIconWidth,s.adIconHeight),n.src=s.adIcon,d(n,{left:"0",bottom:"0",border:"0",position:"absolute",width:s.adIconWidth+"px",height:s.adIconHeight+"px"}),a=n),d(e,{position:"relative",width:r.width+"px",height:r.height+"px"}),e.appendChild(n))},addAdMargin:function(e,t){t.top>0?d(e,"marginTop",t.top+"px"):t.bottom>0&&d(e,"marginBottom",t.bottom+"px")},clkTrack:function(e,t){i.addEventListener(e,"click",function(){i.log(t)})},zolClkTrack:function(e,t){this.clkTrack(e,c.pvtest("bms,"+t.loc_id+","+t.bid+",click"))},impTrack:function(e,t){function n(){o(e,.2)&&(i.removeEventListener(window,"scroll",n),i.log(t))}o(e,.2)?i.log(t):i.addEventListener(window,"scroll",n)},zolImpTrack:function(e,t){this.impTrack(e,c.pvtest("bms,"+t.loc_id+","+t.bid+",show"))},zpv:function(e){e.dom&&(window._zpv_events=window._zpv_events||[]).push(e)},getZpvPrefix:function(e,t){return"bms,"+e.pagePlace+","+t.bid},getZpvSuffix:function(e){return""+e.pagePlace===e.pageValidPlace?"":","+e.pageValidPlace},checkProduct:function(e){var t,n,r=1,o=e.product_id;if(o){r=0;for(var a=0;a<o.length;a++)if(n=""+o[a][0],t=""+o[a][1],window.temp_hardware_id===n&&window.temp_doc_manu_id===t){r=1;break}}return r},statPlace:function(e){var t=e.pagePlace+"///";this.zpv({range:"bms_placeholder",dom:e.parentNode,type:"load",name:"bms/load/"+t}),this.zpv({range:"bms_placeholder",dom:e.parentNode,type:"inview",name:"bms/inview/"+t})},statAdBar:function(e,t,n){var r=t.pagePlace+"/"+n.bid+"/"+t.pageValidPlace+"/"+n.loc_id;this.zpv({range:"bms_placeholder",dom:e,type:"inview",name:"bms/show/"+r}),this.zpv({range:"bms_placeholder",dom:e,type:"click",name:"bms/click/"+r}),this.statBms(n),this.statBms2(n)},statBms:function(e){var t=(new Date).getTime(),n=document.createElement("iframe"),r="//ca.zol.com.cn/rpv?s=zol&on=zol&id="+e.bid+"&tmp="+t;n.src=r,n.width=0,n.height=0,n.style.display="none",document.body.appendChild(n)},statBms2:function(e){if(e.conf.view_url){var t=(new Date).getTime(),n=document.createElement("iframe"),r=e.conf.view_url+"&tmp="+t;n.src=r,n.width=0,n.height=0,n.style.display="none",document.body.appendChild(n)}}}}.call(t,n,t,e))!==undefined&&(e.exports=r)},function(e,t,n){var r;(r=function(e,t,r){function o(e,t,n){"id"===t?e.id=n:e.setAttribute(t,n)}function a(e,t){return"id"===t?e.id:e.getAttribute(t)}var i=n(2);r.exports={createElement:function(e,t,n){var r=document.createElement(e);return t&&this.attr(r,t),n&&i(r,n),r},attr:function c(e,t,n){var r;if(!e||!t)return e;if(e.length&&e[0]){for(var i=0;i<e.length;i++)c(e[i],t,n);return e}if(r=e,1!==r.nodeType)return r;if("string"!=typeof t||n!==undefined){if("string"!=typeof t)for(var d in t)o(r,d,t[d]);else o(r,t,n);return r}return a(t)}}}.call(t,n,t,e))!==undefined&&(e.exports=r)}]);