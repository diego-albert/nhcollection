var site = site || {};

el.core.utils.createNamespace(site, 'components')

site.components.YoutubePlayerComponent = el.core.utils.class.extend(function(options){

  this.options = {

  };

  $.extend(this.options, options);

  this.name = 'YoutubePlayerComponent';
  this.id = el.core.utils.uniqueId.get(this.name + '-');

  this.$el = this.options.$el;
  this.$player = this.$el.find('#player');

  this._register();

  this.init();

  console.log(this.name, this.options);

}, site.components.BaseComponent);


site.components.YoutubePlayerComponent.prototype.init = function(e) {
	console.log('API loading');
	var that = this;
	// Load load Youtube Player API
	var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

}

site.components.YoutubePlayerComponent.prototype.destroy = function(e) {

  this.parent.destroy.call(this);
}

var player;
function onYouTubeIframeAPIReady() {

	console.log('API loaded');

  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'OgO2U4quFDk',
    events: {
      'onReady': onPlayerReady
      // 'onStateChange': onPlayerStateChange
    }

  });
}

function onPlayerReady(event) {
	console.log('playing video!');
  event.target.playVideo();
}