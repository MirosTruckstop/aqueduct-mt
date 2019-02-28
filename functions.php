<?php
/**
 * Include styles and scripts.
 */
add_action('wp_enqueue_scripts', function () {
	$parent_style = 'aqueduct';

	wp_enqueue_style($parent_style, get_template_directory_uri().'/style.css');
	wp_enqueue_style('aqueduct-mt',
		get_stylesheet_directory_uri() . '/style.css',
		array( $parent_style ),
		wp_get_theme()->get('Version')
	);

	$colorSetting = get_theme_mod('color-setting');
	$customizedCss = <<<EOT
#auswahl_leiste,
.break-social {
	background-color: $colorSetting;
}

/*--------------------------------------------------------------
Aqueduct fix:

Theme color does not change everywhere
--------------------------------------------------------------*/
.navigator-holder a:hover,
.widget_categories li:hover,
.secondary-navigation .tinynav {
	background-color: $colorSetting !important;
}

.error-404 h3,
.fourzerofour,
a:hover,
a:focus,
a:active {
	color: $colorSetting !important;
}

.main-navigation ul li a {
	color: #fff !important;
}
EOT;
	wp_add_inline_style('aqueduct-mt', $customizedCss);
});

/*
 * Deactive sidebar for mobile devices.
 */
add_filter('is_active_sidebar', function ($is_active_sidebar) {
	if (wp_is_mobile()) {
		return false;
	}
	return $is_active_sidebar;
});
