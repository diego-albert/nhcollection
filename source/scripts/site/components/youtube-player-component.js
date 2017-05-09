var site = site || {};

el.core.utils.createNamespace(site, 'components')

site.components.YoutubePlayerComponent = el.core.utils.class.extend(function(options){

  this.options = {

  };

  $.extend(this.options, options);

  this.name = 'YoutubePlayerComponent';
  this.id = el.core.utils.uniqueId.get(this.name + '-');

  this.$el = this.options.$el;
  this.$playerActive = this.$el.find('.player-active');
  this.$player = this.$el.find('#player');

  this._register();

  // Load the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  //Create video player
  this.init();

  console.log(this.name, this.options);

}, site.components.BaseComponent);


site.components.YoutubePlayerComponent.prototype.init = function() {

  var that = this;

  window.onYouTubeIframeAPIReady = function () {

    // Declase options YT API
    // defaults
    var defaults = {
        ratio: 16 / 9, // usually either 4/3 or 16/9 -- tweak as needed
        videoid: that.$player.data('yt-id'),
        mute: false,
        repeat: false,
        width: $(window).width() / 2,
        wrapperZIndex: 99,
        start: 0,
        state: 0
    };

    console.log(defaults.videoid);

    var options = $.extend({}, defaults, options);

    var stateChangeProxy = $.proxy(
                        function( event ){
                          that.stateChange();
                      }, this);

    window.player1;
    player1 = new YT.Player('player', {
        videoId: options.videoid,
        playerVars: {
            controls: 1,
            showinfo: 0,
            rel: 0,
            autohide: 1,
            modestbranding: 0,
            // start: 140,
            wmode: 'transparent'
        },
        events: {
            'onStateChange': stateChangeProxy
        }
    });

    that.$el.find('.block-button.play-button').on('click', $.proxy( that._openVideo, that));
    that.$playerActive.find('.vertical-button.close-video').on('click', $.proxy( that._closeVideo, that));

    }

}

site.components.YoutubePlayerComponent.prototype.stateChange = function() {

  var state = player1.getPlayerState();

  // console.log('stateChange event! STATE = ', state);

  if (state === 0){ // Video Ended State

    this._closeVideo();

  }

}

site.components.YoutubePlayerComponent.prototype._openVideo = function(e) {

  this.$playerActive.velocity({
    width: '100%'
  }, {
    display: "block",
    duration: 300,
    complete: player1.playVideo()
  });

}

site.components.YoutubePlayerComponent.prototype._closeVideo = function(e) {

  this.$playerActive.velocity({
    width: '0%'
  }, {
    display: "none",
    duration: 300,
    complete: player1.stopVideo()
  });

}

site.components.YoutubePlayerComponent.prototype.destroy = function(e) {

  this.parent.destroy.call(this);
  player1.destroy();

}