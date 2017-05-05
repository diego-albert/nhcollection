<?php
/**
 * Configuración básica de WordPress.
 *
 * Este archivo contiene las siguientes configuraciones: ajustes de MySQL, prefijo de tablas,
 * claves secretas, idioma de WordPress y ABSPATH. Para obtener más información,
 * visita la página del Codex{@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} . Los ajustes de MySQL te los proporcionará tu proveedor de alojamiento web.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** Ajustes de MySQL. Solicita estos datos a tu proveedor de alojamiento web. ** //
/** El nombre de tu base de datos de WordPress */
define('DB_NAME', 'nh_collection');

/** Tu nombre de usuario de MySQL */
define('DB_USER', 'root');

/** Tu contraseña de MySQL */
define('DB_PASSWORD', '');

/** Host de MySQL (es muy probable que no necesites cambiarlo) */
define('DB_HOST', 'localhost');

/** Codificación de caracteres para la base de datos. */
define('DB_CHARSET', 'utf8mb4');

/** Cotejamiento de la base de datos. No lo modifiques si tienes dudas. */
define('DB_COLLATE', '');

/**#@+
 * Claves únicas de autentificación.
 *
 * Define cada clave secreta con una frase aleatoria distinta.
 * Puedes generarlas usando el {@link https://api.wordpress.org/secret-key/1.1/salt/ servicio de claves secretas de WordPress}
 * Puedes cambiar las claves en cualquier momento para invalidar todas las cookies existentes. Esto forzará a todos los usuarios a volver a hacer login.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'eZ_SC[)*k5*T*tw/Q:#rPUd]RaVbv7%vtk:)xwfs^n6G`iUc/lclY_^xVmoR{!hy');
define('SECURE_AUTH_KEY', 'n)S`XvT(fq{?D,jT^Wxc~X[+fqv}t{:lS942=0l~.#ut45X_MvNxT{gF?|9LFaID');
define('LOGGED_IN_KEY', 'gKy.-_QA,;{m[z5ik#F59WZ*8|Q).Kp4UbwFc9m}a7PjH|d?6I8X6]*tLz|D6+5=');
define('NONCE_KEY', 'L``=_X^:VO$MY=`ZzS=id]bapE,2=PPx7tq(QF3N4k#?)|i(MWk.3r.Z*&x(-o7m');
define('AUTH_SALT', '8~-=r=#kgcVm/soSF8P-eGt4m>SGQmFcZ^44K1pq{UY6s`KWfNvWw2w dJZD/pd3');
define('SECURE_AUTH_SALT', 'e7(m*n2`o{.*6D+bV~a4^vE ?`>1>vx<>4bjjsHAp jrKz:pRq Vz*#e^ch7SmzW');
define('LOGGED_IN_SALT', 'VNz|*GS|Q`#-cd4|c9dCE;lBw>`S^Pd,GR3m-!.0kb.jFMW+/G`Zb!Jk*5`H5%[n');
define('NONCE_SALT', '7:1HAylz6~Q3MX Jk:6HK%ryV&1jE}i-+&p1Rp#M~|,8bWVf[]T=&Nazn7^}T;aH');

/**#@-*/

/**
 * Prefijo de la base de datos de WordPress.
 *
 * Cambia el prefijo si deseas instalar multiples blogs en una sola base de datos.
 * Emplea solo números, letras y guión bajo.
 */
$table_prefix  = 'wp_';


/**
 * Para desarrolladores: modo debug de WordPress.
 *
 * Cambia esto a true para activar la muestra de avisos durante el desarrollo.
 * Se recomienda encarecidamente a los desarrolladores de temas y plugins que usen WP_DEBUG
 * en sus entornos de desarrollo.
 */
// define('WP_DEBUG', false);
define( 'WP_DEBUG', true );

/* ¡Eso es todo, deja de editar! Feliz blogging */

/** WordPress absolute path to the Wordpress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

