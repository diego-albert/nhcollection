var site = site || {};

el.core.utils.createNamespace(site, 'components')

site.components.TemplateComponent = el.core.utils.class.extend(function(options){

  this.options = {

  };

  $.extend(this.options, options);

  this.name = 'TemplateComponent';
  this.id = el.core.utils.uniqueId.get(this.name + '-');

  this.$el = this.options.$el;

  this._register();

  console.log(this.name, this.options);

}, site.components.BaseComponent);


site.components.TemplateComponent.prototype.destroy = function() {

  this.parent.destroy.call(this);
}