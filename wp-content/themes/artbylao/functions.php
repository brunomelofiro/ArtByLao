<?php

add_action( 'wp_enqueue_scripts', 'enqueue_parent_styles', 100);
add_action( 'wp_enqueue_scripts', 'enqueue_parent_scripts', 100);

function enqueue_parent_styles() {
  wp_enqueue_style( 'artbylao-style', get_stylesheet_directory_uri().'/assets/css/main-style.css');

  wp_dequeue_style( 'dazzling-bootstrap');

  wp_dequeue_style('dazzling-icons');

  wp_dequeue_style('parent-style');

  wp_dequeue_style('dazzling-style');

}

function enqueue_parent_scripts() {

  wp_dequeue_script('dazzling-bootstrapjs');
  wp_dequeue_script('dazzling-main');
}
