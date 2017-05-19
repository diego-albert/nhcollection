var site = site || {};

el.core.utils.createNamespace(site, 'components')

site.components.ExpGastroComponent = el.core.utils.class.extend(function(options){

  this.options = {

  };

  $.extend(this.options, options);

  this.name = 'ExpGastroComponent';
  this.id = el.core.utils.uniqueId.get(this.name + '-');

  this.$el = this.options.$el;
  this.$introSection = this.$el.find('.intro-experience');

  this._register();
  this.init();

  console.log(this.name, this.options);

}, site.components.BaseComponent);


site.components.ExpGastroComponent.prototype.init = function(e) {

	  var startBtn = this.$introSection.find('.start-experience.block-button');
	  startBtn.on('click', $.proxy(this._startGastroExperience, this) );

}

site.components.ExpGastroComponent.prototype._startGastroExperience = function(e) {

		this.$introSection.velocity({
			opacity: 0,
			top: 20
		},{
			display: 'none',
		});

    el.core.events.globalDispatcher.emit(el.core.events.event.START_GASTRO_EXP);

}

site.components.ExpGastroComponent.prototype.resize = function(e) {

}

site.components.ExpGastroComponent.prototype.destroy = function(e) {

  this.parent.destroy.call(this);
}