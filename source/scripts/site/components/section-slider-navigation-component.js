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

  this.enableSlider = true;
  this.centerMode = this.$el.data('align-center');
  this.slidesToShow = (this.centerMode) ? 3 : 3.1;
  this.defaultSliderPosition = (this.centerMode) ? 1 : 0;

  this._register();

  this._init();

  console.log(this.name, this.options);

  this.$slideItem.mouseover( $.proxy(this._scrollToSlide, this) );
  this.$videoSlide.mouseover( $.proxy(this._scrollToSlide, this) );
  this.$slideItem.on('click', $.proxy(this._displaySubSection, this) );
  this.$playVideoBtn.on('click', $.proxy(this._displaySubSection, this) );

}, site.components.BaseComponent);

site.components.SectionSliderNavigation.prototype._init = function(e) {

  var that = this;

  this.$slider.slick({
    infinite: false,
    slidesToShow: this.slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    centerMode: this.centerMode,
    edgeFriction: 0,
    initialSlide: 0,
    draggable: false,
    refresh: true
  });

  console.log( '***',this.defaultSliderPosition, this.slidesToShow );

  this.$slider.slick('slickGoTo', this.defaultSliderPosition );

  this.$slider.on('afterChange', function(event, slick){
    // console.log('transition finished! enable slider true!');
    that.enableSlider = true;
  });

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

  var target = $(e.currentTarget),
      targetSlider = target.data('slick-index'),
      currentSlide = this.$slider.slick('slickCurrentSlide'),
      totalSlides = this.$slider.slick("getSlick").slideCount;

  console.log('HoverSlider: ', targetSlider, 'CurrentSlider: ', currentSlide, 'SlideCount: ', this.$slider.slick("getSlick").slideCount );

  // console.log( '++++', this.enableSlider );

  if ( !target.hasClass('slick-active') && this.enableSlider ){

    if ( this.centerMode ) {

      if ( currentSlide+2 ===  targetSlider ) { // Scroll in Right way

        this.enableSlider = false;
        this.$slider.slick( 'slickGoTo', currentSlide+1 );

        if ( currentSlide === 1 ) { // If we are in default Pos, and we want to start to navigate

            this.$slider.find('.slick-list').velocity({ 'left' : 0 });

        } else if ( targetSlider + 1 === totalSlides ) {

            this.$slider.find('.slick-list').velocity({ 'left' : '50px' });

        }

      } else if ( currentSlide-2 ===  targetSlider ) { // Scroll in left way

          this.enableSlider = false;
          this.$slider.slick( 'slickGoTo', currentSlide-1 );
          // this.$slider.find('.slick-list').velocity({ 'left' : 0 });

          if ( currentSlide === 2 && targetSlider === 0 ) {

             this.$slider.find('.slick-list').velocity({ 'left' : '-50px' });

          } else if ( currentSlide + 2 === totalSlides ) {

              this.$slider.find('.slick-list').velocity({ 'left' : 0 });

          }

      }

    } else {

      if ( currentSlide < targetSlider ) { // Scroll in Right way

        this.enableSlider = false;
        this.$slider.slick( 'slickGoTo', currentSlide+1 );

      } if ( currentSlide > targetSlider ) {

        this.enableSlider = false;
        this.$slider.slick( 'slickGoTo', currentSlide-1 );

      }


    }


  }
}

site.components.SectionSliderNavigation.prototype.resize = function(e) {
  this.$slider.slick('resize');
}

site.components.SectionSliderNavigation.prototype.destroy = function(e) {

  this.parent.destroy.call(this);
  this.$slider.slick('unslick');

}