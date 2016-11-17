<?php
// Set local for correct dates.
setlocale(LC_ALL, get_locale().'.'.get_bloginfo('charset'));

/**
 * Include styles and scripts.
 */
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


/*
 * Deactive sidebar for mobile devices.
 */
add_filter( 'is_active_sidebar', 'aqueductmt_is_active_sidebar' );
function aqueductmt_is_active_sidebar($is_active_sidebar ) {
	if (wp_is_mobile()) {
		return false;
	}
	return $is_active_sidebar;
}