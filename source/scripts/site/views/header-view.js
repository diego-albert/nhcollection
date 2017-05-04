var site = site || {};

el.core.utils.createNamespace(site, 'views');

site.views.Header = el.core.utils.class.extend(function(options){

  var globalDispatcher = el.core.events.globalDispatcher,
      event = site.events.event
  ;

  this.options = {};

  $.extend(this.options, options);


  this.name = 'HeaderView';
  this.id = el.core.utils.uniqueId.get(this.name + '-');

  this.$el = this.options.$el;
  this.$formButton = this.$el.find('.block-button');
  this.$form = this.$el.find('#user-login');

  this.registeredmailList = [
    {'mail' : 'test@mail.com', 'pass' : '12345'},
    {'mail' : 'test2@mail.com', 'pass' : '12345'},
    {'mail' : 'test3@mail.com', 'pass' : '12345'}
  ];

  this.navItems = [];
  /* Nota desarrollo: para desplegar solo los elementos de menu destacados, decido detallarlos en
  un array, para poder editarlos con facilidad, añadir, quitar, etc. Aunque este listado podría venir
   de un Json o gestor por ejemplo */
  this.hightlightItems = ['Instant soups', 'Fruit', 'Hot dogs', 'Top Raman noodles', 'Gorp, trail mix', 'Cheese'];


}, el.core.events.EventsDispatcher);

site.views.Header.prototype.init = function(e) {

  this.initHeader();
  el.core.events.globalDispatcher.once(el.core.events.event.APP_INIT, $.proxy(this._loadMenuContent, this) );

}

site.views.Header.prototype.initHeader = function(e) {

  this.$form.submit( $.proxy(this._submitForm, this) );

  this.$el.find('.submenu .find-btn').on('click', $.proxy(this._displaySubMenu, this));

}

site.views.Header.prototype._submitForm = function(e) {
  e.preventDefault();
  var that = this;

  var email = this.$form.find('#email_addr').val();
  var pass = this.$form.find('#password').val();

  var validation = this._formValidation(email, pass);

  if (validation) // Calling validation function
  {

    if (that._checkIssetMail(email)){ // Check if user exist

      /* Nota Desarrollo: Aunque la manera correcta de trabajar con un registro de usuarios,
      sería mediante una consulta a una BBDD, por agilizar la prueba, he creado un pequeño array
      con algunos mails de prueba. En caso de encontrar una similitud, llamamos al API, para
      que haga su comprobación y nos devuelva un status "OK" si todo va bien.*/

      var url = 'join.txt';

    }
    else
    {
      /* Nota Desarrollo: En caso contrario, si recibimos un codigo 101 a nuestra llamada,
      registramos el mail y lo añado provisionalmente a mi Array.*/
      var url = 'login.txt';
    }

    $.ajax({
      url : "http://local.doubleyou.com/server/"+url,
      dataType: "text",
      success : function (data) {

          var data = JSON.parse(data);
          // console.log('data', data);

          if (data.status == "OK"){

            if ("code" in data && data.code === 101){
              that._registerNewUser(email, pass);
            }

            /* Nota Desarrollo: Aquí habilitaríamos las funciones de usuario
            y su variable de sesion segun las necesidades de la aplicación */
            that.$el.find('.login-section').addClass('signed-in')
                    .children('p').text('Bienvenido!');

          }
      }
    });


  }
}

site.views.Header.prototype._formValidation = function(email, pass) {

  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

  try {
    if (email === '' || pass === '') throw "Please fill all fields!";
    if(!(email).match(emailReg)) throw "Invalid Email! Try again.";
    if(pass.length < 4 ) throw "Password is two short";
  }
  catch(err) {
      alert(err);
      return false;
  }
  return true;

}

site.views.Header.prototype._checkIssetMail = function(email) {

  for (var i = 0; i < this.registeredmailList.length; i++) {
    if (this.registeredmailList[i].mail == email)
    {
      // console.log('you are registered!');
      return true;
    }

  };
  return false;

}

site.views.Header.prototype._registerNewUser = function(email, pass) {
  var newUser = {'mail' : email, 'pass' : pass}
  this.registeredmailList.push(newUser);
  alert('Nuevo registro creado con exito!');

  // console.log('new user registered!', this.registeredmailList);
}

site.views.Header.prototype._loadSection = function(e) {

  var loadSection = {
    'target' : e.currentTarget,
    'name' : e.currentTarget.getAttribute('section-name'),
    'url' : e.currentTarget.getAttribute('section-path')
  }

  el.core.events.globalDispatcher.emit(el.core.events.event.LOAD_SECTION, loadSection);

}

site.views.Header.prototype._loadMenuContent = function(e) {

  var that = this;

  $.ajax({
    url : "http://local.doubleyou.com/server/dishes.txt",
    dataType: "text",
    success : function (data) {
      that.navItems = JSON.parse(data);

      that._printDishesSubMenu('less');
    }
  });

}

site.views.Header.prototype._printDishesSubMenu = function(key) {

  var array = this.navItems.dishes,
      content = this.$el.find('.submenu ul');

  content.html('');

  for (var i = 0; i < array.length; i++) {

    if (key == 'more'){

      content.append('<li class="submenu-item"><a href="#" section-name="'+array[i].name+'" section-path="'+array[i].url+'">'+array[i].name+'</a></li>');

    } else if ( key == 'less'){

      if ( this.hightlightItems.indexOf(array[i].name) > -1 ) {

        content.append('<li class="submenu-item"><a href="#" section-name="'+array[i].name+'" section-path="'+array[i].url+'">'+array[i].name+'</a></li>');

      }

    }

  };

  this.$el.find('.submenu .submenu-item a').on('click', $.proxy(this._loadSection, this));


}

site.views.Header.prototype._displaySubMenu = function(e) {

  var that = this,
      target = e.currentTarget,
      findKey = target.getAttribute('data-find');

  that._printDishesSubMenu(findKey)
  $(target).addClass('hide').siblings('a').removeClass('hide');

}




