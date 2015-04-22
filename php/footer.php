<footer class="page-footer">
    <div class="container">
        <div class="row">
            <div class="col l6 s12">
                <h5 class="white-text">Zöff</h5>
                <p class="grey-text text-lighten-4">The shared YouTube radio</p>
                <p class="grey-text text-lighten-4">
                    Being built around the YouTube search and video API
                    it enables the creation of collaboratiive and shared live playlists,
                    with billions of videos and songs to choose from, all for free and without registration.
                    <br>
                    Enjoy!
                </p>
            </div>
            <div class="col l4 offset-l2 s12 valign-wrapper">
                <ul>
                    <li>
                        <a href="https://play.google.com/store/apps/details?id=no.lqasse.zoff">
                            <img title="Get it on Google Play" src="static/images/google_play.png">
                        </a>
                        <a href="https://github.com/nixolas1/Zoff">
                            <img title="Contribute on GitHub" src="static/images/GitHub_Logo.png">
                        </a>
                        <p>
                            <a class="waves-effect waves-light btn light-blue share shareface" href="https://www.facebook.com/sharer/sharer.php?u=http://zoff.no/<?php echo $list; ?>" target="popup" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=http://zoff.no/<?php echo $list; ?>','Share Playlist','width=600,height=300')">
                                <img class="left" src="static/images/facebook.png">Share on Facebook
                            </a>
                        </p>
                        <p>
                            <a class="waves-effect waves-light btn light-blue share" href="http://twitter.com/intent/tweet?url=http://zoff.no/<?php echo $list; ?>&text=Check out this playlist <?php echo ucfirst($list); ?> on Zöff!&via=zoffmusic" target="popup" onclick="window.open('http://twitter.com/intent/tweet?url=http://zoff.no/<?php echo $list; ?>&text=Check out this playlist <?php echo ucfirst($list); ?> on Zöff!&via=zoffmusic','Share Playlist','width=600,height=300')">
                                <img class="left" src="static/images/twitter.png">Share on Twitter
                            </a>
                        </p>
                        <p>
                            <a href="https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=http://<?php echo $_SERVER['HTTP_HOST'].'/'.$list; ?>&choe=UTF-8&chld=L|1" >
                                <img src="https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=http://<?php echo $_SERVER['HTTP_HOST'].'/'.$list; ?>&choe=UTF-8&chld=L|1" alt="QRCode for link" title="QR code for this page, for easy sharing!">
                            </a>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="footer-copyright">
        <div class="container">
            &copy; <?php echo date("Y"); ?>
            <a href="//nixo.no">Nixo</a> &amp;
            <a href="//kasperrt.no">KasperRT</a>
        </div>
    </div>
</footer>
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"></script>
<script src="//cdn.socket.io/socket.io-1.2.0.js"></script>
<script>
    var socket = io.connect('http://'+window.location.hostname+':3000');
    var guid = "<?php echo $guid; ?>";
    socket.emit('list', '<?php echo $list; ?>,'+guid);
</script>


<script type="text/javascript" src="static/js/list.js"></script>
<script type="text/javascript" src="static/js/searchlist.js"></script>
<script type="text/javascript" src="static/js/playercontrols.js"></script>
<script type="text/javascript" src="static/js/youtube.js"></script>
<script type="text/javascript" src="static/js/search.js"></script>
<script type="text/javascript" src="static/js/admin.js"></script>
<script type="text/javascript" src="static/js/lib/materialize.js"></script>
<script type="text/javascript" src="static/js/lib/color-thief.min.js"></script>
<script type="text/javascript" src="static/js/lib/iscroll-min.js"></script>

<!-- Piwik tracking -->
<script type="text/javascript">
  var _paq = _paq || [];
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//zoff.no/analyse/";
    _paq.push(['setTrackerUrl', u+'piwik.php']);
    _paq.push(['setSiteId', 1]);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
  })();
</script>
<noscript><p><img src="//zoff.no/analyse/piwik.php?idsite=1" style="border:0;" alt="" /></p></noscript>
<!-- End Piwik Code -->
