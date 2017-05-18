
<!DOCTYPE html>
<html lang="<?php bloginfo('language'); ?>">
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <title><?php bloginfo('name'); ?></title>
  <meta name="description" content="">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />

  <meta property="og:title" content="<?php wp_title(''); ?>" />
  <meta property="og:description" content="" />
  <meta property="og:image" content="" />
  <meta property="og:site_name" content="<?php bloginfo('name'); ?>" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="<?php echo get_home_url(); ?>" />

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="NH Collection">
  <meta name="twitter:title" content="<?php wp_title(''); ?>">
  <meta name="twitter:description" content="">
  <meta name="twitter:image" content="">


  <link rel="stylesheet" href="<?php bloginfo('stylesheet_url') ?>">

  <?php wp_head(); ?>
</head>

<body id="nh-collection">

  <div id="page">

    <div id="nh-main-content">

    <nav class="main-menu"
      data-page-view="<?php wp_title(''); ?>"
      data-component="main-menu-component"
    >

      <div class="main-menu-wrapper">

        <a href="<?php echo get_home_url(); ?>" class="go-home vertical-button inverted">
          <span class="icon-home-icon"></span>
        </a>
        <div class="main-menu-bar vertical-button">

          <div class="hamburger-icon">
            <span class="line line-1"></span>
            <span class="line line-2"></span>
            <span class="line line-3"></span>
            <span class="line line-4"></span>
          </div>

        </div>

        <div class="section-wrapper">


          <span class="section-item playsection-js" data-action="play-video" data-yt-id="xMotTAO2FqU">
              <div class="overlay-element white">
                <div class="relative-wrapper">
                  <div class="img-wrapper">
                    <img src="<?php echo get_template_directory_uri() . '/assets/images/main-menu/feel-place.jpg'?>" alt="the place">
                  </div>
                  <div class="header-wrapper white">
                    <p class="feel-navigation-header small">feel <span class="section">the place</span></p>
                  </div>
                </div>
              </div>
          </span>

          <span class="section-item playsection-js" data-action="play-video" data-yt-id="1v7rafzqkRU">
            <div class="overlay-element white">
              <div class="relative-wrapper">
                <div class="img-wrapper">
                  <img src="<?php echo get_template_directory_uri() . '/assets/images/main-menu/feel-inspired.jpg'?>" alt="inspired">
                </div>
                <div class="header-wrapper white">
                  <p class="feel-navigation-header small">feel <span class="section">inspired</span></p>
                </div>
              </div>
            </div>
          </span>

          <span class="section-item playsection-js" data-action="play-video" data-yt-id="moZJf5kKwsY">
            <div class="overlay-element white">
              <div class="relative-wrapper">
                <div class="img-wrapper">
                  <img src="<?php echo get_template_directory_uri() . '/assets/images/main-menu/feel-unique.jpg'?>" alt="unique">
                </div>
                <div class="header-wrapper white">
                  <p class="feel-navigation-header small">feel <span class="section">unique</span></p>
                </div>
              </div>
            </div>
          </span>

          <span class="section-item">
            <div class="overlay-element white">
              <div class="relative-wrapper">
                <div class="img-wrapper">
                  <img src="<?php echo get_template_directory_uri() . '/assets/images/main-menu/feel-beyond.jpg'?>" alt="beyond">
                </div>
                <div class="header-wrapper white">
                  <p class="feel-navigation-header xs-small">feel beyond</span></p>
                </div>
              </div>
            </div>
          </span>



        </div>

      </div>

    </nav>

