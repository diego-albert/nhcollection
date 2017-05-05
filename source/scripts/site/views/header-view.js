var site = site || {};

el.core.utils.createNamespace(site, 'views');

site.views.Header = el.core.utils.class.extend(function(options){

  var globalDispatcher = el.core.events.globalDispatcher,
      event = site.events.event
  ;

  this.options = {};

  $.extend(this.options, options);


  this.name = 'HeaderView';
  this.id = el.core.utils.uniqueId.get(this.name + '-');

  this.$el = this.options.$el;
  this.$body = $('body');

}, el.core.events.EventsDispatcher);

site.views.Header.prototype.init = function(e) {

  var that = this
  ;

  console.log('init', this.id);

  this._menuPresent = false;
  this._enabled = true;

  // el.core.events.globalDispatcher.on(site.events.event.HEADER_STATE_REQUEST, $.proxy(this._stateRequestHandler, this));

  return this;
}

site.views.Header.prototype.resize = function(size) {

}