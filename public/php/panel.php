<li class="no-padding">
    <ul class="collapsible collapsible-accordion">
        <div class="nav-btn close-settings clickable" title="Close" id="closeSettings">
            <i class="material-icons auto-margin">close</i>
        </div>
        <li>
            <a class="col s9 collapsible-header bold waves-effect admin-settings">
                Channel Settings
                <i class="material-icons">tune</i>
            </a>
            <div class="collapsible-body">
                <form action="#" id="adminForm" onsubmit="return false;">
                    <ul>
                        <li class="white-bg">
                                <div class="input-field field-settings">
                                  <i id="admin-lock" class="material-icons">lock</i>
                                    <input placeholder="Enter channel password" id="password" type="password" class="validate" />
                                </div>
                        </li>
                        <li>
                            <span class="switch-text">
                            Add songs
                            </span>
                            <div class="switch"><label>
                            <span class="left-span">Anyone</span>
                            <input name="addsongs" type="checkbox" class="conf" /><span class="lever"></span>
                            <span class="right-span">Admin</span>
                        </label></div></li>

                        <li>
                          <span class="switch-text">
                            Vote
                          </span>
                            <div class="switch"><label>
                            <span class="left-span">Anyone</span>
                            <input name="vote" type="checkbox" class="conf" /><span class="lever"></span>
                            <span class="right-span">Admin</span>
                        </label></div></li>

                        <li><span class="switch-text">
                            Shuffle
                          </span>
                            <div class="switch"><label>
                            <span class="left-span">Anyone</span>
                            <input name="shuffle" type="checkbox" class="conf" /><span class="lever"></span>
                            <span class="right-span">Admin</span>
                        </label></div></li>

                        <li><span class="switch-text">
                            Skip
                          </span>
                            <div class="switch"><label>
                            <span class="left-span">Anyone</span>
                            <input name="skip" type="checkbox" class="conf" /><span class="lever"></span>
                            <span class="right-span">Admin</span>
                        </label></div></li>

                        <li><span class="switch-text">
                            Song length
                          </span>
                            <div class="switch"><label>
                            <span class="left-span">Any</span>
                            <input name="longsongs" type="checkbox" class="conf" /><span class="lever"></span>
                            <span class="right-span">Short</span>
                        </label></div></li>

                        <li><span class="switch-text">
                            Type
                          </span>
                            <div class="switch"><label>
                            <span class="left-span">Any</span>
                            <input name="allvideos" type="checkbox" class="conf" /><span class="lever"></span>
                            <span class="right-span">Song</span>
                        </label></div></li>


                        <li><span class="switch-text">
                            Frontpage
                          </span>
                            <div class="switch"><label>
                            <span class="left-span">Hide</span>
                            <input name="frontpage" type="checkbox" class="conf" /><span class="lever"></span>
                            <span class="right-span">Display</span>
                        </label></div></li>

                        <li><span class="switch-text">
                            After play
                          </span>
                            <div class="switch"><label>
                            <span class="left-span">Keep</span>
                            <input name="removeplay" type="checkbox" class="conf" /><span class="lever"></span>
                            <span class="right-span">Remove</span>
                        </label></div></li>
                      </ul>
                </form>
            </div>
        </li>
    </ul>
</li>
<li class="no-padding">
    <ul class="collapsible collapsible-accordion">
        <li>
            <a class="collapsible-header bold waves-effect">Channel Info
                <i class="material-icons">info_outline</i>
            </a>
            <div class="collapsible-body">
                <ul>
                    <li>
                        <form id="thumbnail_form" style="display:none;">
                            <div class="input-field col s12">
                                <input type="text" placeholder="Thumbnail" name="chan_thumbnail" id="chan_thumbnail" autocomplete="off" />
                            </div>
                        </form>
                    </li>
                    <li>
                        <form id="description_form" style="display:none;">
                            <div class="input-field col s12">
                                <input type="text" placeholder="Description" name="chan_description" id="chan_description" autocomplete="off" />
                            </div>
                        </form>
                    </li>
                    <li>
                        <div id="thumbnail_image">
                        </div>
                        <div id="description_area">
                            This channel doesn't have a description yet..
                        </div>
                    </li>
                </ul>
            </div>
    </ul>
