<?php
/**
* Template Name: Feels View
*/
?>

<?php get_header(); ?>

  <div id="feels" class="fullscreen-js">

    <div class="main-section">


      <div class="section-navigation"
        data-component="section-slider-navigation">

        <ul class="slider-wrapper">
          <!-- item 1 | feel the place -->
          <li>
            <div class="overlay-element">
              <div class="relative-wrapper">
                <div class="img-wrapper">
                  <img src="<?php echo get_template_directory_uri() . '/assets/images/feels/feel_place.jpg'?>" alt="Feel the place">
                </div>
                <div class="header-wrapper white">
                  <p class="feel-navigation-header">feel <span class="section">the place</span></p>
                </div>
                <div class="overlay-ribond"></div>
              </div>
            </div>
          </li>

          <!-- item 2 | feel inspired -->
          <li>
            <div class="overlay-element inverted">
              <div class="relative-wrapper">
                <div class="img-wrapper">
                  <img src="<?php echo get_template_directory_uri() . '/assets/images/feels/feel_inspired.jpg'?>" alt="Feel inspired">
                </div>
                <div class="header-wrapper white">
                  <p class="feel-navigation-header">feel <span class="section">inspired</span></p>
                </div>
                <div class="overlay-ribond"></div>
              </div>
            </div>
          </li>

          <!-- item 3 | feel unique -->
          <li>
            <div class="overlay-element">
              <div class="relative-wrapper">
                <div class="img-wrapper">
                  <img src="<?php echo get_template_directory_uri() . '/assets/images/feels/feel_unique.jpg'?>" alt="Feel unique">
                </div>
                <div class="header-wrapper white">
                  <p class="feel-navigation-header">feel <span class="section">unique</span></p>
                </div>
                <div class="overlay-ribond"></div>
              </div>
            </div>
          </li>

          <!-- item 4 | feel beyond -->
          <li>
            <div class="overlay-element inverted">
              <div class="relative-wrapper">
                <div class="img-wrapper">
                  <img src="<?php echo get_template_directory_uri() . '/assets/images/feels/feel_beyond.jpg'?>" alt="Feel beyond">
                </div>
                <div class="header-wrapper white">
                  <p class="feel-navigation-header small">feel beyond</p>
                </div>
                <div class="overlay-ribond"></div>
              </div>
            </div>
          </li>

        </ul>

      </div>

    </div>


    <div id="nh-olapic-feed" class="olapic-section">

      <!-- Here will be displayed olapic feed   -->

    </div>


  </div>

<?php get_footer(); ?>