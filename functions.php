<?php

add_action("wp_body_open", "test");

function test()
{
  echo "hello";
}
