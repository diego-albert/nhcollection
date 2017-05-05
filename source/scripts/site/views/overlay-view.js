var site = site || {};

el.core.utils.createNamespace(site, 'views');

site.views.Overlay = el.core.utils.class.extend(function(options){

  var globalDispatcher = el.core.events.globalDispatcher,
      event = site.events.event
  ;

  this.options = {};

  $.extend(this.options, options);


  this.name = 'OverlayView';
  this.id = el.core.utils.uniqueId.get(this.name + '-');

  this.$el = this.options.$el;
  this.$body = $('body');

  this._hidden = true;

}, el.core.events.EventsDispatcher);

site.views.Overlay.prototype.init = function(e) {

  var that = this
  ;

  console.log('init', this.id);

  el.core.events.globalDispatcher.on(site.events.event.LANGUAGES_SELECTOR_SHOW_REQUEST, $.proxy(this._showLanguageRequestHandler, this));
  el.core.events.globalDispatcher.on(site.events.event.STORIES_SELECTOR_SHOW_REQUEST, $.proxy(this._showStoriesRequestHandler, this));
  el.core.events.globalDispatcher.on(site.events.event.OVERLAY_HIDE_REQUEST, $.proxy(this._hideRequestHandler, this));

  el.core.events.globalDispatcher.on(site.events.event.HEADER_STATE_REQUEST, $.proxy(this._stateRequestHandler, this));

  el.core.events.globalDispatcher.on(site.events.event.PAGE_CHANGE_START, $.proxy(this._pageChangeHandler, this));

  el.core.events.globalDispatcher.on(site.events.event.RESIZE, $.proxy(this.resize, this));

  this.$el.find('.close-button').on('click', $.proxy(this._closeClickHandler, this));

  this.$el.find('.switch').on('click', $.proxy(this._switchClickHandler, this));

  // we will load images with delay to no lock the page show and only for devices which have screen bigger than 60em
  if(Modernizr.matchmedia && window.matchMedia("(min-device-width: 60em)").matches || !Modernizr.matchmedia && window.screen.width > 960){

    setTimeout(function(){

      that.$el.find('.story-item-wrapper img').each(function(){
        var $this = $(this);
        $this.attr('src', $this.data('src'));
      });
    }, 500);
  }

  return this;
}

site.views.Overlay.prototype._pageChangeHandler = function(data) {

  this._hide();

  if(!this.wasScrollLocked) {
    el.core.managers.scrollManager.unlockScroll();
  }
}

site.views.Overlay.prototype._stateRequestHandler = function(data) {

  switch(data.state) {

    case 'normal':
      this.$el.addClass('normal-state');
    break;

    case 'minimal':
      this.$el.removeClass('normal-state');
    break;
  }
}

site.views.Overlay.prototype._switchClickHandler = function(e) {

  e.preventDefault();

  var $target = $(e.currentTarget);

  this.resize();

  if($target.hasClass('language')) {
    // show languages
    this.$el.addClass('shifted-to-language');
  }
  else {
    // show stories
    this.$el.removeClass('shifted-to-language');
  }
}
site.views.Overlay.prototype._closeClickHandler = function(e) {

  this._hide();
  
  if(!this.wasScrollLocked) {
    el.core.managers.scrollManager.unlockScroll();
  }
}

site.views.Overlay.prototype._hideRequestHandler = function(data) {

  this.wasScrollLocked = el.core.managers.scrollManager.isLocked();

  this._hide();
}

site.views.Overlay.prototype._showLanguageRequestHandler = function(data) {

  this.wasScrollLocked = el.core.managers.scrollManager.isLocked();

  this._show('languages');
}

site.views.Overlay.prototype._showStoriesRequestHandler = function(data) {

  this.wasScrollLocked = el.core.managers.scrollManager.isLocked();
  
  this._show('stories');
}

site.views.Overlay.prototype._show = function(type) {

  var that = this;

  if(this._hidden) {
    this._hidden = false;

    this.$el.removeClass('stories-show languages-show hide')
            .css('display', 'block');

    this.resize();

    switch(type) {

      case 'languages':

        that.$el.addClass('languages-mode');
        setTimeout(function(){
          that.$el.addClass('stories-show languages-show');
        }, 10);
      break;

      case 'stories':

        that.$el.addClass('stories-mode');
        setTimeout(function(){
          that.$el.addClass('stories-show languages-show');
        }, 10);
      break;
    }

    el.core.managers.scrollManager.lockScroll();
  }
}

site.views.Overlay.prototype._hide = function() {

  var that = this;

  if(!this._hidden) {

    this._hidden = true;

    this.$el.addClass('hide');

    setTimeout(function(){
      that.$el.css('display', 'none').removeClass('languages-mode stories-mode stories-show languages-show shifted-to-language hide');
    }, 250);
  }
}

site.views.Overlay.prototype.resize = function(_size) {

  var size = _size || el.core.managers.layoutManager.winSize;

  if(!this._hidden) {

    this.$el.find('.content-outer').each(function() {

      var $outer = $(this),
          $inner = $outer.find('.content')
      ;

      if($inner.outerHeight(true) > $outer.outerHeight(true)) {

        $outer.addClass('scroll-enabled')

        setTimeout(function(){

          $outer.find('.content-inner').scrollTop(0);
        }, 500);
      }
      else {
        $outer.removeClass('scroll-enabled'); 
      }
    });
  }
}