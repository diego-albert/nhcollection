<!DOCTYPE html>
<html lang="<?php bloginfo('language'); ?>">
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <title><?php bloginfo('name'); ?></title>
  <link rel="stylesheet" href="<?php bloginfo('stylesheet_url') ?>">
  <?php wp_head(); ?>
</head>

<body id="nh-collection">

  <nav class="main-menu"
  data-component="main-menu-component">

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
        <a href="#"> <!-- link to collectors -->
          <span class="section-item section-parent">
              <div class="overlay-element white">
                <div class="relative-wrapper">
                  <div class="img-wrapper">
                    <img src="<?php echo get_template_directory_uri() . '/assets/images/main-menu/collectors.jpg'?>" alt="the collectors">
                  </div>
                  <div class="header-wrapper white">
                    <p class="navigation--header small"><span class="pre">The</span><br />feelling<br /> collectors</p>
                  </div>
                </div>
              </div>
          </span>
        </a>

        <a href="#"> <!-- link to experiences -->
          <span class="section-item section-parent">
            <div class="overlay-element white">
              <div class="relative-wrapper">
                <div class="img-wrapper">
                  <img src="<?php echo get_template_directory_uri() . '/assets/images/main-menu/experiences.jpg'?>" alt="the experiences">
                </div>
                <div class="header-wrapper white">
                  <p class="navigation--header small"><span class="pre no-space">The</span><br />experiences</p>
                </div>
              </div>
            </div>
          </span>
        </a>

        <a href="#"> <!-- link to feels -->
          <span class="section-item section-parent">
            <div class="overlay-element white">
              <div class="relative-wrapper">
                <div class="img-wrapper">
                  <img src="<?php echo get_template_directory_uri() . '/assets/images/main-menu/feels.jpg'?>" alt="the feels">
                </div>
                <div class="header-wrapper white">
                  <p class="navigation--header small"><span class="pre">The</span><br />feels</p>
                </div>
              </div>
            </div>
          </span>
        </a>

        <a href="#"> <!-- link to dictionary -->
          <span class="section-item section-parent">
            <div class="overlay-element white">
              <div class="relative-wrapper">
                <div class="img-wrapper">
                  <img src="<?php echo get_template_directory_uri() . '/assets/images/main-menu/dictionary.jpg'?>" alt="the dictionary">
                </div>
                <div class="header-wrapper white">
                  <p class="navigation--header small"><span class="pre">The</span><br />dictionary</p>
                </div>
              </div>
            </div>
          </span>
        </a>

        <a href="#"> <!-- link to voyages -->
          <span class="section-item section-parent">
            <div class="overlay-element white">
              <div class="relative-wrapper">
                <div class="img-wrapper">
                  <img src="<?php echo get_template_directory_uri() . '/assets/images/main-menu/voyages.jpg'?>" alt="the voyages">
                </div>
                <div class="header-wrapper white">
                  <p class="navigation--header small"><span class="pre no-space">The</span><br />voyages</p>
                </div>
              </div>
            </div>
          </span>
        </a>

      </div>

    </div>

  </nav>