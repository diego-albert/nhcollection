<?php
/**
* Template Name: Experiences View
*/
?>

<?php
  $home_url = get_home_url();
?>

<?php get_header(); ?>


<div id="experiences" class="fullscreen-js">

    <div class="main-section">

      <div class="section-navigation"
        data-component="section-slider-navigation"
        data-align-center="true">

        <ul class="slider-wrapper">

          <li class="feel-item blog-info">
            <div class="section-hero">
              <div class="container">
                <h1 class="navigation--header"><span class="pre lower">The</span> experiences</h1>
              </div>
            </div>
          </li>

          <!-- item 1 | Gastro hotels -->

          <li class="feel-item">
            <a href="<?php echo $home_url . '/gastro-hotels/'; ?>">
              <div class="overlay-element">
                <div class="relative-wrapper">
                  <div class="img-wrapper">
                    <img src="<?php echo get_template_directory_uri() . '/assets/images/experiences/gastro-hotels.jpg'?>" alt="Gastro Hotels">
                  </div>
                  <div class="header-wrapper white">
                    <p class="navigation--header">gastro hotels</p>
                  </div>
                  <div class="overlay-ribond"></div>
                </div>
              </div>
            </a>
          </li>


          <!-- item 2 | Tech hotels -->
          <li class="feel-item">
            <div class="overlay-element inverted">
              <div class="relative-wrapper">
                <div class="img-wrapper">
                  <img src="<?php echo get_template_directory_uri() . '/assets/images/experiences/tech-hotels.jpg'?>" alt="Tech Hotels">
                </div>
                <div class="header-wrapper white">
                  <p class="navigation--header">tech hotels</p>
                </div>
                <div class="overlay-ribond"></div>
              </div>
            </div>
          </li>

          <!-- item 3 | Culture hotels -->
          <li class="feel-item">
            <div class="overlay-element">
              <div class="relative-wrapper">
                <div class="img-wrapper">
                  <img src="<?php echo get_template_directory_uri() . '/assets/images/experiences/culture-hotels.jpg'?>" alt="Culture Hotels">
                </div>
                <div class="header-wrapper white">
                  <p class="navigation--header">culture hotels</p>
                </div>
                <div class="overlay-ribond"></div>
              </div>
            </div>
          </li>

          <!-- item 4 | Art hotels -->
          <li class="feel-item">
            <div class="overlay-element inverted">
              <div class="relative-wrapper">
                <div class="img-wrapper">
                  <img src="<?php echo get_template_directory_uri() . '/assets/images/experiences/art-hotels.jpg'?>" alt="Art Hotels">
                </div>
                <div class="header-wrapper white">
                  <p class="navigation--header">art hotels</p>
                </div>
                <div class="overlay-ribond"></div>
              </div>
            </div>
          </li>

        </ul>
      </div>

    </div>

</div>


<?php get_footer(); ?>