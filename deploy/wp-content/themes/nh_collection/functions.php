<?php

/**
 * Crear nuestros menús gestionables desde el
 * administrador de Wordpress.
 */

function my_menus() {
  register_nav_menus(
    array(
      'main_menu' => __( 'Main Menu' ),
    )
  );
}
add_action( 'init', 'my_menus' );


function nhcollection_scripts() {

	wp_enqueue_style( 'main', get_template_directory_uri() . '/assets/styles/main.css', array(), '0.1' );
	// wp_enqueue_script( 'twentyfifteen-script', get_template_directory_uri() . '/assets/scripts/main.js', array( 'jquery' ), '20150330', true );
}
add_action( 'wp_enqueue_scripts', 'nhcollection_scripts' );

?>
