var site = site || {};

el.core.utils.createNamespace(site, 'views');

site.views.Page = el.core.utils.class.extend(function(options){

  this.options = {};
  this.components = [];

  $.extend(this.options, options);

  this.name = 'PageView';
  this.id = el.core.utils.uniqueId.get(this.name + '-');

  this.$el = this.options.$el;

  this.$content = this.$el.find('#main-content');

  el.core.events.globalDispatcher.on(el.core.events.event.RESIZE, $.proxy(this._resizeHandler, this));

}, el.core.events.EventsDispatcher);

site.views.Page.prototype.init = function(e) {

  this.initPage();

  return this;
}

site.views.Page.prototype.initPage = function(e) {

  var that = this;

  el.core.events.globalDispatcher.on(el.core.events.event.LOAD_SECTION, $.proxy(this._loadContent, this) );
  el.core.events.globalDispatcher.once(el.core.events.event.APP_INIT, $.proxy(this._loadContent, this) );

}

site.views.Page.prototype._displayContent = function(data) {

  this.$content.find('h1').text(data.title);
  this.$content.find('.recommended-number').text(data.recommended);
  this.$content.find('.body-content').html('');
  this.$content.find('.images-wrapper').html('');

  for (var i = 0; i < data.text.length; i++) {
    this.$content.find('.body-content').append('<p class="body-font">'+data.text[i]+'</p>');
  };

  for (var i = 0; i < data.imgs.length; i++) {
    this.$content.find('.images-wrapper').append('<img src="/assets/'+data.imgs[i].url+'" alt="'+data.imgs[i].alt+'"/>');
    data.imgs[i]
  };
}

site.views.Page.prototype._loadContent = function(data) {

  var that = this,
      url  = data.url;

  $.ajax({
    url : "http://local.doubleyou.com"+url,
    dataType: "text",
    success : function (data) {
      var data = JSON.parse(data);
      that._displayContent(data);
    }
  });

}