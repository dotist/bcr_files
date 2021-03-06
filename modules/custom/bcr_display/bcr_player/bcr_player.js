(function($) {

  Drupal.behaviors.bcrPlayer = {
  attach: function (context, settings) {


    $('.region-persistent', context).once(function() {

      $("#jquery_jplayer_1").jPlayer({
        ready: function (event) {
          $(this).jPlayer("setMedia", {
            mp3:"http://berlincommunityradio.out.airtime.pro:8000/berlincommunityradio_a"
          });
          var href = window.location.href;
          // no autoplay in dev env
          if (href.indexOf('bcr.i') == -1) {
            $(this).jPlayer('play');
          }
        },
        supplied: "mp3"
      });

    });

  }};
})(jQuery);