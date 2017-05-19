var site = site || {};

el.core.utils.createNamespace(site, 'components')

site.components.PanoramicNavigationComponent = el.core.utils.class.extend(function(options){

  this.options = {};

  $.extend(this.options, options);

  this.name = 'PanoramicNavigationComponent';
  this.id = el.core.utils.uniqueId.get(this.name + '-');

  this.$el = this.options.$el;
  this.$container = this.$el.find('.navigation-wrapper');
  this.$img = this.$container.find('.panoramic');
  this.imageWidth = this.$img.width();
  this.windowWidth = el.core.managers.layoutManager.winSize.width;

  this.dampingFactor = 0.93;
  this.historySize = 5;
  this.offset = - (this.imageWidth - this.windowWidth)/2;

  this._register();
  this.init();

  console.log(this.name, this.options);

}, site.components.BaseComponent);


site.components.PanoramicNavigationComponent.prototype.init = function(e) {

    this.$container.css({
        'width': this.imageWidth,
        'left' : -( (this.imageWidth - this.windowWidth)/2)
      });

    el.core.events.globalDispatcher.on(el.core.events.event.START_GASTRO_EXP, $.proxy(this._initNavigation, this));

}

site.components.PanoramicNavigationComponent.prototype._initNavigation = function(e) {

      var that = this;
      var sx, dx = 0, armed, tick, prev, h = [];

      this.$container.find('.drag-button').velocity({
        opacity:0
      },{
        'display':'none',
        delay: 2000,
        complete: function(){
          that.$container.find('.photo-item').velocity({
            opacity: 1
          },{
            display: 'block'
          });
        }
      })

      that.$container.mousedown(function (e) {
        sx = e.pageX - that.offset;
        armed = true;
        e.preventDefault();
      });
      that.$container.mousemove(function (e) {
        var px;
        if (armed) {
          px = e.pageX;
          if (prev === undefined) {
            prev = px;
          }
          that.offset = px - sx;

          if ( that.offset <= -( that.imageWidth - that.windowWidth ) ) {

            that.offset = -( that.imageWidth - that.windowWidth );

          } else if (that.offset >= 0) {

            that.offset = 0;

          }

          if (h.length > that.historySize) {
            h.shift();
          }
          h.push(prev - px);

          that.$container.css('left', that.offset);

          prev = px;
        }
      });
      that.$container.bind('mouseleave mouseup', function () {
        if (armed) {
          var i, len = h.length, v = h[len - 1];
          for (i = 0; i < len; i++) {
            v = (v * len + (h[i])) / (len + 1);
          }
          dx = v;
        }
        armed = false;
      });
      tick = function () {
        if (!armed && dx) {
          dx *= that.dampingFactor;
          that.offset -= dx;

          if (that.offset <= -( that.imageWidth - that.windowWidth ) ) {

            that.offset = -( that.imageWidth - that.windowWidth )

          } else if (that.offset >= 0) {

            that.offset = 0;

          }

          that.$container.css('left', that.offset);

          if (Math.abs(dx) < 0.001) {
            dx = 0;
          }
        }
      };
      setInterval(tick, 16);


}

site.components.PanoramicNavigationComponent.prototype.resize = function(e) {

  this.imageWidth = this.$img.width();
  this.windowWidth = el.core.managers.layoutManager.winSize.width;
  this.offset = - (this.imageWidth - this.windowWidth)/2;

  this.$container.css({
    'width': this.imageWidth,
    'left' : -( (this.imageWidth - this.windowWidth)/2)
  });

}

site.components.PanoramicNavigationComponent.prototype.destroy = function(e) {

  this.$container.unbind();
  this.parent.destroy.call(this);
}