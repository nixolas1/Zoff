var List = {

    empty: false,

    channel_function: function(msg)
    {
        switch(msg.type)
        {
            case "list":
                List.populate_list(msg.playlist);
                break;
            case "added":
                List.added_song(msg.value);
                break;
            case "deleted":
                List.deleted_song(msg.value);
                break;
            case "vote":
                List.voted_song(msg.value, msg.time);
                break;
            case "song_change":
                if(window.location.pathname != "/") List.song_change(msg.time);
                break;
        }
    },

    insertAtBeginning: function(song_info, transition) {
        var add = List.generateSong(song_info, transition, false, true, false);
        $("#wrapper").append(add);
    },

    insertAtIndex: function(song_info, transition) {
        var i = List.getIndexOfSong(song_info.id);
        if(!song_info.now_playing){

            var add = List.generateSong(song_info, transition, false, true, false);
            if(i === 0) {
                $("#wrapper").prepend(add);
            } else {
                $("#wrapper > div:nth-child(" + (i) + ")").after(add);
            }
        }
       var added = $("#wrapper").children()[i];

        if(transition)
        {
            setTimeout(function(){
                $(added).css("height", 66);
            },5);
        }
    },

    populate_list: function(msg)
    {
        if(list_html === undefined) list_html = $("#list-song-html").html();
        full_playlist = msg;

        List.sortList();
		$("#wrapper").empty();

        Helper.log("---------------------------");
        Helper.log("---------FULL PLAYLIST-----");
        Helper.log(full_playlist);
        Helper.log("---------------------------");

        if(full_playlist.length > 1){
    		$.each(full_playlist, function(j, current_song){
    			if(!current_song.now_playing){ //check that the song isnt playing
                    $("#wrapper").append(List.generateSong(current_song, false, lazy_load, true));
    			}
    		});


            if(lazy_load){
                if(Helper.mobilecheck()) $(".list-image").lazyload({});
                else{
                    $(".list-image").lazyload({container: $("#wrapper")}).removeClass("lazy");

                    document.getElementById('wrapper').scrollTop += 1;
                    document.getElementById('wrapper').scrollTop += -1;
                }
            }
        }else{
            List.empty = true;
            $("#wrapper").append("<span id='empty-channel-message'>The playlist is empty.</span>");
        }
		$("#settings").css("visibility", "visible");
		$("#settings").css("opacity", "1");
		$("#wrapper").css("opacity", "1");
    },

    added_song: function(added){
        var now_playing;

        if(full_playlist.length !== 0){
            now_playing = full_playlist.pop();
        }
        full_playlist.push(added);
        List.sortList();
        if(now_playing){
            full_playlist.push(now_playing);
        }
        $("#suggested-"+added.id).remove();
        if(List.empty){
            List.empty = false;
        }
        $("#empty-channel-message").remove();
        List.insertAtIndex(added, true);

    },

    deleted_song: function(deleted){

        var index              = List.getIndexOfSong(deleted);
        var to_delete          = $("#wrapper").children()[index];
        try{
            to_delete.style.height = 0;

            setTimeout(function()
            {
                $("#"+deleted).remove();
                full_playlist.splice(List.getIndexOfSong(deleted), 1);
            }, 305);

            document.getElementById('wrapper').scrollTop += 1;
            document.getElementById('wrapper').scrollTop += -1;
        }catch(err){
            full_playlist.splice(List.getIndexOfSong(deleted), 1);
            if(!List.empty)
                $("#wrapper").children()[$("#wrapper").children().length-1].remove();
        }
        if(full_playlist.length <= 2){
            List.empty = true;
            $("#wrapper").append("<span id='empty-channel-message'>The playlist is empty.</span>");
        }
        $("#suggested-"+deleted).remove();
        Suggestions.checkUserEmpty();
    },

    voted_song: function(voted, time){
        var index_of_song = List.getIndexOfSong(voted);
        var song_voted_on = full_playlist[index_of_song];

        full_playlist[index_of_song].votes += 1;
        full_playlist[index_of_song].added = time;

        List.sortList();
        $("#"+voted).remove();
        List.insertAtIndex(song_voted_on, false);
    },

    song_change: function(time){
        var length = full_playlist.length-1;

        full_playlist[0].now_playing        = true;
        full_playlist[0].votes              = 0;
        full_playlist[0].guids              = [];
        full_playlist[0].added              = time;
        full_playlist[length].now_playing   = false;
        Helper.log("---------------------------");
        Helper.log("---SONG ON FIRST INDEX-----");
        Helper.log(full_playlist[0]);
        Helper.log("---------------------------");
        try{
            full_playlist.push(full_playlist.shift());
            if(!List.empty)
                $("#wrapper").children()[0].remove();
            if($("#wrapper").children().length === 0) {
                List.empty = true;
                $("#wrapper").append("<span id='empty-channel-message'>The playlist is empty.</span>");
            }
            List.insertAtIndex(full_playlist[length-1], false);
            document.getElementById('wrapper').scrollTop += 1;
            document.getElementById('wrapper').scrollTop += -1;
        }catch(e){}
    },

    vote: function(id, vote){
    	socket.emit('vote', {channel: chan, id: id, type: vote, adminpass: adminpass});
    	return true;
    },

    skip: function(){
    	socket.emit('skip', {pass: adminpass, id:video_id, channel: chan.toLowerCase()});
    	return true;
    },

    exportToYoutube: function(){
        var request_url = "https://www.googleapis.com/youtube/v3/playlists?part=snippet";
        $.ajax({
            type: "POST",
            url: request_url,
            headers: {
                'Authorization': 'Bearer ' + access_token_data_youtube.access_token,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                    snippet: {
                        title: chan.toLowerCase(),
                        description: 'Playlist exported from zoff',
                    }
            }),
            success: function(response){
                var number_added = 0;
                var playlist_id = response.id;
                $.each(full_playlist, function(i, data){
                    var request_url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet";
                    $.ajax({
                        type: "POST",
                        url: request_url,
                        headers: {
                            'Authorization': 'Bearer ' + access_token_data_youtube.access_token,
                            'Content-Type': 'application/json'
                        },
                        data: JSON.stringify({
                            'snippet': {
                                'playlistId': playlist_id,
                                'resourceId': {
                                    'kind': 'youtube#video',
                                    'videoId': data.id
                                }
                            }
                        }),
                        success: function(response){
                            Helper.log("Added video: " + data.id + " to playlist id " + playlist_id);
                            if(number_added == full_playlist.length - 1){
                                Helper.log("All videoes added!");
                                Helper.log("url: https://www.youtube.com/playlist?list=" + playlist_id);
                                $(".exported-list").append("<h5>Exported URL:</h5>");
                                $(".exported-list").append("<a target='_blank' class='btn orange exported-playlist' href='https://www.youtube.com/playlist?list=" + playlist_id + "'>" + chan + "</a>");
                                $("#playlist_loader_export").addClass("hide");
                                //$(".youtube_export_button").removeClass("hide");
                                $(".exported-list-container").removeClass("hide");
                            }
                            number_added += 1;
                        }
                    });
                });
            },
            error: function(response){
                Helper.log(response);
            }
        });
    },

    importOldList: function(chan){
        var ids="";
        var num=0;

    	playlist_url = "lists/"+chan+".json";

    	list = $.parseJSON($.ajax({
    		      type: "GET",
    		      url: playlist_url,
    		      async: false
    	       }).responseText);

    	$.each(list.songs, function(i,data)
    	{
    		ids+=data.id+",";

    		if(num>45){
    			Search.addVideos(ids);

    			ids = "";
    			num = 0;
    		}
    		num++;
    	});

    	Search.addVideos(ids);
    	document.getElementById("search").value = "";
    },

    sortList: function()
    {
        full_playlist.sort(Helper.predicate({
           name: 'votes',
           reverse: true
       }, {
           name: 'added',
           reverse: false
       }, {
           name: 'title',
           reverse: false
       }));
    },

    show: function(){
    	if(!Helper.mobilecheck())
    	{
    		if(showToggle){
    	    	showToggle=false;
    	    	$("#toptitle").empty();
    	        $("#chan").addClass("bigChan");
    	        //$("#chan").html("zoff.no/"+encodeURI(chan));
    	        $("#chan").html("zoff.no/"+chan.toLowerCase());
    	    }else{
    	    	showToggle=true;
    	    	$("#toptitle").html("Zöff");
    	    	$("#chan").removeClass("bigChan");
    	    	$("#chan").html(chan);
    	   }
    	}
    },

    generateSong: function(song_info, transition, lazy, list, user)
    {
    	var video_id    = song_info.id;
    	var video_title = song_info.title;
    	var video_votes = song_info.votes;
    	var video_thumb = "background-image:url('//img.youtube.com/vi/"+video_id+"/mqdefault.jpg');";
        var song        = $("<div>"+list_html+"</div>");
        var image_attr  = "style";

        var attr;
        var del_attr;

        if(transition) song.find("#list-song").css("height", 0);
        if(!w_p) song.find(".card-action").removeClass("hide");
        if(video_votes == 1)song.find(".vote-text").text("vote");
        if(lazy){
            video_thumb = "//img.youtube.com/vi/"+video_id+"/mqdefault.jpg";
            image_attr  = "data-original";
        }

        if(list){
            song.find(".list-votes").text(video_votes);
            song.find("#list-song").attr("id", video_id);
            song.find(".vote-container").attr("title", video_title);

            attr     = ".vote-container";
            del_attr = "del";
        }else if(!list){

            song.find(".vote-text").text(song_info.duration);

            attr     = ".add-suggested";
            if(user)
                del_attr = "del_user_suggested";
            else
                del_attr = "del_suggested";

            song.find(".vote-container").attr("class", "clickable add-suggested");
            song.find(".add-suggested").attr("title", video_title);
            song.find("#del").attr("id", del_attr);
            song.find(attr).attr("data-video-title", video_title);
            song.find(attr).attr("data-video-length", song_info.length);
            song.find("#list-song").attr("id", "suggested-" + video_id);
            song.find(".list-image").attr("class", song.find(".list-image").attr("class").replace("list-image", "list-suggested-image"));

        }

    	song.find(".list-title").text(video_title);
    	song.find(".list-title").attr("title", video_title);
    	//song.find(".vote-container").attr("onclick", "vote('"+video_id+"','pos')");
        song.find(attr).attr("data-video-id", video_id);
    	song.find(".list-image").attr(image_attr,video_thumb);
        song.find(".list-suggested-image").attr(image_attr,video_thumb);
        song.find("#"+del_attr).attr("data-video-id", video_id);
    	//song.find("#del").attr("onclick", "vote('"+video_id+"', 'del')");

    	return song.html();
    },

    getIndexOfSong: function(id)
    {
    	indexes = $.map(full_playlist, function(obj, index) {
    	    if(obj.id == id) {
    	        return index;
    	    }
    	});
    	return indexes[0];
    },

    scrollTop: function(){
        $("#wrapper").scrollTop(0);
    },

    scrollBottom: function(){
        $("#wrapper").scrollTop($("#wrapper")[0].scrollHeight);
    }
};
