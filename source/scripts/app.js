

(function(){

	document.addEventListener("DOMContentLoaded", function(e){

		var pageView, headerView;

		function initJS() {

			pageView = new site.views.Page({
		    '$el': $('body')
		  });

		  headerView = new site.views.Header({
		    '$el': $('header')
		  });

		  headerView.init();
		  pageView.init();

		  /*Aqui precargo uno de los contenidos para que la página no se muestre en blanco en el momento en que la APP esta lista*/
		  el.core.events.globalDispatcher.emit(el.core.events.event.APP_INIT, {"url":"/server/content/bagelsorenglishmuffins.txt"});
		}

		initJS();

	});

})();

