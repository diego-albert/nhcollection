var site = site || {};

el.core.utils.createNamespace(site, 'components')

site.components.HomeViewComponent = el.core.utils.class.extend(function(options){

  this.options = {
  };

  $.extend(this.options, options);

  this.name = 'HomeViewComponent';
  this.id = el.core.utils.uniqueId.get(this.name + '-');

  this.$el = this.options.$el;
  this.$introSection = this.$el.find('.intro-section');

  console.log(this.name, this.options);

}, site.components.BaseComponent);

site.components.HomeViewComponent.prototype.destroy = function() {

  this.parent.destroy.call(this);
}