</li>
<li class="no-padding remote-panel hide-on-small-only">
    <ul class="collapsible collapsible-accordion">
        <li>
            <a class="collapsible-header bold waves-effect">Remote Control
                <i class="material-icons">settings_remote</i>
            </a>
            <div class="collapsible-body">
                <ul>
                    <li>
                        <span class="switch-text">
                            Enable Remote
                        </span>
                        <div class="switch"><label>
                            Disabled
                            <input name="remote_switch" type="checkbox" class="remote_switch_class" checked /><span class="lever"></span>
                            Enabled
                            </label>
                        </div>
                        <div><a id="code-link" target="_blank">
                            <img id="code-qr" alt="QR code for control" title="Link to control this Zöff player" src="https://chart.googleapis.com/chart?chs=221x221&amp;cht=qr&amp;choe=UTF-8&amp;chld=L%7C1&amp;chl=http://zoff.no" />

                                <h4 id="code-text">ABBADUR</h4>
                        </a></div>
                        <p>
                          You can control this Zöff instance from another device by going to <b>https://remote.zoff.no/</b>
                      </p>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</li>

<li class="no-padding offline-panel hide-on-small-only">
    <ul class="collapsible collapsible-accordion">
        <li>
            <a class="collapsible-header bold waves-effect">Private Mode
                <i class="material-icons">visibility_off</i>
            </a>
            <div class="collapsible-body">
                <ul>
                    <li>
                        <span class="switch-text">
                            Private Mode
                        </span>
                        <div class="switch"><label>
                            Disabled
                            <input name="offline_switch" type="checkbox" class="offline_switch_class" /><span class="lever"></span>
                            Enabled
                            </label>
                        </div>
                        <div id="offline-info">
                          By enabling private mode, you won't receive updates in position of the currently playing song, and you'll be able to vote as many times as you please.
                      </div>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</li>

<li class="no-padding show-only-mobile">
    <ul class="collapsible collapsible-accordion">
        <li>
            <a class="collapsible-header bold waves-effect import-a">Remote Controller
                <i class="material-icons">settings_remote</i>
            </a>
            <div class="collapsible-body">
                <ul id="remote-mobile-container">
                    <li class="white-bg">
                        <p id="remote_header">Control another client</p>
                        <form action="#" class="row" id="remoteform">
                            <div class="input-field col s12">
                                <input
                                    class="input-field"
                                    type="text"
                                    id="remote_channel"
                                    name="chan"
                                    autocomplete="off"
                                    spellcheck="false"
                                    maxlength="10"
                                    data-length="10"
                                    placeholder="ID to remotecontroll"
                                />
                            </div>
                        </form>
                        <div id="remote-sidebar-buttons-container">
                            <button id="playbutton_remote" class="remote-button waves-effect btn green" disabled>
                                <i id="remote_play" class="material-icons">play_arrow</i>
                            </button>
                            <button id="pausebutton_remote" class="remote-button waves-effect btn gray" disabled>
                            <i id="remote_pause" class="material-icons">pause</i></button>
                            <button id="skipbutton_remote" class="remote-button waves-effect btn blue" disabled>
                                <i id="remote_skip" class="material-icons">skip_next</i>
                            </button>
                        </div>
                        <div class="" id="volume-control-remote" title="Volume"></div>
                        <i class="material-icons slider-vol-mobile">volume_up</i>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</li>

