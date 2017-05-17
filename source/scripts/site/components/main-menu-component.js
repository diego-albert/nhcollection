var site = site || {};

el.core.utils.createNamespace(site, 'components')

site.components.MainMenuComponent = el.core.utils.class.extend(function(options){

  this.options = {

  };

  $.extend(this.options, options);

  this.name = 'MainMenuComponent';
  this.id = el.core.utils.uniqueId.get(this.name + '-');

  this.$el = this.options.$el;
  this.$mainMenuBar = this.$el.find('.main-menu-bar');
  this.menuOpened = false;
  this.menuEnable = true;

  this._register();

  console.log(this.name, this.options);

  el.core.events.globalDispatcher.on(el.core.events.event.RESIZE, $.proxy(this._resizeMainMenu, this));
  el.core.events.globalDispatcher.on(el.core.events.event.PAGE_VIEW, $.proxy(this._init,this));
  this.$el.on('click', $.proxy(this._triggerMenuPosition, this));


}, site.components.BaseComponent);


site.components.MainMenuComponent.prototype._init = function(data) {

  var pageView = data.page_view;

  switch(pageView) {

    case 'home':
        $('body').removeClass('enable-scroll');
        this.menuEnable = false;
        this.$el.addClass('disabled');
        break;

    case 'feelingcollectors':
    case 'feels':
        $('body').removeClass('enable-scroll');
        this.menuEnable = false;
        this.$el.addClass('basic').find('.vertical-button.go-home').removeClass('inverted');// Only display go-home btn
        break;
    case 'blog':
    case 'category':
        $('body').removeClass('enable-scroll');
        this.menuEnable = false;
        this.$el.addClass('basic').find('.vertical-button.go-home').removeClass('inverted');// Only display go-home btn
        break;

    default: // Blog section
        $('body').addClass('enable-scroll');
        this.menuEnable = false;
        this.$el.addClass('basic').find('.vertical-button.go-home').removeClass('inverted');// Only display go-home btn

  }

}

site.components.MainMenuComponent.prototype._resizeMainMenu = function(data) {

	this.$el.css({
		'height' : data.height
	})
}

site.components.MainMenuComponent.prototype._triggerMenuPosition = function(e) {


  if ( this.menuEnable ) {

    if (this.menuOpened) {
      this.$el.removeClass('open');
      this.$mainMenuBar.removeClass('active').find('.hamburger-icon').removeClass('open');
      this.menuOpened = false;

    } else {
      this.$el.addClass('open');
      this.$mainMenuBar.addClass('active').find('.hamburger-icon').addClass('open');
      this.menuOpened = true;

    }

  }


}

site.components.MainMenuComponent.prototype.destroy = function() {

  this.parent.destroy.call(this);
}