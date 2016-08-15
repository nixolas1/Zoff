var Player = {

    loaded: true,
    before_load: "",
    after_load: "",
    ytplayer: "",
    stopInterval: false,

    youtube_listener: function(obj)
    {
        Player.loaded      = false;
        if(localStorage.debug){
            console.log("--------youtube_listener--------");

            console.log("Received: ");
            console.log(obj);
            console.log("paused variable: " + paused);
            console.log("mobile_beginning variable: " + mobile_beginning);
            try{
                console.log("getVideoUrl(): " + Player.ytplayer.getVideoUrl().split('v=')[1]);
            } catch(e){}
            console.log("video_id variable: " + video_id);
            console.log("---------------------------------");
        }
        if(obj.length === 0){

            document.getElementById('song-title').innerHTML = "Empty channel. Add some songs!";
            $("#player_overlay").height($("#player").height());

            if(!window.MSStream) $("#player_overlay").toggleClass("hide");
            try{
                Player.ytplayer.stopVideo();
            }catch(e){}
            //List.importOldList(channel.toLowerCase());
        }
        else{
            //console.log("gotten new song");
            if(previous_video_id === undefined)
                previous_video_id = obj[0][0].id;
            else if(previous_video_id != video_id)
                previous_video_id = video_id;

            video_id   = obj[0][0].id;
            conf       = obj[1][0];
            time       = obj[2];
            seekTo     = time - conf.startTime;
            song_title = obj[0][0].title;
            duration   = obj[0][0].duration;

            if(mobile_beginning && Helper.mobilecheck() && seekTo === 0)
                seekTo = 1;

            try{
                if(full_playlist[0].id == video_id){
                    List.song_change(full_playlist[0].added);
                }
                Suggestions.fetchYoutubeSuggests(video_id);
            }catch(e){}

            Player.getTitle(song_title, viewers);
            Player.setBGimage(video_id);
            //if(player_ready && !Helper.mobilecheck())
            if(player_ready && !window.MSStream)
            {

                try{
                    if(Player.ytplayer.getVideoUrl().split('v=')[1] != video_id)
                    {
                        Player.ytplayer.loadVideoById(video_id);
                        Player.notifyUser(video_id, song_title);
                        Player.ytplayer.seekTo(seekTo);
                        if(paused)
                            Player.ytplayer.pauseVideo();
                    }

                    if(!paused){
                        if(!mobile_beginning)
                           Player.ytplayer.playVideo();
                        if(!durationBegun)
                            Player.durationSetter();
                    }
                    if(Player.ytplayer.getDuration() > seekTo || Player.ytplayer.getDuration() === 0)
                        Player.ytplayer.seekTo(seekTo);
                    Player.after_load  = video_id;

                    if(!Player.loaded) setTimeout(function(){Player.loaded = true;},500);
                }catch(e){
                    if(!durationBegun)
                        Player.durationSetter();
                }
            }
            else
                Player.getTitle(song_title, viewers);
        }
    },

    onPlayerStateChange: function(newState) {
        if(localStorage.debug){
            console.log("-------onPlayerStateChange------");
            console.log("New state\nState: ");
            console.log(newState);
            try{
                console.log("Duration: " + Player.ytplayer.getDuration(), "Current time: " + Player.ytplayer.getCurrentTime());
                console.log("getVideoUrl(): " + Player.ytplayer.getVideoUrl().split('v=')[1]);
            }catch(e){}
            console.log("video_id variable: " + video_id);
            console.log("---------------------------------");
        }
    	switch(newState.data)
    	{
    		case -1:
    			break;
    		case 0:
                playing = false;
                paused  = false;
    			socket.emit("end", {id: video_id, channel: chan.toLowerCase()});
    			break;
    		case 1:
    			playing = true;
                if(beginning && Helper.mobilecheck()){
                    Player.ytplayer.pauseVideo();
                    beginning = false;
                    mobile_beginning = false;
                }
                if(!embed && window.location.pathname != "/") Helper.addClass("#player_overlay", "hide");
                if(window.location.pathname != "/"){
        			if(document.getElementById("play").className.split(" ").length == 1)
        				$("#play").toggleClass("hide");
        			if(document.getElementById("pause").className.split(" ").length == 2)
        				$("#pause").toggleClass("hide");
                }
    			if(paused)
    			{
    				socket.emit('pos', {channel: chan.toLowerCase()});
    				paused = false;
    			}
    			break;
    		case 2:
                /*if(Helper.mobilecheck() || embed)
                {*/
    			    paused = true;
                    if(window.location.pathname != "/") Playercontrols.play_pause_show();
                    mobile_beginning = true;
                /*}
                else
                    Player.ytplayer.playVideo();*/
    			//
    			break;
    		case 3:
    			break;
    	}
    },

    getTitle: function(titt, v)
    {

    	var outPutWord    = v > 1 ? "viewers" : "viewer";
    	var title         = decodeURIComponent(titt);
        if(window.location.pathname != "/"){
        	var elem          = document.getElementById('song-title');
            var getTitleViews = document.getElementById('viewers');

    		elem.innerHTML    = title;
    		getTitleViews.innerHTML = v + " " + outPutWord;
    		elem.title        = title + " • " + v + " " + outPutWord;
        }
        document.title    = title + " • Zöff / "+chan;

    },

    errorHandler: function(newState)
    {
    	if(newState.data == 5 || newState.data == 100 ||
            newState.data == 101 || newState.data == 150)
        {
            /*if(Player.count == 2){
                Player.count = 0;*/
            /*console.log("Before: " + Player.before_load);
            console.log("Now: " + video_id);
            console.log("After: " + Player.after_load);
            console.log(Player.before_load == Player.ytplayer.getVideoUrl);*/
            curr_playing = Player.ytplayer.getVideoUrl().replace("https://www.youtube.com/watch?v=", "");


                socket.emit("skip", {error: newState.data, id: video_id, pass: adminpass, channel: chan.toLowerCase});
                //console.log(video_id, Player.ytplayer.getVideoUrl(), Player.ytplayer.getPlayerState());

            /*}else{
                setTimeout(function(){
                Player.ytplayer.loadVideoById(video_id);
                Player.count ++;
                }, Math.floor((Math.random() * 100) + 1));
            }*/
    	}else if(video_id !== undefined)
    		Player.ytplayer.loadVideoById(video_id);
    },

    onPlayerReady: function(event) {
        $("#channel-load").css("display", "none");
        try{
            beginning = true;
          	player_ready = true;
    		if(!window.MSStream)
    		{
    			$("#player").css("opacity", "1");
    			$("#controls").css("opacity", "1");
    			$(".playlist").css("opacity", "1");
    			Player.ytplayer.loadVideoById(video_id);
                if(autoplay && !Helper.mobilecheck())
                    Player.ytplayer.playVideo();
                if(!durationBegun)
                    Player.durationSetter();
                if(embed){
                    setTimeout(function(){
                        Player.ytplayer.seekTo(seekTo);
                        if(!autoplay){
                            Player.ytplayer.pauseVideo();
                            Playercontrols.play_pause_show();
                        }
                    }, 1000);
                }else
                Player.ytplayer.seekTo(seekTo);
    		}
    		Player.readyLooks();
    		Playercontrols.initYoutubeControls(Player.ytplayer);
    		Playercontrols.initSlider();
    		Player.ytplayer.setVolume(Crypt.get_volume());
            $(".video-container").removeClass("no-opacity");
        }catch(e){}
    },

    readyLooks: function()
    {
    	Player.setBGimage(video_id);
    },

    setBGimage: function(id){

    	if(id !== undefined && !embed)
    	{
    		var img    = new Image();
    		img.onload = function ()
            {

    		    var colorThief = new ColorThief();
                var color      = colorThief.getColor(img);

                if(window.location.pathname != "/"){
        		    document.getElementsByTagName("body")[0].style.backgroundColor = Helper.rgbToHsl(color,true);
                    $("meta[name=theme-color]").attr("content", Helper.rgbToHex(color[0], color[1], color[2]));
                }
    		};

    		img.crossOrigin = 'Anonymous';
    		img.src         = 'https://zoff.no:8080/https://img.youtube.com/vi/'+id+'/mqdefault.jpg';
    	}
    },

    set_width: function(val){
        $(".video-container").width(val);
    },

    notifyUser: function(id, title) {
    	title = title.replace(/\\\'/g, "'").replace(/&quot;/g,"'").replace(/&amp;/g,"&");
      	if (Notification.permission === "granted" && document.hidden) {
    	    var notification = new Notification("Now Playing", {body: title, icon: "http://i.ytimg.com/vi/"+id+"/mqdefault.jpg", iconUrl: "http://i.ytimg.com/vi/"+id+"/mqdefault.jpg"});
    	    notification.onclick = function(x) { window.focus(); this.cancel(); };
    			setTimeout(function(){
    	    	notification.close();
    	    },5000);
      	}
    },

    setup_all_listeners: function()
    {
    	get_list_listener();
    	setup_youtube_listener();
    	setup_admin_listener();
    	setup_chat_listener();
    	setup_list_listener();
    },

    onYouTubeIframeAPIReady: function() {
      Player.ytplayer = new YT.Player('player', {
        videoId: video_id,
        playerVars: { rel:"0", wmode:"transparent", controls: "0" , iv_load_policy: "3", theme:"light", color:"white", showinfo: 0},
        events: {
          'onReady': Player.onPlayerReady,
          'onStateChange': Player.onPlayerStateChange,
          'onError': Player.errorHandler
        }
      });
      //Youtube.durationSetter();
    },

    durationSetter: function()
    {
        /*try{
            //duration = Player.ytplayer.getDuration();
        }catch(e){};*/
        if(duration !== undefined){
            try{
                if(!Player.stopInterval) durationBegun = true;
                dMinutes = Math.floor(duration / 60);
                dSeconds = duration - dMinutes * 60;
                currDurr = Player.ytplayer.getCurrentTime() !== undefined ? Math.floor(Player.ytplayer.getCurrentTime()) : seekTo;
                if(currDurr > duration)
                    currDurr = duration;
                minutes = Math.floor(currDurr / 60);
                seconds = currDurr - (minutes * 60);
                document.getElementById("duration").innerHTML = Helper.pad(minutes)+":"+Helper.pad(seconds)+" <span id='dash'>/</span> "+Helper.pad(dMinutes)+":"+Helper.pad(dSeconds);
                per = (100 / duration) * currDurr;
                if(per >= 100)
                    per = 100;
                else if(duration === 0)
                    per = 0;
                $("#bar").width(per+"%");
            }catch(e){

            }
        }
        if(!Player.stopInterval) setTimeout(Player.durationSetter, 1000);
    },

    loadPlayer: function() {
        if($("script[src='https://www.youtube.com/iframe_api']").length == 1){
            Player.onYouTubeIframeAPIReady();
        }else{
        tag            = document.createElement('script');
        tag.src        = "https://www.youtube.com/iframe_api";
        firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
    }

};