<li class="no-padding">
    <ul class="collapsible collapsible-accordion">
        <li>
            <a class="collapsible-header bold waves-effect import-a">Import Playlist
                <i class="material-icons">keyboard_arrow_down</i>
            </a>
            <div class="collapsible-body">
                <ul>
                    <li class="white-bg">
                        <div class="input-field field-settings youtube_unclicked import-buttons">
                            <a class="modal-trigger waves-effect red btn import-youtube" title="Import from YouTube playlist">
                              <img src="/public/images/youtube.png" class="youtube_logo" alt="Youtube Logo" />
                            </a>
                        </div>
                        <div class="input-field field-settings youtube_clicked">
                            <form action="#" id="listImport">
                                <i class="material-icons import-icon">playlist_add</i>
                                <input title="Input YouTube-playlist url here!" placeholder="Enter YouTube-list URL" id="import" type="text" class="validate" autocomplete="off" />
                                    <div class="valign playlist_loader_padding">
                                        <div id="playlist_loader" class="preloader-wrapper small active hide">
                                            <div class="spinner-layer spinner-blue">
                                                <div class="circle-clipper left">
                                                    <div class="circle"></div>
                                                </div>
                                                <div class="gap-patch">
                                                    <div class="circle"></div>
                                                </div>
                                                <div class="circle-clipper right">
                                                    <div class="circle"></div>
                                                </div>
                                            </div>

                                            <div class="spinner-layer spinner-red">
                                                <div class="circle-clipper left">
                                                    <div class="circle"></div>
                                                </div>
                                                <div class="gap-patch">
                                                    <div class="circle"></div>
                                                </div>
                                                <div class="circle-clipper right">
                                                    <div class="circle"></div>
                                                </div>
                                            </div>

                                            <div class="spinner-layer spinner-yellow">
                                                <div class="circle-clipper left">
                                                    <div class="circle"></div>
                                                </div>
                                                <div class="gap-patch">
                                                    <div class="circle"></div>
                                                </div>
                                                <div class="circle-clipper right">
                                                    <div class="circle"></div>
                                                </div>
                                            </div>

                                            <div class="spinner-layer spinner-green">
                                                <div class="circle-clipper left">
                                                    <div class="circle"></div>
                                                </div>
                                                <div class="gap-patch">
                                                    <div class="circle"></div>
                                                </div>
                                                <div class="circle-clipper right">
                                                    <div class="circle"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </form>
                        </div>
                    </li>
                    <li class="white-bg">
                        <div class="input-field field-settings spotify_unauthenticated import-buttons">
                            <a class="modal-trigger waves-effect green lighten btn import-spotify-auth" title="Import Spotify playlist">
                              <img src="/public/images/spotify.png" class="left spotify_logo" alt="Spotify Logo" />Spotify
                            </a>
                        </div>
                        <div class="input-field field-settings spotify_authenticated">
                            <form action="#" id="listImportSpotify">
                                <i class="material-icons import-icon">playlist_add</i>
                                <input title="Input Spotify-playlist url here!" placeholder="Enter Spotify-list url" id="import_spotify" type="text" class="validate" autocomplete="off" />
                                <div id="playlist_loader_spotify" class="valign playlist_loader_padding hide">
                                    <div class="preloader-wrapper small active">
                                        <div class="spinner-layer spinner-blue">
                                            <div class="circle-clipper left">
                                                <div class="circle"></div>
                                            </div>
                                            <div class="gap-patch">
                                                <div class="circle"></div>
                                            </div>
                                            <div class="circle-clipper right">
                                                <div class="circle"></div>
                                            </div>
                                        </div>

                                        <div class="spinner-layer spinner-red">
                                            <div class="circle-clipper left">
                                                <div class="circle"></div>
                                            </div>
                                            <div class="gap-patch">
                                                <div class="circle"></div>
                                            </div>
                                            <div class="circle-clipper right">
                                                <div class="circle"></div>
                                            </div>
                                        </div>

                                        <div class="spinner-layer spinner-yellow">
                                            <div class="circle-clipper left">
                                                <div class="circle"></div>
                                            </div>
                                            <div class="gap-patch">
                                                <div class="circle"></div>
                                            </div>
                                            <div class="circle-clipper right">
                                                <div class="circle"></div>
                                            </div>
                                        </div>

                                        <div class="spinner-layer spinner-green">
                                            <div class="circle-clipper left">
                                                <div class="circle"></div>
                                            </div>
                                            <div class="gap-patch">
                                                <div class="circle"></div>
                                            </div>
                                            <div class="circle-clipper right">
                                                <div class="circle"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>
                    <li class="not-imported white-bg hide">
                        <div class="center-align">Not imported</div>
                        <ul class="input-field field-settings not-imported-container">
                            <li class="white-bg not-imported-element">
                                <div class="extra-add-text truncate"></div>
                                <a href="#" class="waves-effect red lighten btn right extra-button extra-button-delete">X</a>
                                <a href="#" class="waves-effect green lighten btn right extra-button extra-button-search">
                                <i class="material-icons search-extra">search</i></a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</li>

