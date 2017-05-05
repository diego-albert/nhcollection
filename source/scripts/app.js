

(function($){

	$(document).ready(function(){

		console.log('Namespace site:', site);
		console.log('Namespace el:', el);

		if(el.core.utils.environment.isUnsupportedBrowser()){

			$('html').addClass('unsupported-browser');
		}
		else {

			$('#unsupported-browser-screen').remove();

			if(el.core.utils.environment.isDevice()) {

				$('body').addClass('is-device');
			}
			else {

				$('body').addClass('is-desktop');
			}

			var pageView, headerView;

			function initJS() {

				el.core.managers.layoutManager.init();

				pageView = new site.views.Page({
				    '$el': $('body')
				});

				headerView = new site.views.Header({
					'$el': $('header')
				});

				el.core.managers.scrollManager.init({

				});

				headerView.init();
				pageView.init();

				el.core.events.globalDispatcher.emit(el.core.events.event.APP_INIT);
			}

			if(el.core.utils.environment.isIE9()) {

				// delaying Js init for olr IE, for some reason it wasn't able to run properly without it.
				setTimeout(initJS, 1);
			}
			else {

				initJS();
			}
		}
	});

})(jQuery);