var site = site || {};

el.core.utils.createNamespace(site, 'components')

site.components.SectionSliderNavigation = el.core.utils.class.extend(function(options){

  this.options = {
  };

  $.extend(this.options, options);

  this.name = 'SectionSliderNavigation';
  this.id = el.core.utils.uniqueId.get(this.name + '-');

  this.$el = this.options.$el;
  this.$slider = this.$el.find('.slider-wrapper');
  this.$slideItem = this.$slider.find('.feel-item');
  this.$videoSlide = this.$slider.find('.video-slide');
  this.$playVideoBtn = this.$slider.find('.block-button.play-button');

  this._register();

  this._init();

  console.log(this.name, this.options);

  this.$slideItem.mouseover( $.proxy(this._scrollToSlide, this) );
  this.$videoSlide.mouseover( $.proxy(this._scrollToSlide, this) );
  this.$slideItem.on('click', $.proxy(this._displaySubSection, this) );
  this.$playVideoBtn.on('click', $.proxy(this._displaySubSection, this) );

}, site.components.BaseComponent);

site.components.SectionSliderNavigation.prototype._init = function(e) {

  this.$slider.slick({
    infinite: false,
    slidesToShow: 3.1,
    slidesToScroll: 1,
    arrows: false,
    certerMode: true,
    edgeFriction: 0
  });

  this.$slider.slick('setPosition', 2);

}

site.components.SectionSliderNavigation.prototype._displaySubSection = function(e) {

  var target = $(e.currentTarget),
      action = target.data('action');

      console.log('_displaySubSection', action);


  if (action == 'play-video') {

    var videoId = target.data('yt-id');

    if (typeof videoId !== 'undefined') {
      // console.log('reproducir video: ', videoId);
      el.core.events.globalDispatcher.emit(el.core.events.event.PLAY_VIDEO, {'videoId' : videoId});
    }

  } else if ('open-section') {

    $('.'+target.data('section')+'-section').css('z-index',5).velocity({
      opacity: 1,
      top: 0
    });

  }

}

site.components.SectionSliderNavigation.prototype._scrollToSlide = function(e) {

  // console.log(e.currentTarget);
  var target = $(e.currentTarget),
      currentSlide = this.$slider.slick('slickCurrentSlide');

  if ( !target.hasClass('slick-active') ){
    // console.log( target.data('slick-index') );

    var setPos = ( currentSlide > target.data('slick-index') ) ? currentSlide-1 : currentSlide+1;

    this.$slider.slick( 'slickGoTo', setPos );

  }
}

site.components.SectionSliderNavigation.prototype.resize = function(e) {
  this.$slider.slick('resize');
}

site.components.SectionSliderNavigation.prototype.destroy = function(e) {

  this.parent.destroy.call(this);
  this.$slider.slick('unslick');

}