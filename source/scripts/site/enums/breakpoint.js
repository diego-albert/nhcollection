var site = site || {};
el.core.utils.createNamespace(site, 'enums');

site.enums.breakpoint = {

  'EXTRA_SMALL' : {
    'id': 'extre_small',
    'maxWidth': 640
  },

  'SMALL' : {
    'id': 'small',
    'maxWidth': 820
  },

  'HAMBURGER_MENU' : {
    'id': 'hamburger_menu',
    'maxWidth': 950
  },

  'LARGE' : {
    'id': 'large',
    'maxWidth': 1280
  },

  'NORMAL' : {
    'id': 'normal',
    'maxWidth': Number.POSITIVE_INFINITY
  }
};

site.enums.breakpoint.ALL = [
  site.enums.breakpoint.EXTRA_SMALL,
  site.enums.breakpoint.SMALL,
  site.enums.breakpoint.HAMBURGER_MENU,
  site.enums.breakpoint.NORMAL
]