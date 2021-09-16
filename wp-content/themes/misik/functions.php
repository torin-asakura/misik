<?php
  // Allow SVG
  add_filter( 'wp_check_filetype_and_ext', function($data, $file, $filename, $mimes) {

    global $wp_version;
    if ( $wp_version !== '4.7.1' ) {
      return $data;
    }

    $filetype = wp_check_filetype( $filename, $mimes );

    return [
      'ext'             => $filetype['ext'],
      'type'            => $filetype['type'],
      'proper_filename' => $data['proper_filename']
    ];

  }, 10, 4 );

  function cc_mime_types( $mimes ){
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
  }
  add_filter( 'upload_mimes', 'cc_mime_types' );

  function fix_svg() {
    echo '<style type="text/css">
        .attachment-266x266, .thumbnail img {
             width: 100% !important;
             height: auto !important;
        }
        </style>';
  }

  // Add menus

  function register_menus() {

    register_nav_menus(
      array(
        'primary-menu' => _( 'Primary Menu' ),
      'your-preferred-menu-location-id' => _( 'Title of your menu location' )
    )
  );
}

  add_action( 'init', 'register_menus' ); // <-- of course without this, the function above will not execute.



  add_action( 'admin_head', 'fix_svg' );
  add_theme_support( 'menus' );
  add_theme_support( 'post-thumbnails' );