<li class="no-padding">
    <ul class="collapsible collapsible-accordion white-bg">
        <li>
            <a class="collapsible-header bold waves-effect export-a">Export Playlist
                <i class="material-icons">keyboard_arrow_up</i>
            </a>
            <div class="collapsible-body">
                <ul>
                    <li class="white-bg">
                        <div class="input-field field-settings youtube_export_button export-buttons">
                            <a class="modal-trigger waves-effect red btn export-youtube" id="listExport" title="Export to YouTube">
                              <img src="/public/images/youtube.png" class="youtube_logo" alt="Youtube Logo" />
                            </a>
                        </div>
                    </li>
                    <li class="white-bg">
                        <div class="input-field field-settings spotify_export_button export-buttons">
                            <a class="modal-trigger waves-effect green lighten btn export-spotify-auth" title="Export Spotify playlist">
                              <img src="/public/images/spotify.png" class="left spotify_logo" alt="Spotify Logo" />Spotify
                            </a>
                        </div>
                    </li>
                    <li class="exported-list-container white-bg hide">
                        <div class="valign playlist_loader_padding">
                            <div id="playlist_loader_export" class="preloader-wrapper small active hide">
                                <div class="spinner-layer spinner-blue">
                                    <div class="circle-clipper left">
                                        <div class="circle"></div>
                                    </div>
                                    <div class="gap-patch">
                                        <div class="circle"></div>
                                    </div>
                                    <div class="circle-clipper right">
                                        <div class="circle"></div>
                                    </div>
                                </div>

                                <div class="spinner-layer spinner-red">
                                    <div class="circle-clipper left">
                                        <div class="circle"></div>
                                    </div>
                                    <div class="gap-patch">
                                        <div class="circle"></div>
                                    </div>
                                    <div class="circle-clipper right">
                                        <div class="circle"></div>
                                    </div>
                                </div>

                                <div class="spinner-layer spinner-yellow">
                                    <div class="circle-clipper left">
                                        <div class="circle"></div>
                                    </div>
                                    <div class="gap-patch">
                                        <div class="circle"></div>
                                    </div>
                                    <div class="circle-clipper right">
                                        <div class="circle"></div>
                                    </div>
                                </div>

                                <div class="spinner-layer spinner-green">
                                    <div class="circle-clipper left">
                                        <div class="circle"></div>
                                    </div>
                                    <div class="gap-patch">
                                        <div class="circle"></div>
                                    </div>
                                    <div class="circle-clipper right">
                                        <div class="circle"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="white-bg">
                        <div class="exported-list input-field field-settings export-buttons">
                        </div>
                        <li class="not-exported white-bg hide">
                            <div class="center-align">Not exported songs</div>
                            <ul class="input-field field-settings not-exported-container">
                                <li class="white-bg not-exported-element">
                                    <div id="extra-export-container-text">
                                        <input class="extra-add-text truncate" readonly />
                                    </div>
                                    <a href="#" class="waves-effect red lighten btn right extra-button extra-button-delete">X</a>
                                </li>
                            </ul>
                        </li>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</li>

<!--
<li class="no-padding">
    <h5 id="desc-title">List description</h5>
    <span id="description"></span>
</li>
-->
