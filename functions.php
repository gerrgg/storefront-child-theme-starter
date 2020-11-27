<?php

// Enqueue frontend scripts
add_action("wp_enqueue_scripts", "greg_bastianelli_enqueue_frontend_scripts");
function greg_bastianelli_enqueue_frontend_scripts()
{
  wp_enqueue_script(
    "frontend",
    get_stylesheet_directory_uri() . "/assets/js/frontend.js",
    ["jquery"],
    $_SERVER["SERVER_NAME"] === "two.wordpress.test" ? time() : false
  );
}

// Enqueue admin scripts
add_action("admin_enqueue_scripts", "greg_bastianelli_enqueue_admin_scripts");
function greg_bastianelli_enqueue_admin_scripts()
{
  wp_enqueue_script(
    "admin",
    get_stylesheet_directory_uri() . "/assets/js/admin.js",
    ["jquery"],
    $_SERVER["SERVER_NAME"] === "two.wordpress.test" ? time() : false
  );
}

add_action("wp_body_open", "greg_bastianelli_hello");
function greg_bastianelli_hello()
{
  printf("<h1>%s</h1>", "Hello automatic reload on save");
}
