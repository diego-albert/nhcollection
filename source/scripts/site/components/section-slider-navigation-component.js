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

  this._register();

  this._init();

  console.log(this.name, this.options);

}, site.components.BaseComponent);

site.components.SectionSliderNavigation.prototype._init = function() {

  this.$slider.slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false
  });

}

site.components.SectionSliderNavigation.prototype.destroy = function() {

  this.parent.destroy.call(this);
  this.$slider.slick('unslick');

}