<?php
// Set local for correct dates
setlocale(LC_ALL, get_locale().'.'.get_bloginfo('charset'));

add_action( 'wp_enqueue_scripts', 'aqueductmt_enqueue_styles' );
function aqueductmt_enqueue_styles() {

	$parent_style = 'aqueduct';

	wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
	wp_enqueue_style( 'aqueduct-mt',
		get_stylesheet_directory_uri() . '/style.css',
		array( $parent_style ),
		wp_get_theme()->get('Version')
    );
}