<?php

if(isset($_GET['chan'])){
    $chan = htmlspecialchars($_GET['chan']);
    header('Location: '.$chan);
}

?>
<html lang="en">
<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#">
  <meta name="robots" content="index, nofollow" />
  <?php include("header.php"); ?>
  <script type="text/javascript" src="/public/dist/main.min.js"></script>
</head>
<body class="noselect cursor-default">
    <header>
        <nav id="fp-nav">
            <div class="nav-wrapper">
                <a href="#" class="brand-logo noselect">
                    <img id="zicon" src="public/images/z.svg" alt="zoff" title="Zoff" />
                </a>
                <div id="frontpage-viewer-counter" data-position="bottom" data-delay="5" data-tooltip="Total viewers" class="noselect tooltipped" title="Divided among all channels. Hidden or not"></div>
                <!--<a href="//zoff.me" class="brand-logo brand-mobile hide-on-med-and-up">Zoff</a>-->
                <ul class="right hide-on-med-and-down">
                    <li><a class="header-buttons waves-effect waves-cyan" id="offline-mode" title="Private mode" href="#">Private</a></li>
                    <li><a class="header-buttons waves-effect waves-green" title="Remote control a Zoff player" href="https://remote.zoff.me">Remote</a></li>
                    <li><a class="header-buttons modal-trigger waves-effect waves-orange" onclick="$('#about').modal('open')">About</a></li>
                </ul>
            </div>
        </nav>
        <div id="about" class="modal">
            <div class="modal-content">
                <h4>About</h4>
                <p>Zoff is a shared (free) YouTube based radio service, built upon the YouTube API. <br><br>
                Zoff is mainly a web-based service. The website uses NodeJS with Socket.IO, MongoDB and PHP on the backend, with JavaScript, jQuery and Materialize on the frontend.<br><br>
                The team consists of Kasper Rynning-Tønnesen and Nicolas Almagro Tonne, and the project has been worked on since late 2014.<br><br>

                </p>
                <h4>Legal</h4>
                <p>Copyright © 2017 <br>Nicolas Almagro Tonne and Kasper Rynning-Tønnesen
                <br><br>
                Creative Commons License<br>
                Zoff is licensed under a <br><a href="http://creativecommons.org/licenses/by-nc-nd/3.0/no/">Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Norway License.</a>
                <br>
                Do not redistribute without permission from the developers.
                <br>
            </div>
            <div class="modal-footer">
                <a href="#" class="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
            </div>
        </div>
        <div id="donation" class="modal">
            <div class="modal-content">
                <h4>Thanks!</h4>
                <p>Thanks for your donation, we love you &lt;3
                    <br><br>
                    We will use the money for something awesome, just you wait and see!
                    <br><br>
                    We might also add your name somewhere in the code as a sign of gratitude, see if you can find it! (Might take a day or two for us to see the donation and implement it..)
                </p>
            </div>
            <div class="modal-footer">
                <a href="#" class="modal-action modal-close waves-effect waves-green btn-flat">I'm awesome! (Close)</a>
            </div>
        </div>
        <div id="help" class="modal">
            <div class="modal-content">
                <h4>Help</h4>
                <p>At the center of the site, you'll see a input field. This is meant to navigate to new or existing channels. If you input something here that doesn't exist, a new channel will be create at the blink of an eye! Remember to put a password on the list you've created, so no one else takes it from you! (It's on a first come, first serve basis). When you're ready to proceed, just click the listen button!</p>
                <p>Underneath the input fields, there are several tiles. These are channels that already exists, and they can be clicked! To listen to one of these channels, it is just to click the tile.</p>
                <p>If you want to listen to the channel without any "hickups", or being affected by other peoples votes, there is an private mode. By clicking the private button in the header, you will be free of synced listening!</p>
            </div>
            <div class="modal-footer">
                <a href="#" class=" modal-action modal-close waves-effect waves-green btn-flat">Close</a>
            </div>
        </div>

    </header>

    <div class="section mega">
        <div id="mega-background"></div>
        <h5>Create a radio channel, collaborate and listen</h5>
            <form class="channel-finder">
                    <div class="input-field">
                      <p class="prefix">zoff.me/</p>
                      <input
                          class="room-namer autocomplete desktop-search"
                          type="text"
                          id="autocomplete-input"
                          name="chan"
                          placeholder="chill"
                          title="Type channel name here to create or listen to a channel. Only alphanumerical chars. [a-zA-Z0-9]+"
                          autocomplete="off"
                          autofocus
                          required
                          pattern="[a-zA-Z0-9]+"
                          spellcheck="false"
                          maxlength="18"
                      />
                    <button class="listen-button col s2">Listen</button>
                  </div>
            </form>
            <div class="pitch outline">
                <div>Live &amp; democratic playlists with YouTube Music</div>
                <div>Play everywhere — No login required</div>
            </div>
    </div>

    <div class="section mobile-search">
            <form class="channel-finder-mobile row" id="base">
                    <div class="input-field col s12">
                        <input
                            class="autocomplete mobile-search"
                            type="text"
                            id="searchFrontpage"
                            name="chan"
                            title="Type channel name here to create or listen to a channel. Only alphanumerical chars. [a-zA-Z0-9]+"
                            autocomplete="off"
                            required pattern="[a-zA-Z0-9]+"
                            spellcheck="false"
                            maxlength="18"
                            data-length="18"
                        />
                        <label for="searchFrontpage" class="noselect">Find or create radio channel</label>
                </div>
            </form>
        </div>
    <div id="channel-load" class="progress">
            <div class="indeterminate" id="channel-load-move"></div>
        </div>
    <main class="center-align container">
        <div id="main_section_frontpage" class="section">
            <div id="preloader" class="progress">
                <div class="indeterminate"></div>
            </div>
            <div id="channel-list-container">
            <ul class="row" id="channels">
                    <li id="chan-card" class="col s6 m4 l3">
                        <div class="card sticky-action">
                            <a class="chan-link">
                                <div class="chan-bg card-image cardbg"></div>
                                <div class="card-content">
                                    <i class="material-icons pin">star_rate</i>
                                    <p class="left-align">
                                        <span class="chan-name flow-text truncate"></span>
                                        <br>
                                        <span class="highlighted">Viewers:&nbsp;</span>
                                        <span class="chan-views"></span>
                                        <br>
                                        <span class="highlighted">Songs:&nbsp;</span>
                                        <span class="chan-songs"></span>
                                    </p>
                                </div>
                                <div class="card-action noselect">
                                    <span class="chan-link waves-effect waves-orange btn-flat">Listen</span>
                                </div>
                                <div class="card-reveal">
                                  <span class="card-title grey-text text-darken-4"></span>
                                  <p class="description_text"></p>
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </main>

    <?php
      $subdomain =  array_shift((explode(".",$_SERVER['HTTP_HOST'])));
      if($subdomain == "fb"){}
      else {
        include("public/php/footer.php");
      }
    ?>
	</body>
</html>
