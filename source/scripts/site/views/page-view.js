var site = site || {};

el.core.utils.createNamespace(site, 'views');

site.views.Page = el.core.utils.class.extend(function(options){

  this.options = {};
  this.components = [];

  // this.scrollManager = el.core.managers.scrollManager;

  $.extend(this.options, options);


  this.name = 'PageView';
  this.id = el.core.utils.uniqueId.get(this.name + '-');

  this.$el = this.options.$el;

  this.$body = $('body');
  this.$mainContent = this.$body.find('#nh-main-content');
  this.$olapicFeed = this.$body.find('#nh-olapic-feed');

  el.core.events.globalDispatcher.on(el.core.events.event.RESIZE, $.proxy(this._resizeHandler, this));

}, el.core.events.EventsDispatcher);

site.views.Page.prototype.init = function(e) {

    var that = this,
        smoothStateOptions,
        smoothState;

  console.log('init', this.id);

  // Ignore WP Admin Panel links for SmoothState
  $( 'a' ).each( function() {
      if ( this.href.indexOf('/wp-admin/') !== -1 ||
           this.href.indexOf('/wp-login.php') !== -1 ) {
          $( this ).addClass( 'wp-link' );
      }
  });

  smoothStateOptions = {
    'blacklist': '.olapic-item, .olapic-nav-button, .viewer-close, #olapic_viewer_overlay, .wp-link',
    'prefetchOn': 'mouseover',
    'cacheLength': 5,
    'debug': true,
    'onStart': {

      'duration': 500,
      'render': function($container){
        console.log('SS:START',smoothState.href);
        that.$mainContent.addClass('is-exiting').removeClass('is-entering');

        that.$olapicFeed.velocity({
          opacity: 0,
          bottom: '-35px'
        });

        // el.core.events.globalDispatcher.emit(site.events.event.PAGE_CHANGE_START, {});
      }
    },
    'onReady': {
      'render': function($container, $newContent) {

        console.log('SS:ONREADY',smoothState.href);

        // destroy old components
        that.components = [];
        site.managers.componentsManager.destroyComponents();

        // scroll to top
        el.core.managers.scrollManager.scrollTo(0);

        $container.find('#nh-main-content')
          // remove old content and jQuery stuff
          .empty()
          // replace only content div and leave the header and footer alone :D
          .html($newContent.filter('#nh-main-content').html())
        ;

        // el.core.events.globalDispatcher.emit(site.events.event.PAGE_CHANGE_READY, {});

        that.initPage();
      }
    }
  }

  // scroll to top before unlaod to prevent browser auto scroll to memorized position
  $(window).on('unload', function(){
    el.core.managers.scrollManager.scrollTo(0);
  })

  // initialise smooth state plugin
  smoothState = $('#page').smoothState(smoothStateOptions).data('smoothState');

  // initialise the default page
  this.initPage();

  return this;

}

site.views.Page.prototype.initPage = function() {

  console.log('initPage', this.id);

  var that = this;

  // reset variables

  // create components
  this.$el.find('[data-component]').each(function(i, tag) {

    var $tag = $(tag)
    ;

    that.components.push(site.managers.componentsManager.createComponent($tag.data('component'), {
      '$el': $tag
    }));
  });

  var pageName = that.$body.find('.main-menu').data('page-view');

  el.core.events.globalDispatcher.emit(el.core.events.event.PAGE_VIEW, {'page_view' : pageName });

  el.core.managers.layoutManager.resize();

  that.$mainContent.removeClass('is-exiting').addClass('is-entering');

  if ( pageName == 'feels' || pageName == 'feelingcollectors') {

    that.$olapicFeed.velocity({
      opacity: 1,
      bottom: 0
    }, {
      display: "block",
    });

  } else {
    that.$olapicFeed.css('display', 'none');
  }


}

site.views.Page.prototype.resize = function(size) {

  for (var i = 0; i < this.components.length; i++) {
    this.components[i].resize(size);
  };

  // if(this.watcher) {
  //   this.watcher.resize(size);
  // }
  // if(this.parallax) {
  //   this.parallax.resize(size);
  // }
}

site.views.Page.prototype._resizeHandler = function(e) {

  this.resize(e);
}