# Blank storefront child theme

Simple blank child theme allowing for quick modifications of woocommerce functionality and stable theme.

## Prettier

Install prettier & prettier-php.

```
$ npm install
```

## functions.php

Functions file setup for quick modifications

```
<?php

add_action("wp_body_open", "test");

function test()
{
  echo "hello";
}

```
