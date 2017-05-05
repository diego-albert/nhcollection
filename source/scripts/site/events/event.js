var site = site || {}
;

el.core.utils.createNamespace(site, 'events');

site.events.event_base = {

  sectionScrollTo: {

    'REQUEST'               : 'event.sectionscroll.request',
    'START'                 : 'event.sectionscroll.start',
    'COMPLETE'              : 'event.sectionscroll.complete'
  },

  'PAGE_SHOWN'              : 'event.page.shown',
  'MAPS_API_READY'          : 'event.maps.api.ready',
  'LOCATION_UPDATE'         : 'event.location.update',
  'IMAGE_LOADED'            : 'event.image.loaded',

  'OVERLAY_HIDE_REQUEST'              : 'event.overlay.hide.request',

  'HEADER_STATE_REQUEST'              : 'event.header-state.request',

};

site.events.event = $.extend(true, {}, site.events.event_base, el.core.events.event);
