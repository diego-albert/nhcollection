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
  this.$playVideoBtn = this.$el.find('.block-button.play-video-js');

  this._register();

  this.init();

  console.log(this.name, this.options);

}, site.components.BaseComponent);


site.components.YoutubePlayerComponent.prototype.init = function() {

  if ( typeof window.YT == 'undefined' ) { // Check if API is already loaded

    // Load the IFrame Player API code asynchronously.
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  }

  // el.core.events.globalDispatcher.once(el.core.events.event.YOUTUBE_API_LOADED, $.proxy(this._createVideo, this));
  // el.core.events.globalDispatcher.on(el.core.events.event.PLAY_VIDEO, $.proxy(this._createVideo, this));
  el.core.events.globalDispatcher.on(el.core.events.event.PLAY_VIDEO, $.proxy(this._openVideo, this));
  this.$playerActive.find('.vertical-button.close-video').on('click', $.proxy( this._closeVideo, this));
  this.$playVideoBtn.on('click', function(e){
    el.core.events.globalDispatcher.emit(el.core.events.event.PLAY_VIDEO, {'videoId' : $(e.currentTarget).data('yt-id') });
  } );

  window.onYouTubeIframeAPIReady = function () {

    // el.core.events.globalDispatcher.emit(el.core.events.event.YOUTUBE_API_LOADED);
    console.log('YOUTUBE API LOADED!');

  }

}

site.components.YoutubePlayerComponent.prototype.stateChange = function() {

  var state = window.player1.getPlayerState();

  // console.log('stateChange event! STATE = ', state);

  if (state === 0){ // Video Ended State

    this._closeVideo();

  }

}

site.components.YoutubePlayerComponent.prototype._createVideo = function(videoId) {

    var that = this;

    var stateChangeProxy = $.proxy(function( event ){
        that.stateChange();
    }, this);

    var onPlayerReadyProxy = $.proxy(function(event){
      window.player1.playVideo();
    }, this);

    this.$playerActive.find('#player').replaceWith('<div id="player"></div>');

    window.player1 = '';
    window.player1 = new YT.Player('player', {
        videoId: videoId,
        playerVars: {
            controls: 1,
            showinfo: 0,
            rel: 0,
            autohide: 1,
            modestbranding: 0,
            wmode: 'transparent'
        },
        events: {
          'onReady': onPlayerReadyProxy,
          'onStateChange': stateChangeProxy
        }
    });

}

site.components.YoutubePlayerComponent.prototype._openVideo = function(e) {

  var that = this,
      videoId = e.videoId;

  this.$playerActive.velocity({
    width: '100%'
  }, {
    display: "block",
    duration: 300,
    begin: function() {
      that._createVideo(e.videoId);
    }
  });

}

site.components.YoutubePlayerComponent.prototype._closeVideo = function(e) {

  this.$playerActive.velocity({
    width: '0%'
  }, {
    display: "none",
    duration: 300,
    complete: function(){
      window.player1.stopVideo();
    }
  });

}

site.components.YoutubePlayerComponent.prototype.destroy = function(e) {

  this.parent.destroy.call(this);
  window.player1 = '';

}