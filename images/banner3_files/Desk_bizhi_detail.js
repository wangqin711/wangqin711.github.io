var $win=$(window);var $document=$(document);var $body=$("body");var $deskGlobalObj={prevPicBtn:$("#pagePrev"),prevPicArea:$("#prevPic"),nextPicBtn:$("#pageNext"),nextPicArea:$("#nextPic"),scanBtn:$("#scanning"),downPicBtn:$("#downdisp"),layerDownPic:$("#downIt"),scanLayer:$(".erweima-box"),thumbPrevBtn:$("#prevGroup"),thumbNextBtn:$("#nextGroup"),thumbUl:$("#showImg"),curPicSpan:$(".current-num"),mainPic:$("#bigImg"),fullDeskbox:$("#layerDeskbox"),fullDeskPic:$("#layerDeskPic"),fullShowBtn:$(".PicBigBtn"),fullHideBtn:$(".closed-icon"),pauseBtn:$(".pause-icon"),playBtn:$(".play-icon"),fullDownBtn:$(".down-icon"),fullPrevBtn:$(".indexbody-left"),fullNextBtn:$(".indexbody-right"),photoPrevBtn:$("#photo-prev"),photoNextBtn:$("#photo-next"),taboolaBelowBtn:$("#taboola-below-article-thumbnails"),taboolaBelowBtn2:$("#taboola-below-gallery-thumbnails-2nd")};var zolDesk={recResPic:function(){var showRes,$tempDownInfo,res=$deskGlobalConfig.res,resAll=$deskGlobalConfig.resAll,machineId=$deskGlobalConfig.machineId,picId=$deskGlobalConfig.picId;recDownUrl="";if($.inArray(res,resAll)!=-1){recDownUrl=zolDesk.makeDownUrl(res,picId);showRes=res;if($.inArray(machineId,[2,4])!=-1){$tempDownInfo={"href":recDownUrl}}else{$tempDownInfo={"href":recDownUrl,"title":"\u70b9\u51fb\u4e0b\u8f7d\u9002\u5408\u8be5\u5c4f\u5e55\u5206\u8fa8\u7387\u7684\u58c1\u7eb8"}}}else{if(resAll){$.each(resAll,function(i,n){if(resAll[i].split("x")[0]>=res.split("x")[0]){index=i;if(i>0){index=index-1}showRes=resAll[index];return}});if(!showRes){showRes=resAll[0]}}if(!showRes){showRes="960x600"}recDownUrl=zolDesk.makeDownUrl(showRes,picId);$tempDownInfo={"href":recDownUrl,"title":"\u70b9\u51fb\u4e0b\u8f7d\u9002\u5408\u8be5\u5c4f\u5e55\u5206\u8fa8\u7387\u7684\u58c1\u7eb8"}}$deskGlobalConfig.recDownUrl=recDownUrl;$deskGlobalConfig.showRes=showRes;$deskGlobalObj.downPicBtn.attr($tempDownInfo);$(".qrRes").text("\u58c1\u7eb8\u5927\u5c0f("+showRes+")");$("#downIt").attr($tempDownInfo)},getResPic:function(idx){var showRes,res=$deskGlobalConfig.res,resAll=$deskGlobalConfig.resAll,machineId=$deskGlobalConfig.machineId,picId=idx;recDownUrl="";if($.inArray(res,resAll)!=-1){recDownUrl=zolDesk.makeDownUrl(res,picId);showRes=res;if($.inArray(machineId,[2,4])!=-1){$tempDownInfo={"href":recDownUrl}}else{$tempDownInfo={"href":recDownUrl,"title":"\u70b9\u51fb\u4e0b\u8f7d\u9002\u5408\u8be5\u5c4f\u5e55\u5206\u8fa8\u7387\u7684\u58c1\u7eb8"}}}else{if(resAll){$.each(resAll,function(i,n){if(resAll[i].split("x")[0]>=res.split("x")[0]){index=i;if(i>0){index=index-1}showRes=resAll[index];return}})}if(!showRes){showRes="960x600"}recDownUrl=zolDesk.makeDownUrl(showRes,picId);$tempDownInfo={"href":recDownUrl,"title":"\u70b9\u51fb\u4e0b\u8f7d\u9002\u5408\u8be5\u5c4f\u5e55\u5206\u8fa8\u7387\u7684\u58c1\u7eb8"}}return showRes},makeDownUrl:function(res,pid){return"/down/"+res+"_"+pid+".html"},allBtnEvent:function(){$deskGlobalObj.playBtn.on("click",function(){zolDesk.autoPlaySlide(1)});$deskGlobalObj.pauseBtn.on("click",function(){zolDesk.autoPlaySlide(0)});$deskGlobalObj.fullDownBtn.on("click",function(){window.location.href=$deskGlobalObj.downPicBtn.attr("href")});$deskGlobalObj.fullPrevBtn.on("click",function(){zolDesk.showPic($deskGlobalConfig.picIndex-1)});$deskGlobalObj.fullNextBtn.on("click",function(){zolDesk.showPic($deskGlobalConfig.picIndex+1)});$deskGlobalObj.fullShowBtn.on("click",function(){zolDesk.showFull();zolDesk.showPic($deskGlobalConfig.picIndex)});$deskGlobalObj.fullHideBtn.on("click",function(){zolDesk.hideFull();zolDesk.showPic($deskGlobalConfig.picIndex)});$deskGlobalObj.thumbNextBtn.on("click",function(){zolDesk.thumbSlideRight()});$deskGlobalObj.thumbPrevBtn.on("click",function(){zolDesk.thumbSlideLeft()})},showQrCodeLayer:function(){var timer=null;$deskGlobalObj.scanBtn.hover(function(){timer&&clearTimeout(timer);$deskGlobalObj.scanLayer.show()},function(){timer=setTimeout(function(){$deskGlobalObj.scanLayer.hide()},500);$deskGlobalObj.scanLayer.hover(function(){timer&&clearTimeout(timer);$deskGlobalObj.scanLayer.show()},function(){$deskGlobalObj.scanLayer.hide()})})},surveyQrCodeLayer:function(){var timer=null;$("#downloadToPhone").hover(function(){timer&&clearTimeout(timer);$(".erweima-box-bottom").show()},function(){timer=setTimeout(function(){$(".erweima-box-bottom").hide()},500);$(".erweima-box-bottom").hover(function(){timer&&clearTimeout(timer);$(".erweima-box-bottom").show()},function(){$(".erweima-box-bottom").hide()})})},showDownLayer:function(){var timer=null;$deskGlobalObj.downPicBtn.hover(function(){timer&&clearTimeout(timer);$("#downbox").show()},function(){timer=setTimeout(function(){$("#downbox").hide()},500);$("#downbox").hover(function(){timer&&clearTimeout(timer);$("#downbox").show()},function(){$("#downbox").hide()})})},recShareLayer:function(){var timer=null;$("#share_div").hover(function(){timer&&clearTimeout(timer);$("#sharebox").show()},function(){timer=setTimeout(function(){$("#sharebox").hide()},500);$("#sharebox").hover(function(){timer&&clearTimeout(timer);$("#sharebox").show()},function(){$("#sharebox").hide()})})},pageHover:function(){$(".photo").hover(function(){$(".arrow-bg").stop(true,true).fadeTo(600,0.5);$(".arrow-ico").stop(true,true).fadeIn(600)},function(){$(".arrow-bg").stop(true,true).fadeTo(800,0);$(".arrow-ico").stop(true,true).fadeOut(800)});$("#showImg").find("li").hover(function(){$(this).addClass("lihover").siblings("li").removeClass("lihover")},function(){$(this).removeClass("lihover")});$("#guessYouLikeUl").find("li").hover(function(){$(this).addClass("hover").siblings().removeClass("hover")},function(){$(this).removeClass("hover")});$(".PicGroup-next").hover(function(){$(this).addClass("PicGroup-next-cur")},function(){$(this).removeClass("PicGroup-next-cur")});$(".PicGroup-prev").hover(function(){$(this).addClass("PicGroup-prev-cur")},function(){$(this).removeClass("PicGroup-prev-cur")})},thumbSlideRight:function(){var zt=true,zf=true,slideTime=500,curPage=$deskGlobalConfig.curPage,allPage=$deskGlobalConfig.allPage;if(curPage<allPage&&zt){zt=false;curPage=curPage+1;$((".show"+curPage)).find("img").each(function(){$(this).attr("src",$(this).attr("srcs"))});var thumbUlIndex=(curPage-1)*584;$deskGlobalObj.thumbUl.animate({left:"-"+thumbUlIndex+"px"},slideTime,function(){zt=true});if(curPage>1){$deskGlobalObj.thumbPrevBtn.removeClass("forbid").addClass("forbida")}$deskGlobalConfig.curPage=curPage}if(curPage==allPage){$deskGlobalObj.thumbNextBtn.removeClass("forbida").addClass("forbid")}},thumbSlideLeft:function(){var zt=true,zf=true,slideTime=500,curPage=$deskGlobalConfig.curPage,allPage=$deskGlobalConfig.allPage;if(curPage>1&&zf){zf=false;curPage=curPage-1;$((".show"+curPage)).find("img").each(function(){$(this).attr("src",$(this).attr("srcs"))});var thumbUlIndex=(curPage-1)*584;$deskGlobalObj.thumbUl.animate({left:"-"+thumbUlIndex+"px"},slideTime,function(){zf=true});if(curPage<allPage){$deskGlobalObj.thumbNextBtn.removeClass("forbid").addClass("forbida")}$deskGlobalConfig.curPage=curPage}if(curPage==1){$deskGlobalObj.thumbPrevBtn.removeClass("forbida").addClass("forbid")}},clickSupport:function(){$(".favorite").on("click",function(){$.post("/index.php?c=Ajax_Recommend",{"id":$deskGlobalConfig.groupId,"pid":$deskGlobalConfig.picId,"m":1},function(data){if(data==3){alert("\u60a8\u5df2\u7ecf\u63a8\u8350\u8fc7\u5566\uff01")}else{if(data==4){alert("\u522b\u60f3\u4e86,\u6ca1\u7528\uff01")}else{if(data==1){var goodNum=parseInt($(".favorite").text());goodNum=goodNum+1;$(".favorite").text(goodNum);alert("\u611f\u8c22\u60a8\u7684\u63a8\u8350\uff01")}}}},"json")})},clickUnSupport:function(){$(".nolike").on("click",function(){$.post("/index.php?c=Ajax_Recommend",{"id":$deskGlobalConfig.groupId,"pid":$deskGlobalConfig.picId,"m":2},function(data){if(data==3){alert("\u60a8\u5df2\u7ecf\u63a8\u8350\u8fc7\u5566\uff01")}else{if(data==4){alert("\u522b\u60f3\u4e86,\u6ca1\u7528\uff01")}else{if(data==1){var badNum=parseInt($(".nolike").text());badNum=badNum+1;$(".nolike").text(badNum);alert("\u6211\u4eec\u4f1a\u7ee7\u7eed\u6539\u8fdb\uff01")}}}},"json")})},getCookie2:function(cookieName){var cookieStr=document.cookie;var cookieStart=cookieStr.indexOf(decodeURIComponent(cookieName)+"=");if(cookieStart==-1){return false}cookieStart=cookieStart+(decodeURIComponent(cookieName)+"=").length;var cookieEnd=cookieStr.indexOf(";",cookieStart);if(cookieEnd==-1){cookieEnd=cookieStr.length}var cookieValue=cookieStr.substring(cookieStart,cookieEnd);return cookieValue},setCookie2:function(name,value,life){var cookieStr="";if(life>0){cookieStr=new Date((new Date()).getTime()+life*86400*1000);cookieStr="; expires="+cookieStr.toGMTString()}document.cookie=name+"="+escape(value)+cookieStr+"; path=/; domain=.zol.com.cn;"},clickSheying1:function(){$deskGlobalObj.photoNextBtn.on("click",function(){if($deskGlobalConfig.picTotal<6){if($deskGlobalConfig.picNum==$deskGlobalConfig.picTotal){var getTiaozhuancookie=zolDesk.getCookie2("bizhi_pc_to_jd");if(getTiaozhuancookie!=1){zolDesk.setCookie2("bizhi_pc_to_jd",1,1);zolDesk.tongjiBtn("bizhi_pc_to_jd",window.location.href);window.open($deskGlobalConfig.jingdong)}}}else{if($deskGlobalConfig.picNum==5){var getTiaozhuancookie=zolDesk.getCookie2("bizhi_pc_to_jd");if(getTiaozhuancookie!=1){zolDesk.setCookie2("bizhi_pc_to_jd",1,1);zolDesk.tongjiBtn("bizhi_pc_to_jd",window.location.href);window.open($deskGlobalConfig.jingdong)}}}})},clickSheying2:function(){$deskGlobalObj.photoPrevBtn.on("click",function(){if($deskGlobalConfig.picTotal<6){if($deskGlobalConfig.picNum==$deskGlobalConfig.picTotal){var getTiaozhuancookie=zolDesk.getCookie2("bizhi_pc_to_jd");if(getTiaozhuancookie!=1){zolDesk.setCookie2("bizhi_pc_to_jd",1,1);zolDesk.tongjiBtn("bizhi_pc_to_jd",window.location.href);window.open($deskGlobalConfig.jingdong)}}}else{if($deskGlobalConfig.picNum==7){var getTiaozhuancookie=zolDesk.getCookie2("bizhi_pc_to_jd");if(getTiaozhuancookie!=1){zolDesk.setCookie2("bizhi_pc_to_jd",1,1);zolDesk.tongjiBtn("bizhi_pc_to_jd",window.location.href);window.open($deskGlobalConfig.jingdong)}}}})},showLayer:function(flag){$(".list").find("img").each(function(){$(this).attr("src",$(this).attr(".src"))});var picNum=$deskGlobalConfig.picNum,picTotal=$deskGlobalConfig.picTotal;var layer=$(".scroll-webpage,.PicGroup-prev,.PicGroup-next");var bigImg=$("#bigImg,#photo-prev,#photo-next,.PicBigBtn");$deskGlobalConfig.layerStatus=true;$deskGlobalConfig.fullStatus=false;if(picNum==1){$(".PicGroup-prev img").attr({"src":$deskGlobalConfig.prevGroupSrc,"title":$deskGlobalConfig.prevGroupName,"alt":$deskGlobalConfig.prevGroupName});$(".PicGroup-prev span").attr("title",$deskGlobalConfig.prevGroupName);$(".PicGroup-prev span label").text($deskGlobalConfig.subprevGroupName+"...")}else{if(picNum==picTotal){$(".PicGroup-prev img").attr({"src":$deskGlobalConfig.nowPicSrc,"title":$deskGlobalConfig.nowGroupName,"alt":$deskGlobalConfig.nowGroupName});$(".PicGroup-prev span").attr("title",$deskGlobalConfig.nowGroupName);$(".PicGroup-prev span label").text($deskGlobalConfig.subprevGroupName+"...")}}bigImg.hide();layer.show();zolDesk.fitEndSlide(flag);zolDesk.tongjiBtn("desk_detail_showRecLayer",window.location.url)},hideLayer:function(){var picNum=$deskGlobalConfig.picNum,picTotal=$deskGlobalConfig.picTotal;var layer=$(".scroll-webpage,.PicGroup-prev,.PicGroup-next");var bigImg=$("#bigImg,#photo-prev,#photo-next,.PicBigBtn");$deskGlobalConfig.layerStatus=false;bigImg.show();layer.hide()},fitEndSlide:function(flag){var $zolFooter=$("#zolGlobalFooter");if(flag){var winHeight=parseInt($win.height()),topHeight=parseInt($(".topbar").outerHeight(true)),endHeight=parseInt($(".gallery-box").outerHeight(true)),adHeight=parseInt($(".slide-ad").outerHeight(true)),footerHeight=parseInt($zolFooter.outerHeight(true));if(!footerHeight){footerHeight=50}if(winHeight-topHeight-endHeight-adHeight-footerHeight>5){$zolFooter.addClass("zol-global-footer-fixed")}else{$zolFooter.removeClass("zol-global-footer-fixed")}}else{$zolFooter.removeClass("zol-global-footer-fixed")}},showFull:function(){$("#desk_detail_right_tonglan").hide();$deskGlobalConfig.fullStatus=true;$deskGlobalObj.fullDeskbox.show();$body.addClass("slide-page")},hideFull:function(){$("#desk_detail_right_tonglan").show();$deskGlobalConfig.fullStatus=false;zolDesk.autoPlaySlide(0);$deskGlobalObj.fullDeskbox.hide();$body.removeClass("slide-page")},showPic:function(idx){idx=parseInt(idx);if(idx<0||idx>=$deskGlobalConfig.picTotal){zolDesk.tongjiBtn("desk_detail_end_show_20160316",window.location.url);zolDesk.hideFull();zolDesk.showLayer();return}$deskGlobalConfig.picIndex=idx;$deskGlobalConfig.picNum=idx+1;$deskGlobalConfig.picId=deskPicArr.list[idx].picId;$deskGlobalConfig.resAll=deskPicArr.list[idx].resAll;zolDesk.recResPic();var indexImgSrc=deskPicArr.list[idx].imgsrc.replace("##SIZE##",$deskGlobalConfig.showRes);var __slidePic;if($deskGlobalConfig.fullStatus){__slidePic=$deskGlobalObj.fullDeskPic}else{__slidePic=$deskGlobalObj.mainPic}__slidePic.attr("src",indexImgSrc);var prevLoadArr=[];if($deskGlobalConfig.picNum==1){prevLoadArr=[{"idx":idx+1,"res":zolDesk.getResPic(idx+1)},{"idx":idx+2,"res":zolDesk.getResPic(idx+2)}]}else{if($deskGlobalConfig.picNum==$deskGlobalConfig.picTotal){prevLoadArr=[{"idx":idx-1,"res":zolDesk.getResPic(idx-1)},{"idx":idx-2,"res":zolDesk.getResPic(idx-2)}]}else{if($deskGlobalConfig.picNum==$deskGlobalConfig.picTotal-2){prevLoadArr=[{"idx":idx+1,"res":zolDesk.getResPic(idx+1)},{"idx":idx-1,"res":zolDesk.getResPic(idx-1)},{"idx":idx+2,"res":zolDesk.getResPic(idx+2)}]}else{if($deskGlobalConfig.picNum==$deskGlobalConfig.picTotal-1){prevLoadArr=[{"idx":idx+1,"res":zolDesk.getResPic(idx+1)},{"idx":idx-1,"res":zolDesk.getResPic(idx-1)}]}else{prevLoadArr=[{"idx":idx+1,"res":zolDesk.getResPic(idx+1)},{"idx":idx-1,"res":zolDesk.getResPic(idx-1)},{"idx":idx+2,"res":zolDesk.getResPic(idx+2)}]}}}}zolDesk.preLoadPic(prevLoadArr);$("#showImg").find("li").removeClass("cur").eq(idx).addClass("cur");var curpage=Math.ceil((idx+1)/4)-1;$("#showImg").css("left",-584*curpage);$((".show"+(curpage+1))).find("img").each(function(){$(this).attr("src",$(this).attr("srcs"))});$deskGlobalConfig.nowPicSrc=$deskGlobalConfig.bdPic=indexImgSrc;$deskGlobalConfig.bdUrl="http://desk.zol.com.cn/bizhi_"+$deskGlobalConfig.groupId+"_"+$deskGlobalConfig.picId+"_"+$deskGlobalConfig.machineId+".html";$deskGlobalConfig.curPage=curpage;zolDesk.setBackBtn();$deskGlobalObj.curPicSpan.text($deskGlobalConfig.picNum);if($("#tagfbl a").length>1){$("#tagfbl a").not(".laiyuan").remove();if($deskGlobalConfig.resAll){var str="",resClass="";$.each($deskGlobalConfig.resAll,function(i,v){resClass=$deskGlobalConfig.resAll[i]==$deskGlobalConfig.showRes?'class="current"':"";str+='<a target="_blank" id="'+$deskGlobalConfig.resAll[i]+'" '+resClass+' href="/showpic/'+$deskGlobalConfig.resAll[i]+"_"+$deskGlobalConfig.picId+"_"+$deskGlobalConfig.subId+'.html">'+$deskGlobalConfig.resAll[i]+"</a>"});$("#tagfbl").prepend(str)}}zolDesk.setBackQrCode(indexImgSrc);zolDesk.setBackSeoTitle();try{var _zpv_document_refer="http://desk.zol.com.cn/";pv_d()}catch(e){}},setBackQrCode:function(url){$.get("/index.php?c=BiZhi_Detail&a=getQrCode&url="+url,function(data){$(".qrcode").attr("src",data.url);$("#downloadToPhone").attr("src",data.url)},"json")},setBackBtn:function(){var prevPicUrl,nextPicUrl;if($deskGlobalConfig.picNum==1){prevPicUrl="javascript:;"}else{prevPicUrl="/bizhi/"+$deskGlobalConfig.groupId+"_"+deskPicArr.list[($deskGlobalConfig.picIndex-1)].picId+"_"+$deskGlobalConfig.machineId+".html"}if($deskGlobalConfig.picNum==$deskGlobalConfig.picTotal){nextPicUrl="javascript:;"}else{nextPicUrl="/bizhi/"+$deskGlobalConfig.groupId+"_"+deskPicArr.list[($deskGlobalConfig.picIndex+1)].picId+"_"+$deskGlobalConfig.machineId+".html"}$deskGlobalObj.prevPicBtn.attr("href",prevPicUrl);$deskGlobalObj.nextPicBtn.attr("href",nextPicUrl)},setBackSeoTitle:function(){if($deskGlobalConfig.picNum==1){document.title=$deskGlobalConfig.picSeoTitle.replace(/##page##/,"")}else{temptitle="\u7b2c"+($deskGlobalConfig.picNum)+"\u9875";document.title=$deskGlobalConfig.picSeoTitle.replace(/##page##/,temptitle)}},autoPlaySlide:function(flag){if(flag){$deskGlobalConfig.fullInterval&&clearInterval($deskGlobalConfig.fullInterval);$deskGlobalConfig.fullInterval=setInterval(function(){zolDesk.showPic($deskGlobalConfig.picIndex+1)},5000);$deskGlobalObj.pauseBtn.show();$deskGlobalObj.playBtn.hide()}else{$deskGlobalConfig.fullInterval&&clearInterval($deskGlobalConfig.fullInterval);$deskGlobalObj.pauseBtn.hide();$deskGlobalObj.playBtn.show()}},keyUpPaging:function(){$(document).keydown(function(event){if(event.which=="37"){zolDesk.autoPlaySlide(0);if($deskGlobalConfig.picNum==1){if($deskGlobalConfig.layerStatus){zolDesk.jumpTo($deskGlobalConfig.prevGroup)}else{zolDesk.showLayer();zolDesk.hideFull()}}else{if($deskGlobalConfig.picNum=$deskGlobalConfig.picTotal){if($deskGlobalConfig.layerStatus){zolDesk.hideLayer()}else{if($deskGlobalConfig.fullStatus){zolDesk.showPic($deskGlobalConfig.picIndex-1)}else{zolDesk.jumpTo($deskGlobalConfig.prevPic)}}}else{if($deskGlobalConfig.fullStatus){zolDesk.showPic($deskGlobalConfig.picIndex-1)}else{zolDesk.jumpTo($deskGlobalConfig.prevPic)}}}}if(event.which=="39"){zolDesk.autoPlaySlide(0);if($deskGlobalConfig.picNum==1){if($deskGlobalConfig.layerStatus){zolDesk.hideLayer()}else{if($deskGlobalConfig.fullStatus){zolDesk.showPic($deskGlobalConfig.picIndex+1)}else{zolDesk.jumpTo($deskGlobalConfig.nextPic)}}}else{if($deskGlobalConfig.picNum==$deskGlobalConfig.picTotal){if($deskGlobalConfig.layerStatus){zolDesk.jumpTo($deskGlobalConfig.nextGroup)}else{zolDesk.showLayer();zolDesk.hideFull()}}else{if($deskGlobalConfig.fullStatus){zolDesk.showPic($deskGlobalConfig.picIndex+1)}else{zolDesk.jumpTo($deskGlobalConfig.nextPic)}}}}})},picLocationArea:function(){$deskGlobalObj.prevPicArea.on("click",function(){if($deskGlobalConfig.picNum==1){zolDesk.showLayer()}else{zolDesk.jumpTo($deskGlobalConfig.prevPic)}});$deskGlobalObj.nextPicArea.on("click",function(){if($deskGlobalConfig.picNum==$deskGlobalConfig.picTotal){zolDesk.showLayer()}else{zolDesk.jumpTo($deskGlobalConfig.nextPic)}})},taboolaArea:function(){$deskGlobalObj.taboolaBelowBtn.on("click","a",function(){zolDesk.tongjiBtn("desk_slide_taboola_above",window.location.href)});$deskGlobalObj.taboolaBelowBtn2.on("click","a",function(){zolDesk.tongjiBtn("desk_slide_taboola_below",window.location.href)})},recClickLayer:function(){$deskGlobalObj.prevPicBtn.on("click",function(){if($deskGlobalConfig.picNum==1){zolDesk.showLayer()}});$deskGlobalObj.nextPicBtn.on("click",function(){if($deskGlobalConfig.picNum==$deskGlobalConfig.picTotal){zolDesk.showLayer()}})},recLayerLastUrl:function(){$(".PicGroup-prev a").on("click",function(){if($deskGlobalConfig.picNum==1){zolDesk.jumpTo($deskGlobalConfig.prevGroup)}else{zolDesk.hideLayer();zolDesk.showPic($deskGlobalConfig.picTotal-1)}});$(".PicGroup-next a").on("click",function(){zolDesk.jumpTo($deskGlobalConfig.nextGroup)})},preLoadPic:function(picArr){if(typeof picArr=="Object"){picArr=[picArr]}if(picArr){$.each(picArr,function(i,v){if($.inArray(picArr[i]["idx"],$deskGlobalConfig.shownPic)==-1){$deskGlobalConfig.shownPic.push(picArr[i]["idx"]);var preloadImg=new Image();var preloadImgSrc=deskPicArr.list[picArr[i]["idx"]].imgsrc.replace("##SIZE##",picArr[i]["res"]);preloadImg.src=preloadImgSrc}})}},jumpTo:function(url){if(/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var referLink=document.createElement("a");referLink.href=url;document.body.appendChild(referLink);referLink.click()}else{window.location.href=url}},tongjiBtn:function(event,url){var ip_ck="";if(typeof(readck)!="undefined"){ip_ck=readck("ip_ck")}else{if(typeof(get_cookie)!="undefined"){ip_ck=get_cookie("ip_ck")}}var pv_stat_src="//pvtest.zol.com.cn/images/pvevents.gif?t="+new Date().getTime()+"&event="+event+"&ip_ck="+ip_ck+"&url="+url;var imgObj=new Image();imgObj.src=pv_stat_src},ebableSeeLove:function(){var $enAbleLookHeight=$(window).height();$(window).on("resize",jiSuan);$(document).on("scroll",tongji);function jiSuan(){$enAbleLookHeight=$(window).height()}function tongji(){var $nowHeight=$enAbleLookHeight+$(document,window).scrollTop();if($nowHeight>=1317){zolDesk.tongjiBtn("desk_show_cainixihuan",window.location.url);$(document).off("scroll",tongji);$(window).off("resize")}}},addEventHandler:function(){zolDesk.ebableSeeLove();zolDesk.recResPic();zolDesk.allBtnEvent();zolDesk.showQrCodeLayer();zolDesk.surveyQrCodeLayer();zolDesk.showDownLayer();zolDesk.recShareLayer();zolDesk.pageHover();zolDesk.clickSupport();zolDesk.clickUnSupport();zolDesk.picLocationArea();zolDesk.recClickLayer();zolDesk.keyUpPaging();zolDesk.recLayerLastUrl();zolDesk.clickSheying1();zolDesk.clickSheying2();zolDesk.taboolaArea();$("#chicun").html($deskGlobalConfig.showRes);$("#"+$deskGlobalConfig.showRes).addClass("current");if($deskGlobalConfig.showRes==$deskGlobalConfig.res){$("#"+$deskGlobalConfig.res).attr("title","\u60a8\u5f53\u524d\u7684\u5c4f\u5e55\u5206\u8fa8\u7387\u662f\uff1a"+$deskGlobalConfig.res)}else{$("#"+$deskGlobalConfig.showRes).attr("title","\u6ca1\u6709\u60a8\u7535\u8111\u5c3a\u5bf8\u7684\u5206\u8fa8\u7387,\u53ef\u4ee5\u4e0b\u8f7d\uff1a"+$deskGlobalConfig.showRes)}$("#showImg,#guessYouLikeUl").find("img").picLazyLoad({checkShow:true});zolDesk.preLoadPic([{"idx":$deskGlobalConfig.picIndex,"res":$deskGlobalConfig.showRes}])}};$(function(){$("#backTop").after('<a href="javascript:;" id="downloadToPhone" title="\u4e0b\u8f7d\u5230\u624b\u673a"><i></i><span class="text">\u4e0b\u8f7d\u5230\u624b\u673a</span></a>');$(".qrRes").text("\u58c1\u7eb8\u5927\u5c0f("+$deskGlobalConfig.showRes+")");zolDesk.addEventHandler()});imgToSize(1);var h=0;function imgToSize(size){var slider=$("#layerbox-slider"),img=$("#layerDeskPic");var oWidth=img.width();var oHeight=img.height();var widthsize=Math.ceil(oWidth*size);var heightsize=Math.ceil(oHeight*size);if(widthsize<250){widthsize=250;return false}else{if(heightsize<250){heightsize=250;return false}}slider.width(widthsize);slider.height(heightsize);img.width(widthsize);img.height(heightsize);slider.css({"margin-top":-heightsize/2,"margin-left":-widthsize/2});slider.addClass("layerbox-on")}$("#enlarge").on("click",function(){imgToSize(1.1)});$("#narrow").on("click",function(){imgToSize(10/11)});$(".footsize").hover(function(){$(this).children(".btnPicSize").show()},function(){$(this).children(".btnPicSize").hide()});(function($){$.fn.survey=function(options){var defaults={content:"\u5c06\u60a8\u7684\u4f7f\u7528\u5efa\u8bae\u6216\u8005\u60f3\u6cd5\u544a\u8bc9\u6211\u4eec\u5427\uff0c\u6211\u4eec\u5c06\u8ba4\u771f\u503e\u542c\u60a8\u7684\u611f\u53d7\uff1a\uff09",width:"298",height:"207",words:500,api:"/index.php?c=Ajax_Survey",channel:"<em>\u201c\u5f53\u524d\u9875\u9762\u201d</em>",pageType:"sjBzIndex",isTop:1,url:location.hostname+location.pathname};var options=$.extend(defaults,options);if($.browser.msie){var ieVersion=parseInt($.browser.version)}var __feedCreat=function(){var feedHtml=$('<div id="pubFeedBack"></div>');feedHtml.html('<div id="backTop" title="\u8fd4\u56de\u9876\u90e8"><i></i><span class="text">\u8fd4\u56de\u9876\u90e8</span></div><a href="javascript:;" id="callSurvey"  title="\u5efa\u8bae\u53cd\u9988"><i></i><span class="text">\u5efa\u8bae\u53cd\u9988</span></a>');$("body").append(feedHtml);__ie6Fixed()};var __surveyCreate=function(){var surveyHtml=$("<div></div>");surveyHtml.addClass("survey-box");surveyHtml.attr("id","D_SurveyBox");if(ieVersion&&ieVersion<10){surveyHtml.addClass("survey-ie")}surveyHtml.html('<div class="survey-header"><div class="survey-title">\u60a8\u5bf9'+options.channel+'\u6ee1\u610f\u5417\uff1f</div><a id="D_SurveyClose" class="survey-close" href="#"></a></div><div class="survey-main"><div class="survey-radio survey-radio-good" idx="1"><i></i>\u6ee1\u610f</div><div class="survey-radio survey-radio-bad" idx="2"><i></i>\u4e0d\u6ee1\u610f</div><textarea id="D_SurveyText" class="survey-text default">'+options.content+'</textarea><div class="survey-count">\u8fd8\u53ef\u4ee5\u8f93\u5165<label id="D_SurveyCountCur" class="survey-count-cur">'+options.words+'</label>\u5b57</div><button id="D_SurveySubmit" class="survey-submit">\u63d0\u4ea4</button></div><div id="D_SurveyMask" class="survey-mask"></div><div id="D_SurveyTip" class="survey-tip"></div>');$("body").append(surveyHtml);__ie6Fixed()};var __surveyShow=function(){var surveyBox=$("#D_SurveyBox");if(!surveyBox){return}if(!ieVersion||ieVersion>=10){surveyBox.removeClass("survey-hide-w3c").addClass("survey-show-w3c")}surveyBox.css("visibility","visible")};var __surveyHide=function(){var surveyBox=$("#D_SurveyBox");if(!surveyBox){return}__reset();if(!ieVersion||ieVersion>=10){surveyBox.removeClass("survey-show-w3c").addClass("survey-hide-w3c");return}surveyBox.css("visibility","hidden")};var __reset=function(){$("#D_SurveyText").val(options.content).addClass("default");$(".survey-count-cur").text(options.words);$(".survey-radio").removeClass("survey-radio-good-sel survey-radio-bad-sel")};var __initEvent=function(){$(window).resize(function(){var winW=$(this).width();if(winW<=1124){$("#pubFeedBack").hide()}else{$("#pubFeedBack").show()}});$(window).bind("scroll",function(){if(options.isTop==1){if($(this).scrollTop()>50){$("#backTop").fadeIn().css({"display":"block"})}else{$("#backTop").fadeOut().css({"display":"none"})}}});$("#backTop").bind("click",function(e){if(options.isTop==1){e.preventDefault();$("html,body").scrollTop(0)}});$("#callSurvey").bind("click",function(e){e.preventDefault();__surveyShow()});var surveyClose=$("#D_SurveyClose");surveyClose.bind("click",function(e){e.preventDefault();__surveyHide()});var surveyRadios=$(".survey-radio");if(!surveyRadios||!surveyRadios.length){return}surveyRadios.each(function(){$(this).bind("click",function(){surveyRadios.removeClass("survey-radio-good-sel survey-radio-bad-sel");if($(this).attr("idx")==1){$(this).addClass("survey-radio-good-sel")}else{$(this).addClass("survey-radio-bad-sel")}})});var surveyText=$("#D_SurveyText"),surveySubmit=$("#D_SurveySubmit");surveyText.bind({"focus":function(){if($(this).val()==options.content){$(this).val("")}$(this).removeClass("default")},"blur":function(){if($(this).val()==""||$(this).val()==options.content){$(this).val(options.content);$(this).addClass("default")}else{$(this).removeClass("default")}},"keyup":function(){var tempLen=(options.words-$(this).val().length),count=$("#D_SurveyCountCur");count.html(tempLen);if(tempLen<0){count.addClass("survey-count-over");surveySubmit.attr("disabled","disabled").addClass("survey-submit-disabled")}else{count.removeClass("survey-count-over");surveySubmit.removeAttr("disabled").removeClass("survey-submit-disabled")}}});if(!surveySubmit.hasClass("survey-submit-disabled")){surveySubmit.bind("click",function(){__submit.call(this)})}};var __validate=function(){var selRadio=$(".survey-radio-good-sel").length>0?$(".survey-radio-good-sel").attr("idx"):""||$(".survey-radio-bad-sel").length>0?$(".survey-radio-bad-sel").attr("idx"):"";var valIn=$.trim($("#D_SurveyText").val());if(""==selRadio){__tip("warning","\u8bf7\u9009\u62e9 '\u6ee1\u610f' \u8fd8\u662f '\u4e0d\u6ee1\u610f'\uff01");return null}if(valIn.length==0||valIn==options.content){__tip("warning","\u8bf7\u8f93\u5165\u60a8\u5bf9"+options.channel+"\u7684\u5efa\u8bae\uff01");return null}return{causes:selRadio,content:valIn}};var __submit=function(){if(!(feedContent=__validate())){return}$.post(options.api,{pageType:options.pageType,url:options.url,causes:feedContent.causes,content:escape(feedContent.content)},function(data){if(data.status==1){__tip("success","\u63d0\u4ea4\u6210\u529f! \u8c22\u8c22\u60a8\u7684\u53cd\u9988!");setTimeout(function(){__surveyHide()},1000)}else{if(data.status==0){__tip("warning","\u63d0\u4ea4\u5931\u8d25! \u8bf7\u7a0d\u540e\u518d\u8bd5!")}else{if(data.status==2){__tip("success","\u63d0\u4ea4\u6210\u529f! \u8c22\u8c22\u60a8\u7684\u53cd\u9988!");setTimeout(function(){__surveyHide()},1000)}}}},"json")};var __tip=function(type,tipText){var surveyTip=$("#D_SurveyTip"),surveyMask=$("#D_SurveyMask");if(!surveyTip||!surveyMask){return}surveyTip.removeClass("warning success").addClass(type).html(tipText);surveyMask.css("display","block");surveyTip.css("display","block");setTimeout(function(){surveyMask.css("display","none");surveyTip.css("display","none")},1000)};var __ie6Fixed=function(){if(ieVersion!==6){return}var surveyBox=$("#D_SurveyBox");var pubFeedBack=$("#pubFeedBack");if(!surveyBox||!pubFeedBack){return}$(window).bind("scroll",function(){var h=$(window).height(),st=$(window).scrollTop(),_top=h+st-options.height;var _top1=h+st-pubFeedBack.height()-15;surveyBox.css("top",_top+"px");pubFeedBack.css("top",_top1+"px")})};if(screen.width>=1280){(function(){__feedCreat();__surveyCreate();__initEvent()})()}}})(jQuery);