function enqueue_parent_styles() {
  wp_enqueue_style( 'artbylao-style', get_stylesheet_directory_uri());

  wp_dequeue_style( 'dazzling-bootstrap');

  wp_dequeue_style('dazzling-icons');

  wp_dequeue_style('parent-style');

  wp_dequeue_style('dazzling-style');

}
