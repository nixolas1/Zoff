!function(){var e={admin_listener:function(){G.on("toast",function(t){switch(t){case"addedsong":t=o.rnd(["I added your song","Your song has been added","Yay, more songs!","Thats a cool song!","I added that song for you","I see you like adding songs..."]);break;case"savedsettings":t=o.rnd(["I've saved your settings","I stored all your settings","Your settings have been stored in a safe place"]);break;case"wrongpass":t=o.rnd(["That's not the right password!","Wrong! Better luck next time...","You seem to have mistyped the password","Incorrect. Have you tried meditating?","Nope, wrong password!","Wrong password. The authorities have been notified."]),localStorage[C.toLowerCase()]&&localStorage.removeItem(C.toLowerCase()),e.display_logged_out();break;case"shuffled":t=o.rnd(["♫ You stir me right round, baby. ♫","♫ Stir, stir, stir my boat ♫","I vigorously stirred your playlist!","I hope you like your list stirred, not shaken.","I shuffled your playlist with the cosmic background radiation as a seed. Enjoy.","100% randomized, for your listening pleasure!","I hope you enjoy your fresh playlist!"]);break;case"deletesong":t=o.rnd(["Your song is now in a better place...","You won't be seeing any more of that video...","EXTERMINATE! EXTERMINATE! EXTERMINATE!","I killed it with fire","Thanks for deleting that song. I didn't like it anyways...","Removed song securely."]);break;case"voted":t=o.rnd(["You voted!","You vote like a boss","Voting is the key to democracy","May you get your song to the very top!","I love that song! I vouch for you.","Only you vote that good","I like the way you vote...","Up the video goes!","Voted Zöff for president","Only 999 more to go!"]);break;case"alreadyvoted":t=o.rnd(["You can't vote twice on that song!","I see you have voted on that song before","One vote per person!","I know you want to hear your song, but have patience!","I'm sorry, but I can't let you vote twice, Dave."]);break;case"skip":t=o.rnd(["The song was skipped","I have skipped a song","Skipped to the beat","Skipmaster3000","They see me skippin', they hatin'"]);break;case"listhaspass":t=o.rnd(["I'm sorry, but you have to be an admin to do that!","Only admins can do that","You're not allowed to do that, try logging in!","I can't let you do that","Please log in to do that"]);break;case"noskip":t=o.rnd(["Only Admins can skip songs, peasant!","You have to log in to skip songs on this channel","Try clicking the settings icon and logging in before you skip"]);break;case"alreadyskip":t=o.rnd(["Skipping is democratic, only one vote per person!","More people have to vote to skip, not just you!","Get someone else to skip too! You can't do it on yourself."]);break;case"notyetskip":t="Skipping is disabled the first 10 seconds.";break;case"correctpass":t="Correct password. You now have access to the sacred realm of The Admin.";break;case"changedpass":t="Your password has been changed!"}Materialize.toast(t,4e3)}),G.on("pw",function(e){I=!1,j=e,names=["vote","addsongs","longsongs","frontpage","allvideos","removeplay","skip","shuffle"];for(var t=0;t<names.length;t++)$("input[name="+names[t]+"]").attr("disabled",!1);$(".card-action").removeClass("hide"),$("#admin-lock").removeClass("mdi-action-lock"),$("#admin-lock").addClass("mdi-action-lock-open clickable"),localStorage.setItem(C.toLowerCase(),e),$("#password").val(""),$("#password").attr("placeholder","Change channel password")}),G.on("conf",function(e){k.set_conf(e[0])})},pass_save:function(){I?G.emit("password",[CryptoJS.SHA256(document.getElementById("password").value).toString(),C.toLowerCase()]):G.emit("password",[CryptoJS.SHA256(document.getElementById("password").value).toString(),C.toLowerCase(),localStorage[C.toLowerCase()]])},log_out:function(){localStorage[C.toLowerCase()]?(localStorage.removeItem(C.toLowerCase()),e.display_logged_out(),Materialize.toast("Logged out",4e3)):Materialize.toast("Not logged in",4e3)},display_logged_out:function(){I=!0,names=["vote","addsongs","longsongs","frontpage","allvideos","removeplay","skip","shuffle"];for(var e=0;e<names.length;e++)$("input[name="+names[e]+"]").attr("disabled",!0);o.contains($("#admin-lock").attr("class").split(" "),"mdi-action-lock")||$("#admin-lock").addClass("mdi-action-lock"),$("#admin-lock").removeClass("mdi-action-lock-open clickable"),0==$(".card-action").length||o.contains($(".card-action").attr("class").split(" "),"hide")||$(".card-action").addClass("hide"),j="",document.getElementById("password").value="",$("#password").attr("placeholder","Enter channel password")},save:function(){e.submitAdmin(document.getElementById("adminForm").elements)},submitAdmin:function(e){voting=e.vote.checked,addsongs=e.addsongs.checked,longsongs=e.longsongs.checked,V=e.frontpage.checked,allvideos=e.allvideos.checked,removeplay=e.removeplay.checked,skipping=e.skip.checked,shuffling=e.shuffle.checked,configs=[voting,addsongs,longsongs,V,allvideos,removeplay,j,skipping,shuffling],G.emit("conf",configs)},hide_settings:function(){$("#settings").sideNav("hide")},remove_bar:function(){setTimeout(function(){$("#adminPanel").removeClass("success"),$("#adminPanel").removeClass("fadeerror"),$("#eBar").removeClass("opacityFull"),$("#sBar").removeClass("opacityFull")},1500)},shuffle:function(){G.emit("shuffle",void 0!==j?j:"")},get_wp:function(){return I}},t={chat:function(e){e.value.length>150||("#all_chat"==$(".tab a.active").attr("href")?G.emit("all,chat",e.value):G.emit("chat",e.value),e.value="")},allchat_listener:function(){G.on("chat.all",function(e){0!=$("#chat-bar").position().left?E||($("#favicon").attr("href","static/images/highlogo.png"),E=!0,B=!0,l=setInterval(t.chat_blink,2e3)):document.hidden&&($("#favicon").attr("href","static/images/highlogo.png"),B=!0);var n=o.intToARGB(o.hashCode(e[0])).substring(0,6);$("#chatall").append("<li title='"+e[2]+"'><span style='color:#"+n+";'>"+e[0]+"</span></li>");var a=document.createTextNode(e[1]);$("#chatall li:last")[0].appendChild(a),document.getElementById("chatall").scrollTop=document.getElementById("chatall").scrollHeight})},setup_chat_listener:function(e){document.getElementsByClassName("chat-tab")[0].innerHTML=e,G.on("chat",function(e){0!=$("#chat-bar").position().left&&e[1].indexOf(":")>=0&&(E||($("#favicon").attr("href","static/images/highlogo.png"),E=!0,l=setInterval(t.chat_blink,2e3)));var n=o.intToARGB(o.hashCode(e[0])).substring(0,6);$("#chatchannel").append("<li><span style='color:#"+n+";'>"+e[0]+"</span></li>");var a=document.createTextNode(e[1]);$("#chatchannel li:last")[0].appendChild(a),document.getElementById("chatchannel").scrollTop=document.getElementById("chatchannel").scrollHeight})},chat_blink:function(){$("#chat-btn i").css("opacity",.5),setTimeout(function(){$("#chat-btn i").css("opacity",1)},1e3)}},o={rnd:function(e){return e[Math.floor(Math.random()*e.length)]},predicate:function(){for(var e,t,o,n=[],a=arguments.length,i=function(e,t){return e===t?0:t>e?-1:1},s=function(e,t){var o=i,n=i;return e&&(n=function(t,n){return o(e(t),e(n))}),t?function(e,t){return-1*n(e,t)}:n},l=0;a>l;l++)e=arguments[l],"string"==typeof e?(t=e,o=i):(t=e.name,o=s(e.primer,e.reverse)),n.push({name:t,cmp:o});return function(t,o){for(var i,s,l=0;a>l&&(s=0,e=n[l],i=e.name,s=e.cmp(t[i],o[i]),0===s);l++);return s}},hashCode:function(e){for(var t=0,o=0;o<e.length;o++)t=e.charCodeAt(o)+((t<<5)-t);return t},intToARGB:function(e){return(e>>24&255).toString(16)+(e>>16&255).toString(16)+(e>>8&255).toString(16)+(255&e).toString(16)},pad:function(e){return 10>e?"0"+Math.floor(e):Math.floor(e)},contains:function(e,t){for(var o=e.length;o--;)if(e[o]===t)return!0;return!1},sample:function(){Date.now()-Y>=2*z&&(G.removeAllListeners(),G.disconnect(),G.connect(),W.setup_all_listeners()),Y=Date.now(),setTimeout(o.sample,z)},loadjsfile:function(e){if(-1==O.indexOf("["+e+"]")){var t=document.createElement("script");t.setAttribute("type","text/javascript"),t.setAttribute("src",e),document.getElementsByTagName("head")[0].appendChild(t),O+="["+e+"]"}},msieversion:function(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");return t>0||navigator.userAgent.match(/Trident.*rv\:11\./)?!0:!1},getRandomInt:function(e,t){return Math.floor(Math.random()*(t-e))+e},rgbToHsl:function(e){r=e[0],g=e[1],b=e[2],r/=255,g/=255,b/=255;var t,o,n=Math.max(r,g,b),a=Math.min(r,g,b),i=(n+a)/2;if(n==a)t=o=0;else{var s=n-a;switch(o=i>.5?s/(2-n-a):s/(n+a),n){case r:t=(g-b)/s+(g<b?6:0);break;case g:t=(b-r)/s+2;break;case b:t=(r-g)/s+4}t/=6}return i>.5&&(i=.5),"hsl("+Math.floor(360*t)+", "+Math.floor(100*o)+"%, "+Math.floor(100*i)+"%)"}};Element.prototype.remove=function(){this.parentElement.removeChild(this)},NodeList.prototype.remove=HTMLCollection.prototype.remove=function(){for(var e=0,t=this.length;t>e;e++)this[e]&&this[e].parentElement&&this[e].parentElement.removeChild(this[e])};var n,a,s,l,c,d,u,m,h,p,v,f,y,w={host_listener:function(){G.on("id",function(e){var t="//"+window.location.hostname+"/remote/"+e;$("#code-text").text(e),$("#code-qr").attr("src","https://chart.googleapis.com/chart?chs=221x221&cht=qr&choe=UTF-8&chld=L|1&chl="+t),$("#code-link").attr("href",t),H||(H=!0,G.on(e,function(e){"volume"==e[0]?($("#volume").slider("value",e[1]),u.setVolume(e[1]),localStorage.setItem("volume",e[1]),U.choose_button(e[1],!1),u.loadVideoById("mockmaster")):"channel"==e[0]?(G.emit("change_channel"),C=e[1].toLowerCase(),$("#chan").html(C.substring(0,1).toUpperCase()+C.substring(1).toLowerCase()),G.emit("list",C.toLowerCase()),window.history.pushState("object or string","Title","/"+C.toLowerCase())):"pause"==e[0]?u.pauseVideo():"play"==e[0]?u.playVideo():"skip"==e[0]&&skip()}))})}},k={channel_listener:function(){G.on("channel",function(e){k.channel_function(e)})},channel_function:function(e){if("list"==e[0]){a=e[1];var t=k.getIndexOfConf(a);s=a[t],a.splice(t,1),a.sort(o.predicate({name:"votes",reverse:!0},"added")),k.set_conf(s),k.populate_list(a)}else if("added"==e[0])a.push(e[1]),a.sort(o.predicate({name:"votes",reverse:!0},"added")),k.insertAtIndex(k.getIndexOfSong(e[1].id),e[1],!0),setTimeout(function(){var t=$("#wrapper").children()[k.getIndexOfSong(e[1].id)];$(t).css("height",66)},0);else if("deleted"==e[0]){var n=$("#wrapper").children()[k.getIndexOfSong(e[1])];n.style.height=0,setTimeout(function(){$("#"+e[1]).remove(),a.splice(k.getIndexOfSong(e[1]),1)},1050)}else if("vote"==e[0]){var i=k.getIndexOfSong(e[1]);a[i].votes+=1,a[i].added=e[2],a.sort(o.predicate({name:"votes",reverse:!0},"added")),k.populate_list(a,!1)}else"song_change"==e[0]&&(a[0].now_playing=!0,a[0].votes=0,a[0].guids=[],a[0].added=e[1],a[a.length-1].now_playing=!1,a.push(a.shift()),$("#wrapper").children()[0].remove(),k.insertAtIndex($("#wrapper").children().length,a[a.length-2],!1))},skipping_listener:function(){G.on("skipping",function(e){document.getElementById("pBar").innerHTML="Vote registrated! "+e[0]+" of "+e[1]+" has skipped. "+Math.ceil(e[1]/2)+" or more is needed!",$("#pBar").addClass("opacityFull"),setTimeout(function(){$("#pBar").removeClass("opacityFull")},1500)})},set_conf:function(e){_=""==e.adminpass||I===!1?!1:!0,A=e.allvideos,longsongs=e.longsongs,names=["vote","addsongs","longsongs","frontpage","allvideos","removeplay","skip","shuffle"];for(var t=0;t<names.length;t++)document.getElementsByName(names[t])[0].checked=e[names[t]]===!0,_&&$("input[name="+names[t]+"]").attr("disabled",!0)},populate_list:function(e){$("#wrapper").empty(),$.each(e,function(e,t){if(!t.now_playing){var o=decodeURIComponent(t.title),n=t.id,a="background-image:url('//img.youtube.com/vi/"+n+"/mqdefault.jpg');",i=t.votes;$("#wrapper").append(S);var s=$("#list-song");s.find(".list-title").text(o),s.find(".list-title").attr("title",o),s.find(".list-votes").text(i),s.find(".vote-container").attr("onclick","vote('"+n+"','pos')"),s.find(".list-image").attr("style",a),s.attr("id",n),s.find("#del").attr("onclick","vote('"+n+"', 'del')"),I||$(".card-action").removeClass("hide"),1==i&&s.find(".vote-text").text("vote")}}),$("#settings").css("visibility","visible"),$("#settings").css("opacity","1"),$("#wrapper").css("opacity","1"),a=e,a=a.sort(o.predicate({name:"votes",reverse:!0},"added"))},vote:function(e,t){return G.emit("vote",[C,e,t,j]),!0},skip:function(){return G.emit("skip",[C,localStorage[C.toLowerCase()]]),!0},importOldList:function(e){playlist_url="lists/"+e+".json",n=$.ajax({type:"GET",url:playlist_url,async:!1}).responseText,n=$.parseJSON(n);var t="",o=0;$.each(n.songs,function(e,n){t+=n.id+",",o>45&&(F.addVideos(t),t="",o=0),o++}),F.addVideos(t),document.getElementById("search").value=""},show:function(){window.mobilecheck()||(T?(T=!1,$("#toptitle").empty(),$("#chan").addClass("bigChan"),$("#chan").html("zoff.no/"+C.toLowerCase())):(T=!0,$("#toptitle").html("Zöff"),$("#chan").removeClass("bigChan"),$("#chan").html(C)))},insertAtIndex:function(e,t,o){return 0===e?void $("#wrapper").prepend(k.generateSong(t,o)):void $("#wrapper > div:nth-child("+e+")").after(k.generateSong(t,o))},generateSong:function(e,t){var o=e.id,n=e.title,a=e.votes,i="background-image:url('//img.youtube.com/vi/"+o+"/mqdefault.jpg');",s=$("<div>"+S+"</div>");return t&&s.find("#list-song").css("height",0),s.find(".list-title").text(n),s.find(".list-title").attr("title",n),s.find(".list-votes").text(a),s.find(".vote-container").attr("onclick","vote('"+o+"','pos')"),s.find(".list-image").attr("style",i),s.find("#list-song").attr("id",o),s.find("#del").attr("onclick","vote('"+o+"', 'del')"),I||s.find(".card-action").removeClass("hide"),1==a&&s.find(".vote-text").text("vote"),s.html()},getIndexOfSong:function(e){return indexes=$.map(a,function(t,o){return t.id==e?o:void 0}),indexes[0]},getIndexOfConf:function(e){return indexes=$.map(e,function(e,t){return"views"in e?t:void 0}),indexes[0]}},C=$("#chan").html(),I=!0,_=0,T=!0,S=$("#list-song-html").html(),E=!1,B=!1,x=0,M="AIzaSyBSxgDrvIaKR2c_MK5fk6S01Oe7bd_qGd8",N=$("#temp-results-container"),L=!1,R=/P((([0-9]*\.?[0-9]*)Y)?(([0-9]*\.?[0-9]*)M)?(([0-9]*\.?[0-9]*)W)?(([0-9]*\.?[0-9]*)D)?)?(T(([0-9]*\.?[0-9]*)H)?(([0-9]*\.?[0-9]*)M)?(([0-9]*\.?[0-9]*)S)?)?/,s=[],A=0,V=1,j="",O="",P=!1,h=1,D=!1,q=!1,z=6e3,Y=Date.now(),H=!1,G=io.connect("//"+window.location.hostname+":3000");G.on("get_list",function(){G.emit("list",C.toLowerCase())}),window.mobilecheck=function(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e},$(document).ready(function(){W.loadPlayer(),window.onYouTubeIframeAPIReady=W.onYouTubeIframeAPIReady,window.vote=k.vote,window.submit=F.submit,window.submitAndClose=F.submitAndClose,localStorage.list_update&&"13.06.15"==localStorage.list_update||(localStorage.setItem("list_update","13.06.15"),window.location.reload(!0)),W.setup_youtube_listener(C),e.admin_listener(),t.setup_chat_listener(C),t.allchat_listener(),k.channel_listener(),k.skipping_listener(),w.host_listener(),$("#settings").sideNav({menuWidth:300,edge:"right",closeOnClick:!1}),$("#chat-btn").sideNav({menuWidth:272,edge:"left",closeOnClick:!1}),$(".drag-target")[1].remove(),window.mobilecheck()||o.msieversion()||Notification.requestPermission(),window.mobilecheck()?(document.getElementById("search").blur(),readyLooks()):(localStorage[C.toLowerCase()]&&(64!=localStorage[C.toLowerCase()].length?localStorage.removeItem(C.toLowerCase()):G.emit("password",[localStorage[C.toLowerCase()],C.toLowerCase()])),"jazz"==$("#chan").html().toLowerCase(),navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&$(".main").height(window.innerHeight-64),git_info=$.ajax({type:"GET",url:"https://api.github.com/repos/nixolas1/zoff/commits",async:!1}).responseText,git_info=$.parseJSON(git_info),$("#latest-commit").html("Latest Commit: <br>"+git_info[0].commit.author.date.substring(0,10)+": "+git_info[0].committer.login+"<br><a href='"+git_info[0].html_url+"'>"+git_info[0].sha.substring(0,10)+"</a>: "+git_info[0].commit.message+"<br"),o.sample()),$("#results").hover(function(){$("div.result").removeClass("hoverResults"),i=0},function(){}),$("#search").focus(),$("#base").bind("keyup keypress",function(e){var t=e.keyCode||e.which;return 13==t?(e.preventDefault(),!1):void 0}),$(".search_input").focus(),$(".search_input").keyup(function(e){search_input=$(this).val(),40!=e.keyCode&&38!=e.keyCode&&13!=e.keyCode&&39!=e.keyCode&&37!=e.keyCode?(search_input.length<3&&$("#results").html(""),13==e.keyCode?F.search(search_input):(i=0,x=100)):13==e.keyCode&&(pId=search_input.split("list="),pId.length>1&&(playlist_url="https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=40&key="+M+"&playlistId="+pId[1],$.ajax({type:"GET",url:playlist_url,dataType:"jsonp",success:function(e){var t="";$.each(e.items,function(e,o){t+=o.contentDetails.videoId+","}),addVideos(t),document.getElementById("search").value=""}})))}),setInterval(function(){x--,0===x&&F.search($(".search_input").val())},1)}),$(document).keyup(function(e){if(27==event.keyCode)$("#results").html(""),$(".main").removeClass("blurT"),$("#controls").removeClass("blurT"),$(".main").removeClass("clickthrough"),o.contains($("#search-wrapper").attr("class").split(" "),"hide")||$("#search-wrapper").toggleClass("hide"),o.contains($("#song-title").attr("class").split(" "),"hide")&&$("#song-title").toggleClass("hide"),"mdi-navigation-close"==$("#search-btn i").attr("class")&&($("#search-btn i").toggleClass("mdi-navigation-close"),$("#search-btn i").toggleClass("mdi-action-search")),$("#results").toggleClass("hide");else if($("div.result").length>2)if(40==e.keyCode)i<$("div.result").length-2&&i++,$("div.result:nth-child("+(i-1)+")").removeClass("hoverResults"),$("div.result:nth-child("+i+")").addClass("hoverResults");else if(38==e.keyCode)$("div.result:nth-child("+i+")").removeClass("hoverResults"),$("div.result:nth-child("+(i-1)+")").addClass("hoverResults"),i>1&&i--;else if(13==e.keyCode){i=0;var t=document.getElementsByClassName("hoverResults")[0];"function"==typeof t.onclick&&t.onclick.apply(t),$("div.hoverResults").removeClass("hoverResults"),$("#results").html(""),document.getElementById("search").value="",$(".main").removeClass("blurT"),$("#controls").removeClass("blurT"),$(".main").removeClass("clickthrough")}}),$("input[class=conf]").change(function(){e.save()}),$(window).focus(function(){B&&($("#favicon").attr("href","static/images/favicon.png"),B=!1)}),document.getElementById("chat-btn").addEventListener("click",function(){$("#text-chat-input").focus(),$("#chat-btn i").css("opacity",1),clearInterval(l),E=!1,B=!1,$("#favicon").attr("href","static/images/favicon.png")}),$(".chat-tab").click(function(){$("#text-chat-input").focus()}),$("#skip").on("click",function(){k.skip()}),$("#chan").on("click",function(){k.show()}),$("#adminForm").on("submit",function(){e.pass_save()}),$("#chatForm").on("submit",function(){t.chat(document.getElementById("chatForm").input)}),$("#shuffle").on("click",function(){e.shuffle()}),$("#search-btn").on("click",function(){F.showSearch()}),$("#song-title").on("click",function(){F.showSearch()}),$("#admin-lock").on("click",function(){e.log_out()}),$("#closeSettings").on("click",function(){e.hide_settings()});var U={initYoutubeControls:function(e){setInterval(U.durationSetter,1e3),U.initControls()},initControls:function(){document.getElementById("volume-button").addEventListener("click",U.mute_video),document.getElementById("playpause").addEventListener("click",U.play_pause),document.getElementById("fullscreen").addEventListener("click",U.fullscreen)},initSlider:function(){localStorage.volume?vol=localStorage.getItem("volume"):(vol=100,localStorage.setItem("volume",vol)),$("#volume").slider({min:0,max:100,value:vol,range:"min",animate:!0,slide:function(e,t){U.setVolume(t.value),localStorage.setItem("volume",t.value)}}),U.choose_button(vol,!1)},fullscreen:function(){var e=document.getElementById("player"),t=e.requestFullScreen||e.mozRequestFullScreen||e.webkitRequestFullScreen;t&&t.bind(e)()},play_pause:function(){1==u.getPlayerState()?u.pauseVideo():(2==u.getPlayerState()||0==u.getPlayerState())&&u.playVideo()},settings:function(){$("#qS").toggleClass("hide")},changeQuality:function(e){u.getPlaybackQuality!=e&&(u.setPlaybackQuality(e),u.getPlaybackQuality()),$("#qS").toggleClass("hide")},mute_video:function(){u.isMuted()?(u.unMute(),U.choose_button(u.getVolume(),!1)):(U.choose_button(0,!0),u.mute())},setVolume:function(e){u.setVolume(e),U.choose_button(e,!1),u.isMuted()&&u.unMute()},choose_button:function(e,t){t?(1==document.getElementById("v-full").className.split(" ").length&&$("#v-full").toggleClass("hide"),1==document.getElementById("v-medium").className.split(" ").length&&$("#v-medium").toggleClass("hide"),1==document.getElementById("v-low").className.split(" ").length&&$("#v-low").toggleClass("hide"),2==document.getElementById("v-mute").className.split(" ").length&&$("#v-mute").toggleClass("hide")):e>=0&&33>=e?(1==document.getElementById("v-full").className.split(" ").length&&$("#v-full").toggleClass("hide"),1==document.getElementById("v-medium").className.split(" ").length&&$("#v-medium").toggleClass("hide"),2==document.getElementById("v-low").className.split(" ").length&&$("#v-low").toggleClass("hide"),1==document.getElementById("v-mute").className.split(" ").length&&$("#v-mute").toggleClass("hide")):e>=34&&66>=e?(1==document.getElementById("v-full").className.split(" ").length&&$("#v-full").toggleClass("hide"),2==document.getElementById("v-medium").className.split(" ").length&&$("#v-medium").toggleClass("hide"),1==document.getElementById("v-low").className.split(" ").length&&$("#v-low").toggleClass("hide"),1==document.getElementById("v-mute").className.split(" ").length&&$("#v-mute").toggleClass("hide")):e>=67&&100>=e&&(2==document.getElementById("v-full").className.split(" ").length&&$("#v-full").toggleClass("hide"),1==document.getElementById("v-medium").className.split(" ").length&&$("#v-medium").toggleClass("hide"),1==document.getElementById("v-low").className.split(" ").length&&$("#v-low").toggleClass("hide"),1==document.getElementById("v-mute").className.split(" ").length&&$("#v-mute").toggleClass("hide"))},playPause:function(){state=u.getPlayerState(),button=document.getElementById("playpause"),1==state?u.pauseVideo():2==state&&u.playVideo()},durationSetter:function(){duration=u.getDuration(),dMinutes=Math.floor(duration/60),dSeconds=duration-60*dMinutes,currDurr=u.getCurrentTime(),currDurr>duration&&(currDurr=duration),minutes=Math.floor(currDurr/60),seconds=currDurr-60*minutes,document.getElementById("duration").innerHTML=o.pad(minutes)+":"+o.pad(seconds)+" <span id='dash'>/</span> "+o.pad(dMinutes)+":"+o.pad(dSeconds),per=100/duration*currDurr,per>=100?per=100:0==duration&&(per=0),$("#bar").width(per+"%")},volumeOptions:function(){u.isMuted()?(u.unMute(),vol=u.getVolume(),$("#volume").slider("value",u.getVolume())):(u.mute(),$("#volume").slider("value",0))},hoverMute:function(e){vol=u.getVolume()}},F={showSearch:function(){$("#search-wrapper").toggleClass("hide"),window.mobilecheck()&&$(".search_input").focus(),$("#song-title").toggleClass("hide"),$("#results").toggleClass("hide"),$("#results").empty(),$("#search-btn i").toggleClass("mdi-navigation-close"),$("#search-btn i").toggleClass("mdi-action-search"),$("#search").focus()},search:function(e){if($(".search_results").html(""),""!==window.search_input){L=!0;var t=encodeURIComponent(window.search_input),n="https://www.googleapis.com/youtube/v3/search?key="+M+"&videoEmbeddable=true&part=id&fields=items(id)&type=video&order=viewCount&safeSearch=none&maxResults=25";n+="&q="+t,A&&(n+="&videoCategoryId=10");var a="https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet,id&key="+M+"&id=";o.contains($("#search_loader").attr("class").split(" "),"hide")&&$("#search_loader").removeClass("hide"),$.ajax({type:"GET",url:n,dataType:"jsonp",success:function(e){e.items&&($.each(e.items,function(e,t){a+=t.id.videoId+","}),$.ajax({type:"GET",url:a,dataType:"jsonp",success:function(e){var t="",n=$(N);$.each(e.items,function(e,o){var a=o.contentDetails.duration;if(secs=F.durationToSeconds(a),!longsongs||secs<720){m=o.snippet.title,enc_title=encodeURIComponent(m).replace(/'/g,"\\'"),y=o.id,a=a.replace("PT","").replace("H","h ").replace("M","m ").replace("S","s"),thumb=o.snippet.thumbnails.medium.url;var i=n;i.find(".search-title").text(m),i.find(".result_info").text(a),i.find(".thumb").attr("src",thumb),i.find(".add-many").attr("onclick","submit('"+y+"','"+enc_title+"',"+secs+");"),$($(i).find("div")[0]).attr("onclick","submitAndClose('"+y+"','"+enc_title+"',"+secs+");"),$($(i).find("div")[0]).attr("id",y),t+=i.html()}}),$("<div style='display:none;' id='mock-div'>"+t+"</div>").appendTo($("#results")).show("blind",83.33*(e.items.length-1)),o.contains($("#search_loader").attr("class").split(" "),"hide")||$("#search_loader").addClass("hide"),$(".add-many").click(function(e){return e.preventDefault(),e.stopPropagation(),!1})}}))}})}else $(".main").removeClass("blurT"),$("#controls").removeClass("blurT"),$(".main").removeClass("clickthrough")},submitAndClose:function(e,t,o){F.submit(e,t,o),$("#results").html(""),F.showSearch(),document.getElementById("search").value="",$("#results").html="",$(".main").removeClass("blurT"),$("#controls").removeClass("blurT"),$(".main").removeClass("clickthrough")},addVideos:function(e){var t="https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet,id&key=AIzaSyBSxgDrvIaKR2c_MK5fk6S01Oe7bd_qGd8&id=";t+=e,$.ajax({type:"POST",url:t,dataType:"jsonp",success:function(e){$.each(e.items,function(e,t){var o=F.durationToSeconds(t.contentDetails.duration);(!longsongs||720>o)&&(enc_title=encodeURIComponent(t.snippet.title).replace(/'/g,"\\'"),F.submit(t.id,enc_title,o))})}})},submit:function(e,t,o){G.emit("add",[e,decodeURIComponent(t),j,o])},durationToSeconds:function(e){var t=e.match(R);return hours=parseInt(t[12])||0,minutes=parseInt(t[14])||0,seconds=parseInt(t[16])||0,60*hours*60+60*minutes+seconds}},W={setup_youtube_listener:function(e){G.on("np",function(e){0==e[0].length?(document.getElementById("song-title").innerHTML="Empty channel. Add some songs!",$("#player_overlay").height($("#player").height()),window.mobilecheck()||$("#player_overlay").toggleClass("hide"),u.stopVideo()):($("#player_overlay").addClass("hide"),p=e[0][0].id,s=e[1][0],time=e[2],v=time-s.startTime,f=e[0][0].title,W.getTitle(f,h),W.setBGimage(p),P&&!window.mobilecheck()?(u.getVideoUrl().split("v=")[1]!=p&&(u.loadVideoById(p),W.notifyUser(p,f),u.seekTo(v),D&&u.pauseVideo()),D||u.playVideo(),(u.getDuration()>v||0==u.getDuration())&&u.seekTo(v)):W.getTitle(f,h))}),G.on("viewers",function(e){h=e,void 0!==f&&W.getTitle(f,h)})},onPlayerStateChange:function(e){switch(e.data){case-1:break;case 0:G.emit("end",p),q=!1,D=!1;break;case 1:q=!0,1==document.getElementById("play").className.split(" ").length&&$("#play").toggleClass("hide"),2==document.getElementById("pause").className.split(" ").length&&$("#pause").toggleClass("hide"),D&&(G.emit("pos"),D=!1);break;case 2:D=!0,1==document.getElementById("pause").className.split(" ").length&&$("#pause").toggleClass("hide"),2==document.getElementById("play").className.split(" ").length&&$("#play").toggleClass("hide");break;case 3:}},getTitle:function(e,t){var o=t>1?"viewers":"viewer",n=decodeURIComponent(e),a=document.getElementById("song-title");document.title=n+" • Zöff / "+C,a.innerHTML=n,document.getElementById("viewers").innerHTML=t+" "+o,a.title=n+" • "+t+" "+o},errorHandler:function(e){5==e.data||100==e.data||101==e.data||150==e.data?G.emit("skip",e.data):void 0!==p&&u.loadVideoById(p)},onPlayerReady:function(e){P=!0,window.mobilecheck()||($("#player").css("opacity","1"),$("#controls").css("opacity","1"),$(".playlist").css("opacity","1"),u.loadVideoById(p),u.playVideo(),u.seekTo(v)),W.readyLooks(),U.initYoutubeControls(u),U.initSlider(),u.setVolume(localStorage.getItem("volume"))},readyLooks:function(){W.setBGimage(p)},setBGimage:function(e){if(void 0!==e){var t=new Image;t.onload=function(){var e=new ColorThief;document.getElementsByTagName("body")[0].style.backgroundColor=o.rgbToHsl(e.getColor(t))},t.crossOrigin="Anonymous",t.src="https://cors-anywhere.herokuapp.com/http://img.youtube.com/vi/"+e+"/mqdefault.jpg"}},notifyUser:function(e,t){if(t=t.replace(/\\\'/g,"'").replace(/&quot;/g,"'").replace(/&amp;/g,"&"),"granted"===Notification.permission&&document.hidden&&"30H2Z8Lr-4c"!=e&&!window.mobilecheck()){var o=new Notification("Now Playing",{body:t,icon:"http://i.ytimg.com/vi/"+e+"/mqdefault.jpg",iconUrl:"http://i.ytimg.com/vi/"+e+"/mqdefault.jpg"});o.onclick=function(e){window.focus(),this.cancel()},setTimeout(function(){o.close()},5e3)}},setup_all_listeners:function(){G.on("get_list",function(){G.emit("list",C.toLowerCase())}),W.setup_youtube_listener(C),e.admin_listener(),t.setup_chat_listener(C),t.allchat_listener(),k.channel_listener(),k.skipping_listener()},onYouTubeIframeAPIReady:function(){u=new YT.Player("player",{videoId:"asd",playerVars:{rel:"0",wmode:"transparent",controls:"0",iv_load_policy:"3",theme:"light",color:"white"},events:{onReady:W.onPlayerReady,onStateChange:W.onPlayerStateChange,onError:W.errorHandler}})},loadPlayer:function(){c=document.createElement("script"),c.src="https://www.youtube.com/iframe_api",d=document.getElementsByTagName("script")[0],d.parentNode.insertBefore(c,d)}}}();